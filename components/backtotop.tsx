"use client";

import { useState, useEffect } from "react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setScrollProgress(progress);
      setVisible(scrollTop > 300);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const radius = 20;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (scrollProgress / 100) * circumference;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Back to top"
      title="Back to top"
      className={[
        "fixed bottom-8 right-8 z-50",
        "w-14 h-14 p-0 border-none bg-transparent cursor-pointer",
        "transition-all duration-300 ease-out",
        "group",
        visible
          ? "opacity-100 translate-y-0 scale-100 pointer-events-auto"
          : "opacity-0 translate-y-4 scale-90 pointer-events-none",
      ].join(" ")}
    >
      {/* Dark background circle */}
      <div className="absolute inset-0 rounded-full bg-neutral-900 shadow-[0_4px_20px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.06)] transition-transform duration-200 ease-out group-hover:scale-110 group-active:scale-95" />

      {/* SVG scroll progress ring */}
      <svg className="absolute inset-0 -rotate-90" viewBox="0 0 56 56">
        <defs>
          <linearGradient id="btt-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#a78bfa" />
            <stop offset="100%" stopColor="#38bdf8" />
          </linearGradient>
        </defs>
        <circle
          cx="28" cy="28" r={radius}
          fill="none"
          stroke="rgba(255,255,255,0.08)"
          strokeWidth="2"
        />
        <circle
          cx="28" cy="28" r={radius}
          fill="none"
          stroke="url(#btt-grad)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          style={{ transition: "stroke-dashoffset 0.15s ease" }}
        />
      </svg>

      {/* Arrow icon + label */}
      <div className="relative z-10 flex flex-col items-center gap-0.5 transition-transform duration-200 ease-out group-hover:-translate-y-0.5">
        <svg
          className="w-4 h-4 text-white drop-shadow-[0_0_6px_rgba(255,255,255,0.3)]"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="18 15 12 9 6 15" />
        </svg>
        <span className="text-[7px] font-mono font-medium tracking-widest text-white/50 uppercase leading-none">
          top
        </span>
      </div>
    </button>
  );
}