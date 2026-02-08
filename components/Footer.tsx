import Link from "next/link";
import { SITE_PHONE_DISPLAY, SITE_PHONE_TEL } from "@/lib/site";

const serviceLinks = [
  { href: "/hvac/heating/repair", label: "Heating Repair" },
  { href: "/hvac/heating/install", label: "Heating Install" },
  { href: "/hvac/air-conditioning/repair", label: "AC Repair" },
  { href: "/hvac/air-conditioning/install", label: "AC Install" },
  { href: "/hvac/ductless", label: "Ductless" },
  { href: "/hvac/thermostat", label: "Thermostat" },
  { href: "/hvac/ductwork", label: "Ductwork" },
];

const areaLinks = [
  { href: "/service-areas/charlotte", label: "Charlotte" },
  { href: "/service-areas/monroe", label: "Monroe" },
  { href: "/service-areas/concord", label: "Concord" },
];

export function Footer() {
  return (
    <footer id="contact" className="border-t border-navy-light bg-navy text-white">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="text-sm font-semibold text-white">Contact</h3>
            <p className="mt-2 text-sm text-white/90">
              Phone:{" "}
              <a href={`tel:${SITE_PHONE_TEL}`} className="hover:text-gray-300">
                {SITE_PHONE_DISPLAY}
              </a>
              <br />
              Email: info@example.com
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-white">Services</h3>
            <ul className="mt-2 space-y-1">
              {serviceLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className="text-sm text-white/90 hover:text-gray-300">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-white">Service Areas</h3>
            <ul className="mt-2 space-y-1">
              {areaLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className="text-sm text-white/90 hover:text-gray-300">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-white">Company</h3>
            <ul className="mt-2 space-y-1">
              <li>
                <Link href="/blog" className="text-sm text-white/90 hover:text-gray-300">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-white/20 pt-8">
          <p className="text-center text-sm text-white/80">
            © {new Date().getFullYear()} Stilwell Heating & Cooling. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
