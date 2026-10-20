"use client";

import { useRef, useState } from "react";

export function VideoEmbed({
  src,
  poster,
  caption,
  title,
  className,
}: {
  src: string;
  poster?: string;
  caption?: string;
  title: string;
  className?: string;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  function start() {
    const video = videoRef.current;
    if (!video) return;
    setPlaying(true);
    void video.play();
  }

  return (
    <figure className={className}>
      <div className="group relative overflow-hidden rounded-2xl border border-zinc-200 bg-black shadow-sm">
        <video
          ref={videoRef}
          controls={playing}
          preload="none"
          poster={poster}
          playsInline
          onEnded={() => setPlaying(false)}
          className="aspect-video w-full"
          aria-label={title}
        >
          <source src={src} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {!playing ? (
          <button
            type="button"
            onClick={start}
            aria-label={`Play ${title}`}
            className="absolute inset-0 flex items-end bg-gradient-to-t from-black/50 via-transparent to-transparent p-4 text-left transition-colors hover:from-black/60 sm:p-5"
          >
            <span className="inline-flex items-center gap-3 rounded-full bg-white/95 py-2 pl-2 pr-4 text-sm font-semibold text-ink-950 shadow-lg backdrop-blur transition-transform group-hover:translate-y-[-2px]">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-ink-950 text-white">
                <svg
                  aria-hidden="true"
                  viewBox="0 0 16 16"
                  className="ml-0.5 h-3.5 w-3.5 fill-current"
                >
                  <path d="M4 2.5v11l9-5.5-9-5.5Z" />
                </svg>
              </span>
              Play video
            </span>
          </button>
        ) : null}
      </div>
      {caption ? (
        <figcaption className="mt-2 text-sm text-zinc-500">{caption}</figcaption>
      ) : null}
    </figure>
  );
}
