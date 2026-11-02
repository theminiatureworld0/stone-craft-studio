import { siteConfig } from "@/config/siteConfig";

/**
 * Generates a standard WhatsApp click-to-chat URL with prefilled message
 * @param {string} customMessage 
 * @returns {string} wa.me URL
 */
export function getWhatsAppUrl(customMessage = "") {
  const cleanNumber = siteConfig.whatsappNumber.replace(/[^0-9]/g, "");
  const defaultText = `Hello ${siteConfig.businessName}, I would like to enquire about your stone craftsmanship and architectural services.`;
  const text = customMessage ? encodeURIComponent(customMessage.trim()) : encodeURIComponent(defaultText);
  return `https://wa.me/${cleanNumber}?text=${text}`;
}

/**
 * Generates WhatsApp URL for a specific product enquiry
 * Format: "Hello, I am interested in [Product Name]. Please share more details."
 * @param {object} product 
 * @param {string} currentUrl (optional)
 * @returns {string}
 */
export function getProductWhatsAppUrl(product, currentUrl = "") {
  if (!product) return getWhatsAppUrl();
  const urlPart = currentUrl ? `\nProduct Link: ${currentUrl}` : "";
  const message = `Hello, I am interested in ${product.name}. Please share more details.${urlPart}`;
  return getWhatsAppUrl(message);
}

/**
 * Generates WhatsApp URL for custom project enquiry
 * @param {string} projectTopic 
 * @returns {string}
 */
export function getProjectWhatsAppUrl(projectTopic = "") {
  const message = projectTopic
    ? `Hello, I would like to discuss a custom stone project: ${projectTopic}.`
    : `Hello, I have a custom stone architectural carving project and would like to schedule a consultation.`;
  return getWhatsAppUrl(message);
}
