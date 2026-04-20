import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vehicle Catalogue",
  description:
    "Browse our verified fleet of vehicles available for medical transfers, logistics, and personal travel.",
};

const vehicles = [
  {
    id: "v1",
    name: "Toyota Innova Crysta",
    type: "SUV",
    area: "Tirupati",
    rate: "₹18/km",
    available: true,
  },
  {
    id: "v2",
    name: "Force Traveller Ambulance",
    type: "Specialty",
    area: "Tirupati & District",
    rate: "₹25/km",
    available: true,
  },
  {
    id: "v3",
    name: "Tata Ace Mini Truck",
    type: "Van",
    area: "Tirupati",
    rate: "₹14/km",
    available: false,
  },
  {
    id: "v4",
    name: "Mahindra Bolero",
    type: "SUV",
    area: "Chittor",
    rate: "₹16/km",
    available: true,
  },
  {
    id: "v5",
    name: "Ashok Leyland Bus (20-seat)",
    type: "Bus",
    area: "Inter-city",
    rate: "₹2,500/day",
    available: true,
  },
  {
    id: "v6",
    name: "Maruthi Swift Dzire",
    type: "Car",
    area: "Tirupati",
    rate: "₹12/km",
    available: true,
  },
];

export default function VehicleCataloguePage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="section-padding bg-slate-900 text-white">
        <div className="container-max">
          <span className="text-orange-400 text-xs font-bold tracking-widest uppercase mb-4 block">
            Our Fleet
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Browse Vehicles
          </h1>
          <p className="text-slate-400 max-w-2xl">
            All vehicles are verified, insured, and managed by vetted partners.
            Filter by type, area, and availability.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            {["All", "SUV", "Car", "Van", "Bus", "Specialty"].map((type) => (
              <button
                key={type}
                className={`px-5 py-2 rounded-full text-sm font-semibold border transition-all ${type === "All" ? "bg-orange-500 text-white border-orange-500" : "bg-transparent text-slate-400 border-slate-700 hover:border-orange-500 hover:text-orange-400"}`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="section-padding">
        <div className="container-max">
          <div className="flex items-center justify-between mb-8">
            <p className="text-muted-foreground text-sm">
              {vehicles.length} vehicles found
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {vehicles.map((v) => (
              <div
                key={v.id}
                className="card-premium rounded-3xl overflow-hidden group"
              >
                <div className="relative h-52 bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center">
                  <span className="text-6xl">🚐</span>
                  <span
                    className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold ${v.available ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}
                  >
                    {v.available ? "Available" : "Booked"}
                  </span>
                </div>
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="font-bold text-lg leading-tight group-hover:text-orange-500 transition-colors">
                        {v.name}
                      </h3>
                      <p className="text-muted-foreground text-sm mt-1">
                        {v.type} · {v.area}
                      </p>
                    </div>
                    <div className="text-xl font-black text-orange-500 font-mono">
                      {v.rate}
                    </div>
                  </div>
                  <div className="flex gap-3 mt-4">
                    <a
                      href={`/transport/vehicles/${v.id}`}
                      className="flex-1 py-3 border rounded-xl text-sm font-semibold text-center hover:border-orange-500 hover:text-orange-500 transition-colors"
                    >
                      View Details
                    </a>
                    {v.available && (
                      <a
                        href="/transport/book/step-1"
                        className="flex-1 py-3 bg-orange-500 text-white rounded-xl text-sm font-semibold text-center hover:bg-orange-600 transition-colors"
                      >
                        Book Now
                      </a>
                    )}
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
