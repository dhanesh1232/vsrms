import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Page Not Found | Care&Move" };

export default function NotFound() {
  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center p-8 text-center">
      <div className="max-w-lg space-y-6">
        <div className="text-[8rem] font-black text-slate-800 leading-none">404</div>
        <h1 className="text-3xl font-bold text-white">Page Not Found</h1>
        <p className="text-slate-400">The page you&apos;re looking for doesn&apos;t exist or has been moved.</p>
        <div className="flex gap-4 justify-center">
          <Link href="/" className="px-8 py-4 bg-primary text-white rounded-2xl font-bold hover:bg-primary/90 transition-all">Go Home</Link>
          <Link href="/contact" className="px-8 py-4 bg-slate-800 text-white rounded-2xl font-bold hover:bg-slate-700 transition-all">Contact Us</Link>
        </div>
      </div>
    </div>
  );
}
