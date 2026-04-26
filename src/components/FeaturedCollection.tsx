"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { categories, type Product } from "@/data/products";
import QuickViewModal from "@/components/QuickViewModal";

const WHATSAPP = "919672299156";

const tabs = [
  { id: "all", label: "All" },
  { id: "bestseller", label: "Bestsellers" },
  { id: "new", label: "New Arrivals" },
  { id: "premium", label: "Premium" },
] as const;

type TabId = (typeof tabs)[number]["id"];

const allProducts: Product[] = categories.flatMap((c) => c.products);

function matchesTab(p: Product, tab: TabId): boolean {
  if (tab === "all") return true;
  const b = (p.badge ?? "").toLowerCase();
  if (tab === "bestseller") return b.includes("best") || b.includes("trend");
  if (tab === "new") return b.includes("new") || b.includes("limited");
  if (tab === "premium") return b.includes("premium");
  return true;
}

function ProductCard({
  product,
  onQuickView,
}: {
  product: Product;
  onQuickView: (p: Product) => void;
}) {
  const [hover, setHover] = useState(false);
  const hasHover = Boolean(product.imageHover);
  const whatsappLink = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(
    `Hello Porwal Clothes — Enquiry for ${product.name} (${product.id})`
  )}`;

  return (
    <div
      className="group relative bg-paper border border-gold/10 hover:border-gold/35 transition-colors"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {/* Image */}
      <Link
        href={`/products/${product.categorySlug}`}
        className="relative block aspect-[3/4] overflow-hidden bg-cream"
      >
        <Image
          src={product.image}
          alt={product.name}
          fill
          className={`object-cover transition-all duration-700 ease-luxe ${
            hover && hasHover ? "opacity-0 scale-105" : "opacity-100 scale-100"
          } ${hover && !hasHover ? "scale-[1.06]" : ""}`}
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
        />
        {hasHover && (
          <Image
            src={product.imageHover!}
            alt=""
            fill
            className={`object-cover absolute inset-0 transition-all duration-700 ease-luxe ${
              hover ? "opacity-100 scale-105" : "opacity-0 scale-100"
            }`}
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          />
        )}

        {product.badge && (
          <span className="absolute top-3 left-3 z-10 bg-gold text-ink text-[10px] tracking-[0.24em] uppercase font-bold px-2.5 py-1.5">
            {product.badge}
          </span>
        )}

        {/* Floating action icons */}
        <div
          className={`absolute top-3 right-3 z-10 flex flex-col gap-2 transition-all duration-500 ${
            hover ? "opacity-100 translate-x-0" : "opacity-0 translate-x-3"
          }`}
        >
          <button
            type="button"
            aria-label="Quick view"
            onClick={(e) => {
              e.preventDefault();
              onQuickView(product);
            }}
            className="w-9 h-9 flex items-center justify-center bg-paper/95 border border-gold/30 text-ink hover:bg-ink hover:text-gold-light transition-colors cursor-pointer"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.5 12s3.5-7 9.5-7 9.5 7 9.5 7-3.5 7-9.5 7S2.5 12 2.5 12z" />
              <circle cx="12" cy="12" r="2.5" />
            </svg>
          </button>
        </div>

        {/* Bottom slide-in CTA */}
        <div
          className={`absolute bottom-0 left-0 right-0 p-3 transition-all duration-500 ${
            hover ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
        >
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="block w-full text-center bg-ink text-gold-light hover:bg-gold hover:text-ink py-3 text-[10px] tracking-[0.28em] uppercase font-bold transition-colors"
          >
            Enquire on WhatsApp
          </a>
        </div>
      </Link>

      {/* Details */}
      <div className="p-4">
        <div className="text-[10px] tracking-[0.28em] uppercase text-muted">
          {product.category}
        </div>
        <Link
          href={`/products/${product.categorySlug}`}
          className="block font-display text-base text-ink mt-1 leading-snug hover:text-gold-dark transition-colors"
        >
          {product.name}
        </Link>

        <div className="mt-3 flex items-center justify-between">
          <span className="font-display text-base text-gold-dark font-semibold">
            {product.price}
          </span>
          <div className="flex items-center gap-1">
            {product.colors.slice(0, 4).map((c) => (
              <span
                key={c}
                className="w-3.5 h-3.5 rounded-full border border-muted/30"
                style={{ backgroundColor: c }}
                title={c}
              />
            ))}
            {product.colors.length > 4 && (
              <span className="text-[10px] text-muted ml-1">+{product.colors.length - 4}</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function FeaturedCollection() {
  const [tab, setTab] = useState<TabId>("all");
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);
  const [quickViewOpen, setQuickViewOpen] = useState(false);

  const filtered = useMemo(
    () => allProducts.filter((p) => matchesTab(p, tab)).slice(0, 8),
    [tab]
  );

  const handleQuickView = (p: Product) => {
    setQuickViewProduct(p);
    setQuickViewOpen(true);
  };

  return (
    <section id="featured" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-10 h-[1px] bg-gold" />
              <span className="section-label !mb-0">Featured</span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl text-ink leading-[1.05]">
              Hand-picked <span className="italic text-gold-dark">For Retailers</span>
            </h2>
          </div>

          <div className="flex flex-wrap gap-2">
            {tabs.map((t) => (
              <button
                key={t.id}
                type="button"
                onClick={() => setTab(t.id)}
                className={`px-5 py-2.5 text-[11px] tracking-[0.24em] uppercase font-semibold border transition-colors cursor-pointer ${
                  tab === t.id
                    ? "bg-ink text-gold-light border-ink"
                    : "bg-transparent text-ink border-gold/25 hover:border-gold hover:text-gold-dark"
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>

        {filtered.length === 0 ? (
          <div className="py-20 text-center text-muted text-sm tracking-wider">
            No products in this filter — coming soon.
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
            {filtered.map((p) => (
              <ProductCard key={p.id} product={p} onQuickView={handleQuickView} />
            ))}
          </div>
        )}

        <div className="text-center mt-14">
          <Link
            href="/#products"
            className="btn-outline-gold inline-block px-10 py-3.5 text-[11px] tracking-[0.28em] uppercase font-bold"
          >
            View All Categories
          </Link>
        </div>
      </div>

      <QuickViewModal
        product={quickViewProduct}
        open={quickViewOpen}
        onClose={() => setQuickViewOpen(false)}
      />
    </section>
  );
}
