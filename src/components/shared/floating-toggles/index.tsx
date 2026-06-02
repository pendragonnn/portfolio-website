"use client";

import { useAppStore } from "../../../store/useAppStore";

export default function FloatingToggles() {
  const { language, toggleLanguage, isBlackTheme, toggleTheme } = useAppStore();

  return (
    <div className="fixed md:top-6 right-6 top-3 z-[100] flex items-center gap-3">
      {/* Theme Toggle */}
      <button
        onClick={toggleTheme}
        className="flex h-10 w-10 items-center justify-center rounded-full bg-ocean-city/20 text-ocean-city backdrop-blur-sm transition-all hover:bg-ocean-city/40 hover:scale-105 shadow-lg border border-ocean-city/30 focus:outline-none"
        aria-label="Toggle Theme"
        title={isBlackTheme ? "Switch to Deep Blue Theme" : "Switch to Black Theme"}
      >
        {isBlackTheme ? (
          // Moon icon indicating dark mode (or switch to light)
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
            <path d="M21.64 13a1 1 0 00-1.05-.14 8.05 8.05 0 01-3.37.73 8.15 8.15 0 01-8.14-8.1 8.59 8.59 0 01.25-2A1 1 0 008 2.36 10.14 10.14 0 1022 14.05a1 1 0 00-.36-1.05z" />
          </svg>
        ) : (
          // Sun icon indicating light mode
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
            <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18.75a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25a.75.75 0 01.75-.75zM6.166 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.06 1.061l1.591 1.59zM4.5 12a.75.75 0 01-.75.75H1.5a.75.75 0 010-1.5h2.25a.75.75 0 01.75.75zM6.166 5.106a.75.75 0 00-1.06 1.06l1.59 1.591a.75.75 0 101.06-1.061l-1.59-1.59z" />
          </svg>
        )}
      </button>

      {/* Language Toggle */}
      <button
        onClick={toggleLanguage}
        className="flex h-10 w-10 items-center justify-center rounded-full bg-ocean-city/20 text-ocean-city backdrop-blur-sm transition-all hover:bg-ocean-city/40 hover:scale-105 shadow-lg font-bold text-xs uppercase tracking-wider border border-ocean-city/30 focus:outline-none"
        aria-label="Toggle Language"
        title={language === 'en' ? "Switch to Indonesian" : "Ganti ke Bahasa Inggris"}
      >
        {language}
      </button>
    </div>
  );
}
