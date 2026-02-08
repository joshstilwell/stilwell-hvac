import { notFound } from "next/navigation";
import { AREA_SLUGS, getAreaBySlug } from "@/lib/areas";
import { AreaHero } from "@/components/AreaHero";
import { AreaContent } from "@/components/AreaContent";
import { CTA } from "@/components/CTA";
import type { Metadata } from "next";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return AREA_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const area = getAreaBySlug(slug);
  if (!area) return { title: "Service Area" };
  return {
    title: area.meta.title,
    description: area.meta.description,
    openGraph: { title: area.meta.title, description: area.meta.description },
  };
}

export default async function ServiceAreaPage({ params }: Props) {
  const { slug } = await params;
  const area = getAreaBySlug(slug);
  if (!area) notFound();

  return (
    <article className="space-y-8">
      <AreaHero heading={area.heading} subheading={area.subheading} />
      <AreaContent body={area.body} />
      <CTA title={`Need HVAC service in ${area.heading.replace("Serving ", "")}?`} />
    </article>
  );
}
