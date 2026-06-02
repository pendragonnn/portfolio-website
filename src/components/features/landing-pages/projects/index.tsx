"use client";

import Link from "next/link";
import { PROJECTS_DATA, PROJECTS_CTA } from "./constant";
import ProjectCard from "../../../shared/project/ProjectCard";
import { useAppStore } from "../../../../store/useAppStore";

export default function Projects() {
  const { language, isBlackTheme } = useAppStore();

  return (
    <section
      id="projects"
      className="scroll-mt-16 lg:scroll-mt-24"
      aria-label={language === 'en' ? "Selected projects" : "Projek pilihan"}
    >
      <div className={`sticky top-0 z-20 -mx-6 mb-4 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0 ${isBlackTheme ? 'bg-black/75' : 'bg-deep-blue/75'} transition-colors duration-500`}>
        <h2 className="text-sm font-bold uppercase tracking-widest text-concerto lg:sr-only">
          {language === 'en' ? "Projects" : "Projek"}
        </h2>
      </div>
      <div>
        <ul className="group/list">
          {PROJECTS_DATA.slice(0, 2).map((project, idx) => (
            <li key={idx} className="mb-12">
              <ProjectCard project={project} />
            </li>
          ))}
        </ul>

        <div className="mt-12">
          <Link
            className="inline-flex items-center font-medium leading-tight text-concerto group/link text-base hover:text-ocean-city transition-colors"
            href="/projects"
            aria-label={language === 'en' ? "View Full Project Showcase" : "Lihat Semua Projek"}
          >
            <span>
              <span className="border-b border-transparent pb-px transition group-hover/link:border-ocean-city motion-reduce:transition-none">
                {language === 'en' ? PROJECTS_CTA.text : PROJECTS_CTA.textId}
              </span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="ml-1 inline-block h-4 w-4 shrink-0 -translate-y-px transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 motion-reduce:transition-none" aria-hidden="true">
                <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd"></path>
              </svg>
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
