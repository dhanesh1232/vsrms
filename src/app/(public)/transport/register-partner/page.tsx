import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Register as Vehicle Partner",
  description: "Join the Care&Move vehicle partner network. Free registration, admin-assigned jobs, and transparent earnings.",
};

export default function PartnerRegistrationPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="section-padding bg-slate-900 text-white border-b">
        <div className="container-max text-center max-w-3xl mx-auto">
          <span className="text-orange-400 text-xs font-bold tracking-widest uppercase mb-4 block">Partners</span>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Register as a Vehicle Partner</h1>
          <p className="text-slate-400 text-lg">Join our verified fleet network. Free registration. Admin-assigned jobs. Transparent earnings.</p>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 border-b">
        <div className="container-max grid grid-cols-1 md:grid-cols-3 gap-8">
          {[["🆓", "Free Registration", "No upfront cost or membership fee."], ["📋", "Admin-Assigned Jobs", "Jobs are assigned directly to you — no bidding."], ["💰", "Transparent Earnings", "Clear commission structure, paid on time."]].map(([icon, title, desc]) => (
            <div key={title} className="text-center p-6 card-premium rounded-3xl">
              <div className="text-4xl mb-4">{icon}</div>
              <h3 className="text-lg font-bold mb-2">{title}</h3>
              <p className="text-muted-foreground text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Form */}
      <section className="section-padding">
        <div className="container-max max-w-3xl mx-auto">
          <div className="card-premium rounded-3xl p-10 space-y-8">
            <h2 className="text-2xl font-bold">Partner Application Form</h2>

            {/* Owner Details */}
            <div>
              <h3 className="text-sm uppercase tracking-widest font-bold text-muted-foreground mb-4">Owner Details</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div><label className="block text-sm font-medium mb-2">Full Name *</label><input type="text" className="w-full px-4 py-3 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-orange-500/20" placeholder="Your full name" /></div>
                <div><label className="block text-sm font-medium mb-2">Business Name</label><input type="text" className="w-full px-4 py-3 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-orange-500/20" placeholder="Business / fleet name" /></div>
                <div><label className="block text-sm font-medium mb-2">Mobile *</label><input type="tel" className="w-full px-4 py-3 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-orange-500/20" placeholder="+91 98765 43210" /></div>
                <div><label className="block text-sm font-medium mb-2">Email *</label><input type="email" className="w-full px-4 py-3 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-orange-500/20" placeholder="you@example.com" /></div>
              </div>
            </div>

            {/* Vehicle Details */}
            <div>
              <h3 className="text-sm uppercase tracking-widest font-bold text-muted-foreground mb-4">Vehicle Details</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="col-span-2">
                  <label className="block text-sm font-medium mb-3">Vehicle Type *</label>
                  <div className="flex flex-wrap gap-3">
                    {["Car", "SUV/Van", "Bus", "Specialty"].map((t) => (
                      <label key={t} className="flex items-center gap-2 cursor-pointer">
                        <input type="radio" name="vehicleType" className="accent-orange-500" />
                        <span className="text-sm font-medium">{t}</span>
                      </label>
                    ))}
                  </div>
                </div>
                <div><label className="block text-sm font-medium mb-2">Make & Model *</label><input type="text" className="w-full px-4 py-3 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-orange-500/20" placeholder="e.g. Toyota Innova" /></div>
                <div><label className="block text-sm font-medium mb-2">Year *</label><input type="number" className="w-full px-4 py-3 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-orange-500/20" placeholder="2020" /></div>
                <div><label className="block text-sm font-medium mb-2">Capacity</label><input type="text" className="w-full px-4 py-3 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-orange-500/20" placeholder="e.g. 7 seats" /></div>
                <div><label className="block text-sm font-medium mb-2">Fuel Type</label><select className="w-full px-4 py-3 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-orange-500/20"><option>Diesel</option><option>Petrol</option><option>CNG</option><option>Electric</option></select></div>
              </div>
            </div>

            {/* Rate Details */}
            <div>
              <h3 className="text-sm uppercase tracking-widest font-bold text-muted-foreground mb-4">Rate Details</h3>
              <div className="grid grid-cols-2 gap-4">
                <div><label className="block text-sm font-medium mb-2">Rate Type</label><select className="w-full px-4 py-3 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-orange-500/20"><option>Per Km</option><option>Per Day</option></select></div>
                <div><label className="block text-sm font-medium mb-2">Rate (₹) *</label><input type="number" className="w-full px-4 py-3 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-orange-500/20" placeholder="18" /></div>
              </div>
            </div>

            {/* Documents */}
            <div>
              <h3 className="text-sm uppercase tracking-widest font-bold text-muted-foreground mb-4">Documents</h3>
              <div className="space-y-4">
                {[["RC Book *", "Upload RC document"], ["Vehicle Photos *", "Upload up to 5 photos (JPG/PNG)"], ["Driver Licence", "Optional"]].map(([label, hint]) => (
                  <div key={label} className="border-2 border-dashed rounded-2xl p-6 text-center cursor-pointer hover:border-orange-500 transition-colors bg-muted/20">
                    <div className="text-2xl mb-2">📎</div>
                    <div className="text-sm font-semibold">{label}</div>
                    <div className="text-xs text-muted-foreground mt-1">{hint} · Max 10MB</div>
                  </div>
                ))}
              </div>
            </div>

            <button type="submit" className="w-full py-5 rounded-2xl bg-orange-500 text-white font-bold text-lg hover:bg-orange-600 transition-all shadow-xl shadow-orange-500/20">
              Submit Registration →
            </button>
            <p className="text-xs text-muted-foreground text-center">By submitting, you agree to our <Link href="/terms" className="underline">Terms & Conditions</Link>.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
