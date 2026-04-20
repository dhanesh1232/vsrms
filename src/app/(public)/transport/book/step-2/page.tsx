"use client";

import React from "react";
import Link from "next/link";

const steps = ["Route & Time", "Review & Pay", "Confirmation"];

export default function BookingStep2Page() {
  return (
    <div className="pt-20 min-h-screen bg-muted/30">
      <div className="container-max py-12">
        {/* Progress Stepper */}
        <div className="flex items-center gap-4 mb-10">
          {steps.map((s, i) => (
            <React.Fragment key={s}>
              <div className={`flex items-center gap-3 ${i === 1 ? "text-orange-500" : i < 1 ? "text-green-600" : "text-muted-foreground"}`}>
                <span className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${i === 1 ? "bg-orange-500 text-white" : i < 1 ? "bg-green-500 text-white" : "bg-muted border"}`}>
                  {i < 1 ? "✓" : i + 1}
                </span>
                <span className="text-sm font-medium hidden sm:block">{s}</span>
              </div>
              {i < steps.length - 1 && <div className={`flex-1 h-px ${i < 1 ? "bg-green-400" : i === 1 ? "bg-orange-500" : "bg-border"}`} />}
            </React.Fragment>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Booking Summary */}
          <div className="lg:col-span-3">
            <div className="card-premium rounded-3xl p-8">
              <h2 className="text-xl font-bold mb-6">Booking Summary</h2>
              <div className="flex items-center gap-4 pb-6 border-b mb-6">
                <div className="w-16 h-16 bg-slate-100 rounded-2xl flex items-center justify-center text-2xl shrink-0">🚐</div>
                <div>
                  <div className="font-bold">Toyota Innova Crysta</div>
                  <div className="text-sm text-muted-foreground">SUV · Tirupati</div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 text-sm mb-6">
                {[["Pickup", "T. Nagar, Tirupati"], ["Drop", "SVIMS Hospital"], ["Date", "Apr 20, 2026"], ["Time", "10:00 AM"], ["Trip Type", "One Way"], ["Distance", "~25 km"]].map(([k, v]) => (
                  <div key={k}>
                    <span className="text-muted-foreground">{k}</span>
                    <div className="font-semibold mt-0.5">{v}</div>
                  </div>
                ))}
              </div>
              <div className="bg-muted/40 rounded-2xl p-5 space-y-2.5 text-sm">
                <div className="flex justify-between"><span className="text-muted-foreground">Base Fare (₹18 × 25 km)</span><span>₹450</span></div>
                <div className="flex justify-between"><span className="text-muted-foreground">Service Fee (10%)</span><span>₹45</span></div>
                <div className="flex justify-between"><span className="text-muted-foreground">GST (18%)</span><span>₹89</span></div>
                <hr />
                <div className="flex justify-between text-base font-black text-orange-500"><span>Total Amount</span><span>₹584</span></div>
              </div>
              <Link href="/transport/book/step-1" className="mt-4 text-sm text-muted-foreground hover:text-primary transition-colors block">← Edit Booking</Link>
            </div>
          </div>

          {/* Payment Card */}
          <div className="lg:col-span-2">
            <div className="card-premium rounded-3xl p-8 sticky top-24">
              <h2 className="text-xl font-bold mb-2">Complete Payment</h2>
              <p className="text-sm text-muted-foreground mb-6">Partner will be assigned within 2 hours of payment.</p>

              {/* Razorpay Mockup */}
              <div className="border rounded-2xl overflow-hidden mb-6">
                <div className="bg-slate-50 px-4 py-3 flex items-center gap-2 border-b">
                  <span className="text-sm font-bold text-slate-600">Razorpay</span>
                  <span className="text-xs text-muted-foreground">Secure Payment</span>
                </div>
                <div className="p-4">
                  <div className="flex gap-2 mb-4">
                    {["UPI", "Cards", "Netbanking"].map((t, i) => (
                      <button key={t} className={`flex-1 py-2 rounded-lg text-xs font-semibold border transition-all ${i === 0 ? "bg-blue-50 border-blue-500 text-blue-600" : "border-border text-muted-foreground"}`}>{t}</button>
                    ))}
                  </div>
                  <div className="space-y-3">
                    <input type="text" placeholder="Enter UPI ID (upi@bank)" className="w-full px-3 py-2.5 rounded-lg border text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20" />
                  </div>
                </div>
              </div>

              <Link href="/transport/confirmation" className="block w-full py-4 bg-orange-500 text-white rounded-2xl font-bold text-center hover:bg-orange-600 transition-all shadow-lg shadow-orange-500/20 mb-4">
                Pay ₹584 →
              </Link>
              <div className="flex items-center justify-center gap-6 text-xs text-muted-foreground">
                <span>🔒 SSL</span>
                <span>🏦 Razorpay</span>
                <span>✓ Verified</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
