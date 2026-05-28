import Link from "next/link";
import { redirect } from "next/navigation";

import { auth } from "@/lib/auth";
import { prisma } from "@/lib/db";

export default async function MyLearningNeedsPage() {
  const session = await auth();
  if (!session?.user?.email) redirect("/login");

  const me = await prisma.user.findUnique({
    where: { email: session.user.email },
    include: { learning: true }
  });
  if (!me) redirect("/login");

  async function addNeedAction(formData: FormData) {
    "use server";
    const name = String(formData.get("name") ?? "").trim();
    const category = String(formData.get("category") ?? "").trim();
    if (!name) return;

    await prisma.learningNeed.create({
      data: {
        userId: me.id,
        name,
        category: category || null
      }
    });
  }

  async function removeNeedAction(formData: FormData) {
    "use server";
    const id = String(formData.get("id") ?? "");
    if (!id) return;
    await prisma.learningNeed.delete({ where: { id } });
  }

  return (
    <div className="app-container py-8">
      <div className="mx-auto max-w-3xl rounded-2xl border border-zinc-200 bg-white p-6">
        <div className="flex items-center justify-between gap-3">
          <h2 className="text-lg font-semibold">My learning needs</h2>
          <Link
            className="inline-flex items-center rounded-xl border border-zinc-200 bg-white px-3 py-2 text-sm font-medium hover:bg-zinc-50"
            href="/me"
          >
            Back
          </Link>
        </div>

        <form action={addNeedAction} className="mt-4 grid gap-3 md:grid-cols-[1fr_1fr_auto]">
          <div>
            <label className="text-xs font-medium text-zinc-700">Want to learn</label>
            <input
              className="mt-1 w-full rounded-xl border border-zinc-200 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-brand-300"
              name="name"
              placeholder="English conversation / UI design"
              required
            />
          </div>
          <div>
            <label className="text-xs font-medium text-zinc-700">Category (optional)</label>
            <input
              className="mt-1 w-full rounded-xl border border-zinc-200 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-brand-300"
              name="category"
              placeholder="Language / Design"
            />
          </div>
          <div className="flex items-end">
            <button
              className="inline-flex h-10 justify-center rounded-xl bg-zinc-900 px-4 text-sm font-semibold text-white hover:bg-zinc-800"
              type="submit"
            >
              Add
            </button>
          </div>
        </form>

        {me.learning.length === 0 ? (
          <p className="mt-4 text-sm text-zinc-600">No learning needs yet.</p>
        ) : (
          <div className="mt-4 grid gap-3">
            {me.learning.map((n) => (
              <div key={n.id} className="rounded-2xl border border-zinc-200 bg-zinc-50 p-4">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <div className="text-sm font-semibold">{n.name}</div>
                    <div className="text-xs text-zinc-600">{n.category ?? "-"}</div>
                  </div>
                  <form action={removeNeedAction}>
                    <input type="hidden" name="id" value={n.id} />
                    <button
                      className="inline-flex items-center rounded-xl border border-zinc-200 bg-white px-3 py-2 text-sm font-medium hover:bg-zinc-50"
                      type="submit"
                    >
                      Remove
                    </button>
                  </form>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

