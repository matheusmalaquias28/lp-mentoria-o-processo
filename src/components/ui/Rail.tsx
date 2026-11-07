"use client";

import { useRef, type ReactNode } from "react";
import { ArrowRight } from "./Icons";

/** Fileira com rolagem horizontal (arrasto/scroll nativo) e setas no desktop. */
export function Rail({ children, label }: { children: ReactNode; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const go = (dir: 1 | -1) => {
    const el = ref.current;
    if (!el) return;
    el.scrollBy({ left: dir * el.clientWidth * 0.75, behavior: "smooth" });
  };

  return (
    <div className="relative">
      <div className="wrap mb-6 flex items-center justify-between gap-6">
        <p className="label text-(--mute)">{label}</p>
        <div className="flex gap-2">
          {([-1, 1] as const).map((dir) => (
            <button
              key={dir}
              type="button"
              onClick={() => go(dir)}
              aria-label={dir === 1 ? "Próximos" : "Anteriores"}
              className="grid size-12 cursor-pointer place-items-center rounded-full border border-(--line-strong) transition-[background-color,color,border-color,scale] duration-300 hover:border-ink hover:bg-ink hover:text-white active:scale-95"
            >
              <ArrowRight className={dir === -1 ? "rotate-180" : ""} />
            </button>
          ))}
        </div>
      </div>
      <div
        ref={ref}
        className="no-scrollbar flex snap-x snap-mandatory gap-3 overflow-x-auto scroll-px-[max(var(--gutter),calc((100vw-88rem)/2+var(--gutter)))] px-[max(var(--gutter),calc((100vw-88rem)/2+var(--gutter)))] pb-2 sm:gap-4"
      >
        {children}
      </div>
    </div>
  );
}
