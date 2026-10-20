import Link from "next/link";
import type { Experience } from "@/data/experience";
import { Tag } from "@/components/Tag";
import { cn } from "@/lib/cn";

export function ExperienceCard({ item }: { item: Experience }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-zinc-200 bg-paper transition-all duration-300 hover:-translate-y-1 hover:border-zinc-300 hover:shadow-xl hover:shadow-zinc-200/60">
      <Link
        href={`/experience/${item.slug}/`}
        className="relative block aspect-[16/10] overflow-hidden bg-zinc-100"
        aria-label={`Read about ${item.title} at ${item.org}`}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={item.photo.src}
          alt={item.photo.alt}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
        />
        <span
          className={cn(
            "absolute left-4 top-4 flex h-12 items-center rounded-lg border px-3 shadow-sm",
            item.logoTone === "dark"
              ? "border-white/10 bg-ink-950"
              : "border-zinc-200 bg-white",
          )}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={item.logo.src}
            alt={item.logo.alt}
            className="h-7 w-auto max-w-[8rem] object-contain"
          />
        </span>
      </Link>

      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
          <h3 className="font-display text-xl font-semibold tracking-tight text-ink-950">
            <Link
              href={`/experience/${item.slug}/`}
              className="transition-colors hover:text-accent"
            >
              {item.title}
            </Link>
          </h3>
          <p className="text-sm font-medium text-zinc-500">{item.dates}</p>
        </div>

        <p className="mt-1 text-sm text-zinc-600">
          {item.org} · {item.location}
        </p>
        <p className="mt-3 text-sm leading-6 text-zinc-600">{item.summary}</p>

        <div className="mt-4 flex flex-wrap gap-2">
          {item.tags.slice(0, 4).map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>

        <Link
          href={`/experience/${item.slug}/`}
          className="mt-auto pt-5 inline-flex text-sm font-semibold text-accent transition-colors hover:text-accent-strong"
        >
          Read more →
        </Link>
      </div>
    </article>
  );
}
