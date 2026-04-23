"use client";

import { useState } from "react";

const WHATSAPP_NUMBER = "9672299156";

const productOptions = [
  "Shirts",
  "T-Shirts",
  "Lowers / Track Pants",
  "Jeans",
  "Kurta",
  "Mixed Combos",
  "Full Catalog",
];

type FormStatus = "idle" | "loading" | "success" | "error";

export default function ContactSection() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [product, setProduct] = useState("Shirts");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      // 1. Send to email API
      const res = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, phone, city, product, message }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Failed to send inquiry");
      }

      setStatus("success");

      // 2. Also open WhatsApp
      const text =
        `Hello Porwal Clothes%0A` +
        `Name: ${encodeURIComponent(name)}%0A` +
        (phone ? `Phone: ${encodeURIComponent(phone)}%0A` : "") +
        (city ? `City/Shop: ${encodeURIComponent(city)}%0A` : "") +
        `Interested in: ${encodeURIComponent(product)}%0A` +
        (message ? `Message: ${encodeURIComponent(message)}%0A` : "") +
        `(From website inquiry)`;

      window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, "_blank");

      // Reset form after 3s
      setTimeout(() => {
        setName("");
        setPhone("");
        setCity("");
        setProduct("Shirts");
        setMessage("");
        setStatus("idle");
      }, 3000);
    } catch (err) {
      setStatus("error");
      setErrorMsg(
        err instanceof Error ? err.message : "Something went wrong"
      );
      // Still try WhatsApp as fallback
      const text =
        `Hello Porwal Clothes%0A` +
        `Name: ${encodeURIComponent(name)}%0A` +
        (phone ? `Phone: ${encodeURIComponent(phone)}%0A` : "") +
        (city ? `City/Shop: ${encodeURIComponent(city)}%0A` : "") +
        `Interested in: ${encodeURIComponent(product)}%0A` +
        (message ? `Message: ${encodeURIComponent(message)}%0A` : "") +
        `(From website inquiry)`;

      window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, "_blank");

      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-cream">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12">
        {/* Info + Map */}
        <div>
          <div className="section-label mb-4">Contact Us</div>
          <h2 className="font-display text-3xl md:text-5xl text-ink mb-6">
            Orders, Pricing, or Catalogs —{" "}
            <span className="italic text-gold-dark">
              Let&apos;s Talk Directly
            </span>
          </h2>
          <p className="text-muted leading-relaxed mb-8">
            Drop us a message on WhatsApp — we will immediately share details on
            price lists, availability, and bulk discounts. Store visits are also
            welcome.
          </p>

          <div className="space-y-5">
            <div>
              <div className="text-xs tracking-widest uppercase text-muted mb-1">
                WhatsApp
              </div>
              <a
                href={`https://wa.me/91${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="font-display text-2xl text-ink hover:text-gold-dark transition-colors"
              >
                +91 {WHATSAPP_NUMBER}
              </a>
            </div>
            <div>
              <div className="text-xs tracking-widest uppercase text-muted mb-1">
                Instagram
              </div>
              <a
                href="https://instagram.com/porwal_clothes"
                target="_blank"
                rel="noopener noreferrer"
                className="font-display text-2xl text-ink hover:text-gold-dark transition-colors"
              >
                @porwal_clothes
              </a>
            </div>
            <div>
              <div className="text-xs tracking-widest uppercase text-muted mb-1">
                Shop
              </div>
              <div className="text-lg text-ink">
                Mank chowk brampuri mohalla sarwar
                <br />
                305403, Rajasthan
              </div>
            </div>
            <div>
              <div className="text-xs tracking-widest uppercase text-muted mb-1">
                Business Hours
              </div>
              <div className="text-lg text-ink">Mon–Sat · 10:00 AM – 8:00 PM</div>
            </div>
          </div>

          {/* Google Maps Embed */}
          <div className="mt-8">
            <div className="text-xs tracking-widest uppercase text-muted mb-3">
              📍 Find Us On Map
            </div>
            <div className="relative border border-gold/30 overflow-hidden bg-white">
              <div className="absolute inset-0 border-[6px] border-white pointer-events-none z-10" />
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14369.5!2d75.0!3d26.07!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396d2e11c44e2d73%3A0x9c5f0a07c5d1e7b3!2sSarwar%2C%20Rajasthan%20305403!5e0!3m2!1sen!2sin!4v1713700000000!5m2!1sen!2sin"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Porwal Clothes Location - Sarwar, Rajasthan"
                className="w-full"
              />
            </div>
            <a
              href="https://www.google.com/maps/search/Porwal+Clothes+Mank+Chowk+Brampuri+Mohalla+Sarwar+305403+Rajasthan"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-3 text-sm text-gold-dark hover:text-gold transition-colors font-medium"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
              Open in Google Maps
            </a>
          </div>
        </div>

        {/* Inquiry Form */}
        <div className="bg-white p-8 md:p-10 border border-gold/30 h-fit">
          <div className="font-display text-2xl text-ink mb-2">
            Quick Inquiry
          </div>
          <p className="text-muted text-sm mb-6">
            Fill the form — we&apos;ll get your inquiry on email &amp; WhatsApp both.
          </p>

          {/* Success Message */}
          {status === "success" && (
            <div className="mb-4 p-4 bg-green-50 border border-green-200 text-green-800 text-sm flex items-center gap-2">
              <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>✅ Inquiry sent successfully! Check WhatsApp too.</span>
            </div>
          )}

          {/* Error Message */}
          {status === "error" && (
            <div className="mb-4 p-4 bg-red-50 border border-red-200 text-red-800 text-sm flex items-center gap-2">
              <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>{errorMsg || "Email failed, but WhatsApp is opening."}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="text-xs tracking-widest uppercase text-muted block mb-2">
                Your Name *
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
                disabled={status === "loading"}
                className="w-full border border-muted/30 px-4 py-3 focus:outline-none focus:border-gold-dark bg-cream transition-colors disabled:opacity-50"
              />
            </div>
            <div>
              <label className="text-xs tracking-widest uppercase text-muted block mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+91 98765 43210"
                disabled={status === "loading"}
                className="w-full border border-muted/30 px-4 py-3 focus:outline-none focus:border-gold-dark bg-cream transition-colors disabled:opacity-50"
              />
            </div>
            <div>
              <label className="text-xs tracking-widest uppercase text-muted block mb-2">
                City / Shop Name
              </label>
              <input
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder="Your city or shop name"
                disabled={status === "loading"}
                className="w-full border border-muted/30 px-4 py-3 focus:outline-none focus:border-gold-dark bg-cream transition-colors disabled:opacity-50"
              />
            </div>
            <div>
              <label className="text-xs tracking-widest uppercase text-muted block mb-2">
                Interested In
              </label>
              <select
                value={product}
                onChange={(e) => setProduct(e.target.value)}
                disabled={status === "loading"}
                className="w-full border border-muted/30 px-4 py-3 focus:outline-none focus:border-gold-dark bg-cream transition-colors disabled:opacity-50"
              >
                {productOptions.map((opt) => (
                  <option key={opt}>{opt}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="text-xs tracking-widest uppercase text-muted block mb-2">
                Message
              </label>
              <textarea
                rows={3}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Any specific requirement..."
                disabled={status === "loading"}
                className="w-full border border-muted/30 px-4 py-3 focus:outline-none focus:border-gold-dark bg-cream transition-colors disabled:opacity-50"
              />
            </div>
            <button
              type="submit"
              disabled={status === "loading"}
              className="btn-gold w-full py-4 font-medium tracking-widest text-sm uppercase cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {status === "loading" ? (
                <>
                  <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                  </svg>
                  Sending...
                </>
              ) : (
                "Send Inquiry"
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
