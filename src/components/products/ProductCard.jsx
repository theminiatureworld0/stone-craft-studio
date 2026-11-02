import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MessageCircle, Ruler } from "lucide-react";
import { getProductWhatsAppUrl } from "@/lib/whatsapp";
import { categories } from "@/data/categories";

export default function ProductCard({ product, showCategory = true }) {
  if (!product) return null;

  const categoryObj = categories.find((c) => c.slug === product.category);
  const categoryName = categoryObj ? categoryObj.name : product.category;
  const whatsappUrl = getProductWhatsAppUrl(product);
  const mainImage = product.images?.[0] || "/images/products/lotus-panel-01.webp";

  return (
    <article className="group flex flex-col bg-white rounded-xl border border-[#E2D7C7] overflow-hidden shadow-parchment-soft hover:shadow-parchment-card hover:border-[#9E6F39]/50 transition-all duration-300">
      {/* Product Image */}
      <Link
        href={`/products/${product.slug}`}
        className="relative aspect-[4/3] w-full overflow-hidden bg-[#FAF7F2] block"
        tabIndex={-1}
        aria-hidden="true"
      >
        <Image
          src={mainImage}
          alt={product.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
        />
        <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity" />
        
        {product.material && (
          <span className="absolute bottom-2.5 left-2.5 px-2 py-0.5 bg-[#26201B]/85 text-[#FAF7F2] text-[10px] font-normal rounded backdrop-blur-2xs">
            {product.material}
          </span>
        )}
      </Link>

      {/* Product Information */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-3">
        <div>
          {showCategory && (
            <Link
              href={`/collections/${product.category}`}
              className="text-[10px] uppercase tracking-wider text-[#9E6F39] hover:text-[#26201B] transition-colors block mb-1 font-medium"
            >
              {categoryName}
            </Link>
          )}

          <h3 className="font-serif text-base sm:text-lg font-normal text-[#26201B] group-hover:text-[#9E6F39] transition-colors leading-snug">
            <Link href={`/products/${product.slug}`}>
              {product.name}
            </Link>
          </h3>

          <p className="mt-1.5 text-xs text-[#6E645A] line-clamp-2 leading-relaxed font-light">
            {product.shortDescription}
          </p>

          {/* Quick Specifications */}
          <div className="mt-2.5 pt-2.5 border-t border-[#EAE1D3] flex items-center justify-between text-[11px] text-[#7D7368]">
            <span className="flex items-center gap-1 font-light">
              <Ruler className="w-3 h-3 text-[#9E6F39]" /> {product.dimensions}
            </span>
            <span className="text-[#26201B] bg-[#F4ECE1] px-1.5 py-0.5 rounded text-[10px]">
              {product.finish}
            </span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="pt-3 border-t border-[#EAE1D3] flex items-center justify-between gap-3 text-xs">
          <Link
            href={`/products/${product.slug}`}
            className="inline-flex items-center text-xs font-medium text-[#26201B] hover:text-[#9E6F39] transition-colors gap-1.5 group/link py-1"
          >
            <span>View Details</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 transition-transform" />
          </Link>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Enquire about ${product.name} on WhatsApp`}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[#25D366]/10 text-[#127042] border border-[#25D366]/20 hover:bg-[#25D366] hover:text-white font-medium text-xs transition-all shadow-2xs hover:shadow-xs active:translate-y-[1px]"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>Enquire</span>
          </a>
        </div>
      </div>
    </article>
  );
}
