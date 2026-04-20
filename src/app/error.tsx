"use client";

import Link from "next/link";

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center p-8 text-center">
      <div className="max-w-lg space-y-6">
        <div className="text-[8rem] font-black text-slate-800 leading-none">
          500
        </div>
        <h1 className="text-3xl font-bold text-white">Something Went Wrong</h1>
        <p className="text-slate-400">
          An unexpected error occurred on our servers. Our team has been
          notified.
        </p>
        <p className="text-xs text-slate-600 font-mono">{error.message}</p>
        <div className="flex gap-4 justify-center">
          <button
            onClick={reset}
            className="px-8 py-4 bg-primary text-white rounded-2xl font-bold hover:bg-primary/90 transition-all"
          >
            Try Again
          </button>
          <Link
            href="/"
            className="px-8 py-4 bg-slate-800 text-white rounded-2xl font-bold hover:bg-slate-700 transition-all"
          >
            Go Home
          </Link>
        </div>
      </div>
    </div>
  );
}
