import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

import {
  ArrowLeft,
  ArrowUpRight,
  Layers3,
  Target,
  Zap,
} from "lucide-react";

import { projects } from "@/data/projects";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ProjectDetail({
  params,
}: Props) {
  const { slug } = await params;

  const project = projects.find(
    (p) => p.slug === slug
  );

  if (!project) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-6xl px-6 py-24">
      {/* Back Button */}
      <Link
        href="/"
        className="mb-10 inline-flex items-center gap-2 text-muted-foreground transition hover:text-primary"
      >
        <ArrowLeft size={18} />
        Back to Portfolio
      </Link>

      {/* Hero Image */}
      <div className="overflow-hidden rounded-3xl border shadow-xl">
        <div className="relative h-[520px]">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
            priority
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
        </div>
      </div>

      {/* Header */}
      <div className="mt-12">
        <p className="font-medium text-primary">
          {project.category}
        </p>

        <div className="mt-4 inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm text-primary">
          Featured Project
        </div>

        <h1 className="mt-6 text-5xl font-bold tracking-tight lg:text-6xl">
          {project.title}
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-muted-foreground">
          {project.description}
        </p>

<div className="mt-8 flex flex-wrap gap-4">
  {project.demoUrl && (
    <a
      href={project.demoUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 text-primary-foreground transition hover:opacity-90"
    >
      Live Demo

      <ExternalLink size={18} />
    </a>
  )}

  <Link
    href="/#projects"
    className="inline-flex items-center gap-2 rounded-xl border px-5 py-3 transition hover:bg-muted"
  >
    Back to Projects
  </Link>
</div>

        {/* Stats */}
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border bg-background/50 p-5 backdrop-blur-sm">
            <h3 className="text-3xl font-bold">
              100%
            </h3>

            <p className="text-sm text-muted-foreground">
              Responsive Design
            </p>
          </div>

          <div className="rounded-2xl border bg-background/50 p-5 backdrop-blur-sm">
            <h3 className="text-3xl font-bold">
              SEO
            </h3>

            <p className="text-sm text-muted-foreground">
              Optimized
            </p>
          </div>

          <div className="rounded-2xl border bg-background/50 p-5 backdrop-blur-sm">
            <h3 className="text-3xl font-bold">
              A+
            </h3>

            <p className="text-sm text-muted-foreground">
              Performance Focused
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="mt-16 grid gap-10 lg:grid-cols-3">
        {/* Main */}
        <div className="space-y-12 lg:col-span-2">
          {/* Overview */}
          <section>
            <div className="mb-4 flex items-center gap-3">
              <Layers3 size={22} />
              <h2 className="text-2xl font-bold">
                Overview
              </h2>
            </div>

            <p className="leading-8 text-muted-foreground">
              {project.overview}
            </p>
          </section>

          {/* Project Goals */}
          <section>
            <div className="mb-4 flex items-center gap-3">
              <Target size={22} />
              <h2 className="text-2xl font-bold">
                Project Goals
              </h2>
            </div>

            <p className="leading-8 text-muted-foreground">
              Deliver a reliable and scalable solution
              that improves operational efficiency,
              user experience, and business value while
              maintaining modern development standards.
            </p>
          </section>

          {/* Challenges */}
          <section>
            <div className="mb-4 flex items-center gap-3">
              <Zap size={22} />
              <h2 className="text-2xl font-bold">
                Challenges
              </h2>
            </div>

            <ul className="space-y-3">
              {project.challenges.map((item) => (
                <li
                  key={item}
                  className="rounded-xl border p-4"
                >
                  {item}
                </li>
              ))}
            </ul>
          </section>

          {/* Impact */}
          <section>
            <h2 className="text-2xl font-bold">
              Impact
            </h2>

            <ul className="mt-6 space-y-3">
              {project.impact.map((item) => (
                <li
                  key={item}
                  className="rounded-xl border border-primary/20 bg-primary/5 p-4"
                >
                  {item}
                </li>
              ))}
            </ul>
          </section>
        </div>

        {/* Sidebar */}
        <div>
          <div className="sticky top-24 rounded-3xl border bg-background/60 p-6 backdrop-blur-xl">
            <h3 className="text-lg font-semibold">
              Technologies
            </h3>

            <div className="mt-5 flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border px-3 py-2 text-sm transition-all duration-300 hover:border-primary hover:bg-primary/10"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="mt-8 border-t pt-8">
              <p className="text-sm text-muted-foreground">
                Project Category
              </p>

              <p className="mt-2 font-medium">
                {project.category}
              </p>
            </div>

            <div className="mt-8">
              <Link
                href="/#projects"
                className="inline-flex items-center gap-2 text-primary"
              >
                More Projects

                <ArrowUpRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}