"use client";

import { useState } from "react";
import Link from "next/link";
import { PROJECTS_DATA } from "../../components/features/landing-pages/projects/constant";
import { SortFilter, ProjectGrid, SortOption, FilterOption } from "../../components/features/projects";
import Spotlight from "../../components/shared/spotlight";
import FloatingToggles from "../../components/shared/floating-toggles";
import { useAppStore } from "../../store/useAppStore";

export default function ProjectsShowcase() {
  const [filter, setFilter] = useState<FilterOption>("all");
  const [sort, setSort] = useState<SortOption>("date-desc");
  const { language, isBlackTheme } = useAppStore();

  // Filtering
  const filteredProjects = PROJECTS_DATA.filter((project) => {
    if (filter === "all") return true;
    return project.type === filter;
  });

  // Sorting
  const sortedProjects = [...filteredProjects].sort((a, b) => {
    if (sort === "date-desc") {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    }
    if (sort === "date-asc") {
      return new Date(a.date).getTime() - new Date(b.date).getTime();
    }
    if (sort === "alpha-asc") {
      return a.title.localeCompare(b.title);
    }
    if (sort === "alpha-desc") {
      return b.title.localeCompare(a.title);
    }
    return 0;
  });

  return (
    <div className={`${isBlackTheme ? 'bg-black' : 'bg-deep-blue'} text-glacial-salt selection:bg-ocean-city selection:text-deep-blue relative min-h-screen overflow-x-hidden transition-colors duration-500`}>
      <FloatingToggles />
      <Spotlight />
      <div className="mx-auto min-h-screen max-w-screen-2xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-24">
        <Link
          href="/"
          className="group inline-flex items-center font-medium leading-tight text-ocean-city hover:text-concerto transition-colors mb-8"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="mr-1 h-4 w-4 shrink-0 transition-transform group-hover:-translate-x-1" aria-hidden="true"><path fillRule="evenodd" d="M14.78 14.78a.75.75 0 01-1.06 0L6.5 7.56v5.69a.75.75 0 01-1.5 0v-7.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5H7.56l7.22 7.22a.75.75 0 010 1.06z" clipRule="evenodd"></path></svg>
          {language === 'en' ? "Back to Home" : "Kembali ke Beranda"}
        </Link>

        <h1 className="text-4xl font-bold tracking-tight text-concerto sm:text-5xl mb-12">
          {language === 'en' ? "Project Showcase" : "Semua Projek"}
        </h1>

        <SortFilter filter={filter} setFilter={setFilter} sort={sort} setSort={setSort} />
        <ProjectGrid projects={sortedProjects} />
      </div>
    </div>
  );
}
