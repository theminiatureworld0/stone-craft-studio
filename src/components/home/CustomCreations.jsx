import { MessageCircle, FileText, CheckCircle2 } from "lucide-react";
import Button from "@/components/common/Button";
import { getProjectWhatsAppUrl } from "@/lib/whatsapp";

export default function CustomCreations() {
  const whatsappUrl = getProjectWhatsAppUrl(
    "I would like to discuss bespoke stone dimensions, custom architectural carvings, and blueprints."
  );

  return (
    <section className="relative py-12 sm:py-16 bg-[#F4ECE1] text-[#26201B] border-b border-[#E2D7C7] overflow-hidden">
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FAF7F2] text-[#7A5228] border border-[#E2D7C7] text-[11px] font-medium mb-3">
          <span>✦</span>
          <span>Bespoke Architectural Commissions</span>
        </div>

        <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-normal text-[#26201B] tracking-tight leading-snug">
          Designed Around <span className="text-[#9E6F39]">Your Exact Vision.</span>
        </h2>

        <p className="mt-3 max-w-xl mx-auto text-xs sm:text-sm text-[#6E645A] font-light leading-relaxed">
          From residential villa elevations and private temple mandapams to bespoke fountains, our master stonemasons translate your custom dimensions, CAD blueprints, or sketches into permanent natural stone.
        </p>

        {/* 3 Compact Cards */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
          <div className="bg-[#FAF7F2] p-4 rounded-xl border border-[#E2D7C7]">
            <CheckCircle2 className="w-5 h-5 text-[#9E6F39] mb-2" />
            <h4 className="text-xs font-medium text-[#26201B]">Custom Dimensions</h4>
            <p className="text-[11px] text-[#6E645A] mt-1 leading-relaxed font-light">
              Cut and sculpted to fit exact structural openings, lintels, and elevation heights.
            </p>
          </div>

          <div className="bg-[#FAF7F2] p-4 rounded-xl border border-[#E2D7C7]">
            <CheckCircle2 className="w-5 h-5 text-[#9E6F39] mb-2" />
            <h4 className="text-xs font-medium text-[#26201B]">Natural Quarry Selection</h4>
            <p className="text-[11px] text-[#6E645A] mt-1 leading-relaxed font-light">
              Dholpur sandstone, red Agra, black basalt, or pure granite tailored to your climate.
            </p>
          </div>

          <div className="bg-[#FAF7F2] p-4 rounded-xl border border-[#E2D7C7]">
            <CheckCircle2 className="w-5 h-5 text-[#9E6F39] mb-2" />
            <h4 className="text-xs font-medium text-[#26201B]">CAD &amp; 3D Coordination</h4>
            <p className="text-[11px] text-[#6E645A] mt-1 leading-relaxed font-light">
              Seamless collaboration with your civil engineers, architects, and on-site contractors.
            </p>
          </div>
        </div>

        {/* Actions */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3.5 sm:gap-4">
          <Button
            href="/contact"
            variant="primary"
            size="md"
            icon={FileText}
          >
            Request Custom Quotation
          </Button>

          <Button
            href={whatsappUrl}
            variant="whatsapp"
            size="md"
            icon={MessageCircle}
          >
            WhatsApp Consultation
          </Button>
        </div>

      </div>
    </section>
  );
}
