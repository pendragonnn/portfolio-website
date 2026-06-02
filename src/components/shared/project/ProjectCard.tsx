"use client";

import { useState, useEffect, useRef } from "react";
import { Project } from "../../features/landing-pages/projects/constant";
import { useAppStore } from "../../../store/useAppStore";

interface ProjectCardProps {
  project: Project;
  variant?: "horizontal" | "vertical";
}

export default function ProjectCard({ project, variant = "horizontal" }: ProjectCardProps) {
  const [isImageOpen, setIsImageOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isOverflowing, setIsOverflowing] = useState(false);
  const textRef = useRef<HTMLParagraphElement>(null);
  
  const { language, isBlackTheme } = useAppStore();
  const isVertical = variant === "vertical";
  
  useEffect(() => {
    const checkOverflow = () => {
      if (textRef.current && !isExpanded) {
        setIsOverflowing(textRef.current.scrollHeight > textRef.current.clientHeight);
      }
    };

    checkOverflow();
    window.addEventListener("resize", checkOverflow);
    return () => window.removeEventListener("resize", checkOverflow);
  }, [project.description, project.descriptionId, language, variant, isExpanded]);

  // Use posterImage for horizontal layout if available
  const displayImage = !isVertical && project.posterImage ? project.posterImage : project.image;

  return (
    <>
      <div className={`group relative transition-all ${isVertical ? "flex flex-col gap-4 p-6 sm:p-8 border-x-[2px] border-white h-full" : "grid gap-4 pb-1 sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50"}`}>
        
        {/* Background highlight for horizontal list view */}
        {!isVertical && (
          <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-ocean-city/10 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
        )}
        
        {/* Image wrapper - Clicking it opens the lightbox */}
        <div 
          className={`z-10 cursor-pointer ${isVertical ? "order-1 w-full shrink-0" : "sm:order-1 sm:col-span-3 sm:translate-y-1"}`}
          onClick={() => setIsImageOpen(true)}
        >
          {displayImage && (
            <img
              src={displayImage}
              alt={project.title}
              className={`w-full rounded border-2 border-ocean-city/10 bg-ocean-city/20 object-cover transition group-hover:border-ocean-city/30 ${isVertical ? "aspect-video h-full" : "h-[250px]"}`}
            />
          )}
        </div>

        <div className={`z-10 flex flex-col ${isVertical ? "order-2 flex-grow" : "sm:order-2 sm:col-span-5"}`}>
          <h3 className="flex items-center gap-3">
            {/* Title is no longer a link, just text */}
            <span className="inline-flex items-baseline font-medium leading-tight text-concerto text-lg">
              {project.title}
            </span>
            
            {project.tiktokUrl && project.tiktokUrl !== "#" && (
              <a href={project.tiktokUrl} target="_blank" rel="noreferrer noopener" className="z-20 inline-flex items-center text-glacial-salt hover:text-concerto transition-colors" title="TikTok Video">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" /></svg>
              </a>
            )}
          </h3>
          {project.date && (
            <div className="mt-1 text-xs text-ocean-city font-medium">
              {new Date(project.date).toLocaleDateString(language === 'en' ? 'en-US' : 'id-ID', { year: 'numeric', month: 'long' })}
            </div>
          )}
          <div className="mt-2 text-sm text-glacial-salt leading-normal">
            <p 
              ref={textRef} 
              className={isVertical && !isExpanded ? "line-clamp-3" : ""}
            >
              {language === 'en' ? project.description : project.descriptionId}
            </p>
            {isVertical && (isOverflowing || isExpanded) && (
              <button 
                onClick={(e) => {
                  e.preventDefault();
                  setIsExpanded(!isExpanded);
                }} 
                className="mt-1 text-ocean-city hover:text-concerto font-medium focus:outline-none transition-colors inline-block"
              >
                {isExpanded ? (language === 'en' ? "See less" : "Tutup") : (language === 'en' ? "See more" : "Lihat selengkapnya")}
              </button>
            )}
          </div>
          <ul className={`mt-4 flex flex-wrap items-start content-start ${isVertical ? "mb-6 sm:mb-8" : ""}`} aria-label="Technologies used:">
            {project.technologies.map((tech) => (
              <li className="mr-1.5 mt-2" key={tech}>
                <div className="flex items-center rounded-full bg-ocean-city/10 px-3 py-1 text-xs font-medium leading-5 text-ocean-city">
                  {tech}
                </div>
              </li>
            ))}
          </ul>
          
          {/* Action Links */}
          <div className={isVertical ? "mt-auto flex border-t-[2px] border-white -mx-6 sm:-mx-8 -mb-6 sm:-mb-8" : "mt-auto pt-5 flex flex-wrap gap-4 items-center"}>
            {project.visitUrl && project.visitUrl !== "#" && (
              <a href={project.visitUrl} target="_blank" rel="noreferrer noopener" className={isVertical ? `flex-1 flex justify-center items-center gap-2 py-4 text-sm font-bold text-white bg-transparent hover:bg-white ${isBlackTheme ? 'hover:text-black' : 'hover:text-deep-blue'} transition-colors border-r-[2px] border-white last:border-r-0` : "z-20 flex items-center gap-1.5 text-sm font-medium text-glacial-salt hover:text-ocean-city transition-colors"} title="Visit Site">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
                <span>{language === 'en' ? "Live Demo" : "Lihat Demo"}</span>
              </a>
            )}
            {project.repositoryUrl && project.repositoryUrl !== "#" && (
              <a href={project.repositoryUrl} target="_blank" rel="noreferrer noopener" className={isVertical ? `flex-1 flex justify-center items-center gap-2 py-4 text-sm font-bold text-white bg-transparent hover:bg-white ${isBlackTheme ? 'hover:text-black' : 'hover:text-deep-blue'} transition-colors border-r-[2px] border-white last:border-r-0` : "z-20 flex items-center gap-1.5 text-sm font-medium text-glacial-salt hover:text-ocean-city transition-colors"} title="Repository">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                <span>{language === 'en' ? "Source Code" : "Kode Sumber"}</span>
              </a>
            )}
            {project.documentationUrl && project.documentationUrl !== "#" && (
              <a href={project.documentationUrl} target="_blank" rel="noreferrer noopener" className={isVertical ? `flex-1 flex justify-center items-center gap-2 py-4 text-sm font-bold text-white bg-transparent hover:bg-white ${isBlackTheme ? 'hover:text-black' : 'hover:text-deep-blue'} transition-colors border-r-[2px] border-white last:border-r-0` : "z-20 flex items-center gap-1.5 text-sm font-medium text-glacial-salt hover:text-ocean-city transition-colors"} title="Documentation">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
                <span>{language === 'en' ? "Docs" : "Dokumen"}</span>
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Image Lightbox Modal */}
      {isImageOpen && (
        <div className={`fixed inset-0 z-[100] flex items-center justify-center ${isBlackTheme ? 'bg-black/90' : 'bg-deep-blue/90'} p-4 sm:p-8 backdrop-blur-md`} onClick={() => setIsImageOpen(false)}>
          <button 
            className="absolute top-6 right-6 text-glacial-salt hover:text-ocean-city transition-colors z-[110]"
            onClick={() => setIsImageOpen(false)}
            aria-label="Close"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <div className="relative max-w-5xl w-full max-h-full flex items-center justify-center" onClick={e => e.stopPropagation()}>
            <img 
              src={displayImage} 
              alt={project.title} 
              className="max-w-full max-h-[85vh] object-contain rounded-md shadow-2xl"
            />
          </div>
        </div>
      )}
    </>
  );
}
