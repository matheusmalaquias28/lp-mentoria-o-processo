import type { CSSProperties } from "react";

/*
 * O ciclo de quem copia, desenhado como um anel: seis fases que voltam pro começo.
 * No centro, um rato corre sem parar numa roda (a corrida dos ratos); acima, um título
 * fixo e o título da fase atual, que troca no mesmo compasso do cometa e do número aceso.
 * Tudo em SVG + CSS (ver "corrida dos ratos" em globals.css): cada fase dura 2.5s, o ciclo 15s.
 */

const steps = [
  "Acha um produto com muitos anúncios no ar",
  "Copia e roda",
  "Entra na prateleira mais disputada do mercado",
  "O anúncio fica caro, a venda não vem",
  "Troca o vídeo, a página, a verba",
  "Desiste achando que “isso não é pra mim”",
];

// fase 1 no topo, sentido horário
const angles = steps.map((_, i) => -90 + i * 60);
const rad = (deg: number) => (deg * Math.PI) / 180;
const round = (n: number) => Math.round(n * 1000) / 1000;

/** posição no anel, relativa ao centro, em múltiplos de --R */
function at(deg: number, k = 0.96): CSSProperties {
  return {
    left: `calc(50% + ${round(Math.cos(rad(deg)) * k)} * var(--R))`,
    top: `calc(50% + ${round(Math.sin(rad(deg)) * k)} * var(--R))`,
  };
}

function RatWheel() {
  const spokes = Array.from({ length: 8 }, (_, i) => i * 45);
  return (
    <div
      role="img"
      aria-label="Rato correndo sem parar numa roda: a corrida dos ratos de quem vive tentando e errando"
      className="relative aspect-square w-[calc(var(--R)*1.24)]"
    >
      <svg viewBox="0 0 200 200" className="absolute inset-0 h-full w-full overflow-visible" aria-hidden>
        {/* suporte */}
        <path d="M100 100 L62 204 M100 100 L138 204" stroke="rgb(255 255 255 / 0.12)" strokeWidth="4" strokeLinecap="round" />
        <g className="rat-wheel">
          <circle cx="100" cy="100" r="92" fill="none" stroke="rgb(255 255 255 / 0.28)" strokeWidth="4" />
          <circle cx="100" cy="100" r="85" fill="none" stroke="rgb(255 255 255 / 0.22)" strokeWidth="6" strokeDasharray="1.6 7" />
          {spokes.map((a) => (
            <line
              key={a}
              x1="100"
              y1="100"
              x2={round(100 + 85 * Math.cos(rad(a)))}
              y2={round(100 + 85 * Math.sin(rad(a)))}
              stroke="rgb(255 255 255 / 0.1)"
              strokeWidth="1.5"
            />
          ))}
        </g>
        <circle cx="100" cy="100" r="6" fill="var(--color-red)" />
      </svg>

      {/* o rato corre parado no fundo da roda */}
      <svg viewBox="0 0 120 70" className="absolute bottom-[8%] left-1/2 w-[56%] -translate-x-1/2 overflow-visible" aria-hidden>
        <path className="rat-tail" d="M30 42 C 18 46, 12 30, 1 35" fill="none" stroke="#cfcfcf" strokeWidth="2.6" strokeLinecap="round" />
        {/* patas do lado de lá */}
        <rect className="rat-leg rat-leg-b" x="38" y="48" width="5" height="16" rx="2.5" fill="#9a9a9a" />
        <rect className="rat-leg rat-leg-a" x="74" y="47" width="5" height="16" rx="2.5" fill="#9a9a9a" />
        <g className="rat-body">
          <ellipse cx="56" cy="40" rx="28" ry="15" fill="#f1f1f1" />
          <ellipse cx="85" cy="35" rx="15" ry="11" fill="#f1f1f1" transform="rotate(-8 85 35)" />
          <path d="M94 28 L111 38 L94 43 Z" fill="#f1f1f1" />
          <circle cx="79" cy="23" r="7.5" fill="#dcdcdc" />
          <circle cx="79" cy="23" r="4.2" fill="#ff8a91" />
          <circle cx="92" cy="31.5" r="2" fill="#0a0a0a" />
          <circle cx="111" cy="38" r="2.2" fill="var(--color-red)" />
          <path d="M104 38 L118 33 M104 39.5 L119 40.5" stroke="#bdbdbd" strokeWidth="0.8" strokeLinecap="round" />
        </g>
        {/* patas do lado de cá */}
        <rect className="rat-leg rat-leg-a" x="42" y="49" width="5.5" height="16" rx="2.75" fill="#e6e6e6" />
        <rect className="rat-leg rat-leg-b" x="78" y="47" width="5.5" height="16" rx="2.75" fill="#e6e6e6" />
      </svg>
    </div>
  );
}

export function RatRace() {
  const chevrons = angles.map((a) => a + 30);
  return (
    <div className="mt-20 lg:mt-28" data-reveal="fade">
      {/* leitores de tela recebem as fases em lista; o anel é só visual */}
      <ol className="sr-only">
        {steps.map((s) => (
          <li key={s}>{s}</li>
        ))}
      </ol>

      {/* título fixo; abaixo, o título da fase atual troca no compasso do cometa; seta pra roda */}
      <div className="mx-auto max-w-[44rem] text-center">
        <p className="text-[clamp(1.125rem,1.8vw,1.5rem)] leading-snug font-bold tracking-[-0.02em] text-balance text-(--mute)">
          Essa é a corrida dos ratos que você entra ao ficar copiando outras ofertas:
        </p>
        <div className="phase-stack mt-4 grid" aria-hidden>
          {steps.map((s, i) => (
            <p
              key={s}
              className={`phase self-end text-[clamp(1.5rem,3.2vw,2.9rem)] leading-[1.1] font-extrabold tracking-[-0.04em] text-balance ${
                i === steps.length - 1 ? "text-red-hi" : ""
              }`}
              style={{ "--i": i } as CSSProperties}
            >
              {s}
            </p>
          ))}
        </div>
        <div className="float mt-6 flex justify-center text-red [--float:6px]" aria-hidden>
          <svg viewBox="0 0 24 24" className="size-8" fill="none" stroke="currentColor" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 4v15M5.5 12.5 12 19l6.5-6.5" />
          </svg>
        </div>
      </div>

      <div
        className="relative mx-auto mt-8 h-[calc(var(--R)*2+3.5rem)] w-full max-w-[40rem] [--R:8.25rem] sm:[--R:10.5rem] lg:mt-10 lg:[--R:13rem]"
        aria-hidden
      >
        {/* anel */}
        <svg
          viewBox="0 0 200 200"
          className="absolute top-1/2 left-1/2 h-[calc(var(--R)*2)] w-[calc(var(--R)*2)] -translate-x-1/2 -translate-y-1/2 overflow-visible"
        >
          <circle cx="100" cy="100" r="96" fill="none" stroke="rgb(255 255 255 / 0.16)" strokeWidth="1" strokeDasharray="2.5 4" />
          {chevrons.map((a) => (
            <path
              key={a}
              d="M-2.4 -3.4 L1.6 0 L-2.4 3.4"
              fill="none"
              stroke="rgb(255 255 255 / 0.45)"
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              transform={`translate(${round(100 + 96 * Math.cos(rad(a)))} ${round(100 + 96 * Math.sin(rad(a)))}) rotate(${a + 90})`}
            />
          ))}
          <g className="cycle-comet">
            <circle cx="100" cy="100" r="96" fill="none" stroke="var(--color-red)" strokeOpacity="0.28" strokeWidth="2.4" strokeDasharray="90 513" strokeLinecap="round" />
            <circle cx="100" cy="100" r="96" fill="none" stroke="var(--color-red)" strokeWidth="2.6" strokeDasharray="26 577" strokeDashoffset="-64" strokeLinecap="round" />
          </g>
        </svg>

        {/* rato na roda, no centro */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <RatWheel />
        </div>

        {/* números das fases */}
        {steps.map((s, i) => {
          const last = i === steps.length - 1;
          return (
            <span
              key={s}
              className={`cycle-node absolute grid size-10 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border bg-ink text-[0.875rem] font-extrabold sm:size-11 ${
                last ? "border-red text-red-hi" : "border-white/25 text-white"
              }`}
              style={
                {
                  ...at(angles[i]),
                  "--i": i,
                  "--node-border": last ? "var(--color-red)" : "rgb(255 255 255 / 0.25)",
                  "--node-fg": last ? "var(--color-red-hi)" : "#fff",
                } as CSSProperties
              }
            >
              {i + 1}
            </span>
          );
        })}
      </div>
    </div>
  );
}
