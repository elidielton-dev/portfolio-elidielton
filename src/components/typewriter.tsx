"use client";

import { useEffect, useRef, useState } from "react";

type TypewriterProps = {
  words: string[];
  className?: string;
  onComplete?: () => void;
};

export function Typewriter({ words, className, onComplete }: TypewriterProps) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);
  const [done, setDone] = useState(false);
  const onCompleteRef = useRef(onComplete);
  const sequence = words.join("|");

  useEffect(() => {
    onCompleteRef.current = onComplete;
  }, [onComplete]);

  useEffect(() => {
    setIndex(0);
    setText("");
    setDeleting(false);
    setDone(false);
  }, [sequence]);

  useEffect(() => {
    if (done || words.length === 0) return;

    const word = words[index];
    const isLast = index === words.length - 1;
    const typeSpeed = 58;
    const deleteSpeed = 28;
    const holdAfterType = isLast ? 500 : 1400;

    if (!deleting && text === word) {
      if (isLast) {
        const finish = window.setTimeout(() => {
          setDone(true);
          onCompleteRef.current?.();
        }, holdAfterType);
        return () => window.clearTimeout(finish);
      }

      const pause = window.setTimeout(() => setDeleting(true), holdAfterType);
      return () => window.clearTimeout(pause);
    }

    const timer = window.setTimeout(
      () => {
        if (!deleting) {
          setText(word.slice(0, text.length + 1));
          return;
        }

        const next = word.slice(0, Math.max(0, text.length - 1));
        setText(next);
        if (next.length === 0) {
          setDeleting(false);
          setIndex((i) => Math.min(i + 1, words.length - 1));
        }
      },
      deleting ? deleteSpeed : typeSpeed,
    );

    return () => window.clearTimeout(timer);
  }, [text, deleting, index, words, done]);

  return (
    <span className={`whitespace-pre-line ${className ?? ""}`}>
      {text}
      <span
        aria-hidden
        className="ml-2 inline-block h-[0.85em] w-[0.12em] translate-y-[0.08em] animate-pulse bg-zinc-400/85 align-baseline"
      />
    </span>
  );
}
