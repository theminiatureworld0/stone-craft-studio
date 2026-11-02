"use client";

import { useState } from "react";
import { Send, CheckCircle2, AlertCircle, MessageCircle, Phone } from "lucide-react";
import Button from "@/components/common/Button";
import { siteConfig } from "@/config/siteConfig";
import { getWhatsAppUrl } from "@/lib/whatsapp";

export default function EnquiryForm({
  defaultInterest = "General Architectural Enquiry",
  productContext = null,
  className = "",
}) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    interest: defaultInterest,
    stoneType: "Dholpur Beige Sandstone",
    dimensions: "",
    location: "Maharashtra",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = "Please enter your name";
    if (!formData.phone.trim()) {
      errs.phone = "Please enter your phone number";
    } else if (!/^[0-9+() -]{7,20}$/.test(formData.phone.trim())) {
      errs.phone = "Please enter a valid phone number";
    }
    if (!formData.email.trim()) {
      errs.email = "Please enter your email address";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = "Please enter a valid email address";
    }
    if (!formData.message.trim()) {
      errs.message = "Please share details about your requirement";
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    if (!siteConfig.formEndpoint) {
      setStatus("no-endpoint");
      return;
    }

    setStatus("submitting");
    setErrorMessage("");

    try {
      const response = await fetch(siteConfig.formEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          ...formData,
          productContext: productContext?.name || "Website Quotation Request",
          submittedAt: new Date().toISOString(),
        }),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({
          name: "",
          phone: "",
          email: "",
          interest: defaultInterest,
          stoneType: "Dholpur Beige Sandstone",
          dimensions: "",
          location: "Maharashtra",
          message: "",
        });
      } else {
        const errorData = await response.json().catch(() => ({}));
        setErrorMessage(errorData.message || "Failed to submit quote request. Please use WhatsApp.");
        setStatus("error");
      }
    } catch (err) {
      setErrorMessage("Network issue. Please connect with our craftsmen directly via WhatsApp.");
      setStatus("error");
    }
  };

  const buildWhatsAppRedirect = () => {
    const text = `Hello ${siteConfig.businessName},\n*Quotation Request:*\n• Name: ${formData.name || "Client"}\n• Phone: ${formData.phone || "Not specified"}\n• Email: ${formData.email || "Not specified"}\n• Interest: ${formData.interest}\n• Stone: ${formData.stoneType}\n• Dimensions: ${formData.dimensions || "To be discussed"}\n• Location: ${formData.location}\n• Details: ${formData.message || "Please provide feasibility and quote."}`;
    return getWhatsAppUrl(text);
  };

  return (
    <div className={`bg-white p-5 sm:p-7 rounded-xl border border-[#E2D7C7] shadow-parchment-soft ${className}`}>
      {status === "success" ? (
        <div className="text-center py-6">
          <div className="w-12 h-12 mx-auto mb-3 bg-[#F4ECE1] text-[#9E6F39] rounded-full flex items-center justify-center">
            <CheckCircle2 className="w-7 h-7" />
          </div>
          <h3 className="font-serif text-lg font-normal text-[#26201B] mb-1.5">Quotation Request Received</h3>
          <p className="text-[#6E645A] text-xs max-w-sm mx-auto mb-5 leading-relaxed font-light">
            Thank you for sharing your project specifications. Our master stonemasons will review your dimensions and provide a feasibility report shortly.
          </p>
          <Button variant="secondary" size="xs" onClick={() => setStatus("idle")}>
            Submit Another Request
          </Button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate className="space-y-4">
          
          <div className="border-b border-[#EAE1D3] pb-3">
            <h3 className="font-serif text-base sm:text-lg font-normal text-[#26201B]">
              Request An Architectural Quotation
            </h3>
            <p className="text-[11px] text-[#6E645A] mt-0.5 font-light">
              Direct craftsman pricing &bull; Material feasibility &bull; Delivery timelines
            </p>
          </div>

          {status === "no-endpoint" && (
            <div className="p-3 rounded-lg bg-[#F8EFE2] border border-[#E5D2BA] text-xs text-[#26201B] space-y-2">
              <div className="flex items-start gap-2">
                <AlertCircle className="w-4 h-4 text-[#9E6F39] flex-shrink-0 mt-0.5" />
                <p className="text-[11px] leading-relaxed">
                  Online form gateway is in configuration. Please send your quotation specifications directly to our master craftsmen via <strong>WhatsApp</strong>.
                </p>
              </div>
              <div className="flex flex-wrap gap-2 pt-1">
                <Button
                  href={buildWhatsAppRedirect()}
                  variant="whatsapp"
                  size="xs"
                  icon={MessageCircle}
                >
                  Send via WhatsApp
                </Button>
                <Button
                  href={`tel:${siteConfig.phoneNumberRaw}`}
                  variant="secondary"
                  size="xs"
                  icon={Phone}
                >
                  Call {siteConfig.phoneNumber}
                </Button>
              </div>
            </div>
          )}

          {status === "error" && (
            <div className="p-3 rounded-lg bg-red-50 border border-red-200 text-xs text-red-800 flex items-start gap-2">
              <AlertCircle className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
              <p className="text-[11px]">{errorMessage}</p>
            </div>
          )}

          {/* Block 1 */}
          <div>
            <span className="text-[10px] font-medium text-[#9E6F39] uppercase tracking-wider block mb-2">
              1. Contact Information
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div>
                <label htmlFor="name" className="block text-[11px] font-medium text-[#26201B] mb-1">
                  Full Name <span className="text-[#9E6F39]">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. Rajesh Patil"
                  className={`w-full px-3 py-1.5 rounded-md bg-[#FAF7F2] border text-xs text-[#26201B] placeholder-[#91877C] focus:bg-white focus:outline-none transition-colors ${
                    errors.name ? "border-red-500" : "border-[#E2D7C7] focus:border-[#9E6F39]"
                  }`}
                />
                {errors.name && <p className="text-red-600 text-[10px] mt-0.5">{errors.name}</p>}
              </div>

              <div>
                <label htmlFor="phone" className="block text-[11px] font-medium text-[#26201B] mb-1">
                  Phone Number <span className="text-[#9E6F39]">*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+91 98000 00000"
                  className={`w-full px-3 py-1.5 rounded-md bg-[#FAF7F2] border text-xs text-[#26201B] placeholder-[#91877C] focus:bg-white focus:outline-none transition-colors ${
                    errors.phone ? "border-red-500" : "border-[#E2D7C7] focus:border-[#9E6F39]"
                  }`}
                />
                {errors.phone && <p className="text-red-600 text-[10px] mt-0.5">{errors.phone}</p>}
              </div>

              <div>
                <label htmlFor="email" className="block text-[11px] font-medium text-[#26201B] mb-1">
                  Email Address <span className="text-[#9E6F39]">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="name@domain.com"
                  className={`w-full px-3 py-1.5 rounded-md bg-[#FAF7F2] border text-xs text-[#26201B] placeholder-[#91877C] focus:bg-white focus:outline-none transition-colors ${
                    errors.email ? "border-red-500" : "border-[#E2D7C7] focus:border-[#9E6F39]"
                  }`}
                />
                {errors.email && <p className="text-red-600 text-[10px] mt-0.5">{errors.email}</p>}
              </div>
            </div>
          </div>

          {/* Block 2 */}
          <div className="pt-2 border-t border-[#EAE1D3]">
            <span className="text-[10px] font-medium text-[#9E6F39] uppercase tracking-wider block mb-2">
              2. Discipline &amp; Stone Variety
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div>
                <label htmlFor="interest" className="block text-[11px] font-medium text-[#26201B] mb-1">
                  Discipline Interest
                </label>
                <select
                  id="interest"
                  name="interest"
                  value={formData.interest}
                  onChange={handleChange}
                  className="w-full px-3 py-1.5 rounded-md bg-[#FAF7F2] border border-[#E2D7C7] text-xs text-[#26201B] focus:bg-white focus:border-[#9E6F39] focus:outline-none cursor-pointer"
                >
                  <option value="Stone Wall Decorations">Stone Wall Decorations</option>
                  <option value="Stone Idols & Sculptures">Stone Idols & Sculptures</option>
                  <option value="Architectural Stone Designs">Architectural Stone Designs</option>
                  <option value="Custom Stone Work">Custom Stone Work</option>
                  <option value="Stone Pillars">Stone Pillars</option>
                  <option value="Temple Stone Carvings">Temple Stone Carvings</option>
                  <option value="General Architectural Enquiry">General Architectural Enquiry</option>
                </select>
              </div>

              <div>
                <label htmlFor="stoneType" className="block text-[11px] font-medium text-[#26201B] mb-1">
                  Stone Variety
                </label>
                <select
                  id="stoneType"
                  name="stoneType"
                  value={formData.stoneType}
                  onChange={handleChange}
                  className="w-full px-3 py-1.5 rounded-md bg-[#FAF7F2] border border-[#E2D7C7] text-xs text-[#26201B] focus:bg-white focus:border-[#9E6F39] focus:outline-none cursor-pointer"
                >
                  <option value="Dholpur Beige Sandstone">Dholpur Beige Sandstone</option>
                  <option value="Dholpur Pink Sandstone">Dholpur Pink Sandstone</option>
                  <option value="Red Agra Sandstone">Red Agra Sandstone</option>
                  <option value="Black Basalt Stone">Black Basalt Stone (Deccan)</option>
                  <option value="Grey Granite">Grey Granite</option>
                  <option value="Artisan Recommendation">Artisan Recommendation</option>
                </select>
              </div>

              <div>
                <label htmlFor="dimensions" className="block text-[11px] font-medium text-[#26201B] mb-1">
                  Approximate Dimensions
                </label>
                <input
                  type="text"
                  id="dimensions"
                  name="dimensions"
                  value={formData.dimensions}
                  onChange={handleChange}
                  placeholder="e.g. 10 ft x 12 ft wall"
                  className="w-full px-3 py-1.5 rounded-md bg-[#FAF7F2] border border-[#E2D7C7] text-xs text-[#26201B] placeholder-[#91877C] focus:bg-white focus:border-[#9E6F39] focus:outline-none"
                />
              </div>
            </div>
          </div>

          {/* Block 3 */}
          <div className="pt-2 border-t border-[#EAE1D3]">
            <span className="text-[10px] font-medium text-[#9E6F39] uppercase tracking-wider block mb-2">
              3. Site Location &amp; Scope
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-2">
              <div className="sm:col-span-1">
                <label htmlFor="location" className="block text-[11px] font-medium text-[#26201B] mb-1">
                  Site City in Maharashtra
                </label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  placeholder="e.g. Pune, Mumbai, Alibaug"
                  className="w-full px-3 py-1.5 rounded-md bg-[#FAF7F2] border border-[#E2D7C7] text-xs text-[#26201B] focus:bg-white focus:border-[#9E6F39] focus:outline-none"
                />
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="message" className="block text-[11px] font-medium text-[#26201B] mb-1">
                  Project Details &amp; Specifications <span className="text-[#9E6F39]">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={2}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Describe your design concept, architectural style, or CAD elevations..."
                  className={`w-full px-3 py-1.5 rounded-md bg-[#FAF7F2] border text-xs text-[#26201B] placeholder-[#91877C] focus:bg-white focus:outline-none resize-y ${
                    errors.message ? "border-red-500" : "border-[#E2D7C7] focus:border-[#9E6F39]"
                  }`}
                />
                {errors.message && <p className="text-red-600 text-[10px] mt-0.5">{errors.message}</p>}
              </div>
            </div>
          </div>

          <div className="pt-2 border-t border-[#EAE1D3] flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
            <Button
              type="submit"
              variant="primary"
              size="md"
              disabled={status === "submitting"}
              icon={Send}
            >
              {status === "submitting" ? "Sending..." : "Submit Quotation Request"}
            </Button>

            <span className="text-[11px] text-[#7D7368] text-center sm:text-right font-light">
              ✓ Direct craftsman review &bull; Free feasibility evaluation
            </span>
          </div>

        </form>
      )}
    </div>
  );
}
