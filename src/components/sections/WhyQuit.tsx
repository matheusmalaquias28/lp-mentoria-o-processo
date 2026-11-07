import { Eyebrow, Media } from "@/components/ui/Primitives";
import { photos } from "@/content";
import { RatRace } from "./RatRace";

export function WhyQuit() {
  return (
    <section className="theme-dark section-y relative overflow-hidden">
      <div className="wrap">
        <div className="grid items-center gap-12 xl:grid-cols-12 xl:gap-10">
          <div className="xl:col-span-5">
            <div className="text-center sm:text-left">
              <Eyebrow>Por que a maioria dos iniciantes desiste</Eyebrow>
              <h2 data-split className="display-l mt-7 leading-[1.1] lg:text-[3.5em]">
                Te mandam copiar um produto que já vende. É assim que você perde dinheiro.
              </h2>
            </div>
            <div className="lead mx-auto mt-10 max-w-[38rem] space-y-5 text-center text-(--mute) sm:mx-0 sm:text-left" data-reveal>
              <p>
                O conselho que 95% do mercado dá pra quem está começando é esse: entra na biblioteca de anúncios, acha
                um produto com muitos anúncios no ar, copia e roda.
              </p>
              <p>
                Quando você copia, você entra na prateleira mais disputada do mercado, com a mesma oferta de todo mundo,
                sem saber por que ela vende. O anúncio fica caro, a venda não vem, e você conclui que o problema é o
                vídeo, ou a página, ou a verba. Troca tudo. Dá murro na parede.
              </p>
            </div>
          </div>

          {/* card: imagem dos produtos testados + o número */}
          <div className="xl:col-span-7" data-reveal>
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 lg:mx-auto lg:w-[70%] xl:mr-0 bg-[radial-gradient(120%_90%_at_30%_50%,rgb(225_29_42/0.16),transparent_60%),linear-gradient(180deg,#141414,#0b0b0b)]">
              {/* filetes de luz vermelha no topo e na base */}
              <span aria-hidden className="pointer-events-none absolute inset-x-[12%] top-0 h-px bg-[linear-gradient(90deg,transparent,var(--color-red),transparent)]" />
              <span aria-hidden className="pointer-events-none absolute inset-x-[12%] bottom-0 h-px bg-[linear-gradient(90deg,transparent,var(--color-red),transparent)]" />

              <div className="grid items-center gap-2 p-4 sm:grid-cols-[1.15fr_1fr] sm:gap-0 sm:p-6 lg:grid-cols-1 lg:gap-2 lg:p-8">
                <Media
                  slot={photos.productsTested}
                  sizes="(min-width: 1280px) 50vw, (min-width: 1024px) 90vw, (min-width: 640px) 50vw, 92vw"
                  className="aspect-[5/4] rounded-[1.25rem] lg:aspect-[21/9] xl:aspect-[16/9]"
                />

                <div className="px-3 pt-4 pb-5 text-center sm:border-l sm:border-white/10 sm:py-4 sm:pr-2 sm:pl-8 sm:text-left lg:border-l-0 lg:px-6 lg:pt-6 lg:pb-2 lg:text-center">
                  <p className="text-[clamp(3.25rem,6vw,5.25rem)] leading-[0.92] font-extrabold tracking-[-0.06em] xl:text-[clamp(3rem,4.2vw,4.75rem)]">
                    <span className="text-red">+</span>300
                    <br />
                    Produtos testados
                  </p>
                  <p className="mt-6 text-[1.125rem] leading-snug font-bold tracking-[-0.02em]">
                    E te digo: anúncio no ar não quer dizer lucro.
                  </p>
                  <p className="mt-3 text-[1rem] leading-relaxed text-(--mute)">
                    Você não sabe se a pessoa está tendo lucro com aquele produto.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* o ciclo de quem copia: a corrida dos ratos */}
        <RatRace />

        {/* concepção */}
        <figure className="mt-12 text-center sm:text-left lg:mt-44 lg:text-center">
          <blockquote data-split className="display-xl mx-auto max-w-[16ch] sm:mx-0 lg:mx-auto lg:text-[3.5em]">
            As pessoas não compram a sua oferta. Elas compram a sua <span className="text-red">concepção.</span>
          </blockquote>
          <figcaption className="label mt-8 flex items-center justify-center gap-3 text-(--mute) sm:justify-start lg:justify-center" data-reveal>
            <span className="h-px w-10 bg-red" aria-hidden />
            Heitor Nogueira
          </figcaption>
        </figure>

        <div className="mt-20 grid gap-10 lg:mt-28 lg:grid-cols-12 lg:gap-10">
          <div className="rounded-[1.75rem] border border-(--line) p-7 text-center sm:p-10 sm:text-left lg:col-span-6 lg:row-span-2" data-reveal>
            <p className="flex flex-wrap items-baseline justify-center gap-x-3 sm:justify-start">
              <span className="text-[2rem] font-extrabold tracking-[-0.04em]">con·cep·ção</span>
              
            </p>
            <p className="lead mt-5 text-white/85">
              A ideia por trás do produto: o que você vende, pra quem, em que formato, e por que ninguém mais está
              vendendo daquele jeito. 
            </p>
            <div className="mt-9 border-t border-(--line) pt-7">
              <p className="label text-(--faint)">No exemplo dos Salmos, a ideia não era</p>
              <p className="mt-2 text-[1.55rem] font-bold text-(--mute)">
                <span className="strike" data-strike>
                  “ebook cristão”
                </span>
              </p>
              <p className="label mt-6 text-(--faint)">Era</p>
              <p className="mt-2 text-[1.35rem] leading-snug font-bold">
                “todos os 150 Salmos explicados versículo por versículo”, pra uma pessoa que lê a Bíblia e não entende o
                que está lendo.
              </p>
            </div>
            
          </div>
          
<figure className="mt-12 text-center sm:text-left lg:col-span-5 lg:col-start-8 lg:row-start-1 lg:mt-0 lg:text-center">
          <blockquote data-split className="display-xl mx-auto max-w-[16ch] sm:mx-0 lg:mx-auto lg:text-[clamp(2.4rem,3.6vw,3.6rem)] lg:leading-[1]">
            90% do resultado é a ideia.  <span className="text-red">10% é a execução.</span>
          </blockquote>
          
        </figure>
          <div className="flex flex-col justify-between gap-10 lg:col-span-5 lg:col-start-8 lg:row-start-2">
            <div data-reveal>
              <div className="flex h-20 overflow-hidden rounded-2xl text-[1rem] font-extrabold">
                <div className="flex w-[90%] items-end justify-between bg-red p-4">
                  <span>Ideia</span>
                  <span className="text-[2rem] leading-none tracking-[-0.04em]">90%</span>
                </div>
                <div className="flex w-[10%] items-end justify-center bg-white p-2 text-ink">
                  
                  <span className="text-[0.875rem]">10%</span>
                </div>
              </div>
            </div>
            <div className="lead space-y-5 text-center text-(--mute) sm:text-left" data-reveal>
              <p>
               Por isso eu não começo pelo anúncio, nem pela página, nem
                pela verba. <strong className="text-white">Começo pela concepção.</strong>
              </p>
              <p className="text-[1.375rem] leading-snug font-bold tracking-[-0.02em] text-white">
                E diferente de muita gente que te ensina a copiar, aqui eu vou te ensinar a pensar.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
