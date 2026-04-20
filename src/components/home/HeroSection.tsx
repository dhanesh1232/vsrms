"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

/* ─── Types ─────────────────────────────────────────────────── */
type HoveredPanel = "care" | "transport" | null;

/* ─── Inline SVG ─────────────────────────────────────────────── */
const ArrowRight = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M17 8l4 4m0 0l-4 4m4-4H3"
    />
  </svg>
);

/* ─── Stat data ──────────────────────────────────────────────── */
const stats = [
  { value: "500+", label: "Patients Served", accent: "text-blue-400" },
  { value: "50+", label: "Care Trackers", accent: "text-emerald-400" },
  { value: "100+", label: "Vehicle Bookings", accent: "text-orange-400" },
  { value: "3 Yrs", label: "In Service", accent: "text-purple-400" },
];

/* ─── Component ──────────────────────────────────────────────── */
export default function HeroSection() {
  const [hovered, setHovered] = useState<HoveredPanel>(null);

  // Width percentages for expand/collapse
  const careWidth =
    hovered === "care" ? "90%" : hovered === "transport" ? "10%" : "50%";
  const transportWidth =
    hovered === "transport" ? "90%" : hovered === "care" ? "10%" : "50%";

  return (
    <section className="relative min-h-screen bg-[#080D1A] pt-[68px] flex items-center overflow-hidden">
      {/* ── Background: saree woman, gradient overlay, blobs ── */}
      <div className="pointer-events-none absolute inset-0">
        {/* Saree woman — full-width landscape background */}
        <div className="absolute inset-0">
          <Image
            src="/hero-care-woman.png"
            alt="Elderly woman in saree standing beside trees"
            fill
            className="object-cover object-top"
            priority
            unoptimized
          />
          {/* Left gradient — only darkens the text column, image stays clear */}
          <div className="absolute inset-y-0 left-0 w-[60%] bg-gradient-to-r from-[#080D1A] via-[#080D1A]/55 to-transparent" />
          {/* Bottom fade into next section */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
        </div>
      </div>

      {/* ── Content ── */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-6 lg:px-12 w-full py-20 flex flex-col lg:flex-row items-center gap-16">
        {/* ── Left: Hero copy ── */}
        <div className="flex-1 text-center lg:text-left max-w-xl">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs font-semibold uppercase tracking-widest text-slate-400 mb-8 backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Care · Transport · Community
          </div>

          <h1
            className="text-5xl sm:text-6xl xl:text-[72px] text-white font-bold leading-[1.06] mb-6"
            style={{
              fontFamily: "var(--font-display)",
              letterSpacing: "-0.03em",
            }}
          >
            One Platform.
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
              Two Services.
            </span>
            <br />
            Complete Care.
          </h1>

          <p className="text-slate-400 text-lg xl:text-xl max-w-[500px] mb-10 leading-relaxed mx-auto lg:mx-0">
            Expert patient care and reliable vehicle booking — from one trusted
            platform in Andhra Pradesh.
          </p>

          <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
            <Link
              href="/care/plans"
              className="group inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-full font-bold text-base transition-all duration-300 shadow-xl shadow-blue-700/30 hover:-translate-y-0.5"
            >
              Explore Care Plans
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/transport/vehicles"
              className="inline-flex items-center gap-2 border border-white/20 hover:border-white/40 bg-white/5 hover:bg-white/10 text-white px-8 py-4 rounded-full font-bold text-base transition-all duration-300 backdrop-blur-sm"
            >
              Browse Vehicles
            </Link>
          </div>
        </div>

        {/* ── Right: Interactive split panel + stat cards ── */}
        <div className="hidden md:block flex-1 w-full relative">
          {/* Split image panel */}
          <div
            className="relative h-[420px] lg:h-[540px] rounded-3xl overflow-hidden shadow-2xl ring-1 ring-white/10 flex"
            // Remove pointer isolation so child onMouse events bubble up
          >
            {/* ── CARE panel ── */}
            <motion.div
              className="relative overflow-hidden cursor-pointer"
              animate={{ width: careWidth }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }} // smooth expo-like out
              style={{ flexShrink: 0 }}
              onMouseEnter={() => setHovered("care")}
              onMouseLeave={() => setHovered(null)}
            >
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDUfw5mXhkWh6mtzy2Orda5eRreBqhnQhu1_g421aTdBikxUNCRXJQF-rJpBUiz6zEgj_n7M6rynQ2Wew7F4bxiQwZ8SnwSbd4SINJzmxHaBUrLsiYV72elzW7dTp7lODnn5ZY_ID_FoJ2amEfu10Lxs74Dxe9rfgjvB1zqId09Qhnl7pgq1dUajcqSrr5PKv2upCm6FUY5RbO_JXgMWdBBErBzh2FuyjJWwVZ2uvLwbxxwAIuvKLKYx_3FyGQJgHeAieTYmVmTQ1UD"
                alt="Compassionate patient care"
                fill
                priority
                className="object-cover transition-transform duration-700"
                style={{
                  transform: hovered === "care" ? "scale(1.04)" : "scale(1)",
                }}
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-950/60 via-transparent to-transparent" />

              {/* Label — shown only when expanded or neutral */}
              <div
                className="absolute bottom-4 left-4 transition-opacity duration-300"
                style={{ opacity: hovered === "transport" ? 0 : 1 }}
              >
                <span className="text-[10px] font-bold uppercase tracking-widest text-blue-200 bg-blue-950/70 px-3 py-1.5 rounded-full backdrop-blur-sm border border-blue-500/20">
                  🏥 Patient Care
                </span>
              </div>

              {/* Expand hint */}
              {hovered === "care" && (
                <div className="absolute top-4 right-4">
                  <Link
                    href="/care"
                    className="text-[10px] font-bold uppercase tracking-widest text-white bg-blue-600/80 px-3 py-1.5 rounded-full backdrop-blur-sm border border-blue-400/30 hover:bg-blue-600 transition-colors"
                    onClick={(e) => e.stopPropagation()}
                  >
                    Explore Care →
                  </Link>
                </div>
              )}
            </motion.div>

            {/* Divider */}
            <div
              className="w-0.5 bg-white/15 shrink-0 self-stretch"
              style={{ transition: "opacity 0.3s", opacity: hovered ? 0.5 : 1 }}
            />

            {/* ── TRANSPORT panel ── */}
            <motion.div
              className="relative overflow-hidden cursor-pointer flex-1"
              animate={{ width: transportWidth }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }} // smooth expo-like out
              style={{ flexShrink: 0 }}
              onMouseEnter={() => setHovered("transport")}
              onMouseLeave={() => setHovered(null)}
            >
              <Image
                src="/hero-travel-cab.png"
                alt="Affordable standard tourist travel taxi"
                fill
                priority
                className="object-cover transition-transform duration-700"
                style={{
                  transform:
                    hovered === "transport" ? "scale(1.04)" : "scale(1)",
                }}
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-l from-orange-950/60 via-transparent to-transparent" />

              <div
                className="absolute bottom-4 right-4 transition-opacity duration-300"
                style={{ opacity: hovered === "care" ? 0 : 1 }}
              >
                <span className="text-[10px] font-bold uppercase tracking-widest text-orange-200 bg-orange-950/70 px-3 py-1.5 rounded-full backdrop-blur-sm border border-orange-500/20">
                  🚐 Vehicle Booking
                </span>
              </div>

              {hovered === "transport" && (
                <div className="absolute top-4 left-4">
                  <Link
                    href="/transport/vehicles"
                    className="text-[10px] font-bold uppercase tracking-widest text-white bg-orange-500/80 px-3 py-1.5 rounded-full backdrop-blur-sm border border-orange-400/30 hover:bg-orange-500 transition-colors"
                    onClick={(e) => e.stopPropagation()}
                  >
                    Browse Fleet →
                  </Link>
                </div>
              )}
            </motion.div>
          </div>

          {/* Floating stat cards */}
          <div className="grid grid-cols-2 gap-3 mt-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl px-5 py-4 flex flex-col"
              >
                <span className={`text-2xl font-bold ${stat.accent} font-mono`}>
                  {stat.value}
                </span>
                <span className="text-xs text-slate-500 font-medium mt-0.5 uppercase tracking-wider">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent pointer-events-none" />
    </section>
  );
}
