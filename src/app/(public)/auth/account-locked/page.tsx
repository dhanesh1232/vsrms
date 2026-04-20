import type { Metadata } from "next";
export const metadata: Metadata = { title: "Account Locked" };
export default function Page() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] space-y-4 text-center p-8">
      <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-2xl">🚧</div>
      <h1 className="text-2xl font-bold">Account Locked</h1>
      <div className="flex gap-2">
        <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold">All Users</span>
        <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-bold">Phase 1A</span>
      </div>
      <p className="text-muted-foreground text-sm max-w-sm">This screen is scheduled for implementation in Phase 1A. The route is registered and functional.</p>
    </div>
  );
}
