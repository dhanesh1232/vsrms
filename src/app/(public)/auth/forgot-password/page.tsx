import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Forgot Password | Care&Move" };

export default function ForgotPasswordPage() {
  return (
    <div className="bg-slate-900 rounded-3xl border border-slate-800 p-8 shadow-2xl">
      <h1 className="text-2xl font-bold text-white mb-2">Reset Password</h1>
      <p className="text-slate-400 text-sm mb-8">Enter your email and we&apos;ll send a reset link.</p>
      <form className="space-y-5">
        <div>
          <label className="block text-sm font-medium text-slate-300 mb-2">Email Address</label>
          <input type="email" className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 text-white text-sm focus:outline-none focus:ring-2 focus:ring-primary/50" placeholder="you@caremove.in" />
        </div>
        <button type="submit" className="w-full py-4 rounded-2xl bg-primary text-white font-bold hover:bg-primary/90 transition-all">Send Reset Link</button>
      </form>
      <div className="mt-6 text-center"><Link href="/login" className="text-sm text-slate-400 hover:text-primary transition-colors">← Back to Sign In</Link></div>
    </div>
  );
}
