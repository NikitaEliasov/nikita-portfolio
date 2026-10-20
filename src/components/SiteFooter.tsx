import Link from "next/link";
import { Container } from "@/components/Container";
import { site } from "@/data/site";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-zinc-200">
      <Container className="flex flex-col gap-4 py-8 text-sm text-zinc-500 sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {year} {site.name}
        </p>
        <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
          <a
            href={`mailto:${site.email}`}
            className="transition-colors hover:text-ink-950"
          >
            Email
          </a>
          <a
            href={site.linkedin}
            target="_blank"
            rel="noreferrer noopener"
            className="transition-colors hover:text-ink-950"
          >
            LinkedIn
          </a>
          <Link
            href="/#top"
            className="transition-colors hover:text-ink-950"
          >
            Back to top
          </Link>
        </div>
      </Container>
    </footer>
  );
}
