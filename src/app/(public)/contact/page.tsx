import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with the Care&Move team for patient enquiries, vehicle booking support, or partnership opportunities.",
};

export default function ContactPage() {
  return (
    <div className="pt-20">
      <section className="section-padding border-b bg-muted/30">
        <div className="container-max">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Get in Touch</h1>
          <p className="text-muted-foreground text-lg max-w-2xl">Whether it&apos;s a care enquiry, a transport request, or a partnership question — our team is here to help.</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-max grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
              <div className="space-y-4 text-muted-foreground">
                <p><span className="font-semibold text-foreground">Phone:</span> +91 98765 43210</p>
                <p><span className="font-semibold text-foreground">Email:</span> hello@caremove.in</p>
                <p><span className="font-semibold text-foreground">Address:</span> ECODrIx Solutions, Tirupati, Andhra Pradesh, India</p>
                <p><span className="font-semibold text-foreground">Hours:</span> Mon–Sat, 9AM–6PM IST</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <a href="/care/contact" className="p-5 card-premium rounded-2xl text-center group">
                <div className="text-2xl mb-2">🏥</div>
                <div className="font-semibold text-sm group-hover:text-primary transition-colors">Care Enquiries</div>
              </a>
              <a href="/transport/contact" className="p-5 card-premium rounded-2xl text-center group">
                <div className="text-2xl mb-2">🚐</div>
                <div className="font-semibold text-sm group-hover:text-primary transition-colors">Transport Support</div>
              </a>
            </div>
          </div>

          {/* Form */}
          <form className="space-y-5">
            <h2 className="text-2xl font-bold">Send a Message</h2>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Full Name *</label>
                <input type="text" className="w-full px-4 py-3 rounded-xl border bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 text-sm" placeholder="John Doe" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Phone *</label>
                <input type="tel" className="w-full px-4 py-3 rounded-xl border bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 text-sm" placeholder="+91 98765 43210" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <input type="email" className="w-full px-4 py-3 rounded-xl border bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 text-sm" placeholder="you@example.com" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Message *</label>
              <textarea rows={5} className="w-full px-4 py-3 rounded-xl border bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 text-sm resize-none" placeholder="How can we help you?" />
            </div>
            <button type="submit" className="w-full py-4 rounded-2xl bg-primary text-white font-bold hover:bg-primary/90 transition-all shadow-lg shadow-primary/20">
              Send Message
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
