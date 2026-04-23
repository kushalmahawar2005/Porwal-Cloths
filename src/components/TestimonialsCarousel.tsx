"use client";

import { useState, useEffect, useCallback } from "react";

interface Testimonial {
  quote: string;
  name: string;
  role: string;
  city: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    quote:
      "I have been sourcing from Porwal Clothes for 3 years. The quality is consistent, prices are fair, and delivery is always on time. They are the most reliable supplier for my shop.",
    name: "Rajesh Ji",
    role: "Retailer",
    city: "Kishangarh",
    rating: 5,
  },
  {
    quote:
      "Started with just 50 pieces as a trial. Now I order 500+ pieces every month. Their shirts and t-shirts sell like hot cakes in my store. Best wholesale rates in Rajasthan.",
    name: "Mohit Sharma",
    role: "Shop Owner",
    city: "Jaipur",
    rating: 5,
  },
  {
    quote:
      "The fabric quality is excellent for the price point. My customers always come back for more. Porwal Clothes has become my primary supplier for men's readymade garments.",
    name: "Suresh Agarwal",
    role: "Garment Retailer",
    city: "Ajmer",
    rating: 5,
  },
  {
    quote:
      "Delivery is super fast and packaging is always neat. Even after 2 years, not a single damaged shipment. Their kurta collection during festivals is unbeatable.",
    name: "Abdul Karim",
    role: "Wholesale Buyer",
    city: "Jodhpur",
    rating: 4,
  },
  {
    quote:
      "I run a small shop and was worried about MOQ. Porwal Clothes worked with me flexibly. Now my business has grown 3x thanks to their competitive pricing and variety.",
    name: "Vikram Singh",
    role: "New Retailer",
    city: "Beawar",
    rating: 5,
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1 justify-center mb-4">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          className={`w-4 h-4 ${
            star <= rating ? "text-gold" : "text-cream/20"
          }`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function TestimonialsCarousel() {
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const total = testimonials.length;

  const goTo = useCallback(
    (index: number) => {
      if (isAnimating) return;
      setIsAnimating(true);
      setCurrent(index);
      setTimeout(() => setIsAnimating(false), 500);
    },
    [isAnimating]
  );

  const next = useCallback(() => {
    goTo((current + 1) % total);
  }, [current, total, goTo]);

  const prev = useCallback(() => {
    goTo((current - 1 + total) % total);
  }, [current, total, goTo]);

  // Auto-play
  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  // Touch/swipe
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const handleTouchStart = (e: React.TouchEvent) =>
    setTouchStart(e.touches[0].clientX);
  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStart === null) return;
    const diff = touchStart - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      diff > 0 ? next() : prev();
    }
    setTouchStart(null);
  };

  return (
    <section className="py-20 md:py-24 bg-ink text-cream relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-40 h-40 border border-gold/30 rotate-45" />
        <div className="absolute bottom-10 right-10 w-60 h-60 border border-gold/20 rotate-12" />
      </div>

      <div className="max-w-5xl mx-auto px-6 relative">
        <div className="text-center mb-10">
          <div className="section-label mb-4" style={{ color: "#e4c988" }}>
            What Our Retailers Say
          </div>
          <h2 className="font-display text-3xl md:text-4xl">
            Trusted by <span className="italic text-gold">500+ Retailers</span>
          </h2>
        </div>

        {/* Carousel */}
        <div
          className="relative min-h-[280px] md:min-h-[220px]"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {testimonials.map((t, i) => (
            <div
              key={i}
              className={`absolute inset-0 flex flex-col items-center justify-center text-center px-4 md:px-16 transition-all duration-500 ${
                i === current
                  ? "opacity-100 translate-x-0"
                  : i < current
                  ? "opacity-0 -translate-x-8"
                  : "opacity-0 translate-x-8"
              }`}
            >
              <StarRating rating={t.rating} />
              <blockquote className="font-display text-xl md:text-2xl leading-relaxed italic mb-6 max-w-3xl">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <div className="text-gold tracking-widest text-sm font-medium">
                — {t.name}
              </div>
              <div className="text-cream/50 text-xs mt-1">
                {t.role}, {t.city}
              </div>
            </div>
          ))}
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-6 mt-8">
          {/* Prev */}
          <button
            onClick={prev}
            className="w-10 h-10 flex items-center justify-center border border-cream/20 text-cream/50 hover:text-gold hover:border-gold/50 transition-all cursor-pointer"
            aria-label="Previous review"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Dots */}
          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                  i === current
                    ? "w-8 bg-gold"
                    : "w-2 bg-cream/20 hover:bg-cream/40"
                }`}
                aria-label={`Go to review ${i + 1}`}
              />
            ))}
          </div>

          {/* Next */}
          <button
            onClick={next}
            className="w-10 h-10 flex items-center justify-center border border-cream/20 text-cream/50 hover:text-gold hover:border-gold/50 transition-all cursor-pointer"
            aria-label="Next review"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
