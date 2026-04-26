export default function AboutSection() {
  return (
    <section id="about" className="py-24 md:py-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Visual Side */}
          <div className="relative group hidden lg:block">
            <div className="aspect-[4/5] relative overflow-hidden border border-gold/10">
              <img 
                src="/T6.png.jpeg" 
                alt="Quality Fabric" 
                className="object-cover w-full h-full transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-ink/10 group-hover:bg-transparent transition-colors duration-500" />
            </div>
            <div className="absolute -bottom-8 -right-8 w-2/3 aspect-square bg-cream border border-gold/20 -z-10" />
          </div>

          {/* Text Side */}
          <div className="text-left">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-10 h-[1px] bg-gold" />
              <span className="section-label !mb-0">Our Heritage</span>
            </div>
            
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-ink mb-8 leading-tight">
              A Trusted <br />
              <span className="italic text-gold-dark">Wholesale Legacy.</span>
            </h2>
            
            <div className="space-y-6 text-muted text-lg leading-relaxed font-light">
              <p>
                Founded in 2015, Porwal Clothes has emerged as a cornerstone of the 
                readymade garment industry. We bridge the gap between world-class 
                manufacturing and retail excellence.
              </p>
              <p>
                Our philosophy is simple: source the finest fabrics, maintain direct 
                relationships with mills, and provide retailers with a competitive 
                edge through superior quality and wholesale pricing.
              </p>
            </div>

            <div className="mt-10 p-8 border-l-2 border-gold bg-cream/30 italic text-ink/80 text-lg">
              &ldquo;Whether a small boutique batch or a large-scale bulk order, 
              the precision of our quality remains uncompromised.&rdquo;
            </div>
            
            <div className="mt-12">
              <a href="#contact" className="text-ink font-semibold tracking-widest text-xs uppercase border-b border-gold pb-2 hover:text-gold transition-colors">
                Read Full Story →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
