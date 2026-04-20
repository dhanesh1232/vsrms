import type { Metadata } from "next";
export const metadata: Metadata = { title: "Enquiry Detail" };
export default function Page() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] space-y-4 text-center p-8">
      <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-2xl">🚧</div>
      <h1 className="text-2xl font-bold">Enquiry Detail</h1>
      <p className="text-muted-foreground text-sm">Phase: 1A · Role: Care Admin</p>
      <p className="text-xs text-muted-foreground font-mono">/admin/enquiries/[id]</p>
    </div>
  );
}
