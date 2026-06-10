import Image from "next/image";
import Link from "next/link";
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

        <p className="mt-4 max-w-2xl text-muted-foreground">
          A selection of enterprise systems,
          monitoring platforms, web applications,
          and digital solutions that support
          operational excellence and business
          growth.
        </p>
      </div>

      <div className="space-y-8">
        {projects.map((project, index) => (
          <FadeIn
            key={project.slug}
            delay={index * 0.15}
          >
            <Link
              href={`/projects/${project.slug}`}
              className="group block overflow-hidden rounded-3xl border bg-background/50 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:border-primary/40 hover:shadow-2xl"
            >
              <div className="grid lg:grid-cols-2">
                {/* Image */}
                <div className="relative h-[320px] overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />

                  {/* Featured Badge */}
                  <div className="absolute left-5 top-5 rounded-full border border-white/20 bg-black/40 px-3 py-1 text-xs text-white backdrop-blur-md">
                    Featured Project
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-col justify-center p-8 lg:p-10">
                  <p className="text-sm font-medium text-primary">
                    {project.category}
                  </p>

                  {/* Meta */}
                  <div className="mt-3 flex items-center gap-3">
                    {"year" in project && (
                      <span className="rounded-full border px-3 py-1 text-xs">
                        {project.year}
                      </span>
                    )}

                    <span className="rounded-full bg-primary/10 px-3 py-1 text-xs text-primary">
                      Enterprise Project
                    </span>
                  </div>

                  <h3 className="mt-4 text-3xl font-bold transition-colors duration-300 group-hover:text-primary">
                    {project.title}
                  </h3>

                  <p className="mt-6 leading-7 text-muted-foreground">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border px-3 py-1 text-sm transition-all duration-300 hover:border-primary hover:bg-primary/5"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <div className="mt-8 flex items-center gap-2 font-medium text-primary">
                    View Case Study

                    <ArrowUpRight
                      size={18}
                      className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                    />
                  </div>
                </div>
              </div>
            </Link>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}