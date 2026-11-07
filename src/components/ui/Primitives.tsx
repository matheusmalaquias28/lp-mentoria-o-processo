import Image from "next/image";
import type { CSSProperties, ReactNode } from "react";
import type { MediaSlot } from "@/content";
import { Camera } from "./Icons";

export function Eyebrow({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <p
      className={`label inline-flex items-center gap-2.5 rounded-full border border-(--line) px-3.5 py-2 text-(--mute) ${className}`}
    >
      <span className="size-1.5 rounded-full bg-red" aria-hidden />
      {children}
    </p>
  );
}

/** Foto real quando houver `src`; senão um placeholder com a pauta da foto. */
export function Media({
  slot,
  className = "",
  sizes = "(min-width: 1024px) 40vw, 100vw",
  priority,
  compact,
}: {
  slot: MediaSlot;
  className?: string;
  sizes?: string;
  priority?: boolean;
  /** placeholder pequeno demais para a pauta: mostra só o ícone */
  compact?: boolean;
}) {
  if (slot.src) {
    return (
      <div className={`relative overflow-hidden ${className}`}>
        <Image src={slot.src} alt={slot.alt} fill sizes={sizes} priority={priority} className="object-cover" />
      </div>
    );
  }

  return (
    <div
      role="img"
      aria-label={slot.alt}
      className={`media-ph relative grid place-items-center overflow-hidden text-(--faint) ${className}`}
    >
      <div className="flex max-w-[80%] flex-col items-center gap-2 text-center">
        <Camera className="opacity-70" />
        {!compact && <span className="label text-[0.6875rem]">{slot.brief}</span>}
      </div>
    </div>
  );
}

export function Marquee({
  items,
  className = "",
  duration = 40,
  sep = "→",
}: {
  items: string[];
  className?: string;
  duration?: number;
  sep?: string;
}) {
  const row = (hidden?: boolean) => (
    <div className="flex flex-none items-center" aria-hidden={hidden}>
      {items.map((t, i) => (
        <span key={i} className="flex items-center">
          <span className="px-6 md:px-9">{t}</span>
          <span className="opacity-60">{sep}</span>
        </span>
      ))}
    </div>
  );

  return (
    <div className={`marquee ${className}`}>
      <div className="marquee-track" style={{ "--dur": `${duration}s` } as CSSProperties}>
        {row()}
        {row(true)}
      </div>
    </div>
  );
}

export function Wordmark({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center ${className}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/logo.svg" alt="O PROCESSO · Mentoria Heitor Nogueira" width={226} height={43} className="h-[2em] w-auto" />
    </span>
  );
}
