import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, MessageCircle, ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";
import { categories } from "@/data/categories";
import { getWhatsAppUrl } from "@/lib/whatsapp";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const whatsappUrl = getWhatsAppUrl();

  const socialLinks = [
    { name: "Instagram", url: siteConfig.instagramUrl },
    { name: "Facebook", url: siteConfig.facebookUrl },
    { name: "Google Maps", url: siteConfig.googleMapsUrl },
  ].filter((item) => Boolean(item.url && item.url.trim()));

  return (
    <footer className="bg-[#26201B] text-[#FAF7F2] pt-12 sm:pt-16 pb-10 border-t border-[#3D332B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-6 pb-10 border-b border-[#3D332B]">
          
          {/* Column 1: Brand (Spans 2 cols on lg) */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-flex items-center gap-2.5 group">
              <div className="relative w-8 h-8 flex-shrink-0">
                <Image
                  src="/images/icons/logo-white.svg"
                  alt={siteConfig.businessName}
                  fill
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-lg tracking-wide uppercase text-white font-normal">
                  {siteConfig.businessName}
                </span>
                <span className="text-[9px] tracking-widest uppercase text-[#D4A36A] font-light">
                  Architectural Stone Atelier
                </span>
              </div>
            </Link>

            <p className="text-xs text-[#D8CFBF] font-light leading-relaxed max-w-sm">
              Handcrafting architectural stone carvings, bespoke decorative wall panels, traditional temple sanctums, and monolithic stone pillars. Rooted in traditional Indian craftsmanship and tailored for contemporary architectural elegance.
            </p>

            <div className="pt-1">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#342D26] border border-[#483F36] text-[11px] text-[#D4A36A]">
                <MapPin className="w-3 h-3 text-[#D4A36A]" />
                Based in {siteConfig.state}, {siteConfig.country}
              </span>
            </div>

            {socialLinks.length > 0 && (
              <div className="pt-1 flex items-center gap-3 text-xs">
                <span className="text-[#8E8375]">Connect:</span>
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#D8CFBF] hover:text-[#D4A36A] transition-colors flex items-center gap-1 text-[11px]"
                  >
                    <span>{social.name}</span>
                    <ArrowUpRight className="w-2.5 h-2.5" />
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* Column 2: Quick Navigation */}
          <div>
            <h3 className="text-xs uppercase tracking-wider text-[#D4A36A] font-medium mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-xs text-[#D8CFBF] font-light">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/collections" className="hover:text-white transition-colors">
                  All Collections
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-white transition-colors">
                  Our Projects
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About the Studio
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact &amp; Consultations
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Collections */}
          <div>
            <h3 className="text-xs uppercase tracking-wider text-[#D4A36A] font-medium mb-4">
              Stone Disciplines
            </h3>
            <ul className="space-y-2.5 text-xs text-[#D8CFBF] font-light">
              {categories.map((cat) => (
                <li key={cat.slug}>
                  <Link
                    href={`/collections/${cat.slug}`}
                    className="hover:text-[#D4A36A] transition-colors line-clamp-1"
                  >
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Inquiries */}
          <div>
            <h3 className="text-xs uppercase tracking-wider text-[#D4A36A] font-medium mb-4">
              Contact &amp; Inquiries
            </h3>
            <ul className="space-y-3 text-xs text-[#D8CFBF] font-light">
              <li>
                <a
                  href={`tel:${siteConfig.phoneNumberRaw}`}
                  className="flex items-start gap-2 hover:text-white transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-[#D4A36A] flex-shrink-0 mt-0.5" />
                  <span>{siteConfig.phoneNumber}</span>
                </a>
              </li>
              <li>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2 text-[#25D366] hover:text-white transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5 flex-shrink-0 mt-0.5" />
                  <span>WhatsApp Consultation</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-start gap-2 hover:text-white transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 text-[#D4A36A] flex-shrink-0 mt-0.5" />
                  <span className="break-all">{siteConfig.email}</span>
                </a>
              </li>
              <li className="pt-1 text-[11px] text-[#8E8375] leading-relaxed">
                Workshops in {siteConfig.state}, India. On-site architectural visits across Maharashtra.
              </li>
            </ul>
          </div>

        </div>

        {/* Footer Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-[#8E8375] font-light">
          <p>
            &copy; {currentYear} {siteConfig.businessName}. All rights reserved. Handcrafted in Maharashtra, India.
          </p>

          <div className="flex items-center gap-4">
            <Link
              href="/privacy-policy"
              className="hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>
            <span>&bull;</span>
            <Link
              href="/terms"
              className="hover:text-white transition-colors"
            >
              Terms &amp; Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
