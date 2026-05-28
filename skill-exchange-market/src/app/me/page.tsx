import Link from "next/link";
import { redirect } from "next/navigation";

import { auth } from "@/lib/auth";
import { prisma } from "@/lib/db";
import { findMatchCandidates } from "@/lib/matching";
import { updateProfileSchema } from "@/lib/validators";
import { Avatar } from "@/components/Avatar";

export default async function MyPage() {
  const session = await auth();
  if (!session?.user?.email) redirect("/login");

  const me = await prisma.user.findUnique({
    where: { email: session.user.email },
    include: {
      teachSkills: { include: { skill: true } },
      learning: true
    }
  });
  if (!me) redirect("/login");

  const candidates = await findMatchCandidates(me.id, 10);

  async function updateProfileAction(formData: FormData) {
    "use server";
    const parsed = updateProfileSchema.safeParse({
      displayName: String(formData.get("displayName") ?? ""),
      image: String(formData.get("image") ?? ""),
      grade: String(formData.get("grade") ?? ""),
      department: String(formData.get("department") ?? ""),
      bio: String(formData.get("bio") ?? "")
    });
    if (!parsed.success) return;

    await prisma.user.update({
      where: { id: me.id },
      data: {
        displayName: parsed.data.displayName || null,
        image: parsed.data.image || null,
        grade: parsed.data.grade || null,
        department: parsed.data.department || null,
        bio: parsed.data.bio || null,
        name: parsed.data.displayName || me.name
      }
    });
  }

  return (
    <div className="app-container py-8">
      <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="rounded-2xl border border-zinc-200 bg-white p-6">
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-center gap-3">
              <Avatar
                src={me.image}
                name={me.displayName ?? me.username}
                size={52}
              />
              <div>
                <h2 className="text-lg font-semibold">My profile</h2>
                <p className="text-sm text-zinc-600">{me.email}</p>
              </div>
            </div>
            <div className="flex gap-2">
              <Link
                className="inline-flex items-center rounded-xl border border-zinc-200 bg-white px-3 py-2 text-sm font-medium hover:bg-zinc-50"
                href="/me/skills"
              >
                Skills
              </Link>
              <Link
                className="inline-flex items-center rounded-xl border border-zinc-200 bg-white px-3 py-2 text-sm font-medium hover:bg-zinc-50"
                href="/me/learning"
              >
                Learning
              </Link>
            </div>
          </div>

          <form action={updateProfileAction} className="mt-6 grid gap-4">
            <div>
              <label className="text-xs font-medium text-zinc-700">Display name</label>
              <input
                className="mt-1 w-full rounded-xl border border-zinc-200 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-brand-300"
                name="displayName"
                defaultValue={me.displayName ?? ""}
              />
            </div>

            <div>
              <label className="text-xs font-medium text-zinc-700">Photo URL</label>
              <input
                className="mt-1 w-full rounded-xl border border-zinc-200 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-brand-300"
                name="image"
                placeholder="https://..."
                defaultValue={me.image ?? ""}
              />
              <p className="mt-1 text-xs text-zinc-500">
                Nanti bisa diganti upload ke S3. Untuk sekarang pakai link foto.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label className="text-xs font-medium text-zinc-700">Grade</label>
                <input
                  className="mt-1 w-full rounded-xl border border-zinc-200 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-brand-300"
                  name="grade"
                  defaultValue={me.grade ?? ""}
                />
              </div>
              <div>
                <label className="text-xs font-medium text-zinc-700">Department</label>
                <input
                  className="mt-1 w-full rounded-xl border border-zinc-200 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-brand-300"
                  name="department"
                  defaultValue={me.department ?? ""}
                />
              </div>
            </div>

            <div>
              <label className="text-xs font-medium text-zinc-700">Bio</label>
              <textarea
                className="mt-1 w-full rounded-xl border border-zinc-200 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-brand-300"
                name="bio"
                defaultValue={me.bio ?? ""}
                rows={5}
              />
            </div>

            <div className="flex items-center gap-2">
              <button className="inline-flex rounded-xl bg-zinc-900 px-4 py-2 text-sm font-semibold text-white hover:bg-zinc-800" type="submit">
                Save
              </button>
            </div>
          </form>
        </div>

        <div className="rounded-2xl border border-zinc-200 bg-white p-6">
          <h3 className="text-base font-semibold">Matching candidates</h3>
          <p className="mt-1 text-sm text-zinc-600">Based on your skills and learning needs.</p>

          {candidates.length === 0 ? (
            <p className="mt-4 text-sm text-zinc-600">
              No candidates yet. Add your skills and learning needs.
            </p>
          ) : (
            <div className="mt-4 grid gap-3">
              {candidates.map((u) => (
                <div key={u.id} className="rounded-2xl border border-zinc-200 bg-zinc-50 p-4">
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <Avatar src={u.image} name={u.displayName ?? u.username} size={42} />
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

                  <div className="mt-3 text-xs text-zinc-700">
                    <div>
                      <span className="font-semibold">Teaches:</span>{" "}
                      {u.teachSkills.map((t) => t.skill.name).join(", ") || "-"}
                    </div>
                    <div className="mt-1">
                      <span className="font-semibold">Wants to learn:</span>{" "}
                      {u.learning.map((n) => n.name).join(", ") || "-"}
                    </div>
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

