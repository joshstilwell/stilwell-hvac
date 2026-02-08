export type ServiceMeta = {
  title: string;
  description: string;
};

export type ServiceContent = {
  slug: string;
  path: string;
  meta: ServiceMeta;
  heading: string;
  subheading: string;
  body: string;
};

const services: Record<string, ServiceContent> = {
  "heating/repair": {
    slug: "repair",
    path: "/hvac/heating/repair",
    meta: {
      title: "Heating Repair | HVAC Services",
      description: "Professional heating repair services. Fast, reliable furnace and heating system repairs.",
    },
    heading: "Heating Repair",
    subheading: "Fast, reliable furnace and heating system repairs",
    body: "Our certified technicians diagnose and repair all major brands of furnaces and heating systems. Same-day service available for emergencies. We'll get your heat back on quickly and efficiently.",
  },
  "heating/install": {
    slug: "install",
    path: "/hvac/heating/install",
    meta: {
      title: "Heating Installation | HVAC Services",
      description: "New furnace and heating system installation. Energy-efficient options for your home.",
    },
    heading: "Heating Installation",
    subheading: "New furnace and heating system installation",
    body: "From traditional furnaces to heat pumps, we help you choose and install the right heating system for your home. We offer energy-efficient options and professional installation with warranty.",
  },
  "air-conditioning/repair": {
    slug: "repair",
    path: "/hvac/air-conditioning/repair",
    meta: {
      title: "Air Conditioning Repair | HVAC Services",
      description: "Expert AC repair services. We fix all makes and models—same-day service available.",
    },
    heading: "Air Conditioning Repair",
    subheading: "Expert AC repair for all makes and models",
    body: "When your AC stops cooling, we're here to help. Our technicians repair central air, ductless units, and heat pumps. Same-day and emergency service available.",
  },
  "air-conditioning/install": {
    slug: "install",
    path: "/hvac/air-conditioning/install",
    meta: {
      title: "Air Conditioning Installation | HVAC Services",
      description: "New AC and central air installation. Energy-efficient cooling solutions.",
    },
    heading: "Air Conditioning Installation",
    subheading: "New AC and central air installation",
    body: "Upgrade to a new, energy-efficient air conditioner. We handle sizing, installation, and disposal of your old unit. Financing options available.",
  },
  ductless: {
    slug: "ductless",
    path: "/hvac/ductless",
    meta: {
      title: "Ductless HVAC | Mini-Split Installation & Repair",
      description: "Ductless mini-split heating and cooling. Perfect for additions, garages, and homes without ducts.",
    },
    heading: "Ductless Mini-Splits",
    subheading: "Heating and cooling without ductwork",
    body: "Ductless systems are ideal for room additions, garages, or homes without existing ductwork. We install and repair mini-splits from leading brands with flexible zoning options.",
  },
  thermostat: {
    slug: "thermostat",
    path: "/hvac/thermostat",
    meta: {
      title: "Thermostat Installation & Repair | Smart Thermostats",
      description: "Thermostat installation, repair, and smart thermostat upgrades for better comfort and savings.",
    },
    heading: "Thermostats",
    subheading: "Installation, repair, and smart upgrades",
    body: "Upgrade to a programmable or smart thermostat for better comfort and energy savings. We install and repair all types of thermostats and integrate with your existing HVAC system.",
  },
  ductwork: {
    slug: "ductwork",
    path: "/hvac/ductwork",
    meta: {
      title: "Ductwork Services | Installation, Repair & Sealing",
      description: "Ductwork installation, repair, and sealing. Improve efficiency and indoor air quality.",
    },
    heading: "Ductwork",
    subheading: "Installation, repair, and sealing",
    body: "Leaky or poorly designed ducts waste energy and reduce comfort. We install new ductwork, repair damaged sections, and offer sealing services to improve efficiency and indoor air quality.",
  },
};

export function getServiceByPath(pathKey: string): ServiceContent | undefined {
  return services[pathKey];
}

export function getAllServicePaths(): string[] {
  return Object.keys(services);
}
