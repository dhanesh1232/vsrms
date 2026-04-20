import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Vehicle Details" };

export default function VehicleDetailPage({ params }: { params: { id: string } }) {
  return (
    <div className="pt-20">
      <section className="section-padding border-b bg-muted/30">
        <div className="container-max">
          <nav className="text-sm text-muted-foreground mb-6 flex gap-2">
            <Link href="/transport" className="hover:text-primary">Transport</Link>
            <span>/</span>
            <Link href="/transport/vehicles" className="hover:text-primary">Vehicles</Link>
            <span>/</span>
            <span className="text-foreground">Vehicle #{params.id}</span>
          </nav>
          <h1 className="text-3xl font-bold">Vehicle Detail</h1>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-max grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Left: Gallery + Info */}
          <div className="lg:col-span-3 space-y-8">
            <div className="aspect-video bg-gradient-to-br from-slate-100 to-slate-200 rounded-3xl flex items-center justify-center text-8xl shadow-inner">
              🚐
            </div>
            <div className="grid grid-cols-4 gap-3">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="aspect-video bg-slate-100 rounded-xl cursor-pointer hover:ring-2 ring-orange-500 transition-all" />
              ))}
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4">Vehicle Details</h2>
              <div className="grid grid-cols-2 gap-4 text-sm">
                {[["Type", "SUV"], ["Make & Model", "Toyota Innova"], ["Year", "2023"], ["Capacity", "7 seats"], ["Fuel", "Diesel"], ["Service Area", "Tirupati & District"]].map(([k, v]) => (
                  <div key={k} className="flex flex-col gap-1">
                    <span className="text-muted-foreground">{k}</span>
                    <span className="font-semibold">{v}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Booking Card */}
          <div className="lg:col-span-2">
            <div className="sticky top-24 card-premium rounded-3xl p-8 space-y-6">
              <h2 className="text-xl font-bold">Book This Vehicle</h2>
              <div className="flex items-end gap-2">
                <span className="text-4xl font-black text-orange-500 font-mono">₹18</span>
                <span className="text-muted-foreground text-sm mb-1">/km</span>
              </div>
              <div className="space-y-4">
                <input type="text" placeholder="Pickup Location *" className="w-full px-4 py-3 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-orange-500/20" />
                <input type="text" placeholder="Drop Location *" className="w-full px-4 py-3 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-orange-500/20" />
                <input type="date" className="w-full px-4 py-3 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-orange-500/20" />
              </div>
              <Link href="/transport/book/step-1" className="block w-full py-4 bg-orange-500 text-white rounded-2xl font-bold text-center hover:bg-orange-600 transition-all shadow-lg shadow-orange-500/20">
                Book Now →
              </Link>
              <Link href="#" className="block w-full py-3 border rounded-2xl text-sm font-semibold text-center hover:border-orange-500 hover:text-orange-500 transition-colors text-muted-foreground">
                Contact Partner
              </Link>
              <p className="text-xs text-muted-foreground text-center">Free cancellation before 24 hours of booking</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
