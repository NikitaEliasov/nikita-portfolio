import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { about, site } from "@/data/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Mechatronics student at Simon Fraser University working across hardware, software, testing, and controls.",
};

export default function AboutPage() {
  return (
    <>
      <section className="border-b border-zinc-200 bg-zinc-50">
        <Container className="py-14 sm:py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
            About
          </p>
          <h1 className="mt-3 max-w-3xl font-display text-4xl font-semibold tracking-tight text-ink-950 sm:text-5xl">
            Between hardware and software, where the details matter.
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-zinc-600">
            I care about the unglamorous parts: the missing ground reference
            behind a noisy sensor, the mount that survives a run, and the
            spreadsheet that keeps a commissioning project honest.
          </p>
        </Container>
      </section>

      <section className="py-14 sm:py-20">
        <Container className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <aside className="lg:sticky lg:top-24 lg:self-start">
            <div className="overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-sm">
              <div className="flex aspect-[4/3] items-center justify-center bg-gradient-to-br from-ink-950 via-ink-900 to-ink-800">
                <span className="font-display text-6xl font-semibold tracking-tight text-white/90">
                  NE
                </span>
              </div>
              <div className="p-6">
                <h2 className="font-display text-xl font-semibold text-ink-950">
                  {site.name}
                </h2>
                <p className="mt-1 text-sm text-zinc-600">{site.role}</p>

                <dl className="mt-6 space-y-3 border-t border-zinc-200 pt-5 text-sm">
                  {about.facts.map((fact) => (
                    <div key={fact.label}>
                      <dt className="text-xs font-medium uppercase tracking-wide text-zinc-500">
                        {fact.label}
                      </dt>
                      <dd className="mt-0.5 text-zinc-700">{fact.value}</dd>
                    </div>
                  ))}
                </dl>

                <div className="mt-6 flex flex-col gap-2 border-t border-zinc-200 pt-5">
                  <a
                    href={`mailto:${site.email}`}
                    className="break-all text-sm font-medium text-accent hover:text-accent-strong"
                  >
                    {site.email}
                  </a>
                  <a
                    href={site.linkedin}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="text-sm font-medium text-accent hover:text-accent-strong"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </aside>

          <div>
            <div className="space-y-5 text-base leading-8 text-zinc-600">
              {about.bio.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-10 rounded-2xl border border-zinc-200 bg-zinc-50 p-6">
              <h3 className="font-display text-lg font-semibold text-ink-950">
                Education
              </h3>
              <p className="mt-2 text-sm font-medium text-zinc-800">
                {site.education.degree}
              </p>
              <p className="mt-1 text-sm text-zinc-600">
                {site.education.school} · {site.education.dates}
              </p>
            </div>

            <div className="mt-12">
              <SectionHeading
                eyebrow="What I do"
                title="A working range, not a single lane"
                description="I like roles that sit across disciplines and force the drawings, the electronics, and the code to agree."
              />
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {about.focus.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-zinc-200 bg-white p-5 transition-colors hover:border-zinc-300"
                  >
                    <h3 className="font-display text-base font-semibold text-ink-950">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-zinc-600">
                      {item.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-12 flex flex-wrap gap-3">
              <Link
                href="/projects/"
                className="rounded-full bg-ink-950 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent"
              >
                See the work
              </Link>
              <a
                href={`mailto:${site.email}`}
                className="rounded-full border border-zinc-300 bg-white px-6 py-3 text-sm font-semibold text-ink-950 transition-colors hover:bg-zinc-50"
              >
                Get in touch
              </a>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
