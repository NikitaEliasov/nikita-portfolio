import Link from "next/link";
import { Container } from "@/components/Container";
import { ProjectCard } from "@/components/ProjectCard";
import { ExperienceCard } from "@/components/ExperienceCard";
import { SectionHeading } from "@/components/SectionHeading";
import { experience } from "@/data/experience";
import { projects } from "@/data/projects";
import { about, site } from "@/data/site";

export default function HomePage() {
  return (
    <>
      <div id="top" />
      <section id="about" className="scroll-mt-28">
        <Container className="grid gap-12 py-14 sm:py-16 lg:grid-cols-[0.78fr_1.22fr] lg:gap-20 lg:py-24">
          <div className="order-2 animate-fade-in-up lg:order-1">
            <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-paper">
              <div className="flex aspect-[4/5] items-center justify-center bg-[radial-gradient(circle_at_30%_20%,#efe9dc,transparent_55%),radial-gradient(circle_at_85%_80%,#e7eadf,transparent_50%)]">
                <span className="font-display text-6xl font-semibold tracking-tight text-zinc-300">
                  NE
                </span>
              </div>
              <p className="border-t border-zinc-200 px-4 py-3 text-xs uppercase tracking-[0.14em] text-zinc-500">
                Headshot coming
              </p>
            </div>
          </div>

          <div className="order-1 animate-fade-in-up lg:order-2">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
              Portfolio
            </p>
            <h1 className="mt-3 font-display text-5xl font-semibold leading-[1.02] tracking-tight text-ink-950 sm:text-6xl lg:text-7xl">
              {site.name}
            </h1>
            <p className="mt-4 text-base text-zinc-600 sm:text-lg">
              {site.role} · {site.location}
            </p>

            <div className="mt-8 max-w-2xl space-y-5 text-base leading-8 text-zinc-600">
              {about.bio.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-zinc-200 pt-6 text-sm font-medium">
              <a
                href={`mailto:${site.email}`}
                className="text-ink-950 underline decoration-zinc-300 underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
              >
                {site.email}
              </a>
              <a
                href={site.linkedin}
                target="_blank"
                rel="noreferrer noopener"
                className="text-ink-950 underline decoration-zinc-300 underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
              >
                LinkedIn
              </a>
              <span className="text-zinc-500">{site.location}</span>
            </div>
          </div>
        </Container>

        <Container>
          <dl className="grid gap-x-10 gap-y-6 border-t border-zinc-200 py-8 sm:grid-cols-2 lg:grid-cols-4">
            {about.focus.map((item) => (
              <div key={item.title}>
                <dt className="text-sm font-semibold text-ink-950">
                  {item.title}
                </dt>
                <dd className="mt-1.5 text-sm leading-6 text-zinc-500">
                  {item.detail}
                </dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      <section
        id="experience"
        className="scroll-mt-24 border-t border-zinc-200 py-16 sm:py-20"
      >
        <Container>
          <SectionHeading
            eyebrow="Experience"
            title="Work that had to hold up outside the lab."
            description="Two co-op terms across impact testing and hydrogen fuel cell commissioning, with a lot of troubleshooting, documentation, and coordination in between."
          />

          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            {experience.map((item) => (
              <ExperienceCard key={item.slug} item={item} />
            ))}
          </div>
        </Container>
      </section>

      <section
        id="projects"
        className="scroll-mt-24 border-t border-zinc-200 py-16 sm:py-20"
      >
        <Container>
          <SectionHeading
            eyebrow="Projects"
            title="Things I have built."
            description="Hardware, firmware, controls, and the integration work that turns a pile of parts into something reliable."
          />

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.slug}
                project={project}
                index={index}
              />
            ))}
          </div>
        </Container>
      </section>

      <section
        id="education"
        className="scroll-mt-24 border-t border-zinc-200 py-14 sm:py-16"
      >
        <Container>
          <h2 className="font-display text-3xl font-semibold tracking-tight text-ink-950">
            Education
          </h2>
          <div className="mt-7 grid gap-4 border-t border-zinc-200 pt-6 sm:grid-cols-[1fr_auto] sm:items-baseline">
            <div>
              <p className="font-medium text-ink-950">
                {site.education.degree}
              </p>
              <p className="mt-1 text-sm text-zinc-500">
                {site.education.school}
              </p>
            </div>
            <div className="text-sm text-zinc-500 sm:text-right">
              <p>{site.education.dates}</p>
              <p className="mt-1">{site.education.location}</p>
            </div>
          </div>
        </Container>
      </section>

      <section
        id="contact"
        className="scroll-mt-24 border-t border-zinc-200 py-16 sm:py-20"
      >
        <Container className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
              Contact
            </p>
            <h2 className="mt-3 max-w-xl font-display text-4xl font-semibold tracking-tight text-ink-950 sm:text-5xl">
              Let us build something that has to work.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-7 text-zinc-600">
              I am open to co-op and new grad roles in test systems, embedded
              hardware, controls, and anything that has to survive the real
              world.
            </p>
          </div>

          <div className="space-y-5 border-t border-zinc-200 pt-6 lg:border-t-0 lg:pt-0">
            <a
              href={`mailto:${site.email}`}
              className="block font-display text-2xl font-semibold tracking-tight text-ink-950 transition-colors hover:text-accent"
            >
              {site.email}
            </a>
            <a
              href={site.linkedin}
              target="_blank"
              rel="noreferrer noopener"
              className="block text-sm font-medium text-zinc-600 underline decoration-zinc-300 underline-offset-4 transition-colors hover:text-accent"
            >
              linkedin.com/in/nikita-eliasov
            </a>
            <p className="text-sm text-zinc-500">{site.location}</p>
            <Link
              href="/#top"
              className="inline-flex text-sm font-medium text-zinc-600 underline decoration-zinc-300 underline-offset-4 transition-colors hover:text-accent"
            >
              Back to top
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
