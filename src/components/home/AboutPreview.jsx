import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Button from "@/components/common/Button";

export default function AboutPreview() {
  return (
    <section className="py-12 sm:py-16 bg-[#FAF7F2] border-b border-[#E2D7C7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Content (Spans 7 cols on lg) */}
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#F4ECE1] text-[#7A5228] border border-[#E2D7C7] text-[11px] font-medium">
              <span>✦</span>
              <span>Our Heritage</span>
            </div>

            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-normal text-[#26201B] leading-snug">
              Preserving Regional Stone Heritage Across Maharashtra
            </h2>

            <div className="space-y-3 text-xs sm:text-sm text-[#6E645A] leading-relaxed font-light">
              <p>
                From the rock-cut sanctuaries of the Western Ghats to classical Maratha stonework, Maharashtra possesses an unbroken tradition of architectural masonry. Our workshop operates at this intersection of historic mastery and contemporary engineering.
              </p>
              <p>
                We collaborate with architects, landscape planners, and discerning homeowners who appreciate the tactile texture and permanence that only natural stone brings to built spaces. Each piece is carved without shortcuts—honoring natural stone density, mineral patterns, and structural integrity.
              </p>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-3.5 sm:gap-4">
              <Button href="/about" variant="primary" size="md">
                Read About Us
              </Button>

              <Button href="/projects" variant="secondary" size="md" icon={ArrowRight}>
                View Projects
              </Button>
            </div>
          </div>

          {/* Photograph (Spans 5 cols on lg) */}
          <div className="lg:col-span-5">
            <div className="relative aspect-[4/3] sm:aspect-[4/3] w-full overflow-hidden rounded-xl border border-[#E2D7C7] shadow-parchment-card group">
              <Image
                src="/images/about/about-hero.webp"
                alt="Architectural stone carving workshop in Maharashtra"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#26201B]/80 via-transparent to-transparent opacity-60" />
              
              <div className="absolute bottom-3 left-3 right-3 p-3 rounded-lg bg-[#FAF7F2]/95 backdrop-blur-2xs border border-[#E2D7C7]">
                <p className="font-serif text-sm font-normal text-[#26201B]">Handcrafted in Maharashtra</p>
                <p className="text-[#6E645A] text-[11px] mt-0.5 font-light">Dholpur Sandstone &bull; Basalt &bull; Granite</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
