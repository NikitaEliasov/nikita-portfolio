import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/Container";
import { Gallery } from "@/components/Gallery";
import { Tag } from "@/components/Tag";
import { VideoEmbed } from "@/components/VideoEmbed";
import { getProject, projects } from "@/data/projects";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    return { title: "Project not found" };
  }

  return {
    title: project.title,
    description: project.summary,
    openGraph: {
      title: project.title,
      description: project.summary,
      images: [{ url: project.card.src }],
    },
  };
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    notFound();
  }

  const index = projects.findIndex((item) => item.slug === project.slug);
  const previous = index > 0 ? projects[index - 1] : null;
  const next =
    index >= 0 && index < projects.length - 1 ? projects[index + 1] : null;

  return (
    <article>
      <section className="border-b border-zinc-200 bg-zinc-50">
        <Container className="py-12 sm:py-16">
          <Link
            href="/projects/"
            className="text-sm font-medium text-zinc-500 transition-colors hover:text-ink-950"
          >
            ← All projects
          </Link>

          <div className="mt-6 grid gap-8 lg:grid-cols-[1.3fr_0.7fr] lg:items-end">
            <div>
              {project.subtitle ? (
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                  {project.subtitle}
                </p>
              ) : null}
              <h1 className="mt-2 font-display text-4xl font-semibold tracking-tight text-ink-950 sm:text-5xl">
                {project.title}
              </h1>
              <p className="mt-4 max-w-2xl text-lg leading-8 text-zinc-600">
                {project.summary}
              </p>
            </div>

            <dl className="grid gap-3 rounded-2xl border border-zinc-200 bg-white p-5 text-sm">
              <div>
                <dt className="text-xs font-medium uppercase tracking-wide text-zinc-500">
                  Context
                </dt>
                <dd className="mt-0.5 text-zinc-700">{project.org}</dd>
              </div>
              <div>
                <dt className="text-xs font-medium uppercase tracking-wide text-zinc-500">
                  Dates
                </dt>
                <dd className="mt-0.5 text-zinc-700">{project.dates}</dd>
              </div>
            </dl>
          </div>

          <div className="mt-8 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </div>
        </Container>
      </section>

      <Container className="py-12 sm:py-16">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_0.6fr] lg:items-center">
          <div className="overflow-hidden rounded-3xl border border-zinc-200 bg-zinc-100">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={project.card.src}
              alt={project.card.alt}
              className="aspect-[16/10] w-full object-cover"
              loading="eager"
            />
          </div>

          {project.metrics ? (
            <dl className="overflow-hidden rounded-2xl border border-zinc-200 bg-white">
              {project.metrics.map((metric, metricIndex) => {
                const isLong = metric.value.length > 20;
                return (
                  <div
                    key={metric.label}
                    className={`flex gap-6 px-5 py-3.5 ${
                      isLong
                        ? "flex-col items-start gap-1"
                        : "items-baseline justify-between"
                    } ${metricIndex > 0 ? "border-t border-zinc-200" : ""}`}
                  >
                    <dt className="text-[11px] font-medium uppercase tracking-wide text-zinc-500">
                      {metric.label}
                    </dt>
                    <dd
                      className={`font-display text-base font-semibold leading-snug text-ink-950 ${
                        isLong ? "text-left" : "text-right"
                      }`}
                    >
                      {metric.value}
                    </dd>
                  </div>
                );
              })}
            </dl>
          ) : (
            <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-5">
              <p className="text-xs font-medium uppercase tracking-wide text-zinc-500">
                Focus
              </p>
              <p className="mt-2 text-sm leading-6 text-zinc-600">
                {project.tags.join(", ")}.
              </p>
            </div>
          )}
        </div>

        {project.video ? (
          <VideoEmbed
            src={project.video.src}
            poster={project.video.poster}
            caption={project.video.caption}
            title={`${project.title} video`}
            className="mt-12"
          />
        ) : null}

        <div className="mt-12 grid gap-10 lg:grid-cols-[0.35fr_0.65fr] lg:gap-16">
          <div className="lg:sticky lg:top-24 lg:self-start">
            <h2 className="font-display text-2xl font-semibold tracking-tight text-ink-950">
              The work
            </h2>
            <p className="mt-2 text-sm leading-6 text-zinc-500">
              What the problem was, what I built, and what I learned along the
              way.
            </p>
          </div>

          <div>
            {project.sections.map((section) => (
              <section key={section.heading ?? section.paragraphs[0]} className="mb-10 last:mb-0">
                {section.heading ? (
                  <h3 className="mb-3 font-display text-xl font-semibold tracking-tight text-ink-950">
                    {section.heading}
                  </h3>
                ) : null}
                <div className="space-y-4 text-base leading-8 text-zinc-600">
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>

        {project.extraVideo ? (
          <div className="mt-14 grid gap-6 lg:grid-cols-[0.35fr_0.65fr] lg:items-start lg:gap-16">
            <div className="lg:sticky lg:top-24 lg:self-start">
              <h2 className="font-display text-2xl font-semibold tracking-tight text-ink-950">
                Process footage
              </h2>
              {project.extraVideo.description ? (
                <p className="mt-2 text-sm leading-6 text-zinc-500">
                  {project.extraVideo.description}
                </p>
              ) : null}
            </div>
            <VideoEmbed
              src={project.extraVideo.src}
              poster={project.extraVideo.poster}
              caption={project.extraVideo.caption}
              title={`${project.title} additional video`}
            />
          </div>
        ) : null}

        {project.gallery.length > 0 ? (
          <div className="mt-14">
            <h2 className="mb-5 font-display text-xl font-semibold tracking-tight text-ink-950">
              Gallery
            </h2>
            <Gallery images={project.gallery} />
          </div>
        ) : null}

        <nav
          aria-label="Project navigation"
          className="mt-16 grid gap-4 border-t border-zinc-200 pt-8 sm:grid-cols-2"
        >
          {previous ? (
            <Link
              href={`/projects/${previous.slug}/`}
              className="group rounded-2xl border border-zinc-200 p-5 transition-colors hover:border-zinc-300 hover:bg-zinc-50"
            >
              <span className="text-xs font-medium uppercase tracking-wide text-zinc-500">
                Previous
              </span>
              <span className="mt-1 block font-display text-base font-semibold text-ink-950 group-hover:text-accent">
                ← {previous.title}
              </span>
            </Link>
          ) : (
            <span />
          )}

          {next ? (
            <Link
              href={`/projects/${next.slug}/`}
              className="group rounded-2xl border border-zinc-200 p-5 text-right transition-colors hover:border-zinc-300 hover:bg-zinc-50"
            >
              <span className="text-xs font-medium uppercase tracking-wide text-zinc-500">
                Next
              </span>
              <span className="mt-1 block font-display text-base font-semibold text-ink-950 group-hover:text-accent">
                {next.title} →
              </span>
            </Link>
          ) : (
            <span />
          )}
        </nav>
      </Container>
    </article>
  );
}
