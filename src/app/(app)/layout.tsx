import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import { NuqsAdapter } from "nuqs/adapters/next/app";

import "./globals.css";
import { TRPCReactProvider } from "@/trpc/client";
import { Toaster } from "@/components/ui/sonner";

const dmSans = DM_Sans({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "ShipSpace | Multi-Tenant B2B Client Portal",
    template: "%s | ShipSpace",
  },
  description:
    "Secure, isolated client portals and data management for modern agencies.",
  keywords: [
    "B2B SaaS",
    "Client Portal",
    "Multi-tenant",
    "Agency Dashboard",
    "Next.js",
  ],
  authors: [{ name: "Shekhar Anand Chaudhary" }],
  creator: "Shekhar Anand Chaudhary",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://shipspace.vercel.app", // Make sure to update this to your actual live URL later
    title: "ShipSpace | B2B Client Portal",
    description:
      "Secure, isolated client portals and data management for modern agencies.",
    siteName: "ShipSpace",
  },
  twitter: {
    card: "summary_large_image",
    title: "ShipSpace | B2B Client Portal",
    description:
      "Secure, isolated client portals and data management for modern agencies.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${dmSans.className} antialiased`}>
        <NuqsAdapter>
          <TRPCReactProvider>
            {children}
            <Toaster />
          </TRPCReactProvider>
        </NuqsAdapter>
      </body>
    </html>
  );
}
