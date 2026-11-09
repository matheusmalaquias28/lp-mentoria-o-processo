"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { formatNumber } from "@/lib/format";
import { Cta } from "@/components/ui/Cta";
import { Marquee, Media } from "@/components/ui/Primitives";
import { InfinityIcon } from "@/components/ui/Icons";
import Image from "next/image";
import { photos, plates } from "@/content";

const STOPS = plates.length;

/**
 * Trilha de faturamento: a seção fixa e as placas correm na horizontal.
 * O contador e a régua seguem a placa que está no centro da tela.
 * Com movimento reduzido, vira uma rolagem horizontal comum (com o mesmo contador).
 */
export function Trail() {
  const root = useRef<HTMLElement>(null);
  const pin = useRef<HTMLDivElement>(null);
  const scroller = useRef<HTMLDivElement>(null);
  const track = useRef<HTMLDivElement>(null);
  const counter = useRef<HTMLSpanElement>(null);
  const fill = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const trackEl = track.current!;
      const scrollerEl = scroller.current!;
      const stops = gsap.utils.toArray<HTMLElement>("[data-stop]", trackEl);
      const dots = gsap.utils.toArray<HTMLElement>("[data-dot]", root.current);
      let marks: number[] = [];

      // progresso (0..1) em que cada placa chega ao centro da tela
      const measure = (dist: number) => {
        const half = scrollerEl.clientWidth / 2;
        marks = stops.map((s) => gsap.utils.clamp(0, 1, (s.offsetLeft + s.offsetWidth / 2 - half) / dist));
      };

      const update = (p: number) => {
        let value = 0;
        let rail = 0;
        if (marks.length) {
          const xs = [0, ...marks];
          const vs = [0, ...plates.map((pl) => pl.amount)];
          const rs = [0, ...plates.map((_, i) => (i + 1) / STOPS)];
          if (p >= xs[xs.length - 1]) {
            value = vs[vs.length - 1];
            rail = 1;
          } else {
            for (let i = 1; i < xs.length; i++) {
              if (p <= xs[i]) {
                const t = (p - xs[i - 1]) / Math.max(xs[i] - xs[i - 1], 1e-6);
                value = vs[i - 1] + (vs[i] - vs[i - 1]) * t;
                rail = rs[i - 1] + (rs[i] - rs[i - 1]) * t;
                break;
              }
            }
          }
        }
        if (counter.current) counter.current.textContent = formatNumber(value);
        if (fill.current) fill.current.style.transform = `scaleX(${rail})`;
        stops.forEach((s, i) => s.toggleAttribute("data-on", value >= plates[i].amount - 1));
        dots.forEach((d, i) => d.toggleAttribute("data-on", value >= plates[i].amount - 1));
      };

      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        scrollerEl.style.overflow = "visible";
        const dist = () => trackEl.scrollWidth - scrollerEl.clientWidth;
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: pin.current,
            pin: true,
            start: "top top",
            end: () => `+=${dist()}`,
            scrub: 0.8,
            invalidateOnRefresh: true,
            onRefresh: () => measure(dist()),
          },
          onUpdate: () => update(tl.progress()),
        });
        tl.to(trackEl, { x: () => -dist(), ease: "none" });
        measure(dist());
        update(0);
        return () => {
          scrollerEl.style.overflow = "";
        };
      });

      mm.add("(prefers-reduced-motion: reduce)", () => {
        const dist = () => scrollerEl.scrollWidth - scrollerEl.clientWidth;
        const onScroll = () => update(scrollerEl.scrollLeft / Math.max(dist(), 1));
        measure(dist());
        onScroll();
        scrollerEl.addEventListener("scroll", onScroll, { passive: true });
        return () => scrollerEl.removeEventListener("scroll", onScroll);
      });
    },
    { scope: root },
  );

  return (
    <section ref={root} id="movimento" className="theme-dark relative">
      <div className="bg-red py-4 text-[0.95rem] font-extrabold tracking-[-0.01em] text-white uppercase sm:text-[1.05rem]">
        <Marquee
          duration={36}
          sep="·"
          items={["O movimento dos executores", "+800 executores", "Gold 100 mil", "Diamond 250 mil", "Black 500 mil", "Ruby 1 milhão"]}
        />
      </div>

      <div ref={pin} className="relative flex h-svh min-h-[40rem] flex-col overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute top-1/2 left-1/2 h-[50rem] w-[50rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-red/10 blur-[160px]"
        />

        <div className="wrap relative flex items-end justify-between gap-6 pt-10 sm:pt-14">
          <div>
            <p className="label text-red-hi">3. O movimento dos executores</p>
            <h2 className="mt-3 max-w-[16ch] text-[clamp(1.6rem,3vw,2.75rem)] leading-[1.02] font-extrabold tracking-[-0.04em]">
              Uma placa em cada marco de faturamento.
            </h2>
          </div>
          <div className="text-right">
            <p className="label text-(--faint)">Faturamento</p>
            <p className="tabular mt-1 text-[clamp(1.6rem,4vw,3.5rem)] leading-none font-extrabold tracking-[-0.05em]">
              <span className="text-(--mute)">R$ </span>
              <span ref={counter}>0</span>
            </p>
          </div>
        </div>

        <div ref={scroller} className="no-scrollbar relative flex min-h-0 flex-1 overflow-x-auto">
          <div ref={track} className="flex h-full items-center gap-5 px-(--gutter) py-8 will-change-transform sm:gap-8">
            {/* comunidade */}
            <article className="flex h-full max-h-[32rem] w-[82vw] max-w-[30rem] flex-none flex-col justify-between rounded-[1.75rem] border border-(--line) bg-(--card) p-7 sm:p-9">
              <div>
                <p className="label text-(--faint)">Comunidade no WhatsApp</p>
                <p className="mt-5 text-[clamp(3.5rem,7vw,5.5rem)] leading-[0.85] font-extrabold tracking-[-0.06em]">
                  +800
                </p>
                <p className="mt-2 text-[1.125rem] font-bold">executores no mesmo processo que você.</p>
              </div>
              <div>
                <div className="flex -space-x-2.5" aria-hidden>
                  {Array.from({ length: 7 }).map((_, i) => (
                    <Image
                      key={i}
                      src={`/executores/${i + 1}.webp`}
                      alt=""
                      width={40}
                      height={40}
                      sizes="40px"
                      className="size-10 rounded-full border-2 border-ink-2 object-cover"
                    />
                  ))}
                </div>
                <p className="mt-5 text-[1rem] leading-relaxed text-(--mute)">
                  Gente no mesmo processo que você, um agregando o outro.{" "}
                  <strong className="text-white">Não é grupo de meme.</strong>
                </p>
              </div>
            </article>

            {plates.map((p, i) => (
              <div key={p.name} className="contents">
                <article
                  data-stop
                  className="group/stop flex h-full max-h-[32rem] flex-none flex-col items-start gap-6 opacity-45 transition-[opacity] duration-700 data-on:opacity-100 md:flex-row md:items-center md:gap-10"
                >
                  <div className="aspect-[3/4] h-[min(40svh,19rem)] scale-95 transition-transform duration-700 ease-(--ease-expo) group-data-on/stop:scale-100 md:h-[min(56svh,28rem)]">
                    <Image
                      src={p.src}
                      alt={`Placa ${p.name} de ${p.label} de faturamento`}
                      width={1500}
                      height={2000}
                      sizes="(min-width: 768px) 21rem, 15rem"
                      className="h-full w-full object-contain drop-shadow-[0_24px_40px_rgb(0_0_0/0.55)]"
                    />
                  </div>
                  <div className="w-[70vw] max-w-[19rem]">
                    <p className="label text-(--faint)">Marco {i + 1} de {STOPS}</p>
                    <p className="mt-3 text-[clamp(2.2rem,4vw,3.5rem)] leading-[0.9] font-extrabold tracking-[-0.05em]">
                      {p.label}
                    </p>
                    <p className="mt-3 text-[1rem] text-(--mute)">de faturamento. Placa {p.name}.</p>
                  </div>
                </article>

                {i === 0 && (
                  <article className="flex h-full max-h-[32rem] w-[82vw] max-w-[36rem] flex-none flex-col overflow-hidden rounded-[1.75rem] border border-red/40 bg-(--card)">
                    <Media slot={photos.plaqueDelivery} sizes="36rem" className="min-h-0 flex-1" />
                    <div className="p-6 sm:p-8">
                      <p className="label text-red-hi">Executores 100K+</p>
                      <p className="mt-3 text-[1.125rem] leading-snug font-bold sm:text-[1.25rem]">
                        Nos 100 mil você vem a Vila Velha, retira a sua placa e ganha uma mentoria presencial comigo, sem
                        pagar nada a mais.
                      </p>
                    </div>
                  </article>
                )}
              </div>
            ))}

            {/* fechamento */}
            <article className="flex w-[90vw] max-w-[34rem] flex-none flex-col justify-between gap-8 self-center rounded-[1.75rem] bg-white p-5 text-center text-ink sm:h-full sm:max-h-[32rem] sm:gap-0 sm:self-auto sm:p-10 sm:text-left">
              <div>
                <p className="label flex items-center justify-center gap-2 text-red sm:justify-start">
                  <InfinityIcon /> Acesso vitalício
                </p>
                <p className="mt-5 text-[clamp(1.9rem,3.4vw,2.9rem)] leading-[1] font-extrabold tracking-[-0.045em]">
                  Pagou uma vez, é seu pra sempre.
                </p>
                <p className="mt-3 text-[1.0625rem] text-mute-l">Com tudo que for atualizado depois.</p>
              </div>
              <div>
                <Cta block />
                <p className="mt-4 text-[0.875rem] text-mute-l">
                  Acesso imediato por e-mail. Começa pelo módulo Comece aqui.
                </p>
              </div>
            </article>
          </div>
        </div>

        {/* régua */}
        <div className="wrap relative pb-8 sm:pb-10">
          <div className="relative h-[3px] rounded-full bg-white/12">
            <div ref={fill} className="absolute inset-0 origin-left rounded-full bg-red" style={{ transform: "scaleX(0)" }} />
            {plates.map((p, i) => (
              <span
                key={p.name}
                data-dot
                className="group/dot absolute top-1/2 -translate-x-full -translate-y-1/2"
                style={{ left: `${((i + 1) / STOPS) * 100}%` }}
              >
                <span className="block size-3.5 rounded-full border-2 border-white/30 bg-ink transition-colors duration-300 group-data-on/dot:border-red group-data-on/dot:bg-red" />
                <span className="label absolute top-5 right-0 text-[0.625rem] whitespace-nowrap text-(--faint) transition-colors group-data-on/dot:text-white">
                  {p.name}
                </span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
