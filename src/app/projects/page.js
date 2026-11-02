import Image from "next/image";
import Link from "next/link";
import { MapPin, CheckCircle2, MessageCircle, ArrowRight } from "lucide-react";
import Breadcrumb from "@/components/common/Breadcrumb";
import Button from "@/components/common/Button";
import { getAllProjects } from "@/lib/projects";
import { constructMetadata } from "@/lib/seo";
import { getProjectWhatsAppUrl } from "@/lib/whatsapp";

export const metadata = constructMetadata({
  title: "Completed Projects & Architectural Stone Portfolio",
  description: "Explore our portfolio of completed stone craftsmanship projects across Maharashtra: luxury private estates in Alibaug, heritage temple restorations in Pune, and custom water features.",
  canonicalUrl: "/projects",
});

export default function ProjectsPage() {
  const projectsList = getAllProjects();

  return (
    <div className="pt-8 pb-20 bg-[#f8fbff]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <Breadcrumb items={[{ name: "Projects", item: "/projects" }]} />

        {/* Page Heading */}
        <div className="py-8 sm:py-12 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#f7dfc8] bg-[#fff3e4] px-3.5 py-1.5 text-xs font-semibold text-[#9a592e] mb-3">
            <span className="text-[#ff9200]">✦</span>
            <span>Portfolio of Commissions</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-[#063e79] tracking-tight">
            Selected Architectural Projects
          </h1>
          <p className="mt-3.5 text-sm sm:text-base text-[#526c83] leading-relaxed">
            A visual record of our stone carving, structural installations, and architectural embellishments delivered across residential and devotional sites in Maharashtra.
          </p>
        </div>

        {/* Projects Showcase */}
        <div className="space-y-12 sm:space-y-16 mt-6">
          {projectsList.map((project, index) => {
            const isReversed = index % 2 !== 0;
            const projectWhatsApp = getProjectWhatsAppUrl(project.title);

            return (
              <article
                key={project.id}
                className="bg-white rounded-2xl border border-[#e8ebf0] overflow-hidden p-6 sm:p-8 lg:p-10 shadow-sm hover:shadow-card-hover hover:border-[#ff9200]/40 transition-all duration-300"
              >
                <div
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center ${
                    isReversed ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  
                  {/* Imagery (Spans 7 cols on lg) */}
                  <div className={`lg:col-span-7 space-y-4 ${isReversed ? "lg:order-2" : "lg:order-1"}`}>
                    <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden bg-[#063e79]/5 shadow-sm group">
                      <Image
                        src={project.images[0]}
                        alt={project.title}
                        fill
                        sizes="(max-width: 1024px) 100vw, 60vw"
                        className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                      />
                    </div>

                    {project.images[1] && (
                      <div className="relative aspect-[21/9] w-full rounded-xl overflow-hidden bg-[#063e79]/5">
                        <Image
                          src={project.images[1]}
                          alt={`${project.title} Detail`}
                          fill
                          sizes="(max-width: 1024px) 100vw, 60vw"
                          className="object-cover object-center"
                        />
                      </div>
                    )}
                  </div>

                  {/* Project Info & Case Narrative (Spans 5 cols on lg) */}
                  <div className={`lg:col-span-5 space-y-5 ${isReversed ? "lg:order-1" : "lg:order-2"}`}>
                    <div>
                      <div className="flex flex-wrap items-center gap-2 text-xs mb-2">
                        <span className="font-bold text-[#ff9200]">
                          {project.category}
                        </span>
                        {project.year && (
                          <>
                            <span className="text-[#e8ebf0]">&bull;</span>
                            <span className="text-[#667085] font-semibold bg-[#f8fbff] px-2 py-0.5 rounded">{project.year}</span>
                          </>
                        )}
                      </div>

                      <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#063e79] leading-snug">
                        {project.title}
                      </h2>

                      {project.location && (
                        <p className="mt-2 text-xs text-[#526c83] flex items-center gap-1.5 font-medium">
                          <MapPin className="w-4 h-4 text-[#ff9200]" />
                          <span>{project.location}</span>
                          {project.clientType && (
                            <>
                              <span className="text-[#e8ebf0]">&bull;</span>
                              <span>{project.clientType}</span>
                            </>
                          )}
                        </p>
                      )}
                    </div>

                    <p className="text-sm text-[#526c83] leading-relaxed">
                      {project.description}
                    </p>

                    {project.scope && (
                      <div className="p-4 rounded-xl bg-[#f8fbff] border border-[#e8ebf0] space-y-2">
                        <h4 className="text-xs font-bold text-[#063e79]">
                          Execution Scope:
                        </h4>
                        <ul className="space-y-1.5 text-xs text-[#526c83]">
                          {project.scope.map((item, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <CheckCircle2 className="w-3.5 h-3.5 text-[#ff9200] flex-shrink-0 mt-0.5" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    <div className="pt-2 flex flex-wrap items-center gap-3">
                      <Button
                        href={projectWhatsApp}
                        variant="whatsapp"
                        size="sm"
                        icon={MessageCircle}
                      >
                        Enquire Similar Project
                      </Button>

                      <Button
                        href={`/contact?interest=${encodeURIComponent(`Project: ${project.title}`)}`}
                        variant="primary"
                        size="sm"
                      >
                        Consult Atelier
                      </Button>
                    </div>

                  </div>

                </div>
              </article>
            );
          })}
        </div>

        {/* Bottom Callout */}
        <div className="mt-20 p-8 sm:p-12 rounded-2xl bg-[#0b2647] text-white text-center shadow-xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-1.5 text-xs font-semibold text-[#ff9200] mb-3">
            <span>✦</span>
            <span>Commission A New Project</span>
          </div>
          <h3 className="font-serif text-3xl sm:text-4xl font-bold text-white max-w-xl mx-auto">
            Have An Architectural Project in Mind?
          </h3>
          <p className="mt-3.5 text-sm text-white/80 max-w-lg mx-auto leading-relaxed">
            We collaborate with architectural practices, interior consultants, and heritage trusts. Connect with our atelier to discuss design feasibility and stone samples.
          </p>
          <div className="mt-7 flex justify-center gap-4">
            <Button href="/contact" variant="primary" size="md">
              Start Project Discussion
            </Button>
          </div>
        </div>

      </div>
    </div>
  );
}
