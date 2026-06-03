"use client";

import { motion } from "framer-motion";
import { EDUCATION_DATA } from "./constant";
import { useAppStore } from "../../../../store/useAppStore";

export default function Education() {
  const { language, isBlackTheme } = useAppStore();

  return (
    <motion.section
      id="education"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label={language === 'en' ? "Education" : "Pendidikan"}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className={`sticky top-0 z-20 -mx-6 mb-4 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0 ${isBlackTheme ? 'bg-[#1A1A1A]' : 'bg-deep-blue/75'} transition-colors duration-500`}>
        <h2 className="text-sm font-bold uppercase tracking-widest text-concerto lg:sr-only">
          {language === 'en' ? "Education" : "Pendidikan"}
        </h2>
      </div>
      <div>
        <ol className="group/list">
          {EDUCATION_DATA.map((item, idx) => (
            <motion.li 
              key={idx} 
              className="mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-ocean-city/10 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                <header
                  className="z-10 mb-2 mt-1 text-sm font-semibold uppercase tracking-wide text-ocean-city sm:col-span-2"
                  aria-label={language === 'en' ? item.period : item.periodId}
                >
                  {language === 'en' ? item.period : item.periodId}
                </header>
                <div className="z-10 sm:col-span-6">
                  <h3 className="font-medium leading-snug text-concerto text-lg">
                    {item.university}
                  </h3>
                  <div className="mt-1 flex flex-wrap items-center gap-3">
                    <h4 className="text-base font-medium text-ocean-city">
                      {language === 'en' ? item.degree : item.degreeId}
                    </h4>
                    {item.gpa && (
                      <div className="inline-flex items-center rounded-full bg-ocean-city/10 px-3 py-1 text-xs font-medium leading-5 text-ocean-city">
                        GPA: {item.gpa}
                      </div>
                    )}
                  </div>
                  <p 
                    className="mt-4 text-sm leading-normal text-glacial-salt"
                    dangerouslySetInnerHTML={{ __html: language === 'en' ? item.description : item.descriptionId }}
                  />
                </div>
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </motion.section>
  );
}
