import Link from "next/link";

import { prisma } from "@/lib/db";
import { Avatar } from "@/components/Avatar";

export default async function SearchPage({
  searchParams
}: {
  searchParams: Promise<{ q?: string; category?: string }>;
}) {
  const { q, category } = await searchParams;
  const query = (q ?? "").trim();
  const cat = (category ?? "").trim();

  const users = await prisma.user.findMany({
    where: {
      OR:
        query.length > 0
          ? [
              { username: { contains: query } },
              { displayName: { contains: query } },
              { bio: { contains: query } },
              {
                teachSkills: {
                  some: { skill: { name: { contains: query } } }
                }
              },
              {
                learning: {
                  some: { name: { contains: query } }
                }
              }
            ]
          : undefined,
      ...(cat.length > 0
        ? {
            teachSkills: { some: { skill: { category: { contains: cat } } } }
          }
        : {})
    },
    take: 50,
    select: {
      id: true,
      username: true,
      displayName: true,
      image: true,
      grade: true,
      department: true
    }
  });

  return (
    <div className="app-container py-8">
      <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="rounded-2xl border border-zinc-200 bg-white p-6">
          <h2 className="text-lg font-semibold">Search</h2>
          <p className="mt-1 text-sm text-zinc-600">
            Find students by keyword (name, bio, skills, learning needs) and optional category.
          </p>
          <form className="mt-4 grid gap-3">
            <div>
              <label className="text-xs font-medium text-zinc-700">Keyword</label>
              <input
                className="mt-1 w-full rounded-xl border border-zinc-200 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-brand-300"
                name="q"
                defaultValue={query}
                placeholder="Java / English / Design"
              />
            </div>
            <div>
              <label className="text-xs font-medium text-zinc-700">Category (optional)</label>
              <input
                className="mt-1 w-full rounded-xl border border-zinc-200 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-brand-300"
                name="category"
                defaultValue={cat}
                placeholder="Programming / Language"
              />
            </div>
            <button className="inline-flex justify-center rounded-xl bg-zinc-900 px-4 py-2 text-sm font-semibold text-white hover:bg-zinc-800" type="submit">
              Search
            </button>
          </form>
        </div>

        <div className="rounded-2xl border border-zinc-200 bg-white p-6">
          <h3 className="text-base font-semibold">Results</h3>
          {users.length === 0 ? (
            <p className="mt-3 text-sm text-zinc-600">No results.</p>
          ) : (
            <div className="mt-4 grid gap-3">
              {users.map((u) => (
                <div key={u.id} className="rounded-2xl border border-zinc-200 bg-zinc-50 p-4">
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <Avatar src={u.image} name={u.displayName ?? u.username} size={44} />
                      <div>
                        <div className="text-sm font-semibold">{u.displayName ?? u.username}</div>
                        <div className="text-xs text-zinc-600">
                          {u.grade ?? "-"} · {u.department ?? "-"}
                        </div>
                      </div>
                    </div>
                    <Link
                      className="inline-flex items-center rounded-xl border border-zinc-200 bg-white px-3 py-2 text-sm font-medium hover:bg-zinc-50"
                      href={`/users/${u.id}`}
                    >
                      Detail
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

