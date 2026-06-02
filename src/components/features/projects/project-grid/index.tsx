"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Project } from "../../landing-pages/projects/constant";
import ProjectCard from "../../../shared/project/ProjectCard";
import { useAppStore } from "../../../../store/useAppStore";

interface ProjectGridProps {
  projects: Project[];
}

export default function ProjectGrid({ projects }: ProjectGridProps) {
  const { language } = useAppStore();

  return (
    <div className="relative mb-12">
      {/* Bottom border for the grid */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[300vw] h-[2px] bg-white pointer-events-none" />
      
      <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        <AnimatePresence mode="popLayout">
          {projects.map((project) => (
            <motion.div 
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3 }}
              key={project.title} 
              className="relative"
            >
              {/* Top border for each row */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300vw] h-[2px] bg-white pointer-events-none z-10" />
              <ProjectCard project={project} variant="vertical" />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {projects.length === 0 && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-20 text-glacial-salt relative z-10"
        >
          {language === 'en' ? "No projects found." : "Tidak ada projek ditemukan."}
        </motion.div>
      )}
    </div>
  );
}
