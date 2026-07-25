# Fadhil Graphy — Portfolio Website

Premium portfolio for Ahmad Nur Fadhil (Fadhil Graphy), built with Next.js 15
(App Router), React 19, TypeScript, Tailwind CSS, and Framer Motion.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Project structure

- `app/` — routes, layout, metadata, global styles
- `components/` — one file per section; `Drawer.tsx` is the shared premium
  drawer used by Works, Services, Ecosystem, and Pricing
- `lib/data.ts` — **all site content lives here**: bio, works, services,
  Visivine ecosystem projects, pricing, testimonials, contact links. Edit
  this file to update copy, add projects, or change pricing without
  touching component code.

## Replacing placeholder content

- `brand.photoUrl` / `brand.mascotUrl` in `lib/data.ts` point at the asset
  URLs from the brief. Swap in final hosted images (or move them into
  `public/` and update the paths) before launch.
- `brand.cvUrl` expects a PDF at `public/cv-ahmad-nur-fadhil.pdf`.
- Work, ecosystem, and pricing entries currently reuse one placeholder
  photo — replace `cover` / `gallery` URLs per item with real project
  photography.
- Update `brand.whatsapp` (international format, no `+` or spaces) and the
  social links before deploying.

## Performance notes

- Only `Navbar`, `RoleTicker`, `Drawer`, `FloatingWhatsApp`, and the three
  section wrappers that own drawer state (`SelectedWorks`, `Services`,
  `VisivineEcosystem`, `Pricing`) are Client Components — everything else
  renders on the server.
- Below-the-fold sections are loaded with `next/dynamic` so the hero paints
  immediately and the rest hydrates as it scrolls into view.
- Drawer content only mounts while a drawer is open (conditional render
  inside `Drawer.tsx`), so it never pays a rendering cost while closed.
- Images use `next/image` with `loading="lazy"` everywhere except the hero
  portrait, which uses `priority`.

## Deployment

Deploys cleanly to Vercel (`vercel deploy`) or any Node hosting that
supports Next.js 15. Update `metadataBase` and the URLs in
`app/robots.ts` / `app/sitemap.ts` to match the final domain.
