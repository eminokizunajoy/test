import Link from "next/link";
import { redirect } from "next/navigation";

import { auth, signIn } from "@/lib/auth";

export default async function LoginPage() {
  const session = await auth();
  if (session?.user) redirect("/me");

  async function loginAction(formData: FormData) {
    "use server";

    const email = String(formData.get("email") ?? "");
    const password = String(formData.get("password") ?? "");

    await signIn("credentials", { email, password, redirectTo: "/me" });
  }

  async function googleAction() {
    "use server";
    await signIn("google", { redirectTo: "/me" });
  }

  return (
    <div className="app-container py-10">
      <div className="mx-auto max-w-md rounded-3xl border border-zinc-200 bg-white p-8">
        <h2 className="text-lg font-semibold">Login</h2>
        <p className="mt-1 text-sm text-zinc-600">Welcome back.</p>

        <form action={googleAction} className="mt-6">
          <button
            className="inline-flex w-full items-center justify-center gap-2 rounded-2xl border border-zinc-200 bg-white px-4 py-2 text-sm font-semibold hover:bg-zinc-50"
            type="submit"
          >
            Continue with Google
          </button>
        </form>

        <div className="my-5 flex items-center gap-3">
          <div className="h-px flex-1 bg-zinc-200" />
          <div className="text-xs font-medium text-zinc-500">OR</div>
          <div className="h-px flex-1 bg-zinc-200" />
        </div>

        <form action={loginAction} className="grid gap-4">
          <div>
            <label className="text-xs font-medium text-zinc-700">Email</label>
            <input
              className="mt-1 w-full rounded-xl border border-zinc-200 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-brand-300"
              type="email"
              name="email"
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
          <button className="inline-flex justify-center rounded-2xl bg-zinc-900 px-4 py-2 text-sm font-semibold text-white hover:bg-zinc-800" type="submit">
            Login
          </button>
        </form>

        <div className="mt-5 flex items-center justify-between text-sm">
          <span className="text-zinc-600">No account yet?</span>
          <Link className="font-semibold text-zinc-900 underline decoration-brand-300 underline-offset-4" href="/register">
            Create account
          </Link>
        </div>
      </div>
    </div>
  );
}

