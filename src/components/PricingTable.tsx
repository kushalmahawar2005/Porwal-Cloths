import Link from "next/link";

const pricingData = [
  {
    category: "Shirts",
    slug: "shirts",
    types: "Formal, Casual, Party",
    priceRange: "₹260 – ₹550",
    moq: "50 pcs",
    highlight: false,
  },
  {
    category: "T-Shirts",
    slug: "tshirts",
    types: "Round Neck, Polo, Printed",
    priceRange: "₹120 – ₹300",
    moq: "100 pcs",
    highlight: true,
  },
  {
    category: "Lowers",
    slug: "lowers",
    types: "Track, Jogger, Pajama",
    priceRange: "₹120 – ₹380",
    moq: "50 pcs",
    highlight: false,
  },
  {
    category: "Jeans",
    slug: "jeans",
    types: "Slim, Regular, Stretch",
    priceRange: "₹380 – ₹700",
    moq: "30 pcs",
    highlight: false,
  },
  {
    category: "Kurta",
    slug: "kurta",
    types: "Cotton, Silk, Festive",
    priceRange: "₹250 – ₹1,100",
    moq: "20 pcs",
    highlight: true,
  },
  {
    category: "Combos",
    slug: "combos",
    types: "Mixed Bulk Sets",
    priceRange: "₹2,200 – ₹20,000",
    moq: "1 set",
    highlight: false,
  },
];

export default function PricingTable() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <div className="section-label mb-4">Transparent Pricing</div>
          <h2 className="font-display text-3xl md:text-5xl text-ink">
            Wholesale{" "}
            <span className="italic text-gold-dark">Price Guide</span>
          </h2>
          <p className="text-muted mt-4 max-w-2xl mx-auto">
            Manufacturer-direct pricing with no middleman. Prices vary by fabric,
            design, and order quantity. Contact for exact quotes.
          </p>
        </div>

        {/* Desktop Table */}
        <div className="hidden md:block overflow-hidden border border-gold/20">
          <table className="w-full">
            <thead>
              <tr className="bg-ink text-cream">
                <th className="text-left px-6 py-4 text-xs tracking-widest uppercase font-medium">
                  Category
                </th>
                <th className="text-left px-6 py-4 text-xs tracking-widest uppercase font-medium">
                  Types Available
                </th>
                <th className="text-center px-6 py-4 text-xs tracking-widest uppercase font-medium">
                  Price Range (per pc)
                </th>
                <th className="text-center px-6 py-4 text-xs tracking-widest uppercase font-medium">
                  Min Order
                </th>
                <th className="text-center px-6 py-4 text-xs tracking-widest uppercase font-medium">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {pricingData.map((item, i) => (
                <tr
                  key={item.category}
                  className={`border-t border-gold/10 transition-colors hover:bg-cream/50 ${
                    i % 2 === 0 ? "bg-white" : "bg-cream/30"
                  }`}
                >
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-3">
                      {item.highlight && (
                        <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
                      )}
                      <span className="font-display text-lg text-ink">
                        {item.category}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-5 text-muted text-sm">
                    {item.types}
                  </td>
                  <td className="px-6 py-5 text-center">
                    <span className="font-display text-xl text-gold-dark font-semibold">
                      {item.priceRange}
                    </span>
                  </td>
                  <td className="px-6 py-5 text-center">
                    <span className="bg-cream text-ink text-xs tracking-widest uppercase px-3 py-1.5 border border-gold/20">
                      {item.moq}
                    </span>
                  </td>
                  <td className="px-6 py-5 text-center">
                    <Link
                      href={`/products/${item.slug}`}
                      className="text-gold-dark hover:text-gold text-sm font-medium tracking-wide transition-colors"
                    >
                      View →
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Cards */}
        <div className="md:hidden space-y-4">
          {pricingData.map((item) => (
            <Link
              key={item.category}
              href={`/products/${item.slug}`}
              className="block bg-white border border-gold/20 p-5 hover:border-gold/40 transition-colors"
            >
              <div className="flex justify-between items-start mb-3">
                <div className="flex items-center gap-2">
                  {item.highlight && (
                    <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
                  )}
                  <span className="font-display text-xl text-ink">
                    {item.category}
                  </span>
                </div>
                <span className="bg-cream text-ink text-[10px] tracking-widest uppercase px-2 py-1 border border-gold/20">
                  {item.moq}
                </span>
              </div>
              <div className="text-sm text-muted mb-2">{item.types}</div>
              <div className="font-display text-2xl text-gold-dark font-semibold">
                {item.priceRange}
              </div>
              <div className="text-xs text-muted mt-1">per piece · tap to view products</div>
            </Link>
          ))}
        </div>

        {/* Note */}
        <div className="mt-8 text-center">
          <p className="text-muted text-sm italic">
            * Prices are indicative and vary based on fabric, design, and order
            quantity. Contact us for exact wholesale rates.
          </p>
          <a
            href="https://wa.me/919672299156?text=Hello%20Porwal%20Clothes%20-%20Send%20latest%20Price%20List"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold inline-block mt-6 px-8 py-3 font-medium tracking-wider text-sm uppercase"
          >
            Get Exact Price List
          </a>
        </div>
      </div>
    </section>
  );
}
