"use client";

import { useForm } from "react-hook-form";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema } from "../../schemas";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useTRPC } from "@/trpc/client";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { Loader2 } from "lucide-react";
import Image from "next/image";

export const SignUpView = () => {
  const router = useRouter();
  const trpc = useTRPC();
  const queryClient = useQueryClient();

  const register = useMutation(
    trpc.auth.register.mutationOptions({
      onError: (error) => {
        toast.error(error.message);
      },
      onSuccess: async () => {
        await queryClient.invalidateQueries(trpc.auth.session.queryFilter());
        router.push("/");
      },
    })
  );

  const form = useForm<z.infer<typeof registerSchema>>({
    mode: "all",
    resolver: zodResolver(registerSchema),
    defaultValues: {
      email: "",
      password: "",
      username: "",
    },
  });

  const onSubmit = (values: z.infer<typeof registerSchema>) => {
    register.mutate(values);
  };

  const username = form.watch("username");
  const usernameErrors = form.formState.errors.username;
  const showPreview = username && !usernameErrors;

  return (
    <div className="min-h-screen bg-[#050505] flex flex-col items-center justify-center p-6 font-sans text-white relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[400px] bg-blue-600/10 blur-[120px] pointer-events-none" />

      <div className="absolute top-8 left-8 sm:left-12">
        <Link
          href="/"
          className="transition-transform hover:scale-105 block opacity-80 hover:opacity-100"
        >
          <div className="p-1.5 rounded-md bg-white/5 border border-white/10 backdrop-blur-sm">
            <Image
              src="/shipspace.svg"
              alt="ShipSpace"
              width={24}
              height={24}
              className="invert"
            />
          </div>
        </Link>
      </div>

      <div className="w-full max-w-md space-y-8 relative z-10 my-12">
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-semibold tracking-tight text-white">
            Initialize your Space.
          </h1>
          <p className="text-zinc-400 text-sm">
            Set up your agency profile to access deliverables and invoices.
          </p>
        </div>

        <div className="bg-zinc-900/40 border border-zinc-800/50 p-8 rounded-2xl backdrop-blur-xl shadow-2xl">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="space-y-4">
                <FormField
                  control={form.control}
                  name="username"
                  render={({ field }) => (
                    <FormItem className="space-y-1.5">
                      <FormLabel className="text-xs font-medium text-zinc-500 uppercase tracking-wider ml-1">
                        Company / Client Handle
                      </FormLabel>
                      <FormControl>
                        <Input
                          autoComplete="username"
                          {...field}
                          className="h-11 bg-zinc-950 border-zinc-800 text-white focus-visible:ring-blue-500/50 focus-visible:border-blue-500/50 rounded-xl px-4 placeholder:text-zinc-700 transition-all"
                          placeholder="e.g. apex-law"
                        />
                      </FormControl>

                      <div className="h-4 ml-1">
                        {showPreview ? (
                          <p className="text-xs text-blue-400/80 font-medium animate-in fade-in slide-in-from-top-1">
                            Your workspace:{" "}
                            <span className="text-blue-400">@{username}</span>
                          </p>
                        ) : (
                          <FormMessage className="text-red-400 text-xs" />
                        )}
                      </div>
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem className="space-y-1.5">
                      <FormLabel className="text-xs font-medium text-zinc-500 uppercase tracking-wider ml-1">
                        Work Email
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          autoComplete="email"
                          {...field}
                          className="h-11 bg-zinc-950 border-zinc-800 text-white focus-visible:ring-blue-500/50 focus-visible:border-blue-500/50 rounded-xl px-4 placeholder:text-zinc-700 transition-all"
                          placeholder="you@agency.com"
                        />
                      </FormControl>
                      <FormMessage className="text-red-400 text-xs ml-1" />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem className="space-y-1.5">
                      <FormLabel className="text-xs font-medium text-zinc-500 uppercase tracking-wider ml-1">
                        Password
                      </FormLabel>
                      <FormControl>
                        <Input
                          autoComplete="new-password"
                          {...field}
                          type="password"
                          className="h-11 bg-zinc-950 border-zinc-800 text-white focus-visible:ring-blue-500/50 focus-visible:border-blue-500/50 rounded-xl px-4 placeholder:text-zinc-700 transition-all"
                          placeholder="••••••••"
                        />
                      </FormControl>
                      <FormMessage className="text-red-400 text-xs ml-1" />
                    </FormItem>
                  )}
                />
              </div>

              <Button
                disabled={register.isPending}
                type="submit"
                className="w-full h-11 bg-white text-black font-semibold rounded-xl hover:bg-zinc-200 active:scale-[0.98] transition-all flex items-center justify-center gap-2 group"
              >
                {register.isPending ? (
                  <>
                    <Loader2 className="size-4 animate-spin text-zinc-500" />
                    Creating Account...
                  </>
                ) : (
                  <>
                    Create Account
                    <span className="group-hover:translate-x-0.5 transition-transform">
                      →
                    </span>
                  </>
                )}
              </Button>

              <div className="relative py-2">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t border-zinc-800" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-zinc-900/40 px-2 text-zinc-500 tracking-wider">
                    Or continue with
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() =>
                    toast.info("OAuth disabled for demo environment.")
                  }
                  className="h-11 bg-transparent border-zinc-800 text-zinc-300 hover:bg-zinc-900 hover:text-white transition-all flex items-center justify-center gap-2"
                >
                  <svg className="size-4" viewBox="0 0 24 24">
                    <path
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                      fill="#4285F4"
                    />
                    <path
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                      fill="#34A853"
                    />
                    <path
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                      fill="#FBBC05"
                    />
                    <path
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                      fill="#EA4335"
                    />
                  </svg>
                  Google
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  onClick={() =>
                    toast.info("OAuth disabled for demo environment.")
                  }
                  className="h-11 bg-transparent border-zinc-800 text-zinc-300 hover:bg-zinc-900 hover:text-white transition-all flex items-center justify-center gap-2"
                >
                  <svg className="size-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  GitHub
                </Button>
              </div>
            </form>
          </Form>
        </div>

        <p className="text-center text-sm text-zinc-500">
          Already have an account?{" "}
          <Link
            href="/sign-in"
            className="text-white font-medium hover:underline decoration-zinc-500 underline-offset-4 transition-all"
          >
            Log in instead
          </Link>
        </p>
      </div>

      <footer className="absolute bottom-8 flex gap-6 text-[11px] text-zinc-600 uppercase tracking-widest font-medium">
        <span>© {new Date().getFullYear()} ShipSpace</span>
        <span className="w-1 h-1 bg-zinc-800 rounded-full my-auto" />
        <Link href="/privacy" className="hover:text-zinc-400 transition-colors">
          Privacy
        </Link>
        <Link href="/terms" className="hover:text-zinc-400 transition-colors">
          Terms
        </Link>
      </footer>
    </div>
  );
};
