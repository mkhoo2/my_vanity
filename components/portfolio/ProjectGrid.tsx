import type { Project } from "@/types/portfolio";
import { ProjectCard } from "@/components/portfolio/ProjectCard";

type ProjectGridProps = {
  projects: Project[];
};

export function ProjectGrid({ projects }: ProjectGridProps) {
  if (!projects.length) {
    return (
      <div className="rounded-3xl border border-dashed border-zinc-300 bg-white p-10 text-center shadow-sm">
        <p className="text-lg font-semibold text-zinc-900">Projects coming soon</p>
        <p className="mt-2 text-base text-zinc-600">
          This portfolio will feature case studies and product work as soon as a project list is added.
        </p>  
      </div>
    );
  }

  return (
    <div className="grid gap-6 lg:grid-cols-2">
      {projects.map((project) => (
        <ProjectCard key={project.name} project={project} />
      ))}
    </div>
  );
}
