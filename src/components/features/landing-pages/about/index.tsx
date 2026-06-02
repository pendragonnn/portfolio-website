import { ABOUT_TEXT } from "./constant";

export default function About() {
  return (
    <section
      id="about"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="About me"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 bg-deep-blue/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-concerto lg:sr-only">
          About
        </h2>
      </div>
      <div>
        {ABOUT_TEXT.map((item, idx) => (
          <p key={idx} className={`text-glacial-salt ${idx !== ABOUT_TEXT.length - 1 ? 'mb-4' : ''}`}>
            {item.text}
          </p>
        ))}
      </div>
    </section>
  );
}
