import Hero from "@/components/home/Hero";
import Introduction from "@/components/home/Introduction";
import Collections from "@/components/home/Collections";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import Craftsmanship from "@/components/home/Craftsmanship";
import CustomCreations from "@/components/home/CustomCreations";
import SelectedProjects from "@/components/home/SelectedProjects";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import AboutPreview from "@/components/home/AboutPreview";
import FaqSection from "@/components/home/FaqSection";
import ContactSection from "@/components/home/ContactSection";
import { constructMetadata } from "@/lib/seo";

export const metadata = constructMetadata({
  title: "Handcrafted Stone Carvings & Architectural Masonry in Maharashtra",
  description: "Premier architectural stone carving atelier in Maharashtra, India. Specialising in handcrafted stone wall decorations, sacred idols, columns, temple mandapas, and bespoke stone creations.",
  canonicalUrl: "/",
});

export default function HomePage() {
  return (
    <>
      {/* Section 1: Hero */}
      <Hero />

      {/* Section 2: Brand Introduction */}
      <Introduction />

      {/* Section 3: Collections */}
      <Collections />

      {/* Section 4: Featured Products */}
      <FeaturedProducts />

      {/* Section 5: Craftsmanship */}
      <Craftsmanship />

      {/* Section 6: Custom Creations */}
      <CustomCreations />

      {/* Section 7: Selected Projects */}
      <SelectedProjects />

      {/* Section 8: Why Choose Us */}
      <WhyChooseUs />

      {/* Section 9: About Us Preview */}
      <AboutPreview />

      {/* FAQ Section */}
      <FaqSection />

      {/* Section 10: Contact / Enquiry */}
      <ContactSection />
    </>
  );
}
