import Link from "next/link";
import { redirect } from "next/navigation";

import { auth } from "@/lib/auth";
import { prisma } from "@/lib/db";
import { Avatar } from "@/components/Avatar";

export default async function MatchPage({ params }: { params: Promise<{ id: string }> }) {
  const session = await auth();
  if (!session?.user?.email) redirect("/login");

  const me = await prisma.user.findUnique({ where: { email: session.user.email } });
  if (!me) redirect("/login");

  const { id } = await params;
  const match = await prisma.match.findUnique({
    where: { id },
    include: {
      userA: { select: { id: true, username: true, displayName: true, image: true } },
      userB: { select: { id: true, username: true, displayName: true, image: true } },
      messages: {
        orderBy: { createdAt: "asc" },
        take: 200,
        include: { sender: { select: { id: true, username: true, displayName: true, image: true } } }
      }
    }
  });

  if (!match) {
    return (
      <div className="app-container py-10">
        <div className="rounded-2xl border border-zinc-200 bg-white p-6">
          <p className="text-sm text-zinc-700">Chat not found.</p>
          <div className="mt-4">
            <Link
              className="inline-flex items-center rounded-xl border border-zinc-200 bg-white px-3 py-2 text-sm font-medium hover:bg-zinc-50"
              href="/me"
            >
              Back
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const isMember = match.userAId === me.id || match.userBId === me.id;
  if (!isMember) redirect("/me");

  const other = match.userAId === me.id ? match.userB : match.userA;

  async function sendMessageAction(formData: FormData) {
    "use server";
    const body = String(formData.get("body") ?? "").trim();
    if (!body) return;

    const session2 = await auth();
    if (!session2?.user?.email) redirect("/login");
    const me2 = await prisma.user.findUnique({ where: { email: session2.user.email } });
    if (!me2) redirect("/login");

    const m = await prisma.match.findUnique({ where: { id }, select: { userAId: true, userBId: true } });
    if (!m) redirect("/me");
    if (m.userAId !== me2.id && m.userBId !== me2.id) redirect("/me");

    await prisma.message.create({
      data: {
        matchId: id,
        senderId: me2.id,
        body
      }
    });
  }

  return (
    <div className="min-h-[calc(100vh-72px)] bg-brand-400">
      <div className="app-container py-8">
        <div className="flex items-center justify-between">
          <Link
            className="inline-flex items-center rounded-xl border border-black/10 bg-white/70 px-3 py-2 text-sm font-medium backdrop-blur hover:bg-white"
            href="/me"
          >
            Back
          </Link>
          <div className="flex items-center gap-2 rounded-full bg-white/70 px-3 py-2 text-sm font-semibold backdrop-blur">
            <Avatar src={other.image} name={other.displayName ?? other.username} size={28} />
            <span>{other.displayName ?? other.username}</span>
          </div>
        </div>

        {match.messages.length === 0 ? (
          <div className="mt-8 grid place-items-center">
            <div className="text-center">
              <div className="text-3xl font-black tracking-tight text-black">YOU MATCHED!</div>
              <div className="mt-5 flex items-center justify-center">
                <div className="-rotate-6 rounded-2xl bg-white p-2 shadow-lg ring-1 ring-black/10">
                  <Avatar src={me.image ?? null} name={me.displayName ?? me.username} size={92} />
                </div>
                <div className="-ml-3 rotate-6 rounded-2xl bg-white p-2 shadow-lg ring-1 ring-black/10">
                  <Avatar src={other.image} name={other.displayName ?? other.username} size={92} />
                </div>
              </div>
              <p className="mt-4 text-sm text-black/70">
                Start the conversation and plan your learning session.
              </p>
            </div>
          </div>
        ) : null}

        <div className="mt-8 grid gap-5 lg:grid-cols-[1.6fr_0.8fr]">
          <div className="rounded-3xl border border-black/10 bg-white/80 p-4 backdrop-blur">
            <div className="flex flex-col gap-3">
              {match.messages.length === 0 ? (
                <div className="text-sm text-zinc-600">No messages yet.</div>
              ) : (
                match.messages.map((msg) => {
                  const mine = msg.senderId === me.id;
                  return (
                    <div
                      key={msg.id}
                      className={[
                        "max-w-[85%] rounded-2xl p-3 shadow-sm ring-1 ring-black/10",
                        mine ? "ml-auto bg-zinc-900 text-white" : "bg-white text-zinc-900"
                      ].join(" ")}
                    >
                      <div className="flex items-center gap-2 text-[11px] opacity-80">
                        <Avatar
                          src={msg.sender.image}
                          name={msg.sender.displayName ?? msg.sender.username}
                          size={18}
                        />
                        <span>{mine ? "You" : msg.sender.displayName ?? msg.sender.username}</span>
                        <span>·</span>
                        <span>{new Date(msg.createdAt).toLocaleString()}</span>
                      </div>
                      <div className="mt-1 whitespace-pre-wrap text-sm">{msg.body}</div>
                    </div>
                  );
                })
              )}
            </div>
          </div>

          <div className="rounded-3xl border border-black/10 bg-white/80 p-4 backdrop-blur">
            <h3 className="text-sm font-semibold">Send message</h3>
            <form action={sendMessageAction} className="mt-3 grid gap-3">
              <textarea
                className="w-full rounded-2xl border border-black/10 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-black/20"
                name="body"
                rows={7}
                placeholder="Schedule, topic, learning method, etc."
              />
              <button className="inline-flex justify-center rounded-2xl bg-zinc-900 px-4 py-2 text-sm font-semibold text-white hover:bg-zinc-800" type="submit">
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

