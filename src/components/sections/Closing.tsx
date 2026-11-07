import { Cta } from "@/components/ui/Cta";
import { Eyebrow, Wordmark } from "@/components/ui/Primitives";
import { Check, Cross, Plus } from "@/components/ui/Icons";
import { faq, fit, links } from "@/content";

export function Fit() {
  return (
    <section className="theme-light section-y">
      <div className="wrap">
        <div className="grid gap-4 lg:grid-cols-2">
          <div className="rounded-[2rem] bg-ink p-7 text-white sm:p-10" data-reveal>
            <h2 className="display-m flex items-center gap-4">
              <span className="grid size-10 flex-none place-items-center rounded-full bg-red text-white">
                <Check width={20} height={20} />
              </span>
              É pra você se
            </h2>
            <ul className="mt-8 divide-y divide-white/10">
              {fit.yes.map((t) => (
                <li key={t} className="py-5 text-[1.1875rem] leading-snug font-bold tracking-[-0.015em] first:pt-0">
                  {t}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-[2rem] border border-(--line) bg-(--card) p-7 sm:p-10" data-reveal>
            <h2 className="display-m flex items-center gap-4">
              <span className="grid size-10 flex-none place-items-center rounded-full border border-(--line-strong) text-(--mute)">
                <Cross width={18} height={18} />
              </span>
              Não é pra você se
            </h2>
            <ul className="mt-8 divide-y divide-(--line)">
              {fit.no.map((n) => (
                <li key={n.t} className="py-5 first:pt-0">
                  <p className="text-[1.1875rem] leading-snug font-bold tracking-[-0.015em]">{n.t}</p>
                  <p className="mt-1.5 text-(--mute)">{n.d}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Faq() {
  return (
    <section id="perguntas" className="theme-dark section-y">
      <div className="wrap grid gap-12 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-12">
            <Eyebrow>Perguntas de quem está começando</Eyebrow>
            <h2 data-split className="display-l mt-7">
              Antes de você decidir.
            </h2>
            <div className="mt-10 hidden lg:block" data-reveal>
              <Cta />
            </div>
          </div>
        </div>
        <div className="lg:col-span-7 lg:col-start-6">
          <div className="border-t border-(--line)">
            {faq.map((f) => (
              <details key={f.q} className="faq group border-b border-(--line)" data-reveal="fade">
                <summary className="flex cursor-pointer items-center justify-between gap-6 py-6 text-[1.1875rem] leading-snug font-bold tracking-[-0.015em] transition-colors hover:text-white sm:text-[1.3rem]">
                  {f.q}
                  <span className="faq-plus grid size-10 flex-none place-items-center rounded-full border border-(--line-strong) text-white">
                    <Plus />
                  </span>
                </summary>
                <p className="max-w-[44rem] pb-7 text-[1.0625rem] leading-relaxed text-(--mute)">{f.a}</p>
              </details>
            ))}
          </div>
          <div className="mt-10 lg:hidden">
            <Cta block />
          </div>
        </div>
      </div>
    </section>
  );
}

export function Final() {
  return (
    <section id="final" className="theme-light section-y relative overflow-hidden">
      <div className="wrap">
        <p className="label text-red" data-reveal>
          Não é um produto
        </p>
        <h2 data-split className="mt-6 text-[clamp(3rem,10vw,10rem)] leading-[0.88] font-extrabold tracking-[-0.06em]">
          É um movimento.
        </h2>
        <div className="mt-14 grid gap-10 lg:mt-20 lg:grid-cols-12 lg:items-end">
          <div className="lead space-y-5 text-(--mute) lg:col-span-6" data-reveal>
            <p>
              Executores passando pelo mesmo processo, um agregando o outro, cada um construindo a própria oferta.
              Independente se você é iniciante ou mais avançado, a mentoria O PROCESSO é pra você.
            </p>
            <p className="text-[clamp(1.5rem,2.4vw,2rem)] leading-[1.15] font-extrabold tracking-[-0.035em] text-ink">
              Você nunca vai estar no momento certo. Executa assim mesmo.
            </p>
          </div>
          <div className="lg:col-span-5 lg:col-start-8" data-reveal>
            <Cta size="lg" className="w-full" />
            <p className="label mt-5 text-center leading-relaxed text-(--mute)">
              R$ 1.197 · Pix ou 12x · acesso vitalício · 7 dias de garantia
            </p>
          </div>
        </div>
        <p
          aria-hidden
          className="pointer-events-none mt-24 text-center text-[clamp(4rem,17vw,17rem)] leading-[0.8] font-extrabold tracking-[-0.07em] text-ink/[0.05] select-none lg:mt-32"
        >
          É só fazer.
        </p>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="theme-dark pt-16 pb-28 lg:pb-16">
      <div className="wrap">
        <div className="flex flex-col gap-8 border-b border-(--line) pb-10 md:flex-row md:items-center md:justify-between">
          <Wordmark className="text-[1.25rem]" />
          <nav aria-label="Rodapé">
            <ul className="flex flex-wrap gap-x-7 gap-y-3 text-[0.9375rem] font-semibold text-(--mute)">
              <li>
                <a className="link-line hover:text-white" href={links.terms}>
                  Termos de uso
                </a>
              </li>
              <li>
                <a className="link-line hover:text-white" href={links.privacy}>
                  Política de privacidade
                </a>
              </li>
              <li>
                <a className="link-line hover:text-white" href={links.contact}>
                  Contato
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="mt-8 grid gap-4 text-[0.8125rem] leading-relaxed text-(--faint) md:grid-cols-2">
          <p>Mentoria O PROCESSO · Heitor Nogueira · Vila Velha, ES.</p>
          <p className="md:text-right">
            Os resultados mostrados nesta página são de operações reais, com tela aberta em vídeos públicos, e não
            garantem resultado individual. Resultado depende de execução, verba e mercado.
          </p>
        </div>
      </div>
    </footer>
  );
}
