import type { CSSProperties } from "react";
import { Cta } from "@/components/ui/Cta";
import Image from "next/image";
import { Wordmark } from "@/components/ui/Primitives";

const d = (s: number) => ({ "--d": `${s}s` }) as CSSProperties;

export function Hero() {
  return (
    <section
      id="topo"
      className="theme-dark relative flex min-h-svh flex-col justify-end overflow-hidden pt-8 sm:block sm:min-h-0 sm:pt-10 lg:pt-14"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -top-48 right-[-18%] h-[46rem] w-[46rem] rounded-full bg-red/20 blur-[150px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgb(255_255_255/0.035)_1px,transparent_1px)] bg-[size:calc(100%/6)_100%] [mask-image:linear-gradient(to_bottom,black,transparent_85%)]"
      />

      {/* foto de fundo do celular: Heitor no topo, a base da foto já é escura e recebe o texto */}
      <div aria-hidden className="pointer-events-none absolute inset-0 sm:hidden">
        <Image
          src="/hero-heitor-mobile.webp"
          alt=""
          fill
          priority
          unoptimized
          sizes="100vw"
          className="object-cover object-top"
        />
      </div>

      {/* foto de fundo (só desktop): Heitor à direita, escurecida à esquerda pra o texto ler bem */}
      <div aria-hidden className="pointer-events-none absolute inset-0 hidden lg:block">
        <Image
          src="/hero-heitor-v2.webp"
          alt=""
          fill
          priority
          unoptimized
          sizes="100vw"
          className="object-cover object-[70%_center]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgb(10_10_10)_0%,rgb(10_10_10/0.85)_32%,rgb(10_10_10/0.2)_62%,transparent_80%)]" />
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[rgb(10_10_10)] to-transparent" />
      </div>

      <div className="wrap relative grid items-start gap-16 lg:grid-cols-12 lg:gap-10">
        <div className="text-center sm:text-left lg:col-span-7 lg:pt-4">
          <div className="rise mb-2 sm:mb-3 lg:mb-4" style={d(0.05)}>
            <Wordmark className="text-[0.945rem] sm:text-[1.35rem] lg:text-[1.5rem]" />
          </div>

          <h1 className="display-xl text-[clamp(2.04rem,9.18vw,2.55rem)] sm:text-[clamp(2.5rem,5.6vw,5.5rem)]">
            {/* no celular "Lucre com" e "ofertas" dividem a primeira linha */}
            <span className="line-mask max-sm:inline-block!">
              <span style={d(0.12)}>Lucre com</span>
            </span>{" "}
            <span className="line-mask max-sm:mt-0! max-sm:inline-block!">
              <span style={d(0.22)}>ofertas</span>
            </span>
            <span className="line-mask pb-[0.18em]! -mb-[0.18em]!">
              <span style={d(0.32)} className="relative mx-auto w-fit sm:mx-0">
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
              className="rise mx-auto mt-4 block max-w-[34rem] text-[clamp(1.375rem,2.6vw,2rem)] sm:mx-0 sm:mt-7 leading-[1.15] font-bold tracking-[-0.025em] text-white/85"
              style={d(0.5)}
            >
              Sem aparecer, sem ser especialista e sem copiar ninguém.
            </span>
          </h1>

          <p className="lead rise mx-auto mt-5 max-w-[36rem] text-[0.9375rem]! leading-[1.55]! text-(--mute) sm:mx-0 sm:mt-8 sm:text-[clamp(1.0625rem,1.3vw,1.25rem)]! sm:leading-[1.6]!" style={d(0.7)}>
            Aprenda a vender produtos digitais de menos de R$50 todos os dias, toda hora. Na mentoria eu te ensino todo o
            processo do zero, e acompanho toda sua operação enquanto você constrói ela.
          </p>

          <div className="rise mt-6 flex flex-col items-center gap-3 sm:mt-10 sm:flex-row sm:gap-5" style={d(0.82)}>
            <Cta size="lg" block />
            <p className="label hidden leading-relaxed text-(--mute) sm:block">
              7 dias de garantia
              <br />+800 executores dentro
            </p>
          </div>
        </div>

      </div>

      <div className="wrap relative mt-6 sm:mt-24 lg:mt-28">
        <div className="border-t border-(--line) py-5 sm:py-10 lg:py-12">
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
