import { Eyebrow } from "@/components/ui/Primitives";
import { Rail } from "@/components/ui/Rail";
import { TestimonialVideo } from "@/components/video/TestimonialVideo";
import { videoTestimonials } from "@/content";

export function Executors() {
  return (
    <section id="executores" className="theme-light section-y overflow-hidden">
      <div className="wrap">
        <Eyebrow>Quem começou do zero</Eyebrow>
        <h2 data-split className="display-l mt-7 max-w-[14ch]">
          Executores. <span className="text-(--faint)">Gente comum, com processo.</span>
        </h2>
      </div>

      {/* só os depoimentos em vídeo, em pé (9:16) */}
      <div className="mt-12 lg:mt-16" data-reveal>
        <Rail label="Depoimentos em vídeo">
          {videoTestimonials.map((v, i) => (
            <div key={v.id} className="w-[68vw] max-w-[19rem] flex-none snap-start sm:w-[16rem] lg:w-[24rem] lg:max-w-none">
              <TestimonialVideo src={v.src} poster={v.poster} label={v.label} autoplay={i === 0} />
            </div>
          ))}
        </Rail>
      </div>
    </section>
  );
}
