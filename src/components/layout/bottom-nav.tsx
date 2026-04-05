"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Compass, Scroll, MessageSquare, Layers, BarChart3 } from "lucide-react";
import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/discovery", icon: Compass, labelKey: "discover" as const },
  { href: "/timeline", icon: Scroll, labelKey: "timeline" as const },
  { href: "/language", icon: MessageSquare, labelKey: "language" as const },
  { href: "/flashcards", icon: Layers, labelKey: "flashcards" as const },
  { href: "/progress", icon: BarChart3, labelKey: "progress" as const },
];

export function BottomNav() {
  const pathname = usePathname();
  const t = useTranslations("nav");

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex h-16 max-w-md items-center justify-around px-4">
        {navItems.map(({ href, icon: Icon, labelKey }) => {
          const isActive = pathname.startsWith(href);
          return (
            <Link
              key={href}
              href={href}
              className={cn(
                "flex flex-col items-center gap-1 px-3 py-2 text-xs transition-colors",
                isActive
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              <Icon className="h-5 w-5" />
              <span>{t(labelKey)}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
