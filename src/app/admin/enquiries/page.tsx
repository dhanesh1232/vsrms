"use client";

import React, { useEffect, useState } from "react";
import {
  Search,
  Filter,
  MoreVertical,
  CheckCircle,
  Clock,
  XCircle,
  Mail,
  Phone,
  ArrowUpRight,
  Loader2,
  Heart,
  Truck,
} from "lucide-react";
import { cn } from "@/lib/utils";
import AdminLayout from "@/components/layout/AdminLayout";

type Enquiry = {
  _id: string;
  name: string;
  email: string;
  phone: string;
  type: string;
  message: string;
  status: string;
  createdAt: string;
};

export default function AdminEnquiriesPage() {
  const [enquiries, setEnquiries] = useState<Enquiry[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEnquiries = async () => {
      try {
        const res = await fetch("/api/enquiries");
        const data = await res.json();
        setEnquiries(data);
      } catch (err) {
        console.error("Fetch error:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchEnquiries();
  }, []);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "pending":
        return "bg-yellow-100 text-yellow-700 border-yellow-200";
      case "contacted":
        return "bg-blue-100 text-blue-700 border-blue-200";
      case "converted":
        return "bg-green-100 text-green-700 border-green-200";
      case "rejected":
        return "bg-red-100 text-red-700 border-red-200";
      default:
        return "bg-gray-100 text-gray-700 border-gray-200";
    }
  };

  return (
    <AdminLayout>
      <div className="flex flex-col gap-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Enquiries</h1>
            <p className="text-muted-foreground mt-1">
              Manage incoming Patient and Transport requests.
            </p>
          </div>
          <div className="flex gap-3">
            <button className="flex items-center gap-2 px-4 py-2 border rounded-xl bg-card hover:bg-muted transition-colors font-medium">
              <Filter className="w-4 h-4" /> Filter
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-xl transition-all hover:shadow-lg font-bold">
              Export CSV
            </button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            {
              label: "Total Enquiries",
              value: enquiries.length,
              icon: MessageSquare,
              color: "text-blue-500",
            },
            {
              label: "Pending",
              value: enquiries.filter((e) => e.status === "pending").length,
              icon: Clock,
              color: "text-yellow-500",
            },
            {
              label: "Contacted",
              value: enquiries.filter((e) => e.status === "contacted").length,
              icon: CheckCircle,
              color: "text-green-500",
            },
            {
              label: "Avg Range (24h)",
              value: "18m",
              icon: Clock,
              color: "text-purple-500",
            },
          ].map((stat, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-card border flex items-center justify-between"
            >
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1">
                  {stat.label}
                </p>
                <h3 className="text-2xl font-bold">{stat.value}</h3>
              </div>
              <div className={cn("p-3 rounded-xl bg-muted/50", stat.color)}>
                <stat.icon className="w-6 h-6" />
              </div>
            </div>
          ))}
        </div>

        {/* Search & Table */}
        <div className="bg-card border rounded-[2rem] overflow-hidden premium-shadow">
          <div className="p-6 border-b flex flex-col sm:flex-row gap-4 justify-between">
            <div className="relative group max-w-md w-full">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground group-focus-within:text-primary transition-colors" />
              <input
                placeholder="Search by name, email or phone..."
                className="w-full pl-11 pr-4 py-2.5 rounded-xl border bg-muted/20 outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
              />
            </div>
          </div>

          <div className="overflow-x-auto">
            {loading ? (
              <div className="p-20 text-center flex flex-col items-center gap-4 text-muted-foreground">
                <Loader2 className="w-8 h-8 animate-spin" />
                Updating Enquiry Database...
              </div>
            ) : enquiries.length === 0 ? (
              <div className="p-20 text-center flex flex-col items-center gap-4 text-muted-foreground">
                <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center">
                  <MessageSquare className="w-8 h-8 opacity-20" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground">
                    No Enquiries Found
                  </h3>
                  <p className="text-sm">
                    When users submit the enquiry form, they will appear here.
                  </p>
                </div>
              </div>
            ) : (
              <table className="w-full border-collapse">
                <thead className="bg-muted/30">
                  <tr className="text-left text-xs uppercase tracking-widest text-muted-foreground">
                    <th className="px-6 py-4 font-bold">Patient / Requester</th>
                    <th className="px-6 py-4 font-bold">Type</th>
                    <th className="px-6 py-4 font-bold">Status</th>
                    <th className="px-6 py-4 font-bold">Submitted At</th>
                    <th className="px-6 py-4 font-bold text-right text-transparent">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  {enquiries.map((enquiry) => (
                    <tr
                      key={enquiry._id}
                      className="hover:bg-muted/20 transition-colors group"
                    >
                      <td className="px-6 py-4">
                        <div className="flex flex-col">
                          <span className="font-bold text-foreground">
                            {enquiry.name}
                          </span>
                          <span className="text-xs text-muted-foreground flex items-center gap-1">
                            <Mail className="w-3 h-3" /> {enquiry.email}
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span
                          className={cn(
                            "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border",
                            enquiry.type === "care"
                              ? "bg-red-50 text-red-600 border-red-100"
                              : "bg-blue-50 text-blue-600 border-blue-100",
                          )}
                        >
                          {enquiry.type === "care" ? (
                            <Heart className="w-2.5 h-2.5" />
                          ) : (
                            <Truck className="w-2.5 h-2.5" />
                          )}
                          {enquiry.type}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <span
                          className={cn(
                            "px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border",
                            getStatusColor(enquiry.status),
                          )}
                        >
                          {enquiry.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm text-muted-foreground">
                        {new Date(enquiry.createdAt).toLocaleDateString(
                          "en-IN",
                          {
                            day: "2-digit",
                            month: "short",
                            year: "numeric",
                            hour: "2-digit",
                            minute: "2-digit",
                          },
                        )}
                      </td>
                      <td className="px-6 py-4 text-right">
                        <button className="p-2 rounded-lg bg-muted text-muted-foreground hover:bg-foreground hover:text-white transition-all">
                          <ArrowUpRight className="w-4 h-4" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}

// Simple Icon fallback within the file to avoid import issues if not explicitly installed correctly
function MessageSquare({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
    </svg>
  );
}
