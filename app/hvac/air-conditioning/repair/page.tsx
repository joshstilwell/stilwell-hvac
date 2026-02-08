import { getServiceByPath } from "@/lib/services";
import { ServiceHero } from "@/components/ServiceHero";
import { ServiceContent } from "@/components/ServiceContent";
import { CTA } from "@/components/CTA";
import type { Metadata } from "next";

const pathKey = "air-conditioning/repair";
const service = getServiceByPath(pathKey)!;

export const metadata: Metadata = {
  title: service.meta.title,
  description: service.meta.description,
  openGraph: { title: service.meta.title, description: service.meta.description },
};

export default function ACRepairPage() {
  return (
    <article className="space-y-8">
      <ServiceHero heading={service.heading} subheading={service.subheading} />
      <ServiceContent body={service.body} />
      <CTA />
    </article>
  );
}
