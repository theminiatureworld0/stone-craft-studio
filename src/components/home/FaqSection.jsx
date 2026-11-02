"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import SectionHeading from "@/components/common/SectionHeading";

const faqs = [
  {
    q: "Can I customize dimensions, motifs, and relief depths for my project?",
    a: "Yes, absolutely. Every piece is sculpted individually. We work directly with your architectural scale drawings, CAD files, or sketches to calibrate dimensions, thickness, and relief depth to fit your exact structural lintels, elevations, and niches."
  },
  {
    q: "What natural stone varieties do you recommend for exterior versus interior walls?",
    a: "For exterior facades exposed to tropical sun and monsoon rains, we recommend dense Dholpur beige or pink sandstone, red Agra sandstone, or native black basalt. For interior feature walls, we also offer fine-grained mint sandstone and pure Makrana white marble."
  },
  {
    q: "How are heavy stone wall panels and monumental pillars installed securely?",
    a: "Our atelier pre-drills mechanical anchor points and concealed stainless steel dowel channels prior to dispatch. We provide full technical installation guidelines for your civil masonry contractor, including dry-cladding bracket specifications."
  },
  {
    q: "Do you deliver and consult on-site across Maharashtra?",
    a: "Yes. Our workshops and logistics coordinate across Mumbai, Pune, Alibaug, Nashik, Kolhapur, Nagpur, and pan-India. All carvings are secured in heavy-duty custom wooden crates with internal shock padding for safe transport."
  },
  {
    q: "How do I obtain a quotation and feasibility review?",
    a: "You can submit your approximate dimensions and site details via our online quotation form or send your drawings directly to our master craftsmen via WhatsApp. We typically provide preliminary pricing and lead time estimates within 24 to 48 hours."
  }
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (idx) => {
    setOpenIndex((prev) => (prev === idx ? -1 : idx));
  };

  return (
    <section className="py-12 sm:py-16 bg-[#F4ECE1]/50 border-b border-[#E2D7C7]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          eyebrow="Common Inquiries"
          title="Frequently Asked Questions"
          description="Everything you need to know about commissioning bespoke architectural stone carvings, material durability, and delivery across Maharashtra."
          align="center"
        />

        <div className="space-y-2.5 mt-6">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-lg border border-[#E2D7C7] overflow-hidden bg-white shadow-2xs"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full p-3.5 sm:p-4 text-left flex items-center justify-between gap-3 bg-[#FAF7F2] hover:bg-[#F3EADE] transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif text-sm sm:text-base font-normal text-[#26201B]">
                    {faq.q}
                  </span>
                  <div
                    className={`w-6 h-6 rounded-full bg-white flex items-center justify-center flex-shrink-0 border border-[#E2D7C7] transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-[#9E6F39]" : "text-[#6E645A]"
                    }`}
                  >
                    <ChevronDown className="w-3.5 h-3.5" />
                  </div>
                </button>

                {isOpen && (
                  <div className="p-3.5 sm:p-4 bg-white text-xs sm:text-sm text-[#6E645A] font-light leading-relaxed border-t border-[#EAE1D3]">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
