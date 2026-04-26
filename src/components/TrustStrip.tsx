const items = [
  {
    title: "Manufacturer Direct",
    sub: "Mill-to-retailer pricing",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.4} className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 21V9l9-6 9 6v12M3 21h18M9 21v-7h6v7" />
      </svg>
    ),
  },
  {
    title: "Pan-India Dispatch",
    sub: "Trusted couriers · 3–7 days",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.4} className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 7h11v9H3zM14 10h4l3 3v3h-7M6 19a2 2 0 100-4 2 2 0 000 4zm12 0a2 2 0 100-4 2 2 0 000 4z" />
      </svg>
    ),
  },
  {
    title: "Quality Assured",
    sub: "Hand-checked every piece",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.4} className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3l8 4v5c0 5-3.5 8.5-8 9-4.5-.5-8-4-8-9V7l8-4zM9 12l2 2 4-4" />
      </svg>
    ),
  },
  {
    title: "WhatsApp Orders",
    sub: "Live chat · instant quotes",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.4} className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 11.5a8.5 8.5 0 11-3.7-7L21 3l-1.5 3.7A8.5 8.5 0 0121 11.5zM8 12h.01M12 12h.01M16 12h.01" />
      </svg>
    ),
  },
];

export default function TrustStrip() {
  return (
    <section className="bg-paper border-y border-gold/15">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 divide-x divide-gold/10">
        {items.map((it) => (
          <div
            key={it.title}
            className="flex items-center gap-4 px-4 lg:px-8 py-5 lg:py-6 first:pl-0 last:pr-0"
          >
            <div className="shrink-0 w-11 h-11 rounded-full bg-cream border border-gold/30 flex items-center justify-center text-gold-dark">
              {it.icon}
            </div>
            <div className="min-w-0">
              <div className="font-display text-[15px] text-ink leading-tight truncate">
                {it.title}
              </div>
              <div className="text-[11px] tracking-[0.18em] uppercase text-muted mt-1 truncate">
                {it.sub}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
