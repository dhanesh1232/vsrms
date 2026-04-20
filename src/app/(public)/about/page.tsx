import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about Care&Move — our mission to integrate professional healthcare management with a premium vehicle marketplace.",
};

const milestones = [
  { year: "2022", title: "Founded", desc: "Care&Move was founded with a clear mission: make quality care and transport accessible to all." },
  { year: "2023", title: "Care Vertical Launch", desc: "Launched the care organisation management system with 50 founding patients." },
  { year: "2024", title: "Transport Network", desc: "Onboarded 100+ vehicle partners across 8 cities." },
  { year: "2025", title: "Platform Unification", desc: "Unified both verticals under a single platform. 500+ patients. 1,200+ monthly trips." },
];

export default function AboutPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="section-padding bg-slate-950 text-white">
        <div className="container-max text-center max-w-4xl mx-auto">
          <span className="text-primary text-xs font-bold tracking-widest uppercase mb-4 block">About Care&Move</span>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Built to Care.<br />Built to Move.
          </h1>
          <p className="text-xl text-slate-400 leading-relaxed">
            Care&Move is a dual-vertical platform combining a professional care organisation management system
            with a vehicle booking marketplace — under one unified interface.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="section-padding border-b">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                To digitise and professionalise healthcare and transport logistics for organisations
                that serve patients and communities in Andhra Pradesh and beyond.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We believe that reliable care and reliable transport should be available to everyone —
                and that the systems enabling them should be modern, transparent, and easy to operate.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Values</h2>
              <ul className="space-y-4">
                {["Compassion First", "Transparency in Operations", "Technology for Good", "Local Excellence"].map((v) => (
                  <li key={v} className="flex items-center gap-3 text-muted-foreground">
                    <span className="w-2 h-2 rounded-full bg-primary inline-block shrink-0" />
                    {v}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="section-padding bg-muted/30">
        <div className="container-max">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Journey</h2>
          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-border hidden md:block" />
            <div className="space-y-12">
              {milestones.map((m, i) => (
                <div key={m.year} className={`flex flex-col md:flex-row gap-8 md:items-center ${i % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                  <div className="flex-1 md:text-right">
                    {i % 2 === 0 && <div className="p-6 card-premium rounded-2xl"><h3 className="font-bold text-lg mb-2">{m.title}</h3><p className="text-muted-foreground text-sm">{m.desc}</p></div>}
                  </div>
                  <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center text-white font-bold text-sm shrink-0 mx-auto md:mx-0 relative z-10">
                    {m.year.slice(2)}
                  </div>
                  <div className="flex-1">
                    {i % 2 !== 0 && <div className="p-6 card-premium rounded-2xl"><h3 className="font-bold text-lg mb-2">{m.title}</h3><p className="text-muted-foreground text-sm">{m.desc}</p></div>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
