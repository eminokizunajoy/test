import Link from "next/link";
import { redirect } from "next/navigation";
import bcrypt from "bcryptjs";

import { prisma } from "@/lib/db";
import { registerSchema } from "@/lib/validators";
import { signIn, auth } from "@/lib/auth";

export default async function RegisterPage() {
  const session = await auth();
  if (session?.user) redirect("/me");

  async function registerAction(formData: FormData) {
    "use server";

    const parsed = registerSchema.safeParse({
      username: String(formData.get("username") ?? ""),
      email: String(formData.get("email") ?? ""),
      password: String(formData.get("password") ?? "")
    });

    if (!parsed.success) {
      return { ok: false, message: "Invalid input. Username >=3, password >=8." };
    }

    const { username, email, password } = parsed.data;
    const existing = await prisma.user.findFirst({
      where: { OR: [{ email }, { username }] },
      select: { id: true }
    });
    if (existing) return { ok: false, message: "Email or username already used." };

    const passwordHash = await bcrypt.hash(password, 12);
    await prisma.user.create({
      data: {
        email,
        username,
        passwordHash,
        name: username,
        displayName: username
      }
    });

    await signIn("credentials", { email, password, redirectTo: "/me" });
    return { ok: true, message: "OK" };
  }

  return (
    <div className="app-container py-10">
      <div className="mx-auto max-w-md rounded-3xl border border-zinc-200 bg-white p-8">
        <div className="inline-flex rounded-full bg-brand-100 px-3 py-1 text-xs font-semibold text-zinc-900">
          Create account
        </div>
        <h2 className="mt-3 text-xl font-black tracking-tight">Join Skill Exchange</h2>
        <p className="mt-1 text-sm text-zinc-600">Register to match and chat with other students.</p>

        <form action={registerAction} className="mt-6 grid gap-4">
          <div>
            <label className="text-xs font-medium text-zinc-700">Username</label>
            <input
              className="mt-1 w-full rounded-xl border border-zinc-200 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-brand-300"
              name="username"
              placeholder="yourname"
              required
              minLength={3}
            />
          </div>
          <div>
            <label className="text-xs font-medium text-zinc-700">Email</label>
            <input
              className="mt-1 w-full rounded-xl border border-zinc-200 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-brand-300"
              type="email"
              name="email"
              placeholder="you@example.com"
              required
            />
          </div>
          <div>
            <label className="text-xs font-medium text-zinc-700">Password</label>
            <input
              className="mt-1 w-full rounded-xl border border-zinc-200 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-brand-300"
              type="password"
              name="password"
              required
              minLength={8}
            />
          </div>

          <button
            className="mt-1 inline-flex justify-center rounded-2xl bg-zinc-900 px-4 py-2 text-sm font-semibold text-white hover:bg-zinc-800"
            type="submit"
          >
            Register
          </button>
        </form>

        <p className="mt-4 text-xs text-zinc-500">
          By registering you agree to use the service for learning support.
        </p>

        <div className="mt-5 text-center text-sm text-zinc-600">
          Already have an account?{" "}
          <Link className="font-semibold text-zinc-900 underline decoration-brand-300 underline-offset-4" href="/login">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}

