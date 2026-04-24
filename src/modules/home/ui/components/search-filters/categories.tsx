// "use client";
// import { CategoryDropdown } from "./category-dropdown";
// import { useEffect, useRef, useState } from "react";
// import { Button } from "@/components/ui/button";
// import { cn } from "@/lib/utils";
// import { ListFilterIcon } from "lucide-react";
// import { CategoriesSidebar } from "./categories-sidebar";
// import { CategoriesGetManyOutput } from "@/modules/categories/types";
// import { useParams } from "next/navigation";
// interface Props {
//   data: CategoriesGetManyOutput;
// }
// export const Categories = ({ data }: Props) => {
//   const params = useParams();

//   const containerRef = useRef<HTMLDivElement>(null);
//   const measureRef = useRef<HTMLDivElement>(null);
//   const viewAllRef = useRef<HTMLDivElement>(null);

//   const [visibleCount, setVisibleCount] = useState(data.length);
//   const [isAnyHovered, setIsAnyHovered] = useState(false);
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);

//   const categoryParam = params.category as string | undefined;
//   const activeCategory = categoryParam || "all";

//   const activeCategoryIndex = data.findIndex(
//     (cat) => cat.slug === activeCategory
//   );
//   const isActiveCategoryHidden =
//     activeCategoryIndex >= visibleCount && activeCategoryIndex !== -1;

//   useEffect(() => {
//     const calculateVisible = () => {
//       if (!containerRef.current || !measureRef.current || !viewAllRef.current)
//         return;
//       const containerWidth = containerRef.current.offsetWidth;
//       const viewAllWidth = viewAllRef.current.offsetWidth;
//       const availableWidth = containerWidth - viewAllWidth;

//       const items = Array.from(measureRef.current.children);
//       let totalWidth = 0;
//       let visible = 0;

//       for (const item of items) {
//         const width = item.getBoundingClientRect().width;

//         if (totalWidth + width > availableWidth) break;
//         totalWidth += width;
//         visible++;
//       }

//       setVisibleCount(visible);
//     };

//     const resizeObserver = new ResizeObserver(calculateVisible);
//     resizeObserver.observe(containerRef.current!);

//     return () => resizeObserver.disconnect();
//   }, [data.length]);

//   return (
//     <div className="relative w-full">
//       <CategoriesSidebar open={isSidebarOpen} onOpenChange={setIsSidebarOpen} />
//       <div
//         ref={measureRef}
//         className="absolute opacity-0 pointer-events-none flex"
//         style={{ position: "fixed", top: -9999, left: -9999 }}
//       >
//         {data.map((category) => (
//           <div key={category.id}>
//             <CategoryDropdown
//               category={category}
//               isActive={activeCategory === category.slug}
//               isNavigationHovered={false}
//             />
//           </div>
//         ))}
//       </div>
//       {/* Visiable items */}
//       <div
//         ref={containerRef}
//         className="flex flex-nowrap items-center"
//         onMouseEnter={() => setIsAnyHovered(true)}
//         onMouseLeave={() => setIsAnyHovered(false)}
//       >
//         {/* hardcoded "All" button */}
//         {data.slice(0, visibleCount).map((category) => (
//           <div key={category.id}>
//             <CategoryDropdown
//               category={category}
//               isActive={activeCategory === category.slug}
//               isNavigationHovered={isAnyHovered}
//             />
//           </div>
//         ))}

//         <div ref={viewAllRef} className="shrink-0">
//           <Button
//             variant="elevated"
//             className={cn(
//               "h-11 px-4 bg-transparent border-transparent rounded-full hover:bg-white hover:border-primary text-black",
//               isActiveCategoryHidden &&
//                 !isAnyHovered &&
//                 "bg-white border-primary"
//             )}
//             onClick={() => setIsSidebarOpen(true)}
//           >
//             View All
//             <ListFilterIcon className="ml-2" />
//           </Button>
//         </div>
//       </div>
//     </div>
//   );
// };

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { CategoriesGetManyOutput } from "@/modules/categories/types";
import {
  LayoutDashboardIcon,
  ReceiptIcon,
  FolderDownIcon,
  SettingsIcon,
} from "lucide-react";

interface Props {
  data?: CategoriesGetManyOutput;
}

export const Categories = ({ data }: Props) => {
  const pathname = usePathname();

  const tabs = [
    { name: "Overview", href: "/", icon: LayoutDashboardIcon },
    { name: "Invoices", href: "/invoices", icon: ReceiptIcon },
    { name: "Deliverables", href: "/deliverables", icon: FolderDownIcon },
    { name: "Settings", href: "/settings", icon: SettingsIcon },
  ];

  return (
    <div className="w-full bg-[#050505] border-b border-zinc-800/50 py-4">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 flex">
        {/* The Outer Premium Container */}
        <nav className="inline-flex items-center gap-1 p-1 bg-zinc-900/40 rounded-xl border border-zinc-800/50 backdrop-blur-md overflow-x-auto scrollbar-hide">
          {tabs.map((tab) => {
            const isActive =
              tab.href === "/"
                ? pathname === "/"
                : pathname?.startsWith(tab.href);

            return (
              <Link
                key={tab.name}
                href={tab.href}
                className={cn(
                  "group flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg whitespace-nowrap transition-all duration-200",
                  isActive
                    ? "bg-zinc-800 text-white shadow-sm border border-zinc-700/50" // Elevated active state
                    : "text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/40" // Smooth hover state
                )}
              >
                <tab.icon
                  className={cn(
                    "size-4 transition-colors",
                    isActive
                      ? "text-white"
                      : "text-zinc-500 group-hover:text-zinc-300"
                  )}
                />
                {tab.name}
              </Link>
            );
          })}
        </nav>
      </div>
    </div>
  );
};
