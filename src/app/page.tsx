import Spotlight from "../components/shared/spotlight";
import { Header, About, Experience, Education, Projects } from "../components/features/landing-pages";

export default function Home() {
  return (
    <div className="bg-deep-blue text-glacial-salt selection:bg-ocean-city selection:text-deep-blue relative min-h-screen">
      <Spotlight />
      <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
        <div className="lg:flex lg:justify-between lg:gap-4">
          <Header />
          <main id="content" className="pt-24 lg:w-1/2 lg:py-24">
            <About />
            <Experience />
            <Education />
            <Projects />
          </main>
        </div>
      </div>
    </div>
  );
}
