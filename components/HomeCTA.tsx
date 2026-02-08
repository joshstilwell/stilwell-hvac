import Link from "next/link";
import { SITE_PHONE_DISPLAY, SITE_PHONE_TEL } from "@/lib/site";

export function HomeCTA() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
        <h2 className="text-3xl font-bold tracking-tight text-navy sm:text-4xl">
          Ready to get started?
        </h2>
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">
          Contact us today for a free estimate or same-day emergency service.
          Our team is standing by to help keep your home comfortable.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 rounded-md bg-accent px-6 py-3.5 text-base font-bold text-navy shadow-sm transition hover:bg-accent-hover"
          >
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            Request Service
          </Link>
          <a
            href={`tel:${SITE_PHONE_TEL}`}
            className="inline-flex items-center gap-2 rounded-md border-2 border-navy px-6 py-3.5 text-base font-bold text-navy transition hover:bg-navy hover:text-white"
          >
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
            Call {SITE_PHONE_DISPLAY}
          </a>
        </div>
      </div>
    </section>
  );
}
