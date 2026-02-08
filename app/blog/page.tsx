import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Stilwell Heating & Cooling",
  description: "Tips, news, and updates from Stilwell Heating & Cooling.",
};

export default function BlogPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
      <div className="space-y-8">
        <h1 className="text-3xl font-bold tracking-tight text-navy">
          Blog
        </h1>
        <p className="text-lg text-muted-foreground">
          Coming soon. We&apos;ll share tips, news, and updates here once our blog is connected to a CMS.
        </p>
      </div>
    </div>
  );
}
