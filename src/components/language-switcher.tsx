"use client";

import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/lib/language";
import type { Locale } from "@/lib/i18n";
import { BrazilFlag, UsaFlag } from "./flag-icons";
import { CheckIcon, ChevronDownIcon } from "./social-icons";

const options: { id: Locale; label: string }[] = [
  { id: "pt", label: "Português" },
  { id: "en", label: "English" },
];

function Flag({ id, size = 18 }: { id: Locale; size?: number }) {
  return id === "pt" ? <BrazilFlag size={size} /> : <UsaFlag size={size} />;
}

export function LanguageSwitcher({ className = "" }: { className?: string }) {
  const { locale, setLocale, t } = useLanguage();
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onPointerDown = (event: MouseEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false);
    };
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  return (
    <div ref={rootRef} className={`relative ${className}`}>
      <button
        type="button"
        aria-haspopup="menu"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="ml-2 flex cursor-pointer items-center gap-2 text-base font-semibold text-white outline-none transition hover:text-zinc-300"
      >
        {t.languageLabel}
        <ChevronDownIcon
          size={18}
          stroke={2}
          className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open ? (
        <div
          role="menu"
          className="absolute right-0 top-[calc(100%+10px)] z-[120] min-w-[11.5rem] overflow-hidden rounded-xl border border-white/10 bg-zinc-950/95 p-1.5 shadow-2xl shadow-black/50 backdrop-blur-md"
        >
          {options.map((option) => {
            const selected = locale === option.id;
            return (
              <button
                key={option.id}
                type="button"
                role="menuitem"
                onClick={() => {
                  setLocale(option.id);
                  setOpen(false);
                }}
                className={`flex w-full items-center gap-2.5 rounded-lg px-3 py-2.5 text-left text-sm transition ${
                  selected ? "bg-white/10 text-white" : "text-zinc-300 hover:bg-white/5 hover:text-white"
                }`}
              >
                <span className="inline-flex shrink-0 overflow-hidden rounded-full">
                  <Flag id={option.id} size={18} />
                </span>
                <span className="flex-1 font-medium">{option.label}</span>
                {selected ? <CheckIcon size={16} stroke={2.4} className="text-white" /> : null}
              </button>
            );
          })}
        </div>
      ) : null}
    </div>
  );
}
