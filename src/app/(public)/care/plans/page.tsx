import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Care Plans & Pricing",
  description: "Transparent care plan pricing — Basic, Standard, and Premium monthly packages tailored to every patient's needs.",
};

const plans = [
  {
    name: "Basic",
    price: "₹4,999",
    period: "/month",
    highlight: false,
    description: "Ideal for patients needing occasional monitoring and support.",
    features: [
      "4 Centre visits / month",
      "Monthly health assessment",
      "Basic medication tracking",
      "Emergency contact support",
      "Care plan document",
    ],
  },
  {
    name: "Standard",
    price: "₹8,999",
    period: "/month",
    highlight: true,
    description: "Comprehensive care with regular field visits and dedicated tracker.",
    features: [
      "8 Centre + 4 Field visits / month",
      "Dedicated care tracker assigned",
      "Bi-weekly health assessments",
      "Full medication management",
      "Family status reports",
      "Priority emergency support",
    ],
  },
  {
    name: "Premium",
    price: "₹14,999",
    period: "/month",
    highlight: false,
    description: "Full-service care with daily support for complex medical needs.",
    features: [
      "Unlimited Centre visits",
      "Daily field/home visits",
      "24/7 emergency escalation",
      "Multi-tracker coordination",
      "Transport included (4 trips/mo)",
      "Specialist consultation support",
      "Monthly billing report",
    ],
  },
];

export default function CarePlansPage() {
  return (
    <div className="pt-20">
      {/* Header */}
      <section className="section-padding bg-muted/30 border-b text-center">
        <div className="container-max max-w-3xl mx-auto">
          <span className="text-primary text-xs font-bold tracking-widest uppercase mb-4 block">Care Plans</span>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Transparent Pricing. Real Care.</h1>
          <p className="text-muted-foreground text-lg">Every plan includes a dedicated care tracker, digital health records, and family reporting. No hidden fees.</p>
        </div>
      </section>

      {/* Plans */}
      <section className="section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            {plans.map((plan) => (
              <div key={plan.name} className={`rounded-3xl p-8 border ${plan.highlight ? "bg-primary text-white border-primary shadow-2xl shadow-primary/20 scale-105" : "bg-white border-border"}`}>
                <div className={`text-xs font-bold tracking-widest uppercase mb-4 ${plan.highlight ? "text-blue-200" : "text-primary"}`}>{plan.name}</div>
                <div className="flex items-end gap-1 mb-2">
                  <span className="text-4xl font-black">{plan.price}</span>
                  <span className={`text-sm mb-1 ${plan.highlight ? "text-blue-200" : "text-muted-foreground"}`}>{plan.period}</span>
                </div>
                <p className={`text-sm mb-8 leading-relaxed ${plan.highlight ? "text-blue-100" : "text-muted-foreground"}`}>{plan.description}</p>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((f) => (
                    <li key={f} className={`flex items-center gap-3 text-sm ${plan.highlight ? "text-blue-50" : "text-muted-foreground"}`}>
                      <span className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 text-xs ${plan.highlight ? "bg-white/20 text-white" : "bg-primary/10 text-primary"}`}>✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <a href="/care/enquiry" className={`block w-full py-4 rounded-2xl font-bold text-center transition-all ${plan.highlight ? "bg-white text-primary hover:bg-blue-50" : "bg-primary text-white hover:bg-primary/90 shadow-lg shadow-primary/20"}`}>
                  Get Started
                </a>
              </div>
            ))}
          </div>
          <p className="text-center text-muted-foreground text-sm mt-12">All plans billed monthly. Cancel anytime. Contact us for annual discounts.</p>
        </div>
      </section>
    </div>
  );
}
