"use client";

import Link from "next/link";
import { useState } from "react";
import { UtilityBar } from "./UtilityBar";
import { Nav } from "./Nav";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 shadow-sm">
      <UtilityBar />
      <div className="border-b border-gray-200 bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
          <Link href="/" className="flex shrink-0 items-center gap-3">
            <span className="text-xl font-bold tracking-tight text-gray-900">
              Stilwell
            </span>
            <span className="hidden text-lg font-bold text-gray-900 sm:inline">
              Heating & Cooling
            </span>
          </Link>
          <div className="hidden items-center gap-8 lg:flex">
            <Nav desktop />
          </div>
          <div className="hidden items-center gap-6 lg:flex">
            <div className="flex flex-col items-center gap-0.5 text-sm text-gray-600">
              <div className="flex items-center gap-1.5">
                <svg className="h-5 w-5 shrink-0" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                </svg>
                <span className="font-medium">Google Reviews</span>
              </div>
              <span className="flex text-amber-500" aria-hidden>
                {[1, 2, 3, 4, 5].map((i) => (
                  <svg key={i} className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </span>
            </div>
            <Link
              href="/#contact"
              className="inline-flex shrink-0 items-center gap-2 rounded-lg border-2 border-gray-900 bg-gray-900 px-4 py-2.5 text-sm font-bold uppercase tracking-wide text-white shadow-sm hover:bg-gray-800"
            >
              <svg className="h-4 w-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Request Service
            </Link>
          </div>
          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
            className="inline-flex h-10 w-10 items-center justify-center rounded-md text-gray-700 hover:bg-gray-100 lg:hidden"
            onClick={() => setMobileOpen((o) => !o)}
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>
      {mobileOpen && (
        <div className="border-t border-gray-200 bg-white px-4 py-4 lg:hidden">
          <Nav onLinkClick={() => setMobileOpen(false)} desktop={false} />
          <div className="mt-4 flex flex-col items-center gap-0.5 border-t border-gray-200 pt-4">
            <span className="text-sm font-medium text-gray-600">Google Reviews</span>
            <span className="flex text-amber-500">
              {[1, 2, 3, 4, 5].map((i) => (
                <svg key={i} className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </span>
          </div>
          <Link
            href="/#contact"
            onClick={() => setMobileOpen(false)}
            className="mt-3 flex w-full items-center justify-center gap-2 rounded-lg border-2 border-gray-900 bg-gray-900 px-4 py-3 text-sm font-bold uppercase tracking-wide text-white shadow-sm hover:bg-gray-800"
          >
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            Request Service
          </Link>
        </div>
      )}
    </header>
  );
}
