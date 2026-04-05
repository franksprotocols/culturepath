const JSON_RULES = `
CRITICAL JSON RULES — follow these exactly:
- Return ONLY a single valid JSON object or array. No markdown, no code fences, no explanation.
- All string values must be on a SINGLE LINE. Use \\n for line breaks within strings, never actual newlines.
- Escape all double quotes inside strings with backslash: \\"
- Do NOT use smart/curly quotes. Only use standard ASCII double quotes.
- No trailing commas after the last item in arrays or objects.`;

const SYSTEM_PROMPT = `You are generating cultural education content for CulturePath, a bilingual (English + Simplified Chinese) culture learning app.
${JSON_RULES}`;

export function getSystemPrompt(): string {
  return SYSTEM_PROMPT;
}

export function getNationPrompt(nationId: string, nationName: string): string {
  return `Generate Nation metadata for "${nationName}". Return a single JSON object:
{"id":"${nationId}","name_en":"...","name_zh":"...","flag":"...","region":"...","capital_en":"...","capital_zh":"...","population":"...","languages":["..."],"overview_en":"2-3 sentences","overview_zh":"Chinese translation"}`;
}

export function getCulturalCardsPrompt(nationId: string, nationName: string): string {
  return `Generate 20 cultural insight cards for "${nationName}".
Return: {"cards":[...array of cards...]}

Each card object:
{"id":"${nationId}-card-001","nationId":"${nationId}","category":"history","title_en":"Short title","title_zh":"中文标题","content_en":"2-3 sentences about this topic. Keep on one line using \\n for breaks.","content_zh":"中文翻译","relatedVocabulary":[],"depthLevel":"overview","tags":["tag1"]}

category must be one of: history, philosophy, daily_life, religion, people, ideas
depthLevel must be one of: overview, intermediate, deep
Distribute across all 6 categories (~3-4 each). Keep content_en and content_zh concise (2-4 sentences each).
IDs: ${nationId}-card-001 through ${nationId}-card-020.`;
}

export function getVocabularyPrompt(nationId: string, nationName: string, languageId: string): string {
  return `Generate 25 daily-use vocabulary items for learning ${languageId} (language of ${nationName}).
Return: {"vocabulary":[...array...]}

Each item:
{"id":"${nationId}-vocab-001","languageId":"${languageId}","word":"native script","reading":"romanization","translation_en":"English","translation_zh":"中文","context_en":"One sentence example","context_zh":"中文例句","culturalNote_en":"Brief note","culturalNote_zh":"中文注释","category":"greetings","difficulty":1}

category: greetings, food, travel, daily_life, emotions, or numbers
difficulty: 1-5
IDs: ${nationId}-vocab-001 through ${nationId}-vocab-025.`;
}

export function getCultureVocabPrompt(nationId: string, nationName: string, languageId: string): string {
  return `Generate 25 culture-specific vocabulary for "${nationName}" (${languageId}) — words deeply tied to the culture with no direct translation.
Return: {"vocabulary":[...array...]}

Each item:
{"id":"${nationId}-cult-001","languageId":"${languageId}","word":"native script","reading":"romanization","translation_en":"English approximation","translation_zh":"中文近义","context_en":"One sentence context","context_zh":"中文语境","culturalNote_en":"Cultural significance in one sentence","culturalNote_zh":"中文注释","category":"philosophy","difficulty":3}

category: philosophy, art, food, social, nature, spiritual, or historical
IDs: ${nationId}-cult-001 through ${nationId}-cult-025.`;
}

// ============================================
// INDEX PROMPTS — lightweight, for upfront generation
// ============================================

export function getTimelineIndexPrompt(nationId: string, nationName: string): string {
  return `Generate an index of 45 major historical events for "${nationName}" from earliest history to present day.
Return: {"events":[...array...]}

Each event (INDEX ONLY — do NOT include summaries):
{"id":"${nationId}-tl-001","nationId":"${nationId}","year":-3000,"yearEnd":-2500,"era":"Era Name","title_en":"Short descriptive title","title_zh":"中文标题","type":"era","icon":"📜"}

type: era, event, person, or cultural
Include at least one "era" type event per major era with yearEnd for era span.
Chronological order. Use the nation's own era names.
Cover ALL major eras thoroughly — ancient origins through modern day.
IDs: ${nationId}-tl-001 through ${nationId}-tl-045.`;
}

export function getPeopleIndexPrompt(nationId: string, nationName: string): string {
  return `Generate an index of 28 famous figures from "${nationName}" (diverse mix of ancient and modern).
Return: {"people":[...array...]}

Each person (INDEX ONLY — do NOT include bio, whyFamous, or funFact):
{"id":"${nationId}-ppl-001","nationId":"${nationId}","name_native":"Native script","name_reading":"Romanized","name_en":"English","name_zh":"中文","born":"year","died":"year or null","era":"Era","domain":"arts","title_en":"5-8 word epithet","title_zh":"中文称号","imageEmoji":"🎨"}

domain: politics, military, arts, literature, philosophy, science, religion, or modern
Include political leaders, scientists, artists, literary figures, philosophers, religious leaders, and modern icons.
IDs: ${nationId}-ppl-001 through ${nationId}-ppl-028.`;
}

export function getCitiesIndexPrompt(nationId: string, nationName: string): string {
  return `Generate an index of 18 notable cities/places in "${nationName}".
Return: {"cities":[...array...]}

Each city (INDEX ONLY — do NOT include overview, whyVisit, or highlights):
{"id":"${nationId}-city-001","nationId":"${nationId}","name_native":"Native","name_reading":"Romanized","name_en":"English","name_zh":"中文","region_en":"Region","region_zh":"中文地区","type":"capital","coordinates":{"lat":48.85,"lng":2.35}}

type: capital, major_city, historic, cultural, or natural
Include great modern cities, ancient capitals, cultural landmarks, and natural wonders.
IDs: ${nationId}-city-001 through ${nationId}-city-018.`;
}

// ============================================
// DETAIL PROMPTS — per-item, on-demand generation
// ============================================

export function getTimelineDetailPrompt(
  event: { title_en: string; title_zh: string; year: number; era: string; type: string },
  nationName: string
): string {
  return `Generate detailed bilingual content for this historical event of "${nationName}".
Event: "${event.title_en}" / "${event.title_zh}" (year: ${event.year}, era: ${event.era}, type: ${event.type})

Return a single JSON object with EXACTLY two keys:
{"summary_en":"2-3 sentences about this event and its significance","summary_zh":"中文摘要（2-3句）"}

Keep each summary concise (under 150 words). Do not include any other keys.`;
}

export function getPersonDetailPrompt(
  person: { name_en: string; name_zh: string; born: string; era: string; domain: string; title_en: string },
  nationName: string
): string {
  return `Generate detailed bilingual content for this famous person from "${nationName}".
Person: "${person.name_en}" / "${person.name_zh}" (${person.title_en}, born ${person.born}, era: ${person.era}, domain: ${person.domain})

Return a single JSON object:
{"bio_en":"3-5 sentence biography covering life, major achievements, and legacy","bio_zh":"中文传记（3-5句，涵盖生平、成就和影响）","whyFamous_en":"One detailed sentence on their greatest contribution","whyFamous_zh":"中文（最重要的贡献）","funFact_en":"One interesting or surprising fact","funFact_zh":"中文趣闻"}

Provide rich biographical content with cultural significance.`;
}

export function getCityDetailPrompt(
  city: { name_en: string; name_zh: string; region_en: string; type: string },
  nationName: string
): string {
  return `Generate detailed bilingual content for this place in "${nationName}".
City: "${city.name_en}" / "${city.name_zh}" (region: ${city.region_en}, type: ${city.type})

Return a single JSON object:
{"overview_en":"3-5 sentences covering history, culture, economy, and significance","overview_zh":"中文概述（3-5句，涵盖历史、文化、经济和重要性）","whyVisit_en":"One compelling sentence","whyVisit_zh":"中文推荐理由","highlights_en":["highlight1","highlight2","highlight3","highlight4","highlight5"],"highlights_zh":["亮点1","亮点2","亮点3","亮点4","亮点5"]}

Provide rich travel and cultural content including famous landmarks, cultural features, and economic significance.`;
}
