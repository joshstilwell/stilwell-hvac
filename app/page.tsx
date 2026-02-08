import { Hero } from "@/components/Hero";
import { ServicesGrid } from "@/components/ServicesGrid";
import { Features } from "@/components/Features";
import { Stats } from "@/components/Stats";
import { ServiceAreas } from "@/components/ServiceAreas";
import { HomeCTA } from "@/components/HomeCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesGrid />
      <Features />
      <Stats />
      <ServiceAreas />
      <HomeCTA />
    </>
  );
}
