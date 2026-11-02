import Image from "next/image";
import Link from "next/link";
import { Check, Gem, Compass, Sparkles, MessageCircle } from "lucide-react";
import Breadcrumb from "@/components/common/Breadcrumb";
import SectionHeading from "@/components/common/SectionHeading";
import Button from "@/components/common/Button";
import { constructMetadata } from "@/lib/seo";
import { siteConfig } from "@/config/siteConfig";
import { getWhatsAppUrl } from "@/lib/whatsapp";

export const metadata = constructMetadata({
  title: "About Our Craftsmanship & Stone Atelier",
  description: "Learn about our traditional stone craftsmanship studio based in Maharashtra, our material selection approach, custom architectural capabilities, and timeless stone carving heritage.",
  canonicalUrl: "/about",
});

export default function AboutPage() {
  const whatsappUrl = getWhatsAppUrl(
    `Hello ${siteConfig.businessName}, I would like to schedule a consultation regarding your stone carving craft.`
  );

  return (
    <div className="pt-6 pb-16 bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <Breadcrumb items={[{ name: "About Us", item: "/about" }]} />

        {/* Section 1: Hero Banner */}
        <div className="relative my-4 rounded-xl overflow-hidden shadow-parchment-card border border-[#E2D7C7] bg-[#26201B] text-white">
          <div className="relative aspect-[21/9] sm:aspect-[24/8] min-h-[220px] w-full">
            <Image
              src="/images/about/about-hero.webp"
              alt="Stone carving atelier and natural stone architectural elements"
              fill
              priority
              sizes="(max-width: 1280px) 100vw, 1200px"
              className="object-cover object-center opacity-50"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#26201B] via-[#26201B]/40 to-transparent" />

            <div className="absolute inset-0 flex flex-col justify-end p-5 sm:p-8 max-w-2xl">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/15 border border-white/20 text-[10px] font-medium text-[#E5B582] w-fit mb-1.5 backdrop-blur-2xs">
                <span>✦</span>
                <span>About the Studio</span>
              </div>
              <h1 className="font-serif text-2xl sm:text-3xl font-normal text-white leading-tight">
                Honoring the Soul of Natural Stone
              </h1>
              <p className="mt-1.5 text-xs sm:text-sm text-[#D8CFBF] font-light leading-relaxed max-w-xl">
                A dedication to traditional Indian stone sculpting methods, refined architectural aesthetics, and enduring permanence.
              </p>
            </div>
          </div>
        </div>

        {/* Section 2: Our Story */}
        <div className="py-10 sm:py-12 border-b border-[#EAE1D3]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            <div className="lg:col-span-6 space-y-4">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#F4ECE1] text-[#7A5228] border border-[#E2D7C7] text-[11px] font-medium">
                <span>✦</span>
                <span>Our Story &amp; Ethos</span>
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl font-normal text-[#26201B] leading-snug">
                Carving Permanent Beauty into Maharashtra’s Architecture
              </h2>
              <div className="text-xs sm:text-sm text-[#6E645A] leading-relaxed space-y-3 font-light">
                <p>
                  Maharashtra’s landscape has been sculpted by stone for millennia—from ancient monolithic rock sanctuaries of the Western Ghats to historical fort portals and serene temple sanctums.
                </p>
                <p>
                  Our studio was established to sustain this rare tactile art form. While modern architecture frequently relies on artificial conglomerates and rapid casting, we believe nothing rivals the sensory weight, subtle grain variances, and multi-century lifespan of natural chiselled stone.
                </p>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative aspect-[4/3] w-full rounded-xl overflow-hidden border border-[#E2D7C7] shadow-parchment-soft">
                <Image
                  src="/images/about/craftsmanship-process.webp"
                  alt="Traditional stone carving technique"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Section 3: Material & Technique */}
        <div className="py-10 sm:py-12 border-b border-[#EAE1D3]">
          <SectionHeading
            eyebrow="Material & Technique"
            title="Our Approach to Stone Selection"
            description="True stone craftsmanship begins with respect for raw geology. We deliberately choose each rock variety according to structural demands, climate exposure, and surface finish suitability."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-6">
            <div className="bg-white p-5 rounded-xl border border-[#E2D7C7] shadow-parchment-soft">
              <div className="w-9 h-9 mb-3.5 rounded-lg bg-[#F4ECE1] border border-[#E2D7C7] flex items-center justify-center text-[#9E6F39]">
                <Gem className="w-4 h-4" />
              </div>
              <h3 className="font-serif text-base font-normal text-[#26201B] mb-1.5">Natural Sandstone</h3>
              <p className="text-xs text-[#6E645A] leading-relaxed font-light">
                Sourced from premier quarries including Dholpur beige and pink, and Bansi Paharpur. Ideal for detailed wall relief carvings, ornate window jali lattices, and monumental columns due to its uniform fine grain.
              </p>
            </div>

            <div className="bg-white p-5 rounded-xl border border-[#E2D7C7] shadow-parchment-soft">
              <div className="w-9 h-9 mb-3.5 rounded-lg bg-[#F4ECE1] border border-[#E2D7C7] flex items-center justify-center text-[#9E6F39]">
                <Compass className="w-4 h-4" />
              </div>
              <h3 className="font-serif text-base font-normal text-[#26201B] mb-1.5">Black Basalt &amp; Granite</h3>
              <p className="text-xs text-[#6E645A] leading-relaxed font-light">
                Native to the Deccan Plateau. Exceptionally dense, weather-impervious, and resilient. Chosen for sacred monolithic deity idols, monumental entrance steps, and outdoor fountains subjected to continuous water flow.
              </p>
            </div>

            <div className="bg-white p-5 rounded-xl border border-[#E2D7C7] shadow-parchment-soft">
              <div className="w-9 h-9 mb-3.5 rounded-lg bg-[#F4ECE1] border border-[#E2D7C7] flex items-center justify-center text-[#9E6F39]">
                <Sparkles className="w-4 h-4" />
              </div>
              <h3 className="font-serif text-base font-normal text-[#26201B] mb-1.5">Density Testing</h3>
              <p className="text-xs text-[#6E645A] leading-relaxed font-light">
                Every stone block is sound-tested with hammer taps to verify freedom from internal cleavage fissures, ensuring that intricately chiselled elements retain structural longevity.
              </p>
            </div>
          </div>
        </div>

        {/* Section 4: Contact CTA */}
        <div className="mt-12 p-6 sm:p-8 rounded-xl bg-[#26201B] text-[#FAF7F2] text-center border border-[#3D332B]">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/10 border border-white/15 text-[10px] font-medium text-[#E5B582] mb-2.5">
            <span>✦</span>
            <span>Collaborate With Our Atelier</span>
          </div>
          <h3 className="font-serif text-xl sm:text-2xl text-white font-normal max-w-xl mx-auto">
            Ready to Discuss Your Stone Architecture Project?
          </h3>
          <p className="mt-2 text-xs text-[#D8CFBF] max-w-lg mx-auto leading-relaxed font-light">
            Reach out with your drawings, design references, or dimensional sketches. We provide direct craftsman consultations and technical feasibility reviews.
          </p>
          <div className="mt-5 flex flex-wrap justify-center gap-3">
            <Button href="/contact" variant="primary" size="sm">
              Request Project Quote
            </Button>
            <Button
              href={whatsappUrl}
              variant="whatsapp"
              size="sm"
              icon={MessageCircle}
            >
              Consult via WhatsApp
            </Button>
          </div>
        </div>

      </div>
    </div>
  );
}
