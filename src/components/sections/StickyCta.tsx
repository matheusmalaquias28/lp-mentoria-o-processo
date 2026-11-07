"use client";

import { useEffect, useState } from "react";
import { Cta } from "@/components/ui/Cta";
import { cta, offer } from "@/content";

/**
 * Barra fixa de compra no mobile: aparece depois do hero e some
 * quando a oferta ou o fechamento já estão na tela (onde há CTA grande).
 */
export function StickyCta() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("topo");
    const blockers = ["oferta", "final"].map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[];
    const state = { pastHero: false, blocked: new Set<Element>() };
    const sync = () => setShow(state.pastHero && state.blocked.size === 0);

    const heroObs = new IntersectionObserver(([e]) => {
      state.pastHero = !e.isIntersecting && e.boundingClientRect.top < 0;
      sync();
    });
    const blockObs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => (e.isIntersecting ? state.blocked.add(e.target) : state.blocked.delete(e.target)));
        sync();
      },
      { rootMargin: "0px 0px -30% 0px" },
    );

    if (hero) heroObs.observe(hero);
    blockers.forEach((b) => blockObs.observe(b));
    return () => {
      heroObs.disconnect();
      blockObs.disconnect();
    };
  }, []);

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-ink/90 px-4 pt-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] backdrop-blur-xl transition-transform duration-500 ease-(--ease-expo) lg:hidden ${
        show ? "translate-y-0" : "translate-y-full"
      }`}
      inert={!show}
    >
      <div className="flex items-center justify-between gap-3">
        <div className="min-w-0 leading-tight">
          <p className="truncate text-[0.6875rem] font-semibold tracking-[0.04em] text-white/55 uppercase">Mentoria O PROCESSO</p>
          <p className="text-[1.125rem] font-extrabold tracking-[-0.03em] text-white">{offer.price}</p>
          <p className="text-[0.6875rem] text-white/55">Garantia de {offer.guaranteeDays} dias</p>
        </div>
        <Cta size="sm" label={cta.movement} />
      </div>
    </div>
  );
}
