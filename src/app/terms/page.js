import Breadcrumb from "@/components/common/Breadcrumb";
import { siteConfig } from "@/config/siteConfig";
import { constructMetadata } from "@/lib/seo";

export const metadata = constructMetadata({
  title: "Terms & Conditions | Stone Craft Studio",
  description: "Terms and conditions regarding stone carving bespoke commissions, natural stone characteristics, and architectural craft consultations.",
  canonicalUrl: "/terms",
});

export default function TermsPage() {
  return (
    <div className="pt-6 pb-16 bg-[#FAF7F2]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <Breadcrumb items={[{ name: "Terms & Conditions", item: "/terms" }]} />

        <div className="py-6 sm:py-8">
          <span className="text-[11px] font-medium text-[#9E6F39] block mb-1">
            Engagement Terms
          </span>
          <h1 className="font-serif text-2xl sm:text-3xl text-[#26201B] font-normal">
            Terms &amp; Conditions
          </h1>
          <p className="mt-1.5 text-xs text-[#6E645A] font-light">
            Last updated: November 2024
          </p>
        </div>

        <div className="bg-white p-6 sm:p-8 rounded-xl border border-[#E2D7C7] shadow-parchment-soft space-y-6 text-xs sm:text-sm text-[#6E645A] font-light leading-relaxed">
          <section className="space-y-2">
            <h2 className="font-serif text-base sm:text-lg text-[#26201B] font-normal">
              1. Nature of Handcrafted Natural Stone
            </h2>
            <p>
              All products and architectural installations showcased on this website are sculpted from 100% genuine quarried natural stone (including sandstone, granite, and basalt).
            </p>
            <p>
              Natural stone is an organic earth material. Variations in background hue, grain structure, fossil inclusions, micro-veining, and textural surface nuances are inherent characteristics of natural geology and cannot be considered defects.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-serif text-base sm:text-lg text-[#26201B] font-normal">
              2. Custom Commissions &amp; Approvals
            </h2>
            <p>
              For bespoke architectural orders (including wall cladding, columns, and temple mandapas), fabrication commences solely following written confirmation of drawings, dimensions, stone selection, and milestone schedule.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-serif text-base sm:text-lg text-[#26201B] font-normal">
              3. Site Preparation and Load
            </h2>
            <p>
              Natural stone components possess substantial physical weight. It is the client’s and structural consultant’s responsibility to verify that building foundations, lintels, and supporting masonry conform to all structural civil engineering standards.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-serif text-base sm:text-lg text-[#26201B] font-normal">
              4. Governing Law
            </h2>
            <p>
              Any agreements or disputes arising out of craftsmanship commissions are governed by the laws of Maharashtra, India.
            </p>
          </section>
        </div>

      </div>
    </div>
  );
}
