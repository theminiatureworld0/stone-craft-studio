/**
 * Site Configuration
 * Central configuration file for brand identity, contact information,
 * social links, and SEO settings.
 * 
 * Edit this file to update business details across the entire website.
 */

// Dynamically determine the live production site URL
const getBaseUrl = () => {
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return process.env.NEXT_PUBLIC_SITE_URL.replace(/\/$/, "");
  }
  if (process.env.VERCEL_PROJECT_PRODUCTION_URL) {
    return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;
  }
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }
  return "https://stone-craft-studio.vercel.app";
};

export const siteConfig = {
  // Brand Details
  businessName: "Stone Craft Studio",
  shortBusinessName: "Stone Craft",
  tagline: "Where Stone Becomes Timeless Art",
  description: "Premier architectural stone carving studio in Maharashtra, India. Specialising in handcrafted Indian stone home temples, monolithic deity idols, 3D stone wall panels, classical pillars, and bespoke sandstone architecture.",
  
  // Contact Information (Configurable - replace with genuine client details)
  phoneNumber: "+91 98765 43210",
  phoneNumberRaw: "+919876543210",
  whatsappNumber: "+919876543210", // International format without spaces or symbols for wa.me link
  email: "contact@stonecraftstudio.com",
  
  // Location
  address: "Architectural Crafts Zone",
  city: "Pune",
  state: "Maharashtra",
  country: "India",
  postalCode: "411001",
  
  // Visual Assets
  logo: "/images/icons/logo.svg",
  favicon: "/favicon.svg",
  
  // Social Media Links (Leave empty or set actual URLs when provided)
  instagramUrl: "", // e.g. "https://instagram.com/stonecraftstudio"
  facebookUrl: "",  // e.g. "https://facebook.com/stonecraftstudio"
  googleMapsUrl: "", // e.g. "https://maps.google.com/..."
  websiteUrl: getBaseUrl(),
  
  // Form Submission Endpoint (Formspree or similar external service)
  formEndpoint: process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT || "",

  // Google Search Console Verification code
  googleSiteVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
};

export default siteConfig;
