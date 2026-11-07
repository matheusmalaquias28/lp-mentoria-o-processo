import { Cta } from "@/components/ui/Cta";
import { Eyebrow } from "@/components/ui/Primitives";
import { ArrowRight, Check, InfinityIcon, Shield } from "@/components/ui/Icons";
import { links, offer, offerIncludes, offerQuotes } from "@/content";

function GuaranteeSeal() {
  const text = "7 DIAS DE GARANTIA · 7 DIAS DE GARANTIA · ";
  return (
    <div className="relative size-36 flex-none">
      <svg viewBox="0 0 200 200" className="absolute inset-0 animate-[spin_22s_linear_infinite]" aria-hidden>
        <defs>
          <path id="seal-circle" d="M100,100 m-78,0 a78,78 0 1,1 156,0 a78,78 0 1,1 -156,0" />
        </defs>
        <text className="fill-current font-mono text-[15.5px] font-medium tracking-[0.18em]">
          <textPath href="#seal-circle">{text}</textPath>
        </text>
      </svg>
      <div className="absolute inset-[22%] grid place-items-center rounded-full bg-red text-white">
        <span className="text-[2.6rem] leading-none font-extrabold tracking-[-0.05em]">7</span>
      </div>
    </div>
  );
}

export function Offer() {
  return (
    <section id="oferta" className="theme-dark section-y relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute top-40 left-1/2 h-[50rem] w-[60rem] -translate-x-1/2 rounded-full bg-red/15 blur-[170px]"
      />
      <div className="wrap relative">
        <Eyebrow>A oferta</Eyebrow>
        <figure className="mt-8 max-w-[56rem]">
          <blockquote data-split className="display-m">
            “O Heitor responde no privado, analisa suas concepções. Ninguém no mercado faz isso pelo preço da mentoria.”
          </blockquote>
          <figcaption className="label mt-5 text-(--mute)" data-reveal>
            {offerQuotes.top.who}
          </figcaption>
        </figure>

        <div className="mt-16 grid gap-4 lg:mt-20 lg:grid-cols-12 lg:gap-6">
          {/* card de preço */}
          <div className="theme-light rounded-[2rem] p-6 shadow-[0_60px_120px_-40px_rgb(232_20_28/0.45)] sm:p-10 lg:col-span-7 lg:p-12" data-reveal="scale">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <p className="label text-(--mute)">Mentoria O PROCESSO</p>
              <span className="label inline-flex items-center gap-1.5 rounded-full bg-ink px-3 py-1.5 text-white">
                <InfinityIcon width={16} height={16} /> Acesso vitalício
              </span>
            </div>

            <div className="mt-8 border-b border-(--line) pb-8">
              <p className="text-[0.9375rem] font-semibold text-(--mute)">Pagamento único</p>
              <p className="tabular mt-1 text-[clamp(3.6rem,8vw,6.5rem)] leading-[0.9] font-extrabold tracking-[-0.06em]">
                {offer.price}
              </p>
              <p className="mt-3 text-[1.0625rem] font-bold">Pix à vista, ou em até 12x no cartão</p>
            </div>

            <ul className="mt-8 space-y-4">
              {offerIncludes.map((it) => (
                <li key={it.title} className="flex gap-3.5">
                  <span className="mt-0.5 grid size-6 flex-none place-items-center rounded-full bg-red text-white">
                    <Check width={14} height={14} />
                  </span>
                  <p className="text-[1.0625rem] leading-snug">
                    <strong className="font-extrabold">{it.title}</strong> <span className="text-(--mute)">{it.text}</span>
                  </p>
                </li>
              ))}
            </ul>

            <div className="mt-8 rounded-2xl border-2 border-dashed border-red/50 bg-red/[0.04] p-5">
              <p className="label text-red">Bônus pra quem entra hoje</p>
              <p className="mt-2 text-[0.98rem] leading-relaxed">
                <strong>25% de desconto no primeiro mês do CashFlow</strong>, a plataforma de gestão de múltiplas ofertas e
                trackeamento avançado que eu uso na minha operação.
              </p>
            </div>

            <div className="mt-9">
              <Cta size="lg" className="w-full" />
              <p className="mt-4 flex items-center justify-center gap-2 text-center text-[0.9375rem] font-semibold text-(--mute)">
                <Shield className="text-red" /> 7 dias de garantia. Se não for pra você, devolvo.
              </p>
            </div>
          </div>

          {/* garantia e objeções */}
          <div className="flex flex-col gap-4 lg:col-span-5">
            <div className="rounded-[2rem] border border-(--line) bg-(--card) p-7 sm:p-9" data-reveal>
              <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
                <GuaranteeSeal />
                <p className="text-[1.0625rem] leading-relaxed text-white/85">
                  Entra, assiste o Comece aqui, participa da primeira call. Se em 7 dias você entender que não é pra você,
                  pede o reembolso e pronto.
                </p>
              </div>
              <p className="mt-6 border-t border-(--line) pt-6 text-[0.98rem] text-(--mute)">
                Não é mensalidade e não tem fidelidade: é um pagamento, acesso pra sempre.
              </p>
            </div>

            <figure className="rounded-[2rem] bg-white/[0.04] p-7 sm:p-9" data-reveal>
              <blockquote className="text-[1.3rem] leading-snug font-bold tracking-[-0.02em]">
                “{offerQuotes.henrique.quote}”
              </blockquote>
              <figcaption className="label mt-5 text-(--mute)">{offerQuotes.henrique.who}</figcaption>
            </figure>

            <div className="rounded-[2rem] border border-red/40 p-7 sm:p-9" data-reveal>
              <p className="label text-red-hi">Fez o Workshop O PROCESSO?</p>
              <p className="mt-3 text-[1.25rem] leading-snug font-bold">
                O que você pagou lá volta: R$ 1.140, ou 12x de R$ 115,58.
              </p>
              <a
                href={links.workshop}
                className="group mt-5 inline-flex items-center gap-2 font-extrabold text-white"
              >
                <span className="link-line">Entrar com o abatimento</span>
                <ArrowRight className="text-red transition-transform duration-500 ease-(--ease-expo) group-hover:translate-x-1.5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-4 grid gap-4 md:grid-cols-2 lg:mt-6 lg:gap-6">
          <div className="rounded-[2rem] border border-(--line) p-7 sm:p-9" data-reveal>
            <p className="h-title">O que mais você vai precisar</p>
            <p className="mt-3 leading-relaxed text-(--mute)">
              Um computador, uma conta de anúncios e uma verba de teste. Não existe número mágico de verba: depende da
              oferta, e definir isso é uma das primeiras coisas que a gente faz junto.{" "}
              <strong className="text-white">
                O que eu te garanto é que você não vai gastar antes de a ideia passar no semáforo.
              </strong>
            </p>
          </div>
          <div className="rounded-[2rem] border border-(--line) p-7 sm:p-9" data-reveal>
            <p className="h-title">Caro comparado com o quê?</p>
            <p className="mt-3 leading-relaxed text-(--mute)">
              Com um curso gravado que te deixa sozinho na primeira dúvida. Com um mês de anúncio numa ideia errada, sem
              ninguém pra dizer “isso não vai vingar, muda”.{" "}
              <strong className="text-white">O que você está pagando aqui é a decisão certa antes do dinheiro sair.</strong>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
