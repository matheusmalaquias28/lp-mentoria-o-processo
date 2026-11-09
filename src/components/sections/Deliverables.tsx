import type { ReactNode } from "react";
import { Eyebrow } from "@/components/ui/Primitives";
import Image from "next/image";
import { AgentsMock } from "@/components/mockups/Mockups";
import { HubChat } from "@/components/mockups/HubChat";
import { PageModels } from "@/components/mockups/PageModels";

function Card({
  title,
  children,
  visual,
  className = "",
}: {
  title: string;
  children: ReactNode;
  visual?: ReactNode;
  className?: string;
}) {
  return (
    <article
      data-reveal
      className={`group relative flex flex-col overflow-hidden rounded-[1.75rem] border border-(--line) bg-(--card) p-6 transition-colors duration-500 hover:border-white/20 sm:p-8 ${className}`}
    >
      {visual && <div className="mb-8 flex flex-1 flex-col justify-center">{visual}</div>}
      <h4 className="h-title mt-auto">{title}</h4>
      <p className="mt-2.5 text-[0.98rem] leading-relaxed text-(--mute)">{children}</p>
    </article>
  );
}

function PartHead({ n, title, kicker }: { n: string; title: string; kicker: string }) {
  return (
    <div className="mb-6 flex flex-col gap-2 border-t border-(--line) pt-8 sm:flex-row sm:items-baseline sm:justify-between" data-reveal>
      <h3 className="flex items-baseline gap-4 text-[clamp(1.5rem,2.4vw,2.1rem)] font-extrabold tracking-[-0.035em]">
        <span className="text-red">{n}</span>
        {title}
      </h3>
      <p className="label text-(--faint)">{kicker}</p>
    </div>
  );
}

/* os três tipos de material: planilha, PDF e documento, como arquivos em leque */
function FileShell({ tag, tagBg, children, tilt }: { tag: string; tagBg: string; children: ReactNode; tilt: string }) {
  return (
    <div
      className={`relative aspect-[3/4] w-full rounded-lg border border-white/12 bg-[#1c1c1c] p-2.5 shadow-[0_14px_30px_rgb(0_0_0/0.45)] transition-transform duration-500 ease-(--ease-expo) group-hover:rotate-0 ${tilt}`}
    >
      {/* dobra do canto */}
      <span aria-hidden className="absolute top-0 right-0 size-4 rounded-bl-md border-b border-l border-white/12 bg-[#2a2a2a]" />
      {children}
      <span
        className="absolute bottom-2 left-2.5 rounded px-1.5 py-0.5 text-[0.5625rem] font-extrabold tracking-wide text-white"
        style={{ background: tagBg }}
      >
        {tag}
      </span>
    </div>
  );
}

function FilesMock() {
  return (
    <div className="grid grid-cols-3 gap-3 px-1 sm:gap-4" aria-hidden>
      {/* planilha */}
      <FileShell tag="XLSX" tagBg="#1d8a4e" tilt="-rotate-6 translate-y-1">
        <div className="mt-3 grid grid-cols-3 gap-px overflow-hidden rounded-sm bg-white/10">
          {Array.from({ length: 15 }).map((_, i) => (
            <span
              key={i}
              className={`h-2.5 ${i < 3 ? "bg-[#1d8a4e]/70" : i % 3 === 2 ? "bg-[#1d8a4e]/25" : "bg-[#141414]"}`}
            />
          ))}
        </div>
      </FileShell>

      {/* PDF */}
      <FileShell tag="PDF" tagBg="var(--color-red)" tilt="-translate-y-1.5">
        <span className="mt-3 block h-1.5 w-3/4 rounded-full bg-white/55" />
        <span className="mt-1.5 block h-1 w-1/2 rounded-full bg-white/25" />
        <span className="mt-2.5 block aspect-[16/10] w-full rounded-sm bg-red/25" />
        <span className="mt-2 block h-1 w-full rounded-full bg-white/15" />
        <span className="mt-1 block h-1 w-4/5 rounded-full bg-white/15" />
      </FileShell>

      {/* documento */}
      <FileShell tag="DOC" tagBg="#2f6fe0" tilt="rotate-6 translate-y-1">
        <span className="mt-3 block h-1.5 w-2/3 rounded-full bg-white/55" />
        {Array.from({ length: 6 }).map((_, i) => (
          <span key={i} className={`mt-1.5 block h-1 rounded-full bg-white/18 ${i % 3 === 2 ? "w-3/5" : "w-full"}`} />
        ))}
        <span className="mt-2 flex items-center gap-1">
          <span className="size-1.5 rounded-sm bg-[#2f6fe0]" />
          <span className="h-1 w-3/5 rounded-full bg-white/18" />
        </span>
      </FileShell>
    </div>
  );
}

/*
 * Framework de funil no estilo quadro branco (Whimsical): anúncios → página → checkout → order bumps.
 * As linhas tracejadas correm no sentido do fluxo e os pontos vermelhos são as pessoas passando.
 * Tudo em SVG; a corrida do tracejado é CSS (.flow-line em globals.css), os pontos usam animateMotion.
 */
type FlowNode = { id: string; x: number; y: number; w: number; h: number; label: string[]; fill: string; stroke: string };

const flowNodes: FlowNode[] = [
  { id: "a1", x: 8, y: 26, w: 76, h: 34, label: ["Anúncio 1"], fill: "#fff3c4", stroke: "#e8b931" },
  { id: "a2", x: 8, y: 103, w: 76, h: 34, label: ["Anúncio 2"], fill: "#fff3c4", stroke: "#e8b931" },
  { id: "a3", x: 8, y: 180, w: 76, h: 34, label: ["Anúncio 3"], fill: "#fff3c4", stroke: "#e8b931" },
  { id: "lp", x: 118, y: 94, w: 82, h: 52, label: ["Página de", "vendas"], fill: "#dcecff", stroke: "#6ea6e8" },
  { id: "ck", x: 232, y: 98, w: 74, h: 44, label: ["Checkout"], fill: "#d9f4e2", stroke: "#4dbb78" },
  { id: "b1", x: 326, y: 34, w: 68, h: 40, label: ["Order", "bump 1"], fill: "#ffe1e7", stroke: "#ec7d96" },
  { id: "b2", x: 326, y: 166, w: 68, h: 40, label: ["Order", "bump 2"], fill: "#ffe1e7", stroke: "#ec7d96" },
];

// conexões: de onde sai, pra onde vai, quantas pessoas (pontos) passam e em quanto tempo
const flowLinks = [
  { id: "ff-a1", d: "M84 43 C104 43 98 120 118 120", dots: 2, dur: 2.4 },
  { id: "ff-a2", d: "M84 120 L118 120", dots: 2, dur: 1.6 },
  { id: "ff-a3", d: "M84 197 C104 197 98 120 118 120", dots: 2, dur: 2.4 },
  { id: "ff-lp", d: "M200 120 L232 120", dots: 2, dur: 1.4 },
  { id: "ff-b1", d: "M306 120 C318 120 314 54 326 54", dots: 1, dur: 2.2 },
  { id: "ff-b2", d: "M306 120 C318 120 314 186 326 186", dots: 1, dur: 2.2 },
];

function FunnelFlow() {
  return (
    <div className="rounded-2xl bg-[#f6f5f1] bg-[radial-gradient(rgb(0_0_0/0.13)_1px,transparent_1.2px)] bg-size-[14px_14px] p-3 sm:p-4">
      <svg
        viewBox="0 0 400 240"
        className="h-auto w-full overflow-visible"
        role="img"
        aria-label="Funil: três anúncios levam à página de vendas, que leva ao checkout, com dois order bumps"
      >
        <defs>
          <marker id="ff-arrow" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="6" markerHeight="6" orient="auto">
            <path d="M0 0 L8 4 L0 8 z" fill="#3a3a3a" />
          </marker>
        </defs>

        {/* linhas do fluxo */}
        {flowLinks.map((l) => (
          <g key={l.id}>
            <path id={l.id} d={l.d} fill="none" stroke="#3a3a3a" strokeOpacity="0.18" strokeWidth="2" />
            <path
              d={l.d}
              fill="none"
              stroke="#3a3a3a"
              strokeWidth="1.4"
              strokeLinecap="round"
              markerEnd="url(#ff-arrow)"
              className="flow-line"
            />
            {Array.from({ length: l.dots }).map((_, i) => (
              <circle key={i} r="3" fill="var(--color-red)" className="flow-dot">
                <animateMotion dur={`${l.dur}s`} begin={`${(-i * l.dur) / l.dots}s`} repeatCount="indefinite">
                  <mpath href={`#${l.id}`} />
                </animateMotion>
              </circle>
            ))}
          </g>
        ))}

        {/* cartões */}
        {flowNodes.map((n) => (
          <g key={n.id}>
            <rect x={n.x} y={n.y + 2} width={n.w} height={n.h} rx="8" fill="rgb(0 0 0 / 0.08)" />
            <rect x={n.x} y={n.y} width={n.w} height={n.h} rx="8" fill={n.fill} stroke={n.stroke} strokeWidth="1.5" />
            <text
              x={n.x + n.w / 2}
              y={n.y + n.h / 2 - ((n.label.length - 1) * 11) / 2}
              textAnchor="middle"
              dominantBaseline="central"
              fill="#1f1f1f"
              fontSize="10.5"
              fontWeight="700"
            >
              {n.label.map((t, i) => (
                <tspan key={t} x={n.x + n.w / 2} dy={i ? 11 : 0}>
                  {t}
                </tspan>
              ))}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
}

export function Deliverables() {
  return (
    <section id="entregaveis" className="theme-dark section-y relative">
      <div className="wrap">
        <div className="grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <Eyebrow>O que você recebe</Eyebrow>
            <h2 data-split className="display-l mt-7">
              A metodologia inteira gravada. <span className="text-(--mute)">E eu do seu lado enquanto você aplica.</span>
            </h2>
          </div>
          <p className="lead text-(--mute) lg:col-span-4 lg:self-end" data-reveal>
            Curso só gravado te deixa sozinho na primeira dúvida. Mentoria só ao vivo some quando acaba. Eu organizei O
            PROCESSO num formato híbrido pra você ter os dois, <strong className="text-white">pra sempre.</strong>
          </p>
        </div>

        <div className="mt-20 lg:mt-28">
          <PartHead n="1." title="A metodologia gravada" kicker="Em ordem de execução" />
          <div className="grid gap-3 lg:grid-cols-12">
            <Card
              title="11 módulos em ordem de execução."
              className="lg:col-span-7"
              visual={
                <Image
                  src="/formatos/area-membros.webp"
                  alt="Área de membros da mentoria O PROCESSO aberta num notebook, com os módulos da metodologia MVT"
                  width={1200}
                  height={900}
                  sizes="(min-width: 1024px) 50vw, 92vw"
                  className="mx-auto h-auto w-full max-w-[40rem] drop-shadow-[0_30px_40px_rgb(0_0_0/0.5)]"
                />
              }
            >
              Comece aqui · Informações iniciais · Mandamentos · Concepção de oferta · Criação de oferta · Páginas de
              vendas 1 e 2 · Entregável · Criativo · Tráfego · Parte avançada. Toda aula é direta e explica o porquê.
            </Card>
            <Card title="Pacote de Frameworks MVT." className="lg:col-span-5" visual={<FunnelFlow />}>
              O mapa mental de cada etapa, construído por mim. Você abre o mapa e sabe o que fazer agora.
            </Card>
          </div>
        </div>

        <div className="mt-16 lg:mt-24">
          <PartHead n="2." title="Eu olhando a sua operação" kicker="Não é equipe. Sou eu." />
          <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
            <Card title="Mesa de Guerra: duas calls ao vivo por semana." className="md:col-span-2" visual={
                <Image
                  src="/formatos/mesa-de-guerra.webp"
                  alt="Mesa de Guerra: call ao vivo do Heitor Nogueira com os executores, aberta num notebook"
                  width={1200}
                  height={900}
                  sizes="(min-width: 1024px) 44rem, 92vw"
                  className="mx-auto h-auto w-full max-w-[36rem] drop-shadow-[0_30px_40px_rgb(0_0_0/0.5)] lg:max-w-[44rem]"
                />
              }
            >
              Segunda às 19h, e uma segunda votada na semana. Eu olho a sua ideia, a sua página, o seu anúncio e digo o
              que mudar. Fica gravado se você não puder ir.
            </Card>
            <Card title="Chat do HUB de segunda a sexta." visual={<HubChat />}>
              Você manda a dúvida e sou eu que respondo. Não é equipe. Não é outra pessoa que analisa, sou eu mesmo que
              faço isso.
            </Card>
            <Card title="Exército de Executores." visual={<AgentsMock />}>
              Agentes de IA treinados na metodologia, disponíveis 24h, pra te ajudar na ideia, na oferta, na página e no
              anúncio. Ferramenta acelera, mas não pensa por você.
            </Card>
            <Card title="Planilhas, PDFs e documentos" visual={<FilesMock />}>que a minha operação usa.</Card>
            <Card title="Modelos de página de vendas." visual={<PageModels />}>
              E o construtor de página dentro do HUB. Você nem paga hospedagem.
            </Card>
            <Card title="Gravação de todos os encontros." className="md:col-span-2 lg:col-span-3">
              Mais de um ano de calls, duas por semana, desde outubro de 2025.
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
