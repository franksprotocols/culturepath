"use client";

import { useEffect, useState, useRef, useCallback } from "react";
import { useTranslations } from "next-intl";
import { db, type TimelineEvent } from "@/lib/db";
import { useAppStore } from "@/stores/app-store";
import { Badge } from "@/components/ui/badge";
import { Clock, Crown, Paintbrush, Swords, Scroll, ChevronRight, Loader2 } from "lucide-react";
import Link from "next/link";
import { generateItemDetail, getAIConfig } from "@/lib/ai/content-generator";

const typeIcons: Record<string, React.ReactNode> = {
  era: <Clock className="h-4 w-4" />,
  event: <Scroll className="h-4 w-4" />,
  person: <Crown className="h-4 w-4" />,
  cultural: <Paintbrush className="h-4 w-4" />,
};

function formatYear(year: number): string {
  if (year < 0) return `${Math.abs(year)} BCE`;
  return `${year}`;
}

function formatYearZh(year: number): string {
  if (year < 0) return `公元前${Math.abs(year)}年`;
  return `${year}年`;
}

export default function TimelinePage() {
  const t = useTranslations();
  const { locale, currentNation: currentNationId } = useAppStore();
  const [events, setEvents] = useState<TimelineEvent[]>([]);
  const [nationFlag, setNationFlag] = useState("🇯🇵");
  const [nationName, setNationName] = useState({ en: "Japan", zh: "日本" });
  const [selectedEventId, setSelectedEventId] = useState<string | null>(null);
  const [loadingDetailIds, setLoadingDetailIds] = useState<Set<string>>(new Set());
  const [detailErrors, setDetailErrors] = useState<Map<string, string>>(new Map());
  const eraRefs = useRef<Record<string, HTMLDivElement | null>>({});

  const nationId = currentNationId || "japan";

  useEffect(() => {
    async function load() {
      const nation = await db.nations.get(nationId);
      if (nation) {
        setNationFlag(nation.flag);
        setNationName({ en: nation.name_en, zh: nation.name_zh });
      }
      const data = await db.timelineEvents
        .where("nationId")
        .equals(nationId)
        .sortBy("year");
      setEvents(data);
    }
    load();
  }, [nationId]);

  const needsDetail = (event: TimelineEvent) => !event.summary_en;

  const loadDetail = useCallback(async (event: TimelineEvent) => {
    if (!needsDetail(event)) return;
    if (loadingDetailIds.has(event.id)) return;

    setLoadingDetailIds((prev) => new Set(prev).add(event.id));
    setDetailErrors((prev) => { const m = new Map(prev); m.delete(event.id); return m; });

    try {
      const config = await getAIConfig();
      const name = nationName.en;
      await generateItemDetail({ type: "timeline", event }, name, config);
      // Reload the updated event from DB
      const updated = await db.timelineEvents.get(event.id);
      if (updated) {
        setEvents((prev) => prev.map((e) => (e.id === event.id ? updated : e)));
      }
    } catch (err) {
      const msg = err instanceof Error ? err.message : "Failed to load detail";
      setDetailErrors((prev) => new Map(prev).set(event.id, msg));
    } finally {
      setLoadingDetailIds((prev) => { const s = new Set(prev); s.delete(event.id); return s; });
    }
  }, [loadingDetailIds, nationName.en]);

  const handleSelect = useCallback((event: TimelineEvent) => {
    const newId = selectedEventId === event.id ? null : event.id;
    setSelectedEventId(newId);
    if (newId && needsDetail(event)) {
      loadDetail(event);
    }
  }, [selectedEventId, loadDetail]);

  // Group events by era
  const eras = Array.from(new Set(events.map((e) => e.era)));
  const eventsByEra = eras.map((era) => ({
    era,
    events: events.filter((e) => e.era === era),
  }));

  const scrollToEra = (era: string) => {
    eraRefs.current[era]?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  if (events.length === 0) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <p className="text-muted-foreground">
          {locale === "zh" ? "加载时间线..." : "Loading timeline..."}
        </p>
      </div>
    );
  }

  return (
    <div className="relative">
      {/* Page Header */}
      <div className="text-center mb-6">
        <h1 className="text-2xl font-bold">
          {locale === "zh" ? `${nationFlag} ${nationName.zh}历史时间线` : `${nationFlag} ${nationName.en} Timeline`}
        </h1>
        <p className="text-sm text-muted-foreground mt-1">
          {locale === "zh"
            ? `${events.length} 个历史事件 · 点击查看详情`
            : `${events.length} historical events · Tap for details`}
        </p>
      </div>

      {/* Era Quick-Nav */}
      <div className="mb-6 overflow-x-auto">
        <div className="flex gap-1.5 min-w-max px-1 pb-2">
          {eras.map((era) => (
            <button
              key={era}
              onClick={() => scrollToEra(era)}
              className="bg-primary/80 text-primary-foreground text-[10px] px-2 py-1 rounded-full whitespace-nowrap hover:opacity-80 transition-opacity"
            >
              {era}
            </button>
          ))}
        </div>
      </div>

      {/* Timeline */}
      <div className="relative pl-6">
        {/* Vertical line */}
        <div className="absolute left-[11px] top-0 bottom-0 w-0.5 bg-border" />

        {eventsByEra.map(({ era, events: eraEvents }) => {
          const eraNode = eraEvents.find((e) => e.type === "era");
          const otherEvents = eraEvents.filter((e) => e.type !== "era");
          const yearRange = eraNode
            ? `${formatYear(eraNode.year)}${eraNode.yearEnd ? ` – ${formatYear(eraNode.yearEnd)}` : ""}`
            : "";
          const yearRangeZh = eraNode
            ? `${formatYearZh(eraNode.year)}${eraNode.yearEnd ? ` – ${formatYearZh(eraNode.yearEnd)}` : ""}`
            : "";

          return (
            <div
              key={era}
              ref={(el) => { eraRefs.current[era] = el; }}
              className="mb-8"
            >
              {/* Era Header */}
              <div className="relative flex items-center gap-3 mb-4">
                <div
                  className="absolute -left-6 w-5 h-5 rounded-full bg-primary border-2 border-background flex items-center justify-center"
                >
                  <span className="text-[8px] text-primary-foreground">⬤</span>
                </div>
                <div>
                  <h2 className="text-lg font-bold">{era}</h2>
                  <p className="text-xs text-muted-foreground">
                    {locale === "zh" ? yearRangeZh : yearRange}
                  </p>
                  {eraNode && eraNode.summary_en && (
                    <p className="text-sm text-muted-foreground mt-1">
                      {locale === "zh" ? eraNode.summary_zh : eraNode.summary_en}
                    </p>
                  )}
                </div>
              </div>

              {/* Era Events */}
              <div className="space-y-3 ml-2">
                {otherEvents.map((event) => (
                  <TimelineNode
                    key={event.id}
                    event={event}
                    locale={locale}
                    isSelected={selectedEventId === event.id}
                    isLoadingDetail={loadingDetailIds.has(event.id)}
                    detailError={detailErrors.get(event.id)}
                    onSelect={() => handleSelect(event)}
                    onRetryDetail={() => loadDetail(event)}
                  />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function TimelineNode({
  event,
  locale,
  isSelected,
  isLoadingDetail,
  detailError,
  onSelect,
  onRetryDetail,
}: {
  event: TimelineEvent;
  locale: string;
  isSelected: boolean;
  isLoadingDetail: boolean;
  detailError?: string;
  onSelect: () => void;
  onRetryDetail: () => void;
}) {
  const title = locale === "zh" ? event.title_zh : event.title_en;
  const summary = locale === "zh" ? event.summary_zh : event.summary_en;
  const yearLabel = locale === "zh" ? formatYearZh(event.year) : formatYear(event.year);
  const hasDetail = !!event.summary_en;

  return (
    <div className="relative">
      {/* Node dot */}
      <div
        className="absolute -left-8 top-3 w-3 h-3 rounded-full border-2 border-background bg-primary/60"
      />

      <div
        role="button"
        tabIndex={0}
        onClick={onSelect}
        onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") onSelect(); }}
        className={`w-full text-left rounded-lg border p-3 transition-all cursor-pointer ${
          isSelected
            ? "border-primary border-2 bg-accent/50"
            : "border-border hover:bg-accent/30"
        }`}
      >
        <div className="flex items-start gap-2">
          <span className="text-lg shrink-0">{event.icon}</span>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="font-semibold text-sm">{title}</span>
              <Badge variant="outline" className="text-[10px]">
                {yearLabel}
              </Badge>
              <Badge variant="secondary" className="text-[10px]">
                {event.type}
              </Badge>
            </div>

            {/* Summary — show if available, loading state if expanding without detail */}
            {hasDetail && (
              <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                {summary}
              </p>
            )}

            {!hasDetail && !isSelected && (
              <p className="text-xs text-muted-foreground/50 mt-1 italic">
                {locale === "zh" ? "点击加载详情" : "Tap for details"}
              </p>
            )}
          </div>
        </div>

        {/* Expanded section */}
        {isSelected && (
          <div className="mt-3 pt-3 border-t border-border">
            {/* Loading detail */}
            {isLoadingDetail && (
              <div className="flex items-center gap-2 py-2">
                <Loader2 className="h-4 w-4 animate-spin text-primary" />
                <span className="text-xs text-muted-foreground">
                  {locale === "zh" ? "正在生成详细内容..." : "Generating details..."}
                </span>
              </div>
            )}

            {/* Error */}
            {detailError && !isLoadingDetail && (
              <div className="space-y-2">
                <p className="text-xs text-destructive">{detailError}</p>
                <button
                  onClick={(e) => { e.stopPropagation(); onRetryDetail(); }}
                  className="text-xs text-primary hover:underline"
                >
                  {locale === "zh" ? "重试" : "Retry"}
                </button>
              </div>
            )}

            {/* Links (shown when detail is loaded) */}
            {hasDetail && (
              <div className="space-y-2">
                {event.linkedPeopleIds.length > 0 && (
                  <Link
                    href="/people"
                    className="flex items-center gap-1 text-xs text-primary hover:underline"
                  >
                    <Crown className="h-3 w-3" />
                    {locale === "zh"
                      ? `查看相关人物 (${event.linkedPeopleIds.length})`
                      : `View related people (${event.linkedPeopleIds.length})`}
                    <ChevronRight className="h-3 w-3" />
                  </Link>
                )}
                {event.linkedCityIds.length > 0 && (
                  <Link
                    href="/places"
                    className="flex items-center gap-1 text-xs text-primary hover:underline"
                  >
                    <Swords className="h-3 w-3" />
                    {locale === "zh"
                      ? `查看相关地点 (${event.linkedCityIds.length})`
                      : `View related places (${event.linkedCityIds.length})`}
                    <ChevronRight className="h-3 w-3" />
                  </Link>
                )}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
