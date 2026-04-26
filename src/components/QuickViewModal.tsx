"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/data/products";

const WHATSAPP = "919672299156";

interface Props {
  product: Product | null;
  open: boolean;
  onClose: () => void;
}

export default function QuickViewModal({ product, open, onClose }: Props) {
  const [activeImg, setActiveImg] = useState(0);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
      setActiveImg(0);
    } else {
      document.body.style.overflow = "";
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

  if (!product) return null;

  const gallery = [product.image, product.imageHover].filter(Boolean) as string[];
  const whatsappLink = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(
    `Hello Porwal Clothes — Quick view enquiry for ${product.name} (${product.id})`
  )}`;

  return (
    <div
      className={`fixed inset-0 z-[9000] transition-opacity duration-300 ${
        open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      }`}
      aria-hidden={!open}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-ink/70 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Panel */}
      <div
        className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[min(960px,94vw)] max-h-[92vh] bg-paper shadow-premium overflow-hidden grid md:grid-cols-2 transition-all duration-500 ${
          open ? "scale-100 opacity-100" : "scale-95 opacity-0"
        }`}
      >
        {/* Close */}
        <button
          onClick={onClose}
          aria-label="Close quick view"
          className="absolute top-4 right-4 z-20 w-9 h-9 flex items-center justify-center bg-paper/90 border border-gold/30 text-ink hover:bg-ink hover:text-cream transition-colors cursor-pointer"
        >
          <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Gallery */}
        <div className="relative bg-cream">
          <div className="relative aspect-[4/5] md:aspect-auto md:h-full">
            <Image
              src={gallery[activeImg] ?? product.image}
              alt={product.name}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 480px"
            />
            {product.badge && (
              <span className="absolute top-4 left-4 bg-gold text-ink text-[10px] tracking-[0.24em] uppercase font-bold px-3 py-1.5">
                {product.badge}
              </span>
            )}
          </div>
          {gallery.length > 1 && (
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {gallery.map((src, i) => (
                <button
                  key={src}
                  onClick={() => setActiveImg(i)}
                  className={`relative w-12 h-12 overflow-hidden border-2 transition-all cursor-pointer ${
                    i === activeImg ? "border-gold" : "border-cream/0 opacity-70 hover:opacity-100"
                  }`}
                  aria-label={`Image ${i + 1}`}
                >
                  <Image src={src} alt="" fill className="object-cover" sizes="48px" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Details */}
        <div className="p-6 md:p-10 overflow-y-auto">
          <Link
            href={`/products/${product.categorySlug}`}
            className="text-[10px] tracking-[0.32em] uppercase text-gold-dark hover:text-gold transition-colors"
            onClick={onClose}
          >
            {product.category}
          </Link>
          <h3 className="font-display text-2xl md:text-3xl text-ink mt-2 leading-tight">
            {product.name}
          </h3>

          <div className="mt-4 flex items-center gap-4">
            <span className="font-display text-2xl text-gold-dark font-semibold">
              {product.price}
            </span>
            <span className="text-[10px] tracking-[0.24em] uppercase text-muted bg-cream px-3 py-1.5 border border-gold/20">
              MOQ {product.moq}
            </span>
          </div>

          <p className="mt-5 text-sm leading-relaxed text-muted">
            Manufacturer-direct quality. Wholesale pricing scales with quantity.
            Confirm exact rates and live stock on WhatsApp.
          </p>

          <div className="mt-6 grid grid-cols-2 gap-4 text-sm">
            <div>
              <div className="text-[10px] tracking-[0.24em] uppercase text-muted mb-1">Fabric</div>
              <div className="text-ink font-medium">{product.fabric}</div>
            </div>
            <div>
              <div className="text-[10px] tracking-[0.24em] uppercase text-muted mb-1">Sizes</div>
              <div className="text-ink font-medium">{product.sizes}</div>
            </div>
          </div>

          <div className="mt-6">
            <div className="text-[10px] tracking-[0.24em] uppercase text-muted mb-2">Colors</div>
            <div className="flex flex-wrap gap-2">
              {product.colors.map((c) => (
                <span
                  key={c}
                  className="w-7 h-7 rounded-full border border-muted/30 inline-block"
                  style={{ backgroundColor: c }}
                  title={c}
                />
              ))}
            </div>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold flex-1 text-center px-6 py-4 text-[11px] tracking-[0.24em] uppercase font-bold"
            >
              Enquire on WhatsApp
            </a>
            <Link
              href={`/products/${product.categorySlug}`}
              onClick={onClose}
              className="btn-ghost flex-1 text-center px-6 py-4 text-[11px] tracking-[0.24em] uppercase font-bold"
            >
              View Category
            </Link>
          </div>

          <div className="mt-6 text-[11px] tracking-[0.18em] uppercase text-muted/80 border-t border-gold/10 pt-4">
            SKU · {product.id.toUpperCase()}
          </div>
        </div>
      </div>
    </div>
  );
}
