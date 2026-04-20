"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Heart, Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

// Define the form types
type EnquiryFormData = {
  name: string;
  email: string;
  phone: string;
  type: "care" | "transport";
  message: string;
};

export default function CareEnquiryPage() {
  const [formData, setFormData] = useState<EnquiryFormData>({
    name: "",
    email: "",
    phone: "",
    type: "care",
    message: "",
  });

  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      // Direct API call to a route we'll create or use a server action
      // For now, let's simulate a success
      const response = await fetch("/api/enquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error("Failed to submit enquiry");

      setStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        type: "care",
        message: "",
      });
    } catch (err: any) {
      setStatus("error");
      setErrorMessage(err.message || "Something went wrong. Please try again.");
    }
  };

  return (
    <div className="pt-24 pb-20 w-full">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Start Your <span className="text-gradient">Care Journey</span>
          </motion.h1>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Fill out the form below and our medical coordinators will get in
            touch with you within 24 hours.
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-8 items-start">
          {/* Info Section */}
          <div className="md:col-span-2 space-y-6">
            <div className="p-6 rounded-3xl bg-primary/5 border border-primary/10">
              <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-4">
                <Heart className="w-6 h-6" />
              </div>
              <h3 className="font-bold mb-2">Patient First Approach</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                We don't just provide services; we provide solutions that
                prioritize patient dignity and comfort.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-muted/50 border">
              <h4 className="font-bold mb-4 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-500" />
                What Happens Next?
              </h4>
              <ul className="space-y-4">
                {[
                  "Specialist review of your enquiry",
                  "A phone call for detailed assessment",
                  "Custom Care/Transport plan proposal",
                  "Immediate service commencement",
                ].map((step, idx) => (
                  <li
                    key={idx}
                    className="flex gap-3 text-sm text-muted-foreground italic"
                  >
                    <span className="w-5 h-5 rounded-full bg-background border flex items-center justify-center text-[10px] font-bold not-italic">
                      {idx + 1}
                    </span>
                    {step}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Form Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="md:col-span-3 bg-card border rounded-[2.5rem] p-8 md:p-10 premium-shadow"
          >
            {status === "success" ? (
              <div className="text-center py-12">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center text-green-600 mx-auto mb-6">
                  <CheckCircle2 className="w-12 h-12" />
                </div>
                <h2 className="text-2xl font-bold mb-2">Thank You!</h2>
                <p className="text-muted-foreground mb-8">
                  Your enquiry has been submitted successfully. Our team will
                  contact you shortly.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="px-8 py-3 bg-primary text-primary-foreground rounded-xl font-bold hover:scale-105 transition-transform"
                >
                  Send Another Enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold ml-1">
                      Full Name
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="e.g. John Doe"
                      className="w-full px-5 py-3 rounded-2xl border bg-muted/20 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold ml-1">
                      Phone Number
                    </label>
                    <input
                      required
                      type="tel"
                      placeholder="+91 XXXXX XXXXX"
                      className="w-full px-5 py-3 rounded-2xl border bg-muted/20 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold ml-1">
                    Email Address
                  </label>
                  <input
                    required
                    type="email"
                    placeholder="john@example.com"
                    className="w-full px-5 py-3 rounded-2xl border bg-muted/20 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold ml-1">
                    Enquiry Type
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    {(["care", "transport"] as const).map((type) => (
                      <button
                        key={type}
                        type="button"
                        onClick={() => setFormData({ ...formData, type })}
                        className={cn(
                          "py-3 rounded-xl border font-bold capitalize transition-all",
                          formData.type === type
                            ? "bg-primary text-primary-foreground border-primary shadow-lg scale-[1.02]"
                            : "bg-background hover:bg-muted text-muted-foreground border-border",
                        )}
                      >
                        {type === "care"
                          ? "Medical Care"
                          : "Patient Transport"}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold ml-1">
                    How can we help you?
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Tell us about the patient's requirements..."
                    className="w-full px-5 py-3 rounded-2xl border bg-muted/20 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all resize-none"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                  />
                </div>

                {status === "error" && (
                  <div className="flex items-center gap-2 p-4 text-sm font-medium text-red-600 bg-red-50 border border-red-100 rounded-2xl">
                    <AlertCircle className="w-5 h-5" />
                    {errorMessage}
                  </div>
                )}

                <button
                  disabled={status === "loading"}
                  type="submit"
                  className="w-full py-4 bg-primary text-primary-foreground rounded-2xl font-bold flex items-center justify-center gap-2 shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-all disabled:opacity-50 disabled:scale-100"
                >
                  {status === "loading" ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Submit Enquiry
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
