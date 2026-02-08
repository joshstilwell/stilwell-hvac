import Link from "next/link";
import Image from "next/image";
import { SITE_PHONE_DISPLAY, SITE_PHONE_TEL } from "@/lib/site";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-hvac.jpg"
          alt=""
          fill
          className="object-cover opacity-30"
          priority
        />
        <div className="absolute inset-0 bg-navy/60" />
      </div>

      <div className="relative mx-auto flex max-w-6xl flex-col gap-8 px-4 py-16 sm:px-6 md:py-24 lg:flex-row lg:items-center lg:gap-12 lg:py-32">
        {/* Left content */}
        <div className="flex-1">
          <h1 className="text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            <span className="text-balance">
              Keep your home comfortable with confidence.
            </span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/80">
            Professional heating and air conditioning services you can count on.
            Stilwell Heating & Cooling helps homeowners repair, install, and
            maintain HVAC systems — all from one trusted team.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 rounded-md bg-accent px-6 py-3.5 text-base font-bold text-navy shadow-sm transition hover:bg-accent-hover"
            >
              Request Service
            </Link>
            <a
              href={`tel:${SITE_PHONE_TEL}`}
              className="inline-flex items-center gap-2 text-base font-bold text-white transition hover:text-accent"
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
              {SITE_PHONE_DISPLAY}
            </a>
          </div>

          {/* Trust indicators */}
          <div className="mt-10 flex items-center gap-8 border-t border-white/20 pt-8">
            <div className="flex flex-col items-center gap-1">
              <div className="flex items-center gap-2">
                <svg
                  className="h-5 w-5 shrink-0 text-white"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="#4285F4"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  />
                </svg>
                <span className="text-sm font-bold text-white">5.0</span>
                <span className="flex text-amber-400" aria-hidden>
                  {[1, 2, 3, 4, 5].map((i) => (
                    <svg
                      key={i}
                      className="h-4 w-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </span>
              </div>
              <span className="text-xs text-white/60">Google Reviews</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <span className="text-sm font-bold text-white">Licensed & Insured</span>
              <span className="text-xs text-white/60">NC HVAC Contractor</span>
            </div>
          </div>
        </div>

        {/* Right side — feature highlight */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <div className="w-full max-w-sm rounded-xl bg-white/10 p-6 backdrop-blur-sm">
            <h2 className="text-lg font-bold text-accent">Same-Day Service</h2>
            <p className="mt-2 text-sm leading-relaxed text-white/80">
              Emergency HVAC repairs when you need them most. Our technicians
              are ready to respond quickly throughout the Charlotte metro area.
            </p>
            <ul className="mt-4 flex flex-col gap-3">
              {[
                "24/7 Emergency Availability",
                "No Hidden Fees",
                "100% Satisfaction Guarantee",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-white/90">
                  <svg
                    className="h-4 w-4 shrink-0 text-accent"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
