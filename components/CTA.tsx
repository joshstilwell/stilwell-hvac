import Link from "next/link";

export function CTA({
  title = "Ready to get started?",
  description = "Contact us for a free estimate or same-day service.",
  href = "/#contact",
  label = "Contact Us",
}: {
  title?: string;
  description?: string;
  href?: string;
  label?: string;
}) {
  return (
    <section className="rounded-xl border border-border bg-cream px-6 py-8">
      <h2 className="text-lg font-semibold text-navy">{title}</h2>
      <p className="mt-2 text-sm text-muted-foreground">{description}</p>
      <Link
        href={href}
        className="mt-4 inline-block rounded-md bg-accent px-4 py-2 text-sm font-bold text-navy transition hover:bg-accent-hover"
      >
        {label}
      </Link>
    </section>
  );
}
