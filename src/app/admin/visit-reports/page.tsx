import type { Metadata } from "next";
export const metadata: Metadata = { title: "Visit Reports" };
export default function Page() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] space-y-4 text-center p-8">
      <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-2xl">🚧</div>
      <h1 className="text-2xl font-bold">Visit Reports</h1>
      <div className="flex gap-2">
        <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold">Care Admin</span>
        <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-bold">Phase 1B</span>
      </div>
    </div>
  );
}
