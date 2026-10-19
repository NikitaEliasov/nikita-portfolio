import Link from "next/link";
import { Container } from "@/components/Container";

export default function NotFound() {
  return (
    <Container className="flex min-h-[60vh] flex-col items-center justify-center py-20 text-center">
      <p className="font-display text-6xl font-semibold text-ink-950">404</p>
      <h1 className="mt-4 font-display text-2xl font-semibold text-ink-950">
        That page is not here.
      </h1>
      <p className="mt-3 max-w-md text-sm leading-6 text-zinc-600">
        The link may be out of date. Try the projects page or head back home.
      </p>
      <div className="mt-8 flex gap-3">
        <Link
          href="/"
          className="rounded-full bg-ink-950 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent"
        >
          Home
        </Link>
        <Link
          href="/projects/"
          className="rounded-full border border-zinc-300 px-6 py-3 text-sm font-semibold text-ink-950 transition-colors hover:bg-zinc-50"
        >
          Projects
        </Link>
      </div>
    </Container>
  );
}
