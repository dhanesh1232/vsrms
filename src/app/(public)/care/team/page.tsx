import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Care Team",
  description: "Meet the qualified nursing staff and care trackers that make Care&Move the trusted choice for families.",
};

const staff = [
  { name: "Dr. Sunita Rao", role: "Lead Clinical Coordinator", since: "2022", specialisation: "Geriatric Care" },
  { name: "Nurse Priya Reddy", role: "Senior Care Tracker", since: "2022", specialisation: "Post-operative Care" },
  { name: "Nurse Kavitha Devi", role: "Field Care Specialist", since: "2023", specialisation: "Palliative Care" },
  { name: "Arjun Sharma", role: "Care Coordinator", since: "2023", specialisation: "Chronic Disease Management" },
  { name: "Nurse Meera Iyer", role: "Centre Care Lead", since: "2024", specialisation: "Paediatric Care" },
  { name: "Lakshmi Narayana", role: "Field Care Tracker", since: "2024", specialisation: "Physiotherapy Support" },
];

export default function CareTeamPage() {
  return (
    <div className="pt-20">
      <section className="section-padding bg-muted/30 border-b text-center">
        <div className="container-max max-w-3xl mx-auto">
          <span className="text-primary text-xs font-bold tracking-widest uppercase mb-4 block">Our People</span>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">The Hands Behind the Care</h1>
          <p className="text-muted-foreground text-lg">Every Care&Move care tracker is fully vetted, trained, and committed to delivering compassionate, professional support.</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {staff.map((member) => (
              <div key={member.name} className="card-premium rounded-3xl overflow-hidden group">
                <div className="h-48 bg-gradient-to-br from-primary/5 to-primary/20 flex items-center justify-center">
                  <div className="w-20 h-20 rounded-full bg-white shadow-lg flex items-center justify-center text-2xl font-black text-primary">
                    {member.name.charAt(0)}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-lg group-hover:text-primary transition-colors">{member.name}</h3>
                  <p className="text-primary text-sm font-medium mt-1">{member.role}</p>
                  <div className="mt-4 flex flex-col gap-1 text-xs text-muted-foreground">
                    <span>Specialisation: {member.specialisation}</span>
                    <span>With us since {member.since}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
