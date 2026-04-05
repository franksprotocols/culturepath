"use client";

import { useEffect, useState } from "react";
import { db, type VocabularyItem, type CultureSentence, type Nation } from "@/lib/db";
import { useAppStore } from "@/stores/app-store";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen, MessageCircle, ChevronDown, ChevronUp, Eye, EyeOff } from "lucide-react";

const sentenceCategoryLabels: Record<string, { en: string; zh: string }> = {
  proverb: { en: "Proverbs", zh: "谚语" },
  historical_quote: { en: "Quotes", zh: "名言" },
  daily_cultural: { en: "Daily", zh: "日常" },
  literary: { en: "Literary", zh: "文学" },
  ceremonial: { en: "Ceremony", zh: "礼仪" },
  modern_slang: { en: "Modern", zh: "现代" },
};

const allSentenceCategories = [
  "proverb",
  "historical_quote",
  "daily_cultural",
  "literary",
  "ceremonial",
  "modern_slang",
];

export default function LanguagePage() {
  const { locale, currentNation: currentNationId } = useAppStore();
  const [nation, setNation] = useState<Nation | null>(null);
  const [vocab, setVocab] = useState<VocabularyItem[]>([]);
  const [sentences, setSentences] = useState<CultureSentence[]>([]);

  const nationId = currentNationId || "japan";

  useEffect(() => {
    async function load() {
      const n = await db.nations.get(nationId);
      setNation(n || null);
      // Filter vocab by nation ID prefix (both daily vocab and culture vocab)
      const allVocab = await db.vocabularyItems.toArray();
      const nationVocab = allVocab.filter((v) => v.id.startsWith(nationId + "-"));
      setVocab(nationVocab);
      const s = await db.cultureSentences
        .where("nationId")
        .equals(nationId)
        .toArray();
      setSentences(s);
    }
    load();
  }, [nationId]);

  const nationFlag = nation?.flag || "🌍";
  const nationNameEn = nation?.name_en || "Language";
  const nationNameZh = nation?.name_zh || "语言";
  const langDisplay = nation?.languages?.[0] || "Language";

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h1 className="text-2xl font-bold">
          {locale === "zh"
            ? `${nationFlag} ${nationNameZh}语言学习`
            : `${nationFlag} ${nationNameEn} Language`}
        </h1>
        <p className="text-sm text-muted-foreground mt-1">
          {locale === "zh"
            ? "通过文化学习语言"
            : "Learn language through culture"}
        </p>
      </div>

      <Tabs defaultValue="phrases">
        <TabsList className="w-full">
          <TabsTrigger value="phrases" className="flex-1 flex items-center gap-1.5 text-xs">
            <BookOpen className="h-3.5 w-3.5" />
            {locale === "zh" ? "日常词汇" : "Daily Vocab"}
          </TabsTrigger>
          <TabsTrigger value="culture" className="flex-1 flex items-center gap-1.5 text-xs">
            <MessageCircle className="h-3.5 w-3.5" />
            {locale === "zh" ? "文化语言" : "Culture Language"}
          </TabsTrigger>
        </TabsList>

        <TabsContent value="phrases" className="mt-4">
          <DailyVocabTab vocab={vocab} locale={locale} langDisplay={langDisplay} />
        </TabsContent>

        <TabsContent value="culture" className="mt-4">
          <CultureLanguageTab sentences={sentences} locale={locale} />
        </TabsContent>
      </Tabs>
    </div>
  );
}

function DailyVocabTab({
  vocab,
  locale,
  langDisplay,
}: {
  vocab: VocabularyItem[];
  locale: string;
  langDisplay: string;
}) {
  const categories = Array.from(new Set(vocab.map((v) => v.category)));

  return (
    <div className="space-y-4">
      <p className="text-sm text-muted-foreground">
        {locale === "zh"
          ? `${vocab.length} 个实用${langDisplay}词汇`
          : `${vocab.length} practical ${langDisplay} words`}
      </p>
      {categories.map((cat) => {
        const items = vocab.filter((v) => v.category === cat);
        return (
          <VocabCategorySection
            key={cat}
            category={cat}
            items={items}
            locale={locale}
          />
        );
      })}
      {vocab.length === 0 && (
        <p className="text-center text-muted-foreground py-8">
          {locale === "zh" ? "暂无词汇数据" : "No vocabulary data yet"}
        </p>
      )}
    </div>
  );
}

function VocabCategorySection({
  category,
  items,
  locale,
}: {
  category: string;
  items: VocabularyItem[];
  locale: string;
}) {
  const [expanded, setExpanded] = useState(false);
  const displayName = category.replace(/_/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());

  return (
    <Card>
      <button onClick={() => setExpanded(!expanded)} className="w-full text-left">
        <CardHeader className="pb-2">
          <div className="flex items-center justify-between">
            <CardTitle className="text-sm">{displayName}</CardTitle>
            <div className="flex items-center gap-2">
              <Badge variant="secondary" className="text-[10px]">
                {items.length}
              </Badge>
              {expanded ? (
                <ChevronUp className="h-4 w-4 text-muted-foreground" />
              ) : (
                <ChevronDown className="h-4 w-4 text-muted-foreground" />
              )}
            </div>
          </div>
        </CardHeader>
      </button>
      {expanded && (
        <CardContent className="pt-0 space-y-2">
          {items.map((item) => (
            <div
              key={item.id}
              className="rounded-lg border bg-accent/20 p-3 space-y-1"
            >
              <div className="flex items-baseline gap-2">
                <span className="text-lg font-bold">{item.word}</span>
                <span className="text-sm text-muted-foreground">{item.reading}</span>
                <Badge variant="outline" className="text-[10px] ml-auto">
                  {"★".repeat(item.difficulty)}
                </Badge>
              </div>
              <div className="text-sm">
                {item.translation_en} / {item.translation_zh}
              </div>
              <p className="text-xs text-muted-foreground">
                {locale === "zh" ? item.context_zh : item.context_en}
              </p>
            </div>
          ))}
        </CardContent>
      )}
    </Card>
  );
}

function CultureLanguageTab({
  sentences,
  locale,
}: {
  sentences: CultureSentence[];
  locale: string;
}) {
  const [filterCat, setFilterCat] = useState<string | null>(null);

  const filtered = filterCat
    ? sentences.filter((s) => s.category === filterCat)
    : sentences;

  if (sentences.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-muted-foreground">
          {locale === "zh"
            ? "文化语言内容即将推出..."
            : "Culture language content coming soon..."}
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {/* Category filter */}
      <div className="overflow-x-auto">
        <div className="flex gap-1.5 min-w-max pb-2">
          <button
            onClick={() => setFilterCat(null)}
            className={`text-xs px-3 py-1.5 rounded-full border transition-colors ${
              filterCat === null
                ? "bg-primary text-primary-foreground border-primary"
                : "border-border hover:bg-accent"
            }`}
          >
            {locale === "zh" ? "全部" : "All"} ({sentences.length})
          </button>
          {allSentenceCategories.map((cat) => {
            const count = sentences.filter((s) => s.category === cat).length;
            if (count === 0) return null;
            const label = sentenceCategoryLabels[cat];
            return (
              <button
                key={cat}
                onClick={() => setFilterCat(filterCat === cat ? null : cat)}
                className={`text-xs px-3 py-1.5 rounded-full border transition-colors ${
                  filterCat === cat
                    ? "bg-primary text-primary-foreground border-primary"
                    : "border-border hover:bg-accent"
                }`}
              >
                {locale === "zh" ? label.zh : label.en} ({count})
              </button>
            );
          })}
        </div>
      </div>

      {/* Sentence cards */}
      <div className="space-y-3">
        {filtered.map((sentence) => (
          <SentenceCard key={sentence.id} sentence={sentence} locale={locale} />
        ))}
      </div>
    </div>
  );
}

function SentenceCard({
  sentence,
  locale,
}: {
  sentence: CultureSentence;
  locale: string;
}) {
  const [showTranslation, setShowTranslation] = useState(false);
  const [showBreakdown, setShowBreakdown] = useState(false);

  const translation = locale === "zh" ? sentence.translation_zh : sentence.translation_en;
  const culturalContext = locale === "zh" ? sentence.culturalContext_zh : sentence.culturalContext_en;
  const origin = locale === "zh" ? sentence.origin_zh : sentence.origin_en;
  const catLabel = sentenceCategoryLabels[sentence.category];

  return (
    <Card>
      <CardHeader className="pb-2">
        <div className="flex items-start justify-between gap-2">
          <div>
            <p className="text-xl font-bold">{sentence.sentence_native}</p>
            <p className="text-sm text-muted-foreground mt-1">
              {sentence.sentence_reading}
            </p>
          </div>
          <div className="flex flex-col items-end gap-1 shrink-0">
            <Badge variant="secondary" className="text-[10px]">
              {locale === "zh" ? catLabel.zh : catLabel.en}
            </Badge>
            <Badge variant="outline" className="text-[10px]">
              {"★".repeat(sentence.difficulty)}
            </Badge>
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-3">
        {/* Translation toggle */}
        <button
          onClick={() => setShowTranslation(!showTranslation)}
          className="flex items-center gap-1.5 text-xs text-primary hover:underline"
        >
          {showTranslation ? <EyeOff className="h-3 w-3" /> : <Eye className="h-3 w-3" />}
          {showTranslation
            ? (locale === "zh" ? "隐藏翻译" : "Hide translation")
            : (locale === "zh" ? "显示翻译" : "Show translation")}
        </button>
        {showTranslation && (
          <p className="text-sm font-medium">{translation}</p>
        )}

        {/* Word breakdown toggle */}
        <button
          onClick={() => setShowBreakdown(!showBreakdown)}
          className="flex items-center gap-1.5 text-xs text-primary hover:underline"
        >
          {showBreakdown ? <ChevronUp className="h-3 w-3" /> : <ChevronDown className="h-3 w-3" />}
          {locale === "zh" ? "逐词分析" : "Word Breakdown"}
        </button>
        {showBreakdown && (
          <div className="rounded-lg border bg-accent/20 p-3 space-y-1.5">
            {sentence.breakdown.map((item, i) => (
              <div key={i} className="flex items-baseline gap-2 text-sm">
                <span className="font-bold">{item.word}</span>
                <span className="text-muted-foreground text-xs">({item.reading})</span>
                <span className="text-xs">
                  = {locale === "zh" ? item.meaning_zh : item.meaning_en}
                </span>
                {item.grammarNote && (
                  <span className="text-[10px] text-muted-foreground italic ml-auto">
                    {item.grammarNote}
                  </span>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Cultural context */}
        <div className="rounded-lg bg-primary/5 p-3">
          <p className="text-xs font-medium text-primary mb-1">
            {locale === "zh" ? "📖 文化背景" : "📖 Cultural Context"}
          </p>
          <p className="text-xs leading-relaxed">{culturalContext}</p>
        </div>

        {/* Origin */}
        <p className="text-xs text-muted-foreground">
          <span className="font-medium">{locale === "zh" ? "来源：" : "Origin: "}</span>
          {origin}
        </p>
      </CardContent>
    </Card>
  );
}
