import { Eyebrow } from "@/components/ui/Primitives";
import { personaIcons } from "@/components/ui/Icons";
import { audience } from "@/content";

export function ForWho() {
  return (
    <section className="theme-light section-y">
      <div className="wrap">
        <div className="mx-auto max-w-[56rem] text-center">
          <Eyebrow>Pra quem é a mentoria O PROCESSO</Eyebrow>
          <h2 data-split className="display-l mt-7">
            Pra quem decidiu construir a própria renda. <span className="text-(--faint)">Mesmo começando do zero.</span>
          </h2>
        </div>

        <ul className="mt-16 grid gap-3 sm:grid-cols-2 lg:mt-20 lg:grid-cols-3">
          {audience.map((a) => {
            const Icon = personaIcons[a.icon];
            return (
              <li
                key={a.title}
                data-reveal
                className="group relative flex flex-col overflow-hidden rounded-[1.75rem] border border-white/10 bg-ink p-7 text-white transition-[border-color,translate] duration-500 ease-(--ease-expo) hover:-translate-y-1 hover:border-red/60 sm:min-h-[19rem] sm:p-8"
              >
                <span className="grid size-14 place-items-center rounded-2xl bg-red text-white transition-colors duration-500 group-hover:bg-red-hi">
                  <Icon />
                </span>
                <h3 className="h-title mt-auto pt-6 sm:pt-12">{a.title}</h3>
                <p className="mt-3 text-[0.98rem] leading-relaxed text-white/65">
                  {a.text}
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
