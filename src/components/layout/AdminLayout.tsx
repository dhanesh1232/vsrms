import React from "react";
import AdminSidebar from "./AdminSidebar";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex bg-muted/20 min-h-screen">
      <AdminSidebar />
      <main className="grow p-8 overflow-x-hidden">{children}</main>
    </div>
  );
}
