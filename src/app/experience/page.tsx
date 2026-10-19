import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { Gallery } from "@/components/Gallery";
import { Tag } from "@/components/Tag";
import { experience } from "@/data/experience";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Co-op experience in helmet impact testing at Shield-X and hydrogen fuel cell test station commissioning at Greenlight Innovation.",
};

export default function ExperiencePage() {
  return (
    <>
      <section className="border-b border-zinc-200 bg-zinc-50">
        <Container className="py-14 sm:py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
            Experience
          </p>
          <h1 className="mt-3 max-w-3xl font-display text-4xl font-semibold tracking-tight text-ink-950 sm:text-5xl">
            Work that had to hold up outside the lab.
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-zinc-600">
            Two co-op terms across impact testing and hydrogen fuel cell
            commissioning, with a lot of troubleshooting, documentation, and
            coordination in between.
          </p>
        </Container>
      </section>

      <Container className="py-14 sm:py-20">
        <div className="space-y-16">
          {experience.map((item) => (
            <section
              key={item.slug}
              id={item.slug}
              className="scroll-mt-24 border-b border-zinc-200 pb-16 last:border-b-0 last:pb-0"
            >
              <div className="grid gap-8 lg:grid-cols-[0.35fr_0.65fr] lg:gap-16">
                <div className="lg:sticky lg:top-24 lg:self-start">
                  <div className="flex h-20 w-40 items-center justify-center overflow-hidden rounded-2xl border border-zinc-100 bg-white p-3 shadow-sm">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={item.card.src}
                      alt={item.card.alt}
                      className="h-full w-full object-contain"
                      loading="lazy"
                    />
                  </div>
                  <p className="mt-5 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                    {item.dates}
                  </p>
                  <h2 className="mt-2 font-display text-2xl font-semibold tracking-tight text-ink-950">
                    {item.title}
                  </h2>
                  <p className="mt-2 text-sm leading-6 text-zinc-600">
                    {item.org}
                    <br />
                    {item.location}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <Tag key={tag}>{tag}</Tag>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-lg leading-8 text-zinc-700">
                    {item.summary}
                  </p>
                  <div className="mt-6 space-y-4 text-base leading-8 text-zinc-600">
                    {item.sections.flatMap((section) =>
                      section.paragraphs.map((paragraph) => (
                        <p key={paragraph}>{paragraph}</p>
                      )),
                    )}
                  </div>

                  {item.gallery.length > 0 ? (
                    <div className="mt-8">
                      <Gallery images={item.gallery} />
                    </div>
                  ) : null}
                </div>
              </div>
            </section>
          ))}
        </div>

        <div className="mt-16 rounded-3xl bg-ink-950 px-6 py-12 sm:px-12">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="font-display text-2xl font-semibold tracking-tight text-white">
                Want the project side too?
              </h2>
              <p className="mt-2 text-sm leading-6 text-zinc-300">
                The projects page has the builds, prototypes, and coursework.
              </p>
            </div>
            <Link
              href="/projects/"
              className="inline-flex shrink-0 items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-ink-950 transition-colors hover:bg-zinc-200"
            >
              View projects →
            </Link>
          </div>
        </div>
      </Container>
    </>
  );
}
