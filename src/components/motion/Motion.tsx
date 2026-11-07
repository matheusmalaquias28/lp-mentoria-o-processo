"use client";

import { gsap, ScrollTrigger, SplitText, useGSAP } from "@/lib/gsap";
import { formatNumber } from "@/lib/format";

/*
 * Animações de scroll da página inteira, por atributo:
 *   data-reveal            sobe e aparece (data-reveal="fade" só aparece, "scale" cresce)
 *   data-split             título revelado linha a linha
 *   data-count="531020"    número que conta até o valor (o HTML já vem com o valor final)
 *   data-parallax="0.12"   desloca no scroll
 *   data-strike            risca o texto quando entra na tela
 * O CSS esconde [data-reveal]/[data-split] só quando <html> tem a classe .motion.
 */
export function Motion() {
  useGSAP(() => {
    const root = document.documentElement;
    if (!root.classList.contains("motion")) return;

    // revelação em lote
    const reveals = gsap.utils.toArray<HTMLElement>("[data-reveal]");
    reveals.forEach((el) => {
      const kind = el.dataset.reveal;
      gsap.set(el, kind === "fade" ? {} : kind === "scale" ? { scale: 0.94 } : { y: 36 });
    });
    ScrollTrigger.batch(reveals, {
      start: "top 90%",
      once: true,
      onEnter: (batch) => {
        // num salto (link do menu), o que ficou acima da tela aparece na hora,
        // senão a fila de stagger atrasaria o que está visível
        const passed = batch.filter((el) => el.getBoundingClientRect().bottom <= 0);
        const visible = batch.filter((el) => !passed.includes(el));
        if (passed.length) gsap.set(passed, { opacity: 1, y: 0, scale: 1 });
        gsap.to(visible, {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.1,
          ease: "expo.out",
          stagger: Math.min(0.09, 0.6 / Math.max(visible.length, 1)),
          overwrite: true,
        });
      },
    });

    // títulos linha a linha
    gsap.utils.toArray<HTMLElement>("[data-split]").forEach((el) => {
      SplitText.create(el, {
        type: "lines",
        mask: "lines",
        linesClass: "split-line",
        // só o espaço comum separa palavras: "R$ 27" com espaço não separável fica junto
        wordDelimiter: " ",
        autoSplit: true,
        onSplit(self) {
          gsap.set(el, { visibility: "visible" });
          return gsap.from(self.lines, {
            yPercent: 110,
            duration: 1.15,
            ease: "expo.out",
            stagger: 0.085,
            scrollTrigger: { trigger: el, start: "top 88%", once: true },
          });
        },
      });
    });

    // contadores
    gsap.utils.toArray<HTMLElement>("[data-count]").forEach((el) => {
      const target = Number(el.dataset.count);
      const counter = { v: 0 };
      el.textContent = formatNumber(0);
      gsap.to(counter, {
        v: target,
        duration: 2.2,
        ease: "expo.out",
        scrollTrigger: { trigger: el, start: "top 90%", once: true },
        onUpdate: () => {
          el.textContent = formatNumber(counter.v);
        },
      });
    });

    // parallax leve
    gsap.utils.toArray<HTMLElement>("[data-parallax]").forEach((el) => {
      const amount = Number(el.dataset.parallax) || 0.1;
      gsap.fromTo(
        el,
        { yPercent: amount * 100 },
        {
          yPercent: -amount * 100,
          ease: "none",
          scrollTrigger: { trigger: el, start: "top bottom", end: "bottom top", scrub: true },
        },
      );
    });

    // linha de progresso que acompanha o scroll do bloco pai
    gsap.utils.toArray<HTMLElement>("[data-progress]").forEach((el) => {
      gsap.fromTo(
        el,
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "none",
          scrollTrigger: { trigger: el.parentElement, start: "top 65%", end: "bottom 65%", scrub: true },
        },
      );
    });

    // texto riscado
    gsap.utils.toArray<HTMLElement>("[data-strike]").forEach((el) => {
      gsap.fromTo(
        el,
        { "--strike": "0%" },
        {
          "--strike": "100%",
          duration: 0.9,
          ease: "expo.inOut",
          scrollTrigger: { trigger: el, start: "top 80%", once: true },
        },
      );
    });

    // fontes e imagens mudam alturas: recalcula depois de tudo carregado
    const refresh = () => ScrollTrigger.refresh();
    window.addEventListener("load", refresh, { once: true });
    document.fonts?.ready.then(refresh);
  });

  return null;
}
