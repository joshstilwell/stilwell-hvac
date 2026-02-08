import { notFound } from "next/navigation";
import type { Metadata } from "next";

type Props = { params: Promise<{ slug: string }> };

// Stub: no posts until CMS is connected. All slugs 404.
export async function generateStaticParams() {
  return [];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  return { title: slug ? `${slug} | Blog` : "Blog" };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  // Stub: when CMS is connected, fetch post by slug here; if not found, notFound()
  notFound();
}
