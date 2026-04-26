const messages = [
  "Manufacturer-direct pricing — no middleman",
  "Pan-India dispatch in 3–7 days",
  "Flexible MOQ from 30 pcs",
  "WhatsApp order: +91 96722 99156",
];

function Group() {
  return (
    <div className="flex shrink-0">
      {messages.map((msg, i) => (
        <span key={i} className="inline-flex items-center px-8 shrink-0">
          <span className="w-1 h-1 rounded-full bg-gold mr-4" />
          {msg}
        </span>
      ))}
    </div>
  );
}

export default function AnnouncementBar() {
  return (
    <div className="bg-ink text-cream/90 text-[11px] tracking-[0.28em] uppercase font-medium relative z-[60] border-b border-gold/15 overflow-hidden">
      <div className="flex whitespace-nowrap animate-marquee-loop py-2.5 w-max">
        <Group />
        <Group />
      </div>
    </div>
  );
}
