import Image from "next/image";

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-[80vh] flex items-center bg-white overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-cream/50 -skew-x-12 translate-x-20 z-0 hidden lg:block" />
      
      <div className="max-w-7xl mx-auto px-6 w-full relative z-10 py-20">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Text Content */}
          <div className="lg:col-span-6 xl:col-span-5 text-center lg:text-left order-2 lg:order-1">
            <div className="flex items-center justify-center lg:justify-start gap-3 mb-6">
              <span className="w-8 h-[1px] bg-gold" />
              <span className="section-label !mb-0">Premium Wholesale</span>
              <span className="w-8 h-[1px] bg-gold lg:hidden" />
            </div>
            
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl leading-[1.1] text-ink mb-8">
              The Art of <br />
              <span className="italic text-gold-dark">Men&apos;s Wear.</span>
            </h1>
            
            <p className="text-muted text-lg md:text-xl mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed font-light">
              Manufacturer-direct premium garments for retailers who demand excellence. 
              Shirts, T-shirts, Jeans, and more—delivered pan-India with flexible MOQ.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
              <a
                href="https://wa.me/919672299156?text=Hello%20Porwal%20Clothes%20-%20I%20saw%20your%20new%20collection"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold px-10 py-5 font-medium tracking-[0.2em] text-xs uppercase group overflow-hidden relative"
              >
                <span className="relative z-10">WhatsApp Order</span>
                <div className="absolute inset-0 bg-ink translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </a>
              <a
                href="#products"
                className="btn-ghost px-10 py-5 font-medium tracking-[0.2em] text-xs uppercase border-gold/20 hover:border-gold/50"
              >
                Explore Collection
              </a>
            </div>
            
            {/* Quick Stats */}
            <div className="mt-12 pt-12 border-t border-gold/10 grid grid-cols-3 gap-8">
              <div>
                <div className="font-display text-2xl text-ink">500+</div>
                <div className="text-[10px] tracking-widest uppercase text-muted mt-1">Retailers</div>
              </div>
              <div>
                <div className="font-display text-2xl text-ink">10+</div>
                <div className="text-[10px] tracking-widest uppercase text-muted mt-1">Categories</div>
              </div>
              <div>
                <div className="font-display text-2xl text-ink">Pan</div>
                <div className="text-[10px] tracking-widest uppercase text-muted mt-1">India</div>
              </div>
            </div>
          </div>
          
          {/* Visual Content */}
          <div className="lg:col-span-6 xl:col-span-7 relative order-1 lg:order-2">
            <div className="relative aspect-[4/5] md:aspect-[16/10] lg:aspect-square group">
              {/* Main Image */}
              <div className="absolute inset-0 z-10 border-[12px] border-white shadow-2xl overflow-hidden translate-x-4 -translate-y-4 lg:translate-x-8 lg:-translate-y-8 transition-transform duration-700 group-hover:translate-x-6 group-hover:-translate-y-6">
                <Image
                  src="/hero-new.png"
                  alt="Porwal Clothes Editorial"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              
              {/* Background Frame */}
              <div className="absolute inset-0 z-0 border-2 border-gold/20 translate-x-0 translate-y-0" />
              
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-4">
        <div className="text-[10px] tracking-[0.5em] uppercase text-gold-dark rotate-90 mb-8 origin-left">Scroll</div>
        <div className="w-[1px] h-20 bg-gradient-to-b from-gold/50 to-transparent" />
      </div>
    </section>
  );
}
