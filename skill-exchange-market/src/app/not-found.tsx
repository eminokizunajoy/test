import Link from "next/link";

export default function NotFound() {
  return (
    <div className="app-container py-10">
      <div className="rounded-2xl border border-zinc-200 bg-white p-6">
        <h2 className="text-lg font-semibold">Page not found</h2>
        <p className="mt-1 text-sm text-zinc-600">The page you are looking for does not exist.</p>
        <div className="mt-4">
          <Link className="inline-flex rounded-xl bg-zinc-900 px-4 py-2 text-sm font-semibold text-white" href="/">
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

