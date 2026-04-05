"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { db, type Nation, type CulturalCard, type VocabularyItem } from "@/lib/db";
import { useAppStore } from "@/stores/app-store";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Scroll,
  Utensils,
  Lightbulb,
  BookOpen,
  Church,
  Users,
  Sparkles,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

const categoryIcons: Record<string, React.ReactNode> = {
  history: <Scroll className="h-4 w-4" />,
  daily_life: <Utensils className="h-4 w-4" />,
  philosophy: <Lightbulb className="h-4 w-4" />,
  ideas: <Sparkles className="h-4 w-4" />,
  religion: <Church className="h-4 w-4" />,
  people: <Users className="h-4 w-4" />,
};

export default function ExplorePage() {
  const t = useTranslations();
  const { locale, currentNation: currentNationId } = useAppStore();
  const [nation, setNation] = useState<Nation | null>(null);
  const [cards, setCards] = useState<CulturalCard[]>([]);
  const [vocabMap, setVocabMap] = useState<Map<string, VocabularyItem>>(new Map());

  const nationId = currentNationId || "japan";

  useEffect(() => {
    async function load() {
      const n = await db.nations.get(nationId);
      const c = await db.culturalCards.where("nationId").equals(nationId).toArray();
      const allVocab = await db.vocabularyItems.toArray();
      const vMap = new Map(allVocab.map((v) => [v.id, v]));
      setNation(n || null);
      setCards(c);
      setVocabMap(vMap);
    }
    load();
  }, [nationId]);

  if (!nation) return null;

  const name = locale === "zh" ? nation.name_zh : nation.name_en;
  const overview = locale === "zh" ? nation.overview_zh : nation.overview_en;
  const capital = locale === "zh" ? nation.capital_zh : nation.capital_en;

  const categories = [
    "history",
    "daily_life",
    "philosophy",
    "religion",
    "people",
    "ideas",
  ] as const;

  const categoryLabels: Record<string, string> = {
    history: t("explore.history"),
    daily_life: t("explore.dailyLife"),
    philosophy: t("explore.philosophy"),
    religion: t("explore.religion"),
    people: t("explore.people"),
    ideas: t("explore.ideas"),
  };

  return (
    <div className="space-y-6">
      {/* Nation Header */}
      <div className="text-center">
        <div className="text-6xl mb-3">{nation.flag}</div>
        <h1 className="text-2xl font-bold">{name}</h1>
        <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
          {overview}
        </p>
      </div>

      {/* Key Facts */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-sm font-medium">
            {t("explore.keyFacts")}
          </CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-2 gap-3 text-sm">
          <div>
            <span className="text-muted-foreground">{t("explore.capital")}</span>
            <p className="font-medium">{capital}</p>
          </div>
          <div>
            <span className="text-muted-foreground">
              {t("explore.population")}
            </span>
            <p className="font-medium">{nation.population}</p>
          </div>
          <div className="col-span-2">
            <span className="text-muted-foreground">
              {t("explore.languages")}
            </span>
            <div className="mt-1 flex gap-1">
              {nation.languages.map((lang) => (
                <Badge key={lang} variant="secondary">
                  {lang}
                </Badge>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Cultural Cards by Category */}
      <div>
        <h2 className="text-lg font-semibold mb-3">
          {t("explore.culturalCards")}
        </h2>
        <Tabs defaultValue="history">
          <TabsList className="w-full flex overflow-x-auto">
            {categories.map((cat) => (
              <TabsTrigger
                key={cat}
                value={cat}
                className="flex items-center gap-1 text-xs"
              >
                {categoryIcons[cat]}
                <span className="hidden sm:inline">{categoryLabels[cat]}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          {categories.map((cat) => (
            <TabsContent key={cat} value={cat} className="mt-4 space-y-3">
              {cards
                .filter((c) => c.category === cat)
                .map((card) => (
                  <CulturalCardItem
                    key={card.id}
                    card={card}
                    locale={locale}
                    vocabMap={vocabMap}
                  />
                ))}
              {cards.filter((c) => c.category === cat).length === 0 && (
                <p className="text-sm text-muted-foreground text-center py-8">
                  {locale === "zh" ? "即将推出更多内容..." : "More content coming soon..."}
                </p>
              )}
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  );
}

function CulturalCardItem({
  card,
  locale,
  vocabMap,
}: {
  card: CulturalCard;
  locale: string;
  vocabMap: Map<string, VocabularyItem>;
}) {
  const [expanded, setExpanded] = useState(false);
  const title = locale === "zh" ? card.title_zh : card.title_en;
  const content = locale === "zh" ? card.content_zh : card.content_en;

  const relatedVocab = card.relatedVocabulary
    .map((id) => vocabMap.get(id))
    .filter((v): v is VocabularyItem => v !== undefined);

  return (
    <Card>
      <CardHeader className="pb-2">
        <div className="flex items-center gap-2">
          {categoryIcons[card.category]}
          <CardTitle className="text-base">{title}</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="space-y-3">
        <CardDescription className="text-sm leading-relaxed whitespace-pre-line">
          {content}
        </CardDescription>

        {/* Related Vocabulary */}
        {relatedVocab.length > 0 && (
          <div>
            <button
              onClick={() => setExpanded(!expanded)}
              className="flex items-center gap-1 text-xs font-medium text-primary hover:underline"
            >
              <BookOpen className="h-3 w-3" />
              {locale === "zh"
                ? `学习相关词汇 (${relatedVocab.length})`
                : `Learn related words (${relatedVocab.length})`}
              {expanded ? (
                <ChevronUp className="h-3 w-3" />
              ) : (
                <ChevronDown className="h-3 w-3" />
              )}
            </button>

            {expanded && (
              <div className="mt-2 space-y-2">
                {relatedVocab.map((vocab) => (
                  <div
                    key={vocab.id}
                    className="rounded-lg border bg-accent/30 p-3 space-y-1"
                  >
                    <div className="flex items-baseline gap-2">
                      <span className="text-lg font-bold">{vocab.word}</span>
                      <span className="text-sm text-muted-foreground">
                        {vocab.reading}
                      </span>
                    </div>
                    <div className="text-sm font-medium">
                      {vocab.translation_en} / {vocab.translation_zh}
                    </div>
                    <p className="text-xs text-muted-foreground">
                      {locale === "zh" ? vocab.culturalNote_zh : vocab.culturalNote_en}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
