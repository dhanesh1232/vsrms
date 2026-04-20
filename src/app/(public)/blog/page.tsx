import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description: "Health tips, care guidance, and transport news from the Care&Move team.",
};

const placeholderPosts = [
  { slug: "5-signs-you-need-home-care", category: "Care", title: "5 Signs Your Loved One Needs Professional Home Care", excerpt: "Recognising the early indicators that a family member needs structured medical support.", date: "Apr 10, 2026" },
  { slug: "choosing-the-right-care-plan", category: "Care", title: "How to Choose the Right Care Plan for Your Family", excerpt: "A practical guide to understanding the difference between Basic, Standard, and Premium care plans.", date: "Apr 05, 2026" },
  { slug: "vehicle-booking-patient-transfer", category: "Transport", title: "Safe Patient Transfers: What to Look for in a Medical Transport Vehicle", excerpt: "Key features and certifications that ensure patient safety during medical transport bookings.", date: "Mar 28, 2026" },
];

export default function BlogPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="section-padding bg-muted/30 border-b">
        <div className="container-max">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <span className="text-primary text-xs font-bold tracking-widest uppercase mb-3 block">Journal</span>
              <h1 className="text-4xl md:text-5xl font-bold">Care&Move Blog</h1>
              <p className="text-muted-foreground mt-3">Health insights, care guidance, and platform news.</p>
            </div>
            <input
              type="search"
              placeholder="Search articles…"
              className="w-full md:w-72 px-5 py-3 rounded-2xl border bg-white text-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
            />
          </div>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {placeholderPosts.map((post) => (
              <article key={post.slug} className="card-premium rounded-3xl overflow-hidden group cursor-pointer">
                <div className="h-48 bg-gradient-to-br from-primary/10 to-muted" />
                <div className="p-6">
                  <span className={`text-xs font-bold tracking-widest uppercase mb-3 block ${post.category === "Care" ? "text-primary" : "text-orange-500"}`}>
                    {post.category}
                  </span>
                  <h2 className="text-lg font-bold mb-3 group-hover:text-primary transition-colors leading-snug">{post.title}</h2>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">{post.date}</span>
                    <span className="text-primary text-sm font-semibold">Read →</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
