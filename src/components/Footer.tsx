import Image from "next/image";
import Link from "next/link";

const WHATSAPP = "919672299156";

const categories = [
  { label: "Shirts", href: "/products/shirt" },
  { label: "T-Shirts", href: "/products/t-shirt" },
  { label: "Lowers", href: "/products/lower" },
  { label: "Jeans", href: "/products/jeans" },
  { label: "Kurta Pajama", href: "/products/kurta-pajama" },
];

const company = [
  { label: "About", href: "/#about" },
  { label: "Why Us", href: "/#why-us" },
  { label: "Pricing", href: "/#pricing" },
  { label: "FAQ", href: "/#faq" },
  { label: "Contact", href: "/#contact" },
];

export default function Footer() {
  return (
    <footer className="bg-ink text-cream/75 relative overflow-hidden">
      {/* Hairline gold top */}
      <div className="thin-rule" />

      <div className="max-w-7xl mx-auto px-6 pt-20 pb-10">
        <div className="grid grid-cols-2 md:grid-cols-12 gap-12 md:gap-10">
          {/* Brand */}
          <div className="col-span-2 md:col-span-5">
            <Link href="/#home" className="inline-flex items-center gap-3 group">
              <div className="relative w-11 h-11 overflow-hidden rounded-full border border-gold/30">
                <Image
                  src="/my-logo.png"
                  alt="Porwal Clothes"
                  fill
                  className="object-cover"
                />
              </div>
              <span className="font-display text-base tracking-[0.32em] text-cream">
                PORWAL CLOTHES
              </span>
            </Link>
            <p className="mt-6 text-sm leading-relaxed text-cream/60 max-w-sm">
              Manufacturer-direct premium garments for retailers across India.
              Shirts, T-shirts, jeans, lowers and kurta pajamas — sourced from
              mills, finished in-house, dispatched pan-India.
            </p>

            {/* Newsletter / WhatsApp */}
            <div className="mt-8">
              <div className="text-[10px] tracking-[0.32em] uppercase text-gold-light/80 font-semibold mb-3">
                Get the latest catalog
              </div>
              <a
                href={`https://wa.me/${WHATSAPP}?text=Hello%20Porwal%20Clothes%20-%20Add%20me%20to%20your%20catalog%20broadcast`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-gold text-ink px-6 py-3 text-[11px] tracking-[0.24em] uppercase font-bold hover:bg-gold-light transition-colors"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                  <path d="M20.52 3.48A11.93 11.93 0 0012.04 0C5.5 0 .2 5.3.2 11.84c0 2.09.55 4.13 1.6 5.93L0 24l6.4-1.68a11.84 11.84 0 005.64 1.44h.01c6.55 0 11.85-5.3 11.85-11.84 0-3.16-1.23-6.13-3.38-8.44zM12.05 21.7h-.01a9.83 9.83 0 01-5.01-1.37l-.36-.21-3.8 1 1.02-3.7-.24-.38a9.84 9.84 0 01-1.51-5.2c0-5.43 4.42-9.85 9.86-9.85 2.63 0 5.1 1.03 6.96 2.89a9.78 9.78 0 012.88 6.97c0 5.43-4.42 9.85-9.86 9.85z" />
                </svg>
                Join WhatsApp Broadcast
              </a>
            </div>
          </div>

          {/* Categories */}
          <div className="md:col-span-2">
            <div className="text-[10px] tracking-[0.32em] uppercase text-gold-light/80 font-semibold mb-5">
              Shop
            </div>
            <ul className="space-y-3 text-sm">
              {categories.map((c) => (
                <li key={c.href}>
                  <Link
                    href={c.href}
                    className="text-cream/70 hover:text-gold transition-colors"
                  >
                    {c.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="md:col-span-2">
            <div className="text-[10px] tracking-[0.32em] uppercase text-gold-light/80 font-semibold mb-5">
              Company
            </div>
            <ul className="space-y-3 text-sm">
              {company.map((c) => (
                <li key={c.href}>
                  <Link
                    href={c.href}
                    className="text-cream/70 hover:text-gold transition-colors"
                  >
                    {c.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-3">
            <div className="text-[10px] tracking-[0.32em] uppercase text-gold-light/80 font-semibold mb-5">
              Reach Us
            </div>
            <ul className="space-y-3 text-sm text-cream/70">
              <li className="flex items-start gap-3">
                <svg className="w-4 h-4 mt-0.5 text-gold shrink-0" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 10.5c0 7.5-9 12-9 12s-9-4.5-9-12a9 9 0 1118 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 12a2 2 0 100-4 2 2 0 000 4z" />
                </svg>
                <span>Rajasthan, India · Pan-India dispatch</span>
              </li>
              <li>
                <a
                  href={`tel:+${WHATSAPP}`}
                  className="hover:text-gold transition-colors inline-flex items-center gap-3"
                >
                  <svg className="w-4 h-4 text-gold shrink-0" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h2.5L9 7l-2 1a11 11 0 006 6l1-2 4 1.5V19a2 2 0 01-2 2A16 16 0 013 5z" />
                  </svg>
                  +91 96722 99156
                </a>
              </li>
              <li>
                <a
                  href={`https://wa.me/${WHATSAPP}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gold transition-colors inline-flex items-center gap-3"
                >
                  <svg className="w-4 h-4 text-gold shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.52 3.48A11.93 11.93 0 0012.04 0C5.5 0 .2 5.3.2 11.84c0 2.09.55 4.13 1.6 5.93L0 24l6.4-1.68a11.84 11.84 0 005.64 1.44h.01c6.55 0 11.85-5.3 11.85-11.84 0-3.16-1.23-6.13-3.38-8.44z" />
                  </svg>
                  WhatsApp Order
                </a>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-4 h-4 mt-0.5 text-gold shrink-0" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 2M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Mon – Sat · 10 AM – 8 PM</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom row */}
        <div className="mt-16 pt-8 border-t border-cream/10 flex flex-col md:flex-row justify-between items-center gap-4 text-[11px] tracking-[0.18em] uppercase text-cream/50">
          <div>© {new Date().getFullYear()} Porwal Clothes — Wholesale Men&apos;s Readymade</div>
          <div className="flex gap-6">
            <Link href="/#contact" className="hover:text-gold transition-colors">Privacy</Link>
            <Link href="/#contact" className="hover:text-gold transition-colors">Terms</Link>
            <Link href="/#contact" className="hover:text-gold transition-colors">Shipping</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
