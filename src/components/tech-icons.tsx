"use client";

import type { ReactNode } from "react";

const SIMPLE: Record<string, string> = {
  TypeScript: "typescript",
  JavaScript: "javascript",
  React: "react",
  "Next.js": "nextdotjs",
  Vercel: "vercel",
  PostgreSQL: "postgresql",
  HTML: "html5",
  CSS: "css",
  Java: "openjdk",
  Tailwind: "tailwindcss",
  "Tailwind CSS": "tailwindcss",
  Docker: "docker",
  Python: "python",
  Git: "git",
  Node: "nodedotjs",
  "Node.js": "nodedotjs",
};

function SimpleIcon({ slug, label }: { slug: string; label: string }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={`https://cdn.simpleicons.org/${slug}/ffffff`}
      alt={label}
      title={label}
      width={22}
      height={22}
      className="h-[22px] w-[22px] opacity-80 transition group-hover/card:opacity-100"
      loading="lazy"
    />
  );
}

function TextBadge({ label }: { label: string }) {
  return (
    <span
      title={label}
      className="inline-flex h-[22px] items-center rounded border border-white/20 px-1.5 text-[10px] font-semibold uppercase tracking-wide text-zinc-300"
    >
      {label}
    </span>
  );
}

export function TechLogo({
  label,
  size = 22,
}: {
  label: string;
  size?: number;
}) {
  const slug = SIMPLE[label];
  if (!slug) {
    return <TextBadge label={label} />;
  }
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={`https://cdn.simpleicons.org/${slug}/ffffff`}
      alt={label}
      title={label}
      width={size}
      height={size}
      className="opacity-90"
      loading="lazy"
    />
  );
}

export function TechIcons({ tech }: { tech: readonly string[] }) {
  return (
    <ul className="mt-3 flex shrink-0 flex-nowrap items-center gap-3">
      {tech.map((item) => {
        const slug = SIMPLE[item];
        let icon: ReactNode;
        if (slug) icon = <SimpleIcon slug={slug} label={item} />;
        else icon = <TextBadge label={item} />;
        return <li key={item}>{icon}</li>;
      })}
    </ul>
  );
}
