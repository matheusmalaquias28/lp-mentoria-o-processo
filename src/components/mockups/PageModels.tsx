/*
 * Recorte da tela "Criar página do zero" do construtor do HUB: dois modelos de página lado a lado,
 * o primeiro selecionado. As prévias são desenhadas em código, com títulos fictícios.
 */

type Model = {
  n: number;
  name: string;
  tag: string;
  tagBg: string;
  bar: string;
  bg: string;
  headline: string;
  sections: number;
  ctas: number;
  checks: [string, boolean][];
  selected?: boolean;
};

const models: Model[] = [
  {
    n: 1,
    name: "Modelo 1",
    tag: "Coral · Verde",
    tagBg: "#e5524a",
    bar: "#e5524a",
    bg: "#3a1d10",
    headline: "+60 modelos prontos pra fabricar e vender",
    sections: 14,
    ctas: 5,
    checks: [
      ["Planos e preços", true],
      ["Prova social", true],
      ["Garantia", true],
    ],
    selected: true,
  },
  {
    n: 2,
    name: "Modelo 2",
    tag: "Azul · Tech",
    tagBg: "#2f6fe0",
    bar: "#2f6fe0",
    bg: "#0d1a33",
    headline: "+200 folhas de exercícios pra imprimir",
    sections: 13,
    ctas: 4,
    checks: [
      ["Planos e preços", true],
      ["Prova social", false],
      ["Garantia", true],
    ],
  },
];

function Preview({ m }: { m: Model }) {
  return (
    <div className="relative overflow-hidden" style={{ background: m.bg }}>
      <span className="block h-1.5" style={{ background: m.bar }} />
      <div className="flex flex-col items-center px-2.5 pt-2.5 pb-3 text-center">
        <span className="rounded-full bg-white/85 px-1.5 py-px text-[0.375rem] font-bold text-black/70 uppercase">
          Compra segura
        </span>
        <p className="mt-1.5 flex min-h-[2.2em] items-center text-[0.625rem] leading-[1.1] font-extrabold text-white">
          {m.headline}
        </p>
        <span className="mt-1.5 block h-1 w-3/4 rounded-full bg-white/25" />
        <span className="mt-2 block aspect-[16/9] w-3/5 rounded-[3px] border border-white/10 bg-white/[0.04]" />
        <span className="mt-2 rounded-full bg-[#22b45a] px-2 py-0.5 text-[0.375rem] font-bold text-white uppercase">
          Quero acessar
        </span>
      </div>
    </div>
  );
}

function ModelCard({ m }: { m: Model }) {
  return (
    <div
      className={`relative overflow-hidden rounded-xl border bg-[#1d1b18] ${
        m.selected ? "border-[#f59e2b] shadow-[0_0_0_1px_#f59e2b]" : "border-white/10"
      }`}
    >
      <Preview m={m} />
      {m.selected && (
        <span className="absolute top-2.5 right-1.5 grid size-4 place-items-center rounded-full bg-[#f59e2b] text-[#1d1b18]">
          <svg viewBox="0 0 24 24" className="size-2.5" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="m5 12 5 5 9-10" />
          </svg>
        </span>
      )}
      <div className="p-2.5">
        <div className="flex flex-wrap items-center justify-between gap-1">
          <span className="text-[0.75rem] font-bold text-[#f3efe8]">{m.name}</span>
          <span className="rounded-full px-1.5 py-0.5 text-[0.5rem] font-bold text-white" style={{ background: m.tagBg }}>
            {m.tag}
          </span>
        </div>
        <div className="mt-2 flex gap-1 border-t border-white/10 pt-2">
          <span className="rounded-full bg-white/[0.07] px-1.5 py-0.5 text-[0.5625rem] font-bold text-[#e4ded4]">
            {m.sections} seções
          </span>
          <span className="rounded-full bg-white/[0.07] px-1.5 py-0.5 text-[0.5625rem] font-bold text-[#e4ded4]">
            {m.ctas} CTAs
          </span>
        </div>
        <ul className="mt-2 space-y-1">
          {m.checks.map(([t, on]) => (
            <li
              key={t}
              className={`flex items-center gap-1.5 text-[0.5625rem] ${on ? "text-[#e4ded4]" : "text-[#7c766d] line-through"}`}
            >
              <span className={on ? "text-[#22b45a]" : "text-[#7c766d]"} aria-hidden>
                {on ? "✓" : "—"}
              </span>
              {t}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export function PageModels() {
  return (
    <div
      role="img"
      aria-label="Construtor de páginas do HUB: escolha entre modelos de página de vendas prontos"
      className="overflow-hidden rounded-xl border border-white/10 bg-[#151412] p-3 text-left shadow-[0_20px_40px_rgb(0_0_0/0.45)]"
    >
      <div className="flex items-center justify-between" aria-hidden>
        <span className="font-serif text-[0.875rem] font-bold text-[#f3efe8]">Criar página do zero</span>
        <span className="text-[0.75rem] text-[#8d877d]">✕</span>
      </div>
      <p className="mt-2.5 text-[0.5625rem] font-bold tracking-[0.08em] text-[#a39c90] uppercase" aria-hidden>
        Visual (cores e fontes)
      </p>
      <div className="mt-2 grid grid-cols-2 gap-2" aria-hidden>
        {models.map((m) => (
          <ModelCard key={m.n} m={m} />
        ))}
      </div>
    </div>
  );
}
