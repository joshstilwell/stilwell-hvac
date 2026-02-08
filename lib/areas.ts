export type AreaMeta = {
  title: string;
  description: string;
};

export type AreaContent = {
  slug: string;
  meta: AreaMeta;
  heading: string;
  subheading: string;
  body: string;
};

const areas: Record<string, AreaContent> = {
  charlotte: {
    slug: "charlotte",
    meta: {
      title: "HVAC Services in Charlotte | Heating & Cooling",
      description: "Professional heating and air conditioning services in Charlotte. Repair, installation, and maintenance.",
    },
    heading: "Serving Charlotte",
    subheading: "Heating and cooling services in Charlotte and surrounding areas",
    body: "We provide reliable HVAC repair, installation, and maintenance throughout Charlotte. From furnace tune-ups to new AC installation, our team is ready to help keep your home comfortable year-round.",
  },
  monroe: {
    slug: "monroe",
    meta: {
      title: "HVAC Services in Monroe | Heating & Cooling",
      description: "Professional heating and air conditioning services in Monroe. Repair, installation, and maintenance.",
    },
    heading: "Serving Monroe",
    subheading: "Heating and cooling services in Monroe and surrounding areas",
    body: "Residents of Monroe trust us for quality HVAC service. We offer same-day repair when possible, plus installation and maintenance for all types of heating and cooling systems.",
  },
  concord: {
    slug: "concord",
    meta: {
      title: "HVAC Services in Concord | Heating & Cooling",
      description: "Professional heating and air conditioning services in Concord. Repair, installation, and maintenance.",
    },
    heading: "Serving Concord",
    subheading: "Heating and cooling services in Concord and surrounding areas",
    body: "Concord homeowners and businesses rely on us for HVAC repair, new system installation, and preventive maintenance. Contact us for a free estimate or same-day service.",
  },
};

export const AREA_SLUGS = ["charlotte", "monroe", "concord"] as const;

export function getAreaBySlug(slug: string): AreaContent | undefined {
  return areas[slug];
}

export function getAllAreas(): AreaContent[] {
  return AREA_SLUGS.map((s) => areas[s]).filter(Boolean);
}
