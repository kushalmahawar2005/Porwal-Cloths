import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-ink text-cream/70 py-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-3">
          <span className="font-display text-sm tracking-[0.3em]">
            PORWAL CLOTHES
          </span>
        </div>
        <div className="text-xs tracking-widest uppercase">
          © {new Date().getFullYear()} Porwal Clothes. Wholesale Men&apos;s
          Readymade.
        </div>
        <div className="flex gap-4 text-xs tracking-widest">
          <Link href="#about" className="hover:text-gold transition-colors">
            About
          </Link>
          <Link href="#products" className="hover:text-gold transition-colors">
            Products
          </Link>
          <Link href="#contact" className="hover:text-gold transition-colors">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}
