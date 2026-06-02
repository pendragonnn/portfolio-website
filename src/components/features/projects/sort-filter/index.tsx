"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useAppStore } from "../../../../store/useAppStore";

export type SortOption = "date-desc" | "date-asc" | "alpha-asc" | "alpha-desc";
export type FilterOption = "all" | "web" | "mobile";

interface SortFilterProps {
  filter: FilterOption;
  setFilter: (f: FilterOption) => void;
  sort: SortOption;
  setSort: (s: SortOption) => void;
}

export default function SortFilter({ filter, setFilter, sort, setSort }: SortFilterProps) {
  const { language, isBlackTheme } = useAppStore();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const filterLabels: Record<FilterOption, { en: string; id: string }> = {
    all: { en: "All", id: "Semua" },
    web: { en: "Web", id: "Web" },
    mobile: { en: "Mobile", id: "Mobile" },
  };

  const sortOptions: { value: SortOption; labelEn: string; labelId: string }[] = [
    { value: "date-desc", labelEn: "Newest First", labelId: "Terbaru" },
    { value: "date-asc", labelEn: "Oldest First", labelId: "Terlama" },
    { value: "alpha-asc", labelEn: "Alphabetical (A-Z)", labelId: "Alfabet (A-Z)" },
    { value: "alpha-desc", labelEn: "Alphabetical (Z-A)", labelId: "Alfabet (Z-A)" },
  ];

  const currentSortOption = sortOptions.find(o => o.value === sort) || sortOptions[0];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="mb-12 relative flex flex-col sm:flex-row gap-6 justify-between items-start sm:items-center py-6">
      {/* Full-bleed top and bottom borders */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300vw] h-[2px] bg-white pointer-events-none" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[300vw] h-[2px] bg-white pointer-events-none" />
      
      <div className="flex gap-2 bg-ocean-city/10 p-1 rounded-lg relative z-10">
        {(["all", "web", "mobile"] as FilterOption[]).map((f) => (
          <motion.button
            key={f}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setFilter(f)}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
              filter === f
                ? "bg-ocean-city text-deep-blue"
                : "text-glacial-salt hover:text-concerto hover:bg-ocean-city/20"
            }`}
          >
            {language === 'en' ? filterLabels[f].en : filterLabels[f].id}
          </motion.button>
        ))}
      </div>

      <div className="flex items-center gap-3">
        <label className="text-sm font-medium text-glacial-salt">
          {language === 'en' ? "Sort:" : "Urutkan:"}
        </label>
        
        {/* Custom Dropdown */}
        <div className="relative w-48 z-20" ref={dropdownRef}>
          <button
            type="button"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className={`${isBlackTheme ? 'bg-[#1A1A1A]' : 'bg-deep-blue'} flex items-center justify-between border border-ocean-city/30 text-concerto text-sm rounded-lg hover:border-ocean-city focus:ring-ocean-city focus:border-ocean-city w-full py-2.5 px-3 outline-none transition-colors cursor-pointer`}
          >
            <span className="truncate">{language === 'en' ? currentSortOption.labelEn : currentSortOption.labelId}</span>
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className={`w-4 h-4 ml-2 transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} 
              fill="none" viewBox="0 0 24 24" stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          <AnimatePresence>
            {isDropdownOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className={`absolute top-full right-0 mt-2 w-full rounded-lg border border-ocean-city/30 shadow-2xl overflow-hidden ${isBlackTheme ? 'bg-[#1A1A1A]' : 'bg-deep-blue'}`}
              >
                <ul className="py-1">
                  {sortOptions.map((option) => (
                    <li key={option.value}>
                      <button
                        type="button"
                        onClick={() => {
                          setSort(option.value);
                          setIsDropdownOpen(false);
                        }}
                        className={`w-full text-left px-4 py-2.5 text-sm transition-colors hover:bg-ocean-city hover:text-deep-blue ${
                          sort === option.value ? 'text-ocean-city bg-ocean-city/10' : 'text-glacial-salt'
                        }`}
                      >
                        {language === 'en' ? option.labelEn : option.labelId}
                      </button>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
