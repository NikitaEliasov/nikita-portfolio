import Link from "next/link";
import type { Project } from "@/data/projects";
import { Tag } from "@/components/Tag";

export function ProjectCard({
  project,
  index = 0,
}: {
  project: Project;
  index?: number;
}) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-zinc-200 bg-paper transition-all duration-300 hover:-translate-y-1 hover:border-zinc-300 hover:shadow-xl hover:shadow-zinc-200/60">
      <Link
        href={`/projects/${project.slug}/`}
        className="relative block aspect-[16/10] overflow-hidden bg-zinc-100"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={project.card.src}
          alt={project.card.alt}
          loading={index < 2 ? "eager" : "lazy"}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
        />
        <span className="absolute left-4 top-4 rounded-full bg-paper px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-zinc-700 shadow-sm">
          {project.dates}
        </span>
      </Link>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-xl font-semibold tracking-tight text-ink-950">
          <Link
            href={`/projects/${project.slug}/`}
            className="transition-colors hover:text-accent"
          >
            {project.title}
          </Link>
        </h3>
        <p className="mt-1 text-sm text-zinc-500">{project.org}</p>
        <p className="mt-3 flex-1 text-sm leading-6 text-zinc-600">
          {project.summary}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.tags.slice(0, 3).map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>

        <Link
          href={`/projects/${project.slug}/`}
          className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-accent"
        >
          View project
          <span
            aria-hidden="true"
            className="transition-transform group-hover:translate-x-0.5"
          >
            →
          </span>
        </Link>
      </div>
    </article>
  );
}
