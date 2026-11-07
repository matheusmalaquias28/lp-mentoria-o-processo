/*
 * Mockups desenhados em código (sem imagem): leves, nítidos em qualquer tela
 * e já com os dados reais da copy.
 */
import type { CSSProperties } from "react";
import Image from "next/image";
import { modules } from "@/content";
import { Check, Play } from "@/components/ui/Icons";

/* ---------- ebook dos Salmos ---------- */
export function EbookCover({ className = "", tilt = true }: { className?: string; tilt?: boolean }) {
  return (
    <div className={`relative aspect-[3/4] [perspective:1200px] ${className}`}>
      <div
        className={`relative flex h-full w-full flex-col overflow-hidden rounded-[3px_8px_8px_3px] bg-[#f3eee6] text-[#141210] shadow-[18px_28px_50px_-18px_rgb(0_0_0/0.75)] ${tilt ? "origin-left [transform:rotateY(-16deg)]" : ""}`}
      >
        <span className="absolute inset-y-0 left-0 w-[7%] bg-gradient-to-r from-[#2b2520] to-[#4a4038]" />
        <span className="absolute inset-y-0 left-[7%] w-px bg-white/40" />
        <div className="flex flex-1 flex-col justify-between py-[12%] pl-[18%] pr-[10%]">
          <span className="font-mono text-[0.42em] font-medium uppercase tracking-[0.2em] text-[#8a7f72]">Ebook</span>
          <div>
            <p className="text-[1.15em] leading-[0.95] font-extrabold tracking-[-0.04em]">
              Os 150
              <br />
              Salmos
            </p>
            <p className="mt-[0.6em] text-[0.48em] leading-snug font-semibold text-[#5b524a]">
              explicados versículo por versículo
            </p>
          </div>
          <span className="h-[2px] w-[30%] bg-red" />
        </div>
      </div>
    </div>
  );
}

/* ---------- "tela aberta": recibo do ebook ---------- */
export function OpenScreenCard({ className = "" }: { className?: string }) {
  return (
    <div
      className={`rounded-2xl border border-white/12 bg-ink-2/90 p-5 text-white shadow-[0_30px_60px_-20px_rgb(0_0_0/0.9)] backdrop-blur-md ${className}`}
    >
      <div className="flex items-center justify-between gap-3">
        <span className="label text-[0.625rem] text-mute-d">Tela aberta · Salmos</span>
        <span className="label text-[0.625rem] text-faint-d">fev a abr 2025</span>
      </div>
      <p className="mt-4 text-[0.75rem] font-semibold text-mute-d">Faturamento</p>
      <p className="tabular text-[2rem] leading-none font-extrabold tracking-[-0.04em]">R$ 531.020</p>
      <div className="mt-4 grid grid-cols-2 gap-px overflow-hidden rounded-lg bg-white/10">
        <div className="bg-ink-2 p-3">
          <p className="text-[0.6875rem] text-mute-d">Vendas</p>
          <p className="tabular text-[1.05rem] font-bold">20.297</p>
        </div>
        <div className="bg-ink-2 p-3">
          <p className="text-[0.6875rem] text-mute-d">Lucro</p>
          <p className="tabular text-[1.05rem] font-bold text-red-hi">R$ 171.782</p>
        </div>
      </div>
    </div>
  );
}

/* ---------- anúncio no feed ---------- */
export function AdMock({ className = "" }: { className?: string }) {
  return (
    <div
      className={`rounded-[2.2rem] border border-white/15 bg-black p-2.5 shadow-[0_40px_80px_-30px_rgb(0_0_0/0.9)] ${className}`}
    >
      <div className="overflow-hidden rounded-[1.7rem] bg-[#0f0f0f] text-white">
        <div className="flex items-center gap-2.5 px-3.5 py-3">
          <span className="size-7 rounded-full bg-gradient-to-br from-[#f3eee6] to-[#8a7f72]" />
          <div className="leading-tight">
            <p className="text-[0.75rem] font-bold">salmos.explicados</p>
            <p className="text-[0.625rem] text-white/50">Patrocinado</p>
          </div>
        </div>
        <div className="grid aspect-square place-items-center bg-[radial-gradient(circle_at_50%_40%,#2a2522,#0d0c0b)]">
          <EbookCover className="w-[46%] text-[1.35rem]" />
        </div>
        <div className="flex items-center justify-between gap-2 bg-white/[0.06] px-3.5 py-2.5">
          <p className="text-[0.6875rem] font-semibold">Os 150 Salmos explicados</p>
          <span className="rounded-md bg-white px-2.5 py-1 text-[0.625rem] font-bold text-black">Comprar</span>
        </div>
        <p className="px-3.5 py-3 text-[0.6875rem] leading-snug text-white/70">
          Todos os 150 Salmos explicados versículo por versículo. Por <b className="text-white">R$ 27,90</b>.
        </p>
      </div>
    </div>
  );
}

/* ---------- semáforo ---------- */
export function TrafficLight({ compact, row }: { compact?: boolean; row?: boolean }) {
  const lights = [
    { c: "#1fbf5f", t: "Verde roda" },
    { c: "#f5b400", t: "Amarelo ajusta" },
    { c: "#e8141c", t: "Vermelho descarta" },
  ];
  const layout = compact ? "gap-2" : row ? "flex-wrap gap-x-6 gap-y-3" : "flex-col gap-2.5";
  return (
    <div className={`flex ${layout}`}>
      {lights.map((l) => (
        <div key={l.t} className="flex items-center gap-2.5">
          <span
            className="size-3.5 rounded-full"
            style={{ background: l.c, boxShadow: `0 0 0 4px ${l.c}22, 0 0 18px ${l.c}66` }}
          />
          {!compact && <span className="text-[0.875rem] font-semibold">{l.t}</span>}
        </div>
      ))}
    </div>
  );
}

/* ---------- área de membros: 11 módulos ---------- */
export function MembersMock() {
  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-ink text-white">
      <div className="flex items-center gap-1.5 border-b border-white/10 px-4 py-3">
        <span className="size-2.5 rounded-full bg-white/15" />
        <span className="size-2.5 rounded-full bg-white/15" />
        <span className="size-2.5 rounded-full bg-white/15" />
        <span className="label ml-3 text-[0.625rem] text-faint-d">área de membros · O PROCESSO</span>
      </div>
      <ol className="divide-y divide-white/[0.07]">
        {modules.map((m, i) => (
          <li key={m} className="flex items-center gap-3 px-4 py-2.5 text-[0.8125rem]">
            <span className="label w-5 text-[0.625rem] text-faint-d">{String(i + 1).padStart(2, "0")}</span>
            <span className={`flex-1 font-semibold ${i === 0 ? "text-white" : "text-white/75"}`}>{m}</span>
            {i < 3 ? (
              <span className="grid size-5 place-items-center rounded-full bg-red text-white">
                <Check className="size-3" />
              </span>
            ) : i === 3 ? (
              <span className="label text-[0.5625rem] text-red-hi">assistindo</span>
            ) : (
              <span className="size-5 rounded-full border border-white/15" />
            )}
          </li>
        ))}
      </ol>
    </div>
  );
}

/* ---------- Mesa de Guerra (call ao vivo) ---------- */
export function CallMock() {
  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-ink">
      <div className="flex items-center justify-between px-4 py-3">
        <span className="flex items-center gap-2">
          <span className="relative flex size-2">
            <span className="absolute inset-0 animate-ping rounded-full bg-red" />
            <span className="relative size-2 rounded-full bg-red" />
          </span>
          <span className="label text-[0.625rem] text-white">ao vivo · segunda 19h</span>
        </span>
        <span className="label text-[0.625rem] text-faint-d">Mesa de Guerra</span>
      </div>
      <div className="grid grid-cols-3 gap-1.5 p-1.5 pt-0">
        <div className="col-span-2 row-span-2 grid aspect-[4/3] h-full w-full place-items-center rounded-xl bg-[radial-gradient(circle_at_50%_35%,#2a2a2a,#131313)]">
          <div className="text-center">
            <span className="mx-auto grid size-12 place-items-center rounded-full bg-white/10 text-[0.9rem] font-extrabold text-white">
              HN
            </span>
            <p className="mt-2 text-[0.6875rem] font-semibold text-white/70">Heitor analisando a sua página</p>
          </div>
        </div>
        {Array.from({ length: 2 }).map((_, i) => (
          <div key={i} className="aspect-[4/3] rounded-xl bg-white/[0.05]" />
        ))}
      </div>
    </div>
  );
}

/* ---------- chat do HUB ---------- */
export function ChatMock() {
  return (
    <div className="flex flex-col gap-2.5 text-[0.8125rem] leading-snug">
      <div className="max-w-[85%] self-end rounded-2xl rounded-br-md bg-white/10 px-3.5 py-2.5 text-white/90">
        Heitor, minha concepção passou no semáforo. Posso subir o anúncio?
      </div>
      <div className="max-w-[85%] rounded-2xl rounded-bl-md bg-red px-3.5 py-2.5 text-white">
        Pode. Só troca o primeiro frame: mostra o produto aberto, não a capa.
        <span className="mt-1 block text-[0.6875rem] font-semibold text-white/70">Heitor · HUB</span>
      </div>
    </div>
  );
}

/* ---------- agentes de IA ---------- */
/* os agentes de IA, cada um com o seu personagem flutuando e o nome embaixo */
const agents = [
  { name: "Ideia", src: "/agentes/ideia.webp", w: 360, h: 508, glow: "#ff4a4a" },
  { name: "Oferta", src: "/agentes/oferta.webp", w: 360, h: 402, glow: "#a35bff" },
  { name: "Página", src: "/agentes/pagina.webp", w: 360, h: 395, glow: "#3d8bff" },
  { name: "Anúncio", src: "/agentes/anuncio.webp", w: 360, h: 391, glow: "#ff9a1f" },
];

export function AgentsMock() {
  return (
    <ul className="grid grid-cols-4 gap-2 sm:gap-3" aria-label="Agentes de IA: Ideia, Oferta, Página e Anúncio">
      {agents.map((a, i) => (
        <li key={a.name} className="flex flex-col items-center">
          <div
            className="float flex h-24 w-full items-end justify-center [--float:-6px] sm:h-28"
            style={{ "--d": `${-i * 0.9}s`, animationDuration: "3.6s" } as CSSProperties}
          >
            <Image
              src={a.src}
              alt={`Agente ${a.name}`}
              width={a.w}
              height={a.h}
              sizes="(min-width: 1024px) 7rem, 24vw"
              className="h-full w-auto max-w-full object-contain object-bottom"
              style={{ filter: `drop-shadow(0 8px 16px ${a.glow}55)` }}
            />
          </div>
          <span className="relative -mt-1 inline-flex items-center gap-1.5 rounded-full border border-white/12 bg-ink px-2 py-1 text-[0.6875rem] font-semibold whitespace-nowrap text-white sm:px-2.5 sm:text-[0.75rem]">
            <span className="size-1.5 rounded-full bg-[#1fbf5f] shadow-[0_0_8px_#1fbf5f]" aria-hidden />
            {a.name}
          </span>
        </li>
      ))}
    </ul>
  );
}

/* ---------- player (capa de vídeo) ---------- */
export function PlayBadge({ size = "md" }: { size?: "md" | "lg" }) {
  const s = size === "lg" ? "size-20" : "size-14";
  return (
    <span className={`relative grid ${s} place-items-center rounded-full bg-red text-white shadow-[0_10px_30px_-6px_rgb(232_20_28/0.8)]`}>
      <span className="absolute inset-0 animate-ping rounded-full bg-red/40 [animation-duration:2.2s]" />
      <Play className="relative translate-x-[1px]" width={size === "lg" ? 28 : 22} height={size === "lg" ? 28 : 22} />
    </span>
  );
}

/* ---------- placas de premiação ---------- */
const metals = {
  gold: {
    bg: "linear-gradient(135deg,#6e4f12 0%,#e9c46a 22%,#a8791f 45%,#fff0b8 62%,#b5862a 80%,#5e420d 100%)",
    ink: "#3a2a06",
    glow: "#e9c46a",
  },
  diamond: {
    bg: "linear-gradient(135deg,#66788c 0%,#e8f0fb 22%,#9fb2c7 45%,#ffffff 62%,#a9bbcf 80%,#56677b 100%)",
    ink: "#26323f",
    glow: "#cfe0f5",
  },
  black: {
    bg: "linear-gradient(135deg,#000 0%,#2e2e2e 22%,#0b0b0b 45%,#414141 62%,#121212 80%,#000 100%)",
    ink: "#d9d9d9",
    glow: "#8a8a8a",
  },
  ruby: {
    bg: "linear-gradient(135deg,#3d0005 0%,#e2323e 22%,#86060f 45%,#ff7a82 62%,#a00b16 80%,#3a0004 100%)",
    ink: "#fff1f2",
    glow: "#ff3b47",
  },
} as const;

export type Metal = keyof typeof metals;

export function Plate({ metal, name, label }: { metal: Metal; name: string; label: string }) {
  const m = metals[metal];
  return (
    <div className="plate aspect-[3/4] w-full p-[9%]">
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-10 opacity-40 blur-3xl"
        style={{ background: `radial-gradient(circle at 50% 45%, ${m.glow}55, transparent 60%)` }}
      />
      <div
        className="plate-metal relative flex h-full flex-col items-center justify-between overflow-hidden rounded-xl px-[8%] py-[11%] text-center"
        style={{ "--metal": m.bg, color: m.ink } as CSSProperties}
      >
        {[
          "left-2.5 top-2.5",
          "right-2.5 top-2.5",
          "left-2.5 bottom-2.5",
          "right-2.5 bottom-2.5",
        ].map((pos) => (
          <span key={pos} className={`absolute ${pos} size-1.5 rounded-full bg-black/30 shadow-[0_1px_0_rgb(255_255_255/0.4)]`} />
        ))}
        <span
          className="grid size-[26%] place-items-center rounded-full border-2 text-[clamp(1rem,2.4vw,1.75rem)] font-extrabold"
          style={{ borderColor: m.ink }}
        >
          O
        </span>
        <div className="[text-shadow:0_1px_0_rgb(255_255_255/0.25)]">
          <p className="font-mono text-[0.6rem] font-medium tracking-[0.25em] uppercase opacity-80">Executor</p>
          <p className="text-[clamp(1.5rem,3.2vw,2.6rem)] leading-none font-extrabold tracking-[-0.04em]">{name}</p>
          <p className="mt-2 text-[clamp(0.8rem,1.1vw,1rem)] font-bold">{label} em faturamento</p>
        </div>
        <p className="font-mono text-[0.55rem] font-medium tracking-[0.22em] uppercase opacity-70">
          O PROCESSO · Heitor Nogueira
        </p>
        <span className="plate-shine" />
      </div>
    </div>
  );
}
