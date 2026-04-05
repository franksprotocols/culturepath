import Dexie, { type EntityTable } from "dexie";

// ---- Entities ----

export interface Nation {
  id: string;
  name_en: string;
  name_zh: string;
  flag: string;
  region: string;
  capital_en: string;
  capital_zh: string;
  population: string;
  languages: string[];
  overview_en: string;
  overview_zh: string;
}

export interface CulturalCard {
  id: string;
  nationId: string;
  category: "history" | "philosophy" | "daily_life" | "religion" | "people" | "ideas";
  title_en: string;
  title_zh: string;
  content_en: string;
  content_zh: string;
  relatedVocabulary: string[];
  era?: string;
  yearRange?: string;
  linkedTimelineIds?: string[];
  linkedPeopleIds?: string[];
  linkedCityIds?: string[];
  depthLevel?: "overview" | "intermediate" | "deep";
  readingTimeMinutes?: number;
  tags?: string[];
}

export interface TimelineEvent {
  id: string;
  nationId: string;
  year: number;
  yearEnd?: number;
  era: string;
  title_en: string;
  title_zh: string;
  summary_en: string;
  summary_zh: string;
  type: "era" | "event" | "person" | "cultural";
  icon: string;
  linkedCardIds: string[];
  linkedPeopleIds: string[];
  linkedCityIds: string[];
  linkedVocabIds: string[];
}

export interface FamousPerson {
  id: string;
  nationId: string;
  name_native: string;
  name_reading: string;
  name_en: string;
  name_zh: string;
  born: string;
  died?: string;
  era: string;
  domain: "politics" | "military" | "arts" | "literature" | "philosophy" | "science" | "religion" | "modern";
  title_en: string;
  title_zh: string;
  bio_en: string;
  bio_zh: string;
  whyFamous_en: string;
  whyFamous_zh: string;
  funFact_en: string;
  funFact_zh: string;
  linkedTimelineIds: string[];
  linkedVocabIds: string[];
  imageEmoji: string;
}

export interface City {
  id: string;
  nationId: string;
  name_native: string;
  name_reading: string;
  name_en: string;
  name_zh: string;
  region_en: string;
  region_zh: string;
  type: "capital" | "major_city" | "historic" | "cultural" | "natural";
  overview_en: string;
  overview_zh: string;
  whyVisit_en: string;
  whyVisit_zh: string;
  highlights_en: string[];
  highlights_zh: string[];
  linkedTimelineIds: string[];
  linkedPeopleIds: string[];
  linkedVocabIds: string[];
  coordinates?: { lat: number; lng: number };
}

export interface CultureSentence {
  id: string;
  nationId: string;
  languageId: string;
  category: "proverb" | "historical_quote" | "daily_cultural" | "literary" | "ceremonial" | "modern_slang";
  sentence_native: string;
  sentence_reading: string;
  translation_en: string;
  translation_zh: string;
  breakdown: {
    word: string;
    reading: string;
    meaning_en: string;
    meaning_zh: string;
    grammarNote?: string;
  }[];
  culturalContext_en: string;
  culturalContext_zh: string;
  origin_en: string;
  origin_zh: string;
  linkedCulturalCardIds: string[];
  linkedPeopleIds: string[];
  difficulty: 1 | 2 | 3 | 4 | 5;
  tags: string[];
}

export interface VocabularyItem {
  id: string;
  languageId: string;
  word: string;
  reading: string;
  translation_en: string;
  translation_zh: string;
  context_en: string;
  context_zh: string;
  culturalNote_en: string;
  culturalNote_zh: string;
  category: string;
  difficulty: 1 | 2 | 3 | 4 | 5;
}

export interface FlashcardReview {
  id?: number;
  vocabularyItemId: string;
  easeFactor: number;
  interval: number;
  repetitions: number;
  nextReviewDate: string;
  lastReviewDate: string;
}

export interface StudySession {
  id?: number;
  date: string;
  durationMinutes: number;
  itemsReviewed: number;
  itemsCorrect: number;
  focusArea: "vocabulary" | "listening" | "speaking" | "culture";
}

export interface UserProgress {
  id?: number;
  languageId: string;
  wordsLearned: number;
  totalStudyMinutes: number;
  currentStreak: number;
  longestStreak: number;
  lastStudyDate: string;
  level: string;
}

export interface UserSettings {
  id?: number;
  locale: "en" | "zh";
  dailyGoalMinutes: number;
  targetNations: string[];
  openaiApiKey?: string;
  anthropicApiKey?: string;
  aiProvider?: "openai" | "anthropic";
  ttsVoice?: string;
  ttsSpeed?: number;
}

export interface AudioCache {
  id?: number;
  text: string;
  languageId: string;
  audioBlob: Blob;
  createdAt: string;
}

// ---- Database ----

const db = new Dexie("CulturePathDB") as Dexie & {
  nations: EntityTable<Nation, "id">;
  culturalCards: EntityTable<CulturalCard, "id">;
  vocabularyItems: EntityTable<VocabularyItem, "id">;
  flashcardReviews: EntityTable<FlashcardReview, "id">;
  studySessions: EntityTable<StudySession, "id">;
  userProgress: EntityTable<UserProgress, "id">;
  userSettings: EntityTable<UserSettings, "id">;
  timelineEvents: EntityTable<TimelineEvent, "id">;
  famousPeople: EntityTable<FamousPerson, "id">;
  cities: EntityTable<City, "id">;
  cultureSentences: EntityTable<CultureSentence, "id">;
  audioCache: EntityTable<AudioCache, "id">;
};

db.version(1).stores({
  nations: "id, region",
  culturalCards: "id, nationId, category",
  vocabularyItems: "id, languageId, category, difficulty",
  flashcardReviews: "++id, vocabularyItemId, nextReviewDate",
  studySessions: "++id, date, focusArea",
  userProgress: "++id, languageId",
  userSettings: "++id",
});

db.version(2).stores({
  nations: "id, region",
  culturalCards: "id, nationId, category",
  vocabularyItems: "id, languageId, category, difficulty",
  flashcardReviews: "++id, vocabularyItemId, nextReviewDate",
  studySessions: "++id, date, focusArea",
  userProgress: "++id, languageId",
  userSettings: "++id",
  timelineEvents: "id, nationId, year, era, type",
  famousPeople: "id, nationId, era, domain",
  cities: "id, nationId, type",
  cultureSentences: "id, nationId, category, difficulty",
  audioCache: "++id, text, languageId",
});

// v3: adds anthropicApiKey & aiProvider to userSettings (no schema change needed)
db.version(3).stores({
  nations: "id, region",
  culturalCards: "id, nationId, category",
  vocabularyItems: "id, languageId, category, difficulty",
  flashcardReviews: "++id, vocabularyItemId, nextReviewDate",
  studySessions: "++id, date, focusArea",
  userProgress: "++id, languageId",
  userSettings: "++id",
  timelineEvents: "id, nationId, year, era, type",
  famousPeople: "id, nationId, era, domain",
  cities: "id, nationId, type",
  cultureSentences: "id, nationId, category, difficulty",
  audioCache: "++id, text, languageId",
});

export { db };
