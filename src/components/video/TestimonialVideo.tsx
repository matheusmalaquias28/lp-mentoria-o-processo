"use client";

import { useEffect, useRef, useState } from "react";
import { PlayBadge } from "@/components/mockups/Mockups";

/**
 * Depoimento em vídeo 9:16, tocado no próprio card.
 * Lazyload: o arquivo só é pedido quando o card chega perto da tela (autoplay)
 * ou quando a pessoa clica (os demais). Até lá aparece só a capa.
 * Com `autoplay`, roda mudo em loop enquanto está visível e mostra o botão de ativar o áudio.
 */
export function TestimonialVideo({
  src,
  poster,
  label,
  autoplay = false,
}: {
  src: string;
  poster: string;
  label: string;
  autoplay?: boolean;
}) {
  const wrap = useRef<HTMLDivElement>(null);
  const video = useRef<HTMLVideoElement>(null);
  const [loaded, setLoaded] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(autoplay);

  // autoplay: carrega ao se aproximar da tela, toca quando visível e pausa quando sai
  useEffect(() => {
    if (!autoplay || !wrap.current) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setLoaded(true);
        const v = video.current;
        if (!v) return;
        if (e.isIntersecting) v.play().catch(() => {});
        else if (v.muted) v.pause();
      },
      { rootMargin: "200px 0px", threshold: 0.25 },
    );
    io.observe(wrap.current);
    return () => io.disconnect();
  }, [autoplay, loaded]);

  const start = () => {
    setLoaded(true);
    setPlaying(true);
    setMuted(false);
    requestAnimationFrame(() => {
      const v = video.current;
      if (!v) return;
      v.muted = false;
      v.play().catch(() => {});
    });
  };

  const unmute = () => {
    const v = video.current;
    if (!v) return;
    v.currentTime = 0;
    v.muted = false;
    v.loop = false;
    setMuted(false);
    setPlaying(true);
    v.play().catch(() => {});
  };

  const showControls = playing && !muted;

  return (
    <div ref={wrap} className="relative aspect-[9/16] w-full overflow-hidden rounded-[1.5rem] bg-ink">
      {loaded ? (
        <video
          ref={video}
          src={src}
          poster={poster}
          muted={muted}
          loop={autoplay && muted}
          autoPlay={autoplay}
          playsInline
          preload={autoplay ? "auto" : "metadata"}
          controls={showControls}
          // só um depoimento com som por vez: ao tocar com áudio, pausa os outros
          onPlay={(e) => {
            const me = e.currentTarget;
            if (me.muted) return;
            document.querySelectorAll("video").forEach((o) => o !== me && o.pause());
          }}
          aria-label={label}
          className="absolute inset-0 h-full w-full object-cover"
        />
      ) : (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={poster} alt="" loading="lazy" decoding="async" className="absolute inset-0 h-full w-full object-cover" />
      )}

      {/* demais vídeos: play no centro até a pessoa clicar */}
      {!autoplay && !playing && (
        <button
          type="button"
          onClick={start}
          aria-label={`Assistir ${label}`}
          className="group absolute inset-0 grid cursor-pointer place-items-center"
        >
          <span className="transition-transform duration-500 ease-(--ease-back) group-hover:scale-110">
            <PlayBadge />
          </span>
        </button>
      )}

      {/* primeiro vídeo: rodando mudo, convida a ativar o áudio */}
      {autoplay && muted && (
        <button
          type="button"
          onClick={unmute}
          className="absolute inset-x-4 bottom-4 inline-flex cursor-pointer items-center justify-center gap-2 rounded-full bg-red px-4 py-3 text-[0.875rem] font-extrabold text-white shadow-[0_10px_30px_-6px_rgb(232_20_28/0.8)] transition-transform duration-300 hover:scale-[1.03] active:scale-95"
        >
          <svg viewBox="0 0 24 24" className="size-4 flex-none" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
            <path d="M11 5 6 9H2v6h4l5 4V5zM16 9a4 4 0 0 1 0 6M19 6a8 8 0 0 1 0 12" />
          </svg>
          Clique aqui para ativar o áudio
        </button>
      )}
    </div>
  );
}
