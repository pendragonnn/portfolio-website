"use client";

import { Project } from "../../landing-pages/projects/constant";
import ProjectCard from "../../../shared/project/ProjectCard";

interface ProjectGridProps {
  projects: Project[];
}

export default function ProjectGrid({ projects }: ProjectGridProps) {
  return (
    <div className="relative mb-12">
      {/* Bottom border for the grid */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[300vw] h-[2px] bg-white pointer-events-none" />
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {projects.map((project, idx) => (
          <div key={idx} className="relative">
            {/* Top border for each row */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300vw] h-[2px] bg-white pointer-events-none z-10" />
            <ProjectCard project={project} variant="vertical" />
          </div>
        ))}
      </div>

      {projects.length === 0 && (
        <div className="text-center py-20 text-glacial-salt relative z-10">
          No projects found.
        </div>
      )}
    </div>
  );
}
