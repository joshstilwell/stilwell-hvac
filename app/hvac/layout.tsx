import Link from "next/link";
import { Breadcrumb } from "@/components/Breadcrumb";

const hvacSubNav = [
  { href: "/hvac/heating/repair", label: "Heating Repair" },
  { href: "/hvac/heating/install", label: "Heating Install" },
  { href: "/hvac/air-conditioning/repair", label: "AC Repair" },
  { href: "/hvac/air-conditioning/install", label: "AC Install" },
  { href: "/hvac/ductless", label: "Ductless" },
  { href: "/hvac/thermostat", label: "Thermostat" },
  { href: "/hvac/ductwork", label: "Ductwork" },
];

export default function HvacLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
      <div className="space-y-6">
      <Breadcrumb
        items={[
          { href: "/", label: "Home" },
          { href: "/hvac/heating/repair", label: "HVAC" },
        ]}
      />
      <nav aria-label="HVAC services" className="flex flex-wrap gap-2 border-b border-border pb-4">
        {hvacSubNav.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className="rounded-md px-3 py-1.5 text-sm font-medium text-muted-foreground hover:bg-cream hover:text-navy"
          >
            {label}
          </Link>
        ))}
      </nav>
      {children}
      </div>
    </div>
  );
}
