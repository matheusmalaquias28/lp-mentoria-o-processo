import { Fragment, type ReactNode } from "react";
import Image from "next/image";
import { Eyebrow } from "@/components/ui/Primitives";
import { TrafficLight } from "@/components/mockups/Mockups";
import { method } from "@/content";

const mvt = [
  ["M", "Modelagem"],
  ["V", "Vantagem"],
  ["T", "Tráfego"],
];

function Chip({ children, on }: { children: ReactNode; on?: boolean }) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-3.5 py-1.5 text-[0.8125rem] font-bold ${
        on ? "bg-ink text-white" : "border border-(--line-strong) text-(--mute)"
      }`}
    >
      {children}
    </span>
  );
}

/** etapa 04: as três peças da oferta do guia de Natal, na mesma altura */
const buildPieces = [
  {
    label: "Produto",
    src: "/formatos/guia-natal.webp",
    alt: "Produto: guia ilustrado infantil da história do Natal",
    w: 800,
    h: 1067,
    sizes: "(min-width: 1024px) 7rem, 20vw",
  },
  {
    label: "Página",
    src: "/formatos/pagina-natal.webp",
    alt: "Página de vendas do guia ilustrado infantil da história do Natal",
    w: 1200,
    h: 675,
    sizes: "(min-width: 1024px) 17rem, 45vw",
    round: true,
  },
  {
    label: "Anúncio",
    src: "/formatos/anuncio-natal.webp",
    alt: "Anúncio do guia ilustrado infantil da história do Natal",
    w: 600,
    h: 750,
    sizes: "(min-width: 1024px) 8rem, 22vw",
    round: true,
  },
];

const illustrations: ReactNode[] = [
  // 01 mineração
  <div key="1" className="grid w-full max-w-[13rem] grid-cols-3 gap-1.5">
    {Array.from({ length: 6 }).map((_, i) => (
      <span
        key={i}
        className={`aspect-[4/5] rounded-md ${i === 4 ? "bg-ink ring-2 ring-red ring-offset-2 ring-offset-(--card)" : "bg-(--card-2)"}`}
      />
    ))}
  </div>,
  // 02 modelagem 90/10
  <div key="2" className="flex flex-wrap items-center gap-2">
    <Chip>Evangelhos</Chip>
    <span className="text-red">→</span>
    <Chip>Salmos</Chip>
    <span className="text-red">→</span>
    <Chip on>Salmos com música</Chip>
  </div>,
  // 03 semáforo
  <TrafficLight key="3" row />,
  // 04 produto, página, anúncio (com o exemplo do guia de Natal), lado a lado
  <div key="4" className="grid max-w-[34rem] grid-cols-[0.75fr_auto_1.78fr_auto_0.8fr] items-center gap-x-1.5 pb-3 sm:gap-x-2.5">
    {buildPieces.map((p, i) => (
      <Fragment key={p.label}>
        {i > 0 && (
          <span className="text-[0.875rem] font-bold text-red" aria-hidden>
            +
          </span>
        )}
        <figure className="relative">
          <Image
            src={p.src}
            alt={p.alt}
            width={p.w}
            height={p.h}
            sizes={p.sizes}
            className={`h-auto w-full ${p.round ? "rounded-md shadow-[0_8px_20px_rgb(0_0_0/0.16)]" : "drop-shadow-[0_8px_14px_rgb(0_0_0/0.18)]"}`}
          />
          <figcaption className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 rounded-full bg-ink px-2 py-1 text-[0.625rem] leading-none font-bold whitespace-nowrap text-white shadow-[0_4px_10px_rgb(0_0_0/0.2)] sm:px-3 sm:py-1.5 sm:text-[0.75rem]">
            {p.label}
          </figcaption>
        </figure>
      </Fragment>
    ))}
  </div>,
  // 05 decisão
  <div key="5" className="flex flex-wrap items-center gap-2">
    <Chip>Mantém</Chip>
    <Chip>Ajusta</Chip>
    <Chip on>Aumenta</Chip>
    <span className="label ml-1 text-red">Lucro é o critério</span>
  </div>,
];

export function Method() {
  return (
    <section id="metodo" className="theme-light section-y relative">
      <div className="wrap grid gap-14 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-5">
          <div className="text-center sm:text-left lg:sticky lg:top-12">
            <Eyebrow>O caminho que você vai seguir</Eyebrow>
            <h2 data-split className="display-l mt-7 text-[clamp(2.2rem,3.9vw,3.9rem)]!">
              A metodologia MVT, em cinco passos que qualquer pessoa entende.
            </h2>
            <dl className="mt-10 flex gap-3" data-reveal>
              {mvt.map(([l, w]) => (
                <div key={l} className="flex-1 rounded-2xl border border-(--line) p-4">
                  <dt className="text-[2.5rem] leading-none font-extrabold tracking-[-0.05em]">{l}</dt>
                  <dd className="mt-2 text-[0.875rem] font-semibold text-(--mute)">{w}</dd>
                </div>
              ))}
            </dl>
            <p className="lead mx-auto mt-8 max-w-[30rem] text-(--mute) sm:mx-0" data-reveal>
              É a ordem em que a minha operação funciona, e a ordem em que você vai montar a sua. Cada passo tem aula,
              mapa mental e o porquê.{" "}
              <strong className="text-ink">Quando você entende o porquê, você para de depender de mim.</strong>
            </p>
          </div>
        </div>

        <div className="relative lg:col-span-7">
          <div aria-hidden className="absolute top-2 bottom-2 left-[1.15rem] hidden w-px bg-(--line) sm:block">
            <div data-progress className="h-full w-full origin-top bg-red" />
          </div>
          <ol className="space-y-4 sm:pl-14">
            {method.map((s, i) => (
              <li key={s.n} data-reveal className="relative rounded-[1.75rem] bg-(--card) p-7 sm:p-9">
                <span
                  aria-hidden
                  className="absolute top-9 -left-14 hidden size-[2.3rem] place-items-center rounded-full border border-(--line-strong) bg-white text-[0.75rem] font-extrabold sm:grid"
                >
                  {i + 1}
                </span>
                <div className="flex items-start justify-between gap-6">
                  <span className="text-[clamp(3rem,5vw,4.25rem)] leading-[0.8] font-extrabold tracking-[-0.06em] text-ink/[0.12]">
                    {s.n}
                  </span>
                  <span className="label rounded-full bg-white px-3 py-1.5 text-red">{s.tag}</span>
                </div>
                <h3 className="display-m mt-6 text-[clamp(1.6rem,2.5vw,2.25rem)]!">{s.title}</h3>
                <p className="mt-4 max-w-[36rem] text-[1.0625rem] leading-relaxed text-(--mute)">{s.text}</p>
                <div className="mt-8 border-t border-(--line) pt-7">{illustrations[i]}</div>
              </li>
            ))}
          </ol>

          {/* do zero ao primeiro teste */}
          <div className="mt-6 rounded-[1.75rem] bg-ink p-7 text-white sm:ml-14 sm:p-9" data-reveal>
            <p className="label text-mute-d">Do zero ao primeiro anúncio no ar</p>
            <p className="mt-3 text-[clamp(1.6rem,2.6vw,2.25rem)] leading-tight font-extrabold tracking-[-0.04em]">
              de 7 a 12 dias
            </p>
            <div className="mt-7 grid grid-cols-12 gap-1">
              {Array.from({ length: 12 }).map((_, i) => (
                <span
                  key={i}
                  className={`h-9 rounded-[5px] ${i < 5 ? "bg-red" : "bg-white/12"} ${
                    i >= 6 ? "outline-1 -outline-offset-1 outline-red/70 outline-dashed" : ""
                  }`}
                />
              ))}
            </div>
            <div className="label mt-3 grid grid-cols-12 gap-1 text-[0.625rem] text-mute-d">
              <span className="col-span-5">5 dias de estratégia</span>
              <span className="col-span-7 text-right">o resto executando · anúncios no ar entre o dia 7 e o 12</span>
            </div>
            <p className="mt-6 text-[0.9375rem] text-mute-d">
              Esse é o tempo até o teste de anúncios. O resultado depende da sua execução.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
