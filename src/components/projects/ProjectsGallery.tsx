"use client";

import { useState } from "react";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { Icon } from "@/components/ui/Icon";

export type ProjectFilter = "all" | "full-stack" | "frontend" | "dashboard";

export interface PortfolioProject {
  id: string;
  filterCategory: Exclude<ProjectFilter, "all">;
  title: string;
  category: string;
  description: string;
  image: string;
  imageAlt: string;
  technologies: string[];
  windowTitle: string;
  statusText: string;
  iconName: string;
  liveUrl?: string;
  codeUrl?: string;
}

const FILTERS: Array<{ value: ProjectFilter; label: string }> = [
  { value: "all", label: "All" },
  { value: "full-stack", label: "Full-Stack" },
  { value: "frontend", label: "Frontend" },
  { value: "dashboard", label: "Dashboard" },
];

export function ProjectsGallery({ projects }: { projects: PortfolioProject[] }) {
  const [activeFilter, setActiveFilter] = useState<ProjectFilter>("all");
  const visibleProjects = projects.filter(
    (project) => activeFilter === "all" || project.filterCategory === activeFilter,
  );

  return (
    <section aria-labelledby="project-filter-heading">
      <h2 id="project-filter-heading" className="sr-only">Filter portfolio concepts</h2>
      <div className="w-full flex flex-col sm:flex-row sm:items-center sm:justify-between gap-space-md mb-margin-md">
        <div className="relative min-w-0 w-full sm:w-auto">
          <span className="sm:hidden block mb-1.5 font-label-sm text-label-sm text-outline text-right" aria-hidden="true">
            Swipe to view filters →
          </span>
          <div className="flex w-full max-w-full overflow-x-auto overscroll-x-contain p-1.5 pr-8 sm:pr-1.5 rounded-xl bg-surface-container-low/90 backdrop-blur-md shadow-md gap-1" role="group" aria-label="Filter projects by category">
          {FILTERS.map((filter) => {
            const isActive = activeFilter === filter.value;
            const count =
              filter.value === "all"
                ? projects.length
                : projects.filter((project) => project.filterCategory === filter.value).length;
            return (
              <button
                key={filter.value}
                type="button"
                aria-pressed={isActive}
                onClick={() => setActiveFilter(filter.value)}
                className={`shrink-0 px-3 sm:px-space-md py-1.5 rounded-lg font-badge-label text-badge-label transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-surface ${
                  isActive
                    ? "bg-primary-container text-on-primary-container shadow-[0_0_12px_rgba(34,211,238,0.4)]"
                    : "text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high"
                }`}
              >
                {filter.label} ({count})
              </button>
            );
          })}
          </div>
          <div className="sm:hidden pointer-events-none absolute bottom-0 right-0 h-[44px] w-9 rounded-r-xl bg-gradient-to-l from-surface-container-low via-surface-container-low/80 to-transparent" aria-hidden="true" />
        </div>
        <div className="flex items-center gap-space-sm font-label-sm text-label-sm text-outline">
          <Icon name="terminal" size={16} className="text-primary" />
          <span>SHOWCASE: FICTIONAL CONCEPTS</span>
        </div>
      </div>

      <p className="sr-only" aria-live="polite">
        Showing {visibleProjects.length} {visibleProjects.length === 1 ? "project" : "projects"}.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-gutter-lg">
        {visibleProjects.map((project) => (
          <ProjectCard
            key={project.id}
            id={project.id}
            title={project.title}
            category={project.category}
            description={project.description}
            image={project.image}
            imageAlt={project.imageAlt}
            technologies={project.technologies}
            windowTitle={project.windowTitle}
            statusText={project.statusText}
            iconName={project.iconName}
            liveUrl={project.liveUrl}
            codeUrl={project.codeUrl}
          />
        ))}
      </div>
    </section>
  );
}
