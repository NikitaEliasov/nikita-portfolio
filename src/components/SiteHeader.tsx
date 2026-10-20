"use client";

import Link from "next/link";
import { useState } from "react";
import { site } from "@/data/site";
import { cn } from "@/lib/cn";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200/70 bg-cream/90 backdrop-blur-md">
      <div className="mx-auto flex h-[72px] w-full max-w-6xl items-center justify-between px-5 sm:px-8">
        <Link
          href="/#top"
          className="font-display text-lg font-semibold tracking-tight text-ink-950 transition-colors hover:text-accent"
          aria-label={`${site.name} home`}
          onClick={() => setOpen(false)}
        >
          {site.name}
        </Link>

        <nav className="hidden items-center gap-7 md:flex" aria-label="Main">
          {site.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-zinc-600 transition-colors hover:text-ink-950"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-zinc-200 text-ink-950 md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
        >
          <span className="relative block h-4 w-5">
            <span
              className={cn(
                "absolute left-0 block h-0.5 w-5 rounded bg-current transition-transform",
                open ? "top-2 rotate-45" : "top-0.5",
              )}
            />
            <span
              className={cn(
                "absolute left-0 top-2 block h-0.5 w-5 rounded bg-current transition-opacity",
                open && "opacity-0",
              )}
            />
            <span
              className={cn(
                "absolute left-0 block h-0.5 w-5 rounded bg-current transition-transform",
                open ? "top-2 -rotate-45" : "top-3.5",
              )}
            />
          </span>
        </button>
      </div>

      <div
        id="mobile-nav"
        className={cn(
          "border-t border-zinc-200/70 bg-cream md:hidden",
          open ? "block" : "hidden",
        )}
      >
        <nav className="mx-auto flex w-full max-w-6xl flex-col px-5 py-3 sm:px-8">
          {site.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-2.5 text-sm font-medium text-zinc-600 hover:bg-zinc-100 hover:text-ink-950"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
