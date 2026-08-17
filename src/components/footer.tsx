"use client";

import { useLanguage } from "@/lib/language";
import { GithubIcon, LinkedinIcon, MailIcon } from "./social-icons";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-white/10 bg-black px-5 py-16 sm:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <div>
          <h2 className="font-display text-3xl font-semibold text-white">{t.fullName}</h2>
          <a
            href={`mailto:${t.email}`}
            className="mt-3 block text-zinc-400 transition hover:text-white"
          >
            {t.email}
          </a>
          <p className="mt-1 text-zinc-500">{t.location}</p>
        </div>

        <div className="flex flex-col items-start gap-4 md:items-end">
          <div className="flex gap-5 text-sm tracking-wider text-zinc-300">
            <a
              href={t.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 transition hover:text-white"
            >
              <GithubIcon size={16} stroke={2} /> GITHUB
            </a>
            <a
              href={t.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 transition hover:text-white"
            >
              <LinkedinIcon size={16} stroke={2} /> LINKEDIN
            </a>
            <a
              href={`mailto:${t.email}`}
              className="inline-flex items-center gap-2 transition hover:text-white"
            >
              <MailIcon size={16} stroke={2} /> E-MAIL
            </a>
          </div>
          <p className="text-sm text-zinc-600">© {new Date().getFullYear()}</p>
        </div>
      </div>
    </footer>
  );
}
