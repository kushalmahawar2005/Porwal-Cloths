import Image from "next/image";
import Link from "next/link";

interface Product {
  name: string;
  subtitle: string;
  tags: string;
  moq: string;
  image: string;
  alt: boolean; // dark card variant
  slug: string;
}

const products: Product[] = [
  {
    name: "Shirt",
    subtitle: "Premium Shirts",
    tags: "Formal · Casual",
    moq: "MOQ 50+",
    image: "/cat-shirt.png",
    alt: false,
    slug: "shirt",
  },
  {
    name: "T shirt",
    subtitle: "Designer T-Shirts",
    tags: "Round Neck · Polo",
    moq: "MOQ 100+",
    image: "/cat-tshirt.png",
    alt: true,
    slug: "t-shirt",
  },
  {
    name: "Lower",
    subtitle: "Active Lowers",
    tags: "Track · Jogger",
    moq: "MOQ 50+",
    image: "/cat-lower.png",
    alt: false,
    slug: "lower",
  },
  {
    name: "Jeans",
    subtitle: "Denim Jeans",
    tags: "Slim · Regular",
    moq: "MOQ 30+",
    image: "/cat-jeans.png",
    alt: true,
    slug: "jeans",
  },
  {
    name: "Kurta pajama",
    subtitle: "Ethnic Wear",
    tags: "Festive · Cotton",
    moq: "MOQ 30+",
    image: "/cat-kurta.png",
    alt: false,
    slug: "kurta-pajama",
  },
];

function ProductCard({ product }: { product: Product }) {
  return (
    <Link href={`/products/${product.slug}`} className="group block">
      <div className={`product-card ${product.alt ? "product-card-alt" : ""}`}>
        <Image
          src={product.image}
          alt={product.subtitle}
          fill
          className={`object-cover transition-transform duration-700 group-hover:scale-110`}
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 33vw"
        />
        
        {/* Removed internal shadows as requested */}
        <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        <div className="text-center px-4 relative z-10 mt-auto pb-8">
          <div
            className={`font-display text-2xl mb-1 drop-shadow-md ${
              product.alt ? "text-gold-light" : "text-ink"
            }`}
          >
            {product.name}
          </div>
          <div
            className={`text-[10px] tracking-[0.3em] uppercase ${
              product.alt ? "text-cream/80" : "text-muted"
            }`}
          >
            {product.tags}
          </div>
        </div>

        {/* View Products overlay on hover */}
        <div className="absolute inset-0 bg-ink/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-20">
          <span className="bg-gold text-ink px-6 py-3 text-[10px] tracking-widest uppercase font-bold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 shadow-xl">
            View Collection →
          </span>
        </div>
      </div>

      <div className="mt-4 flex justify-between items-start px-1">
        <div>
          <div className="font-medium text-ink text-sm">{product.subtitle}</div>
          <div className="text-[11px] text-muted tracking-wide mt-0.5">
            Manufacturer Direct Pricing
          </div>
        </div>
        <div className="text-gold-dark text-[11px] font-bold tracking-tighter">{product.moq}</div>
      </div>
    </Link>
  );
}

export default function ProductsSection() {
  return (
    <section id="products" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-8 h-[1px] bg-gold" />
            <span className="section-label !mb-0">Main Categories</span>
            <span className="w-8 h-[1px] bg-gold" />
          </div>
          <h2 className="font-display text-4xl md:text-5xl text-ink">
            Our <span className="italic text-gold-dark">Collections</span>
          </h2>
          <p className="text-muted mt-4 max-w-xl mx-auto text-sm">
            Discover a wide variety of premium men&apos;s wear at competitive 
            wholesale prices, designed for modern retailers.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6">
          {products.map((product) => (
            <ProductCard key={product.name} product={product} />
          ))}
        </div>

        <div className="text-center mt-16">
          <a
            href="https://wa.me/919672299156?text=Hello%20Porwal%20Clothes%20-%20Send%20full%20catalog"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold inline-block px-12 py-4 font-medium tracking-widest text-xs uppercase shadow-gold"
          >
            Request Full Catalog
          </a>
        </div>
      </div>
    </section>
  );
}
