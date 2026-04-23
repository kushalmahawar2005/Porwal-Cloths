"use client";

import { useEffect, useRef, useState } from "react";

type AnimationType = "fade-up" | "fade-left" | "fade-right" | "fade-in" | "zoom-in";

interface ScrollAnimateProps {
  children: React.ReactNode;
  animation?: AnimationType;
  delay?: number;
  duration?: number;
  className?: string;
  once?: boolean;
}

const animationClasses: Record<AnimationType, { initial: string; animated: string }> = {
  "fade-up": {
    initial: "opacity-0 translate-y-10",
    animated: "opacity-100 translate-y-0",
  },
  "fade-left": {
    initial: "opacity-0 -translate-x-10",
    animated: "opacity-100 translate-x-0",
  },
  "fade-right": {
    initial: "opacity-0 translate-x-10",
    animated: "opacity-100 translate-x-0",
  },
  "fade-in": {
    initial: "opacity-0",
    animated: "opacity-100",
  },
  "zoom-in": {
    initial: "opacity-0 scale-90",
    animated: "opacity-100 scale-100",
  },
};

export default function ScrollAnimate({
  children,
  animation = "fade-up",
  delay = 0,
  duration = 700,
  className = "",
  once = true,
}: ScrollAnimateProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          if (once) observer.disconnect();
        } else if (!once) {
          setVisible(false);
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -50px 0px" }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [once]);

  const { initial, animated } = animationClasses[animation];

  return (
    <div
      ref={ref}
      className={`transition-all ease-out ${visible ? animated : initial} ${className}`}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}
