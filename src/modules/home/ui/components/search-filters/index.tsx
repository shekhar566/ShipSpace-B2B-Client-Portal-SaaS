"use client";

import { useProductFilters } from "@/modules/products/hooks/use-product-filters";
import { Categories } from "./categories";
import { SearchInput } from "./search-input";

export const SearchFilters = () => {
  const [filters, setFilters] = useProductFilters();

  return (
    <div className="w-full bg-[#050505] border-b border-zinc-800/50">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="w-full md:w-auto overflow-x-auto scrollbar-hide">
          <Categories />
        </div>

        <div className="w-full md:w-80 shrink-0">
          <SearchInput
            defaultValue={filters.search}
            onChange={(value) =>
              setFilters({
                search: value,
              })
            }
          />
        </div>
      </div>
    </div>
  );
};

export const SearchFiltersSkeleton = () => {
  return (
    <div className="w-full bg-[#050505] border-b border-zinc-800/50">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-4 flex flex-col md:flex-row justify-between gap-4">
        <div className="h-12 w-full max-w-md bg-zinc-800/50 rounded-xl animate-pulse" />
        <div className="h-10 w-full md:w-80 bg-zinc-800/50 rounded-xl animate-pulse" />
      </div>
    </div>
  );
};
