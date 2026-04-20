import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import HeroSection from "@/components/home/HeroSection";

export const metadata: Metadata = {
  title: "Care & Move — Professional Care & Vehicle Services",
  description:
    "Expert patient care and reliable vehicle booking — from one trusted platform. Seamlessly bridging the gap between healthcare and logistics.",
};

/* ─── Inline SVG icons (no external deps) ─────────────────────── */

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

const Check = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 20 20">
    <path
      fillRule="evenodd"
      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
      clipRule="evenodd"
    />
  </svg>
);

const Star = () => (
  <svg
    className="w-4 h-4 text-amber-400"
    fill="currentColor"
    viewBox="0 0 20 20"
  >
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

/* ─── Static Data ─────────────────────────────────────────────── */

const stats = [
  { value: "500+", label: "Patients Served", accent: "text-blue-400" },
  { value: "50+", label: "Care Trackers", accent: "text-emerald-400" },
  { value: "100+", label: "Vehicle Bookings", accent: "text-orange-400" },
  { value: "3 Yrs", label: "In Service", accent: "text-purple-400" },
];

const carePlansData = [
  {
    name: "Basic",
    badge: null,
    price: "₹4,999",
    sub: "/month",
    description:
      "Ideal for patients needing periodic check-ins and phone support.",
    features: [
      "Daily Health Check-in",
      "2 Home Visits Weekly",
      "24/7 Phone Support",
      "Monthly Progress Report",
    ],
    cta: "Get Started",
    variant: "outline" as const,
  },
  {
    name: "Standard",
    badge: "Most Popular",
    price: "₹8,999",
    sub: "/month",
    description:
      "Our most chosen plan — dedicated tracker, daily visits, pharmacy support.",
    features: [
      "2 Daily Check-ins",
      "Daily Home Visits",
      "Dedicated Health Portal",
      "Pharmacy Management",
      "Family Reports",
    ],
    cta: "Choose Standard",
    variant: "primary" as const,
  },
  {
    name: "Premium",
    badge: "Best Care",
    price: "₹14,999",
    sub: "/month",
    description:
      "Full-time medical oversight with 24/7 on-call nurse and specialist access.",
    features: [
      "24/7 On-Call Nurse",
      "Full Specialist Access",
      "Hospital Escort Service",
      "Advanced Care Planning",
      "Priority Support",
    ],
    cta: "Choose Premium",
    variant: "dark" as const,
  },
];

const transportSteps = [
  {
    step: "01",
    title: "Browse Fleet",
    desc: "Filter by vehicle type, capacity, and service area across our verified partner network.",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
    ),
  },
  {
    step: "02",
    title: "Set Route & Time",
    desc: "Pick exact pickup, drop, date and time. Round-trip or one-way, we cover it all.",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
  },
  {
    step: "03",
    title: "Secure Payment",
    desc: "Pay online via UPI, card, or netbanking through our Razorpay-powered checkout.",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      </svg>
    ),
  },
  {
    step: "04",
    title: "Partner Assigned",
    desc: "A verified partner and driver are assigned within 2 hours. You receive an email confirmation.",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10l2 2h9l2-2h1a2 2 0 002-2V9a1 1 0 00-.293-.707l-2-2A1 1 0 0015 6h-2"
        />
      </svg>
    ),
  },
];

const testimonials = [
  {
    quote:
      "Care & Move transformed how we handle my father's medical appointments. The nurses are exceptional and the logistics are always on time.",
    name: "Ananya Reddy",
    role: "Family Care Member · Tirupati",
    rating: 5,
    avatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuALolAi7f7Zf_2PwbxYYTkCaq0vof8EVKx4FharGBRMXwKfHfutcqMcBzd7HUu5229qqwo1epCb0DjK25ElQB2cboP9ccrKmzTvnBdi4tIlnRsk9Dlz_AQytZY5tKczpmVpt7_bgyoZve7fVq0ceCY5KT1lx-_-jaN7zt06Pkadkf5c-gdONZk7XudWcQS5p3hvAYYuTF-4FWArHjsPr7Ztmj5lSpqzLl8squcX--RfFDaKSJhK0oLf6YGdUbzQ9KYfduJTkmXoNyR4",
    vertical: "care" as const,
  },
  {
    quote:
      "The vehicle booking system cut our transport coordination time by 70%. We use it for every hospital run now — smooth, reliable, professional.",
    name: "Karthik M.",
    role: "Operations Manager · Chittoor",
    rating: 5,
    avatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDUfw5mXhkWh6mtzy2Orda5eRreBqhnQhu1_g421aTdBikxUNCRXJQF-rJpBUiz6zEgj_n7M6rynQ2Wew7F4bxiQwZ8SnwSbd4SINJzmxHaBUrLsiYV72elzW7dTp7lODnn5ZY_ID_FoJ2amEfu10Lxs74Dxe9rfgjvB1zqId09Qhnl7pgq1dUajcqSrr5PKv2upCm6FUY5RbO_JXgMWdBBErBzh2FuyjJWwVZ2uvLwbxxwAIuvKLKYx_3FyGQJgHeAieTYmVmTQ1UD",
    vertical: "transport" as const,
  },
  {
    quote:
      "From the first consultation to ongoing daily care, the team has been nothing but professional. I wouldn't trust anyone else with my mother's wellbeing.",
    name: "Priya Sharma",
    role: "Healthcare Coordinator · Nellore",
    rating: 5,
    avatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDnA-lFynwtDgs8tfHaiaERZe6WG5FEssdGBf0ExRZovtVQtMdLhmqPTRkh4J7YdJDnK7EgSN1SILp4nW-GPogikEBqEFKodUUSW4N94RwVz1z6tn6hf1Mxpe_fkG8LBZZuSzc2lscjFaKCOh4lnbq_HY_S0qNsDD0QzEmH6HdHe7NxTRPHjPcUejrwuiBp7KgNyw1WW4UtWLIgod-akVLXritpl7szZOByrpXPi3RGf167gXDkjVF6w2k-Cd70aZbC9R0uH3ssWl7d",
    vertical: "care" as const,
  },
];

const blogPosts = [
  {
    category: "Care Strategy",
    categoryClass: "bg-blue-100 text-blue-700",
    title: "The Future of Remote Patient Monitoring",
    excerpt:
      "How real-time vitals data is enabling better preventative care for patients at home.",
    date: "May 12, 2026",
    read: "5 min",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDUfw5mXhkWh6mtzy2Orda5eRreBqhnQhu1_g421aTdBikxUNCRXJQF-rJpBUiz6zEgj_n7M6rynQ2Wew7F4bxiQwZ8SnwSbd4SINJzmxHaBUrLsiYV72elzW7dTp7lODnn5ZY_ID_FoJ2amEfu10Lxs74Dxe9rfgjvB1zqId09Qhnl7pgq1dUajcqSrr5PKv2upCm6FUY5RbO_JXgMWdBBErBzh2FuyjJWwVZ2uvLwbxxwAIuvKLKYx_3FyGQJgHeAieTYmVmTQ1UD",
    slug: "future-remote-patient-monitoring",
  },
  {
    category: "Logistics",
    categoryClass: "bg-orange-100 text-orange-700",
    title: "Optimizing Medical Fleet Routes",
    excerpt:
      "A deep dive into the dispatching logic behind our zero-delay transport booking system.",
    date: "May 08, 2026",
    read: "8 min",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAciGxnT1WGzRrbQRjhLwiSx2pQsRiKYFCV2LWzhJ0wqhfEtdNX5Zuu55vfRv36T4NLCt79m8wU3lYvaSv2PialeaMu3vsEwLvBz4zXlUfjfyAIqAcYzuSchCKWACylUm12aORth3YSLgAk6L6nKr26gZYLuPRHGvV6L2pnDN49_zuzVnwWHdeEHJZvvoMtaitqdBUGBeUCwJLUbYZIX14uJx4IuheHE2jwdsIH0PsB9ikbQMW8FTSFTID_aP5wRZBuJpeEWeRiwJpq",
    slug: "optimizing-medical-fleet-routes",
  },
  {
    category: "Community",
    categoryClass: "bg-purple-100 text-purple-700",
    title: "Bridging the Gap: Care meets Move",
    excerpt:
      "How a unified platform approach is improving health outcomes in Andhra Pradesh.",
    date: "May 01, 2026",
    read: "6 min",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDnA-lFynwtDgs8tfHaiaERZe6WG5FEssdGBf0ExRZovtVQtMdLhmqPTRkh4J7YdJDnK7EgSN1SILp4nW-GPogikEBqEFKodUUSW4N94RwVz1z6tn6hf1Mxpe_fkG8LBZZuSzc2lscjFaKCOh4lnbq_HY_S0qNsDD0QzEmH6HdHe7NxTRPHjPcUejrwuiBp7KgNyw1WW4UtWLIgod-akVLXritpl7szZOByrpXPi3RGf167gXDkjVF6w2k-Cd70aZbC9R0uH3ssWl7d",
    slug: "bridging-gap-care-meets-move",
  },
];

/* ─── Page ────────────────────────────────────────────────────── */

export default function HomePage() {
  return (
    <div className="bg-white text-slate-900 overflow-x-hidden">
      {/* ═══════ HERO ═══════ */}
      <HeroSection />

      {/* ══════════════════════════════════════════
          INTRODUCTION & STATS
      ══════════════════════════════════════════ */}
      <section className="py-24 px-6 lg:px-12 max-w-7xl mx-auto text-center">
        <h2
          className="text-3xl md:text-5xl font-bold text-slate-900 mb-8 max-w-4xl mx-auto leading-tight"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Where Seniors Age with Dignity, Comfort, and Confidence
        </h2>
        <p className="text-slate-600 text-lg md:text-xl max-w-5xl mx-auto mb-16 leading-relaxed">
          At <span className="font-bold text-blue-600">Care & Move</span>, we
          provide geriatric-focused services with globally proven processes and
          international quality care backed by doctors and trained caregivers.
          Through a comprehensive range of services, we offer the right balance
          of independence, personalized care, and companionship to meet evolving
          needs.
        </p>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-y md:divide-y-0 md:divide-x divide-slate-100 border-t border-slate-100 pt-16">
          {[
            { value: "45k+", label: "Seniors Served", icon: "🤝" },
            { value: "100+", label: "Doctors", icon: "👨‍⚕️" },
            { value: "800+", label: "Trained Caregivers", icon: "❤️" },
            { value: "100+", label: "Staff Nurses", icon: "🏥" },
          ].map((stat, i) => (
            <div key={i} className="flex flex-col items-center pt-8 md:pt-0">
              <span className="text-4xl mb-4">{stat.icon}</span>
              <span className="text-4xl lg:text-5xl font-extrabold text-blue-600 font-mono mb-2">
                {stat.value}
              </span>
              <span className="text-sm font-bold uppercase tracking-wider text-slate-500">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════
          PREMIUM SERVICES GRID (ATHULYA STYLE)
      ══════════════════════════════════════════ */}
      <section id="care-section" className="bg-slate-50 py-24 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2
              className="text-4xl font-bold tracking-tight text-slate-900 mb-4"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Comprehensive Care Services
            </h2>
            <p className="text-slate-500 max-w-2xl mx-auto text-lg">
              Expert, compassionate care tailored to every stage of the aging
              journey.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Assisted Living",
                desc: "Thoughtfully designed for seniors who value their independence while appreciating the reassurance of professional support.",
                icon: "🏡",
                img: "https://images.unsplash.com/photo-1544027993-37dbfe43562a?auto=format&fit=crop&q=80&w=600",
              },
              {
                title: "Mind & Memory",
                desc: "Designed to support seniors living with Alzheimer’s and other forms of dementia through structured, compassionate care.",
                icon: "🧠",
                img: "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&q=80&w=600",
              },
              {
                title: "Transition Care",
                desc: "Support for seniors as they move safely from hospital to home, ensuring continuity of care during a crucial recovery phase.",
                icon: "🛏️",
                img: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&q=80&w=600",
              },
              {
                title: "Rehabilitation Care",
                desc: "Expert therapy and physical recovery management following hospitalization or managing a mobility health ailment.",
                icon: "♿",
                img: "https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&q=80&w=600",
              },
              {
                title: "Palliative Care",
                desc: "A profound commitment to enrich the lives of seniors, offering comfort-focused care and emotional support.",
                icon: "🕊️",
                img: "https://images.unsplash.com/photo-1516841273335-e39b37888115?auto=format&fit=crop&q=80&w=600",
              },
              {
                title: "Home Health Care",
                desc: "Services focused on helping seniors recover and regain independence after surgery or illness, all from the comfort of home.",
                icon: "🏠",
                img: "https://images.unsplash.com/photo-1584516150909-c43483ee7932?auto=format&fit=crop&q=80&w=600",
              },
            ].map((service, i) => (
              <Link
                href="/care/enquiry"
                key={i}
                className="group flex flex-col bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-100 ring-1 ring-black/5 hover:-translate-y-2"
              >
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={service.img}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
                  <div className="absolute bottom-4 left-6 text-4xl shadow-sm">
                    {service.icon}
                  </div>
                </div>
                <div className="p-8 flex flex-col flex-1">
                  <h3
                    className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {service.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-6 flex-1">
                    {service.desc}
                  </p>
                  <div className="flex items-center gap-2 text-sm font-bold text-blue-600">
                    Enquire Now{" "}
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          HOW TRANSPORT WORKS
      ══════════════════════════════════════════ */}
      <section id="transport-section" className="py-24 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs font-bold uppercase tracking-widest text-orange-500 mb-3">
              How It Works
            </p>
            <h2 className="text-4xl font-bold tracking-tight mb-4">
              Book a Vehicle in 4 Steps
            </h2>
            <p className="text-slate-500 max-w-md mx-auto text-sm">
              From browsing our verified fleet to confirmed booking — the entire
              process takes under 5 minutes.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
            {transportSteps.map((s, i) => (
              <div
                key={s.step}
                className="group relative bg-white border border-slate-100 rounded-3xl p-7 shadow-sm hover:shadow-xl hover:border-orange-200 transition-all duration-300 hover:-translate-y-1"
              >
                {/* Step number badge */}
                <span className="absolute top-5 right-5 text-xs font-mono font-bold text-slate-300">
                  {s.step}
                </span>
                {/* Connector dot (hidden on last) */}
                {i < transportSteps.length - 1 && (
                  <div className="absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-px bg-orange-200 hidden lg:block" />
                )}
                <div className="w-14 h-14 rounded-2xl bg-orange-50 group-hover:bg-orange-500 text-orange-500 group-hover:text-white flex items-center justify-center mb-5 transition-all duration-300 shadow-sm">
                  {s.icon}
                </div>
                <h5 className="text-base font-bold mb-2 group-hover:text-orange-600 transition-colors">
                  {s.title}
                </h5>
                <p className="text-xs text-slate-500 leading-relaxed">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/transport/vehicles"
              className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-400 text-white px-10 py-4 rounded-full font-bold text-base transition-all shadow-xl shadow-orange-500/20 hover:-translate-y-0.5"
            >
              Browse Vehicles Now <ArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          PARTNER TRUST STRIP
      ══════════════════════════════════════════ */}
      <div className="border-y border-slate-100 bg-slate-50 py-8 px-6">
        <div className="max-w-5xl mx-auto flex flex-wrap items-center justify-center gap-12">
          <span className="text-xs font-bold uppercase tracking-widest text-slate-400">
            Powered by
          </span>
          {[
            { name: "Razorpay", desc: "Payments" },
            { name: "AWS SES", desc: "Email Delivery" },
            { name: "Cloudflare R2", desc: "Document Storage" },
            { name: "Next.js 15", desc: "Platform" },
          ].map((p) => (
            <div key={p.name} className="flex flex-col items-center gap-1">
              <span className="text-sm font-bold text-slate-700">{p.name}</span>
              <span className="text-xs text-slate-400">{p.desc}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ══════════════════════════════════════════
          LOCATIONS STRIP
      ══════════════════════════════════════════ */}
      <section className="border-t border-slate-100 bg-white py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-6 justify-center">
          <span className="text-xs font-bold uppercase tracking-widest text-slate-400 shrink-0">
            Our Care Communities
          </span>
          <div className="flex flex-wrap items-center justify-center gap-2">
            {[
              "Bengaluru",
              "Chennai",
              "Coimbatore",
              "Hyderabad",
              "Kochi",
              "Visakhapatnam",
              "Vijayawada",
            ].map((loc) => (
              <span
                key={loc}
                className="px-5 py-2.5 rounded-full bg-slate-50 text-slate-600 text-sm font-semibold border border-slate-200 hover:bg-blue-50 hover:text-blue-600 hover:border-blue-200 transition-colors cursor-pointer"
              >
                {loc}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          HAPPY HEALTHY SAFE BANNER
      ══════════════════════════════════════════ */}
      <section className="bg-blue-600 py-24 px-6 lg:px-12 relative overflow-hidden">
        {/* Glow */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-500 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3" />

        <div className="max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex-1">
            <h2
              className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Happy, Healthy &<br />
              Safe Aging
            </h2>
            <p className="text-blue-100 text-lg max-w-xl mb-12 leading-relaxed">
              Experience a vibrant community life where clinical excellence
              meets premium hospitality. With 60+ senior-first protocols, 24/7
              nursing, and emergency call systems.
            </p>
            <div className="flex flex-wrap gap-x-12 gap-y-6">
              {[
                { val: "60+", label: "Senior-first features" },
                { val: "1.5K+", label: "Beds" },
                { val: "24/7", label: "Nursing Care" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-3xl font-bold text-white mb-1 font-mono">
                    {stat.val}
                  </div>
                  <div className="text-xs font-bold uppercase tracking-widest text-blue-200">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-3xl p-8 max-w-sm w-full shadow-2xl shrink-0 border border-blue-100">
            <h3 className="text-2xl font-bold text-slate-900 mb-2">
              Speak to an Expert
            </h3>
            <p className="text-slate-500 text-sm mb-6 leading-relaxed">
              Our care counselors are available to guide you through our
              services.
            </p>

            <Link
              href="/care/enquiry"
              className="flex items-center justify-center w-full bg-slate-900 hover:bg-blue-600 text-white rounded-xl py-4 font-bold text-sm transition-all mb-3 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              Request a Callback
            </Link>
            <a
              href="tel:+918000000000"
              className="flex items-center justify-center w-full border border-slate-200 hover:bg-slate-50 hover:border-slate-300 text-slate-700 rounded-xl py-4 font-bold text-sm transition-all hover:-translate-y-0.5"
            >
              Call Us: +91 80000 00000
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
