import Breadcrumb from "@/components/common/Breadcrumb";
import { siteConfig } from "@/config/siteConfig";
import { constructMetadata } from "@/lib/seo";

export const metadata = constructMetadata({
  title: "Privacy Policy | Stone Craft Studio",
  description: "Privacy policy regarding client enquiry data, consultations, and architectural project communications.",
  canonicalUrl: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  return (
    <div className="pt-6 pb-16 bg-[#FAF7F2]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <Breadcrumb items={[{ name: "Privacy Policy", item: "/privacy-policy" }]} />

        <div className="py-6 sm:py-8">
          <span className="text-[11px] font-medium text-[#9E6F39] block mb-1">
            Legal &amp; Data Protection
          </span>
          <h1 className="font-serif text-2xl sm:text-3xl text-[#26201B] font-normal">
            Privacy Policy
          </h1>
          <p className="mt-1.5 text-xs text-[#6E645A] font-light">
            Last updated: November 2024
          </p>
        </div>

        <div className="bg-white p-6 sm:p-8 rounded-xl border border-[#E2D7C7] shadow-parchment-soft space-y-6 text-xs sm:text-sm text-[#6E645A] font-light leading-relaxed">
          <section className="space-y-2">
            <h2 className="font-serif text-base sm:text-lg text-[#26201B] font-normal">
              1. Information We Collect
            </h2>
            <p>
              {siteConfig.businessName} collects personal details provided voluntarily when you submit an enquiry form, telephone our studio, or contact us via WhatsApp. This information typically includes your name, contact phone number, email address, project location, and design specifications.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-serif text-base sm:text-lg text-[#26201B] font-normal">
              2. How We Use Your Information
            </h2>
            <p>
              Your project details and contact data are utilized solely for responding directly to architectural queries, providing technical guidance, and coordinating fabrication and logistics.
            </p>
            <p className="text-[#26201B] font-medium pt-1">
              We never sell or distribute your private client information or project blueprints to third-party marketing companies.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-serif text-base sm:text-lg text-[#26201B] font-normal">
              3. WhatsApp Communications
            </h2>
            <p>
              When initiating contact via WhatsApp, communications are subject to WhatsApp’s standard end-to-end encryption protocols and their respective privacy policies.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-serif text-base sm:text-lg text-[#26201B] font-normal">
              4. Contact for Privacy Inquiries
            </h2>
            <p>
              For any questions regarding your data or to request removal of your contact details from our records, please reach out directly to {siteConfig.email}.
            </p>
          </section>
        </div>

      </div>
    </div>
  );
}
