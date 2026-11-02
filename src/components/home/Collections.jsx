import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SectionHeading from "@/components/common/SectionHeading";
import { categories } from "@/data/categories";

export default function Collections() {
  return (
    <section className="py-12 sm:py-16 bg-[#F4ECE1]/60 border-b border-[#E2D7C7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <SectionHeading
          eyebrow="Specialisations"
          title="Architectural Stone Collections"
          description="Explore six disciplines of traditional Indian stone carving—from decorative wall relief panels and pierced jali screens to turned columns and sanctum idols."
          align="center"
        />

        {/* 6 Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {categories.map((cat, index) => (
            <article
              key={cat.slug}
              className="group flex flex-col bg-[#FFFFFF] rounded-xl border border-[#E2D7C7] overflow-hidden shadow-parchment-soft hover:shadow-parchment-card hover:border-[#9E6F39]/50 transition-all duration-300"
            >
              {/* Category Image */}
              <Link
                href={`/collections/${cat.slug}`}
                className="relative aspect-[16/10] w-full overflow-hidden bg-[#FAF7F2] block"
                tabIndex={-1}
                aria-hidden="true"
              >
                <Image
                  src={cat.image}
                  alt={cat.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity" />

                {/* Index & Badge */}
                <span className="absolute top-3 left-3 text-[10px] font-mono font-medium text-[#26201B] bg-[#FAF7F2]/95 px-2 py-0.5 rounded shadow-2xs">
                  0{index + 1}
                </span>

                <span className="absolute bottom-3 left-3 text-[10px] font-medium text-white bg-black/60 backdrop-blur-2xs px-2 py-0.5 rounded">
                  Hand-Chiselled
                </span>
              </Link>

              {/* Card Information */}
              <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-3">
                <div>
                  <h3 className="font-serif text-base sm:text-lg font-normal text-[#26201B] group-hover:text-[#9E6F39] transition-colors leading-snug">
                    <Link href={`/collections/${cat.slug}`}>
                      {cat.name}
                    </Link>
                  </h3>
                  <p className="mt-1.5 text-xs text-[#6E645A] line-clamp-2 leading-relaxed font-light">
                    {cat.shortDescription}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#EAE1D3] flex items-center justify-between text-xs">
                  <Link
                    href={`/collections/${cat.slug}`}
                    className="inline-flex items-center text-xs font-medium text-[#26201B] group-hover:text-[#9E6F39] transition-colors gap-1.5 py-1"
                  >
                    <span>Explore Collection</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>

                  <span className="text-[10px] text-[#7A5228] bg-[#F4ECE1] px-2.5 py-0.5 rounded-full border border-[#E2D7C7] font-medium">
                    Bespoke Sizing
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
