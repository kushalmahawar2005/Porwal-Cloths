"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const WHATSAPP = "919672299156";
const waUrl = `https://wa.me/${WHATSAPP}?text=Hello%20Porwal%20Clothes`;

const items = [
  {
    label: "Home",
    href: "/",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 11l9-8 9 8M5 10v10h4v-6h6v6h4V10" />
      </svg>
    ),
  },
  {
    label: "Shop",
    href: "/#products",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 7h16l-1.5 12.5a2 2 0 01-2 1.5h-9a2 2 0 01-2-1.5L4 7zM9 7V5a3 3 0 016 0v2" />
      </svg>
    ),
  },
  {
    label: "Catalog",
    href: "/#pricing",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 5a2 2 0 012-2h7l5 5v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zM13 3v6h6M8 13h8M8 17h5" />
      </svg>
    ),
  },
];

export default function MobileBottomBar() {
  const [hidden, setHidden] = useState(false);
  const [lastY, setLastY] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      // Hide when scrolling down fast past 200px, show on up
      if (y > 200 && y - lastY > 6) setHidden(true);
      else if (lastY - y > 6 || y < 100) setHidden(false);
      setLastY(y);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [lastY]);

  return (
    <nav
      className={`md:hidden fixed bottom-0 inset-x-0 z-40 transition-transform duration-500 ${
        hidden ? "translate-y-full" : "translate-y-0"
      }`}
      aria-label="Bottom navigation"
    >
      <div className="bg-paper/95 backdrop-blur-md border-t border-gold/20 shadow-[0_-8px_24px_-12px_rgba(13,13,14,0.18)] grid grid-cols-4 items-stretch">
        {items.map((it) => (
          <Link
            key={it.label}
            href={it.href}
            className="flex flex-col items-center justify-center gap-1 py-3 text-ink/70 hover:text-gold-dark active:text-gold transition-colors"
          >
            <span>{it.icon}</span>
            <span className="text-[10px] tracking-[0.2em] uppercase font-medium">{it.label}</span>
          </Link>
        ))}
        <a
          href={waUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center gap-1 py-3 bg-whatsapp text-white"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
            <path d="M20.52 3.48A11.93 11.93 0 0012.04 0C5.5 0 .2 5.3.2 11.84c0 2.09.55 4.13 1.6 5.93L0 24l6.4-1.68a11.84 11.84 0 005.64 1.44h.01c6.55 0 11.85-5.3 11.85-11.84 0-3.16-1.23-6.13-3.38-8.44z" />
          </svg>
          <span className="text-[10px] tracking-[0.2em] uppercase font-bold">WhatsApp</span>
        </a>
      </div>
      {/* iOS safe area */}
      <div className="bg-paper/95 h-[env(safe-area-inset-bottom)]" />
    </nav>
  );
}
