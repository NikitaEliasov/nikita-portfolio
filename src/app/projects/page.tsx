import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Hardware, firmware, controls, and integration projects across mechatronics, robotics, and embedded systems.",
};

export default function ProjectsPage() {
  return (
    <>
      <section className="border-b border-zinc-200 bg-zinc-50">
        <Container className="py-14 sm:py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
            Projects
          </p>
          <h1 className="mt-3 max-w-3xl font-display text-4xl font-semibold tracking-tight text-ink-950 sm:text-5xl">
            Things I have designed, built, and debugged.
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-zinc-600">
            A mix of academic, team, and personal work. Each project starts with
            a real constraint: a deadline, a budget, a sensor that will not
            behave, or a system that has to work in front of a room full of
            people.
          </p>
        </Container>
      </section>

      <section className="py-14 sm:py-20">
        <Container>
          <div className="grid gap-6 md:grid-cols-2">
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
    </>
  );
}
