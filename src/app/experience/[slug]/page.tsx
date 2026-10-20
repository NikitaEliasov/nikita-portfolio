import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/Container";
import { Gallery } from "@/components/Gallery";
import { getExperience, experience } from "@/data/experience";
import { cn } from "@/lib/cn";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return experience.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const item = getExperience(slug);

  if (!item) {
    return { title: "Experience not found" };
  }

  return {
    title: `${item.title} at ${item.org}`,
    description: item.summary,
  };
}

export default async function ExperienceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const item = getExperience(slug);

  if (!item) {
    notFound();
  }

  const others = experience.filter((entry) => entry.slug !== item.slug);

  return (
    <article>
      <section className="border-b border-zinc-200 bg-zinc-50">
        <Container className="py-12 sm:py-16">
          <Link
            href="/#experience"
            className="text-sm font-medium text-zinc-500 transition-colors hover:text-ink-950"
          >
            ← All experience
          </Link>

          <div className="mt-6 max-w-3xl">
            <div
              className={cn(
                "flex h-14 w-40 items-center justify-center overflow-hidden rounded-lg border p-2",
                item.logoTone === "dark"
                  ? "border-ink-900 bg-ink-950"
                  : "border-zinc-200 bg-white",
              )}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={item.logo.src}
                alt={item.logo.alt}
                className="h-full w-full object-contain"
              />
            </div>

            <p className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-semibold uppercase tracking-[0.16em]">
              <span className="text-accent">Co-op</span>
              <span aria-hidden="true" className="text-zinc-300">
                /
              </span>
              <span className="font-medium text-zinc-500">{item.dates}</span>
            </p>

            <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight text-ink-950 sm:text-5xl">
              {item.title}
            </h1>

            <p className="mt-3 text-base leading-7 text-zinc-500">
              {item.org} · {item.location}
            </p>

            <p className="mt-5 text-lg leading-8 text-zinc-600">
              {item.summary}
            </p>
          </div>
        </Container>
      </section>

      <Container className="py-10 sm:py-14">
        <div className="mx-auto max-w-3xl">
          {item.sections.map((section) => (
            <section
              key={section.heading ?? section.paragraphs[0]}
              className="mt-12 first:mt-0"
            >
              {section.heading ? (
                <h2 className="mb-4 font-display text-2xl font-semibold tracking-tight text-ink-950">
                  {section.heading}
                </h2>
              ) : null}

              <div className="space-y-4 text-base leading-8 text-zinc-600">
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>

              {section.media ? (
                <Gallery images={section.media} className="mt-6" />
              ) : null}
            </section>
          ))}
        </div>

        <nav
          aria-label="Experience navigation"
          className="mt-16 flex flex-col gap-6 border-t border-zinc-200 pt-8 sm:flex-row sm:items-center sm:justify-between"
        >
          <Link
            href="/#experience"
            className="text-sm font-medium text-zinc-500 transition-colors hover:text-ink-950"
          >
            ← Back to experience
          </Link>

          {others.length > 0 ? (
            <div className="flex flex-col gap-2 sm:items-end">
              <span className="text-xs font-medium uppercase tracking-wide text-zinc-500">
                Also
              </span>
              {others.map((entry) => (
                <Link
                  key={entry.slug}
                  href={`/experience/${entry.slug}/`}
                  className="font-display text-lg font-semibold text-ink-950 transition-colors hover:text-accent"
                >
                  {entry.org} →
                </Link>
              ))}
            </div>
          ) : null}
        </nav>
      </Container>
    </article>
  );
}
