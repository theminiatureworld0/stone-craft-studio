import Image from "next/image";
import Link from "next/link";
import { MapPin, ArrowRight } from "lucide-react";
import SectionHeading from "@/components/common/SectionHeading";
import Button from "@/components/common/Button";
import { getFeaturedProjects } from "@/lib/projects";

export default function SelectedProjects() {
  const projects = getFeaturedProjects();

  return (
    <section className="py-12 sm:py-16 bg-[#FAF7F2] border-b border-[#E2D7C7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-10 gap-4">
          <SectionHeading
            eyebrow="Architectural Installations"
            title="Completed Projects"
            description="Witness our handcrafted stone installations across premier residences, sacred shrines, and private estates in Maharashtra."
            align="left"
            className="mb-0"
          />

          <div className="hidden md:block flex-shrink-0">
            <Button href="/projects" variant="secondary" size="md" icon={ArrowRight}>
              View All Projects Portfolio
            </Button>
          </div>
        </div>

        {/* 2x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
          {projects.map((proj) => (
            <article
              key={proj.id}
              className="group flex flex-col bg-white rounded-xl border border-[#E2D7C7] overflow-hidden shadow-parchment-soft hover:shadow-parchment-card hover:border-[#9E6F39]/50 transition-all duration-300"
            >
              {/* Project Image */}
              <Link
                href="/projects"
                className="relative aspect-[16/10] w-full overflow-hidden bg-[#FAF7F2] block"
                tabIndex={-1}
                aria-hidden="true"
              >
                <Image
                  src={proj.images[0]}
                  alt={proj.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                {proj.location && (
                  <span className="absolute bottom-3 left-3 inline-flex items-center gap-1 px-2.5 py-1 rounded bg-[#FAF7F2]/95 text-[#26201B] text-[11px] font-medium shadow-2xs">
                    <MapPin className="w-3 h-3 text-[#9E6F39]" />
                    {proj.location}
                  </span>
                )}
              </Link>

              {/* Project Details */}
              <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-3">
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-[#9E6F39] font-medium block mb-1">
                    {proj.category}
                  </span>

                  <h3 className="font-serif text-base sm:text-lg font-normal text-[#26201B] group-hover:text-[#9E6F39] transition-colors leading-snug">
                    <Link href="/projects">
                      {proj.title}
                    </Link>
                  </h3>

                  <p className="mt-1.5 text-xs text-[#6E645A] line-clamp-2 leading-relaxed font-light">
                    {proj.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#EAE1D3] flex items-center justify-between text-xs">
                  <Link
                    href="/projects"
                    className="inline-flex items-center text-[11px] uppercase tracking-wider font-medium text-[#26201B] group-hover:text-[#9E6F39] transition-colors gap-1"
                  >
                    <span>View Case Study</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>

                  {proj.year && (
                    <span className="text-[10px] text-[#7D7368] font-mono bg-[#F4ECE1] px-1.5 py-0.5 rounded">
                      {proj.year}
                    </span>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Mobile View All CTA */}
        <div className="mt-8 text-center md:hidden">
          <Button href="/projects" variant="secondary" size="md" className="w-full sm:w-auto" icon={ArrowRight}>
            View All Projects Portfolio
          </Button>
        </div>

      </div>
    </section>
  );
}
