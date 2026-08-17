"use client";

import { useEffect, useRef, useState, type ComponentType } from "react";
import { motion } from "framer-motion";
import {
  IconBolt,
  IconBook,
  IconHeadset,
  IconListCheck,
  IconMessageCircle,
  IconUsers,
} from "@tabler/icons-react";
import { useLanguage } from "@/lib/language";
import { TechLogo } from "./tech-icons";

const SOFT_ICONS: Record<string, ComponentType<{ size?: number; stroke?: number; className?: string }>> = {
  learn: IconBook,
  communication: IconMessageCircle,
  proactivity: IconBolt,
  team: IconUsers,
  organization: IconListCheck,
  support: IconHeadset,
};

function MarqueeRow({
  items,
  direction,
  paused,
}: {
  items: readonly string[];
  direction: "left" | "right";
  paused: boolean;
}) {
  const trackRef = useRef<HTMLDivElement>(null);
  const pausedRef = useRef(paused);
  const xRef = useRef(0);
  const readyRef = useRef(false);
  const track = [...items, ...items];

  pausedRef.current = paused;

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    let raf = 0;
    let last = performance.now();
    const pixelsPerSecond = direction === "left" ? -55 : 55;

    const tick = (now: number) => {
      const dt = Math.min(0.05, (now - last) / 1000);
      last = now;
      const half = el.scrollWidth / 2;

      if (half > 0 && !readyRef.current) {
        xRef.current = direction === "right" ? -half : 0;
        readyRef.current = true;
      }

      if (half > 0 && !pausedRef.current) {
        xRef.current += pixelsPerSecond * dt;
        if (direction === "left" && xRef.current <= -half) {
          xRef.current += half;
        }
        if (direction === "right" && xRef.current >= 0) {
          xRef.current -= half;
        }
        el.style.transform = `translate3d(${xRef.current}px, 0, 0)`;
      }

      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [direction, items.join("|")]);

  return (
    <div className="overflow-hidden">
      <div ref={trackRef} className="flex w-max flex-nowrap will-change-transform">
        {track.map((item, i) => (
          <div
            key={`${item}-${i}`}
            className="mx-1.5 flex shrink-0 items-center gap-3 rounded-full border border-white/10 bg-white/[0.03] px-5 py-2.5"
          >
            <TechLogo label={item} size={18} />
            <span className="text-sm text-zinc-200">{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function Skills() {
  const { t } = useLanguage();
  const [paused, setPaused] = useState(false);
  const rowA = t.hardSkills;
  const rowB = [...t.hardSkills].reverse();

  return (
    <section id="skills" className="bg-black px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center font-display text-3xl font-semibold tracking-tight text-white sm:text-5xl"
        >
          {t.hardSkillsTitle}
        </motion.h2>
      </div>

      <div
        className="mt-10 space-y-3"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <MarqueeRow items={rowA} direction="right" paused={paused} />
        <MarqueeRow items={rowB} direction="left" paused={paused} />
      </div>

      <div className="mx-auto mt-24 max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center font-display text-3xl font-semibold tracking-tight text-white sm:text-5xl"
        >
          {t.softSkillsTitle}
        </motion.h2>

        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {t.softSkills.map((item, i) => {
            const Icon = SOFT_ICONS[item.key] ?? IconBolt;
            return (
              <motion.li
                key={item.key}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
                className="rounded-2xl border border-white/10 bg-white/[0.02] px-6 py-8 text-center transition hover:border-white/20 hover:bg-white/[0.04]"
              >
                <Icon size={26} stroke={1.6} className="mx-auto text-white" />
                <h3 className="mt-4 text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-400">{item.description}</p>
              </motion.li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
