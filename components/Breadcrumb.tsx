import Link from "next/link";

export type BreadcrumbItem = {
  href?: string;
  label: string;
};

export function Breadcrumb({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <ol className="flex flex-wrap items-center gap-1 text-sm text-gray-600">
        {items.map((item, i) => (
          <li key={i} className="flex items-center gap-1">
            {i > 0 && <span aria-hidden className="text-gray-400">/</span>}
            {item.href ? (
              <Link href={item.href} className="text-gray-600 hover:text-gray-900 hover:underline">
                {item.label}
              </Link>
            ) : (
              <span className="text-gray-900 font-medium">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
