import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Arkansas Geek | Computer Repair & Air-Cooled VW Repair",
    template: "%s | Arkansas Geek",
  },
  description:
    "Arkansas Geek is a website for computer repair and air-cooled Volkswagen repair. Confirmed service details will be added as they are provided.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}