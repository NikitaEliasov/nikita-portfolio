"use client";

import { useCallback, useEffect, useState } from "react";
import type { Media } from "@/data/experience";
import { cn } from "@/lib/cn";

export function Gallery({
  images,
  className,
}: {
  images: Media[];
  className?: string;
}) {
  const [active, setActive] = useState<number | null>(null);

  const close = useCallback(() => setActive(null), []);
  const step = useCallback(
    (direction: number) => {
      setActive((current) => {
        if (current === null) return current;
        return (current + direction + images.length) % images.length;
      });
    },
    [images.length],
  );

  useEffect(() => {
    if (active === null) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
      if (event.key === "ArrowRight") step(1);
      if (event.key === "ArrowLeft") step(-1);
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [active, close, step]);

  if (images.length === 0) return null;

  return (
    <>
      <div
        className={cn(
          "grid gap-4 sm:grid-cols-2",
          images.length === 1 && "sm:grid-cols-1",
          className,
        )}
      >
        {images.map((image, index) => (
          <figure key={image.src} className="group">
            <button
              type="button"
              onClick={() => setActive(index)}
              className="relative block w-full overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-100 text-left"
              aria-label={`Open image: ${image.alt}`}
            >
              <div className="aspect-[4/3] w-full overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={image.src}
                  alt={image.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>
            </button>
            {image.caption ? (
              <figcaption className="mt-2 text-sm text-zinc-500">
                {image.caption}
              </figcaption>
            ) : null}
          </figure>
        ))}
      </div>

      {active !== null ? (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 sm:p-8"
          role="dialog"
          aria-modal="true"
          aria-label="Image viewer"
          onClick={close}
        >
          <button
            type="button"
            onClick={close}
            className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-2xl text-white transition-colors hover:bg-white/20"
            aria-label="Close image viewer"
          >
            ×
          </button>

          {images.length > 1 ? (
            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                step(-1);
              }}
              className="absolute left-3 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-2xl text-white transition-colors hover:bg-white/20 sm:left-6"
              aria-label="Previous image"
            >
              ‹
            </button>
          ) : null}

          <figure
            className="max-h-full w-full max-w-5xl"
            onClick={(event) => event.stopPropagation()}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={images[active].src}
              alt={images[active].alt}
              className="mx-auto max-h-[80vh] w-auto max-w-full rounded-xl object-contain"
            />
            {images[active].caption ? (
              <figcaption className="mt-3 text-center text-sm text-zinc-300">
                {images[active].caption}
              </figcaption>
            ) : null}
            <p className="mt-1 text-center text-xs text-zinc-500">
              {active + 1} / {images.length}
            </p>
          </figure>

          {images.length > 1 ? (
            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                step(1);
              }}
              className="absolute right-3 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-2xl text-white transition-colors hover:bg-white/20 sm:right-6"
              aria-label="Next image"
            >
              ›
            </button>
          ) : null}
        </div>
      ) : null}
    </>
  );
}
