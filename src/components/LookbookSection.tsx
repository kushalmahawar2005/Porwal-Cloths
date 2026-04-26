import Image from "next/image";
import Link from "next/link";

const tiles = [
  {
    label: "Editorial 01",
    title: "Heritage Cotton",
    desc: "Mill-finished shirts woven for the modern Indian retailer.",
    image: "/T6.png.jpeg",
    cta: "Shop Shirts",
    href: "/products/shirt",
    tone: "light",
  },
  {
    label: "Editorial 02",
    title: "Statement Tees",
    desc: "Heavy-GSM cotton, photographed in studio. Built to move.",
    image: "/T1.png.jpeg",
    cta: "Shop T-Shirts",
    href: "/products/t-shirt",
    tone: "dark",
  },
] as const;

export default function LookbookSection() {
  return (
    <section className="py-24 md:py-32 bg-paper">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-10 h-[1px] bg-gold" />
              <span className="section-label !mb-0">The Lookbook</span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-ink leading-[1.05]">
              Studio-shot. <br />
              <span className="italic text-gold-dark">Retailer-ready.</span>
            </h2>
          </div>
          <p className="text-muted max-w-md text-[15px] leading-relaxed">
            Each capsule is photographed in our in-house studio so you can list,
            print, and merchandise without a re-shoot.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
          {tiles.map((t) => (
            <Link
              key={t.title}
              href={t.href}
              className="group relative block overflow-hidden aspect-[4/5] lg:aspect-[5/6]"
            >
              <Image
                src={t.image}
                alt={t.title}
                fill
                className="object-cover transition-transform duration-[1200ms] ease-luxe group-hover:scale-[1.06]"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div
                className={`absolute inset-0 ${
                  t.tone === "dark"
                    ? "bg-gradient-to-t from-ink/85 via-ink/30 to-transparent"
                    : "bg-gradient-to-t from-ink/70 via-ink/10 to-transparent"
                }`}
              />

              <div className="absolute top-6 left-6 flex items-center gap-3">
                <span className="w-6 h-[1px] bg-gold-light" />
                <span className="text-[10px] tracking-[0.32em] uppercase text-gold-light font-semibold">
                  {t.label}
                </span>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-10">
                <h3 className="font-display text-3xl md:text-4xl text-cream mb-3 leading-tight">
                  {t.title}
                </h3>
                <p className="text-cream/80 text-sm md:text-base max-w-md mb-6 leading-relaxed">
                  {t.desc}
                </p>
                <span className="inline-flex items-center gap-3 text-[11px] tracking-[0.28em] uppercase font-semibold text-gold-light border-b border-gold-light/40 pb-1.5 group-hover:text-cream group-hover:border-cream transition-colors">
                  {t.cta}
                  <span className="transition-transform duration-500 group-hover:translate-x-1">→</span>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
