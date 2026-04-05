"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { type WorldNation } from "@/data/world-nations-registry";
import { useDiscoveryStore, GENERATION_STEPS, getStepLabel, type GenerationStep } from "@/stores/discovery-store";
import { useAppStore } from "@/stores/app-store";
import { db } from "@/lib/db";
import { generateNationContent } from "@/lib/ai/content-generator";
import { ApiKeySetup } from "./api-key-setup";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { X, Sparkles, CheckCircle2, Circle, Loader2, AlertCircle, ArrowRight, RotateCcw } from "lucide-react";

interface NationDetailSheetProps {
  nation: WorldNation;
  isUnlocked: boolean;
  onClose: () => void;
  locale: string;
}

interface ContentStats {
  cards: number;
  vocab: number;
  events: number;
  people: number;
  cities: number;
}

export function NationDetailSheet({
  nation,
  isUnlocked,
  onClose,
  locale,
}: NationDetailSheetProps) {
  const router = useRouter();
  const { setCurrentNation } = useAppStore();
  const {
    generationJobs,
    startGeneration,
    updateGenerationStep,
    completeStep,
    completeGeneration,
    failGeneration,
    addUnlockedNation,
  } = useDiscoveryStore();

  const [showApiSetup, setShowApiSetup] = useState(false);
  const [stats, setStats] = useState<ContentStats | null>(null);

  const job = generationJobs[nation.id];
  const isGenerating = job?.status === "generating";
  const hasError = job?.status === "error";

  useEffect(() => {
    if (isUnlocked) {
      loadStats();
    }
  }, [isUnlocked, nation.id]);

  async function loadStats() {
    const [cards, vocab, events, people, cities] = await Promise.all([
      db.culturalCards.where("nationId").equals(nation.id).count(),
      db.vocabularyItems.where("languageId").equals(nation.languageId).count(),
      db.timelineEvents.where("nationId").equals(nation.id).count(),
      db.famousPeople.where("nationId").equals(nation.id).count(),
      db.cities.where("nationId").equals(nation.id).count(),
    ]);
    setStats({ cards, vocab, events, people, cities });
  }

  async function handleGenerate() {
    const settings = await db.userSettings.toCollection().first();
    const apiKey =
      settings?.aiProvider === "anthropic"
        ? settings?.anthropicApiKey
        : settings?.openaiApiKey;

    if (!apiKey) {
      setShowApiSetup(true);
      return;
    }

    startGeneration(nation.id);

    try {
      await generateNationContent(
        nation.id,
        nation.name_en,
        nation.languageId,
        {
          provider: settings?.aiProvider || "openai",
          apiKey,
        },
        (step, _stepIndex) => {
          updateGenerationStep(nation.id, step);
        },
        (step) => {
          completeStep(nation.id, step);
        }
      );
      completeGeneration(nation.id);
      addUnlockedNation(nation.id);
      await loadStats();
    } catch (err) {
      failGeneration(
        nation.id,
        err instanceof Error ? err.message : "Unknown error"
      );
    }
  }

  async function handleRegenerate() {
    // Clear all existing data for this nation
    const nationId = nation.id;
    const langId = nation.languageId;
    await Promise.all([
      db.nations.delete(nationId),
      db.culturalCards.where("nationId").equals(nationId).delete(),
      db.vocabularyItems.where("languageId").equals(langId).filter((v) => v.id.startsWith(nationId + "-")).delete(),
      db.timelineEvents.where("nationId").equals(nationId).delete(),
      db.famousPeople.where("nationId").equals(nationId).delete(),
      db.cities.where("nationId").equals(nationId).delete(),
      db.cultureSentences.where("nationId").equals(nationId).delete(),
    ]);
    setStats(null);
    // Now generate fresh
    handleGenerate();
  }

  function handleExplore() {
    setCurrentNation(nation.id);
    router.push("/explore");
  }

  function handleApiKeySet() {
    setShowApiSetup(false);
    handleGenerate();
  }

  if (showApiSetup) {
    return (
      <SheetWrapper onClose={onClose}>
        <ApiKeySetup
          locale={locale}
          onSaved={handleApiKeySet}
          onCancel={() => setShowApiSetup(false)}
        />
      </SheetWrapper>
    );
  }

  return (
    <SheetWrapper onClose={onClose}>
      {/* Header */}
      <div className="flex items-center gap-3 mb-4">
        <span className="text-4xl">{nation.flag}</span>
        <div>
          <h2 className="text-xl font-bold">
            {locale === "zh" ? nation.name_zh : nation.name_en}
          </h2>
          <p className="text-sm text-muted-foreground">
            {locale === "zh" ? nation.name_en : nation.name_zh} ·{" "}
            {nation.region}
          </p>
        </div>
        <button onClick={onClose} className="ml-auto p-1">
          <X className="h-5 w-5 text-muted-foreground" />
        </button>
      </div>

      {/* Generating state */}
      {isGenerating && job && (
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-sm font-medium text-primary">
            <Loader2 className="h-4 w-4 animate-spin" />
            {locale === "zh" ? "正在生成内容..." : "Generating content..."}
          </div>

          {/* Progress bar */}
          <div className="w-full bg-muted rounded-full h-2">
            <div
              className="bg-primary h-2 rounded-full transition-all duration-500"
              style={{
                width: `${(job.stepsCompleted.length / job.totalSteps) * 100}%`,
              }}
            />
          </div>

          {/* Step checklist */}
          <div className="space-y-2">
            {GENERATION_STEPS.map((step) => {
              const isCompleted = job.stepsCompleted.includes(step);
              const isCurrent = job.currentStep === step && !isCompleted;
              return (
                <div
                  key={step}
                  className="flex items-center gap-2 text-sm"
                >
                  {isCompleted ? (
                    <CheckCircle2 className="h-4 w-4 text-green-500" />
                  ) : isCurrent ? (
                    <Loader2 className="h-4 w-4 animate-spin text-primary" />
                  ) : (
                    <Circle className="h-4 w-4 text-muted-foreground/30" />
                  )}
                  <span
                    className={
                      isCompleted
                        ? "text-muted-foreground"
                        : isCurrent
                          ? "font-medium"
                          : "text-muted-foreground/50"
                    }
                  >
                    {getStepLabel(step as GenerationStep, locale)}
                  </span>
                </div>
              );
            })}
          </div>

          <p className="text-xs text-muted-foreground text-center mt-2">
            {locale === "zh"
              ? "这可能需要2-3分钟"
              : "This may take 2-3 minutes"}
          </p>
        </div>
      )}

      {/* Error state */}
      {hasError && job && (
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-sm text-destructive">
            <AlertCircle className="h-4 w-4" />
            {locale === "zh" ? "生成失败" : "Generation failed"}
          </div>
          <p className="text-xs text-muted-foreground">{job.error}</p>
          <button
            onClick={handleGenerate}
            className="w-full flex items-center justify-center gap-2 rounded-lg bg-primary text-primary-foreground py-2.5 text-sm font-medium"
          >
            <RotateCcw className="h-4 w-4" />
            {locale === "zh" ? "重试" : "Retry"}
          </button>
        </div>
      )}

      {/* Unlocked state */}
      {isUnlocked && !isGenerating && (
        <div className="space-y-4">
          <Badge
            variant="secondary"
            className="text-xs bg-green-500/10 text-green-600"
          >
            {locale === "zh" ? "✅ 已解锁" : "✅ Unlocked"}
          </Badge>

          {stats && (
            <div className="grid grid-cols-2 gap-2">
              <StatCard
                emoji="📚"
                label={locale === "zh" ? "文化卡片" : "Cultural Cards"}
                value={stats.cards}
              />
              <StatCard
                emoji="📝"
                label={locale === "zh" ? "词汇" : "Vocabulary"}
                value={stats.vocab}
              />
              <StatCard
                emoji="📜"
                label={locale === "zh" ? "历史事件" : "Timeline Events"}
                value={stats.events}
              />
              <StatCard
                emoji="👤"
                label={locale === "zh" ? "名人" : "Famous People"}
                value={stats.people}
              />
              <StatCard
                emoji="🏙️"
                label={locale === "zh" ? "城市" : "Cities"}
                value={stats.cities}
              />
            </div>
          )}

          <button
            onClick={handleExplore}
            className="w-full flex items-center justify-center gap-2 rounded-lg bg-primary text-primary-foreground py-2.5 text-sm font-medium"
          >
            {locale === "zh"
              ? `探索${nation.name_zh}`
              : `Explore ${nation.name_en}`}
            <ArrowRight className="h-4 w-4" />
          </button>

          <button
            onClick={handleRegenerate}
            className="w-full flex items-center justify-center gap-2 rounded-lg border border-border text-muted-foreground py-2 text-xs hover:bg-accent"
          >
            <RotateCcw className="h-3.5 w-3.5" />
            {locale === "zh" ? "重新生成内容" : "Regenerate content"}
          </button>
        </div>
      )}

      {/* Locked state */}
      {!isUnlocked && !isGenerating && !hasError && (
        <div className="space-y-4">
          <p className="text-sm text-muted-foreground">
            {locale === "zh"
              ? "生成此国家的完整文化内容包："
              : "Generate a complete cultural content pack:"}
          </p>
          <div className="space-y-1.5">
            {[
              { emoji: "📚", en: "~20 cultural insight cards", zh: "约20张文化卡片" },
              { emoji: "📝", en: "~50 vocabulary items", zh: "约50个词汇" },
              { emoji: "📜", en: "~45 timeline events (details on tap)", zh: "约45个历史事件（点击加载详情）" },
              { emoji: "👤", en: "~28 famous people (details on tap)", zh: "约28位名人（点击加载详情）" },
              { emoji: "🏙️", en: "~18 cities & places (details on tap)", zh: "约18个城市（点击加载详情）" },
            ].map((item) => (
              <div
                key={item.en}
                className="flex items-center gap-2 text-sm"
              >
                <span>{item.emoji}</span>
                <span>{locale === "zh" ? item.zh : item.en}</span>
              </div>
            ))}
          </div>

          <p className="text-xs text-muted-foreground">
            {locale === "zh"
              ? "需要 AI API 密钥（OpenAI 或 Claude）"
              : "Requires an AI API key (OpenAI or Claude)"}
          </p>

          <button
            onClick={handleGenerate}
            className="w-full flex items-center justify-center gap-2 rounded-lg bg-primary text-primary-foreground py-2.5 text-sm font-medium"
          >
            <Sparkles className="h-4 w-4" />
            {locale === "zh"
              ? `生成 ${nation.name_zh}`
              : `Generate ${nation.name_en}`}
          </button>
        </div>
      )}
    </SheetWrapper>
  );
}

function SheetWrapper({
  children,
  onClose,
}: {
  children: React.ReactNode;
  onClose: () => void;
}) {
  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-50 bg-black/40"
        onClick={onClose}
      />
      {/* Sheet */}
      <div className="fixed bottom-16 left-0 right-0 z-50 mx-auto max-w-md animate-in slide-in-from-bottom duration-300">
        <Card className="rounded-b-none rounded-t-2xl p-5 border-b-0">
          {children}
        </Card>
      </div>
    </>
  );
}

function StatCard({
  emoji,
  label,
  value,
}: {
  emoji: string;
  label: string;
  value: number;
}) {
  return (
    <div className="rounded-lg border bg-accent/20 p-2.5 text-center">
      <span className="text-lg">{emoji}</span>
      <p className="text-lg font-bold">{value}</p>
      <p className="text-[10px] text-muted-foreground">{label}</p>
    </div>
  );
}
