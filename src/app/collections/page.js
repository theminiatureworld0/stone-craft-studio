import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Breadcrumb from "@/components/common/Breadcrumb";
import { getAllCategories } from "@/lib/categories";
import { constructMetadata } from "@/lib/seo";

export const metadata = constructMetadata({
  title: "All Stone Collections & Architectural Specialisations",
  description: "Browse all six master disciplines of stone craftsmanship: decorative wall panels, sacred idols, architectural facades, custom fountains, monumental pillars, and sacred temple carvings.",
  canonicalUrl: "/collections",
});

export default function CollectionsPage() {
  const categoriesList = getAllCategories();

  return (
    <div className="pt-6 pb-16 bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <Breadcrumb items={[{ name: "Collections", item: "/collections" }]} />

        {/* Page Heading */}
        <div className="py-6 sm:py-8 text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#F4ECE1] text-[#7A5228] border border-[#E2D7C7] text-[11px] font-medium mb-2.5">
            <span>✦</span>
            <span>Atelier Disciplines</span>
          </div>
          <h1 className="font-serif text-2xl sm:text-3xl font-normal text-[#26201B] tracking-tight">
            Stone Carving Collections
          </h1>
          <p className="mt-2 text-xs sm:text-sm text-[#6E645A] font-light leading-relaxed">
            Each discipline represents centuries of Indian architectural stone sculpting tradition, carved from dense natural sandstone, granite, and basalt blocks.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 mt-4">
          {categoriesList.map((cat, idx) => (
            <article
              key={cat.slug}
              className="group flex flex-col bg-white rounded-xl border border-[#E2D7C7] overflow-hidden shadow-parchment-soft hover:shadow-parchment-card hover:border-[#9E6F39]/50 transition-all duration-300"
            >
              {/* Image */}
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

                <span className="absolute top-2.5 right-2.5 text-[10px] font-medium text-[#26201B] bg-white/95 px-2 py-0.5 rounded shadow-2xs">
                  {cat.productCount} {cat.productCount === 1 ? "Design" : "Designs"}
                </span>

                <span className="absolute bottom-2.5 left-2.5 text-[10px] font-medium text-white bg-black/50 backdrop-blur-2xs px-2 py-0.5 rounded">
                  Discipline 0{idx + 1}
                </span>
              </Link>

              {/* Information */}
              <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-3">
                <div>
                  <h2 className="font-serif text-base sm:text-lg font-normal text-[#26201B] group-hover:text-[#9E6F39] transition-colors leading-snug">
                    <Link href={`/collections/${cat.slug}`}>
                      {cat.name}
                    </Link>
                  </h2>
                  <p className="mt-1 text-xs text-[#6E645A] line-clamp-3 leading-relaxed font-light">
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
                    View Catalog
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </div>
  );
}
