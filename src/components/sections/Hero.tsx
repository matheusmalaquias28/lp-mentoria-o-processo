import type { CSSProperties } from "react";
import { Cta } from "@/components/ui/Cta";
import { Media, Wordmark } from "@/components/ui/Primitives";
import { EbookCover, OpenScreenCard } from "@/components/mockups/Mockups";
import { photos } from "@/content";

const d = (s: number) => ({ "--d": `${s}s` }) as CSSProperties;

export function Hero() {
  return (
    <section id="topo" className="theme-dark relative overflow-hidden pt-8 sm:pt-10 lg:pt-14">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-48 right-[-18%] h-[46rem] w-[46rem] rounded-full bg-red/20 blur-[150px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgb(255_255_255/0.035)_1px,transparent_1px)] bg-[size:calc(100%/6)_100%] [mask-image:linear-gradient(to_bottom,black,transparent_85%)]"
      />

      <div className="wrap relative grid items-start gap-16 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-7 lg:pt-4">
          <div className="rise mb-10 lg:mb-14" style={d(0.05)}>
            <Wordmark className="text-[1.35rem] lg:text-[1.5rem]" />
          </div>

          <h1 className="display-xl text-[clamp(2.5rem,5.6vw,5.5rem)]">
            <span className="line-mask">
              <span style={d(0.12)}>Lucre com</span>
            </span>
            <span className="line-mask">
              <span style={d(0.22)}>ofertas</span>
            </span>
            <span className="line-mask pb-[0.18em]! -mb-[0.18em]!">
              <span style={d(0.32)} className="relative w-fit">
                low ticket<span className="text-red">.</span>
                <svg
                  aria-hidden
                  viewBox="0 0 400 20"
                  preserveAspectRatio="none"
                  className="absolute -bottom-[0.08em] left-0 h-[0.14em] w-[92%] overflow-visible"
                >
                  <path
                    d="M3 14C90 5 220 3 397 9"
                    fill="none"
                    stroke="var(--color-red)"
                    strokeWidth="7"
                    strokeLinecap="round"
                    pathLength={1}
                    strokeDasharray="1"
                    strokeDashoffset="1"
                    style={{ animation: "draw 1s var(--ease-expo) 1s forwards" }}
                  />
                </svg>
              </span>
            </span>
            <span
              className="rise mt-7 block max-w-[34rem] text-[clamp(1.375rem,2.6vw,2rem)] leading-[1.15] font-bold tracking-[-0.025em] text-white/85"
              style={d(0.5)}
            >
              Sem aparecer, sem ser especialista e sem copiar ninguém.
            </span>
          </h1>

          <p className="lead rise mt-8 max-w-[36rem] text-(--mute)" style={d(0.7)}>
            Eu vendo produtos digitais de menos de R$ 50 todos os dias, em volume, sem mostrar o meu rosto no produto.
            Na mentoria O PROCESSO eu te ensino esse processo inteiro, do zero, e acompanho a sua operação enquanto você
            monta a sua. <strong className="font-bold text-white">Acesso vitalício.</strong>
          </p>

          <div className="rise mt-10 flex flex-col gap-5 sm:flex-row sm:items-center" style={d(0.82)}>
            <Cta size="lg" block />
            <p className="label leading-relaxed text-(--mute)">
              7 dias de garantia
              <br />+800 executores dentro
            </p>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[30rem] lg:col-span-5 lg:mt-2 lg:max-w-none">
          <div className="rise relative" style={d(0.35)}>
            <Media
              slot={photos.heroPortrait}
              priority
              sizes="(min-width: 1024px) 38vw, 90vw"
              className="aspect-[4/5] rounded-[2rem] border border-(--line)"
            />
            <div className="absolute -bottom-10 -left-3 w-[16.5rem] sm:-left-10 sm:w-[18rem]">
              <div className="float">
                <OpenScreenCard />
              </div>
            </div>
            <div className="absolute top-6 -right-3 w-[6.5rem] sm:-right-8 sm:w-[8.5rem]">
              <div className="float text-[1rem] sm:text-[1.2rem]" style={d(-3)}>
                <EbookCover />
                <span className="label absolute -bottom-3 left-1/2 -translate-x-1/2 rounded-full bg-white px-2.5 py-1 text-[0.625rem] whitespace-nowrap text-ink">
                  R$ 17,90
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="wrap relative mt-24 lg:mt-28">
        <div className="border-t border-(--line) py-10 lg:py-12">
          <p
            className="cycle flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-center text-[clamp(0.9rem,4.7vw,2.75rem)] leading-none font-extrabold tracking-[-0.04em] sm:gap-x-5"
            aria-label="Execução, movimento, resultado"
          >
            <span>Execução</span>
            <b aria-hidden className="text-red">→</b>
            <span>Movimento</span>
            <b aria-hidden className="text-red">→</b>
            <span>Resultado</span>
          </p>
        </div>
      </div>
    </section>
  );
}
