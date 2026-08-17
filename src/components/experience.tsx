"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/lib/language";

export function Experience() {
  const { t } = useLanguage();
  const trackRef = useRef<HTMLDivElement>(null);
  const fillRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    const fill = fillRef.current;
    const dot = dotRef.current;
    if (!track || !fill || !dot) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const ease = reduced ? 1 : 0.16;

    let current = 0;
    let target = 0;
    let height = 1;
    let frame = 0;
    let visible = false;

    const read = () => {
      const rect = track.getBoundingClientRect();
      height = rect.height;
      if (height <= 0) return;
      target = Math.min(height, Math.max(0, window.innerHeight * 0.5 - rect.top));
    };

    const apply = () => {
      current += (target - current) * ease;
      if (Math.abs(target - current) < 0.2) current = target;

      const progress = current / height;
      fill.style.transform = `scaleY(${progress})`;
      dot.style.transform = `translate3d(-50%, calc(-50% + ${current}px), 0)`;
    };

    const loop = () => {
      read();
      apply();
      const moving = Math.abs(target - current) > 0.2;
      frame = visible || moving ? requestAnimationFrame(loop) : 0;
    };

    const start = () => {
      if (!frame) frame = requestAnimationFrame(loop);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting;
        if (visible) start();
      },
      { threshold: 0 },
    );

    observer.observe(track);
    read();
    apply();

    document.addEventListener("scroll", start, { passive: true, capture: true });
    window.addEventListener("resize", start);

    return () => {
      visible = false;
      observer.disconnect();
      document.removeEventListener("scroll", start, { capture: true });
      window.removeEventListener("resize", start);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <section id="experiencia" className="bg-black px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center font-display text-3xl font-semibold tracking-tight text-white sm:text-5xl"
        >
          {t.experienceTitle}
        </motion.h2>

        <div ref={trackRef} className="relative mt-16 md:mt-20">
          <div
            aria-hidden
            className="pointer-events-none absolute top-0 left-4 z-20 h-full w-px md:left-[calc(50%-0.5px)]"
          >
            <div className="absolute inset-0 bg-white/15" />
            <div
              ref={fillRef}
              className="absolute top-0 left-0 h-full w-full origin-top bg-white shadow-[0_0_10px_rgba(255,255,255,0.5)] will-change-transform"
              style={{ transform: "scaleY(0)" }}
            />
            <span
              ref={dotRef}
              className="absolute top-0 left-1/2 size-3 rounded-full border-2 border-white bg-black shadow-[0_0_18px_6px_rgba(255,255,255,0.55)] will-change-transform"
              style={{ transform: "translate3d(-50%, -50%, 0)" }}
            />
          </div>

          <div className="space-y-16 md:space-y-24">
            {t.experiences.map((item, i) => (
              <motion.article
                key={`${item.role}-${item.company}`}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ delay: i * 0.05 }}
                className="relative grid items-start gap-4 pl-10 md:grid-cols-2 md:gap-0 md:pl-0"
              >
                <div className="flex items-start justify-start gap-4 md:justify-end md:pr-10">
                  <div className="md:text-right">
                    <h3 className="text-lg font-semibold text-white sm:text-xl">{item.role}</h3>
                    <p className="mt-1 text-sm text-zinc-400">{item.company}</p>
                  </div>
                  <p className="hidden shrink-0 pt-1.5 text-[11px] font-medium uppercase tracking-[0.12em] text-zinc-500 md:block">
                    {item.period}
                  </p>
                </div>

                <div className="md:pl-10">
                  <p className="mb-2 text-[11px] font-medium uppercase tracking-[0.12em] text-zinc-500 md:hidden">
                    {item.period}
                  </p>
                  <p className="text-sm leading-relaxed text-zinc-400 sm:text-base">{item.description}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
