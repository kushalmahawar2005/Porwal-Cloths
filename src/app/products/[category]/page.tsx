import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { categories, getCategoryBySlug, getAllCategorySlugs } from "@/data/products";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import ProductGrid from "@/components/ProductGrid";

interface PageProps {
  params: Promise<{ category: string }>;
}

// Generate static paths for all categories
export async function generateStaticParams() {
  return getAllCategorySlugs().map((slug) => ({ category: slug }));
}

// Dynamic metadata for SEO
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { category: slug } = await params;
  const category = getCategoryBySlug(slug);
  if (!category) return { title: "Products — Porwal Clothes" };

  return {
    title: `${category.name} — Wholesale | Porwal Clothes`,
    description: category.description,
  };
}

export default async function CategoryPage({ params }: PageProps) {
  const { category: slug } = await params;
  const category = getCategoryBySlug(slug);

  if (!category) {
    notFound();
  }

  // Other categories for navigation
  const otherCategories = categories.filter((c) => c.slug !== slug);

  return (
    <>
      <Navbar />

      {/* Hero Banner */}
      <section className="relative bg-ink text-cream overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={category.heroImage}
            alt={category.name}
            fill
            className="object-cover opacity-30"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/80 to-ink/40" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 py-20 md:py-28">
          <div className="flex items-center gap-2 text-sm text-cream/60 mb-4">
            <Link href="/" className="hover:text-gold transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/#products" className="hover:text-gold transition-colors">
              Products
            </Link>
            <span>/</span>
            <span className="text-gold">{category.name}</span>
          </div>

          <h1 className="font-display text-4xl md:text-6xl mb-4">
            {category.name}
          </h1>
          <p className="text-gold-light tracking-widest text-sm uppercase mb-4">
            {category.tagline}
          </p>
          <p className="text-cream/70 text-lg max-w-2xl leading-relaxed">
            {category.description}
          </p>
          <div className="mt-6 flex items-center gap-3 text-sm">
            <span className="bg-gold/20 text-gold-light px-4 py-1.5 border border-gold/30">
              {category.products.length} Products
            </span>
            <a
              href={`https://wa.me/919672299156?text=Hello%20Porwal%20Clothes%20-%20I%20want%20to%20order%20${encodeURIComponent(category.name)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold px-6 py-1.5 font-medium tracking-wide uppercase"
            >
              Order on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="py-16 md:py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-6">
          <ProductGrid products={category.products} categoryName={category.name} />
        </div>
      </section>

      {/* Browse Other Categories */}
      <section className="py-16 bg-white border-t border-gold/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-10">
            <div className="section-label mb-3">Explore More</div>
            <h2 className="font-display text-2xl md:text-4xl text-ink">
              Other <span className="italic text-gold-dark">Categories</span>
            </h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {otherCategories.map((cat) => (
              <Link
                key={cat.slug}
                href={`/products/${cat.slug}`}
                className="group relative aspect-[4/3] overflow-hidden bg-ink"
              >
                <Image
                  src={cat.heroImage}
                  alt={cat.name}
                  fill
                  className="object-cover opacity-50 group-hover:opacity-70 group-hover:scale-110 transition-all duration-500"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/80 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4 text-center">
                  <div className="font-display text-lg text-cream group-hover:text-gold-light transition-colors">
                    {cat.name}
                  </div>
                  <div className="text-xs text-cream/60 tracking-wider mt-1">
                    {cat.products.length} Products
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-ink text-cream text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-display text-3xl md:text-4xl mb-4">
            Need <span className="italic text-gold">Custom Orders?</span>
          </h2>
          <p className="text-cream/60 mb-8">
            We handle custom bulk orders with specific sizes, colors, and fabric
            requirements. Contact us on WhatsApp for personalized pricing.
          </p>
          <a
            href="https://wa.me/919672299156?text=Hello%20Porwal%20Clothes%20-%20I%20need%20custom%20bulk%20order"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold inline-block px-10 py-4 font-medium tracking-wider text-sm uppercase"
          >
            Get Custom Quote
          </a>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </>
  );
}
