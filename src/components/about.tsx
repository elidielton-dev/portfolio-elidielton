"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useLanguage } from "@/lib/language";

export function About() {
  const { t } = useLanguage();

  return (
    <section id="sobre" className="bg-black px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55 }}
        >
          <h2 className="font-display text-3xl font-semibold tracking-tight text-white sm:text-5xl">
            {t.aboutTitle}
          </h2>
          <div className="mt-8 space-y-5 text-base leading-relaxed text-zinc-400 sm:text-lg">
            {t.about.map((paragraph) => (
              <p key={paragraph.slice(0, 24)}>{paragraph}</p>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55 }}
          className="mx-auto w-full max-w-sm"
        >
          <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-zinc-800 shadow-2xl shadow-black/40">
            <Image
              src="/elidielton-portrait.png"
              alt={`${t.fullName}`}
              width={640}
              height={640}
              className="h-auto w-full object-cover grayscale"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
