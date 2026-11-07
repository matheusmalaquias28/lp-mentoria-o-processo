import { Eyebrow } from "@/components/ui/Primitives";
import { Rail } from "@/components/ui/Rail";
import { VideoCard } from "@/components/video/VideoCard";
import { featuredStory, proofs, videoTestimonials, type Proof } from "@/content";

function ProofCard({ p }: { p: Proof }) {
  if (p.kind === "form") {
    return (
      <article className="rounded-[1.5rem] border border-(--line) bg-white p-6 sm:p-7">
        <p className="label flex items-center gap-2 text-(--faint)">
          <span className="size-1.5 rounded-full bg-red" />
          Formulário de premiação
        </p>
        <dl className="mt-6 space-y-5">
          <div>
            <dt className="label text-[0.625rem] text-(--faint)">Resultado</dt>
            <dd className="mt-1 text-[1.6rem] leading-[1.05] font-extrabold tracking-[-0.04em]">{p.result}</dd>
          </div>
          <div>
            <dt className="label text-[0.625rem] text-(--faint)">Contexto</dt>
            <dd className="mt-1 text-[0.95rem] text-(--mute)">{p.context}</dd>
          </div>
          <div className="border-t border-(--line) pt-5">
            <dt className="label text-[0.625rem] text-(--faint)">Resposta</dt>
            <dd className="mt-1.5 text-[1.125rem] leading-snug font-bold">“{p.quote}”</dd>
          </div>
        </dl>
        <p className="mt-5 text-[0.8125rem] text-(--faint)">{p.who}</p>
      </article>
    );
  }

  if (p.source === "group") {
    return (
      <article>
        <p className="label mb-3 text-(--faint)">Grupo do Workshop</p>
        <div className="relative rounded-[1.25rem] rounded-tl-sm bg-ink p-6 text-white">
          <p className="text-[1.25rem] leading-snug font-bold tracking-[-0.015em]">“{p.quote}”</p>
          <p className="mt-4 text-[0.8125rem] text-white/55">{p.who}</p>
        </div>
      </article>
    );
  }

  return (
    <article className="rounded-[1.5rem] bg-(--card) p-6 sm:p-7">
      <span aria-hidden className="block text-[3.5rem] leading-[0.6] font-extrabold text-red">
        “
      </span>
      <p className="mt-3 text-[1.35rem] leading-[1.2] font-extrabold tracking-[-0.03em]">{p.quote}</p>
      <p className="mt-5 text-[0.8125rem] text-(--faint)">{p.who}</p>
    </article>
  );
}

export function Executors() {
  // cards altos (formulário) e baixos (citação) equilibrados em três colunas
  const cols = [[0, 4], [1, 2], [3]].map((ids) => ids.map((i) => proofs[i]));

  return (
    <section id="executores" className="theme-light section-y overflow-hidden">
      <div className="wrap">
        <Eyebrow>Quem começou do zero</Eyebrow>
        <h2 data-split className="display-l mt-7 max-w-[14ch]">
          Executores. <span className="text-(--faint)">Gente comum, com processo.</span>
        </h2>

        <div className="mt-16 grid gap-10 lg:mt-20 lg:grid-cols-12 lg:items-center lg:gap-12">
          <div className="lg:col-span-7" data-reveal="scale">
            <VideoCard video={featuredStory.video} variant="landscape" sizes="(min-width: 1024px) 55vw, 100vw" />
          </div>
          <div className="lg:col-span-5">
            <p className="label text-red" data-reveal>
              {featuredStory.eyebrow}
            </p>
            <h3 className="display-m mt-4" data-reveal>
              {featuredStory.title}
            </h3>
            <p className="lead mt-5 text-(--mute)" data-reveal>
              {featuredStory.text}
            </p>
            <dl className="mt-8 grid grid-cols-2 gap-3" data-reveal>
              {featuredStory.facts.map((f) => (
                <div key={f.k} className="rounded-2xl bg-(--card) p-5">
                  <dd className="text-[1.6rem] leading-none font-extrabold tracking-[-0.04em]">{f.v}</dd>
                  <dt className="mt-2 text-[0.8125rem] text-(--mute)">{f.k}</dt>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      <div className="mt-24 lg:mt-32" data-reveal>
        <Rail label="Nas palavras deles · depoimentos em vídeo">
          {videoTestimonials.map((v) => (
            <div key={v.id} className="w-[68vw] max-w-[19rem] flex-none snap-start sm:w-[16rem]">
              <VideoCard video={v} />
            </div>
          ))}
        </Rail>
      </div>

      <div className="wrap mt-16 grid gap-4 md:grid-cols-2 lg:mt-20 lg:grid-cols-3">
        {cols.map((col, ci) => (
          <div key={ci} className={`flex flex-col gap-4 ${ci === 1 ? "lg:pt-16" : ""} ${ci === 2 ? "md:col-span-2 lg:col-span-1" : ""}`}>
            {col.map((p, i) => (
              <div key={i} data-reveal>
                <ProofCard p={p} />
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
