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
  return (
    <figure className={className}>
      <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-black shadow-sm">
        <video
          controls
          preload="none"
          poster={poster}
          playsInline
          className="aspect-video w-full"
          aria-label={title}
        >
          <source src={src} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      {caption ? (
        <figcaption className="mt-2 text-sm text-zinc-500">{caption}</figcaption>
      ) : null}
    </figure>
  );
}
