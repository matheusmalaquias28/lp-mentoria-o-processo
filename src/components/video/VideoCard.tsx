"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import type { Video } from "@/content";
import { PlayBadge } from "@/components/mockups/Mockups";
import { Cross } from "@/components/ui/Icons";

function embedFor(src: string) {
  const yt = src.match(/(?:youtube\.com\/(?:watch\?v=|shorts\/|embed\/)|youtu\.be\/)([\w-]{11})/);
  if (yt) return { kind: "iframe" as const, url: `https://www.youtube-nocookie.com/embed/${yt[1]}?autoplay=1&rel=0&playsinline=1` };
  const vimeo = src.match(/vimeo\.com\/(?:video\/)?(\d+)/);
  if (vimeo) return { kind: "iframe" as const, url: `https://player.vimeo.com/video/${vimeo[1]}?autoplay=1` };
  if (/\.(mp4|webm|mov)(\?|$)/i.test(src)) return { kind: "video" as const, url: src };
  return { kind: "iframe" as const, url: src };
}

/** Card de depoimento em vídeo: prévia muda no hover (se houver) e player em modal. */
export function VideoCard({
  video,
  variant = "portrait",
  className = "",
  sizes = "(min-width: 1024px) 22vw, 70vw",
  bare = false,
}: {
  video: Video;
  variant?: "portrait" | "landscape";
  className?: string;
  sizes?: string;
  /** só o vídeo: sem nome, legenda nem etiqueta por cima */
  bare?: boolean;
}) {
  const [open, setOpen] = useState(false);
  const dialog = useRef<HTMLDialogElement>(null);
  const preview = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (open) dialog.current?.showModal();
  }, [open]);

  const player = video.src ? embedFor(video.src) : null;
  const landscape = variant === "landscape";

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        onPointerEnter={() => preview.current?.play().catch(() => {})}
        onPointerLeave={() => preview.current?.pause()}
        aria-label={`Assistir depoimento: ${video.name}`}
        className={`group relative block w-full cursor-pointer overflow-hidden rounded-[1.5rem] bg-ink text-left text-white ${
          landscape ? "aspect-video" : "aspect-[9/16]"
        } ${className}`}
      >
        {video.poster ? (
          <Image
            src={video.poster}
            alt=""
            fill
            sizes={sizes}
            className="object-cover transition-transform duration-[1.2s] ease-(--ease-expo) group-hover:scale-105"
          />
        ) : (
          <span className="theme-dark media-ph absolute inset-0 transition-transform duration-[1.2s] ease-(--ease-expo) group-hover:scale-105">
            <span className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgb(232_20_28/0.28),transparent_60%)]" />
          </span>
        )}
        {video.preview && (
          <video
            ref={preview}
            src={video.preview}
            muted
            loop
            playsInline
            preload="none"
            className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          />
        )}
        {!bare && <span className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />}
        {!video.poster && !bare && (
          <span className="label absolute top-5 left-5 rounded-full border border-white/20 px-2.5 py-1 text-[0.625rem] text-white/70">
            {landscape ? "vídeo" : "depoimento"}
          </span>
        )}
        <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-transform duration-500 ease-(--ease-back) group-hover:scale-110">
          <PlayBadge size={landscape ? "lg" : "md"} />
        </span>
        {!bare && (
          <span className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
            <span className="block text-[1.125rem] font-extrabold tracking-[-0.02em]">{video.name}</span>
            <span className="mt-0.5 block text-[0.8125rem] text-white/65">{video.meta}</span>
          </span>
        )}
      </button>

      {open && (
        <dialog
          ref={dialog}
          data-lenis-prevent
          onClose={() => setOpen(false)}
          onClick={(e) => e.target === dialog.current && dialog.current?.close()}
          className="m-auto max-h-[92svh] w-[min(94vw,64rem)] overflow-visible bg-transparent p-0 backdrop:bg-black/85 backdrop:backdrop-blur-sm"
        >
          <div className={`relative mx-auto overflow-hidden rounded-2xl bg-ink ${landscape ? "aspect-video" : "aspect-[9/16] max-h-[86svh]"}`}>
            {player?.kind === "video" && (
              <video src={player.url} controls autoPlay playsInline className="h-full w-full bg-black object-contain" />
            )}
            {player?.kind === "iframe" && (
              <iframe
                src={player.url}
                title={`Depoimento: ${video.name}`}
                allow="autoplay; fullscreen; picture-in-picture; encrypted-media"
                allowFullScreen
                className="h-full w-full"
              />
            )}
            {!player && (
              <div className="grid h-full place-items-center p-8 text-center text-white/70">
                <p className="label">O vídeo deste depoimento entra aqui.</p>
              </div>
            )}
          </div>
          <button
            type="button"
            onClick={() => dialog.current?.close()}
            aria-label="Fechar vídeo"
            className="absolute -top-3 -right-3 grid size-11 cursor-pointer place-items-center rounded-full bg-white text-ink transition-transform hover:rotate-90 sm:-top-4 sm:-right-4"
          >
            <Cross />
          </button>
        </dialog>
      )}
    </>
  );
}
