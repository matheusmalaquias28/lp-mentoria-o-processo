import type { Metadata, Viewport } from "next";
import { JetBrains_Mono, Manrope } from "next/font/google";
import { SmoothScroll } from "@/components/motion/SmoothScroll";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title: "Mentoria O PROCESSO · Heitor Nogueira",
  description:
    "Lucre com ofertas low ticket. Sem aparecer, sem ser especialista e sem copiar ninguém. Metodologia MVT, duas calls ao vivo por semana e acesso vitalício.",
  openGraph: {
    title: "Mentoria O PROCESSO · Heitor Nogueira",
    description: "Lucre com ofertas low ticket. Sem aparecer, sem ser especialista e sem copiar ninguém.",
    locale: "pt_BR",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
};

// Marca <html> com .motion antes da primeira pintura: o CSS só esconde o que o GSAP vai revelar.
const motionFlag = `if(!matchMedia('(prefers-reduced-motion: reduce)').matches)document.documentElement.classList.add('motion')`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR" className={`${manrope.variable} ${jetbrains.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: motionFlag }} />
      </head>
      <body>
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
