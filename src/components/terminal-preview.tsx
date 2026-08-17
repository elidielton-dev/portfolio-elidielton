"use client";

import { useLanguage } from "@/lib/language";
import type { Locale } from "@/lib/i18n";

type Tone = "dim" | "cmd" | "ok" | "info" | "warn";

type Line = {
  tone: Tone;
  text: string;
};

const TONE: Record<Tone, string> = {
  dim: "text-zinc-500",
  cmd: "text-zinc-200",
  ok: "text-emerald-400",
  info: "text-sky-300",
  warn: "text-amber-300",
};

const SESSIONS: Record<string, { file: string; lines: Record<Locale, Line[]> }> = {
  ControlMoney: {
    file: "ControlMoney.java",
    lines: {
      pt: [
        { tone: "dim", text: "$ java ControlMoney" },
        { tone: "ok", text: "=== ControlMoney ===" },
        { tone: "dim", text: "1. Cadastrar receita" },
        { tone: "dim", text: "2. Cadastrar despesa" },
        { tone: "dim", text: "3. Ver extrato" },
        { tone: "dim", text: "4. Consultar saldo" },
        { tone: "cmd", text: "> 4" },
        { tone: "warn", text: "Saldo atual: R$ 1.240,50" },
      ],
      en: [
        { tone: "dim", text: "$ java ControlMoney" },
        { tone: "ok", text: "=== ControlMoney ===" },
        { tone: "dim", text: "1. Add income" },
        { tone: "dim", text: "2. Add expense" },
        { tone: "dim", text: "3. View statement" },
        { tone: "dim", text: "4. Check balance" },
        { tone: "cmd", text: "> 4" },
        { tone: "warn", text: "Current balance: R$ 1,240.50" },
      ],
    },
  },
  Banco: {
    file: "Banco.java",
    lines: {
      pt: [
        { tone: "dim", text: "$ java Banco" },
        { tone: "info", text: "Agência 0001  |  Conta 001-8" },
        { tone: "dim", text: "Titular: Elidielton Rodrigues" },
        { tone: "cmd", text: "> depositar 500" },
        { tone: "ok", text: "Depósito confirmado." },
        { tone: "warn", text: "Saldo: R$ 1.820,00" },
        { tone: "cmd", text: "> sacar 120" },
        { tone: "ok", text: "Saque realizado.  Saldo: R$ 1.700,00" },
      ],
      en: [
        { tone: "dim", text: "$ java Banco" },
        { tone: "info", text: "Branch 0001  |  Account 001-8" },
        { tone: "dim", text: "Holder: Elidielton Rodrigues" },
        { tone: "cmd", text: "> deposit 500" },
        { tone: "ok", text: "Deposit confirmed." },
        { tone: "warn", text: "Balance: R$ 1,820.00" },
        { tone: "cmd", text: "> withdraw 120" },
        { tone: "ok", text: "Withdrawal done.  Balance: R$ 1,700.00" },
      ],
    },
  },
  "prova-POO / ProjetoExtra": {
    file: "Batalha.java",
    lines: {
      pt: [
        { tone: "dim", text: "$ java Batalha" },
        { tone: "info", text: "--- ROUND 1 ---" },
        { tone: "cmd", text: "Guerreiro ataca Dragão" },
        { tone: "ok", text: "12 de dano" },
        { tone: "cmd", text: "Dragão ataca Guerreiro" },
        { tone: "warn", text: "8 de dano" },
        { tone: "ok", text: "Guerreiro venceu a batalha." },
      ],
      en: [
        { tone: "dim", text: "$ java Batalha" },
        { tone: "info", text: "--- ROUND 1 ---" },
        { tone: "cmd", text: "Warrior attacks Dragon" },
        { tone: "ok", text: "12 damage" },
        { tone: "cmd", text: "Dragon attacks Warrior" },
        { tone: "warn", text: "8 damage" },
        { tone: "ok", text: "Warrior won the battle." },
      ],
    },
  },
};

export function TerminalPreview({ title }: { title: string }) {
  const { locale } = useLanguage();
  const session = SESSIONS[title];
  if (!session) return null;

  const lines = session.lines[locale];

  return (
    <div className="absolute inset-0 bg-[#070708] p-3 sm:p-3.5">
      <div className="flex h-full flex-col overflow-hidden rounded-xl border border-white/10 bg-[#0c0c0f] shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
        <div className="flex shrink-0 items-center gap-2 border-b border-white/10 px-3 py-2">
          <span className="size-2 rounded-full bg-[#ff5f57]" />
          <span className="size-2 rounded-full bg-[#febc2e]" />
          <span className="size-2 rounded-full bg-[#28c840]" />
          <span className="ml-1 truncate font-mono text-[10px] text-zinc-500">
            {session.file}
          </span>
          <span className="ml-auto hidden font-mono text-[9px] uppercase tracking-wider text-zinc-600 sm:inline">
            java · console
          </span>
        </div>
        <div className="flex-1 overflow-hidden px-3 py-2.5 font-mono text-[11px] leading-[1.55] sm:text-[12px]">
          {lines.map((line, i) => (
            <p key={`${line.text}-${i}`} className={TONE[line.tone]}>
              {line.text}
            </p>
          ))}
          <p className="text-zinc-200">
            <span className="text-zinc-500">&gt; </span>
            <span className="inline-block h-[12px] w-[7px] translate-y-px bg-zinc-200 align-middle animate-pulse" />
          </p>
        </div>
      </div>
    </div>
  );
}

export function hasTerminalPreview(title: string) {
  return title in SESSIONS;
}
