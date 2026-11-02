import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingWhatsApp from "@/components/common/FloatingWhatsApp";
import { siteConfig } from "@/config/siteConfig";
import { getLocalBusinessSchema, getWebSiteSchema } from "@/lib/seo";

export const metadata = {
  metadataBase: new URL(siteConfig.websiteUrl),
  title: {
    default: `${siteConfig.businessName} | ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.businessName}`,
  },
  description: siteConfig.description,
  keywords: [
    "Stone carving in Maharashtra",
    "Indian stone home temple",
    "Handcrafted stone mandir for home",
    "Stone idols and sculptures",
    "Handcrafted Ganesha stone idol",
    "Lord Shiva stone sculpture",
    "Stone wall decorations",
    "3D stone wall panels and relief murals",
    "Architectural stone designs Pune Mumbai",
    "Decorative sandstone panels",
    "Natural stone pillars and columns",
    "Temple stone carvings Maharashtra",
    "Custom stone water fountains",
    "Dholpur beige sandstone carving",
    "Bespoke stone craftsmanship India"
  ],
  authors: [{ name: siteConfig.businessName, url: siteConfig.websiteUrl }],
  creator: siteConfig.businessName,
  publisher: siteConfig.businessName,
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteConfig.websiteUrl,
    siteName: siteConfig.businessName,
    title: `${siteConfig.businessName} | ${siteConfig.tagline}`,
    description: siteConfig.description,
    images: [
      {
        url: "/images/hero/hero-main.webp",
        width: 1200,
        height: 630,
        alt: `${siteConfig.businessName} Architectural Stone Craftsmanship`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.businessName} | ${siteConfig.tagline}`,
    description: siteConfig.description,
    images: ["/images/hero/hero-main.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: siteConfig.googleSiteVerification ? {
    google: siteConfig.googleSiteVerification,
  } : undefined,
};

export default function RootLayout({ children }) {
  const businessSchema = getLocalBusinessSchema();
  const websiteSchema = getWebSiteSchema();

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,600&family=Inter:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className="font-sans antialiased bg-[#FAF7F2] text-[#26201B] selection:bg-[#9E6F39] selection:text-white flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
