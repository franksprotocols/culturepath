# CulturePath — Culture Module Replan

**Date:** 2026-04-05
**Scope:** Japan (single-nation deep dive first)
**Status:** Planning

---

## Overview

This replan restructures the cultural and language modules into two major pillars:

1. **Deep Nation Knowledge** — an interactive timeline + wiki system for history, geography, people, cities, philosophy
2. **Language Study (2 tracks)** — daily-use language with audio, and culture-linked language study

---

## Pillar 1: Deep Nation Knowledge

### Goal
Transform the current flat cultural cards into a rich, interconnected knowledge system that helps a foreigner who is *extremely* interested in Japan to study it like a passionate fan — not a textbook student.

### 1.1 Interactive Timeline (New Page: `/timeline`)

A scrollable, visual timeline that serves as the **navigation backbone** for all nation knowledge.

**Data Model — New `TimelineEvent` entity:**
```typescript
interface TimelineEvent {
  id: string;
  nationId: string;
  year: number;           // negative for BCE
  yearEnd?: number;       // for periods/eras
  era: string;            // "Jomon", "Heian", "Edo", etc.
  title_en: string;
  title_zh: string;
  summary_en: string;     // 1-2 sentence hook
  summary_zh: string;
  type: "era" | "event" | "person" | "cultural";
  icon: string;           // emoji or icon key
  linkedCardIds: string[];      // links to deep CulturalCard
  linkedPeopleIds: string[];    // links to FamousPerson
  linkedCityIds: string[];      // links to City
  linkedVocabIds: string[];     // links to VocabularyItem
}
```

**UI Design:**
- Vertical timeline with era bands (color-coded: ancient = earth tones, medieval = steel, modern = blue)
- Each node is tappable → opens a deep lesson card (existing CulturalCard system, expanded)
- Era headers span the timeline as section dividers
- Floating "jump to era" quick-nav on the side
- Small thumbnails/icons on each node to make it visually engaging

**Content Plan for Japan (minimum seed data):**

| Era | Year Range | Events/Nodes |
|-----|-----------|--------------|
| Jomon | 14000–300 BCE | Origins, pottery culture, spirituality |
| Yayoi | 300 BCE–300 CE | Rice agriculture, metalwork, proto-states |
| Kofun/Asuka | 300–710 | Yamato kingdom, Buddhism arrives, Prince Shotoku |
| Nara | 710–794 | First capital, Tang influence, Great Buddha |
| Heian | 794–1185 | Tale of Genji, kana, court culture peak |
| Kamakura | 1185–1333 | Samurai rise, Mongol invasions, Zen Buddhism |
| Muromachi | 1336–1573 | Tea ceremony, Noh theater, Onin War |
| Sengoku | 1467–1615 | Nobunaga, Hideyoshi, Ieyasu, European contact |
| Edo | 1603–1868 | Sakoku, ukiyo-e, kabuki, merchant culture |
| Meiji | 1868–1912 | Modernization, constitution, industrialization |
| Taisho | 1912–1926 | Democracy movement, cultural liberalization |
| Showa (pre-war) | 1926–1945 | Militarism, WWII, atomic bombs |
| Showa (post-war) | 1945–1989 | Occupation, economic miracle, tech boom |
| Heisei | 1989–2019 | Bubble burst, anime global rise, disasters |
| Reiwa | 2019–present | Current era, tech culture, soft power |

~40-60 timeline nodes total.

---

### 1.2 Famous People (New Page: `/people`)

**Data Model — New `FamousPerson` entity:**
```typescript
interface FamousPerson {
  id: string;
  nationId: string;
  name_native: string;      // 織田信長
  name_reading: string;     // Oda Nobunaga
  name_en: string;
  name_zh: string;
  born: string;             // "1534" or "c. 8th century"
  died?: string;
  era: string;
  domain: "politics" | "military" | "arts" | "literature" | "philosophy" | "science" | "religion" | "modern";
  title_en: string;         // "The Unifier Who Changed Everything"
  title_zh: string;
  bio_en: string;           // 2-3 paragraph rich bio
  bio_zh: string;
  whyFamous_en: string;     // 1 sentence hook
  whyFamous_zh: string;
  funFact_en: string;
  funFact_zh: string;
  linkedTimelineIds: string[];
  linkedVocabIds: string[];
  imageEmoji: string;       // visual placeholder (⚔️, 🎭, 📖, etc.)
}
```

**Content Plan (initial seed — ~25 people):**

| Domain | People |
|--------|--------|
| Military/Politics | Oda Nobunaga, Toyotomi Hideyoshi, Tokugawa Ieyasu, Emperor Meiji, Saigō Takamori |
| Literature | Murasaki Shikibu, Sei Shōnagon, Matsuo Bashō, Natsume Sōseki, Haruki Murakami |
| Arts | Hokusai, Hiroshige, Sen no Rikyū, Akira Kurosawa, Hayao Miyazaki |
| Philosophy/Religion | Prince Shōtoku, Kūkai, Dōgen, Nitobe Inazō |
| Science/Modern | Yukawa Hideki, Akio Morita (Sony), Shigeru Miyamoto (Nintendo), Marie Kondo |
| Martial Arts | Miyamoto Musashi, Morihei Ueshiba (Aikido) |

**UI Design:**
- Grid of portrait cards (emoji avatar + name + era badge + 1-line hook)
- Filter by domain and era
- Tap → full bio page with linked timeline events and vocabulary
- "Related people" section (contemporaries, rivals, influences)

---

### 1.3 Cities & Geography (New Page: `/places`)

**Data Model — New `City` entity:**
```typescript
interface City {
  id: string;
  nationId: string;
  name_native: string;     // 京都
  name_reading: string;    // Kyōto
  name_en: string;
  name_zh: string;
  region_en: string;       // "Kansai"
  region_zh: string;
  type: "capital" | "major_city" | "historic" | "cultural" | "natural";
  overview_en: string;     // 2-3 paragraph description
  overview_zh: string;
  whyVisit_en: string;     // traveler hook
  whyVisit_zh: string;
  highlights_en: string[]; // "Fushimi Inari Shrine", "Kinkaku-ji"
  highlights_zh: string[];
  linkedTimelineIds: string[];
  linkedPeopleIds: string[];
  linkedVocabIds: string[];
  coordinates?: { lat: number; lng: number };
}
```

**Content Plan (initial seed — ~15 cities/locations):**

| Type | Places |
|------|--------|
| Capital | Tokyo (Edo → modern transformation) |
| Historic capitals | Kyoto, Nara, Kamakura |
| Major cities | Osaka, Hiroshima, Nagasaki, Sapporo, Fukuoka |
| Cultural sites | Mount Fuji, Nikko, Ise Grand Shrine |
| Modern interest | Akihabara (tech/anime), Shibuya, Okinawa |

**UI Design:**
- Simple illustrated map of Japan with tappable pins (no external map API needed — SVG or static)
- List view alternative with filter by region/type
- Each city card: name, region badge, overview, highlights, linked history and people
- "Why visit" section for travel-minded learners

---

### 1.4 Philosophy & Concepts (Expand existing category)

Instead of a new page, this **enriches the Explore page** with deeper, interlinked concept cards.

**New content areas to seed:**
- Shinto: kami, purification, shrine culture, matsuri festivals
- Buddhism in Japan: Zen, Pure Land, temple culture, meditation
- Aesthetic concepts: wabi-sabi (侘寂), mono no aware (物の哀れ), ikigai (生き甲斐), ma (間)
- Social concepts: wa (和 harmony), giri (義理 obligation), omotenashi (おもてなし hospitality)
- Modern philosophy: kaizen (改善), kodawari (こだわり craftsmanship), shokunin (職人 artisan spirit)

Each concept gets a CulturalCard with deep bilingual explanation + linked vocabulary.

---

### 1.5 Enhanced CulturalCard Model

Expand the existing CulturalCard to support cross-linking:

```typescript
interface CulturalCard {
  // ... existing fields ...

  // New fields:
  era?: string;                    // for timeline linking
  yearRange?: string;              // "794-1185"
  linkedTimelineIds?: string[];
  linkedPeopleIds?: string[];
  linkedCityIds?: string[];
  depthLevel: "overview" | "intermediate" | "deep";  // progressive depth
  readingTimeMinutes: number;      // estimated reading time
  tags: string[];                  // for search and filtering
}
```

---

## Pillar 2: Language Study

### 2.1 Daily-Use Language with Audio (Enhance existing `/flashcards`)

**Goal:** Add native-quality audio pronunciation to all vocabulary and sentences.

**Technical Approach — Cloud TTS (OpenAI TTS API):**

```typescript
// New: src/lib/tts.ts
interface TTSConfig {
  provider: "openai";       // future: "elevenlabs"
  model: "tts-1" | "tts-1-hd";
  voice: "alloy" | "echo" | "fable" | "onyx" | "nova" | "shimmer";
  speed: number;            // 0.25 to 4.0
}

interface AudioCache {
  id: string;
  text: string;
  languageId: string;
  audioBlob: Blob;          // cached in IndexedDB
  createdAt: string;
}
```

**Implementation Plan:**

1. **TTS Service Layer** (`src/lib/tts.ts`)
   - Wrapper around OpenAI TTS API (`POST /v1/audio/speech`)
   - User provides their own API key (stored in UserSettings, never sent anywhere else)
   - Audio caching in IndexedDB — generate once, replay forever
   - Fallback to Web Speech API if no API key configured

2. **Audio Player Component** (`src/components/audio-player.tsx`)
   - Play button (🔊) on every vocabulary card and sentence
   - Speed control: slow (0.75x), normal (1.0x), slow-clear (0.5x)
   - Auto-play mode for immersive listening sessions
   - Visual waveform or simple animation while playing

3. **Listening Practice Mode** (new tab in `/flashcards`)
   - Audio-first flashcards: hear the word → guess the meaning
   - Sentence listening: hear a full sentence → see the text after
   - Shadowing mode: listen → pause → repeat (with countdown timer)

4. **Settings Page Update**
   - API key input for OpenAI TTS
   - Voice selection (preview each voice)
   - Default playback speed
   - Auto-play toggle

**Where audio appears:**
- Flashcard front: tap 🔊 to hear the word
- Flashcard back: tap 🔊 to hear the context sentence
- Vocabulary lists in Explore page
- Culture-language page (see 2.2 below)

---

### 2.2 Culture-Language Study (New Page: `/culture-language`)

**Goal:** A dedicated page that pairs cultural knowledge with structured language learning — not just vocabulary words, but full sentences, grammar patterns, and cultural explanations.

**This is different from the Explore page:** Explore is for reading and understanding culture. Culture-Language is for *actively studying the language through cultural context.*

**Data Model — New `CultureSentence` entity:**
```typescript
interface CultureSentence {
  id: string;
  nationId: string;
  languageId: string;
  category: "proverb" | "historical_quote" | "daily_cultural" | "literary" | "ceremonial" | "modern_slang";

  // The sentence in target language
  sentence_native: string;         // 花は桜木、人は武士
  sentence_reading: string;        // hana wa sakuragi, hito wa bushi

  // Translations
  translation_en: string;          // "Among flowers, the cherry blossom; among people, the warrior"
  translation_zh: string;          // "花中樱花，人中武士"

  // Word-by-word breakdown
  breakdown: {
    word: string;                  // 花
    reading: string;               // hana
    meaning_en: string;            // "flower"
    meaning_zh: string;            // "花"
    grammarNote?: string;          // "topic marker は follows"
  }[];

  // Cultural context
  culturalContext_en: string;      // Why this sentence matters culturally
  culturalContext_zh: string;

  // Source/origin
  origin_en: string;              // "Edo-period proverb comparing..."
  origin_zh: string;

  // Links
  linkedCulturalCardIds: string[];
  linkedPeopleIds: string[];

  // Study metadata
  difficulty: 1 | 2 | 3 | 4 | 5;
  tags: string[];
}
```

**Content Categories & Examples:**

| Category | Examples |
|----------|---------|
| **Proverbs (ことわざ)** | 七転び八起き (fall 7 times, stand up 8), 猿も木から落ちる (even monkeys fall from trees), 一期一会 (one time, one meeting) |
| **Historical quotes** | Famous sayings from Nobunaga, Musashi's Book of Five Rings, Bashō's haiku |
| **Literary sentences** | Opening of Tale of Genji, famous haiku with full breakdown |
| **Ceremonial/ritual** | いただきます (before meals) deep explanation, おじゃまします (entering someone's home), よろしくお願いします (please treat me well — the most Japanese sentence) |
| **Daily cultural** | Sentences you'd hear at a shrine, onsen, izakaya, convenience store |
| **Modern slang** | KY (空気読めない, can't read the room), おつかれさまです (good work — but SO much more) |

**Target:** ~80-100 sentences for initial Japan seed data.

**UI Design — `/culture-language` Page:**

```
┌─────────────────────────────┐
│  🇯🇵 Culture & Language      │
│  Learn Japanese through its  │
│  cultural heart              │
├─────────────────────────────┤
│ [Proverbs] [Quotes] [Daily] │
│ [Literary] [Ceremony] [Slang]│
├─────────────────────────────┤
│ ┌─────────────────────────┐ │
│ │ 一期一会                  │ │
│ │ ichi-go ichi-e           │ │
│ │ 🔊 ▶️ slow | normal      │ │
│ │                          │ │
│ │ "One time, one meeting"  │ │
│ │ "一期一会"                │ │
│ │                          │ │
│ │ ┌── Word Breakdown ───┐  │ │
│ │ │ 一 (ichi) = one      │  │ │
│ │ │ 期 (go) = time/phase │  │ │
│ │ │ 一 (ichi) = one      │  │ │
│ │ │ 会 (e) = meeting     │  │ │
│ │ └─────────────────────┘  │ │
│ │                          │ │
│ │ 📖 Cultural Context:     │ │
│ │ Rooted in tea ceremony   │ │
│ │ philosophy by Sen no     │ │
│ │ Rikyū. Each encounter    │ │
│ │ is unique and should be  │ │
│ │ treasured...             │ │
│ │                          │ │
│ │ 🔗 Related: Tea Ceremony │ │
│ │    Sen no Rikyū          │ │
│ └─────────────────────────┘ │
│                              │
│ ┌─────────────────────────┐ │
│ │ Next sentence card...    │ │
│ └─────────────────────────┘ │
└─────────────────────────────┘
```

**Study Features on this page:**
- Audio playback for every sentence (full sentence + individual words)
- Toggle: show/hide English or Chinese translation
- Toggle: show/hide word breakdown
- "Add to flashcards" button → creates review cards from culture sentences
- Filter by difficulty (1-5 stars)
- Progress tracking: sentences studied / total
- Bookmarking favorites

---

## Navigation Update

Current bottom nav: Explore | Study | Flashcards | Progress

**Proposed new navigation:**

```
Bottom Nav (5 tabs):
┌────────┬──────────┬───────────┬──────────┬──────────┐
│Explore │ Timeline │ Language  │Flashcards│ Progress │
│  🔍   │   📜    │   🗣️    │    📇    │    📊   │
└────────┴──────────┴───────────┴──────────┴──────────┘
```

- **Explore** — Nation overview + cultural cards (existing, enriched with philosophy/concepts)
- **Timeline** — Interactive history timeline (NEW) with links to people, cities
- **Language** — Two-tab page: "Daily Phrases" (existing vocab) + "Culture Language" (NEW 2.2)
- **Flashcards** — Spaced repetition (existing, enhanced with audio)
- **Progress** — Dashboard (existing)

Sub-pages accessible via links (not bottom nav):
- `/people` — Famous people directory (linked from Timeline)
- `/places` — Cities & geography (linked from Timeline and Explore)
- `/settings` — API key config, preferences

---

## Database Migration Plan

New Dexie stores to add:

```typescript
db.version(2).stores({
  // Existing (unchanged)
  nations: "id, region",
  culturalCards: "id, nationId, category",
  vocabularyItems: "id, languageId, category, difficulty",
  flashcardReviews: "++id, vocabularyItemId, nextReviewDate",
  studySessions: "++id, date, focusArea",
  userProgress: "++id, languageId",
  userSettings: "++id",

  // New
  timelineEvents: "id, nationId, year, era, type",
  famousPeople: "id, nationId, era, domain",
  cities: "id, nationId, type",
  cultureSentences: "id, nationId, category, difficulty",
  audioCache: "id, text, languageId",
});
```

---

## Implementation Phases

### Phase A: Foundation (Timeline + Enhanced Explore)
1. Add new DB entities and migrate schema to v2
2. Build `/timeline` page with vertical scrollable timeline UI
3. Seed ~45 timeline events for Japan
4. Expand CulturalCard with cross-linking fields
5. Add philosophy/concept cards (~15 new cards)
6. Update Explore page to show deeper content + cross-links

### Phase B: People & Places
7. Build `/people` page with grid + filter UI
8. Seed ~25 famous people for Japan
9. Build `/places` page with SVG map + list view
10. Seed ~15 cities/locations for Japan
11. Wire all cross-links: timeline ↔ people ↔ places ↔ cultural cards

### Phase C: Audio + Daily Language Enhancement
12. Build TTS service layer (`src/lib/tts.ts`)
13. Build audio player component with speed control
14. Add 🔊 buttons to flashcard UI
15. Add listening practice mode to flashcards
16. Add API key settings page
17. Implement IndexedDB audio caching

### Phase D: Culture-Language Page
18. Build `/culture-language` page with category tabs
19. Seed ~80 culture sentences for Japan (proverbs, quotes, daily, literary, ceremonial, slang)
20. Build word-by-word breakdown display
21. Build show/hide toggles for translations
22. Integrate audio playback on culture sentences
23. "Add to flashcards" functionality

### Phase E: Navigation + Polish
24. Update bottom nav to 5-tab layout
25. Wire all deep-link navigation between modules
26. Add loading states, empty states, error handling
27. Responsive polish and accessibility
28. Update i18n messages (en.json, zh.json) for all new UI

---

## Content Volume Summary

| Content Type | Target Count | Status |
|-------------|-------------|--------|
| Timeline events | ~45 | New |
| Cultural cards | ~30 (8 exist + 22 new) | Expand |
| Famous people | ~25 | New |
| Cities/places | ~15 | New |
| Daily vocabulary | ~150 (existing) | Keep |
| Culture vocabulary | ~60 (existing + new) | Expand |
| Culture sentences | ~80 | New |

---

## Tech Notes

- **No external map API** — use a simple SVG map of Japan for the places page
- **OpenAI TTS API** — user-provided API key stored in IndexedDB UserSettings
- **Audio caching** — generated audio stored as Blobs in IndexedDB, never re-fetched
- **Web Speech API fallback** — if no API key, use browser's built-in speech synthesis
- **All content bilingual** — every text field has `_en` and `_zh` variants
- **Progressive depth** — cultural cards marked as overview/intermediate/deep so learners aren't overwhelmed
