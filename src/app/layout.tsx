import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "@/app/globals.css";

import { cn } from "@/lib/utils";
import { Providers } from "@/components/providers";
import { Toaster as Sonner } from "@/components/ui/sonner"; // Use Sonner as recommended

// Font setup
const fontSans = localFont({
  src: "../assets/fonts/Inter-Variable.woff2", // Adjust path if necessary - REMINDER: Add this font file!
  variable: "--font-sans",
  display: "swap",
});

// Metadata
export const metadata: Metadata = {
  title: {
    default: "Next.js Shadcn Starter",
    template: "%s | Next.js Shadcn Starter",
  },
  description: "Lean starter kit for Next.js with shadcn/ui.",
};

// Viewport
export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "bg-background min-h-screen font-sans antialiased",
          fontSans.variable
        )}
      >
        <Providers>{children}</Providers>
        <Sonner />
      </body>
    </html>
  );
}
