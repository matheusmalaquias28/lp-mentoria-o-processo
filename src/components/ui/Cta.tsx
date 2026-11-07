"use client";

import { useRef, type MouseEvent, type PointerEvent } from "react";
import { links, cta } from "@/content";
import { ArrowRight } from "./Icons";

type Props = {
  label?: string;
  href?: string;
  size?: "sm" | "md" | "lg";
  block?: boolean;
  className?: string;
};

/**
 * CTA vermelho. Magnético no desktop, repassa UTMs da URL atual para o checkout
 * e rola suave quando o destino é uma âncora (o Lenis cuida do resto).
 */
export function Cta({ label = cta.primary, href = links.checkout, size = "md", block, className = "" }: Props) {
  const ref = useRef<HTMLAnchorElement>(null);

  const onMove = (e: PointerEvent<HTMLAnchorElement>) => {
    if (e.pointerType !== "mouse") return;
    const el = ref.current!;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - (r.left + r.width / 2)) * 0.18;
    const y = (e.clientY - (r.top + r.height / 2)) * 0.3;
    el.style.setProperty("--mx", `${x.toFixed(1)}px`);
    el.style.setProperty("--my", `${y.toFixed(1)}px`);
  };

  const onLeave = () => {
    ref.current?.style.setProperty("--mx", "0px");
    ref.current?.style.setProperty("--my", "0px");
  };

  const onClick = (e: MouseEvent<HTMLAnchorElement>) => {
    if (!href.startsWith("http") || !window.location.search) return;
    e.preventDefault();
    const url = new URL(href);
    new URLSearchParams(window.location.search).forEach((v, k) => {
      if (!url.searchParams.has(k)) url.searchParams.set(k, v);
    });
    window.location.href = url.toString();
  };

  const sizeClass = size === "lg" ? "cta-lg" : size === "sm" ? "cta-sm" : "";

  return (
    <a
      ref={ref}
      href={href}
      onPointerMove={onMove}
      onPointerLeave={onLeave}
      onClick={onClick}
      className={`cta ${sizeClass} ${block ? "w-full sm:w-auto" : ""} ${className}`}
    >
      <span className="cta-label">
        <span>{label}</span>
        <span aria-hidden>{label}</span>
      </span>
      <span className="cta-icon" aria-hidden>
        <ArrowRight />
        <ArrowRight />
      </span>
    </a>
  );
}
