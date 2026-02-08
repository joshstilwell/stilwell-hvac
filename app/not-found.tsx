import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center gap-4 text-center">
      <h1 className="text-2xl font-bold text-gray-900">Page not found</h1>
      <p className="text-gray-700">The page you’re looking for doesn’t exist.</p>
      <Link
        href="/"
        className="rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-white hover:bg-gray-800"
      >
        Go home
      </Link>
    </div>
  );
}
