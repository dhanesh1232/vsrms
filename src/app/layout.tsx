import type { Metadata } from "next";
import {
  Inter,
  JetBrains_Mono,
  DM_Serif_Display,
  Geist,
} from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

const dmSerif = DM_Serif_Display({
  variable: "--font-display",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Care&Move — Professional Care & Vehicle Services",
    template: "%s | Care&Move",
  },
  description:
    "Care&Move integrates professional healthcare management with a premium vehicle marketplace. Compassionate care and reliable transport, all in one platform.",
  keywords: [
    "care services",
    "home nursing",
    "vehicle booking",
    "care organisation",
    "transport marketplace",
  ],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://caremove.in",
    siteName: "Care&Move",
  },
};

import { TooltipProvider } from "@/components/ui/tooltip";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(
        "h-full",
        "antialiased",
        inter.variable,
        jetbrainsMono.variable,
        dmSerif.variable,
        "font-sans",
        geist.variable,
      )}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <TooltipProvider>{children}</TooltipProvider>
      </body>
    </html>
  );
}
