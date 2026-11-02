"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { Menu, X, Phone, MessageCircle } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";
import Button from "@/components/common/Button";
import { getWhatsAppUrl } from "@/lib/whatsapp";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Collections", href: "/collections" },
  { name: "Our Projects", href: "/projects" },
  { name: "About Us", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const whatsappUrl = getWhatsAppUrl("Hello, I would like to enquire about your architectural stone carving services.");

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  return (
    <>
      {/* Top Bar with Antique Paper Tones */}
      <div className="bg-[#26201B] text-[#FAF7F2] text-[11px] py-1.5 px-4 border-b border-[#3D332B] relative z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-[#D4A36A]">✦</span>
            <span className="font-light text-[#E8DFC9]">
              Handcrafted Architectural Stone &bull; Maharashtra &amp; Pan-India
            </span>
          </div>

          <div className="hidden sm:flex items-center gap-4 text-[#D8CFBF]">
            <a
              href={`tel:${siteConfig.phoneNumberRaw}`}
              className="flex items-center gap-1 hover:text-white transition-colors"
            >
              <Phone className="w-3 h-3 text-[#D4A36A]" />
              <span>{siteConfig.phoneNumber}</span>
            </a>
            <span className="text-white/20">|</span>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-[#25D366] hover:text-white transition-colors"
            >
              <MessageCircle className="w-3 h-3" />
              <span>WhatsApp Consultation</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header className="sticky top-0 left-0 right-0 z-40 bg-[#FAF7F2]/95 backdrop-blur-md border-b border-[#E2D7C7] py-3 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-2.5 group focus:outline-none"
              aria-label={`${siteConfig.businessName} Home`}
            >
              <div className="relative w-8 h-8 sm:w-9 sm:h-9 flex-shrink-0">
                <Image
                  src="/images/icons/logo.svg"
                  alt={siteConfig.businessName}
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-lg sm:text-xl font-normal tracking-wide text-[#26201B]">
                  {siteConfig.shortBusinessName}
                </span>
                <span className="text-[9px] uppercase tracking-widest text-[#7D7368] font-light -mt-0.5">
                  Stone Crafts &amp; Architecture
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-6 xl:gap-8" aria-label="Main Navigation">
              {navLinks.map((link) => {
                const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`text-xs uppercase tracking-wider transition-colors relative py-1 ${
                      isActive
                        ? "text-[#9E6F39] font-medium"
                        : "text-[#423A33] hover:text-[#9E6F39]"
                    }`}
                  >
                    {link.name}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#9E6F39]" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Desktop Actions */}
            <div className="hidden lg:flex items-center gap-2.5">
              <Button
                href={whatsappUrl}
                variant="whatsapp"
                size="sm"
                icon={MessageCircle}
              >
                WhatsApp
              </Button>

              <Button
                href="/contact"
                variant="primary"
                size="sm"
              >
                Consultation
              </Button>
            </div>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-md text-[#26201B] hover:bg-[#F3EADE] focus:outline-none"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-0 z-50 lg:hidden bg-black/40 backdrop-blur-xs transition-opacity duration-300 ${
          mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMobileMenuOpen(false)}
      />

      <div
        className={`fixed top-0 right-0 bottom-0 z-50 w-full max-w-xs bg-[#FAF7F2] p-5 shadow-xl flex flex-col justify-between transform transition-transform duration-300 ease-in-out lg:hidden border-l border-[#E2D7C7] ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div>
          <div className="flex items-center justify-between pb-4 border-b border-[#E2D7C7]">
            <div className="flex items-center gap-2">
              <div className="relative w-7 h-7">
                <Image src="/images/icons/logo.svg" alt={siteConfig.businessName} fill className="object-contain" />
              </div>
              <span className="font-serif text-base text-[#26201B]">
                {siteConfig.shortBusinessName}
              </span>
            </div>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="p-1.5 text-[#6E645A] hover:text-[#26201B]"
              aria-label="Close menu"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <nav className="py-5 space-y-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-3 py-2 rounded-md text-xs uppercase tracking-wider transition-colors ${
                    isActive
                      ? "bg-[#F3EADE] text-[#9E6F39] font-medium"
                      : "text-[#423A33] hover:bg-[#F3EADE]"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>
        </div>

        <div className="space-y-2.5 pt-4 border-t border-[#E2D7C7]">
          <Button
            href={whatsappUrl}
            variant="whatsapp"
            size="md"
            className="w-full"
            icon={MessageCircle}
          >
            WhatsApp Consultation
          </Button>
          <Button
            href="/contact"
            variant="primary"
            size="md"
            className="w-full"
            onClick={() => setMobileMenuOpen(false)}
          >
            Request Quotation
          </Button>

          <p className="text-center text-[10px] text-[#7D7368] pt-1">
            {siteConfig.city}, {siteConfig.state} &bull; Maharashtra, India
          </p>
        </div>
      </div>
    </>
  );
}
