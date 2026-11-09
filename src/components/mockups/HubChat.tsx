/*
 * Réplica do canal "Bate Papo Geral" do HUB, com conversa fictícia e avatares de iniciais
 * (sem foto de ninguém). Tons quentes e o laranja do HUB, como no app de verdade.
 */

type Msg = {
  name: string;
  time: string;
  text: string;
  /** cor do avatar de iniciais */
  tone: string;
  mentor?: boolean;
  replies?: Omit<Msg, "replies">[];
};

const HEITOR = { name: "Heitor Nogueira", tone: "#e8141c", mentor: true } as const;

const before: Msg[] = [
  {
    name: "Rafael M.",
    time: "14:05",
    tone: "#2f9e6e",
    text: "Minha página tá convertendo pouco no celular. Alguém dá uma olhada?",
    replies: [
      {
        ...HEITOR,
        time: "14:32",
        text: "Analisei ela aqui, a copy da headline está um pouco confusa, o botão está pouco chamativo e a velocidade está em 56 no mobile, participa da call da mentoria amanhã que ajustamos juntos",
      },
    ],
  },
];

const today: Msg[] = [
  {
    name: "Bruno A.",
    time: "08:47",
    tone: "#d9822b",
    text: "Tem call da mentoria hoje?",
    replies: [{ ...HEITOR, time: "08:52", text: "Tem sim, 19h. Traz a sua página que a gente olha junto." }],
  },
];

function initials(name: string) {
  return name
    .replace(/\./g, "")
    .split(" ")
    .map((p) => p[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

function Avatar({ name, tone, small }: { name: string; tone: string; small?: boolean }) {
  return (
    <span
      aria-hidden
      className={`grid flex-none place-items-center rounded-full font-bold text-white ${
        small ? "size-6 text-[0.5625rem]" : "size-7 text-[0.625rem]"
      }`}
      style={{ background: tone }}
    >
      {initials(name)}
    </span>
  );
}

function Line({ m, small }: { m: Omit<Msg, "replies">; small?: boolean }) {
  return (
    <div className="flex gap-2.5">
      <Avatar name={m.name} tone={m.tone} small={small} />
      <div className="min-w-0">
        <p className="flex flex-wrap items-baseline gap-x-1.5">
          <span className="text-[0.75rem] font-bold text-[#f3efe8]">{m.name}</span>
          {m.mentor && (
            <span className="rounded bg-[#f59e2b]/15 px-1 py-px text-[0.5625rem] font-bold tracking-wide text-[#f5a83f] uppercase">
              Mentor
            </span>
          )}
          <span className="text-[0.625rem] text-[#8d877d]">{m.time}</span>
        </p>
        <p className="mt-0.5 text-[0.75rem] leading-snug text-[#e4ded4]">{m.text}</p>
      </div>
    </div>
  );
}

function Thread({ m }: { m: Msg }) {
  return (
    <div>
      <Line m={m} />
      {m.replies && (
        <div className="mt-2.5 ml-3.5 space-y-2.5 border-l border-white/10 pl-3.5">
          {m.replies.map((r) => (
            <Line key={r.time + r.name} m={r} small />
          ))}
        </div>
      )}
    </div>
  );
}

export function HubChat() {
  return (
    <div
      role="img"
      aria-label="Chat do HUB: no canal Bate Papo Geral, alunos mandam dúvidas e o Heitor responde"
      className="overflow-hidden rounded-xl border border-white/10 bg-[#1b1a18] text-left shadow-[0_20px_40px_rgb(0_0_0/0.45)]"
    >
      {/* topo do canal */}
      <div className="flex items-center gap-2 border-b border-white/[0.07] px-4 py-2.5">
        <span className="text-[0.875rem] font-bold text-[#b9b2a6]">#</span>
        <span className="text-[0.75rem] font-bold text-[#f3efe8]">Bate Papo Geral</span>
        <span className="truncate text-[0.6875rem] text-[#a39c90]">— Papo livre com a galera.</span>
      </div>

      {/* mensagens */}
      <div className="space-y-4 px-4 pt-4 pb-3" aria-hidden>
        {before.map((m) => (
          <Thread key={m.time} m={m} />
        ))}

        <div className="flex items-center gap-2">
          <span className="h-px flex-1 bg-white/10" />
          <span className="rounded-full border border-white/10 px-2 py-0.5 text-[0.5625rem] text-[#b9b2a6]">Hoje</span>
          <span className="h-px flex-1 bg-white/10" />
        </div>

        {today.map((m) => (
          <Thread key={m.time} m={m} />
        ))}
      </div>

      {/* caixa de mensagem */}
      <div className="flex items-center gap-2 border-t border-white/[0.07] px-3 py-2.5" aria-hidden>
        <div className="flex-1 rounded-lg border border-white/10 bg-[#211f1c] px-3 py-2">
          <div className="mb-1.5 flex gap-2.5 text-[0.625rem] text-[#8d877d]">
            <b>B</b>
            <i>I</i>
            <u>U</u>
          </div>
          <span className="text-[0.6875rem] text-[#8d877d]">Mensagem em #Bate Papo Geral</span>
        </div>
        <span className="grid size-8 flex-none place-items-center rounded-lg bg-[#f59e2b] text-[#1b1a18]">
          <svg viewBox="0 0 24 24" className="size-4" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 3 10 14M21 3l-7 18-4-7-7-4 18-7z" />
          </svg>
        </span>
      </div>
    </div>
  );
}
