"use client";
import { useState } from "react";
import { MenuIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

import { NavbarSidebar } from "./navbarSidebar";
import { useTRPC } from "@/trpc/client";
import { useQuery } from "@tanstack/react-query";
import { LogoutButton } from "@/components/LogoutButton";
import Image from "next/image";

interface NavbarItemProps {
  href: string;
  children: React.ReactNode;
  isActive?: boolean;
}

const NavbarItem = ({ href, children, isActive }: NavbarItemProps) => {
  return (
    <Button
      asChild
      variant="ghost"
      className={cn(
        "bg-transparent hover:bg-zinc-800/50 rounded-full px-4 text-sm font-medium transition-colors text-zinc-400 hover:text-white",
        isActive && "bg-zinc-800 text-white"
      )}
    >
      <Link href={href}>{children}</Link>
    </Button>
  );
};

const navbarItems = [
  { href: "/", children: "Overview" },
  { href: "/features", children: "Services" },
  { href: "/contact", children: "Contact" },
];

export const Navbar = () => {
  const pathname = usePathname();
  const [isSidebarOpen, setisSidebaropen] = useState(false);

  const trpc = useTRPC();
  const session = useQuery(trpc.auth.session.queryOptions());

  return (
    <nav className="h-20 flex border-b border-zinc-800/50 justify-between items-center bg-[#050505] px-6 sticky top-0 z-50 backdrop-blur-md bg-opacity-90">
      <Link
        href="/"
        className="flex items-center gap-3 transition-opacity hover:opacity-80"
      >
        <div className="p-1.5 rounded-md bg-white/5 border border-white/10 backdrop-blur-sm">
          <Image
            src="/shipspace.svg"
            alt="ShipSpace"
            width={28}
            height={28}
            className="invert"
          />
        </div>
        <span className="text-xl font-bold tracking-tight text-white">
          ShipSpace
        </span>
      </Link>

      <NavbarSidebar
        items={navbarItems}
        open={isSidebarOpen}
        onOpenChange={setisSidebaropen}
      />

      {/* Center Links (Hidden on mobile) */}
      <div className="items-center gap-1 hidden lg:flex">
        {navbarItems.map((item) => (
          <NavbarItem
            key={item.href}
            href={item.href}
            isActive={pathname === item.href}
          >
            {item.children}
          </NavbarItem>
        ))}
      </div>

      {/* Right Side Auth / Actions */}
      {session.data?.user ? (
        <div className="hidden lg:flex items-center gap-6">
          <span className="text-sm font-medium text-zinc-400">
            {session.data.user.email}
          </span>
          <div className="flex items-center gap-3">
            {/* Note: Ensure LogoutButton accepts className props in its own file to match this styling */}
            <LogoutButton />
          </div>
        </div>
      ) : (
        <div className="hidden lg:flex items-center gap-3">
          <Button
            asChild
            variant="ghost"
            className="rounded-full hover:bg-zinc-800 text-zinc-300 hover:text-white transition-colors px-6"
          >
            <Link prefetch href="/sign-in">
              Client Login
            </Link>
          </Button>
          <Button
            asChild
            className="rounded-full bg-white text-black font-semibold hover:bg-zinc-200 active:scale-[0.98] transition-all px-6"
          >
            <Link prefetch href="/contact">
              Work With Us
            </Link>
          </Button>
        </div>
      )}

      {/* Mobile Menu Toggle */}
      <div className="flex lg:hidden items-center justify-center">
        <Button
          variant="ghost"
          className="size-10 border-transparent p-0 text-zinc-400 hover:text-white hover:bg-zinc-800"
          onClick={() => setisSidebaropen(true)}
        >
          <MenuIcon className="size-5" />
        </Button>
      </div>
    </nav>
  );
};
