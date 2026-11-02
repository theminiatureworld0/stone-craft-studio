import Link from "next/link";
import { notFound } from "next/navigation";
import { MessageCircle, Mail, Ruler, Layers, Sparkles, CheckCircle2 } from "lucide-react";
import Breadcrumb from "@/components/common/Breadcrumb";
import ProductGallery from "@/components/products/ProductGallery";
import ProductCard from "@/components/products/ProductCard";
import Button from "@/components/common/Button";
import { getProductBySlug, getAllProducts, getRelatedProducts } from "@/lib/products";
import { getCategoryBySlug } from "@/lib/categories";
import { constructMetadata, getProductSchema } from "@/lib/seo";
import { getProductWhatsAppUrl } from "@/lib/whatsapp";
import { siteConfig } from "@/config/siteConfig";

export async function generateStaticParams() {
  const all = getAllProducts();
  return all.map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({ params }) {
  const product = getProductBySlug(params.slug);
  if (!product) return {};

  return constructMetadata({
    title: product.seoTitle || `${product.name} | Stone Craft Studio`,
    description: product.seoDescription || product.shortDescription,
    image: product.images?.[0] || "/images/hero/hero-main.webp",
    canonicalUrl: `/products/${product.slug}`,
  });
}

export default function ProductDetailPage({ params }) {
  const product = getProductBySlug(params.slug);

  if (!product) {
    notFound();
  }

  const category = getCategoryBySlug(product.category);
  const relatedProducts = getRelatedProducts(product, 3);
  const productPageUrl = `${siteConfig.websiteUrl}/products/${product.slug}`;
  const whatsappUrl = getProductWhatsAppUrl(product, productPageUrl);
  const productSchema = getProductSchema(product);

  return (
    <>
      {productSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
        />
      )}

      <div className="pt-6 pb-16 bg-[#FAF7F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Breadcrumb Navigation */}
          <Breadcrumb
            items={[
              { name: "Collections", item: "/collections" },
              {
                name: category?.name || "Collection",
                item: `/collections/${product.category}`,
              },
              { name: product.name, item: `/products/${product.slug}` },
            ]}
          />

          {/* Product Header & Main Detail Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 my-4 items-start">
            
            {/* Left Column: Interactive Product Gallery (Spans 7 cols on lg) */}
            <div className="lg:col-span-7">
              <ProductGallery
                images={product.images}
                productName={product.name}
              />
            </div>

            {/* Right Column: Specifications & Direct Actions (Spans 5 cols on lg) */}
            <div className="lg:col-span-5 space-y-4">
              <div>
                <Link
                  href={`/collections/${product.category}`}
                  className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#F4ECE1] text-[#7A5228] border border-[#E2D7C7] text-[10px] font-medium mb-1.5"
                >
                  <span>✦</span>
                  <span>{category?.name || "Architectural Stone"}</span>
                </Link>

                <h1 className="font-serif text-xl sm:text-2xl lg:text-3xl text-[#26201B] font-normal leading-snug">
                  {product.name}
                </h1>

                <p className="mt-2 text-xs sm:text-sm text-[#6E645A] font-light leading-relaxed">
                  {product.shortDescription}
                </p>
              </div>

              {/* Core Material Attributes Box */}
              <div className="p-4 sm:p-5 bg-white rounded-xl border border-[#E2D7C7] shadow-parchment-soft space-y-3">
                <h3 className="text-xs uppercase tracking-wider font-medium text-[#26201B] border-b border-[#EAE1D3] pb-2">
                  Stonecraft Specifications
                </h3>

                <div className="space-y-2 text-xs">
                  <div className="flex items-center justify-between">
                    <span className="text-[#6E645A] flex items-center gap-1.5">
                      <Layers className="w-3.5 h-3.5 text-[#9E6F39]" /> Natural Stone:
                    </span>
                    <span className="font-medium text-[#26201B]">{product.material}</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-[#6E645A] flex items-center gap-1.5">
                      <Ruler className="w-3.5 h-3.5 text-[#9E6F39]" /> Dimensions:
                    </span>
                    <span className="font-medium text-[#26201B]">{product.dimensions}</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-[#6E645A] flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-[#9E6F39]" /> Surface Finish:
                    </span>
                    <span className="font-medium text-[#26201B]">{product.finish}</span>
                  </div>

                  {product.customisationAvailable && (
                    <div className="pt-1.5 border-t border-[#EAE1D3] flex items-center gap-1.5 text-[#7A5228]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#9E6F39] flex-shrink-0" />
                      <span className="text-[11px]">Custom dimensions and stone varieties available</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3 pt-2">
                <Button
                  href={whatsappUrl}
                  variant="whatsapp"
                  size="md"
                  className="w-full text-center py-3"
                  icon={MessageCircle}
                >
                  Enquire via WhatsApp
                </Button>

                <Button
                  href={`/contact?interest=${encodeURIComponent(product.name)}`}
                  variant="primary"
                  size="md"
                  className="w-full text-center py-3"
                  icon={Mail}
                >
                  Request Technical Price Quote
                </Button>

                <div className="pt-1.5 flex items-center justify-center gap-3 text-[11px] text-[#7D7368] font-light">
                  <span>✓ 100% Quarried Stone</span>
                  <span>&bull;</span>
                  <span>✓ Direct Artisan Consultation</span>
                </div>
              </div>

            </div>

          </div>

          {/* Description & Technical Specifications */}
          <div className="mt-10 pt-8 border-t border-[#EAE1D3] grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8">
            
            {/* Description Narrative (7 cols) */}
            <div className="lg:col-span-7 space-y-4">
              <h2 className="font-serif text-lg sm:text-xl font-normal text-[#26201B]">
                About This Stone Work
              </h2>
              <div className="text-xs sm:text-sm text-[#6E645A] leading-relaxed space-y-3 font-light">
                <p>{product.description}</p>
                <p>
                  Each piece is carved individually in our workshop. Because we utilize 100% natural quarried stone, subtle variances in grain patterns, sedimentary veining, and warm mineral undertones occur naturally—guaranteeing that every creation is a unique architectural original.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-[#E2D7C7] text-xs text-[#26201B] space-y-1.5 shadow-2xs">
                <span className="font-medium uppercase tracking-wider block text-[#9E6F39]">
                  Installation &amp; Mounting Guidance
                </span>
                <p className="text-[#6E645A] leading-relaxed font-light">
                  Our atelier prepares all mounting grooves, stainless steel dowel holes, and dry-fit registration marks prior to delivery. We provide full technical guidance for your on-site civil and masonry contractors.
                </p>
              </div>
            </div>

            {/* Specifications Table (5 cols) */}
            <div className="lg:col-span-5">
              <div className="bg-white p-5 rounded-xl border border-[#E2D7C7] shadow-parchment-soft">
                <h3 className="font-serif text-base font-normal text-[#26201B] mb-3">
                  Technical Specifications
                </h3>

                <dl className="divide-y divide-[#EAE1D3] text-xs">
                  <div className="py-2 flex justify-between gap-3">
                    <dt className="text-[#6E645A]">Product ID</dt>
                    <dd className="font-mono text-[#26201B]">{product.id}</dd>
                  </div>
                  <div className="py-2 flex justify-between gap-3">
                    <dt className="text-[#6E645A]">Material</dt>
                    <dd className="font-medium text-[#26201B] text-right">{product.material}</dd>
                  </div>
                  <div className="py-2 flex justify-between gap-3">
                    <dt className="text-[#6E645A]">Standard Dimensions</dt>
                    <dd className="font-medium text-[#26201B] text-right">{product.dimensions}</dd>
                  </div>
                  <div className="py-2 flex justify-between gap-3">
                    <dt className="text-[#6E645A]">Surface Finish</dt>
                    <dd className="font-medium text-[#26201B] text-right">{product.finish}</dd>
                  </div>

                  {product.specifications &&
                    Object.entries(product.specifications).map(([key, val]) => (
                      <div key={key} className="py-2 flex justify-between gap-3">
                        <dt className="text-[#6E645A]">{key}</dt>
                        <dd className="font-medium text-[#26201B] text-right">{val}</dd>
                      </div>
                    ))}
                </dl>
              </div>
            </div>

          </div>

          {/* Related Products */}
          {relatedProducts.length > 0 && (
            <div className="mt-14 pt-8 border-t border-[#EAE1D3]">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <span className="text-[11px] font-medium text-[#9E6F39] block mb-0.5">
                    Related Carvings
                  </span>
                  <h3 className="font-serif text-lg sm:text-xl font-normal text-[#26201B]">
                    Complementary Works in {category?.name || "Collection"}
                  </h3>
                </div>
                <Link
                  href={`/collections/${product.category}`}
                  className="text-xs uppercase tracking-wider font-medium text-[#26201B] hover:text-[#9E6F39] transition-colors"
                >
                  View Category
                </Link>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
                {relatedProducts.map((rel) => (
                  <ProductCard key={rel.id} product={rel} showCategory={false} />
                ))}
              </div>
            </div>
          )}

        </div>
      </div>
    </>
  );
}
