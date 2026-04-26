import Image from "next/image";

const WHATSAPP = "919672299156";
const url = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(
  "Hello Porwal Clothes — Send me the latest catalog with photos and live stock"
)}`;

export default function CatalogBanner() {
  return (
    <section className="py-20 md:py-28 bg-paper">
      <div className="max-w-7xl mx-auto px-6">
        <div className="relative grid lg:grid-cols-12 overflow-hidden bg-ink text-cream min-h-[460px]">
          {/* Left: Imagery */}
          <div className="relative lg:col-span-6 min-h-[280px] lg:min-h-full">
            <Image
              src="/T1.png.jpeg"
              alt="Porwal Clothes Catalog"
              fill
              className="object-cover opacity-90"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-ink/30 via-transparent to-ink/40" />
            <div className="absolute top-6 left-6 flex items-center gap-3">
              <span className="w-8 h-[1px] bg-gold-light" />
              <span className="text-[10px] tracking-[0.32em] uppercase text-gold-light font-semibold">
                The Catalog · 2026
              </span>
            </div>
          </div>

          {/* Right: Copy */}
          <div className="lg:col-span-6 p-8 md:p-12 lg:p-16 flex flex-col justify-center bg-hairlines">
            <div className="text-[10px] tracking-[0.32em] uppercase text-gold-light/80 font-semibold mb-4">
              Wholesale Catalog
            </div>
            <h2 className="font-display text-3xl md:text-5xl leading-[1.05]">
              1000+ SKUs. <br />
              <span className="italic text-gold">Sent to your WhatsApp.</span>
            </h2>
            <p className="text-cream/70 mt-6 text-base md:text-lg max-w-md leading-relaxed">
              Studio-shot product photos, live stock status, fabric details and
              wholesale pricing — delivered straight to your phone within
              minutes of request.
            </p>

            <ul className="mt-8 space-y-2.5 text-sm text-cream/75">
              {[
                "PDF + photo bundle",
                "Live stock & price list",
                "Updated weekly",
                "No commitment",
              ].map((f) => (
                <li key={f} className="flex items-center gap-3">
                  <svg className="w-4 h-4 text-gold shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12l5 5L20 7" />
                  </svg>
                  {f}
                </li>
              ))}
            </ul>

            <div className="mt-10">
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-gold text-ink px-8 py-4 text-[11px] tracking-[0.24em] uppercase font-bold hover:bg-gold-light transition-colors"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                  <path d="M20.52 3.48A11.93 11.93 0 0012.04 0C5.5 0 .2 5.3.2 11.84c0 2.09.55 4.13 1.6 5.93L0 24l6.4-1.68a11.84 11.84 0 005.64 1.44h.01c6.55 0 11.85-5.3 11.85-11.84 0-3.16-1.23-6.13-3.38-8.44z" />
                </svg>
                Get Catalog on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
