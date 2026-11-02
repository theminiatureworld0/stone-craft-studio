/**
 * Site Configuration
 * Central configuration file for brand identity, contact information,
 * social links, and SEO settings.
 * 
 * Edit this file to update business details across the entire website.
 */

export const siteConfig = {
  // Brand Details
  businessName: "Stone Craft Studio",
  shortBusinessName: "Stone Craft",
  tagline: "Where Stone Becomes Timeless Art",
  description: "Handcrafted architectural stone carvings, bespoke stone wall panels, traditional idols, and monumental stone pillars rooted in fine Indian stone craftsmanship.",
  
  // Contact Information (Configurable - replace with genuine client details)
  phoneNumber: "+91 98765 43210",
  phoneNumberRaw: "+919876543210",
  whatsappNumber: "+919876543210", // International format without spaces or symbols for wa.me link
  email: "contact@stonecraftstudio.com",
  
  // Location
  address: "Crafts Industrial Zone",
  city: "Pune",
  state: "Maharashtra",
  country: "India",
  postalCode: "411001",
  
  // Visual Assets
  logo: "/images/icons/logo.svg",
  favicon: "/favicon.ico",
  
  // Social Media Links (Leave empty or set actual URLs when provided)
  instagramUrl: "", // e.g. "https://instagram.com/stonecraftstudio"
  facebookUrl: "",  // e.g. "https://facebook.com/stonecraftstudio"
  googleMapsUrl: "", // e.g. "https://maps.google.com/..."
  websiteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://stonecraftstudio.com",
  
  // Form Submission Endpoint (Formspree or similar external service)
  // Set to process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT or configure below
  formEndpoint: process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT || "",

  // Google Search Console Verification code
  googleSiteVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
};

export default siteConfig;
