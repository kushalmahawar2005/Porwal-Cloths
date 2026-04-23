"use client";

const marqueeItems = [
  "500+ Retailer Partners",
  "✦",
  "Pan-India Delivery",
  "✦",
  "10+ Years in Trade",
  "✦",
  "1000+ SKUs",
  "✦",
  "Manufacturer Direct",
  "✦",
  "Trusted by Retailers",
  "✦",
  "Quality Guaranteed",
  "✦",
  "Flexible MOQ",
  "✦",
  "Premium Fabrics",
  "✦",
  "Fast Dispatch",
  "✦",
];

export default function BrandMarquee() {
  return (
    <section className="bg-gold/10 border-y border-gold/20 py-4 overflow-hidden">
      <div className="relative flex">
        {/* Double the items for seamless loop */}
        <div className="flex animate-marquee whitespace-nowrap">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span
              key={i}
              className={`mx-4 text-sm tracking-widest uppercase ${
                item === "✦"
                  ? "text-gold text-xs"
                  : "text-gold-dark font-medium"
              }`}
            >
              {item}
            </span>
          ))}
        </div>
        <div className="flex animate-marquee2 whitespace-nowrap absolute top-0">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span
              key={i}
              className={`mx-4 text-sm tracking-widest uppercase ${
                item === "✦"
                  ? "text-gold text-xs"
                  : "text-gold-dark font-medium"
              }`}
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
