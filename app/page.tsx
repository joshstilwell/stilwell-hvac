import Link from "next/link";

export default function HomePage() {
  return (
    <div className="space-y-12">
      <section>
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          Heating & Air Conditioning Services
        </h1>
        <p className="mt-4 text-lg text-gray-700">
          Professional HVAC repair, installation, and maintenance. Serving Charlotte, Monroe, Concord and surrounding areas.
        </p>
        <div className="mt-6 flex flex-wrap gap-4">
          <Link
            href="/hvac/heating/repair"
            className="rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-white hover:bg-gray-800"
          >
            Heating Repair
          </Link>
          <Link
            href="/hvac/air-conditioning/repair"
            className="rounded-md border-2 border-gray-900 px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100"
          >
            AC Repair
          </Link>
          <Link
            href="/service-areas/charlotte"
            className="rounded-md border-2 border-gray-900 px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100"
          >
            Service Areas
          </Link>
        </div>
      </section>
      <section>
        <h2 className="text-2xl font-semibold text-gray-900">Our Services</h2>
        <ul className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <li>
            <Link href="/hvac/heating/repair" className="block rounded-lg border border-gray-200 bg-white p-4 shadow-sm hover:border-gray-900 hover:shadow-md">
              <span className="font-medium text-gray-900">Heating Repair</span>
              <span className="mt-1 block text-sm text-gray-600">Furnace and heating system repairs</span>
            </Link>
          </li>
          <li>
            <Link href="/hvac/heating/install" className="block rounded-lg border border-gray-200 bg-white p-4 shadow-sm hover:border-gray-900 hover:shadow-md">
              <span className="font-medium text-gray-900">Heating Installation</span>
              <span className="mt-1 block text-sm text-gray-600">New furnace and heating installation</span>
            </Link>
          </li>
          <li>
            <Link href="/hvac/air-conditioning/repair" className="block rounded-lg border border-gray-200 bg-white p-4 shadow-sm hover:border-gray-900 hover:shadow-md">
              <span className="font-medium text-gray-900">AC Repair</span>
              <span className="mt-1 block text-sm text-gray-600">Air conditioning repair</span>
            </Link>
          </li>
          <li>
            <Link href="/hvac/air-conditioning/install" className="block rounded-lg border border-gray-200 bg-white p-4 shadow-sm hover:border-gray-900 hover:shadow-md">
              <span className="font-medium text-gray-900">AC Installation</span>
              <span className="mt-1 block text-sm text-gray-600">New air conditioning installation</span>
            </Link>
          </li>
          <li>
            <Link href="/hvac/ductless" className="block rounded-lg border border-gray-200 bg-white p-4 shadow-sm hover:border-gray-900 hover:shadow-md">
              <span className="font-medium text-gray-900">Ductless Mini Splits</span>
              <span className="mt-1 block text-sm text-gray-600">Mini-split installation and repair</span>
            </Link>
          </li>
          <li>
            <Link href="/hvac/thermostat" className="block rounded-lg border border-gray-200 bg-white p-4 shadow-sm hover:border-gray-900 hover:shadow-md">
              <span className="font-medium text-gray-900">Thermostat Installation</span>
              <span className="mt-1 block text-sm text-gray-600">Smart thermostat installation</span>
            </Link>
          </li>
          <li>
            <Link href="/hvac/ductwork" className="block rounded-lg border border-gray-200 bg-white p-4 shadow-sm hover:border-gray-900 hover:shadow-md">
              <span className="font-medium text-gray-900">Ductwork Services</span>
              <span className="mt-1 block text-sm text-gray-600">Duct installation, repair, sealing</span>
            </Link>
          </li>
        </ul>
      </section>
    </div>
  );
}
