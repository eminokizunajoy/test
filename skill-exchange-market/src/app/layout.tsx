import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
import { auth, signOut } from "@/lib/auth";

export const metadata: Metadata = {
  title: "Skill Exchange Market",
  description: "Student skill exchange matching platform"
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const session = await auth();

  return (
    <html lang="en">
      <body>
        <header className="border-b border-zinc-200 bg-white/70 backdrop-blur">
          <div className="app-container flex items-center justify-between py-4">
            <Link href="/" className="flex items-center gap-2">
              <span className="grid h-9 w-9 place-items-center rounded-2xl bg-brand-400 text-sm font-black text-black">
                SE
              </span>
              <span className="text-sm font-semibold">Skill Exchange Market</span>
            </Link>

            <nav className="flex items-center gap-2">
              <Link
                className="inline-flex items-center rounded-xl border border-zinc-200 bg-white px-3 py-2 text-sm font-medium hover:bg-zinc-50"
                href="/search"
              >
                Search
              </Link>
              {session?.user ? (
                <>
                  <Link
                    className="inline-flex items-center rounded-xl border border-zinc-200 bg-white px-3 py-2 text-sm font-medium hover:bg-zinc-50"
                    href="/me"
                  >
                    My Page
                  </Link>
                  <form
                    action={async () => {
                      "use server";
                      await signOut();
                    }}
                  >
                    <button
                      className="inline-flex items-center rounded-xl border border-zinc-200 bg-white px-3 py-2 text-sm font-medium hover:bg-zinc-50"
                      type="submit"
                    >
                      Logout
                    </button>
                  </form>
                </>
              ) : (
                <>
                  <Link
                    className="inline-flex items-center rounded-xl border border-zinc-200 bg-white px-3 py-2 text-sm font-medium hover:bg-zinc-50"
                    href="/login"
                  >
                    Login
                  </Link>
                  <Link
                    className="inline-flex items-center rounded-xl bg-zinc-900 px-3 py-2 text-sm font-semibold text-white hover:bg-zinc-800"
                    href="/register"
                  >
                    Register
                  </Link>
                </>
              )}
            </nav>
          </div>
        </header>

        <main>{children}</main>
      </body>
    </html>
  );
}

