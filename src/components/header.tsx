"use client";

import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/lib/language";
import { LanguageSwitcher } from "./language-switcher";
import { CloseIcon, GithubIcon, LinkedinIcon, MenuIcon } from "./social-icons";

export function Header() {
  const { t } = useLanguage();
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const lastY = useRef(0);
  const openRef = useRef(false);

  const links = [
    { href: "#sobre", label: t.navAbout },
    { href: "#projetos", label: t.navProjects },
  ];

  useEffect(() => {
    openRef.current = open;
    if (open) setVisible(true);
  }, [open]);

  useEffect(() => {
    lastY.current = window.scrollY;

    const onScroll = () => {
      const y = Math.max(0, window.scrollY);
      const delta = y - lastY.current;
      const nearTop = y < 40;

      setScrolled(y > 8);

      if (openRef.current || nearTop) {
        setVisible(true);
      } else if (delta < -4) {
        setVisible(true);
      } else if (delta > 4) {
        setVisible(false);
      }

      lastY.current = y;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`site-header inset-x-0 top-0 transition-transform duration-300 ease-out ${
        visible ? "translate-y-0" : "-translate-y-full pointer-events-none"
      } ${scrolled ? "border-b border-white/5 bg-black/70 backdrop-blur-md" : "bg-transparent"}`}
    >
      <div className="mx-auto flex h-20 w-full max-w-6xl items-center justify-between px-5 sm:px-8">
        <a href="#topo" className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          {t.firstName}
        </a>

        <nav className="hidden items-center gap-6 text-lg font-semibold text-white md:flex">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="transition hover:text-zinc-300">
              {link.label}
            </a>
          ))}
          <div className="flex items-center gap-2">
            <a
              href={t.github}
              target="_blank"
              rel="noreferrer"
              aria-label={t.openGithub}
              className="transition hover:text-zinc-300"
            >
              <GithubIcon size={24} stroke={2} />
            </a>
            <a
              href={t.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label={t.openLinkedin}
              className="transition hover:text-zinc-300"
            >
              <LinkedinIcon size={24} stroke={2} />
            </a>
          </div>
          <LanguageSwitcher />
        </nav>

        <button
          type="button"
          className="text-white md:hidden"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <CloseIcon size={22} stroke={2} /> : <MenuIcon size={22} stroke={2} />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-white/5 bg-black/95 px-5 py-4 md:hidden">
          <div className="flex flex-col gap-4 text-base font-semibold text-zinc-300">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="transition hover:text-white"
              >
                {link.label}
              </a>
            ))}
            <div className="flex items-center gap-4 pt-1">
              <a href={t.github} target="_blank" rel="noreferrer" aria-label={t.openGithub}>
                <GithubIcon size={24} stroke={2} />
              </a>
              <a href={t.linkedin} target="_blank" rel="noreferrer" aria-label={t.openLinkedin}>
                <LinkedinIcon size={24} stroke={2} />
              </a>
              <LanguageSwitcher />
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
