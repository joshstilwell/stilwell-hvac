import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center gap-4 text-center">
      <h1 className="text-2xl font-bold text-navy">Page not found</h1>
      <p className="text-muted-foreground">The page you're looking for doesn't exist.</p>
      <Link
        href="/"
        className="rounded-md bg-accent px-4 py-2 text-sm font-bold text-navy transition hover:bg-accent-hover"
      >
        Go home
      </Link>
    </div>
  );
}
