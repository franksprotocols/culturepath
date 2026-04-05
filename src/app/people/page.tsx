"use client";

import { useEffect, useState, useCallback } from "react";
import { db, type FamousPerson } from "@/lib/db";
import { useAppStore } from "@/stores/app-store";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ChevronDown, ChevronUp, ArrowLeft, Loader2 } from "lucide-react";
import Link from "next/link";
import { generateItemDetail, getAIConfig } from "@/lib/ai/content-generator";

const domainLabels: Record<string, { en: string; zh: string; emoji: string }> = {
  politics: { en: "Politics", zh: "政治", emoji: "👑" },
  military: { en: "Military", zh: "军事", emoji: "⚔️" },
  arts: { en: "Arts", zh: "艺术", emoji: "🎨" },
  literature: { en: "Literature", zh: "文学", emoji: "📖" },
  philosophy: { en: "Philosophy", zh: "哲学", emoji: "🧠" },
  science: { en: "Science", zh: "科学", emoji: "🔬" },
  religion: { en: "Religion", zh: "宗教", emoji: "⛩️" },
  modern: { en: "Modern", zh: "现代", emoji: "🌟" },
};

const allDomains = ["politics", "military", "arts", "literature", "philosophy", "science", "religion", "modern"];

export default function PeoplePage() {
  const { locale, currentNation: currentNationId } = useAppStore();
  const [people, setPeople] = useState<FamousPerson[]>([]);
  const [nationFlag, setNationFlag] = useState("🇯🇵");
  const [nationName, setNationName] = useState({ en: "Japan", zh: "日本" });
  const [filterDomain, setFilterDomain] = useState<string | null>(null);
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [loadingDetailIds, setLoadingDetailIds] = useState<Set<string>>(new Set());
  const [detailErrors, setDetailErrors] = useState<Map<string, string>>(new Map());

  const nationId = currentNationId || "japan";

  useEffect(() => {
    async function load() {
      const nation = await db.nations.get(nationId);
      if (nation) {
        setNationFlag(nation.flag);
        setNationName({ en: nation.name_en, zh: nation.name_zh });
      }
      const data = await db.famousPeople
        .where("nationId")
        .equals(nationId)
        .toArray();
      setPeople(data);
    }
    load();
  }, [nationId]);

  const needsDetail = (person: FamousPerson) => !person.bio_en;

  const loadDetail = useCallback(async (person: FamousPerson) => {
    if (!needsDetail(person)) return;
    if (loadingDetailIds.has(person.id)) return;

    setLoadingDetailIds((prev) => new Set(prev).add(person.id));
    setDetailErrors((prev) => { const m = new Map(prev); m.delete(person.id); return m; });

    try {
      const config = await getAIConfig();
      await generateItemDetail({ type: "person", person }, nationName.en, config);
      const updated = await db.famousPeople.get(person.id);
      if (updated) {
        setPeople((prev) => prev.map((p) => (p.id === person.id ? updated : p)));
      }
    } catch (err) {
      const msg = err instanceof Error ? err.message : "Failed to load detail";
      setDetailErrors((prev) => new Map(prev).set(person.id, msg));
    } finally {
      setLoadingDetailIds((prev) => { const s = new Set(prev); s.delete(person.id); return s; });
    }
  }, [loadingDetailIds, nationName.en]);

  const handleToggle = useCallback((person: FamousPerson) => {
    const newId = expandedId === person.id ? null : person.id;
    setExpandedId(newId);
    if (newId && needsDetail(person)) {
      loadDetail(person);
    }
  }, [expandedId, loadDetail]);

  const filtered = filterDomain
    ? people.filter((p) => p.domain === filterDomain)
    : people;

  // Sort by born year
  const sorted = [...filtered].sort((a, b) => {
    const aYear = parseInt(a.born) || 0;
    const bYear = parseInt(b.born) || 0;
    return aYear - bYear;
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <Link
          href="/timeline"
          className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground mb-2"
        >
          <ArrowLeft className="h-4 w-4" />
          {locale === "zh" ? "返回时间线" : "Back to Timeline"}
        </Link>
        <h1 className="text-2xl font-bold">
          {locale === "zh" ? `${nationFlag} ${nationName.zh}名人` : `${nationFlag} Famous People of ${nationName.en}`}
        </h1>
        <p className="text-sm text-muted-foreground mt-1">
          {locale === "zh"
            ? `${people.length} 位塑造${nationName.zh}历史和文化的人物 · 点击查看详情`
            : `${people.length} figures who shaped ${nationName.en}'s history · Tap for details`}
        </p>
      </div>

      {/* Domain Filter */}
      <div className="overflow-x-auto">
        <div className="flex gap-1.5 min-w-max pb-2">
          <button
            onClick={() => setFilterDomain(null)}
            className={`text-xs px-3 py-1.5 rounded-full border transition-colors ${
              filterDomain === null
                ? "bg-primary text-primary-foreground border-primary"
                : "border-border hover:bg-accent"
            }`}
          >
            {locale === "zh" ? "全部" : "All"}
          </button>
          {allDomains.map((domain) => {
            const info = domainLabels[domain];
            const count = people.filter((p) => p.domain === domain).length;
            if (count === 0) return null;
            return (
              <button
                key={domain}
                onClick={() => setFilterDomain(filterDomain === domain ? null : domain)}
                className={`text-xs px-3 py-1.5 rounded-full border transition-colors ${
                  filterDomain === domain
                    ? "bg-primary text-primary-foreground border-primary"
                    : "border-border hover:bg-accent"
                }`}
              >
                {info.emoji} {locale === "zh" ? info.zh : info.en} ({count})
              </button>
            );
          })}
        </div>
      </div>

      {/* People Grid */}
      <div className="space-y-3">
        {sorted.map((person) => (
          <PersonCard
            key={person.id}
            person={person}
            locale={locale}
            isExpanded={expandedId === person.id}
            isLoadingDetail={loadingDetailIds.has(person.id)}
            detailError={detailErrors.get(person.id)}
            onToggle={() => handleToggle(person)}
            onRetryDetail={() => loadDetail(person)}
          />
        ))}
      </div>

      {sorted.length === 0 && (
        <p className="text-center text-muted-foreground py-12">
          {locale === "zh" ? "暂无数据" : "No data available"}
        </p>
      )}
    </div>
  );
}

function PersonCard({
  person,
  locale,
  isExpanded,
  isLoadingDetail,
  detailError,
  onToggle,
  onRetryDetail,
}: {
  person: FamousPerson;
  locale: string;
  isExpanded: boolean;
  isLoadingDetail: boolean;
  detailError?: string;
  onToggle: () => void;
  onRetryDetail: () => void;
}) {
  const name = locale === "zh" ? person.name_zh : person.name_en;
  const title = locale === "zh" ? person.title_zh : person.title_en;
  const bio = locale === "zh" ? person.bio_zh : person.bio_en;
  const whyFamous = locale === "zh" ? person.whyFamous_zh : person.whyFamous_en;
  const funFact = locale === "zh" ? person.funFact_zh : person.funFact_en;
  const domainInfo = domainLabels[person.domain] || domainLabels.modern;
  const hasDetail = !!person.bio_en;

  const lifespan = person.died
    ? `${person.born} – ${person.died}`
    : `${person.born} –`;

  return (
    <Card>
      <div role="button" tabIndex={0} onClick={onToggle} onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") onToggle(); }} className="w-full text-left cursor-pointer">
        <CardHeader className="pb-2">
          <div className="flex items-start gap-3">
            <div className="text-3xl shrink-0">{person.imageEmoji}</div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 flex-wrap">
                <CardTitle className="text-base">{name}</CardTitle>
                <Badge variant="secondary" className="text-[10px]">
                  {locale === "zh" ? domainInfo.zh : domainInfo.en}
                </Badge>
              </div>
              <p className="text-xs text-muted-foreground mt-0.5">
                {person.name_native} · {person.name_reading}
              </p>
              <p className="text-xs text-muted-foreground">{lifespan} · {person.era}</p>
              <p className="text-sm font-medium text-primary mt-1">{title}</p>
            </div>
            <div className="shrink-0 pt-1">
              {isExpanded ? (
                <ChevronUp className="h-4 w-4 text-muted-foreground" />
              ) : (
                <ChevronDown className="h-4 w-4 text-muted-foreground" />
              )}
            </div>
          </div>
        </CardHeader>
      </div>

      {isExpanded && (
        <CardContent className="pt-0 space-y-4">
          {/* Loading detail */}
          {isLoadingDetail && (
            <div className="flex items-center justify-center gap-2 py-6">
              <Loader2 className="h-5 w-5 animate-spin text-primary" />
              <span className="text-sm text-muted-foreground">
                {locale === "zh" ? "正在生成详细内容..." : "Generating details..."}
              </span>
            </div>
          )}

          {/* Error */}
          {detailError && !isLoadingDetail && (
            <div className="text-center py-4 space-y-2">
              <p className="text-xs text-destructive">{detailError}</p>
              <button
                onClick={(e) => { e.stopPropagation(); onRetryDetail(); }}
                className="text-xs text-primary hover:underline"
              >
                {locale === "zh" ? "重试" : "Retry"}
              </button>
            </div>
          )}

          {/* Detail content */}
          {hasDetail && !isLoadingDetail && (
            <>
              {/* Why Famous */}
              <div className="rounded-lg bg-primary/5 p-3">
                <p className="text-xs font-medium text-primary mb-1">
                  {locale === "zh" ? "为何闻名" : "Why Famous"}
                </p>
                <p className="text-sm">{whyFamous}</p>
              </div>

              {/* Bio */}
              <div>
                <p className="text-sm leading-relaxed whitespace-pre-line">{bio}</p>
              </div>

              {/* Fun Fact */}
              <div className="rounded-lg bg-accent/50 p-3">
                <p className="text-xs font-medium mb-1">
                  {locale === "zh" ? "💡 趣闻" : "💡 Fun Fact"}
                </p>
                <p className="text-sm">{funFact}</p>
              </div>
            </>
          )}

          {/* No detail yet and not loading */}
          {!hasDetail && !isLoadingDetail && !detailError && (
            <div className="text-center py-4">
              <p className="text-xs text-muted-foreground italic">
                {locale === "zh" ? "点击加载详情" : "Tap to load details"}
              </p>
            </div>
          )}
        </CardContent>
      )}
    </Card>
  );
}
