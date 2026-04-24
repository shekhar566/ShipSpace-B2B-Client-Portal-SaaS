"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  ArrowRightIcon,
  ShieldCheckIcon,
  FileTextIcon,
  DownloadCloudIcon,
  Loader2,
} from "lucide-react";
import { useTRPC } from "@/trpc/client";
import { useQuery } from "@tanstack/react-query";

const HomePage = () => {
  const trpc = useTRPC();
  const { data: session, isLoading } = useQuery(
    trpc.auth.session.queryOptions()
  );

  return (
    <div className="min-h-screen bg-[#050505] flex flex-col items-center justify-center p-6 font-sans text-white relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[500px] bg-blue-600/10 blur-[120px] pointer-events-none" />

      <div className="max-w-5xl w-full text-center space-y-10 mt-12 relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900/50 border border-zinc-800/50 backdrop-blur-md text-zinc-300 text-sm font-medium mb-4 shadow-2xl mx-auto">
          <ShieldCheckIcon className="size-4 text-blue-400" />
          Enterprise Client Portal
        </div>

        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white leading-tight">
          Your Agency.
          <br /> <span className="text-zinc-500">Elevated.</span>
        </h1>

        <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed">
          Access your secure deliverables, review project scopes, and manage
          invoice payments in one high-performance environment.
        </p>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-center gap-4 min-h-[80px]">
          {isLoading ? (
            <div className="flex items-center justify-center w-full sm:w-[200px] h-12 bg-zinc-900/20 border border-zinc-800/50 rounded-xl">
              <Loader2 className="size-5 animate-spin text-zinc-600" />
            </div>
          ) : session?.user ? (
            session.user.roles?.includes("super-admin") ? (
              <Button
                size="lg"
                className="w-full sm:w-auto bg-white text-black hover:bg-zinc-200 text-base h-12 px-8 rounded-xl transition-all group"
                asChild
              >
                <Link href="/admin">
                  Go to Admin Dashboard
                  <ArrowRightIcon className="ml-2 size-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            ) : (
              <Button
                size="lg"
                className="w-full sm:w-auto bg-blue-600 text-white hover:bg-blue-500 text-base h-12 px-8 rounded-xl transition-all group shadow-[0_0_20px_rgba(37,99,235,0.3)]"
                asChild
              >
                <Link href="/portal">
                  Enter Portal
                  <ArrowRightIcon className="ml-2 size-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            )
          ) : (
            <>
              <Button
                size="lg"
                className="w-full sm:w-auto bg-white text-black hover:bg-zinc-200 text-base h-12 px-8 rounded-xl transition-all group"
                asChild
              >
                <Link prefetch href="/sign-in">
                  Client Login
                  <ArrowRightIcon className="ml-2 size-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto bg-transparent border-zinc-800 text-zinc-300 hover:bg-zinc-900 hover:text-white text-base h-12 px-8 rounded-xl transition-all"
                asChild
              >
                <Link prefetch href="/contact">
                  Request Access
                </Link>
              </Button>
            </>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-24 text-left pb-12">
          <div className="bg-zinc-900/30 border border-zinc-800/50 p-8 rounded-2xl backdrop-blur-sm hover:bg-zinc-900/50 transition-colors">
            <div className="size-12 bg-zinc-800/50 rounded-xl border border-zinc-700/50 flex items-center justify-center mb-6 text-zinc-300">
              <FileTextIcon className="size-5" />
            </div>
            <h3 className="font-semibold text-xl mb-2 text-white">
              Centralized Invoices
            </h3>
            <p className="text-zinc-400 leading-relaxed text-sm">
              Review detailed scopes of work and settle retainers securely via
              Stripe infrastructure.
            </p>
          </div>

          <div className="bg-zinc-900/30 border border-zinc-800/50 p-8 rounded-2xl backdrop-blur-sm hover:bg-zinc-900/50 transition-colors">
            <div className="size-12 bg-zinc-800/50 rounded-xl border border-zinc-700/50 flex items-center justify-center mb-6 text-zinc-300">
              <DownloadCloudIcon className="size-5" />
            </div>
            <h3 className="font-semibold text-xl mb-2 text-white">
              Locked Deliverables
            </h3>
            <p className="text-zinc-400 leading-relaxed text-sm">
              Access high-res source files and final assets immediately upon
              automated payment routing.
            </p>
          </div>

          <div className="bg-zinc-900/30 border border-zinc-800/50 p-8 rounded-2xl backdrop-blur-sm hover:bg-zinc-900/50 transition-colors">
            <div className="size-12 bg-zinc-800/50 rounded-xl border border-zinc-700/50 flex items-center justify-center mb-6 text-zinc-300">
              <ShieldCheckIcon className="size-5" />
            </div>
            <h3 className="font-semibold text-xl mb-2 text-white">
              Tenant Isolation
            </h3>
            <p className="text-zinc-400 leading-relaxed text-sm">
              Dedicated multi-tenant architecture guarantees cryptographic
              isolation of your business assets.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
