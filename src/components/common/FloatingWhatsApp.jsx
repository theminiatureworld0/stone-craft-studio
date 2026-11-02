"use client";

import { MessageCircle } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { siteConfig } from "@/config/siteConfig";

export default function FloatingWhatsApp() {
  const url = getWhatsAppUrl(
    `Hello ${siteConfig.businessName}, I would like to enquire about your stone craftsmanship and architectural services.`
  );

  return (
    <aside aria-label="WhatsApp quick consultation">
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Direct WhatsApp Consultation with Master Stonemason"
        className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-lg hover:bg-[#1EBE5D] hover:scale-105 active:scale-95 transition-all duration-300 focus:outline-none focus-visible:ring-4 focus-visible:ring-[#25D366]/40 group"
      >
        <span className="sr-only">Direct WhatsApp Consultation</span>
        <MessageCircle className="w-7 h-7" />
        
        {/* Hover pill on desktop */}
        <span className="absolute right-16 px-3.5 py-1.5 bg-[#292722] text-[#F7F5F0] text-xs font-medium tracking-wider uppercase rounded-md shadow-md opacity-0 pointer-events-none group-hover:opacity-100 group-focus:opacity-100 transition-opacity duration-200 whitespace-nowrap hidden sm:block">
          WhatsApp Consultation
        </span>
      </a>
    </aside>
  );
}
