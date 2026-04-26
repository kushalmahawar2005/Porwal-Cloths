"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { categories, type Product } from "@/data/products";

const popular = ["Bestseller Tees", "Festive Kurta", "Slim-fit Jeans", "Heavy GSM", "Cotton Shirt"];

const allProducts: Product[] = categories.flatMap((c) => c.products);

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function SearchOverlay({ open, onClose }: Props) {
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
      setTimeout(() => inputRef.current?.focus(), 100);
    } else {
      document.body.style.overflow = "";
      setQuery("");
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    return allProducts
      .filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q) ||
          p.fabric.toLowerCase().includes(q)
      )
      .slice(0, 8);
  }, [query]);

  return (
    <div
      className={`fixed inset-0 z-[8000] transition-opacity duration-300 ${
        open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      }`}
      aria-hidden={!open}
    >
      <div className="absolute inset-0 bg-ink/70 backdrop-blur-md" onClick={onClose} />

      <div
        className={`absolute top-0 left-0 right-0 bg-paper transition-transform duration-500 max-h-[92vh] overflow-y-auto ${
          open ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="max-w-5xl mx-auto px-6 py-10 md:py-14">
          {/* Search input */}
          <div className="flex items-center gap-4 border-b-2 border-ink pb-4">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className="w-6 h-6 text-ink shrink-0">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5-5m2-6a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search shirts, tees, fabrics, colors…"
              className="flex-1 bg-transparent outline-none font-display text-2xl md:text-3xl text-ink placeholder:text-muted/50"
            />
            <button
              type="button"
              onClick={onClose}
              aria-label="Close search"
              className="text-[11px] tracking-[0.28em] uppercase text-muted hover:text-ink transition-colors cursor-pointer"
            >
              Close
            </button>
          </div>

          {/* Empty state */}
          {!query && (
            <div className="mt-10 grid md:grid-cols-2 gap-12">
              <div>
                <div className="text-[10px] tracking-[0.32em] uppercase text-muted mb-4 font-semibold">
                  Popular searches
                </div>
                <div className="flex flex-wrap gap-2">
                  {popular.map((p) => (
                    <button
                      key={p}
                      type="button"
                      onClick={() => setQuery(p)}
                      className="px-4 py-2 text-sm border border-gold/25 text-ink hover:bg-ink hover:text-gold-light transition-colors cursor-pointer"
                    >
                      {p}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <div className="text-[10px] tracking-[0.32em] uppercase text-muted mb-4 font-semibold">
                  Shop by category
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {categories.map((c) => (
                    <Link
                      key={c.slug}
                      href={`/products/${c.slug}`}
                      onClick={onClose}
                      className="group relative aspect-[4/3] overflow-hidden bg-cream"
                    >
                      <Image
                        src={c.heroImage}
                        alt={c.name}
                        fill
                        className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                        sizes="(max-width: 640px) 50vw, 200px"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-ink/80 to-transparent" />
                      <div className="absolute bottom-2 left-3 right-3">
                        <div className="font-display text-sm text-cream">{c.name}</div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Results */}
          {query && (
            <div className="mt-8">
              <div className="text-[10px] tracking-[0.32em] uppercase text-muted mb-4 font-semibold">
                {results.length > 0 ? `${results.length} results` : "No matches"}
              </div>

              {results.length > 0 ? (
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {results.map((p) => (
                    <Link
                      key={p.id}
                      href={`/products/${p.categorySlug}`}
                      onClick={onClose}
                      className="group block"
                    >
                      <div className="relative aspect-[3/4] overflow-hidden bg-cream">
                        <Image
                          src={p.image}
                          alt={p.name}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-700"
                          sizes="(max-width: 640px) 50vw, 200px"
                        />
                      </div>
                      <div className="mt-3 text-[10px] tracking-[0.28em] uppercase text-muted">
                        {p.category}
                      </div>
                      <div className="font-display text-sm text-ink leading-snug mt-1 group-hover:text-gold-dark transition-colors">
                        {p.name}
                      </div>
                      <div className="text-gold-dark font-semibold text-sm mt-1">{p.price}</div>
                    </Link>
                  ))}
                </div>
              ) : (
                <div className="py-16 text-center">
                  <div className="text-muted text-sm">
                    Try &ldquo;cotton&rdquo;, &ldquo;jeans&rdquo;, or message us on WhatsApp for custom orders.
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
