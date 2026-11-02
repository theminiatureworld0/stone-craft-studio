import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingWhatsApp from "@/components/common/FloatingWhatsApp";
import { siteConfig } from "@/config/siteConfig";
import { getLocalBusinessSchema } from "@/lib/seo";

export const metadata = {
  metadataBase: new URL(siteConfig.websiteUrl),
  title: {
    default: `${siteConfig.businessName} | ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.businessName}`,
  },
  description: siteConfig.description,
  keywords: [
    "Stone carving in Maharashtra",
    "Stone wall decorations",
    "Handcrafted stone idols",
    "Architectural stone designs",
    "Decorative stone panels",
    "Stone pillars",
    "Temple stone carvings",
    "Custom stone sculptures",
    "Dholpur sandstone carving",
    "Indian architectural stone"
  ],
  authors: [{ name: siteConfig.businessName }],
  creator: siteConfig.businessName,
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
        alt: `${siteConfig.businessName} Architectural Craftsmanship`,
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
};

export default function RootLayout({ children }) {
  const businessSchema = getLocalBusinessSchema();

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
      </head>
      <body className="font-sans antialiased bg-[#F7F5F0] text-[#272521] selection:bg-[#B49A7B] selection:text-white flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
