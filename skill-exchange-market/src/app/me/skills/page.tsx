import Link from "next/link";
import { redirect } from "next/navigation";

import { auth } from "@/lib/auth";
import { prisma } from "@/lib/db";

export default async function MySkillsPage() {
  const session = await auth();
  if (!session?.user?.email) redirect("/login");

  const me = await prisma.user.findUnique({
    where: { email: session.user.email },
    include: { teachSkills: { include: { skill: true } } }
  });
  if (!me) redirect("/login");

  async function addSkillAction(formData: FormData) {
    "use server";
    const name = String(formData.get("name") ?? "").trim();
    const category = String(formData.get("category") ?? "").trim();
    if (!name || !category) return;

    const skill = await prisma.skill.upsert({
      where: { name_category: { name, category } },
      update: {},
      create: { name, category }
    });

    await prisma.userSkill.upsert({
      where: { userId_skillId: { userId: me.id, skillId: skill.id } },
      update: {},
      create: { userId: me.id, skillId: skill.id }
    });
  }

  async function removeSkillAction(formData: FormData) {
    "use server";
    const skillId = String(formData.get("skillId") ?? "");
    if (!skillId) return;
    await prisma.userSkill.delete({
      where: { userId_skillId: { userId: me.id, skillId } }
    });
  }

  return (
    <div className="app-container py-8">
      <div className="mx-auto max-w-3xl rounded-2xl border border-zinc-200 bg-white p-6">
        <div className="flex items-center justify-between gap-3">
          <h2 className="text-lg font-semibold">My teaching skills</h2>
          <Link
            className="inline-flex items-center rounded-xl border border-zinc-200 bg-white px-3 py-2 text-sm font-medium hover:bg-zinc-50"
            href="/me"
          >
            Back
          </Link>
        </div>

        <form action={addSkillAction} className="mt-4 grid gap-3 md:grid-cols-[1fr_1fr_auto]">
          <div>
            <label className="text-xs font-medium text-zinc-700">Skill name</label>
            <input
              className="mt-1 w-full rounded-xl border border-zinc-200 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-brand-300"
              name="name"
              placeholder="Java / English / Design"
              required
            />
          </div>
          <div>
            <label className="text-xs font-medium text-zinc-700">Category</label>
            <input
              className="mt-1 w-full rounded-xl border border-zinc-200 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-brand-300"
              name="category"
              placeholder="Programming / Language"
              required
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

        {me.teachSkills.length === 0 ? (
          <p className="mt-4 text-sm text-zinc-600">No skills yet.</p>
        ) : (
          <div className="mt-4 grid gap-3">
            {me.teachSkills.map((us) => (
              <div key={us.skillId} className="rounded-2xl border border-zinc-200 bg-zinc-50 p-4">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <div className="text-sm font-semibold">{us.skill.name}</div>
                    <div className="text-xs text-zinc-600">{us.skill.category}</div>
                  </div>
                  <form action={removeSkillAction}>
                    <input type="hidden" name="skillId" value={us.skillId} />
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

