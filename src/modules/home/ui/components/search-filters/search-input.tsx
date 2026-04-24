"use client";
import { useEffect, useState } from "react";

import { useQuery } from "@tanstack/react-query";
import { SearchIcon, FolderOpenIcon } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useTRPC } from "@/trpc/client";

interface Props {
  disabled?: boolean;
  defaultValue?: string | undefined;
  onChange?: (value: string) => void;
}

export const SearchInput = ({ disabled, defaultValue, onChange }: Props) => {
  const [searchValue, setSearchValue] = useState(defaultValue || "");

  const trpc = useTRPC();
  const session = useQuery(trpc.auth.session.queryOptions());

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      onChange?.(searchValue);
    }, 500);

    return () => clearTimeout(timeoutId);
  }, [searchValue, onChange]);

  return (
    <div className="flex items-center gap-3 w-full">
      {/* Sleek Enterprise Search Input */}
      <div className="relative w-full">
        <SearchIcon className="absolute left-3.5 top-1/2 -translate-y-1/2 size-4 text-zinc-500" />
        <Input
          className="pl-10 h-11 bg-zinc-950 border-zinc-800 text-white focus-visible:ring-blue-500/50 focus-visible:border-blue-500/50 rounded-xl placeholder:text-zinc-600 transition-all shadow-inner"
          placeholder="Search invoices, deliverables, or projects..."
          disabled={disabled}
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
      </div>

      {/* Authenticated Action Button */}
      {session.data?.user && (
        <Button
          asChild
          className="h-11 shrink-0 bg-white text-black font-semibold hover:bg-zinc-200 rounded-xl transition-all hidden sm:flex active:scale-[0.98]"
        >
          <Link prefetch href="/library">
            <FolderOpenIcon className="mr-2 size-4" />
            Deliverables
          </Link>
        </Button>
      )}
    </div>
  );
};
