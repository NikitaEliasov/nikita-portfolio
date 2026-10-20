import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/Container";
import { Gallery } from "@/components/Gallery";
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

          <div className="mt-6 max-w-3xl">
            <p className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-semibold uppercase tracking-[0.16em]">
              <span className="text-accent">{project.kind}</span>
              <span aria-hidden="true" className="text-zinc-300">
                /
              </span>
              <span className="font-medium text-zinc-500">{project.dates}</span>
            </p>

            <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight text-ink-950 sm:text-5xl">
              {project.title}
            </h1>

            <p className="mt-3 text-base leading-7 text-zinc-500">
              {project.subtitle ? `${project.subtitle} · ` : ""}
              {project.org}
            </p>

            <p className="mt-5 text-lg leading-8 text-zinc-600">
              {project.summary}
            </p>

            {project.highlight ? (
              <p className="mt-5 inline-block border-b border-accent/40 pb-1 text-sm font-medium text-accent">
                {project.highlight}
              </p>
            ) : null}
          </div>
        </Container>
      </section>

      <Container className="py-10 sm:py-14">
        {project.video ? (
          <VideoEmbed
            src={project.video.src}
            poster={project.video.poster}
            caption={project.video.caption}
            title={`${project.title} video`}
          />
        ) : (
          <div className="overflow-hidden rounded-3xl border border-zinc-200 bg-zinc-100">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={project.card.src}
              alt={project.card.alt}
              className="aspect-[16/10] w-full object-cover"
              loading="eager"
            />
          </div>
        )}

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
