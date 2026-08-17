import type { Metadata } from "next";
import { Bricolage_Grotesque, Geist_Mono } from "next/font/google";
import { LanguageProvider } from "@/lib/language";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfólio Elidielton Rodrigues | Desenvolvedor Fullstack",
  description:
    "Portfólio de Elidielton Rodrigues — Desenvolvedor Fullstack em Custódia-PE. Projetos em TypeScript, React, Java e mais.",
  metadataBase: new URL("https://elidielton-dev.vercel.app"),
  openGraph: {
    title: "Elidielton Rodrigues | Desenvolvedor Fullstack",
    description: "Aplicações web reais, do backend às interfaces modernas.",
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR" className={`${bricolage.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="noise-bg min-h-full font-sans">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
