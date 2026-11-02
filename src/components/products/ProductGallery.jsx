"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Maximize2, X } from "lucide-react";

export default function ProductGallery({ images = [], productName = "Product" }) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const safeImages = images.length > 0 ? images : ["/images/products/lotus-panel-01.webp"];
  const currentImage = safeImages[selectedIndex] || safeImages[0];

  const handlePrev = (e) => {
    e?.stopPropagation();
    setSelectedIndex((prev) => (prev === 0 ? safeImages.length - 1 : prev - 1));
  };

  const handleNext = (e) => {
    e?.stopPropagation();
    setSelectedIndex((prev) => (prev === safeImages.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="space-y-4">
      {/* Main Image Display */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-white rounded-2xl border border-[#e8ebf0] shadow-sm group">
        <Image
          src={currentImage}
          alt={`${productName} - View ${selectedIndex + 1}`}
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover object-center cursor-zoom-in group-hover:scale-105 transition-transform duration-700 ease-out"
          onClick={() => setLightboxOpen(true)}
        />

        {/* Controls */}
        {safeImages.length > 1 && (
          <>
            <button
              type="button"
              onClick={handlePrev}
              className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 text-[#063e79] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-[#ff9200] hover:text-white shadow-md focus:opacity-100"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={handleNext}
              className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 text-[#063e79] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-[#ff9200] hover:text-white shadow-md focus:opacity-100"
              aria-label="Next image"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </>
        )}

        {/* Lightbox Trigger Button */}
        <button
          type="button"
          onClick={() => setLightboxOpen(true)}
          className="absolute bottom-3 right-3 p-2 rounded-lg bg-white/90 text-[#063e79] hover:bg-[#063e79] hover:text-white transition-colors shadow-xs"
          aria-label="Enlarge photograph"
          title="Click to enlarge"
        >
          <Maximize2 className="w-4 h-4" />
        </button>

        {/* Counter */}
        <span className="absolute top-3 left-3 text-[11px] font-bold text-[#063e79] bg-white/90 px-2.5 py-1 rounded-full shadow-xs">
          {selectedIndex + 1} / {safeImages.length}
        </span>
      </div>

      {/* Thumbnail Bar */}
      {safeImages.length > 1 && (
        <div className="flex gap-3 overflow-x-auto pb-2">
          {safeImages.map((img, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setSelectedIndex(idx)}
              className={`relative w-20 h-20 rounded-xl overflow-hidden transition-all flex-shrink-0 border-2 ${
                selectedIndex === idx
                  ? "border-[#ff9200] shadow-md ring-2 ring-[#ff9200]/30"
                  : "border-[#e8ebf0] opacity-75 hover:opacity-100"
              }`}
              aria-label={`Select view ${idx + 1}`}
            >
              <Image
                src={img}
                alt={`${productName} thumbnail ${idx + 1}`}
                fill
                sizes="80px"
                className="object-cover object-center"
              />
            </button>
          ))}
        </div>
      )}

      {/* Lightbox Modal */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-50 bg-[#0b2647]/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
          onClick={() => setLightboxOpen(false)}
          role="dialog"
          aria-modal="true"
        >
          <button
            type="button"
            onClick={() => setLightboxOpen(false)}
            className="absolute top-6 right-6 text-white hover:text-[#ff9200] p-2 focus:outline-none"
            aria-label="Close enlarged view"
          >
            <X className="w-7 h-7" />
          </button>

          <div
            className="relative max-w-5xl max-h-[85vh] w-full h-full flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full h-full">
              <Image
                src={currentImage}
                alt={`${productName} Full Enlargement`}
                fill
                className="object-contain"
                priority
              />
            </div>

            {safeImages.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={handlePrev}
                  className="absolute left-2 sm:-left-12 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-[#ff9200] transition-colors"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  className="absolute right-2 sm:-right-12 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-[#ff9200] transition-colors"
                  aria-label="Next image"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
