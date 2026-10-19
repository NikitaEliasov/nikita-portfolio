import Link from "next/link";
import { Container } from "@/components/Container";
import { site } from "@/data/site";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-zinc-200 bg-zinc-50">
      <Container className="py-14">
        <div className="grid gap-10 md:grid-cols-[1.2fr_1fr_1fr]">
          <div>
            <Link
              href="/"
              className="inline-flex items-center gap-3"
              aria-label={`${site.name} home`}
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-ink-950 font-display text-sm font-semibold text-white">
                NE
              </span>
              <span className="font-display text-base font-semibold text-ink-950">
                {site.name}
              </span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-6 text-zinc-600">
              {site.role} based in {site.location}. Always happy to talk about
              test systems, embedded work, and things that move.
            </p>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500">
              Explore
            </h3>
            <ul className="mt-4 space-y-2.5">
              {site.nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-zinc-600 transition-colors hover:text-ink-950"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500">
              Contact
            </h3>
            <ul className="mt-4 space-y-2.5">
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="break-all text-sm text-zinc-600 transition-colors hover:text-ink-950"
                >
                  {site.email}
                </a>
              </li>
              <li>
                <a
                  href={site.linkedin}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="text-sm text-zinc-600 transition-colors hover:text-ink-950"
                >
                  LinkedIn
                </a>
              </li>
              <li className="text-sm text-zinc-600">{site.location}</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-zinc-200 pt-6 text-xs text-zinc-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {site.name}. All rights reserved.
          </p>
          <p>Built with Next.js and Tailwind CSS.</p>
        </div>
      </Container>
    </footer>
  );
}
