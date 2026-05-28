import Link from "next/link";

export default function HomePage() {
  return (
    <div className="bg-zinc-50">
      <div className="app-container py-12">
        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-3xl border border-zinc-200 bg-white p-8">
            <div className="inline-flex rounded-full bg-brand-100 px-3 py-1 text-xs font-semibold text-zinc-900">
              Student skill exchange
            </div>
            <h1 className="mt-4 text-3xl font-black tracking-tight text-zinc-900">
              Skill Exchange Market
            </h1>
            <p className="mt-3 text-sm leading-6 text-zinc-700">
              Find students who can teach what you want to learn, and offer your skills in return.
              Match, then chat to plan a learning session.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              <Link
                className="inline-flex items-center rounded-2xl bg-zinc-900 px-4 py-2 text-sm font-semibold text-white hover:bg-zinc-800"
                href="/search"
              >
                Search students
              </Link>
              <Link
                className="inline-flex items-center rounded-2xl border border-zinc-200 bg-white px-4 py-2 text-sm font-semibold hover:bg-zinc-50"
                href="/register"
              >
                Create account
              </Link>
              <Link
                className="inline-flex items-center rounded-2xl border border-zinc-200 bg-white px-4 py-2 text-sm font-semibold hover:bg-zinc-50"
                href="/login"
              >
                Login
              </Link>
            </div>
          </div>

          <div className="rounded-3xl border border-zinc-200 bg-white p-8">
            <h3 className="text-sm font-semibold">How it works</h3>
            <ol className="mt-3 space-y-3 text-sm text-zinc-700">
              <li>
                <span className="font-semibold">1.</span> Register and complete your profile (with photo).
              </li>
              <li>
                <span className="font-semibold">2.</span> Add skills you can teach and what you want to learn.
              </li>
              <li>
                <span className="font-semibold">3.</span> Match and start chatting.
              </li>
            </ol>
            <div className="mt-6 rounded-2xl bg-brand-100 p-4 text-sm text-zinc-800">
              Tip: for now the photo uses URL. Later we can switch to S3 upload.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

