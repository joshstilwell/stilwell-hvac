import Link from "next/link";

const areas = [
  { href: "/service-areas/charlotte", label: "Charlotte" },
  { href: "/service-areas/monroe", label: "Monroe" },
  { href: "/service-areas/concord", label: "Concord" },
  { href: "/#contact", label: "Matthews" },
  { href: "/#contact", label: "Indian Trail" },
  { href: "/#contact", label: "Waxhaw" },
  { href: "/#contact", label: "Mint Hill" },
  { href: "/#contact", label: "Harrisburg" },
];

export function ServiceAreas() {
  return (
    <section className="bg-cream py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-center text-3xl font-bold tracking-tight text-navy sm:text-4xl lg:text-5xl">
          <span className="text-pretty">
            Serving the Charlotte metro area
          </span>
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-base leading-relaxed text-muted-foreground">
          We proudly provide heating and cooling services throughout the greater
          Charlotte region and surrounding communities.
        </p>

        <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {areas.map(({ href, label }) => (
            <Link
              key={label}
              href={href}
              className="group flex items-center gap-3 rounded-lg border border-border bg-white px-5 py-4 transition hover:border-navy hover:shadow-md"
            >
              <svg
                className="h-5 w-5 shrink-0 text-muted-foreground transition group-hover:text-accent"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <span className="text-sm font-semibold text-navy">{label}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
