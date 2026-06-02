import { EXPERIENCE_DATA } from "./constant";

export default function Experience() {
  return (
    <section
      id="experience"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="Work experience"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 bg-deep-blue/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-concerto lg:sr-only">
          Experience
        </h2>
      </div>
      <div>
        <ol className="group/list">
          {EXPERIENCE_DATA.map((item, idx) => (
            <li key={idx} className="mb-12">
              <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-ocean-city/10 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                <header
                  className="z-10 mb-2 mt-1 text-sm font-semibold uppercase tracking-wide text-ocean-city sm:col-span-2"
                  aria-label={item.period}
                >
                  {item.period}
                </header>
                <div className="z-10 sm:col-span-6">
                  <h3 className="font-medium leading-snug text-concerto text-lg">
                    {item.role}
                  </h3>
                  <p className="mt-2 text-sm leading-normal text-glacial-salt">
                    {item.description}
                  </p>
                  <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
                    {item.technologies.map((tech) => (
                      <li key={tech} className="mr-1.5 mt-2">
                        <div className="flex items-center rounded-full bg-ocean-city/10 px-3 py-1 text-xs font-medium leading-5 text-ocean-city">
                          {tech}
                        </div>
                      </li>
                    ))}
                  </ul>
                  
                  {/* @ts-ignore */}
                  {item.certificateUrl && (
                    <div className="mt-4 flex">
                      <a
                        className="inline-flex items-center gap-1.5 text-sm font-medium text-glacial-salt hover:text-ocean-city transition-colors z-20"
                        href={item.certificateUrl}
                        target="_blank"
                        rel="noreferrer noopener"
                        aria-label="View Internship Certificate"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
                        <span>View Certificate</span>
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </li>
          ))}
        </ol>
        <div className="mt-12 flex flex-wrap gap-8">
          <a
            className="inline-flex items-center font-medium leading-tight text-concerto group/link text-base hover:text-ocean-city transition-colors"
            href="/file/CV_Wisnu_Andika_ENG.pdf"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="View Full Résumé"
          >
            <span>
              <span className="border-b border-transparent pb-px transition group-hover/link:border-ocean-city motion-reduce:transition-none">
                View Full 
              </span>
              <span className="whitespace-nowrap">
                <span className="border-b border-transparent pb-px transition group-hover/link:border-ocean-city motion-reduce:transition-none ml-1">
                  Résumé
                </span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="ml-1 inline-block h-4 w-4 shrink-0 -translate-y-px transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 motion-reduce:transition-none" aria-hidden="true">
                  <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd"></path>
                </svg>
              </span>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
