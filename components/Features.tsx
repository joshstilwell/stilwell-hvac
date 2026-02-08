import Link from "next/link";

const features = [
  {
    title: "Upfront Pricing",
    description:
      "Know exactly what you'll pay before work begins. No hidden fees, no surprises — just honest, transparent pricing on every job.",
    linkLabel: "Learn more",
    linkHref: "/#contact",
    icon: (
      <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Expert Technicians",
    description:
      "Our team is fully licensed, insured, and trained on the latest HVAC technology. We treat your home like our own.",
    linkLabel: "Learn more",
    linkHref: "/#contact",
    icon: (
      <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
  },
  {
    title: "Satisfaction Guaranteed",
    description:
      "We stand behind our work with a 100% satisfaction guarantee. If you're not happy, we'll make it right — period.",
    linkLabel: "Learn more",
    linkHref: "/#contact",
    icon: (
      <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
      </svg>
    ),
  },
];

export function Features() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-center text-3xl font-bold tracking-tight text-navy sm:text-4xl lg:text-5xl">
          <span className="text-pretty">
            Make it easy for your family
          </span>
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-base leading-relaxed text-muted-foreground">
          Improve your home comfort with professional service and reliable
          communication to keep work moving from initial estimate to final
          completion.
        </p>

        <div className="mt-14 grid gap-10 md:grid-cols-3">
          {features.map(({ title, description, linkLabel, linkHref, icon }) => (
            <div key={title} className="flex flex-col items-center text-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-accent/20 text-navy">
                {icon}
              </div>
              <h3 className="mt-5 text-lg font-bold text-navy">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {description}
              </p>
              <Link
                href={linkHref}
                className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-navy transition hover:text-accent-hover"
              >
                {linkLabel}
                <svg
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
