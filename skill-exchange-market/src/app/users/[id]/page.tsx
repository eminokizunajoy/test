import Link from "next/link";
import { redirect } from "next/navigation";

import { auth } from "@/lib/auth";
import { prisma } from "@/lib/db";
import { Avatar } from "@/components/Avatar";

export default async function UserDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const user = await prisma.user.findUnique({
    where: { id },
    include: {
      teachSkills: { include: { skill: true } },
      learning: true
    }
  });

  if (!user) {
    return (
      <div className="app-container py-10">
        <div className="rounded-2xl border border-zinc-200 bg-white p-6">
          <p className="text-sm text-zinc-700">User not found.</p>
          <div className="mt-4">
            <Link
              className="inline-flex items-center rounded-xl border border-zinc-200 bg-white px-3 py-2 text-sm font-medium hover:bg-zinc-50"
              href="/search"
            >
              Back to search
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const session = await auth();
  const myEmail = session?.user?.email ?? null;
  const me = myEmail ? await prisma.user.findUnique({ where: { email: myEmail } }) : null;

  async function startChatAction() {
    "use server";
    const session2 = await auth();
    if (!session2?.user?.email) redirect("/login");

    const me2 = await prisma.user.findUnique({ where: { email: session2.user.email } });
    if (!me2) redirect("/login");
    if (me2.id === id) redirect("/me");

    const pair = [me2.id, id].sort();
    const existing = await prisma.match.findFirst({
      where: {
        OR: [
          { userAId: pair[0], userBId: pair[1] },
          { userAId: pair[1], userBId: pair[0] }
        ]
      },
      select: { id: true }
    });

    const match =
      existing ??
      (await prisma.match.create({
        data: {
          userAId: pair[0],
          userBId: pair[1],
          status: "ACTIVE"
        },
        select: { id: true }
      }));

    redirect(`/matches/${match.id}`);
  }

  return (
    <div className="app-container py-8">
      <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="rounded-2xl border border-zinc-200 bg-white p-6">
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-center gap-3">
              <Avatar src={user.image} name={user.displayName ?? user.username} size={56} />
              <div>
                <h2 className="text-lg font-semibold">{user.displayName ?? user.username}</h2>
                <p className="text-sm text-zinc-600">
                  {user.grade ?? "-"} · {user.department ?? "-"}
                </p>
              </div>
            </div>
            <Link
              className="inline-flex items-center rounded-xl border border-zinc-200 bg-white px-3 py-2 text-sm font-medium hover:bg-zinc-50"
              href="/search"
            >
              Back
            </Link>
          </div>

          <p className="mt-4 whitespace-pre-wrap text-sm text-zinc-700">{user.bio ?? "No bio yet."}</p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-4">
              <div className="text-sm font-semibold">Teaches</div>
              <div className="mt-2 space-y-1 text-sm text-zinc-700">
                {user.teachSkills.length === 0 ? (
                  <div className="text-sm text-zinc-600">-</div>
                ) : (
                  user.teachSkills.map((s) => (
                    <div key={s.skillId}>
                      {s.skill.name} <span className="text-zinc-500">({s.skill.category})</span>
                    </div>
                  ))
                )}
              </div>
            </div>
            <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-4">
              <div className="text-sm font-semibold">Wants to learn</div>
              <div className="mt-2 space-y-1 text-sm text-zinc-700">
                {user.learning.length === 0 ? (
                  <div className="text-sm text-zinc-600">-</div>
                ) : (
                  user.learning.map((n) => (
                    <div key={n.id}>
                      {n.name} <span className="text-zinc-500">({n.category ?? "-"})</span>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-zinc-200 bg-white p-6">
          <h3 className="text-base font-semibold">Message</h3>
          {!me ? (
            <div className="mt-3 grid gap-3">
              <p className="text-sm text-zinc-600">Login to start chat.</p>
              <Link
                className="inline-flex justify-center rounded-xl bg-zinc-900 px-4 py-2 text-sm font-semibold text-white hover:bg-zinc-800"
                href="/login"
              >
                Login
              </Link>
            </div>
          ) : me.id === user.id ? (
            <p className="mt-3 text-sm text-zinc-600">This is you.</p>
          ) : (
            <form className="mt-3" action={startChatAction}>
              <button
                className="inline-flex w-full justify-center rounded-xl bg-zinc-900 px-4 py-2 text-sm font-semibold text-white hover:bg-zinc-800"
                type="submit"
              >
                Start chat
              </button>
              <p className="mt-2 text-xs text-zinc-500">
                This will create (or reuse) a match and open the chat room.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

