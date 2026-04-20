import React from "react";
import Link from "next/link";
import { ArrowRight, Star } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#080D1A] pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 pb-14 border-b border-white/8">
          {/* Brand */}
          <div>
            <div
              className="text-2xl font-bold text-white mb-4"
              style={{ fontFamily: "var(--font-display)" }}
            >
              VSRMS
            </div>
            <p className="text-sm text-slate-500 max-w-xs mb-6 leading-relaxed">
              Professional healthcare management and verified vehicle booking —
              unified on one trusted platform. Serving Andhra Pradesh since
              2023.
            </p>
            <div className="flex items-center gap-1 mb-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-4 h-4 text-yellow-400 fill-yellow-400"
                />
              ))}
            </div>
            <p className="text-xs text-slate-600">
              Rated 4.9/5 by 120+ clients
            </p>
          </div>

          {/* Care */}
          <div>
            <h5 className="text-blue-400 font-bold mb-5 uppercase tracking-widest text-[10px]">
              Care Services
            </h5>
            <ul className="space-y-3">
              {[
                ["Care Home", "/care"],
                ["Care Plans & Pricing", "/care/plans"],
                ["Our Care Team", "/care/team"],
                ["Patient Enquiry", "/care/enquiry"],
                ["Patient Portal", "/patient/login"],
              ].map(([label, href]) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-slate-500 hover:text-white text-sm transition-colors duration-200 flex items-center gap-1.5 group"
                  >
                    <span className="w-0 group-hover:w-2 h-px bg-blue-400 transition-all duration-200 inline-block" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Transport */}
          <div>
            <h5 className="text-orange-400 font-bold mb-5 uppercase tracking-widest text-[10px]">
              Transport
            </h5>
            <ul className="space-y-3">
              {[
                ["Transport Home", "/transport"],
                ["Browse Vehicles", "/transport/vehicles"],
                ["Book a Vehicle", "/transport/book/step-1"],
                ["Partner Registration", "/transport/register-partner"],
                ["About Transport", "/transport/about"],
              ].map(([label, href]) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-slate-500 hover:text-white text-sm transition-colors duration-200 flex items-center gap-1.5 group"
                  >
                    <span className="w-0 group-hover:w-2 h-px bg-orange-400 transition-all duration-200 inline-block" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company + Newsletter */}
          <div>
            <h5 className="text-slate-400 font-bold mb-5 uppercase tracking-widest text-[10px]">
              Company
            </h5>
            <ul className="space-y-3 mb-8">
              {[
                ["About Us", "/about"],
                ["Blog", "/blog"],
                ["Contact", "/contact"],
                ["Login", "/login"],
              ].map(([label, href]) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-slate-500 hover:text-white text-sm transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
            {/* Newsletter */}
            <p className="text-xs text-slate-500 mb-3">
              Get care & transport updates
            </p>
            <div className="relative">
              <input
                type="email"
                className="w-full bg-white/5 border border-white/10 rounded-full px-5 py-3 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                placeholder="your@email.com"
              />
              <button className="absolute right-1.5 top-1/2 -translate-y-1/2 bg-blue-600 hover:bg-blue-500 text-white w-8 h-8 rounded-full flex items-center justify-center transition-colors">
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8">
          <p className="text-xs text-slate-600">
            © 2026 VSRMS · ECODrIx Solutions · Tirupati, Andhra Pradesh
          </p>
          <div className="flex gap-6 text-xs text-slate-600">
            <Link
              href="/privacy"
              className="hover:text-slate-300 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="hover:text-slate-300 transition-colors"
            >
              Terms of Service
            </Link>
            <Link
              href="/contact"
              className="hover:text-slate-300 transition-colors"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
