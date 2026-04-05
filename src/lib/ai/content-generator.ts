import { db, type TimelineEvent, type FamousPerson, type City } from "@/lib/db";
import { generateContent, type AIClientConfig } from "./api-client";
import {
  getSystemPrompt,
  getNationPrompt,
  getCulturalCardsPrompt,
  getVocabularyPrompt,
  getCultureVocabPrompt,
  getTimelineIndexPrompt,
  getPeopleIndexPrompt,
  getCitiesIndexPrompt,
  getTimelineDetailPrompt,
  getPersonDetailPrompt,
  getCityDetailPrompt,
} from "./prompts";
import {
  parseAIJSON,
  validateNation,
  validateCulturalCards,
  validateVocabularyItems,
  validateTimelineEvents,
  validateFamousPeople,
  validateCities,
  validateTimelineDetail,
  validatePersonDetail,
  validateCityDetail,
} from "./validators";

export type StepName =
  | "nation"
  | "cultural_cards"
  | "vocabulary"
  | "culture_vocab"
  | "timeline_index"
  | "people_index"
  | "cities_index";

// Token limits per step — generous limits to avoid truncation
const STEP_MAX_TOKENS: Record<StepName, number> = {
  nation: 4000,
  cultural_cards: 16000,
  vocabulary: 16000,
  culture_vocab: 16000,
  timeline_index: 16000,
  people_index: 16000,
  cities_index: 12000,
};

export async function generateNationContent(
  nationId: string,
  nationName: string,
  languageId: string,
  config: AIClientConfig,
  onStepStart: (step: StepName, stepIndex: number) => void,
  onStepComplete: (step: StepName) => void
): Promise<void> {
  const systemPrompt = getSystemPrompt();

  // Check if we should resume from a partial generation
  const existingNation = await db.nations.get(nationId);

  const steps: {
    name: StepName;
    getPrompt: () => string;
    process: (raw: string) => Promise<void>;
    shouldSkip: () => Promise<boolean>;
  }[] = [
    {
      name: "nation",
      getPrompt: () => getNationPrompt(nationId, nationName),
      process: async (raw) => {
        const json = parseAIJSON(raw) as Record<string, unknown>;
        const nation = validateNation(json);
        if (!nation) throw new Error("Invalid nation data from AI");
        await db.nations.put(nation);
      },
      shouldSkip: async () => !!existingNation,
    },
    {
      name: "cultural_cards",
      getPrompt: () => getCulturalCardsPrompt(nationId, nationName),
      process: async (raw) => {
        const json = parseAIJSON(raw) as Record<string, unknown>;
        const cards = validateCulturalCards(Array.isArray(json) ? json : json.cards || json.cultural_cards || []);
        if (cards.length === 0) throw new Error("No valid cultural cards generated");
        await db.culturalCards.bulkPut(cards);
      },
      shouldSkip: async () => {
        const count = await db.culturalCards.where("nationId").equals(nationId).count();
        return count > 0;
      },
    },
    {
      name: "vocabulary",
      getPrompt: () => getVocabularyPrompt(nationId, nationName, languageId),
      process: async (raw) => {
        const json = parseAIJSON(raw) as Record<string, unknown>;
        const items = validateVocabularyItems(Array.isArray(json) ? json : json.vocabulary || json.items || []);
        if (items.length === 0) throw new Error("No valid vocabulary items generated");
        await db.vocabularyItems.bulkPut(items);
      },
      shouldSkip: async () => {
        const count = await db.vocabularyItems
          .where("languageId")
          .equals(languageId)
          .filter((v) => v.id.startsWith(nationId + "-vocab"))
          .count();
        return count > 0;
      },
    },
    {
      name: "culture_vocab",
      getPrompt: () => getCultureVocabPrompt(nationId, nationName, languageId),
      process: async (raw) => {
        const json = parseAIJSON(raw) as Record<string, unknown>;
        const items = validateVocabularyItems(Array.isArray(json) ? json : json.vocabulary || json.items || []);
        if (items.length === 0) throw new Error("No valid culture vocabulary generated");
        await db.vocabularyItems.bulkPut(items);
      },
      shouldSkip: async () => {
        const count = await db.vocabularyItems
          .where("languageId")
          .equals(languageId)
          .filter((v) => v.id.startsWith(nationId + "-cult"))
          .count();
        return count > 0;
      },
    },
    {
      name: "timeline_index",
      getPrompt: () => getTimelineIndexPrompt(nationId, nationName),
      process: async (raw) => {
        const json = parseAIJSON(raw) as Record<string, unknown>;
        const events = validateTimelineEvents(Array.isArray(json) ? json : json.events || json.timeline || []);
        if (events.length === 0) throw new Error("No valid timeline events generated");
        await db.timelineEvents.bulkPut(events);
      },
      shouldSkip: async () => {
        const count = await db.timelineEvents.where("nationId").equals(nationId).count();
        return count > 0;
      },
    },
    {
      name: "people_index",
      getPrompt: () => getPeopleIndexPrompt(nationId, nationName),
      process: async (raw) => {
        const json = parseAIJSON(raw) as Record<string, unknown>;
        const people = validateFamousPeople(Array.isArray(json) ? json : json.people || json.famous_people || []);
        if (people.length === 0) throw new Error("No valid famous people generated");
        await db.famousPeople.bulkPut(people);
      },
      shouldSkip: async () => {
        const count = await db.famousPeople.where("nationId").equals(nationId).count();
        return count > 0;
      },
    },
    {
      name: "cities_index",
      getPrompt: () => getCitiesIndexPrompt(nationId, nationName),
      process: async (raw) => {
        const json = parseAIJSON(raw) as Record<string, unknown>;
        const cities = validateCities(Array.isArray(json) ? json : json.cities || json.places || []);
        if (cities.length === 0) throw new Error("No valid cities generated");
        await db.cities.bulkPut(cities);
      },
      shouldSkip: async () => {
        const count = await db.cities.where("nationId").equals(nationId).count();
        return count > 0;
      },
    },
  ];

  for (let i = 0; i < steps.length; i++) {
    const step = steps[i];

    // Check if this step already has data (resume support)
    const skip = await step.shouldSkip();
    if (skip) {
      onStepStart(step.name, i);
      onStepComplete(step.name);
      continue;
    }

    onStepStart(step.name, i);

    try {
      const prompt = step.getPrompt();
      const maxTokens = STEP_MAX_TOKENS[step.name];
      const raw = await generateContent(config, systemPrompt, prompt, maxTokens);
      await step.process(raw);
    } catch (err) {
      const msg = err instanceof Error ? err.message : String(err);
      throw new Error(`Step "${step.name}" failed: ${msg}`);
    }

    onStepComplete(step.name);
  }
}

// ============================================
// On-demand detail generation
// ============================================

export type DetailTarget =
  | { type: "timeline"; event: TimelineEvent }
  | { type: "person"; person: FamousPerson }
  | { type: "city"; city: City };

export async function generateItemDetail(
  target: DetailTarget,
  nationName: string,
  config: AIClientConfig
): Promise<void> {
  const systemPrompt = getSystemPrompt();
  let prompt: string;
  const maxTokens = 4096;

  switch (target.type) {
    case "timeline":
      prompt = getTimelineDetailPrompt(target.event, nationName);
      break;
    case "person":
      prompt = getPersonDetailPrompt(target.person, nationName);
      break;
    case "city":
      prompt = getCityDetailPrompt(target.city, nationName);
      break;
  }

  const raw = await generateContent(config, systemPrompt, prompt, maxTokens);
  const json = parseAIJSON(raw) as Record<string, unknown>;

  switch (target.type) {
    case "timeline": {
      const detail = validateTimelineDetail(json);
      await db.timelineEvents.update(target.event.id, detail);
      break;
    }
    case "person": {
      const detail = validatePersonDetail(json);
      await db.famousPeople.update(target.person.id, detail);
      break;
    }
    case "city": {
      const detail = validateCityDetail(json);
      await db.cities.update(target.city.id, detail);
      break;
    }
  }
}

/** Load AI config from IndexedDB user settings */
export async function getAIConfig(): Promise<AIClientConfig> {
  const settings = await db.userSettings.toCollection().first();
  const provider = settings?.aiProvider || "openai";
  const apiKey =
    provider === "anthropic"
      ? settings?.anthropicApiKey
      : settings?.openaiApiKey;
  if (!apiKey) throw new Error("No API key configured");
  return { provider, apiKey };
}
