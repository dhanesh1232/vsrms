import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Sign In | Care&Move" };

export default function LoginPage() {
  return (
    <div className="bg-slate-900 rounded-3xl border border-slate-800 p-8 shadow-2xl">
      <h1 className="text-2xl font-bold text-white mb-2">Welcome back</h1>
      <p className="text-slate-400 text-sm mb-8">
        Sign in to access your Care&Move dashboard.
      </p>

      <form className="space-y-5">
        <div>
          <label className="block text-sm font-medium text-slate-300 mb-2">
            Email Address
          </label>
          <input
            type="email"
            placeholder="admin@caremove.in"
            className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 text-white text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 placeholder:text-slate-500"
          />
        </div>
        <div>
          <div className="flex justify-between mb-2">
            <label className="block text-sm font-medium text-slate-300">
              Password
            </label>
            <Link
              href="/forgot-password"
              className="text-xs text-primary hover:underline"
            >
              Forgot password?
            </Link>
          </div>
          <input
            type="password"
            placeholder="••••••••"
            className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 text-white text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
          />
        </div>
        <button
          type="submit"
          className="w-full py-4 rounded-2xl bg-primary text-white font-bold hover:bg-primary/90 transition-all shadow-lg shadow-primary/20"
        >
          Sign In
        </button>
      </form>

      <div className="mt-8 pt-6 border-t border-slate-800 text-center text-sm text-slate-500">
        Need access? Contact your administrator.
      </div>
    </div>
  );
}
