import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

import FadeIn from "@/components/ui/FadeIn";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section
      id="projects"
      className="border-t py-24"
    >
      <div className="mb-12">
        <p className="mb-3 text-sm font-medium text-primary">
          Projects
        </p>

        <h2 className="text-4xl font-bold tracking-tight">
          Featured Projects
        </h2>
      </div>

      <div className="space-y-8">
        {projects.map((project, index) => (
          <FadeIn
            key={project.title}
            delay={index * 0.15}
          >
            <div className="group overflow-hidden rounded-3xl border bg-background/50 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:border-primary/40 hover:shadow-2xl">
              <div className="grid lg:grid-cols-2">
                {/* Image */}
                <div className="relative h-[320px] overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
                </div>

                {/* Content */}
                <div className="flex flex-col justify-center p-8 lg:p-10">
                  <p className="text-sm font-medium text-primary">
                    {project.category}
                  </p>

                  <h3 className="mt-3 text-3xl font-bold">
                    {project.title}
                  </h3>

                  <p className="mt-6 leading-7 text-muted-foreground">
                    {project.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border px-3 py-1 text-sm transition-colors duration-300 hover:bg-muted"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="mt-8 flex items-center gap-2 font-medium text-primary">
                    View Details

                    <ArrowUpRight
                      size={18}
                      className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                    />
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}