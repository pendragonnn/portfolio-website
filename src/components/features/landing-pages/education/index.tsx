import { EDUCATION_DATA } from "./constant";

export default function Education() {
  return (
    <section
      id="education"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="Education"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 bg-deep-blue/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-concerto lg:sr-only">
          Education
        </h2>
      </div>
      <div>
        <ol className="group/list">
          {EDUCATION_DATA.map((item, idx) => (
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
                    {item.university}
                  </h3>
                  <div className="mt-1 flex flex-wrap items-center gap-3">
                    <h4 className="text-base font-medium text-ocean-city">
                      {item.degree}
                    </h4>
                    {item.gpa && (
                      <div className="inline-flex items-center rounded-full bg-ocean-city/10 px-3 py-1 text-xs font-medium leading-5 text-ocean-city">
                        GPA: {item.gpa}
                      </div>
                    )}
                  </div>
                  <p className="mt-4 text-sm leading-normal text-glacial-salt">
                    {item.description}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
