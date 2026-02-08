import Link from "next/link";
import { SITE_PHONE_DISPLAY, SITE_PHONE_TEL } from "@/lib/site";

const links = [
  { href: "/#financing", label: "Financing", icon: "dollar" },
  { href: "/#faqs", label: "FAQs", icon: "question" },
];

const icons = {
  dollar: (
    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  question: (
    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  people: (
    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
  ),
};

export function UtilityBar() {
  return (
    <div className="bg-gray-900 text-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-2 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <p className="text-sm font-medium">
          Serving Charlotte, Monroe, Concord & Surrounding Areas
        </p>
        <div className="flex flex-wrap items-center gap-1 text-sm sm:gap-0">
          {links.map(({ href, label, icon }, i) => (
            <span key={href} className="flex items-center">
              {i > 0 && <span className="mx-2 hidden w-px self-stretch bg-white/40 sm:inline" aria-hidden />}
              <Link href={href} className="flex items-center gap-1.5 hover:text-gray-300">
                {icons[icon as keyof typeof icons]}
                <span>{label}</span>
              </Link>
            </span>
          ))}
          <span className="mx-2 hidden w-px self-stretch bg-white/40 sm:inline" aria-hidden />
          <a href={`tel:${SITE_PHONE_TEL}`} className="flex items-center gap-1.5 hover:text-gray-300">
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <span>{SITE_PHONE_DISPLAY}</span>
          </a>
        </div>
      </div>
    </div>
  );
}
