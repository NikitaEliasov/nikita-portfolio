import Link from "next/link";
import { Container } from "@/components/Container";
import { ProjectCard } from "@/components/ProjectCard";
import { ExperienceCard } from "@/components/ExperienceCard";
import { SectionHeading } from "@/components/SectionHeading";
import { experience } from "@/data/experience";
import { featuredProjects, projects } from "@/data/projects";
import { about, site } from "@/data/site";

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-zinc-200">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_0%,#eef3ff,transparent_45%),radial-gradient(circle_at_90%_10%,#f4f4f5,transparent_40%)]"
        />
        <Container className="grid gap-12 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:py-24">
          <div className="animate-fade-in-up">
            <p className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-zinc-600">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              {site.role} · {site.location}
            </p>

            <h1 className="mt-6 font-display text-5xl font-semibold leading-[1.05] tracking-tight text-ink-950 sm:text-6xl lg:text-7xl">
              {site.name}
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-zinc-600 sm:text-xl">
              {site.headline}
            </p>
            <p className="mt-4 max-w-xl text-base leading-7 text-zinc-500">
              {site.intro}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/projects/"
                className="rounded-full bg-ink-950 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent"
              >
                View projects
              </Link>
              <Link
                href="/about/"
                className="rounded-full border border-zinc-300 bg-white px-6 py-3 text-sm font-semibold text-ink-950 transition-colors hover:border-zinc-400 hover:bg-zinc-50"
              >
                About me
              </Link>
            </div>

            <dl className="mt-12 grid max-w-lg grid-cols-3 gap-6 border-t border-zinc-200 pt-6">
              <div>
                <dt className="text-xs font-medium uppercase tracking-wide text-zinc-500">
                  Co-op terms
                </dt>
                <dd className="mt-1 font-display text-2xl font-semibold text-ink-950">
                  2
                </dd>
              </div>
              <div>
                <dt className="text-xs font-medium uppercase tracking-wide text-zinc-500">
                  Projects
                </dt>
                <dd className="mt-1 font-display text-2xl font-semibold text-ink-950">
                  {projects.length}
                </dd>
              </div>
              <div>
                <dt className="text-xs font-medium uppercase tracking-wide text-zinc-500">
                  Capstone award
                </dt>
                <dd className="mt-1 font-display text-2xl font-semibold text-ink-950">
                  1
                </dd>
              </div>
            </dl>
          </div>

          <div className="animate-fade-in-up">
            <div className="relative overflow-hidden rounded-3xl border border-zinc-200 bg-zinc-100 shadow-2xl shadow-zinc-200/70">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/smart-glasses/01-hero-glasses.jpg"
                alt="LENZ running glasses with a 3D-printed sensor mount on the temple"
                className="aspect-[4/3] w-full object-cover"
                loading="eager"
              />
              <div className="absolute inset-x-4 bottom-4 rounded-2xl bg-white/90 p-4 backdrop-blur sm:inset-x-6 sm:bottom-6">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-accent">
                  Featured · Best Industry Sponsored Project
                </p>
                <p className="mt-1 font-display text-lg font-semibold text-ink-950">
                  LENZ Smart Running Glasses
                </p>
                <p className="mt-1 text-sm text-zinc-600">
                  Cadence, pace, and stride from head motion alone.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              eyebrow="Selected work"
              title="Projects with a real problem behind them"
              description="Hardware, firmware, controls, and the integration work that makes a system hold together."
            />
            <Link
              href="/projects/"
              className="text-sm font-semibold text-accent hover:text-accent-strong"
            >
              All {projects.length} projects →
            </Link>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {featuredProjects.map((project, index) => (
              <ProjectCard
                key={project.slug}
                project={project}
                index={index}
              />
            ))}
          </div>
        </Container>
      </section>

      <section className="border-y border-zinc-200 bg-zinc-50 py-16 sm:py-20">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              eyebrow="Experience"
              title="Where I have worked"
              description="Two co-op terms across impact testing and hydrogen fuel cell commissioning."
            />
            <Link
              href="/experience/"
              className="text-sm font-semibold text-accent hover:text-accent-strong"
            >
              All experience →
            </Link>
          </div>

          <div className="mt-10 grid gap-6">
            {experience.map((item) => (
              <ExperienceCard key={item.slug} item={item} />
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <SectionHeading
            eyebrow="About"
            title="Between hardware and software"
            description={about.bio[0]}
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {about.focus.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-zinc-200 bg-white p-5"
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
        </Container>
      </section>

      <section className="pb-20">
        <Container>
          <div className="overflow-hidden rounded-3xl bg-ink-950 px-6 py-12 sm:px-12 sm:py-16">
            <div className="grid gap-8 lg:grid-cols-[1.3fr_0.7fr] lg:items-center">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-400">
                  Let us build something
                </p>
                <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                  Open to co-op and new grad roles.
                </h2>
                <p className="mt-4 max-w-xl text-base leading-7 text-zinc-300">
                  If you are working on test systems, embedded hardware,
                  controls, or anything that has to survive the real world, I
                  would like to hear about it.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                <a
                  href={`mailto:${site.email}`}
                  className="rounded-full bg-white px-6 py-3 text-center text-sm font-semibold text-ink-950 transition-colors hover:bg-zinc-200"
                >
                  Email me
                </a>
                <a
                  href={site.linkedin}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="rounded-full border border-white/25 px-6 py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-white/10"
                >
                  Connect on LinkedIn
                </a>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
