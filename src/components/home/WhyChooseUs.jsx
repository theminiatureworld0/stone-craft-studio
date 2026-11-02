import { Hammer, Sparkles, Gem, MessageSquare } from "lucide-react";
import SectionHeading from "@/components/common/SectionHeading";

const highlights = [
  {
    icon: Hammer,
    title: "100% Hand-Chiselled Stone",
    description: "Sculpted with authentic chisel and claw techniques, creating organic relief depth and tactile character that machine molds cannot duplicate.",
  },
  {
    icon: Sparkles,
    title: "Custom Design Possibilities",
    description: "Every dimension, motif, and proportion is tailored to fit your specific structural openings, elevation heights, and CAD drawings.",
  },
  {
    icon: Gem,
    title: "Natural Quarried Stone",
    description: "Carefully sourced natural Indian sandstones, granites, and basalts, treated with tailored honed, chiselled, or weather-repellent finishes.",
  },
  {
    icon: MessageSquare,
    title: "Direct Artisan Consultation",
    description: "Consult directly with experienced stonemasons who understand structural civil tolerances, dry-fixing bracket anchors, and stone behavior.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-12 sm:py-16 bg-[#F4ECE1]/60 border-b border-[#E2D7C7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <SectionHeading
          eyebrow="The Atelier Difference"
          title="Why Choose Our Workshop"
          description="We combine ancient Indian stone carving techniques with contemporary architectural discipline to deliver stonework that endures for generations."
          align="center"
        />

        {/* 4 Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mt-8">
          {highlights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white p-5 rounded-xl border border-[#E2D7C7] shadow-parchment-soft hover:shadow-parchment-card hover:border-[#9E6F39]/50 transition-all duration-300 flex flex-col justify-start"
              >
                <div className="w-9 h-9 mb-3.5 rounded-lg bg-[#F4ECE1] border border-[#E2D7C7] flex items-center justify-center text-[#9E6F39]">
                  <Icon className="w-4 h-4 stroke-[1.75]" />
                </div>

                <h3 className="font-serif text-sm sm:text-base font-normal text-[#26201B] mb-1.5">
                  {item.title}
                </h3>

                <p className="text-xs text-[#6E645A] leading-relaxed font-light">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
