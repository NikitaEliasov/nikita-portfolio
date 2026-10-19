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

## Where content lives

All copy and project metadata is in `src/data/`:

| File | Purpose |
| --- | --- |
| `src/data/site.ts` | Name, role, contact links, education, About copy |
| `src/data/experience.ts` | Work terms (Shield-X, Greenlight) |
| `src/data/projects.ts` | Projects, card images, galleries, metrics, videos |

Pages are thin wrappers around that data:

- `src/app/page.tsx` home
- `src/app/projects/page.tsx` project index
- `src/app/projects/[slug]/page.tsx` project detail
- `src/app/experience/page.tsx` experience
- `src/app/about/page.tsx` about

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
so social preview images resolve correctly.

### GitHub Pages / any static host

`npm run build` writes `out/`. Publish that folder. The repo already includes
`public/.nojekyll` so GitHub Pages serves the `_next` directory.

## Privacy

This repo is intended to be public. It contains only:

- curated portfolio images that were explicitly marked `selected`
- copy written for the public site
- email and LinkedIn (no phone number)

Do not add `documents/`, rejected images, `.DS_Store`, or any NDA material to
this repo. The full content library is backed up separately in a private repo.
