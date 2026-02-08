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
    <section className="rounded-xl border border-gray-200 bg-gray-50 px-6 py-8">
      <h2 className="text-lg font-semibold text-gray-900">{title}</h2>
      <p className="mt-2 text-sm text-gray-700">{description}</p>
      <Link
        href={href}
        className="mt-4 inline-block rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-white hover:bg-gray-800"
      >
        {label}
      </Link>
    </section>
  );
}
