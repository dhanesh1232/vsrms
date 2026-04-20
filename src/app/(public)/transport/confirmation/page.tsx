import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Booking Confirmed!" };

export default function BookingConfirmationPage() {
  return (
    <div className="pt-20 min-h-screen bg-muted/30 flex items-center justify-center">
      <div className="container-max py-16 max-w-2xl mx-auto text-center space-y-8">
        {/* Success Icon */}
        <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center text-4xl mx-auto animate-bounce">✅</div>
        <div>
          <h1 className="text-4xl font-bold text-green-600 mb-3">Booking Confirmed!</h1>
          <p className="text-muted-foreground">Payment successful. Your vehicle has been booked.</p>
        </div>

        {/* Booking Details */}
        <div className="card-premium rounded-3xl p-8 text-left space-y-5">
          <div className="text-center">
            <div className="text-xs text-muted-foreground uppercase tracking-widest mb-1">Booking Reference</div>
            <div className="text-3xl font-black tracking-widest text-primary font-mono">CM-2604</div>
          </div>
          <div className="grid grid-cols-2 gap-4 text-sm pt-4 border-t">
            {[["Vehicle Type", "SUV"], ["Pickup Date", "Apr 20, 2026"], ["Pickup", "T. Nagar, Tirupati"], ["Drop", "SVIMS Hospital"], ["Trip Type", "One Way"], ["Amount Paid", "₹584"]].map(([k, v]) => (
              <div key={k}>
                <span className="text-muted-foreground">{k}</span>
                <div className="font-semibold mt-0.5">{v}</div>
              </div>
            ))}
            <div className="col-span-2">
              <span className="text-muted-foreground">Partner Status</span>
              <div className="mt-1"><span className="px-3 py-1 rounded-full bg-yellow-100 text-yellow-700 text-xs font-bold">Partner assigned within 2 hours</span></div>
            </div>
          </div>
        </div>

        {/* Email Notice */}
        <div className="bg-blue-50 border border-blue-200 rounded-2xl p-4 text-sm text-blue-700">
          📧 Confirmation email sent to <span className="font-semibold">your@email.com</span>
        </div>

        {/* Next Steps */}
        <div className="grid grid-cols-3 gap-4">
          {[["📱", "Watch Email", "Partner details will be sent shortly."], ["⭐", "Rate Your Trip", "Available after trip completion."], ["🔄", "Need to Cancel?", "Free before 24 hours."]].map(([icon, title, desc]) => (
            <div key={title} className="card-premium rounded-2xl p-4 text-center text-sm">
              <div className="text-2xl mb-2">{icon}</div>
              <div className="font-bold mb-1">{title}</div>
              <div className="text-muted-foreground text-xs">{desc}</div>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-4 justify-center">
          <Link href="/transport/vehicles" className="px-8 py-4 bg-orange-500 text-white rounded-2xl font-bold hover:bg-orange-600 transition-all shadow-lg shadow-orange-500/20">Book Another</Link>
          <Link href="/" className="px-8 py-4 border rounded-2xl font-bold hover:bg-muted transition-colors text-muted-foreground">Return Home</Link>
        </div>
      </div>
    </div>
  );
}
