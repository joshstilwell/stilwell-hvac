"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";

type Item = { href: string; label: string };

export function NavDropdown({
  label,
  items,
  onLinkClick,
  desktop,
}: {
  label: string;
  items: Item[];
  onLinkClick?: () => void;
  desktop?: boolean;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const trigger = (
    <button
      type="button"
      aria-expanded={open}
      aria-haspopup="true"
      onClick={() => setOpen((o) => !o)}
      className="inline-flex items-center gap-0.5 font-semibold text-gray-900 hover:text-gray-600"
    >
      {label}
      <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
      </svg>
    </button>
  );

  const menuClasses = desktop
    ? "min-w-[180px] rounded-md border border-gray-200 bg-white py-1 shadow-lg"
    : "pl-4";
  const menu = (
    <ul className={menuClasses}>
      {items.map(({ href, label: itemLabel }) => (
        <li key={href}>
          <Link
            href={href}
            onClick={() => {
              setOpen(false);
              onLinkClick?.();
            }}
            className={desktop ? "block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" : "block py-2 text-sm text-gray-600 hover:text-gray-900"}
          >
            {itemLabel}
          </Link>
        </li>
      ))}
    </ul>
  );

  if (desktop) {
    return (
      <div ref={ref} className="relative">
        <div
          onMouseEnter={() => setOpen(true)}
          onMouseLeave={() => setOpen(false)}
          className="relative"
        >
          {trigger}
          {open && (
            <div className="absolute left-0 top-full z-50 pt-1">
              {menu}
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div ref={ref} className="border-b border-gray-200 last:border-b-0">
      {trigger}
      {open && <div className="pb-2 pt-1">{menu}</div>}
    </div>
  );
}
