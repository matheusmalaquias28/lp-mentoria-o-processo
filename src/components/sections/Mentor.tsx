import { Cta } from "@/components/ui/Cta";
import { Eyebrow, Media } from "@/components/ui/Primitives";
import { mentorStats, photos } from "@/content";

export function Mentor() {
  return (
    <section id="mentor" className="theme-dark section-y relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/3 -left-60 h-[40rem] w-[40rem] rounded-full bg-red/10 blur-[160px]"
      />
      <div className="wrap relative">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-5">
            <div data-reveal="scale">
              <Media
                slot={photos.mentorPortrait}
                sizes="(min-width: 1024px) 36vw, 100vw"
                className="aspect-[4/5] rounded-[2rem] border border-(--line)"
              />
            </div>
            <div className="mt-3 grid grid-cols-3 gap-3">
              {[photos.mentorFamily, photos.mentorCall, photos.mentorChannel].map((p) => (
                <div key={p.alt} data-reveal>
                  <Media slot={p} sizes="(min-width: 1024px) 14vw, 33vw" className="aspect-square rounded-2xl border border-(--line)" />
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-6 lg:col-start-7 lg:pt-6">
            <Eyebrow>Quem vai te acompanhar</Eyebrow>
            <h2 data-split className="display-l mt-7">
              Heitor Nogueira. <span className="text-(--mute)">Eu opero o que ensino.</span>
            </h2>
            <div className="lead mt-10 space-y-5 text-(--mute)" data-reveal>
              <p>
                Sou formado em engenharia mecânica e nunca trabalhei como engenheiro. Trabalhei de carteira assinada
                desde os 16 anos, tive um comércio de etiquetas e uma agência de milhas com dois sócios, que a gente
                vendeu. Entrei no digital pelo dropshipping e migrei pra produto digital por volta de 2022.
              </p>
              <p>
                Durante anos fiquei nos bastidores, montando a estratégia de outros experts. Cansei de depender dos
                outros pra executar o que eu desenhava. Em agosto de 2025 resolvi aparecer, e em outubro de 2025 abri a
                mentoria O PROCESSO,{" "}
                <strong className="text-white">a primeira coisa com o meu nome que eu vendi na vida.</strong>
              </p>
              <p>
                Hoje são mais de 800 executores dentro. Minha operação continua rodando todo dia, com equipe enxuta e
                várias ofertas ao mesmo tempo. Moro em Vila Velha, no Espírito Santo, com a minha família.
              </p>
            </div>
          </div>
        </div>

        {/* números com tela aberta */}
        <div className="mt-24 lg:mt-32">
          <p className="mx-auto max-w-[40rem] text-center text-[clamp(1.125rem,1.6vw,1.375rem)] leading-snug font-semibold tracking-[-0.01em] text-(--mute)" data-reveal>
            Esses são alguns números da minha operação, que você vai ver de perto dentro da mentoria.
          </p>
          <div className="mt-6 grid gap-3 lg:grid-cols-3">
            {mentorStats.map((s) => (
              <article
                key={s.value}
                data-reveal
                className="group relative overflow-hidden rounded-[1.75rem] border border-(--line) bg-(--card) p-7 text-center transition-colors duration-500 hover:border-red/60 sm:p-8"
              >
                <span
                  aria-hidden
                  className="absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-red transition-transform duration-700 ease-(--ease-expo) group-hover:scale-x-100"
                />
                <p className="flex flex-col items-center gap-1">
                  <span className="tabular text-[clamp(2.4rem,4vw,3.5rem)] leading-none font-extrabold tracking-[-0.05em] whitespace-nowrap">
                    {s.prefix}
                    <span data-count={s.value}>{s.value.toLocaleString("pt-BR")}</span>
                  </span>
                  <span className="text-[1.0625rem] leading-snug font-bold tracking-[-0.01em] text-(--mute)">{s.after}</span>
                </p>
                <p className="mt-5 border-t border-(--line) pt-4 text-[1.0625rem] leading-snug font-semibold">{s.note}</p>
              </article>
            ))}
          </div>

          <div className="mt-14 grid justify-items-center gap-10 text-center lg:mt-20">
            <blockquote className="lg:max-w-[52rem]" data-reveal>
              <p className="display-m">Não tô te prometendo dinheiro fácil, mansões e carros. Tô aqui pra mostrar a realidade.</p>
              <p className="mx-auto mt-5 max-w-[34rem] text-(--mute)">
                Cada número está num vídeo público do meu canal, com a tela aberta. Lucro é depois do custo de anúncio.
              </p>
            </blockquote>
            <div data-reveal>
              <Cta block />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
