import Image from "next/image";
import SectionHeading from "@/components/common/SectionHeading";

const steps = [
  {
    step: "01",
    title: "Quarry Selection",
    description: "Every commission begins at vetted natural quarries, selecting raw sandstone, basalt, and granite blocks for dense grain structure and weather resistance.",
    image: "/images/about/material-selection.webp",
  },
  {
    step: "02",
    title: "Architectural Detailing",
    description: "Translating site drawings, elevation schematics, and traditional Shilpa Shastra proportions into full-scale stone cutting templates.",
    image: "/images/about/about-hero.webp",
  },
  {
    step: "03",
    title: "Hand Chiselling",
    description: "Master stonemasons employ traditional chisels and fine finishing tools to release multi-layered relief depths, ornate foliage, and contours.",
    image: "/images/about/craftsmanship-process.webp",
  },
  {
    step: "04",
    title: "Dry-Fit Alignment",
    description: "Every piece undergoes pre-dispatch dry-fit assembly to verify seamless joint registration, followed by protective natural stone sealers.",
    image: "/images/about/finishing.webp",
  },
];

export default function Craftsmanship() {
  return (
    <section className="py-12 sm:py-16 bg-[#26201B] text-[#FAF7F2] relative overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <SectionHeading
          eyebrow="The Atelier Process"
          title="From Raw Monolith to Timeless Architecture"
          description="A disciplined, step-by-step commitment to traditional stonecraft methods, ensuring every carving preserves architectural precision and organic beauty."
          align="center"
          dark={true}
        />

        {/* 4 Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 mt-8">
          {steps.map((item) => (
            <div
              key={item.step}
              className="flex flex-col bg-[#342D26] border border-[#483F36] rounded-xl overflow-hidden group hover:border-[#9E6F39] transition-colors duration-300"
            >
              {/* Image */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-black/40">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#26201B] via-transparent to-transparent opacity-80" />
                
                {/* Step badge */}
                <span className="absolute top-2.5 left-2.5 text-[10px] font-mono font-medium text-white bg-[#9E6F39] px-2 py-0.5 rounded shadow-2xs">
                  Step {item.step}
                </span>
              </div>

              {/* Text */}
              <div className="p-4 sm:p-5 flex-1 flex flex-col justify-start">
                <h3 className="font-serif text-sm sm:text-base text-white font-normal mb-1.5">
                  {item.title}
                </h3>
                <p className="text-xs text-[#D8CFBF] font-light leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
