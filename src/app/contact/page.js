import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import Breadcrumb from "@/components/common/Breadcrumb";
import EnquiryForm from "@/components/common/EnquiryForm";
import Button from "@/components/common/Button";
import { siteConfig } from "@/config/siteConfig";
import { constructMetadata } from "@/lib/seo";
import { getWhatsAppUrl } from "@/lib/whatsapp";

export const metadata = constructMetadata({
  title: "Request A Stone Architecture Quote & Consultations | Stone Craft Studio",
  description: "Connect with our stone carving atelier in Maharashtra, India. Enquire about custom stone wall claddings, deity sculptures, stone pillars, and temple carvings via WhatsApp, telephone, or online consultation form.",
  canonicalUrl: "/contact",
});

export default function ContactPage({ searchParams }) {
  const initialInterest = searchParams?.interest || "General Architectural Enquiry";
  const whatsappUrl = getWhatsAppUrl(
    initialInterest
      ? `Hello ${siteConfig.businessName}, I would like to request a quotation for: ${initialInterest}.`
      : undefined
  );

  return (
    <div className="pt-6 pb-16 bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <Breadcrumb items={[{ name: "Contact", item: "/contact" }]} />

        {/* Page Heading */}
        <div className="py-6 sm:py-8 text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#F4ECE1] text-[#7A5228] border border-[#E2D7C7] text-[11px] font-medium mb-2.5">
            <span>✦</span>
            <span>Direct Atelier Quotations</span>
          </div>
          <h1 className="font-serif text-2xl sm:text-3xl font-normal text-[#26201B] tracking-tight">
            Consult With Our Craftsmen
          </h1>
          <p className="mt-2 text-xs sm:text-sm text-[#6E645A] font-light leading-relaxed">
            Whether preparing architectural tenders, private villa elevations, or temple sanctum commissions, we are pleased to review your specifications.
          </p>
        </div>

        {/* Main Grid: Details on Left, Enquiry Form on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start mt-4">
          
          {/* Contact Details & Fast Channels (Spans 4 cols on lg) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="bg-white p-5 sm:p-6 rounded-xl border border-[#E2D7C7] shadow-parchment-soft space-y-4">
              <h2 className="font-serif text-base sm:text-lg font-normal text-[#26201B]">
                Workshop &amp; Consultations
              </h2>
              <p className="text-xs text-[#6E645A] leading-relaxed font-light">
                We accommodate technical drawings, architectural DWG/PDF blueprints, and sketches. You can contact us through any of the channels below.
              </p>

              <div className="space-y-3 pt-2 border-t border-[#EAE1D3]">
                {/* Phone */}
                <a
                  href={`tel:${siteConfig.phoneNumberRaw}`}
                  className="flex items-start gap-3 text-xs text-[#26201B] group hover:text-[#9E6F39] transition-colors"
                >
                  <div className="w-8 h-8 rounded-lg bg-[#F4ECE1] border border-[#E2D7C7] flex items-center justify-center text-[#9E6F39] flex-shrink-0 group-hover:bg-[#9E6F39] group-hover:text-white transition-colors">
                    <Phone className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <span className="block text-[10px] uppercase font-medium text-[#7D7368]">Telephone</span>
                    <span className="font-medium text-xs sm:text-sm text-[#26201B]">{siteConfig.phoneNumber}</span>
                    <span className="block text-[11px] text-[#7D7368] font-light">Mon to Sat &bull; 9 AM – 7 PM</span>
                  </div>
                </a>

                {/* WhatsApp */}
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-xs text-[#26201B] group hover:text-[#25D366] transition-colors"
                >
                  <div className="w-8 h-8 rounded-lg bg-[#25D366]/10 border border-[#25D366]/30 flex items-center justify-center text-[#25D366] flex-shrink-0 group-hover:bg-[#25D366] group-hover:text-white transition-colors">
                    <MessageCircle className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <span className="block text-[10px] uppercase font-medium text-[#7D7368]">Instant WhatsApp</span>
                    <span className="font-medium text-xs text-[#25D366]">Direct WhatsApp Chat</span>
                    <span className="block text-[11px] text-[#7D7368] font-light">Share CAD plans &amp; measurements</span>
                  </div>
                </a>

                {/* Email */}
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-start gap-3 text-xs text-[#26201B] group hover:text-[#9E6F39] transition-colors"
                >
                  <div className="w-8 h-8 rounded-lg bg-[#F4ECE1] border border-[#E2D7C7] flex items-center justify-center text-[#9E6F39] flex-shrink-0 group-hover:bg-[#9E6F39] group-hover:text-white transition-colors">
                    <Mail className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <span className="block text-[10px] uppercase font-medium text-[#7D7368]">Project RFQs &amp; Blueprints</span>
                    <span className="font-medium text-xs text-[#26201B] break-all">{siteConfig.email}</span>
                  </div>
                </a>

                {/* Location */}
                <div className="flex items-start gap-3 text-xs text-[#26201B]">
                  <div className="w-8 h-8 rounded-lg bg-[#F4ECE1] border border-[#E2D7C7] flex items-center justify-center text-[#9E6F39] flex-shrink-0">
                    <MapPin className="w-3.5 h-3.5 text-[#9E6F39]" />
                  </div>
                  <div>
                    <span className="block text-[10px] uppercase font-medium text-[#7D7368]">Regional Atelier</span>
                    <span className="font-medium text-xs text-[#26201B]">{siteConfig.city}, {siteConfig.state}</span>
                    <span className="block text-[11px] text-[#7D7368] font-light">{siteConfig.country} &bull; Visits by appointment</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-[#F4ECE1] border border-[#E2D7C7] text-xs text-[#26201B] space-y-1">
              <span className="font-medium text-[#9E6F39] block text-[11px]">
                Direct Craftsman Delivery:
              </span>
              <p className="text-[11px] text-[#6E645A] leading-relaxed font-light">
                All finished architectural stone elements are packed in shock-padded wooden crating for direct freight delivery across Maharashtra and India.
              </p>
            </div>
          </div>

          {/* Enquiry Form (Spans 8 cols on lg) */}
          <div className="lg:col-span-8">
            <EnquiryForm defaultInterest={initialInterest} />
          </div>

        </div>

      </div>
    </div>
  );
}
