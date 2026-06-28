import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center p-6">
      <div className="text-center">
        <h1 className="text-3xl font-semibold text-slate-900">Page not found</h1>
        <p className="mt-3 text-slate-600">
          The page you requested does not exist in this starter.
        </p>
        <Link
          href="/"
          className="mt-6 inline-flex rounded-full bg-teal-700 px-4 py-2 text-sm font-medium text-white"
        >
          Back home
        </Link>
      </div>
    </main>
  );
}

