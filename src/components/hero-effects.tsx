"use client";

import { useEffect, useRef } from "react";

type Cloud = {
  x: number;
  y: number;
  r: number;
  speed: number;
  phase: number;
  alpha: number;
};

export function HeroEffects({ active }: { active: boolean }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) return;

    const clouds: Cloud[] = Array.from({ length: 7 }, (_, i) => ({
      x: 0.12 + ((i * 0.13) % 0.78),
      y: 0.18 + ((i * 0.17) % 0.64),
      r: 0.42 + (i % 3) * 0.1,
      speed: 0.32 + i * 0.04,
      phase: i * 1.1,
      alpha: 0.16 + (i % 3) * 0.04,
    }));

    const resize = () => {
      const parent = canvas.parentElement;
      const w = parent?.clientWidth ?? window.innerWidth;
      const h = parent?.clientHeight ?? window.innerHeight;
      if (w < 8 || h < 8) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
    };

    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas.parentElement ?? canvas);

    let frame = 0;
    let running = true;
    const start = performance.now();

    const draw = (now: number) => {
      if (!running) return;
      const w = canvas.width;
      const h = canvas.height;
      if (w < 8 || h < 8) {
        frame = requestAnimationFrame(draw);
        return;
      }

      const t = (now - start) / 1000;
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.globalCompositeOperation = "source-over";
      ctx.filter = "none";
      ctx.fillStyle = "#050505";
      ctx.fillRect(0, 0, w, h);

      ctx.filter = "blur(28px)";
      ctx.globalCompositeOperation = "lighter";
      for (const cloud of clouds) {
        const x = (cloud.x + Math.sin(t * cloud.speed + cloud.phase) * 0.22) * w;
        const y = (cloud.y + Math.cos(t * cloud.speed * 0.85 + cloud.phase) * 0.18) * h;
        const r = cloud.r * Math.min(w, h);
        const g = ctx.createRadialGradient(x, y, 0, x, y, r);
        g.addColorStop(0, `rgba(170,170,176,${cloud.alpha})`);
        g.addColorStop(0.45, `rgba(120,120,126,${cloud.alpha * 0.45})`);
        g.addColorStop(1, "rgba(5,5,5,0)");
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(x, y, r, 0, Math.PI * 2);
        ctx.fill();
      }

      frame = requestAnimationFrame(draw);
    };

    frame = requestAnimationFrame(draw);

    return () => {
      running = false;
      cancelAnimationFrame(frame);
      ro.disconnect();
    };
  }, []);

  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-0 z-0 overflow-hidden bg-[#050505] transition-opacity duration-700 ${
        active ? "opacity-100" : "opacity-0"
      }`}
    >
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />
      <div className="hero-grain absolute inset-0" />
    </div>
  );
}
