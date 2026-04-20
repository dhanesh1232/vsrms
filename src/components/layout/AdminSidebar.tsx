"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Users,
  Shield,
  FileText,
  BarChart2,
  Settings,
  ClipboardList,
  UserCheck,
  Calendar,
  Activity,
  Truck,
  Package,
  DollarSign,
  MessageSquare,
  Star,
  Globe,
  Mail,
  ChevronDown,
} from "lucide-react";
import { cn } from "@/lib/utils";

type NavSection = {
  label: string;
  items: {
    name: string;
    href: string;
    icon: React.ElementType;
    phase?: string;
  }[];
};

const navSections: NavSection[] = [
  {
    label: "Platform",
    items: [
      { name: "Dashboard", href: "/admin/dashboard", icon: LayoutDashboard },
      { name: "Analytics", href: "/admin/analytics", icon: BarChart2 },
      {
        name: "Notifications",
        href: "/admin/notifications-center",
        icon: MessageSquare,
      },
    ],
  },
  {
    label: "Care Vertical",
    items: [
      { name: "Enquiries", href: "/admin/enquiries", icon: ClipboardList },
      { name: "Patients", href: "/admin/patients", icon: Users },
      { name: "Care Plans", href: "/admin/care-plans", icon: FileText },
      {
        name: "Billing",
        href: "/admin/billing",
        icon: DollarSign,
        phase: "1B",
      },
      {
        name: "Scheduling",
        href: "/admin/scheduling",
        icon: Calendar,
        phase: "1B",
      },
      {
        name: "Visit Reports",
        href: "/admin/visit-reports",
        icon: Activity,
        phase: "1B",
      },
      {
        name: "Care Team",
        href: "/admin/care-team",
        icon: UserCheck,
        phase: "1B",
      },
    ],
  },
  {
    label: "Transport Vertical",
    items: [
      { name: "Bookings", href: "/admin/bookings", icon: Truck, phase: "1B" },
      { name: "Partners", href: "/admin/partners", icon: Package, phase: "1B" },
      { name: "Drivers", href: "/admin/drivers", icon: Users, phase: "1C" },
      { name: "Vehicles", href: "/admin/vehicles", icon: Truck, phase: "1B" },
      {
        name: "Disputes",
        href: "/admin/disputes",
        icon: MessageSquare,
        phase: "1C",
      },
      {
        name: "Revenue",
        href: "/admin/revenue",
        icon: DollarSign,
        phase: "1C",
      },
      { name: "Ratings", href: "/admin/ratings", icon: Star, phase: "1C" },
    ],
  },
  {
    label: "Finance",
    items: [
      {
        name: "Invoices",
        href: "/admin/finance/invoices",
        icon: FileText,
        phase: "1C",
      },
      {
        name: "Payouts",
        href: "/admin/finance/payouts",
        icon: DollarSign,
        phase: "1C",
      },
    ],
  },
  {
    label: "Content & SEO",
    items: [
      { name: "Content Manager", href: "/admin/content", icon: Globe },
      { name: "Email Templates", href: "/admin/email-templates", icon: Mail },
      { name: "SEO & Analytics", href: "/admin/seo", icon: BarChart2 },
    ],
  },
  {
    label: "Super Admin",
    items: [
      { name: "Users", href: "/admin/users", icon: Users },
      { name: "Roles & Permissions", href: "/admin/roles", icon: Shield },
      { name: "Audit Log", href: "/admin/audit-log", icon: FileText },
      {
        name: "System Health",
        href: "/admin/system-health",
        icon: Activity,
        phase: "1C",
      },
      {
        name: "Data Export",
        href: "/admin/data-export",
        icon: ClipboardList,
        phase: "1C",
      },
      { name: "Settings", href: "/admin/settings", icon: Settings },
    ],
  },
];

export default function AdminSidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 bg-slate-900 flex flex-col shrink-0 min-h-screen">
      {/* Logo */}
      <div className="h-16 flex items-center px-6 border-b border-slate-800">
        <Link href="/admin/dashboard" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white font-black text-sm">
            C
          </div>
          <div className="flex flex-col leading-none">
            <span className="text-sm font-bold text-white">VSRMS</span>
            <span className="text-[9px] text-slate-500 uppercase tracking-widest">
              Admin
            </span>
          </div>
        </Link>
      </div>

      {/* Nav */}
      <nav className="flex-1 overflow-y-auto py-4 px-3 space-y-6">
        {navSections.map((section) => (
          <div key={section.label}>
            <h4 className="px-3 mb-2 text-[10px] uppercase tracking-widest font-bold text-slate-500">
              {section.label}
            </h4>
            <ul className="space-y-0.5">
              {section.items.map((item) => {
                const isActive =
                  pathname === item.href ||
                  pathname.startsWith(item.href + "/");
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={cn(
                        "flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all group",
                        isActive
                          ? "bg-white/10 text-white border-l-[3px] border-primary ml-0 pl-[9px]"
                          : "text-slate-400 hover:text-white hover:bg-white/5",
                      )}
                    >
                      <item.icon
                        className={cn(
                          "w-4 h-4 shrink-0",
                          isActive
                            ? "text-primary"
                            : "text-slate-500 group-hover:text-slate-300",
                        )}
                      />
                      <span className="grow">{item.name}</span>
                      {item.phase && (
                        <span
                          className={cn(
                            "text-[9px] px-1.5 py-0.5 rounded font-bold",
                            item.phase === "1C"
                              ? "bg-slate-700 text-slate-400"
                              : "bg-primary/20 text-primary",
                          )}
                        >
                          {item.phase}
                        </span>
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-slate-800">
        <Link
          href="/"
          className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm text-slate-400 hover:text-white hover:bg-white/5 transition-all"
        >
          <Globe className="w-4 h-4" />
          View Public Site
        </Link>
      </div>
    </aside>
  );
}
