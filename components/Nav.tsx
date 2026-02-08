"use client";

import Link from "next/link";
import { NavDropdown } from "./NavDropdown";

const serviceItems = [
  { href: "/hvac/heating/repair", label: "Heating Repair" },
  { href: "/hvac/heating/install", label: "Heating Install" },
  { href: "/hvac/air-conditioning/repair", label: "AC Repair" },
  { href: "/hvac/air-conditioning/install", label: "AC Install" },
  { href: "/hvac/ductless", label: "Ductless" },
  { href: "/hvac/thermostat", label: "Thermostat" },
  { href: "/hvac/ductwork", label: "Ductwork" },
];

const areaItems = [
  { href: "/service-areas/charlotte", label: "Charlotte" },
  { href: "/service-areas/monroe", label: "Monroe" },
  { href: "/service-areas/concord", label: "Concord" },
];

type NavProps = {
  onLinkClick?: () => void;
  desktop?: boolean;
};

export function Nav({ onLinkClick, desktop = false }: NavProps) {
  const linkClass = desktop
    ? "text-sm font-semibold text-navy hover:text-accent-hover"
    : "block py-2 text-base font-semibold text-navy";

  return (
    <nav className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6" aria-label="Main">
      <NavDropdown
        label="Services"
        items={serviceItems}
        onLinkClick={onLinkClick}
        desktop={desktop}
      />
      <NavDropdown
        label="Service Areas"
        items={areaItems}
        onLinkClick={onLinkClick}
        desktop={desktop}
      />
      <Link href="/#contact" onClick={onLinkClick} className={linkClass}>
        Contact Us
      </Link>
    </nav>
  );
}
