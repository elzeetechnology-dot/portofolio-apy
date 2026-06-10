import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

import { ArrowLeft } from "lucide-react";

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
      <Link
        href="/"
        className="mb-10 inline-flex items-center gap-2 text-muted-foreground hover:text-primary"
      >
        <ArrowLeft size={18} />
        Back to Portfolio
      </Link>

      <div className="overflow-hidden rounded-3xl border">
        <div className="relative h-[500px]">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
          />
        </div>
      </div>

      <div className="mt-12">
        <p className="text-primary font-medium">
          {project.category}
        </p>

        <h1 className="mt-4 text-5xl font-bold">
          {project.title}
        </h1>

        <p className="mt-6 max-w-3xl text-lg text-muted-foreground">
          {project.description}
        </p>
      </div>

      <div className="mt-16 grid gap-10 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <h2 className="text-2xl font-bold">
            Overview
          </h2>

          <p className="mt-4 leading-8 text-muted-foreground">
            {project.overview}
          </p>

          <h2 className="mt-12 text-2xl font-bold">
            Challenges
          </h2>

          <ul className="mt-4 space-y-3">
            {project.challenges.map((item) => (
              <li key={item}>
                • {item}
              </li>
            ))}
          </ul>

          <h2 className="mt-12 text-2xl font-bold">
            Impact
          </h2>

          <ul className="mt-4 space-y-3">
            {project.impact.map((item) => (
              <li key={item}>
                • {item}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="rounded-3xl border p-6">
            <h3 className="font-semibold">
              Technologies
            </h3>

            <div className="mt-4 flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border px-3 py-1 text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}