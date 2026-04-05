import type {
  Nation,
  CulturalCard,
  VocabularyItem,
  TimelineEvent,
  FamousPerson,
  City,
} from "@/lib/db";

function isString(v: unknown): v is string {
  return typeof v === "string" && v.length > 0;
}

function isNumber(v: unknown): v is number {
  return typeof v === "number" && !isNaN(v);
}

function isStringArray(v: unknown): v is string[] {
  return Array.isArray(v) && v.every((i) => typeof i === "string");
}

export function validateNation(data: unknown): Nation | null {
  if (!data || typeof data !== "object") return null;
  const d = data as Record<string, unknown>;

  if (
    !isString(d.id) ||
    !isString(d.name_en) ||
    !isString(d.name_zh) ||
    !isString(d.flag) ||
    !isString(d.region) ||
    !isString(d.capital_en) ||
    !isString(d.capital_zh) ||
    !isString(d.population) ||
    !isStringArray(d.languages) ||
    !isString(d.overview_en) ||
    !isString(d.overview_zh)
  ) {
    return null;
  }

  return d as unknown as Nation;
}

const validCardCategories = new Set([
  "history",
  "philosophy",
  "daily_life",
  "religion",
  "people",
  "ideas",
]);

export function validateCulturalCards(data: unknown): CulturalCard[] {
  if (!Array.isArray(data)) return [];
  return data.filter((item) => {
    if (!item || typeof item !== "object") return false;
    const d = item as Record<string, unknown>;
    return (
      isString(d.id) &&
      isString(d.nationId) &&
      isString(d.category) &&
      validCardCategories.has(d.category as string) &&
      isString(d.title_en) &&
      isString(d.title_zh) &&
      isString(d.content_en) &&
      isString(d.content_zh)
    );
  }).map((item) => {
    const d = item as Record<string, unknown>;
    return {
      ...d,
      relatedVocabulary: isStringArray(d.relatedVocabulary) ? d.relatedVocabulary : [],
      tags: isStringArray(d.tags) ? d.tags : [],
    } as unknown as CulturalCard;
  });
}

export function validateVocabularyItems(data: unknown): VocabularyItem[] {
  if (!Array.isArray(data)) return [];
  return data.filter((item) => {
    if (!item || typeof item !== "object") return false;
    const d = item as Record<string, unknown>;
    return (
      isString(d.id) &&
      isString(d.languageId) &&
      isString(d.word) &&
      isString(d.reading) &&
      isString(d.translation_en) &&
      isString(d.translation_zh) &&
      isString(d.category)
    );
  }).map((item) => {
    const d = item as Record<string, unknown>;
    return {
      ...d,
      context_en: isString(d.context_en) ? d.context_en : "",
      context_zh: isString(d.context_zh) ? d.context_zh : "",
      culturalNote_en: isString(d.culturalNote_en) ? d.culturalNote_en : "",
      culturalNote_zh: isString(d.culturalNote_zh) ? d.culturalNote_zh : "",
      difficulty: isNumber(d.difficulty) ? Math.min(5, Math.max(1, d.difficulty)) : 3,
    } as unknown as VocabularyItem;
  });
}

const validTimelineTypes = new Set(["era", "event", "person", "cultural"]);

export function validateTimelineEvents(data: unknown): TimelineEvent[] {
  if (!Array.isArray(data)) return [];
  return data.filter((item) => {
    if (!item || typeof item !== "object") return false;
    const d = item as Record<string, unknown>;
    return (
      isString(d.id) &&
      isString(d.nationId) &&
      isNumber(d.year) &&
      isString(d.era) &&
      isString(d.title_en) &&
      isString(d.title_zh) &&
      isString(d.type) &&
      validTimelineTypes.has(d.type as string)
    );
  }).map((item) => {
    const d = item as Record<string, unknown>;
    return {
      ...d,
      summary_en: typeof d.summary_en === "string" ? d.summary_en : "",
      summary_zh: typeof d.summary_zh === "string" ? d.summary_zh : "",
      icon: isString(d.icon) ? d.icon : "📌",
      linkedCardIds: isStringArray(d.linkedCardIds) ? d.linkedCardIds : [],
      linkedPeopleIds: isStringArray(d.linkedPeopleIds) ? d.linkedPeopleIds : [],
      linkedCityIds: isStringArray(d.linkedCityIds) ? d.linkedCityIds : [],
      linkedVocabIds: isStringArray(d.linkedVocabIds) ? d.linkedVocabIds : [],
    } as unknown as TimelineEvent;
  });
}

const validDomains = new Set([
  "politics",
  "military",
  "arts",
  "literature",
  "philosophy",
  "science",
  "religion",
  "modern",
]);

export function validateFamousPeople(data: unknown): FamousPerson[] {
  if (!Array.isArray(data)) return [];
  return data.filter((item) => {
    if (!item || typeof item !== "object") return false;
    const d = item as Record<string, unknown>;
    return (
      isString(d.id) &&
      isString(d.nationId) &&
      isString(d.name_en) &&
      isString(d.name_zh) &&
      isString(d.born) &&
      isString(d.era) &&
      isString(d.domain) &&
      validDomains.has(d.domain as string)
    );
  }).map((item) => {
    const d = item as Record<string, unknown>;
    return {
      ...d,
      name_native: isString(d.name_native) ? d.name_native : d.name_en,
      name_reading: isString(d.name_reading) ? d.name_reading : "",
      title_en: isString(d.title_en) ? d.title_en : "",
      title_zh: isString(d.title_zh) ? d.title_zh : "",
      bio_en: isString(d.bio_en) ? d.bio_en : "",
      bio_zh: isString(d.bio_zh) ? d.bio_zh : "",
      whyFamous_en: isString(d.whyFamous_en) ? d.whyFamous_en : "",
      whyFamous_zh: isString(d.whyFamous_zh) ? d.whyFamous_zh : "",
      funFact_en: isString(d.funFact_en) ? d.funFact_en : "",
      funFact_zh: isString(d.funFact_zh) ? d.funFact_zh : "",
      linkedTimelineIds: isStringArray(d.linkedTimelineIds) ? d.linkedTimelineIds : [],
      linkedVocabIds: isStringArray(d.linkedVocabIds) ? d.linkedVocabIds : [],
      imageEmoji: isString(d.imageEmoji) ? d.imageEmoji : "👤",
    } as unknown as FamousPerson;
  });
}

const validCityTypes = new Set([
  "capital",
  "major_city",
  "historic",
  "cultural",
  "natural",
]);

export function validateCities(data: unknown): City[] {
  if (!Array.isArray(data)) return [];
  return data.filter((item) => {
    if (!item || typeof item !== "object") return false;
    const d = item as Record<string, unknown>;
    return (
      isString(d.id) &&
      isString(d.nationId) &&
      isString(d.name_en) &&
      isString(d.name_zh) &&
      isString(d.type) &&
      validCityTypes.has(d.type as string)
    );
  }).map((item) => {
    const d = item as Record<string, unknown>;
    const coords = d.coordinates as Record<string, unknown> | undefined;
    return {
      ...d,
      name_native: isString(d.name_native) ? d.name_native : d.name_en,
      name_reading: isString(d.name_reading) ? d.name_reading : "",
      region_en: isString(d.region_en) ? d.region_en : "",
      region_zh: isString(d.region_zh) ? d.region_zh : "",
      overview_en: isString(d.overview_en) ? d.overview_en : "",
      overview_zh: isString(d.overview_zh) ? d.overview_zh : "",
      whyVisit_en: isString(d.whyVisit_en) ? d.whyVisit_en : "",
      whyVisit_zh: isString(d.whyVisit_zh) ? d.whyVisit_zh : "",
      highlights_en: isStringArray(d.highlights_en) ? d.highlights_en : [],
      highlights_zh: isStringArray(d.highlights_zh) ? d.highlights_zh : [],
      linkedTimelineIds: isStringArray(d.linkedTimelineIds) ? d.linkedTimelineIds : [],
      linkedPeopleIds: isStringArray(d.linkedPeopleIds) ? d.linkedPeopleIds : [],
      linkedVocabIds: isStringArray(d.linkedVocabIds) ? d.linkedVocabIds : [],
      coordinates:
        coords && isNumber(coords.lat) && isNumber(coords.lng)
          ? { lat: coords.lat as number, lng: coords.lng as number }
          : undefined,
    } as unknown as City;
  });
}

// --- Detail validators for on-demand loading ---

export function validateTimelineDetail(data: Record<string, unknown>) {
  return {
    summary_en: typeof data.summary_en === "string" ? data.summary_en : "",
    summary_zh: typeof data.summary_zh === "string" ? data.summary_zh : "",
    linkedCardIds: isStringArray(data.linkedCardIds) ? data.linkedCardIds : [],
    linkedPeopleIds: isStringArray(data.linkedPeopleIds) ? data.linkedPeopleIds : [],
    linkedCityIds: isStringArray(data.linkedCityIds) ? data.linkedCityIds : [],
    linkedVocabIds: isStringArray(data.linkedVocabIds) ? data.linkedVocabIds : [],
  };
}

export function validatePersonDetail(data: Record<string, unknown>) {
  return {
    bio_en: typeof data.bio_en === "string" ? data.bio_en : "",
    bio_zh: typeof data.bio_zh === "string" ? data.bio_zh : "",
    whyFamous_en: typeof data.whyFamous_en === "string" ? data.whyFamous_en : "",
    whyFamous_zh: typeof data.whyFamous_zh === "string" ? data.whyFamous_zh : "",
    funFact_en: typeof data.funFact_en === "string" ? data.funFact_en : "",
    funFact_zh: typeof data.funFact_zh === "string" ? data.funFact_zh : "",
    linkedTimelineIds: isStringArray(data.linkedTimelineIds) ? data.linkedTimelineIds : [],
    linkedVocabIds: isStringArray(data.linkedVocabIds) ? data.linkedVocabIds : [],
  };
}

export function validateCityDetail(data: Record<string, unknown>) {
  return {
    overview_en: typeof data.overview_en === "string" ? data.overview_en : "",
    overview_zh: typeof data.overview_zh === "string" ? data.overview_zh : "",
    whyVisit_en: typeof data.whyVisit_en === "string" ? data.whyVisit_en : "",
    whyVisit_zh: typeof data.whyVisit_zh === "string" ? data.whyVisit_zh : "",
    highlights_en: isStringArray(data.highlights_en) ? data.highlights_en : [],
    highlights_zh: isStringArray(data.highlights_zh) ? data.highlights_zh : [],
    linkedTimelineIds: isStringArray(data.linkedTimelineIds) ? data.linkedTimelineIds : [],
    linkedPeopleIds: isStringArray(data.linkedPeopleIds) ? data.linkedPeopleIds : [],
    linkedVocabIds: isStringArray(data.linkedVocabIds) ? data.linkedVocabIds : [],
  };
}

/**
 * Extract JSON from a response that may contain markdown code blocks or preamble text.
 */
export function extractJSON(text: string): string {
  // Try to find JSON in code blocks first
  const codeBlockMatch = text.match(/```(?:json)?\s*([\s\S]*?)```/);
  if (codeBlockMatch) {
    return codeBlockMatch[1].trim();
  }

  // Find the first { or [ — whichever appears first is the JSON start
  const objStart = text.indexOf("{");
  const arrStart = text.indexOf("[");

  let jsonStart: number;
  let jsonEnd: number;

  if (objStart === -1 && arrStart === -1) {
    return text.trim();
  } else if (objStart === -1) {
    jsonStart = arrStart;
    jsonEnd = text.lastIndexOf("]");
  } else if (arrStart === -1) {
    jsonStart = objStart;
    jsonEnd = text.lastIndexOf("}");
  } else {
    if (objStart < arrStart) {
      jsonStart = objStart;
      jsonEnd = text.lastIndexOf("}");
    } else {
      jsonStart = arrStart;
      jsonEnd = text.lastIndexOf("]");
    }
  }

  if (jsonStart !== -1 && jsonEnd !== -1 && jsonEnd > jsonStart) {
    return text.substring(jsonStart, jsonEnd + 1);
  }

  return text.trim();
}

/**
 * Fix common JSON issues from LLM output:
 * - Literal newlines/tabs inside string values
 * - Unescaped quotes inside strings
 * - Trailing commas
 * - Smart/curly quotes
 */
export function sanitizeJSON(text: string): string {
  // Replace smart quotes with regular quotes
  let s = text
    .replace(/[\u201C\u201D\u201E\u201F\u2033\u2036]/g, '"')
    .replace(/[\u2018\u2019\u201A\u201B\u2032\u2035]/g, "'");

  // Fix literal newlines/tabs inside JSON string values
  // Walk through character by character
  const chars: string[] = [];
  let inString = false;
  let escaped = false;

  for (let i = 0; i < s.length; i++) {
    const ch = s[i];

    if (escaped) {
      chars.push(ch);
      escaped = false;
      continue;
    }

    if (ch === "\\") {
      chars.push(ch);
      escaped = true;
      continue;
    }

    if (ch === '"') {
      inString = !inString;
      chars.push(ch);
      continue;
    }

    if (inString) {
      if (ch === "\n") {
        chars.push("\\n");
        continue;
      }
      if (ch === "\r") {
        continue; // skip CR
      }
      if (ch === "\t") {
        chars.push("\\t");
        continue;
      }
    }

    chars.push(ch);
  }

  s = chars.join("");

  // Remove trailing commas before } or ]
  s = s.replace(/,\s*([\]}])/g, "$1");

  return s;
}

/**
 * Full pipeline: extract → sanitize → parse, with truncation repair fallback.
 */
export function parseAIJSON(raw: string): unknown {
  const extracted = extractJSON(raw);
  const sanitized = sanitizeJSON(extracted);

  // Try direct parse
  try {
    return JSON.parse(sanitized);
  } catch {
    // Try truncation repair
  }

  // Find the last complete object (ending with },) and try all closing combos
  const lastComplete = sanitized.lastIndexOf("},");
  if (lastComplete > 0) {
    const base = sanitized.substring(0, lastComplete + 1);
    const closings = ["]}", "]}}", "]", "}", "]]", "}}"];
    for (const closing of closings) {
      try {
        return JSON.parse(base + closing);
      } catch {
        continue;
      }
    }
  }

  // Try from last } instead
  const lastBrace = sanitized.lastIndexOf("}");
  if (lastBrace > 0) {
    const base = sanitized.substring(0, lastBrace + 1);
    const closings = ["]}", "}", "]", "]}"];
    for (const closing of closings) {
      try {
        return JSON.parse(base + closing);
      } catch {
        continue;
      }
    }
  }

  // Try to repair a truncated single object: {"key":"value...
  // Find the last complete key-value pair ending with ","
  const lastCommaQuote = sanitized.lastIndexOf('","');
  if (lastCommaQuote > 0) {
    // Find the end of the value after the last complete ","
    const afterComma = lastCommaQuote + 2; // position of the '"' starting next key
    const base = sanitized.substring(0, afterComma - 1); // up to and including the comma
    // Try closing with just }
    for (const closing of ["}", "}]", "}}"]) {
      try {
        // Remove trailing comma and close
        const attempt = base.replace(/,\s*$/, "") + closing;
        return JSON.parse(attempt);
      } catch { continue; }
    }
  }

  // Last resort for truncated single-field object: {"key":"value...
  // Just close the string and object
  if (sanitized.startsWith("{") && !sanitized.endsWith("}")) {
    // Try to salvage by closing the truncated string
    const trimmed = sanitized.replace(/[^"]*$/, ""); // remove everything after last quote
    for (const closing of ["}", "}]"]) {
      try {
        return JSON.parse(trimmed + closing);
      } catch { continue; }
    }
  }

  // Nuclear fallback: extract individual JSON objects via brace-matching
  // This works even when the overall structure is broken
  const objects = extractIndividualObjects(sanitized);
  if (objects.length > 0) {
    return objects;
  }

  // Last resort: throw with a helpful snippet
  throw new Error(
    `Invalid JSON from AI. First 200 chars: ${raw.substring(0, 200)}`
  );
}

/**
 * Extract individual complete JSON objects from a broken/truncated response.
 * Uses brace depth tracking to find complete {...} objects.
 */
function extractIndividualObjects(text: string): Record<string, unknown>[] {
  const results: Record<string, unknown>[] = [];
  let i = 0;

  while (i < text.length) {
    // Find next { that looks like it starts an object with "id":
    const start = text.indexOf('{"id"', i);
    if (start === -1) break;

    // Track brace depth to find matching }
    let depth = 0;
    let inStr = false;
    let esc = false;
    let end = -1;

    for (let j = start; j < text.length; j++) {
      const ch = text[j];
      if (esc) { esc = false; continue; }
      if (ch === "\\") { esc = true; continue; }
      if (ch === '"') { inStr = !inStr; continue; }
      if (inStr) continue;
      if (ch === "{") depth++;
      if (ch === "}") {
        depth--;
        if (depth === 0) { end = j; break; }
      }
    }

    if (end === -1) break; // incomplete object, stop

    const objStr = text.substring(start, end + 1);
    try {
      const obj = JSON.parse(objStr);
      if (obj && typeof obj === "object" && obj.id) {
        results.push(obj as Record<string, unknown>);
      }
    } catch {
      // skip malformed object
    }

    i = end + 1;
  }

  return results;
}
