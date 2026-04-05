"use client";

import { useTranslations } from "next-intl";
import { useAppStore } from "@/stores/app-store";
import { useRouter } from "next/navigation";

export function Header() {
  const t = useTranslations("common");
  const { locale, setLocale } = useAppStore();
  const router = useRouter();

  const toggleLocale = () => {
    const newLocale = locale === "en" ? "zh" : "en";
    setLocale(newLocale);
    router.refresh();
  };

  return (
    <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex h-14 max-w-md items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <span className="text-lg font-bold">{t("appName")}</span>
        </div>
        <button
          onClick={toggleLocale}
          className="rounded-full border px-3 py-1 text-xs font-medium transition-colors hover:bg-accent"
        >
          {locale === "en" ? "中文" : "EN"}
        </button>
      </div>
    </header>
  );
}
