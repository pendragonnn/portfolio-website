"use client";

import { motion } from "framer-motion";
import { ABOUT_TEXT } from "./constant";
import { useAppStore } from "../../../../store/useAppStore";

export default function About() {
  const { language, isBlackTheme } = useAppStore();

  return (
    <motion.section
      id="about"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label={language === 'en' ? "About me" : "Tentang saya"}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className={`sticky top-0 z-20 -mx-6 mb-4 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0 ${isBlackTheme ? 'bg-[#1A1A1A]' : 'bg-deep-blue/75'} transition-colors duration-500`}>
        <h2 className="text-sm font-bold uppercase tracking-widest text-concerto lg:sr-only">
          {language === 'en' ? "About" : "Tentang"}
        </h2>
      </div>
      <div>
        {ABOUT_TEXT.map((item, idx) => (
          <p 
            key={idx} 
            className={`text-glacial-salt ${idx !== ABOUT_TEXT.length - 1 ? 'mb-4' : ''}`}
            dangerouslySetInnerHTML={{ __html: language === 'en' ? item.text : item.textId }}
          />
        ))}
      </div>
    </motion.section>
  );
}
