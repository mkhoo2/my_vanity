import Image from "next/image";

import { Button } from "@/components/ui/Button";
import type { Project } from "@/types/portfolio";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-sm transition-shadow hover:shadow-md">
      <div className="relative flex h-52 items-center justify-center border-b border-zinc-200 bg-gradient-to-br from-blue-50 via-white to-zinc-100">
        {project.imageUrl ? (
          <Image
            src={project.imageUrl}
            alt={project.imageLabel ?? `${project.name} project image`}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            loading="eager"
            className="object-cover"
          />
        ) : (
          <div className="flex h-24 w-24 items-center justify-center rounded-2xl border border-zinc-200 bg-white text-sm font-semibold uppercase tracking-[0.2em] text-zinc-700 shadow-inner">
            {project.imageLabel ? project.imageLabel.slice(0, 2) : "PR"}
          </div>
        )}
      </div>

      <div className="space-y-5 p-6">
        <div className="flex items-center justify-between gap-3">
          <h3 className="text-xl font-semibold text-zinc-900">{project.name}</h3>
          {project.category ? (
            <span className="rounded-full border border-blue-200 bg-blue-50 px-2.5 py-1 text-xs font-medium uppercase tracking-[0.12em] text-blue-700">
              {project.category}
            </span>
          ) : null}
        </div>

        <p className="text-base leading-7 text-zinc-700">{project.description}</p>
        <p className="text-sm leading-6 text-zinc-600">{project.purpose}</p>

        <div>
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.12em] text-zinc-500">Key features</p>
          <ul className="space-y-2 text-sm leading-6 text-zinc-700">
            {project.features.map((feature) => (
              <li key={feature}>• {feature}</li>
            ))}
          </ul>
        </div>

        <div>
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.12em] text-zinc-500">Technologies</p>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((technology) => (
              <span
                key={technology}
                className="rounded-full border border-zinc-200 bg-zinc-50 px-2.5 py-1 text-xs font-medium text-zinc-700"
              >
                {technology}
              </span>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap gap-3 pt-2">
          {project.sourceUrl ? (
            <Button href={project.sourceUrl} variant="secondary" external>
              Source code
            </Button>
          ) : null}
          {project.demoUrl ? (
            <Button href={project.demoUrl} variant="secondary" external>
              Try it Out!
            </Button>
          ) : null}
          {project.detailUrl ? (
            <Button href={project.detailUrl} variant="ghost">
              Case study
            </Button>
          ) : null}
        </div>
      </div>
    </article>
  );
}
