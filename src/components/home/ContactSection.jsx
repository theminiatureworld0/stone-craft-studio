import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import SectionHeading from "@/components/common/SectionHeading";
import EnquiryForm from "@/components/common/EnquiryForm";
import Button from "@/components/common/Button";
import { siteConfig } from "@/config/siteConfig";
import { getWhatsAppUrl } from "@/lib/whatsapp";

export default function ContactSection() {
  const whatsappUrl = getWhatsAppUrl(
    "Hello, I would like to consult with your studio regarding a stone carving project."
  );

  return (
    <section id="contact-enquiry" className="py-12 sm:py-16 bg-[#F4ECE1]/60 border-t border-[#E2D7C7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <SectionHeading
          eyebrow="Initiate A Consultation"
          title="Request A Stone Architecture Quote"
          description="Discuss architectural carvings, custom wall murals, temple mandapa requirements, or residential stone pillars directly with our atelier."
          align="center"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          
          {/* Direct Studio Details & WhatsApp CTA (Spans 4 cols on lg) */}
          <div className="lg:col-span-4 space-y-4 order-2 lg:order-1">
            <div className="bg-white p-5 sm:p-6 rounded-xl border border-[#E2D7C7] shadow-parchment-soft space-y-4">
              <h3 className="font-serif text-lg font-normal text-[#26201B]">
                Direct Atelier Contact
              </h3>
              <p className="text-xs text-[#6E645A] leading-relaxed font-light">
                We accommodate architectural DWG/PDF blueprints, site photos, and sketches. Reach out directly for project scoping and stone selection.
              </p>

              <div className="space-y-3 pt-2 border-t border-[#EAE1D3]">
                <a
                  href={`tel:${siteConfig.phoneNumberRaw}`}
                  className="flex items-start gap-3 group text-xs text-[#26201B] hover:text-[#9E6F39] transition-colors"
                >
                  <div className="w-8 h-8 rounded-lg bg-[#F4ECE1] border border-[#E2D7C7] flex items-center justify-center text-[#9E6F39] flex-shrink-0 group-hover:bg-[#9E6F39] group-hover:text-white transition-colors">
                    <Phone className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <span className="block text-[10px] uppercase font-medium text-[#7D7368]">Telephone</span>
                    <span className="font-medium text-xs sm:text-sm text-[#26201B]">{siteConfig.phoneNumber}</span>
                  </div>
                </a>

                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-start gap-3 group text-xs text-[#26201B] hover:text-[#9E6F39] transition-colors"
                >
                  <div className="w-8 h-8 rounded-lg bg-[#F4ECE1] border border-[#E2D7C7] flex items-center justify-center text-[#9E6F39] flex-shrink-0 group-hover:bg-[#9E6F39] group-hover:text-white transition-colors">
                    <Mail className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <span className="block text-[10px] uppercase font-medium text-[#7D7368]">Direct Email</span>
                    <span className="font-medium text-xs text-[#26201B] break-all">{siteConfig.email}</span>
                  </div>
                </a>

                <div className="flex items-start gap-3 text-xs text-[#26201B]">
                  <div className="w-8 h-8 rounded-lg bg-[#F4ECE1] border border-[#E2D7C7] flex items-center justify-center text-[#9E6F39] flex-shrink-0">
                    <MapPin className="w-3.5 h-3.5 text-[#9E6F39]" />
                  </div>
                  <div>
                    <span className="block text-[10px] uppercase font-medium text-[#7D7368]">Regional Atelier</span>
                    <span className="font-medium text-xs text-[#26201B]">{siteConfig.city}, {siteConfig.state}</span>
                    <p className="text-[11px] text-[#7D7368] mt-0.5 font-light">On-site consultations across Maharashtra</p>
                  </div>
                </div>
              </div>

              {/* Fast WhatsApp Box */}
              <div className="p-3.5 rounded-lg bg-[#FAF7F2] border border-[#E2D7C7] space-y-2">
                <div className="flex items-center gap-1.5 text-xs font-medium text-[#26201B]">
                  <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
                  <span>Instant WhatsApp Consultation</span>
                </div>
                <p className="text-[11px] text-[#6E645A] leading-relaxed font-light">
                  Send sketches, CAD elevations, or site photos directly to our stonemasons for technical feedback.
                </p>
                <Button
                  href={whatsappUrl}
                  variant="whatsapp"
                  size="xs"
                  className="w-full"
                  icon={MessageCircle}
                >
                  Chat with Master Stonemason
                </Button>
              </div>
            </div>
          </div>

          {/* Enquiry Form (Spans 8 cols on lg) */}
          <div className="lg:col-span-8 order-1 lg:order-2">
            <EnquiryForm />
          </div>

        </div>

      </div>
    </section>
  );
}
