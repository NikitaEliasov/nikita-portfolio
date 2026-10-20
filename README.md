# Nikita Eliasov · Portfolio

Personal portfolio site built with Next.js (App Router), TypeScript, and
Tailwind CSS. It is a fully static site: `next build` writes an `out/` folder
that can be hosted anywhere.

## Quick start

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # static export to ./out
npm run preview    # serve the built ./out folder
```

## Site structure

The home page is one long page with anchor navigation for About, Experience,
Projects, Education, and Contact. Project cards open dedicated case-study
pages. Experience cards open dedicated role pages.

- `src/app/page.tsx` home, including all five sections
- `src/app/projects/[slug]/page.tsx` project case study
- `src/app/experience/[slug]/page.tsx` experience detail
- `src/app/projects/page.tsx`, `src/app/experience/page.tsx`, and
  `src/app/about/page.tsx` redirect old links to the home anchors

## Where content lives

All copy and metadata is in `src/data/`:

| File | Purpose |
| --- | --- |
| `src/data/site.ts` | Name, role, contact links, education, About copy |
| `src/data/experience.ts` | Work terms and their story sections |
| `src/data/projects.ts` | Projects, summaries, story sections, media, videos |

Each project has a one-line `summary` for its card and a longer
`shortVersion` for the top of its page. Media is attached to the story section
it supports with `sections[].media` or `sections[].video`. A project-level
`video` is used as the lead media instead of the card image.

## Images and video

Public media lives in `public/images/<slug>/` and `public/videos/lenz/`. The
site only ships the curated `photos/selected/` assets from the private content
library, never the full `documents/` folders.

To refresh the images from the library:

```bash
# from this directory; the library defaults to the parent folder
./scripts/prepare-media.sh

# or point at it explicitly
PORTFOLIO_LIBRARY="/path/to/Portfolio" ./scripts/prepare-media.sh
```

The script resizes images to a 2000 px max dimension and re-encodes JPEGs at
quality 82. Videos are copied as-is and loaded lazily (`preload="none"`) with a
poster image.

## Deployment

### Vercel

Import the repo, keep the default Next.js preset, and deploy. No environment
variables are required to build. Set `NEXT_PUBLIC_SITE_URL` to the final domain
so social preview images and the sitemap resolve correctly.

### GitHub Pages / any static host

`npm run build` writes `out/`. Publish that folder. The repo already includes
`public/.nojekyll` so GitHub Pages serves the `_next` directory.

## Privacy

This repo is intended to be public. It contains only:

- curated portfolio images that were explicitly marked `selected`
- copy written for the public site
- email and LinkedIn (no phone number)

Do not add `documents/`, rejected images, `.DS_Store`, or any NDA material to
this repo. Do not publish identifiable people, certificates, or licence plates
without consent. The full content library is backed up separately in a private
repo.
