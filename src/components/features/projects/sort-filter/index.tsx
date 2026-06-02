"use client";

export type SortOption = "date-desc" | "date-asc" | "alpha-asc" | "alpha-desc";
export type FilterOption = "all" | "web" | "mobile";

interface SortFilterProps {
  filter: FilterOption;
  setFilter: (f: FilterOption) => void;
  sort: SortOption;
  setSort: (s: SortOption) => void;
}

export default function SortFilter({ filter, setFilter, sort, setSort }: SortFilterProps) {
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
            {f.charAt(0).toUpperCase() + f.slice(1)}
          </button>
        ))}
      </div>

      <div className="flex items-center gap-3">
        <label htmlFor="sort" className="text-sm font-medium text-glacial-salt">Sort:</label>
        <select
          id="sort"
          value={sort}
          onChange={(e) => setSort(e.target.value as SortOption)}
          className="bg-deep-blue border border-ocean-city/30 text-concerto text-sm rounded-lg focus:ring-ocean-city focus:border-ocean-city block w-full p-2.5 outline-none"
        >
          <option value="date-desc">Newest First</option>
          <option value="date-asc">Oldest First</option>
          <option value="alpha-asc">Alphabetical (A-Z)</option>
          <option value="alpha-desc">Alphabetical (Z-A)</option>
        </select>
      </div>
    </div>
  );
}
