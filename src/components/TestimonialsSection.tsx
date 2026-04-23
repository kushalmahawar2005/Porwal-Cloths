export default function TestimonialsSection() {
  return (
    <section className="py-20 md:py-24 bg-ink text-cream">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <div
          className="section-label mb-4"
          style={{ color: "#e4c988" }}
        >
          What Our Retailers Say
        </div>
        <blockquote className="font-display text-2xl md:text-4xl leading-relaxed italic">
          &ldquo;I have been sourcing from Porwal Clothes for 3 years. The
          quality is consistent, prices are fair, and delivery is always on time.
          They are the most reliable supplier for my shop.&rdquo;
        </blockquote>
        <div className="mt-8 text-gold tracking-widest text-sm">
          — Rajesh Ji, Retailer, Kishangarh
        </div>
        <div className="text-cream/50 text-xs mt-1 italic">
          [ Placeholder testimonial — replace with real retailer quotes ]
        </div>
      </div>
    </section>
  );
}
