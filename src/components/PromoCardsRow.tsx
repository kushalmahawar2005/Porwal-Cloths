import Image from "next/image";
import Link from "next/link";

interface Promo {
  label: string;
  title: string;
  desc: string;
  image: string;
  href: string;
  dark?: boolean;
}

const promos: Promo[] = [
  {
    label: "Best in Class",
    title: "Premium Shirts",
    desc: "Formal · Casual · Party",
    image: "/cat-shirt.png",
    href: "/products/shirt",
  },
  {
    label: "Heavy GSM",
    title: "Statement Tees",
    desc: "Round Neck · Polo · Print",
    image: "/T1.png.jpeg",
    href: "/products/t-shirt",
    dark: true,
  },
  {
    label: "Festive Edit",
    title: "Kurta Pajama",
    desc: "Cotton · Silk · Embroidery",
    image: "/cat-kurta.png",
    href: "/products/kurta-pajama",
  },
];

export default function PromoCardsRow() {
  return (
    <section className="bg-paper py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-5 lg:gap-6">
          {promos.map((p) => (
            <Link
              key={p.title}
              href={p.href}
              className="group relative block aspect-[4/5] md:aspect-[4/5] overflow-hidden"
            >
              <Image
                src={p.image}
                alt={p.title}
                fill
                className="object-cover transition-transform duration-[1100ms] ease-luxe group-hover:scale-[1.07]"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div
                className={`absolute inset-0 ${
                  p.dark
                    ? "bg-gradient-to-t from-ink/85 via-ink/40 to-ink/10"
                    : "bg-gradient-to-t from-ink/70 via-ink/15 to-transparent"
                }`}
              />

              <div className="absolute top-5 left-5 flex items-center gap-2.5">
                <span className="w-5 h-[1px] bg-gold-light" />
                <span className="text-[10px] tracking-[0.32em] uppercase text-gold-light font-semibold">
                  {p.label}
                </span>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
                <h3 className="font-display text-2xl md:text-3xl text-cream leading-tight">
                  {p.title}
                </h3>
                <p className="text-cream/70 text-xs tracking-[0.2em] uppercase mt-2">
                  {p.desc}
                </p>
                <div className="mt-5 inline-flex items-center gap-2 text-[11px] tracking-[0.28em] uppercase font-semibold text-cream border-b border-cream/30 pb-1.5 group-hover:border-gold group-hover:text-gold-light transition-colors">
                  Shop now
                  <span className="transition-transform duration-500 group-hover:translate-x-1">→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
