"use client";

import { useCallback, useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useLanguage } from "@/lib/language";
import { IconExternalLink } from "@tabler/icons-react";
import { TechIcons } from "./tech-icons";
import { TerminalPreview, hasTerminalPreview } from "./terminal-preview";

const PREVIEWS: Record<string, string> = {
  NorFood: "/projects/norfood-live.png",
  "Abelha & Mel": "/projects/abelha-e-mel-loja.png",
  Belíssima: "/projects/belissima-live.png",
  "Sertão Replay": "/projects/sertao-replay.png",
};

export function Projects() {
  const { t } = useLanguage();
  const wrapRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef(0);

  const applyDesktopProgress = useCallback((value: number) => {
    const track = trackRef.current;
    if (!track) return;
    const maxX = Math.max(0, track.scrollWidth - track.clientWidth);
    const next = Math.min(1, Math.max(0, value));
    progressRef.current = next;
    track.style.transform = `translate3d(${-next * maxX}px, 0, 0)`;
  }, []);

  const syncFromPageScroll = useCallback(() => {
    if (!window.matchMedia("(min-width: 768px)").matches) {
      if (trackRef.current) trackRef.current.style.transform = "";
      return;
    }
    const wrap = wrapRef.current;
    if (!wrap) return;
    const rect = wrap.getBoundingClientRect();
    const scrollable = wrap.offsetHeight - window.innerHeight;
    if (scrollable <= 0) {
      applyDesktopProgress(0);
      return;
    }
    const value = -rect.top / scrollable;
    applyDesktopProgress(value);
  }, [applyDesktopProgress]);

  useEffect(() => {
    syncFromPageScroll();
    window.addEventListener("scroll", syncFromPageScroll, { passive: true });
    window.addEventListener("resize", syncFromPageScroll);
    return () => {
      window.removeEventListener("scroll", syncFromPageScroll);
      window.removeEventListener("resize", syncFromPageScroll);
    };
  }, [syncFromPageScroll, t.projects]);

  return (
    <section
      ref={wrapRef}
      id="projetos"
      className="relative bg-black md:h-[320vh]"
    >
      <div className="bg-black md:sticky md:top-0 md:flex md:h-screen md:flex-col md:justify-center md:overflow-hidden md:pb-6">
        <div className="w-full px-5 pt-24 sm:px-10 md:pt-8 lg:px-16">
          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-4xl font-semibold tracking-tight text-white sm:text-6xl"
          >
            {t.projectsTitle}
          </motion.h2>
        </div>

        <div
          ref={trackRef}
          className="mt-8 flex w-full gap-6 px-5 pb-10 will-change-transform sm:px-10 md:mt-8 md:overflow-visible md:pb-0 lg:px-16 max-md:snap-x max-md:snap-mandatory max-md:overflow-x-auto max-md:overscroll-x-contain max-md:touch-pan-x max-md:scrollbar-none"
        >
          {t.projects.map((project, i) => {
            const href = project.live ?? project.github;
            const preview = PREVIEWS[project.title];
            return (
              <motion.article
                key={project.title}
                data-project-card
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: i * 0.04 }}
                className="group/card flex w-[min(88vw,24rem)] shrink-0 flex-col max-md:snap-start sm:w-[28rem]"
              >
                <span className="mb-2 block text-3xl font-semibold tabular-nums text-zinc-600">
                  {project.number}
                </span>

                <a
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="block overflow-hidden rounded-2xl border border-white/10 outline-none ring-white/20 transition focus-visible:ring-2"
                >
                  <div
                    className={`relative aspect-[16/10] overflow-hidden bg-gradient-to-br ${project.accent} grayscale transition duration-500 ease-out group-hover/card:grayscale-0`}
                  >
                    {hasTerminalPreview(project.title) ? (
                      <TerminalPreview title={project.title} />
                    ) : preview ? (
                      <Image
                        src={preview}
                        alt={project.title}
                        fill
                        sizes="(max-width: 768px) 88vw, 28rem"
                        className="object-cover object-top"
                      />
                    ) : (
                      <>
                        <div className="absolute inset-0 opacity-30 [background-image:radial-gradient(circle_at_18%_20%,#fff,transparent_34%),radial-gradient(circle_at_85%_75%,#fafafa,transparent_28%)]" />
                        <div className="absolute inset-x-4 top-4 bottom-4 rounded-xl border border-white/15 bg-black/25 p-3 backdrop-blur-[2px]" />
                      </>
                    )}

                    {project.live ? (
                      <span className="absolute bottom-3 right-3 inline-flex items-center gap-1.5 rounded-full bg-black/55 px-3 py-1.5 text-xs font-medium text-white opacity-0 backdrop-blur transition duration-300 group-hover/card:opacity-100">
                        <IconExternalLink size={14} stroke={2} />
                        {t.demo}
                      </span>
                    ) : null}
                  </div>
                </a>

                <h3 className="mt-4 text-2xl font-semibold text-white">{project.title}</h3>
                <p className="mt-1.5 line-clamp-2 min-h-[2.6em] max-w-md text-sm leading-snug text-zinc-400 sm:text-[15px]">
                  {project.description}
                </p>
                <TechIcons tech={project.tech} />
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
