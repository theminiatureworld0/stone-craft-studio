"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import Button from "@/components/common/Button";

const slides = [
  {
    image: "/images/products/home-temple-mandir-01.webp",
    title: "Indian Handcrafted Stone Home Temples (Pooja Mandir)",
    subtitle: "Carved Sandstone & Marble • Shikhara, Pillars & Sanctum",
    link: "/products/handcrafted-sandstone-home-temple-mandir",
  },
  {
    image: "/images/products/ganesha-sculpture-01.webp",
    title: "Monolithic Deity Idols & Sacred Stone Sculptures",
    subtitle: "Lord Ganesha & Shiva • Traditional Shilpa Shastra Proportions",
    link: "/collections/stone-idols-and-sculptures",
  },
  {
    image: "/images/products/lotus-panel-01.webp",
    title: "Handcrafted Stone Wall Panels & 3D Relief Murals",
    subtitle: "Dholpur Beige Sandstone • Natural Chisel Finish",
    link: "/collections/stone-wall-decorations",
  },
  {
    image: "/images/products/archway-01.webp",
    title: "Classical Stone Arches & Architectural Portals",
    subtitle: "Teak & Pink Sandstone • Structural Interlocking Voussoirs",
    link: "/collections/architectural-stone-designs",
  },
  {
    image: "/images/products/fluted-pillar-01.webp",
    title: "Fluted Porch Pillars & Turned Lotus Capitals",
    subtitle: "Natural Buff Sandstone • Load-Bearing & Cladding",
    link: "/collections/stone-pillars",
  },
  {
    image: "/images/products/lotus-fountain-01.webp",
    title: "Tiered Courtyard Fountains & Bespoke Stone Craft",
    subtitle: "Hand-Scalloped Lotus Bowls • Water Sealed",
    link: "/collections/custom-stone-work",
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef(null);

  const nextSlide = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  useEffect(() => {
    if (!isPaused) {
      timerRef.current = setInterval(nextSlide, 4500);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused, current]);

  return (
    <section className="relative bg-[#FAF7F2] py-8 sm:py-12 border-b border-[#E2D7C7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-8 lg:grid-cols-12 lg:gap-10">
          
          {/* Left Column: Compact Editorial Text (Spans 5 cols on lg) */}
          <div className="text-center lg:text-left lg:col-span-5 space-y-4">
            
            {/* Small Eyebrow Badge */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F4ECE1] text-[#7A5228] border border-[#E2D7C7] text-[11px] font-medium">
              <span>✦</span>
              <span>Architectural Stone Atelier &bull; Maharashtra</span>
            </div>

            {/* Compact Headline */}
            <h1 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-normal tracking-tight text-[#26201B] leading-snug">
              Handcrafted Stone Carvings &amp; Architectural Masonry
            </h1>

            {/* Compact Description */}
            <p className="text-xs sm:text-sm text-[#6E645A] font-light leading-relaxed max-w-lg mx-auto lg:mx-0">
              Discover bespoke hand-chiselled Indian home mandirs, sacred deity idols, 3D stone wall panels, monolithic pillars, and architectural elements shaped from natural sandstone and granite.
            </p>

            {/* Compact Action Buttons with Clean Spacing (WhatsApp removed) */}
            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-3.5">
              <Button
                href="/collections"
                variant="primary"
                size="md"
                icon={ArrowRight}
              >
                Explore Collections
              </Button>

              <Button
                href="/contact"
                variant="secondary"
                size="md"
              >
                Request Quotation
              </Button>
            </div>

            {/* Refined Minimalist Trust Line */}
            <div className="pt-3 border-t border-[#E8DFC9] flex flex-wrap items-center justify-center lg:justify-start gap-x-4 gap-y-1 text-[11px] text-[#7D7368]">
              <span>✓ 100% Quarried Natural Stone</span>
              <span>&bull;</span>
              <span>✓ Custom Dimensions &amp; CAD</span>
              <span>&bull;</span>
              <span>✓ Pan-Maharashtra Delivery</span>
            </div>

          </div>

          {/* Right Column: Multi-Image Slidebar (Spans 7 cols on lg) */}
          <div
            className="lg:col-span-7 relative"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* Image Slide Container */}
            <div className="relative aspect-[16/10] sm:aspect-[16/9.5] w-full overflow-hidden rounded-xl bg-[#EAE1D3] border border-[#E2D7C7] shadow-sm">
              {slides.map((slide, idx) => (
                <div
                  key={idx}
                  className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                    idx === current ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
                  }`}
                >
                  <Image
                    src={slide.image}
                    alt={slide.title}
                    fill
                    priority={idx === 0}
                    sizes="(max-width: 1024px) 100vw, 58vw"
                    className="object-cover object-center"
                  />
                  
                  {/* Subtle Antique Vignette Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#26201B]/85 via-[#26201B]/20 to-transparent" />

                  {/* Slide Editorial Caption (Compact) */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 text-white">
                    <p className="text-[10px] sm:text-[11px] uppercase tracking-wider text-[#D5C0A4] font-medium mb-1">
                      {slide.subtitle}
                    </p>
                    <Link
                      href={slide.link}
                      className="group inline-flex items-center gap-2 hover:text-[#EAE1D3] transition-colors"
                    >
                      <h2 className="font-serif text-sm sm:text-base md:text-lg font-normal text-white group-hover:underline decoration-[#9E6F39] underline-offset-4">
                        {slide.title}
                      </h2>
                      <span className="text-xs text-[#D5C0A4] group-hover:translate-x-0.5 transition-transform">→</span>
                    </Link>
                  </div>
                </div>
              ))}

              {/* Prev / Next Manual Controls */}
              <button
                type="button"
                onClick={prevSlide}
                aria-label="Previous slide"
                className="absolute left-2.5 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-[#FAF7F2]/90 hover:bg-[#FAF7F2] text-[#26201B] border border-[#E2D7C7] shadow-sm flex items-center justify-center transition-all hover:scale-105 active:scale-95"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={nextSlide}
                aria-label="Next slide"
                className="absolute right-2.5 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-[#FAF7F2]/90 hover:bg-[#FAF7F2] text-[#26201B] border border-[#E2D7C7] shadow-sm flex items-center justify-center transition-all hover:scale-105 active:scale-95"
              >
                <ChevronRight className="w-4 h-4" />
              </button>

              {/* Slide Counter Indicator */}
              <div className="absolute top-2.5 right-2.5 z-20 px-2 py-0.5 rounded-md bg-[#26201B]/70 backdrop-blur-xs text-[10px] text-white/90 font-mono tracking-wider border border-white/10">
                0{current + 1} / 0{slides.length}
              </div>
            </div>

            {/* Bottom Slide Indicators (Dots) */}
            <div className="flex items-center justify-center gap-2 mt-3">
              {slides.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setCurrent(idx)}
                  aria-label={`Go to slide ${idx + 1}`}
                  className={`transition-all duration-300 rounded-full ${
                    idx === current
                      ? "w-6 h-1.5 bg-[#9E6F39]"
                      : "w-1.5 h-1.5 bg-[#D5C9B7] hover:bg-[#9E6F39]/60"
                  }`}
                />
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
