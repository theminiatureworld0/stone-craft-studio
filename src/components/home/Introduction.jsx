import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Introduction() {
  return (
    <section id="introduction" className="py-12 sm:py-16 bg-[#FAF7F2] border-b border-[#E2D7C7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Column 1: Craftsmanship Photograph (Spans 6 cols) */}
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="relative aspect-[4/3] w-full rounded-xl overflow-hidden shadow-parchment-card border border-[#E2D7C7] group">
              <Image
                src="/images/about/craftsmanship-process.webp"
                alt="Master stonemason hand-chiselling natural sandstone block in workshop"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />
              
              <div className="absolute bottom-3 left-3 right-3 p-3 rounded-lg bg-[#FAF7F2]/95 backdrop-blur-2xs border border-[#E2D7C7] flex items-center justify-between text-xs">
                <span className="font-medium text-[#26201B]">
                  Authentic Chisel Detailing
                </span>
                <span className="text-[#9E6F39] font-medium">Maharashtra, India</span>
              </div>
            </div>
          </div>

          {/* Column 2: Editorial Text Content (Spans 6 cols) */}
          <div className="lg:col-span-6 order-1 lg:order-2 space-y-4">
            <div className="space-y-1.5">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#F4ECE1] text-[#7A5228] border border-[#E2D7C7] text-[11px] font-medium">
                <span>✦</span>
                <span>The Philosophy of Craft</span>
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-normal text-[#26201B] leading-snug">
                Crafted by Hand. <br />
                <span className="text-[#9E6F39]">Inspired by Nature.</span>
              </h2>
            </div>

            <div className="space-y-3 text-xs sm:text-sm text-[#6E645A] leading-relaxed font-light">
              <p>
                Stone is one of Earth’s most honest and permanent mediums. For centuries across Maharashtra and India, master stone carvers have transformed unformed quarries of sandstone, basalt, and granite into enduring architectural monuments and sacred sanctuaries.
              </p>
              <p>
                Our studio honors this legacy through attentive hand craftsmanship. Every chiselled groove, floral relief, and turned pillar is shaped with deliberate care, balancing classical Indian Shilpa traditions with clean architectural lines for modern residential estates, private courtyards, and institutional landmarks.
              </p>
            </div>

            <div className="pt-2 border-t border-[#EAE1D3] grid grid-cols-2 gap-3">
              <div className="bg-white p-3 rounded-lg border border-[#E2D7C7]">
                <h4 className="text-xs font-medium text-[#26201B] mb-0.5">
                  Natural Quarried Stone
                </h4>
                <p className="text-[11px] text-[#6E645A] font-light">
                  Dholpur sandstone, red Agra, black basalt, and granites.
                </p>
              </div>
              <div className="bg-white p-3 rounded-lg border border-[#E2D7C7]">
                <h4 className="text-xs font-medium text-[#26201B] mb-0.5">
                  Bespoke Dimensions
                </h4>
                <p className="text-[11px] text-[#6E645A] font-light">
                  Scaled precisely to architectural and structural drawings.
                </p>
              </div>
            </div>

            <div className="pt-1">
              <Link
                href="/about"
                className="inline-flex items-center text-xs uppercase tracking-wider font-medium text-[#26201B] hover:text-[#9E6F39] group transition-colors gap-1.5"
              >
                <span>Explore Our Story &amp; Craft</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
