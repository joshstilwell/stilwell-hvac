# Stilwell Heating & Cooling

Next.js site for an HVAC company with heating, air conditioning, service areas, and a blog stub ready for a headless CMS.

## Setup

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## URL structure

- `/` — Home
- `/hvac/heating/repair`, `/hvac/heating/install`
- `/hvac/air-conditioning/repair`, `/hvac/air-conditioning/install`
- `/hvac/ductless`, `/hvac/thermostat`, `/hvac/ductwork`
- `/service-areas/charlotte`, `/service-areas/monroe`, `/service-areas/concord`
- `/blog` — list (stub); `/blog/[slug]` — post (404 until CMS)

## Content

- **Services:** `lib/services.ts` — titles, descriptions, body copy per HVAC page.
- **Areas:** `lib/areas.ts` — content for Charlotte, Monroe, Concord; add slugs to `AREA_SLUGS` for new cities.
- **Blog:** Stub only; wire `app/blog/page.tsx` and `app/blog/[slug]/page.tsx` to your CMS when ready.

## Build

```bash
npm run build
npm start
```
# stilwell-hvac
