"use client";

import React, { useState } from "react";
import Link from "next/link";

const steps = ["Route & Time", "Review & Pay", "Confirmation"];

export default function BookingStep1Page() {
  const [tripType, setTripType] = useState<"ONE_WAY" | "ROUND_TRIP">("ONE_WAY");

  return (
    <div className="pt-20 min-h-screen bg-muted/30">
      <div className="container-max py-12">
        {/* Progress Stepper */}
        <div className="flex items-center gap-4 mb-10">
          {steps.map((s, i) => (
            <React.Fragment key={s}>
              <div className={`flex items-center gap-3 ${i === 0 ? "text-orange-500" : "text-muted-foreground"}`}>
                <span className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${i === 0 ? "bg-orange-500 text-white" : "bg-muted border"}`}>{i + 1}</span>
                <span className="text-sm font-medium hidden sm:block">{s}</span>
              </div>
              {i < steps.length - 1 && <div className={`flex-1 h-px ${i === 0 ? "bg-orange-500" : "bg-border"}`} />}
            </React.Fragment>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Form */}
          <div className="lg:col-span-2 space-y-6">
            {/* Vehicle Summary */}
            <div className="card-premium rounded-2xl p-5 flex items-center gap-5">
              <div className="w-16 h-16 bg-slate-100 rounded-2xl flex items-center justify-center text-2xl shrink-0">🚐</div>
              <div className="flex-1">
                <div className="font-bold">Toyota Innova Crysta</div>
                <div className="text-sm text-muted-foreground">SUV · Tirupati</div>
              </div>
              <div className="text-orange-500 font-black font-mono text-xl">₹18/km</div>
              <Link href="/transport/vehicles" className="text-xs text-muted-foreground hover:text-primary transition-colors">Change</Link>
            </div>

            {/* Form Fields */}
            <div className="card-premium rounded-3xl p-8 space-y-6">
              <h2 className="text-xl font-bold">Route & Time Details</h2>
              <div>
                <label className="block text-sm font-medium mb-2">Pickup Location *</label>
                <input type="text" placeholder="Enter pickup address" className="w-full px-4 py-3 rounded-xl border bg-white text-sm focus:outline-none focus:ring-2 focus:ring-orange-500/20" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Drop Location *</label>
                <input type="text" placeholder="Enter destination" className="w-full px-4 py-3 rounded-xl border bg-white text-sm focus:outline-none focus:ring-2 focus:ring-orange-500/20" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Pickup Date *</label>
                  <input type="date" className="w-full px-4 py-3 rounded-xl border bg-white text-sm focus:outline-none focus:ring-2 focus:ring-orange-500/20" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Pickup Time *</label>
                  <select className="w-full px-4 py-3 rounded-xl border bg-white text-sm focus:outline-none focus:ring-2 focus:ring-orange-500/20">
                    <option>09:00 AM</option>
                    <option>09:15 AM</option>
                    <option>09:30 AM</option>
                    <option>10:00 AM</option>
                    <option>10:30 AM</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-3">Trip Type</label>
                <div className="flex gap-3">
                  {(["ONE_WAY", "ROUND_TRIP"] as const).map((t) => (
                    <button key={t} onClick={() => setTripType(t)} className={`flex-1 py-3 rounded-xl text-sm font-semibold border transition-all ${tripType === t ? "bg-orange-500 text-white border-orange-500" : "border-border hover:border-orange-300"}`}>
                      {t === "ONE_WAY" ? "One Way" : "Round Trip"}
                    </button>
                  ))}
                </div>
              </div>
              {tripType === "ROUND_TRIP" && (
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Return Date *</label>
                    <input type="date" className="w-full px-4 py-3 rounded-xl border bg-white text-sm focus:outline-none focus:ring-2 focus:ring-orange-500/20" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Return Time *</label>
                    <input type="time" className="w-full px-4 py-3 rounded-xl border bg-white text-sm focus:outline-none focus:ring-2 focus:ring-orange-500/20" />
                  </div>
                </div>
              )}
              <div>
                <label className="block text-sm font-medium mb-2">Special Instructions <span className="text-muted-foreground font-normal">(optional)</span></label>
                <textarea rows={3} placeholder="Any special requirements, medical needs, or instructions…" className="w-full px-4 py-3 rounded-xl border bg-white text-sm focus:outline-none focus:ring-2 focus:ring-orange-500/20 resize-none" />
              </div>
            </div>

            <div className="flex gap-4">
              <Link href="/transport/vehicles" className="px-6 py-4 rounded-2xl border font-semibold text-sm hover:bg-muted transition-colors">← Back</Link>
              <Link href="/transport/book/step-2" className="flex-1 py-4 bg-orange-500 text-white rounded-2xl font-bold text-center hover:bg-orange-600 transition-all shadow-lg shadow-orange-500/20 text-sm">
                Continue to Review →
              </Link>
            </div>
          </div>

          {/* Rate Estimate */}
          <div>
            <div className="card-premium rounded-3xl p-6 border-l-4 border-orange-500 bg-orange-50/50">
              <h3 className="font-bold mb-4">Rate Estimate</h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div className="flex justify-between"><span>Distance (est.)</span><span>~25 km</span></div>
                <div className="flex justify-between"><span>₹18 × 25 km</span><span>₹450</span></div>
                <div className="flex justify-between"><span>Service Fee (10%)</span><span>₹45</span></div>
                <hr className="my-3" />
                <div className="flex justify-between text-base font-black text-orange-500"><span>Estimated Total</span><span>₹495</span></div>
              </div>
              <p className="text-xs text-muted-foreground mt-4">Final amount confirmed on booking. Distance calculated via route.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
