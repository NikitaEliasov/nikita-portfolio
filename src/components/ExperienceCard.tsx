import Link from "next/link";
import type { Experience } from "@/data/experience";
import { Tag } from "@/components/Tag";

export function ExperienceCard({ item }: { item: Experience }) {
  return (
    <article className="group grid gap-6 rounded-3xl border border-zinc-200 bg-white p-6 transition-all duration-300 hover:border-zinc-300 hover:shadow-lg hover:shadow-zinc-200/60 sm:grid-cols-[10rem_1fr] sm:p-8">
      <div className="flex h-24 w-40 items-center justify-center overflow-hidden rounded-2xl border border-zinc-100 bg-white p-4">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={item.card.src}
          alt={item.card.alt}
          className="h-full w-full object-contain"
          loading="lazy"
        />
      </div>

      <div>
        <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
          <h3 className="font-display text-xl font-semibold tracking-tight text-ink-950">
            <Link
              href={`/experience/#${item.slug}`}
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
      </div>
    </article>
  );
}
