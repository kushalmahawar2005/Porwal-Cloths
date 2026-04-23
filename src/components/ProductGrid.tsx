"use client";

import { useState } from "react";
import Image from "next/image";
import { Product } from "@/data/products";
import ImageLightbox from "@/components/ImageLightbox";

interface ProductGridProps {
  products: Product[];
  categoryName: string;
}

function ProductCard({
  product,
  onImageClick,
}: {
  product: Product;
  onImageClick: () => void;
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group bg-white border border-gold/15 overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-gold/10 hover:border-gold/30"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image */}
      <div
        className="relative aspect-[3/4] overflow-hidden bg-cream cursor-pointer"
        onClick={onImageClick}
      >
        <Image
          src={product.image}
          alt={product.name}
          fill
          className={`object-cover transition-transform duration-700 ${
            isHovered ? "scale-110" : "scale-100"
          }`}
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent" />

        {/* Badge */}
        {product.badge && (
          <div className="absolute top-3 left-3 z-10">
            <span className="bg-gold text-ink text-[10px] tracking-widest uppercase font-bold px-3 py-1.5">
              {product.badge}
            </span>
          </div>
        )}

        {/* Zoom icon overlay */}
        <div
          className={`absolute top-3 right-3 z-10 w-8 h-8 flex items-center justify-center bg-ink/60 text-cream/80 transition-all duration-300 ${
            isHovered ? "opacity-100 scale-100" : "opacity-0 scale-75"
          }`}
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
          </svg>
        </div>

        {/* Quick Action */}
        <div
          className={`absolute bottom-0 left-0 right-0 p-4 transition-all duration-300 ${
            isHovered
              ? "translate-y-0 opacity-100"
              : "translate-y-4 opacity-0"
          }`}
        >
          <a
            href={`https://wa.me/919672299156?text=Hello%20Porwal%20Clothes%20-%20I%20want%20to%20order%20${encodeURIComponent(product.name)}%20(${encodeURIComponent(product.id)})`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold w-full block text-center py-3 text-xs tracking-widest uppercase font-semibold"
            onClick={(e) => e.stopPropagation()}
          >
            Enquire on WhatsApp
          </a>
        </div>
      </div>

      {/* Details */}
      <div className="p-4 md:p-5">
        <h3 className="font-display text-lg text-ink mb-1 leading-tight">
          {product.name}
        </h3>

        {/* Price + MOQ */}
        <div className="flex items-center justify-between mb-3">
          <span className="text-gold-dark font-semibold text-lg">
            {product.price}
          </span>
          <span className="text-xs tracking-widest uppercase text-muted bg-cream px-2 py-1">
            MOQ: {product.moq}
          </span>
        </div>

        {/* Info Grid */}
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-muted">Fabric</span>
            <span className="text-ink font-medium">{product.fabric}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted">Sizes</span>
            <span className="text-ink font-medium">{product.sizes}</span>
          </div>
        </div>

        {/* Color Swatches */}
        <div className="mt-3 flex items-center gap-1.5">
          <span className="text-xs text-muted mr-1">Colors:</span>
          {product.colors.map((color, i) => (
            <span
              key={i}
              className="w-5 h-5 rounded-full border border-muted/30 inline-block"
              style={{ backgroundColor: color }}
              title={color}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function ProductGrid({ products, categoryName }: ProductGridProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const lightboxImages = products.map((p) => ({
    src: p.image,
    alt: p.name,
  }));

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <div>
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
        <h2 className="font-display text-2xl md:text-3xl text-ink">
          All{" "}
          <span className="italic text-gold-dark">{categoryName}</span>
        </h2>
        <div className="text-sm text-muted">
          Showing {products.length} products · Click image to zoom
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 md:gap-6">
        {products.map((product, i) => (
          <ProductCard
            key={product.id}
            product={product}
            onImageClick={() => openLightbox(i)}
          />
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="text-center mt-12 p-8 bg-white border border-gold/20">
        <p className="font-display text-xl text-ink mb-2">
          Need more variety?
        </p>
        <p className="text-muted text-sm mb-4">
          We have 100+ more designs in {categoryName}. WhatsApp us for the full
          catalog with photos and live stock.
        </p>
        <a
          href={`https://wa.me/919672299156?text=Hello%20Porwal%20Clothes%20-%20Send%20full%20catalog%20for%20${encodeURIComponent(categoryName)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-gold inline-block px-8 py-3 font-medium tracking-wider text-sm uppercase"
        >
          Get Full Catalog
        </a>
      </div>

      {/* Lightbox */}
      <ImageLightbox
        images={lightboxImages}
        initialIndex={lightboxIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
      />
    </div>
  );
}
