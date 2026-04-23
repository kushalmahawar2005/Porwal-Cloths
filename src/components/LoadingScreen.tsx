"use client";

import { useState, useEffect } from "react";

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Start fade-out after 2s
    const fadeTimer = setTimeout(() => setFadeOut(true), 1800);
    // Remove from DOM after fade animation
    const removeTimer = setTimeout(() => setLoading(false), 2400);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (!loading) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-ink transition-opacity duration-600 ${
        fadeOut ? "opacity-0" : "opacity-100"
      }`}
    >
      {/* Subtle grain texture */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "radial-gradient(circle at 25% 25%, rgba(201,163,90,0.15), transparent 50%), radial-gradient(circle at 75% 75%, rgba(201,163,90,0.1), transparent 50%)",
        }}
      />

      <div className="relative text-center">
        {/* Animated gold ring */}
        <div className="relative w-32 h-32 mx-auto mb-8">
          <svg className="w-full h-full animate-spin-slow" viewBox="0 0 120 120">
            <circle
              cx="60"
              cy="60"
              r="54"
              fill="none"
              stroke="rgba(201,163,90,0.15)"
              strokeWidth="1"
            />
            <circle
              cx="60"
              cy="60"
              r="54"
              fill="none"
              stroke="#c9a35a"
              strokeWidth="1.5"
              strokeDasharray="80 260"
              strokeLinecap="round"
              className="animate-dash"
            />
          </svg>
          {/* Inner decorative border */}
          <div className="absolute inset-4 border border-gold/20 rotate-45" />
          <div className="absolute inset-6 border border-gold/10" />
          {/* Center logo mark */}
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="font-display text-gold text-3xl font-bold tracking-wider">
              PC
            </span>
          </div>
        </div>

        {/* Brand name with stagger animation */}
        <div className="overflow-hidden">
          <div className="animate-slide-up">
            <div className="text-cream text-xl tracking-[0.5em] font-display font-bold uppercase">
              PORWAL CLOTHES
            </div>
          </div>
        </div>

        {/* Tagline */}
        <div className="overflow-hidden mt-3">
          <div className="animate-slide-up-delay">
            <div className="flex items-center justify-center gap-3">
              <span className="w-8 h-[1px] bg-gold/50" />
              <span className="text-gold-light text-[10px] tracking-[0.4em] uppercase">
                Wholesale Men&apos;s Readymade
              </span>
              <span className="w-8 h-[1px] bg-gold/50" />
            </div>
          </div>
        </div>

        {/* Loading dots */}
        <div className="mt-8 flex items-center justify-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-gold animate-bounce-dot" />
          <span className="w-1.5 h-1.5 rounded-full bg-gold animate-bounce-dot delay-150" />
          <span className="w-1.5 h-1.5 rounded-full bg-gold animate-bounce-dot delay-300" />
        </div>
      </div>
    </div>
  );
}
