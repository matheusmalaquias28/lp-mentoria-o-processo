import type { CSSProperties } from "react";
import { Media } from "@/components/ui/Primitives";
import Image from "next/image";
import { lowTicketFormats } from "@/content";

const caseStats = [
  { v: 20297, pre: "", label: "vendas" },
  { v: 531020, pre: "R$ ", label: "de faturamento" },
  { v: 171782, pre: "R$ ", label: "de lucro depois do anúncio" },
];

/**
 * Duas imagens de cada lado do título no desktop, em zigue-zague espelhado
 * (borda externa em cima, perto do texto embaixo). No tablet vira uma fileira de duas.
 * No mobile some: lá as imagens aparecem em leque acima do título (FormatFan).
 */
function FormatColumn({ items, side }: { items: typeof lowTicketFormats; side: "left" | "right" }) {
  const align = side === "left" ? ["xl:self-start", "xl:self-end"] : ["xl:self-end", "xl:self-start"];
  return (
    <ul className="hidden grid-cols-2 gap-3 md:grid xl:flex xl:flex-col xl:gap-6">
      {items.map((f, i) => (
        <li key={f.title} data-reveal className={`group xl:w-[78%] ${align[i]}`}>
          <div className="float [--float:-6px]" style={{ "--d": `${-(i + (side === "left" ? 0 : 2)) * 1.4}s` } as CSSProperties}>
            <Media
              slot={f.slot}
              sizes="(min-width: 1280px) 16vw, (min-width: 768px) 24vw, 46vw"
              className="aspect-[4/5] rounded-[1.5rem] transition-transform duration-700 ease-(--ease-expo) group-hover:scale-[1.07]"
            />
          </div>
          <p className="mt-3.5 flex items-center gap-2.5 text-[1rem] font-bold tracking-[-0.02em]">
            <span className="h-px w-4 bg-red transition-[width] duration-500 ease-(--ease-expo) group-hover:w-8" aria-hidden />
            {f.title}
          </p>
        </li>
      ))}
    </ul>
  );
}

/** Só no mobile: as quatro imagens em leque, inclinadas e encostando uma na outra. */
const fanTilt = [
  "-rotate-[8deg] translate-y-2",
  "rotate-[4deg] -translate-y-1",
  "-rotate-[3deg] translate-y-1.5",
  "rotate-[7deg]",
];

function FormatFan() {
  return (
    <ul className="mb-12 flex justify-center px-1 md:hidden" aria-label="Tipos de oferta low ticket">
      {lowTicketFormats.map((f, i) => (
        <li key={f.title} data-reveal className={`w-[29%] flex-none ${i ? "-ml-[4.5%]" : ""} ${fanTilt[i]}`}>
          <div className="float [--float:-5px]" style={{ "--d": `${-i * 1.4}s` } as CSSProperties}>
            <Media slot={f.slot} sizes="32vw" compact className="aspect-[4/5] rounded-2xl" />
          </div>
        </li>
      ))}
    </ul>
  );
}

export function WhatIs() {
  return (
    <section className="theme-light section-y relative">
      <div className="wrap">
        <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-[minmax(0,1fr)_minmax(0,38rem)_minmax(0,1fr)] xl:items-center xl:gap-12 2xl:gap-16">
          <FormatColumn items={lowTicketFormats.slice(0, 2)} side="left" />

          <div className="order-first text-center md:col-span-2 md:mb-11 xl:order-none xl:col-span-1 xl:mb-0">
            <FormatFan />
            <h2 data-split className="display-l mx-auto max-w-[20ch] xl:text-[clamp(2.6rem,3.6vw,3.6rem)]">
              Low ticket é um produto digital barato, vendido por anúncio, que resolve uma coisa só.
            </h2>
            <p className="lead mx-auto mt-8 max-w-[36rem] text-(--mute)" data-reveal>
              Oferta low ticket é isso: um ebook, um pacote de arquivos, um guia, um aplicativo simples. Custa de{" "}
              <strong className="text-ink">R$ 17 a R$ 47</strong>. A pessoa vê o anúncio no Instagram ou no Facebook,
              entende na hora o que vai receber e compra sem pensar muito, como quem compra um chiclete no caixa.
            </p>
          </div>

          <FormatColumn items={lowTicketFormats.slice(2, 4)} side="right" />
        </div>

        {/* por que funciona */}
        <div className="mt-24 grid gap-10 rounded-[2rem] bg-(--card) p-7 sm:p-10 lg:mt-32 lg:grid-cols-12 lg:p-16">
          <div className="text-center lg:col-span-5 lg:text-left">
            <p className="label text-red">
              Por que isso funciona
              <br />
              para você que está começando?
            </p>
            <p data-split className="display-m mt-5">
              Ninguém compra um ebook de R$ 27 porque confia em você. Compra porque quer o produto.
            </p>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <ul className="divide-y divide-(--line) border-y border-(--line)">
              {["Não precisa de seguidores", "Não precisa mostrar seu rosto", "Não precisa ser especialista em nada"].map((t) => (
                <li key={t} data-reveal className="flex items-center gap-4 py-5 text-[1.125rem] font-bold tracking-[-0.02em]">
                  <span className="size-2 rounded-full bg-red" aria-hidden />
                  {t}
                </li>
              ))}
            </ul>
            <p className="lead mt-8 text-center text-(--mute) lg:text-left" data-reveal>
              Precisa de um produto que as pessoas querem, de uma forma que ninguém está vendendo.{" "}
              <strong className="text-ink">E é exatamente isso que eu ensino.</strong>
            </p>
          </div>
        </div>

        {/* símbolo de vidro colado na borda esquerda da tela, inclinado ao contrário do de cima (só desktop) */}
        <div aria-hidden className="pointer-events-none relative z-20 hidden h-0 lg:block">
          <div className="absolute top-[-11rem] left-[calc(50%-50vw-2rem)] w-[clamp(13rem,17vw,19rem)]">
            <div className="float [--float:-14px]" style={{ animationDuration: "7s", "--d": "-3s" } as CSSProperties}>
              <Image
                src="/simbolo.webp"
                alt=""
                width={640}
                height={749}
                sizes="19rem"
                className="h-auto w-full -rotate-[14deg] drop-shadow-[0_30px_50px_rgb(232_20_28/0.35)]"
              />
            </div>
          </div>
        </div>

        {/* caso dos Salmos */}
        <div className="theme-dark relative mt-6 overflow-hidden rounded-[2rem] lg:mt-8">
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-40 -left-20 h-[30rem] w-[30rem] rounded-full bg-red/25 blur-[120px]"
          />
          <div className="relative grid gap-12 p-7 sm:p-10 lg:grid-cols-12 lg:gap-10 lg:p-16">
            <div className="flex flex-col text-center sm:text-left lg:col-span-6">
              <p className="label text-(--mute)">
                Um produto meu, com todos os
                <br />
                detalhes para você, dentro da mentoria
              </p>
              <h3 className="display-m mx-auto mt-5 max-w-[20ch] sm:mx-0">
                Os 150 Salmos explicados versículo por versículo.
              </h3>
              <p className="lead mx-auto mt-6 max-w-[34rem] text-(--mute) sm:mx-0">
                Vendido de R$ 17,90 a R$ 27,90. Entre fevereiro e abril de 2025 ele vendeu 20.297 vezes e faturou R$ 531
                mil, com R$ 171 mil de lucro no meu bolso.
              </p>
              <dl className="mt-10 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-(--line) bg-(--line) sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
                {caseStats.map((s, i) => (
                  <div key={s.label} className="bg-ink-2 p-5 xl:px-3.5 2xl:px-5">
                    <dd className="tabular flex items-center justify-center gap-[0.35em] text-[clamp(1.4rem,2vw,1.85rem)] leading-none xl:text-[1.35rem] 2xl:text-[1.6rem] font-extrabold tracking-[-0.04em] whitespace-nowrap sm:justify-start">
                      <svg
                        viewBox="0 0 10 9"
                        aria-hidden
                        className="tick-up size-[0.55em] flex-none"
                        style={{ "--d": `${i * 0.3}s` } as CSSProperties}
                      >
                        <path d="M5 0 10 9H0z" fill="currentColor" />
                      </svg>
                      <span>
                        {s.pre}
                        <span data-count={s.v}>{s.v.toLocaleString("pt-BR")}</span>
                      </span>
                    </dd>
                    <dt className="mt-2 text-[0.8125rem] text-(--mute)">{s.label}</dt>
                  </div>
                ))}
              </dl>
              <p className="mt-10 text-[1.25rem] leading-snug font-bold tracking-[-0.02em] lg:mt-auto lg:pt-10">
                Ninguém me conhecia. O produto não tinha o meu nome, nem meu rosto.
                <span className="text-(--mute)"> Era uma boa ideia, vendida do jeito certo.</span>
              </p>
            </div>
            <div className="relative order-first flex items-center justify-center sm:order-none lg:col-span-6 lg:col-start-7">
              <div className="w-full max-w-[34rem]" data-parallax="0.06">
                <Image
                  src="/formatos/salmos-pacote.webp"
                  alt="Pacote dos 150 Salmos explicados versículo por versículo, com as páginas do ebook e os bônus"
                  width={800}
                  height={800}
                  sizes="(min-width: 1024px) 34rem, 92vw"
                  className="h-auto w-full drop-shadow-[0_30px_50px_rgb(0_0_0/0.55)]"
                />
              </div>
            </div>
          </div>
        </div>

        <p data-split className="display-l mx-auto mt-28 max-w-[18ch] text-center lg:mt-40">
          Não é fácil, mas é simples. <span className="text-red">E simples se aprende.</span>
        </p>
      </div>
    </section>
  );
}
