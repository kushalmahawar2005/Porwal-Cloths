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
    name: "Shirts",
    subtitle: "Men's Shirts",
    tags: "Formal · Casual",
    moq: "MOQ 50+",
    image: "/shirts.png",
    alt: false,
    slug: "shirts",
  },
  {
    name: "T-Shirts",
    subtitle: "T-Shirts",
    tags: "Round Neck · Polo",
    moq: "MOQ 100+",
    image: "/tshirts.png",
    alt: true,
    slug: "tshirts",
  },
  {
    name: "Lowers",
    subtitle: "Lowers & Track Pants",
    tags: "Track · Jogger · Pajama",
    moq: "MOQ 50+",
    image: "/lowers.png",
    alt: false,
    slug: "lowers",
  },
  {
    name: "Jeans",
    subtitle: "Denim Jeans",
    tags: "Slim · Regular · Stretch",
    moq: "MOQ 30+",
    image: "/jeans.png",
    alt: true,
    slug: "jeans",
  },
  {
    name: "Kurta",
    subtitle: "Men's Kurta",
    tags: "Ethnic · Festive",
    moq: "MOQ 30+",
    image: "/kurta.png",
    alt: false,
    slug: "kurta",
  },
  {
    name: "Combos",
    subtitle: "Mixed Bulk Combos",
    tags: "Mix · Match · Bulk",
    moq: "MOQ varies",
    image: "/combo.png",
    alt: true,
    slug: "combos",
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
          className={`object-cover transition-transform duration-500 group-hover:scale-110 ${
            product.alt ? "opacity-75" : "opacity-70"
          }`}
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 33vw"
        />
        <div
          className={`absolute inset-0 z-0 ${
            product.alt
              ? "bg-gradient-to-t from-ink/90 via-ink/30 to-transparent mix-blend-multiply"
              : "bg-gradient-to-t from-ink/80 via-ink/20 to-transparent"
          }`}
        />
        <div className="text-center px-4 relative z-10 mt-auto pb-8">
          <div
            className={`font-display text-3xl mb-2 drop-shadow-lg ${
              product.alt ? "text-gold-light" : "text-cream"
            }`}
          >
            {product.name}
          </div>
          <div
            className={`text-xs tracking-widest uppercase drop-shadow-md ${
              product.alt ? "text-cream" : "text-gold-light"
            }`}
          >
            {product.tags}
          </div>
        </div>

        {/* View Products overlay on hover */}
        <div className="absolute inset-0 bg-ink/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-20">
          <span className="bg-gold text-ink px-6 py-3 text-xs tracking-widest uppercase font-bold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
            View Products →
          </span>
        </div>
      </div>

      <div className="mt-4 flex justify-between items-start">
        <div>
          <div className="font-medium text-ink">{product.subtitle}</div>
          <div className="text-sm text-muted">
            {product.name === "Shirts" && "Formal, casual, party wear"}
            {product.name === "T-Shirts" && "Round neck, polo, printed"}
            {product.name === "Lowers" && "Daily wear, sports, lounge"}
            {product.name === "Jeans" && "Multiple washes, fits, sizes"}
            {product.name === "Kurta" && "Cotton, silk, party & festive"}
            {product.name === "Combos" && "Curated sets for retailers"}
          </div>
        </div>
        <div className="text-gold-dark text-sm font-medium">{product.moq}</div>
      </div>
    </Link>
  );
}

export default function ProductsSection() {
  return (
    <section id="products" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <div className="section-label mb-4">Our Collection</div>
          <h2 className="font-display text-3xl md:text-5xl text-ink">
            Premium Range,{" "}
            <span className="italic text-gold-dark">Wholesale Pricing</span>
          </h2>
          <p className="text-muted mt-4 max-w-2xl mx-auto">
            A wide variety in every product category — sizes, colors, and fabric
            options. Special pricing for bulk orders.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
          {products.map((product) => (
            <ProductCard key={product.name} product={product} />
          ))}
        </div>

        <div className="text-center mt-14">
          <a
            href="https://wa.me/919672299156?text=I%20need%20the%20catalog%20with%20prices"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold inline-block px-10 py-4 font-medium tracking-wider text-sm uppercase"
          >
            Request Full Catalog
          </a>
        </div>
      </div>
    </section>
  );
}
