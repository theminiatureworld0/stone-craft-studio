import Link from "next/link";
import SectionHeading from "@/components/common/SectionHeading";
import ProductCard from "@/components/products/ProductCard";
import Button from "@/components/common/Button";
import { getFeaturedProducts } from "@/lib/products";

export default function FeaturedProducts() {
  const featured = getFeaturedProducts(6);

  return (
    <section className="py-12 sm:py-16 bg-[#FAF7F2] border-b border-[#E2D7C7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-10 gap-4">
          <SectionHeading
            eyebrow="Crafted With Precision"
            title="Featured Stone Works"
            description="Explore our highlighted Indian stone home temples, monolithic deity idols, 3D carved wall panels, and bespoke architectural masonry."
            align="left"
            className="mb-0"
          />

          <div className="hidden md:flex items-center gap-3 flex-shrink-0">
            <Button href="/contact" variant="secondary" size="md">
              Request Quotation
            </Button>
            <Button href="/collections" variant="primary" size="md">
              View All Works
            </Button>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Mobile View All CTA */}
        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-3 md:hidden">
          <Button href="/collections" variant="primary" size="md" className="w-full sm:w-auto">
            View All Stone Works
          </Button>
          <Button href="/contact" variant="secondary" size="md" className="w-full sm:w-auto">
            Request Quotation
          </Button>
        </div>

      </div>
    </section>
  );
}
