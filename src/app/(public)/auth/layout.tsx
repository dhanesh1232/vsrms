import React from "react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Sign In | Care&Move" };

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <Link href="/" className="flex items-center justify-center gap-3 mb-10">
          <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white font-black text-lg">C</div>
          <div className="flex flex-col">
            <span className="font-bold text-lg text-white leading-none">Care&Move</span>
            <span className="text-[10px] text-slate-500 uppercase tracking-widest">VSRMS</span>
          </div>
        </Link>
        {children}
      </div>
    </div>
  );
}
