"use client";

import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { IconFlame } from "@tabler/icons-react";
import { useLanguage } from "@/lib/language";

const USERNAME = "elidielton-dev";
const API = `https://github-contributions-api.jogruber.de/v4/${USERNAME}?y=last`;
const CELL = 12;

const LEVELS = [
  "bg-white/[0.08]",
  "bg-white/30",
  "bg-white/50",
  "bg-white/75",
  "bg-white",
] as const;

type Day = {
  date: string;
  count: number;
  level: number;
};

type ApiResponse = {
  total: Record<string, number>;
  contributions: Day[];
};

function utcDate(iso: string) {
  return new Date(`${iso}T00:00:00Z`);
}

function toWeeks(days: Day[]) {
  if (!days.length) return [];

  const padStart = utcDate(days[0].date).getUTCDay();
  const cells: Array<Day | null> = [...Array(padStart).fill(null), ...days];
  const padEnd = (7 - (cells.length % 7)) % 7;
  cells.push(...Array(padEnd).fill(null));

  const weeks: Array<Array<Day | null>> = [];
  for (let i = 0; i < cells.length; i += 7) {
    weeks.push(cells.slice(i, i + 7));
  }
  return weeks;
}

function monthLabels(weeks: Array<Array<Day | null>>, locale: string) {
  const labels: Array<{ index: number; name: string }> = [];
  let lastMonth = -1;
  const fmt = new Intl.DateTimeFormat(locale === "pt" ? "pt-BR" : "en-US", {
    month: "short",
    timeZone: "UTC",
  });

  weeks.forEach((week, index) => {
    const day = week.find(Boolean);
    if (!day) return;
    const month = utcDate(day.date).getUTCMonth();
    if (month === lastMonth) return;
    if (labels.length && index - labels[labels.length - 1].index < 2) return;
    labels.push({ index, name: fmt.format(utcDate(day.date)) });
    lastMonth = month;
  });

  return labels;
}

function currentStreak(days: Day[]) {
  if (!days.length) return 0;

  let i = days.length - 1;
  if (days[i].count === 0) i -= 1;

  let streak = 0;
  for (; i >= 0; i -= 1) {
    if (days[i].count > 0) streak += 1;
    else break;
  }
  return streak;
}

export function Contributions() {
  const { locale, t } = useLanguage();
  const [days, setDays] = useState<Day[] | null>(null);
  const [total, setTotal] = useState(0);
  const [error, setError] = useState(false);

  useEffect(() => {
    let cancelled = false;

    fetch(API)
      .then((res) => {
        if (!res.ok) throw new Error("fail");
        return res.json() as Promise<ApiResponse>;
      })
      .then((data) => {
        if (cancelled) return;
        setDays(data.contributions);
        setTotal(data.total.lastYear ?? Object.values(data.total)[0] ?? 0);
      })
      .catch(() => {
        if (!cancelled) setError(true);
      });

    return () => {
      cancelled = true;
    };
  }, []);

  const weeks = useMemo(() => (days ? toWeeks(days) : []), [days]);
  const months = useMemo(() => monthLabels(weeks, locale), [weeks, locale]);
  const streak = useMemo(() => (days ? currentStreak(days) : 0), [days]);
  const columns = weeks.length || 53;

  const formatDay = (day: Day) => {
    const date = new Intl.DateTimeFormat(locale === "pt" ? "pt-BR" : "en-US", {
      day: "numeric",
      month: "short",
      year: "numeric",
      timeZone: "UTC",
    }).format(utcDate(day.date));

    if (day.count === 0) return t.contributionsNone.replace("{date}", date);
    if (day.count === 1) return t.contributionsOne.replace("{date}", date);
    return t.contributionsMany.replace("{count}", String(day.count)).replace("{date}", date);
  };

  return (
    <section id="contribuicoes" className="bg-black px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center font-display text-3xl font-semibold tracking-tight text-white sm:text-5xl"
        >
          {t.contributionsTitle}
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12"
        >
          {error ? (
            <p className="text-center text-sm text-zinc-400">
              {t.contributionsError}{" "}
              <a
                href={t.github}
                target="_blank"
                rel="noreferrer"
                className="text-white underline-offset-4 hover:underline"
              >
                GitHub
              </a>
              .
            </p>
          ) : (
            <div className="overflow-x-auto scrollbar-none">
              <a
                href={t.github}
                target="_blank"
                rel="noreferrer"
                aria-label={t.contributionsOpen}
                className="mx-auto block w-max"
              >
                <div
                  className="mb-1.5 grid text-[11px] text-zinc-500"
                  style={{
                    gridTemplateColumns: `repeat(${columns}, ${CELL}px)`,
                    columnGap: 3,
                  }}
                >
                  {(weeks.length ? months : []).map((month) => (
                    <span
                      key={`${month.name}-${month.index}`}
                      style={{ gridColumn: month.index + 1 }}
                      className="whitespace-nowrap"
                    >
                      {month.name}
                    </span>
                  ))}
                </div>

                <div
                  className="grid"
                  style={{
                    gridAutoFlow: "column",
                    gridTemplateRows: `repeat(7, ${CELL}px)`,
                    gridAutoColumns: `${CELL}px`,
                    gap: 3,
                  }}
                >
                  {days
                    ? weeks.flatMap((week, wi) =>
                        week.map((day, di) => (
                          <span
                            key={`${wi}-${di}`}
                            title={day ? formatDay(day) : undefined}
                            className={`rounded-[2px] ${
                              day ? LEVELS[Math.min(day.level, 4)] : "bg-transparent"
                            }`}
                          />
                        )),
                      )
                    : Array.from({ length: 53 * 7 }, (_, i) => (
                        <span key={i} className="rounded-[2px] bg-white/[0.06]" />
                      ))}
                </div>

                <div className="mt-3 flex items-center justify-between gap-6 text-[11px] text-zinc-500">
                  <div className="flex items-center gap-1.5">
                    <span>{t.contributionsLess}</span>
                    {LEVELS.map((tone) => (
                      <span key={tone} className={`size-3 rounded-[2px] ${tone}`} />
                    ))}
                    <span>{t.contributionsMore}</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <span>
                      {days
                        ? t.contributionsCount.replace("{count}", String(total))
                        : t.contributionsLoading}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <IconFlame size={14} stroke={1.8} className="text-zinc-400" />
                      {t.contributionsStreak.replace("{count}", String(streak))}
                    </span>
                  </div>
                </div>
              </a>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
