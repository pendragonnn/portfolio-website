"use client";

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

  const filterLabels: Record<FilterOption, { en: string; id: string }> = {
    all: { en: "All", id: "Semua" },
    web: { en: "Web", id: "Web" },
    mobile: { en: "Mobile", id: "Mobile" },
  };

  return (
    <div className="mb-12 relative flex flex-col sm:flex-row gap-6 justify-between items-start sm:items-center py-6">
      {/* Full-bleed top and bottom borders */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300vw] h-[2px] bg-white pointer-events-none" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[300vw] h-[2px] bg-white pointer-events-none" />
      
      <div className="flex gap-2 bg-ocean-city/10 p-1 rounded-lg relative z-10">
        {(["all", "web", "mobile"] as FilterOption[]).map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
              filter === f
                ? "bg-ocean-city text-deep-blue"
                : "text-glacial-salt hover:text-concerto hover:bg-ocean-city/20"
            }`}
          >
            {language === 'en' ? filterLabels[f].en : filterLabels[f].id}
          </button>
        ))}
      </div>

      <div className="flex items-center gap-3">
        <label htmlFor="sort" className="text-sm font-medium text-glacial-salt">
          {language === 'en' ? "Sort:" : "Urutkan:"}
        </label>
        <select
          id="sort"
          value={sort}
          onChange={(e) => setSort(e.target.value as SortOption)}
          className={`${isBlackTheme ? 'bg-black' : 'bg-deep-blue'} border border-ocean-city/30 text-concerto text-sm rounded-lg focus:ring-ocean-city focus:border-ocean-city block w-full p-2.5 outline-none transition-colors`}
        >
          <option value="date-desc">{language === 'en' ? "Newest First" : "Terbaru"}</option>
          <option value="date-asc">{language === 'en' ? "Oldest First" : "Terlama"}</option>
          <option value="alpha-asc">{language === 'en' ? "Alphabetical (A-Z)" : "Alfabet (A-Z)"}</option>
          <option value="alpha-desc">{language === 'en' ? "Alphabetical (Z-A)" : "Alfabet (Z-A)"}</option>
        </select>
      </div>
    </div>
  );
}
