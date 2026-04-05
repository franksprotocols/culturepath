"use client";

import { useEffect, useState } from "react";
import { Header } from "./header";
import { BottomNav } from "./bottom-nav";
import { seedDatabase } from "@/lib/seed";

export function AppShell({ children }: { children: React.ReactNode }) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    seedDatabase().then(() => setReady(true));
  }, []);

  if (!ready) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="animate-pulse text-lg text-muted-foreground">
          Loading CulturePath...
        </div>
      </div>
    );
  }

  return (
    <>
      <Header />
      <main className="mx-auto w-full max-w-md flex-1 px-4 pb-20 pt-4">
        {children}
      </main>
      <BottomNav />
    </>
  );
}
