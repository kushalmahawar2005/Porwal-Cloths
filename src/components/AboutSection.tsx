export default function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-28 bg-cream">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <div className="section-label mb-4">About Us</div>
        <div className="flex flex-col md:flex-row justify-center items-center mb-6 gap-2">
          <span className="gold-divider hidden md:inline-block" />
          <span className="font-display text-3xl md:text-5xl text-ink">
            A Trusted Wholesale Partner
          </span>
          <span className="gold-divider hidden md:inline-block" />
        </div>
        <p className="text-muted text-lg leading-relaxed max-w-3xl mx-auto">
          Porwal Clothes is a leading wholesale supplier of men&apos;s readymade
          garments. We source directly from manufacturers and mills, giving
          retailers the best combination of highest quality and lowest prices.
          From shirts to jeans, our range covers every price point and style.
        </p>
        <p className="text-muted text-base leading-relaxed max-w-3xl mx-auto mt-6 italic">
          &ldquo;Whether a small batch or bulk order — the quality and timely
          delivery remain consistently high.&rdquo;
        </p>
      </div>
    </section>
  );
}
