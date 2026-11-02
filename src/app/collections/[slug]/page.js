import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Breadcrumb from "@/components/common/Breadcrumb";
import ProductCard from "@/components/products/ProductCard";
import Button from "@/components/common/Button";
import { getCategoryBySlug, getAllCategories } from "@/lib/categories";
import { getProductsByCategory } from "@/lib/products";
import { constructMetadata } from "@/lib/seo";

export async function generateStaticParams() {
  const all = getAllCategories();
  return all.map((cat) => ({
    slug: cat.slug,
  }));
}

export async function generateMetadata({ params }) {
  const category = getCategoryBySlug(params.slug);
  if (!category) return {};

  return constructMetadata({
    title: category.seoTitle || `${category.name} | Stone Craft Studio`,
    description: category.seoDescription || category.shortDescription,
    image: category.bannerImage || category.image,
    canonicalUrl: `/collections/${category.slug}`,
  });
}

export default function CategoryDetailPage({ params }) {
  const category = getCategoryBySlug(params.slug);

  if (!category) {
    notFound();
  }

  const categoryProducts = getProductsByCategory(category.slug);
  const otherCategories = getAllCategories().filter((c) => c.slug !== category.slug).slice(0, 3);

  return (
    <div className="pt-6 pb-16 bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb Navigation */}
        <Breadcrumb
          items={[
            { name: "Collections", item: "/collections" },
            { name: category.name, item: `/collections/${category.slug}` },
          ]}
        />

        {/* Category Banner */}
        <div className="relative my-4 rounded-xl overflow-hidden shadow-parchment-card border border-[#E2D7C7] bg-[#26201B] text-white">
          <div className="relative aspect-[21/9] sm:aspect-[24/8] min-h-[220px] w-full">
            <Image
              src={category.bannerImage || category.image}
              alt={category.name}
              fill
              priority
              sizes="(max-width: 1280px) 100vw, 1200px"
              className="object-cover object-center opacity-50"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#26201B] via-[#26201B]/40 to-transparent" />

            {/* Banner Text Overlay */}
            <div className="absolute inset-0 flex flex-col justify-end p-5 sm:p-8 max-w-2xl">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/15 border border-white/20 text-[10px] font-medium text-[#E5B582] w-fit mb-1.5 backdrop-blur-2xs">
                <span>✦</span>
                <span>Specialisation Discipline</span>
              </div>
              <h1 className="font-serif text-2xl sm:text-3xl font-normal text-white leading-tight">
                {category.name}
              </h1>
              <p className="mt-1.5 text-xs sm:text-sm text-[#D8CFBF] font-light leading-relaxed max-w-xl">
                {category.description}
              </p>
            </div>
          </div>
        </div>

        {/* Features / Highlights Bar */}
        {category.features && category.features.length > 0 && (
          <div className="mb-8 p-3.5 sm:p-4 rounded-xl bg-white border border-[#E2D7C7] shadow-parchment-soft grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {category.features.map((feat, idx) => (
              <div key={idx} className="flex items-start gap-2 text-xs text-[#26201B]">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#9E6F39] flex-shrink-0 mt-0.5" />
                <span className="font-light">{feat}</span>
              </div>
            ))}
          </div>
        )}

        {/* Product Count Header */}
        <div className="flex items-center justify-between pb-3 mb-6 border-b border-[#EAE1D3]">
          <div>
            <h2 className="font-serif text-lg sm:text-xl font-normal text-[#26201B]">
              Available Designs &amp; Carvings
            </h2>
            <p className="text-xs text-[#6E645A] font-light">
              Select any design for technical specifications or custom dimensions
            </p>
          </div>
          <span className="text-[11px] font-medium text-[#26201B] bg-white border border-[#E2D7C7] px-2.5 py-1 rounded shadow-2xs font-mono">
            {categoryProducts.length} {categoryProducts.length === 1 ? "Product" : "Products"}
          </span>
        </div>

        {/* Product Grid or Empty State */}
        {categoryProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {categoryProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                showCategory={false}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-white rounded-xl border border-[#E2D7C7] p-6 shadow-parchment-soft">
            <h3 className="font-serif text-base font-normal text-[#26201B] mb-1.5">
              Bespoke Carvings Under Fabrication
            </h3>
            <p className="text-xs text-[#6E645A] max-w-sm mx-auto mb-4 font-light">
              New designs for this collection are presently being carved in our atelier. Custom orders and dimension requests are warmly welcomed.
            </p>
            <Button href="/contact" variant="primary" size="sm">
              Enquire About Custom Designs
            </Button>
          </div>
        )}

        {/* Related Collections */}
        <div className="mt-16 pt-10 border-t border-[#EAE1D3]">
          <div className="flex items-center justify-between mb-5">
            <div>
              <span className="text-[11px] font-medium text-[#9E6F39] block mb-0.5">
                Explore More
              </span>
              <h3 className="font-serif text-lg sm:text-xl font-normal text-[#26201B]">
                Other Disciplines
              </h3>
            </div>
            <Link
              href="/collections"
              className="text-xs uppercase tracking-wider font-medium text-[#26201B] hover:text-[#9E6F39] inline-flex items-center gap-1"
            >
              <span>View All</span>
              <ArrowRight className="w-3 h-3" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
            {otherCategories.map((other) => (
              <Link
                key={other.slug}
                href={`/collections/${other.slug}`}
                className="group p-4 bg-white rounded-xl border border-[#E2D7C7] shadow-parchment-soft hover:shadow-parchment-card hover:border-[#9E6F39]/50 transition-all flex flex-col justify-between"
              >
                <div>
                  <h4 className="font-serif text-sm sm:text-base font-normal text-[#26201B] group-hover:text-[#9E6F39] transition-colors">
                    {other.name}
                  </h4>
                  <p className="text-xs text-[#6E645A] mt-1 line-clamp-2 leading-relaxed font-light">
                    {other.shortDescription}
                  </p>
                </div>
                <div className="mt-3 pt-2.5 border-t border-[#EAE1D3] flex items-center justify-between text-[11px] font-medium text-[#26201B] group-hover:text-[#9E6F39]">
                  <span>Explore Collection</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
