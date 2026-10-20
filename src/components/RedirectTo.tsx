"use client";

import { useEffect } from "react";

export function RedirectTo({ href, label }: { href: string; label: string }) {
  useEffect(() => {
    window.location.replace(href);
  }, [href]);

  return (
    <section className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
      <p className="text-sm text-zinc-500">
        This page moved.{" "}
        <a
          href={href}
          className="font-medium text-ink-950 underline decoration-zinc-300 underline-offset-4 hover:text-accent"
        >
          {label}
        </a>
        .
      </p>
    </section>
  );
}
