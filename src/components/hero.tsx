"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { IconCoffee, IconGitCommit, IconGitPullRequest } from "@tabler/icons-react";
import { useLanguage } from "@/lib/language";
import { HeroEffects } from "./hero-effects";
import { Typewriter } from "./typewriter";

const STAT_ICONS = {
  commits: IconGitCommit,
  prs: IconGitPullRequest,
  coffee: IconCoffee,
} as const;

export function Hero() {
  const { t, locale } = useLanguage();
  const [settled, setSettled] = useState(false);
  const words = useMemo(() => [t.heroGreeting, t.heroTitle], [t.heroGreeting, t.heroTitle]);

  useEffect(() => {
    setSettled(false);
  }, [locale]);

  const handleComplete = useCallback(() => setSettled(true), []);

  return (
    <section id="topo" className="relative h-svh overflow-hidden">
      <HeroEffects active />

      <h1
        key={locale}
        className="absolute left-5 right-5 top-[42%] z-10 max-w-5xl -translate-y-1/2 whitespace-pre-line font-display text-[clamp(2.4rem,7vw,6.5rem)] font-semibold leading-[1.05] tracking-tight text-white sm:left-10 lg:left-16"
      >
        <Typewriter words={words} onComplete={handleComplete} />
      </h1>

      <motion.div
        initial={false}
        animate={settled ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-x-5 bottom-8 z-10 flex flex-col gap-8 sm:inset-x-10 sm:bottom-12 sm:flex-row sm:items-end sm:justify-between lg:inset-x-16"
      >
        <p className="max-w-md text-sm leading-relaxed text-zinc-400 sm:text-base">
          {t.intro}
        </p>

        <dl className="flex shrink-0 gap-6 sm:ml-auto sm:gap-8">
          {t.stats.map((stat) => {
            const Icon = STAT_ICONS[stat.key as keyof typeof STAT_ICONS] ?? IconGitCommit;
            return (
              <div key={stat.key} className="text-right">
                <Icon size={18} stroke={1.7} className="mb-2 ml-auto text-white" />
                <dd className="text-sm font-medium text-white sm:text-base">{stat.value}</dd>
                <dt className="mt-0.5 text-xs text-zinc-400">{stat.label}</dt>
              </div>
            );
          })}
        </dl>
      </motion.div>
    </section>
  );
}
