"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const WHATSAPP_NUMBER = "919672299156";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=Hello%20Porwal%20Clothes%20-%20I%20saw%20your%20website`;

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#products", label: "Products" },
  { href: "#why-us", label: "Why Us" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMobile = () => setMobileOpen(false);

  return (
    <nav
      className={`bg-ink text-cream sticky top-0 z-50 transition-shadow duration-300 ${
        scrolled ? "shadow-lg shadow-black/30" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        <Link href="#home" className="flex items-center gap-3">
          <Image
            src="/my-logo.png"
            alt="Porwal Clothes Logo"
            width={48}
            height={48}
            className="h-12 w-auto"
            priority
          />
          <span className="font-display text-sm tracking-[0.3em] text-cream hidden sm:inline-block">
            PORWAL CLOTHES
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8 text-sm tracking-wide">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="nav-link">
              {link.label}
            </Link>
          ))}
        </div>

        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-block btn-gold text-xs tracking-widest uppercase px-5 py-2.5 font-medium"
        >
          WhatsApp Order
        </a>

        {/* Hamburger */}
        <button
          id="mobile-menu-btn"
          className="md:hidden flex items-center justify-center p-2 focus:outline-none"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6 text-cream transition-transform duration-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            style={{ transform: mobileOpen ? "rotate(90deg)" : "rotate(0)" }}
          >
            {mobileOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-ink/95 border-t border-cream/10 backdrop-blur-md absolute w-full left-0 flex-col items-center py-6 space-y-6 text-sm tracking-wider shadow-xl transition-all duration-300 ${
          mobileOpen
            ? "flex opacity-100 translate-y-0"
            : "hidden opacity-0 -translate-y-4"
        }`}
      >
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="nav-link block"
            onClick={closeMobile}
          >
            {link.label}
          </Link>
        ))}
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-gold inline-block text-xs tracking-widest uppercase px-6 py-3 font-medium mt-2"
          onClick={closeMobile}
        >
          WhatsApp Order
        </a>
      </div>
    </nav>
  );
}
