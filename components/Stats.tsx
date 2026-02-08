const stats = [
  { value: "1,000+", label: "Jobs completed across the Charlotte metro area" },
  { value: "7", label: "HVAC services offered for your home" },
  { value: "Same Day", label: "Emergency repair service available" },
  { value: "100%", label: "Satisfaction guaranteed on every job" },
];

export function Stats() {
  return (
    <section className="torn-edge-top bg-navy py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-center text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
          <span className="text-pretty">
            Trusted by homeowners across Charlotte
          </span>
        </h2>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map(({ value, label }) => (
            <div key={label} className="flex flex-col items-center text-center">
              <span className="inline-block rounded bg-cream/20 px-3 py-1 text-2xl font-extrabold text-accent sm:text-3xl">
                {value}
              </span>
              <span className="mt-3 text-sm leading-relaxed text-white/70">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
