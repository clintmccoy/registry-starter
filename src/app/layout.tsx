import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { Public_Sans, IBM_Plex_Sans } from "next/font/google";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

import "@/app/tokens.css";
import "@/app/tailwind.css";

export const metadata: Metadata = {
  title: "Registry Starter",
  description: "Starter to help build a Shadcn Registry using Tailwind v4",
  icons: [{ rel: "icon", url: "/favicon.svg", type: "image/svg+xml" }],
};

const HeadingFont = Public_Sans({
  subsets: ["latin"],
  weight: ["500", "600"],        // 500 = medium, 600 = semi-bold
  variable: "--font-heading",
});

const BodyFont = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400"],               // regular weight
  variable: "--font-body",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(
        HeadingFont.variable,
        BodyFont.variable,
        MontserratSerif.variable,
        "bg-background text-foreground",
      )}
    >
      <meta
        name="robots"
        content="noindex, nofollow, noarchive, nosnippet, noimageindex"
      />
      <body className="flex grow">
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
