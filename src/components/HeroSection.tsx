import Image from "next/image";

export default function HeroSection() {
  return (
    <section id="home" className="hero-grain bg-cream py-20 md:py-32">
      <div className="max-w-6xl mx-auto px-6 flex flex-col-reverse md:grid md:grid-cols-2 gap-12 items-center">
        {/* Text */}
        <div className="text-center md:text-left mt-8 md:mt-0">
          <div className="section-label mb-4">Wholesale Since 2015</div>
          <h1 className="font-display text-4xl md:text-6xl leading-tight text-ink mb-6">
            Premium
            <br />
            <span className="text-gold-dark italic">Men&apos;s Readymade</span>
            <br />
            Wholesale.
          </h1>
          <p className="text-muted text-lg mb-8 leading-relaxed">
            Shirts, t-shirts, lowers, jeans, and a complete men&apos;s readymade
            range. Manufacturer-direct pricing, flexible MOQ, and pan-India
            delivery. A reliable wholesale partner for retailers and resellers.
          </p>
          <div className="flex flex-wrap justify-center md:justify-start gap-4">
            <a
              href="https://wa.me/919672299156?text=Hello%20Porwal%20Clothes%20-%20Send%20Price%20List"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold px-8 py-4 font-medium tracking-wide text-sm uppercase"
            >
              Get Price List
            </a>
            <a
              href="#products"
              className="btn-ghost px-8 py-4 font-medium tracking-wide text-sm uppercase"
            >
              View Products
            </a>
          </div>
        </div>

        {/* Hero Image */}
        <div className="relative group">
          <div className="aspect-square rounded-sm relative overflow-hidden flex items-center justify-center bg-transparent">
            <Image
              src="/hero.png"
              alt="Porwal Clothes Wholesale Shop"
              fill
              className="object-cover opacity-100 transition-transform duration-700 group-hover:scale-105"
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-black/20 z-0" />
            <div className="absolute inset-6 border border-cream/50 z-10 pointer-events-none" />
            <div className="absolute inset-10 border border-cream/30 z-10 pointer-events-none" />
            <div className="relative text-center z-20 drop-shadow-2xl">
              <div className="text-cream text-xl lg:text-3xl tracking-[0.4em] drop-shadow-md font-bold uppercase">
                PORWAL CLOTHES
              </div>
              <div className="mt-4 inline-flex items-center text-cream text-[11px] tracking-widest drop-shadow-md font-bold">
                <span className="w-8 h-[2px] bg-gold-light" />
                <span className="mx-4">WHOLESALE</span>
                <span className="w-8 h-[2px] bg-gold-light" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
