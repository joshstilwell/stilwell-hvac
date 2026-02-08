import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Stilwell Heating & Cooling",
  description: "Tips, news, and updates from Stilwell Heating & Cooling.",
};

export default function BlogPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold tracking-tight text-gray-900">
        Blog
      </h1>
      <p className="text-lg text-gray-700">
        Coming soon. We&apos;ll share tips, news, and updates here once our blog is connected to a CMS.
      </p>
    </div>
  );
}
