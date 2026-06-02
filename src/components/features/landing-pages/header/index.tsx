"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, Variants } from "framer-motion";
import { HEADER_DATA, NAV_ITEMS, SOCIAL_LINKS } from "./constant";
import { useAppStore } from "../../../../store/useAppStore";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } 
  },
};

export default function Header() {
  const [activeSection, setActiveSection] = useState("about");
  const { language } = useAppStore();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-20% 0px -70% 0px", // Trigger when section is in the top/middle of the viewport
      }
    );

    NAV_ITEMS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 variants={itemVariants} className="text-4xl font-black tracking-tight text-concerto sm:text-5xl">
          <Link href="/">{HEADER_DATA.name}</Link>
        </motion.h1>
        <motion.h2 variants={itemVariants} className="mt-3 text-lg font-medium tracking-tight text-concerto sm:text-xl">
          {HEADER_DATA.role}
        </motion.h2>
        <motion.p variants={itemVariants} className="mt-4 max-w-xs leading-normal text-glacial-salt">
          {language === 'en' ? HEADER_DATA.description : HEADER_DATA.descriptionId}
        </motion.p>

        <nav className="nav hidden lg:block" aria-label="In-page jump links">
          <ul className="mt-16 flex flex-col gap-2 w-max">
            {NAV_ITEMS.map((item, idx) => (
              <motion.li key={item.id} variants={itemVariants}>
                <a
                  className="group flex items-center py-3"
                  href={`#${item.id}`}
                >
                  <span
                    className={`nav-text text-4xl font-black uppercase tracking-widest transition-all ${
                      activeSection === item.id
                        ? "text-white [-webkit-text-stroke:0px]"
                        : "text-transparent [-webkit-text-stroke:2px_white] hover:text-white/50"
                    }`}
                  >
                    {language === 'en' ? item.name : item.nameId}
                  </span>
                </a>
              </motion.li>
            ))}
          </ul>
        </nav>
      </motion.div>

      <motion.ul 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="ml-1 mt-8 flex items-center" 
        aria-label="Social media"
      >
        {SOCIAL_LINKS.map((link) => (
          <motion.li key={link.name} variants={itemVariants} className="mr-5 shrink-0 text-xs">
            <a
              className="block hover:text-concerto text-glacial-salt transition-colors"
              href={link.url}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={`${link.name} (opens in a new tab)`}
              title={link.name}
            >
              <span className="sr-only">{link.name}</span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox={link.viewBox} fill="currentColor" className="h-6 w-6" aria-hidden="true">
                <path d={link.iconPath}></path>
              </svg>
            </a>
          </motion.li>
        ))}
      </motion.ul>
    </header>
  );
}
