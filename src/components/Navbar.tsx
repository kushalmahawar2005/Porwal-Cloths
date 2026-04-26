"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { categories } from "@/data/products";
import SearchOverlay from "@/components/SearchOverlay";

const WHATSAPP_NUMBER = "919672299156";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=Hello%20Porwal%20Clothes%20-%20I%20saw%20your%20website`;

const simpleLinks = [
  { href: "/#about", label: "About" },
  { href: "/#why-us", label: "Why Us" },
  { href: "/#contact", label: "Contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [shopOpen, setShopOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [mobileShopOpen, setMobileShopOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const closeMobile = () => {
    setMobileOpen(false);
    setMobileShopOpen(false);
  };

  const openShop = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setShopOpen(true);
  };
  const scheduleCloseShop = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setShopOpen(false), 120);
  };

  const navTextColor = scrolled ? "text-cream" : "text-ink";
  const subTextColor = scrolled ? "text-cream/80" : "text-ink/75";
  const linkHover = "hover:text-gold transition-colors";

  return (
    <>
      <nav
        className={`sticky top-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? "bg-ink/92 backdrop-blur-md py-3 shadow-2xl border-b border-gold/10"
            : "bg-paper/90 backdrop-blur-sm py-5 border-b border-gold/10"
        }`}
        onMouseLeave={scheduleCloseShop}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between gap-6">
          {/* Logo */}
          <Link href="/#home" className="flex items-center gap-3 group shrink-0">
            <div className="relative w-10 h-10 overflow-hidden rounded-full border border-gold/30 group-hover:border-gold/60 transition-colors">
              <Image
                src="/my-logo.png"
                alt="Porwal Clothes Logo"
                fill
                className="object-cover"
                priority
              />
            </div>
            <span
              className={`font-display text-sm tracking-[0.3em] hidden sm:inline-block transition-colors duration-300 ${navTextColor}`}
            >
              PORWAL CLOTHES
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className={`hidden lg:flex items-center gap-8 text-[11px] tracking-[0.22em] uppercase font-bold ${subTextColor}`}>
            {/* Shop with mega menu */}
            <button
              type="button"
              className={`flex items-center gap-1.5 ${linkHover} relative cursor-pointer`}
              onMouseEnter={openShop}
              onFocus={openShop}
              aria-haspopup="true"
              aria-expanded={shopOpen}
            >
              Shop
              <svg
                className={`w-3 h-3 transition-transform duration-300 ${shopOpen ? "rotate-180" : ""}`}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2.4}
              >
                <path strokeLinecap="round" d="M6 9l6 6 6-6" />
              </svg>
            </button>

            {simpleLinks.map((link) => (
              <Link key={link.href} href={link.href} className={linkHover}>
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right cluster */}
          <div className="flex items-center gap-4 shrink-0">
            <button
              type="button"
              onClick={() => setSearchOpen(true)}
              aria-label="Search"
              className={`p-2 ${navTextColor} hover:text-gold transition-colors cursor-pointer`}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5-5m2-6a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-block btn-gold text-[10px] tracking-[0.24em] uppercase px-5 py-3 font-bold"
            >
              WhatsApp
            </a>

            {/* Hamburger */}
            <button
              className={`lg:hidden flex items-center justify-center p-2 focus:outline-none ${navTextColor}`}
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
                {mobileOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 7h16M4 12h16M4 17h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mega-menu panel */}
        <div
          className={`hidden lg:block absolute left-0 right-0 top-full origin-top transition-all duration-300 ${
            shopOpen
              ? "opacity-100 translate-y-0 pointer-events-auto"
              : "opacity-0 -translate-y-2 pointer-events-none"
          }`}
          onMouseEnter={openShop}
          onMouseLeave={scheduleCloseShop}
        >
          <div className="bg-paper/98 backdrop-blur-md border-t border-b border-gold/15 shadow-premium">
            <div className="max-w-7xl mx-auto px-6 py-10">
              <div className="grid grid-cols-12 gap-8">
                {/* Editorial column */}
                <div className="col-span-3 hidden xl:block">
                  <div className="text-[10px] tracking-[0.32em] uppercase text-gold-dark font-semibold mb-3">
                    The House
                  </div>
                  <h3 className="font-display text-2xl text-ink leading-tight">
                    Manufacturer-direct, retailer-first.
                  </h3>
                  <p className="text-sm text-muted mt-3 leading-relaxed">
                    Premium men&apos;s readymade — sourced, finished and shipped from a
                    single house since 2015.
                  </p>
                  <Link
                    href="/#about"
                    onClick={() => setShopOpen(false)}
                    className="inline-block mt-5 text-[11px] tracking-[0.28em] uppercase text-ink font-bold border-b border-gold pb-1 hover:text-gold-dark transition-colors"
                  >
                    Our Story →
                  </Link>
                </div>

                {/* Category cards */}
                <div className="col-span-12 xl:col-span-9 grid grid-cols-2 md:grid-cols-5 gap-4">
                  {categories.map((c) => (
                    <Link
                      key={c.slug}
                      href={`/products/${c.slug}`}
                      onClick={() => setShopOpen(false)}
                      className="group block"
                    >
                      <div className="relative aspect-[4/5] overflow-hidden bg-cream">
                        <Image
                          src={c.heroImage}
                          alt={c.name}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-[1.06]"
                          sizes="200px"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-ink/55 via-transparent to-transparent" />
                        <div className="absolute bottom-3 left-3 right-3">
                          <div className="font-display text-base text-cream leading-tight">
                            {c.name}
                          </div>
                          <div className="text-[10px] tracking-[0.22em] uppercase text-cream/75 mt-0.5">
                            {c.products.length} pieces
                          </div>
                        </div>
                      </div>
                      <div className="mt-2 text-[10px] tracking-[0.22em] uppercase text-muted">
                        {c.tagline}
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div
        className={`lg:hidden fixed inset-0 z-[55] transition-opacity duration-300 ${
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="absolute inset-0 bg-ink/70" onClick={closeMobile} />
        <div
          className={`absolute right-0 top-0 bottom-0 w-[88vw] max-w-sm bg-paper shadow-premium transition-transform duration-500 overflow-y-auto ${
            mobileOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between px-6 py-5 border-b border-gold/15">
            <span className="font-display text-sm tracking-[0.32em] text-ink">
              MENU
            </span>
            <button
              type="button"
              onClick={closeMobile}
              aria-label="Close menu"
              className="p-2 text-ink hover:text-gold transition-colors cursor-pointer"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-5 h-5">
                <path strokeLinecap="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="px-6 py-6">
            {/* Shop accordion */}
            <button
              type="button"
              onClick={() => setMobileShopOpen((s) => !s)}
              className="w-full flex items-center justify-between text-[12px] tracking-[0.28em] uppercase font-bold text-ink py-3"
            >
              Shop
              <svg
                className={`w-4 h-4 transition-transform duration-300 ${mobileShopOpen ? "rotate-180" : ""}`}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" d="M6 9l6 6 6-6" />
              </svg>
            </button>
            <div
              className={`grid grid-cols-2 gap-3 transition-all duration-500 overflow-hidden ${
                mobileShopOpen ? "max-h-[1000px] opacity-100 pb-3" : "max-h-0 opacity-0"
              }`}
            >
              {categories.map((c) => (
                <Link
                  key={c.slug}
                  href={`/products/${c.slug}`}
                  onClick={closeMobile}
                  className="group relative aspect-[4/5] overflow-hidden bg-cream"
                >
                  <Image src={c.heroImage} alt={c.name} fill className="object-cover" sizes="50vw" />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/65 to-transparent" />
                  <div className="absolute bottom-2 left-3 right-3 font-display text-sm text-cream">
                    {c.name}
                  </div>
                </Link>
              ))}
            </div>

            <div className="border-t border-gold/15 mt-3">
              {simpleLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={closeMobile}
                  className="block py-4 text-[12px] tracking-[0.28em] uppercase font-bold text-ink hover:text-gold transition-colors border-b border-gold/10"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMobile}
              className="btn-gold inline-flex w-full justify-center px-6 py-4 mt-8 text-[11px] tracking-[0.28em] uppercase font-bold"
            >
              WhatsApp Order
            </a>

            <div className="mt-8 text-[10px] tracking-[0.28em] uppercase text-muted">
              +91 96722 99156 · Mon–Sat
            </div>
          </div>
        </div>
      </div>

      <SearchOverlay open={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}
