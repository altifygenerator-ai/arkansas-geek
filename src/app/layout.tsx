import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://arkansasgeek.com"),
  title: {
    default: "Arkansas Geek | Computer Repair & Air-Cooled VW Repair",
    template: "%s | Arkansas Geek",
  },
  description:
    "Arkansas Geek offers computer repair and air-cooled Volkswagen repair help. Labor is typically $75/hr, with quotes based on the details of each job.",
  keywords: [
    "Arkansas Geek",
    "computer repair Arkansas",
    "computer troubleshooting",
    "PC repair Arkansas",
    "hardware repair",
    "computer upgrades",
    "air cooled Volkswagen repair",
    "air cooled VW repair",
    "Volkswagen Beetle repair",
    "VW repair Arkansas",
  ],
  authors: [{ name: "Arkansas Geek" }],
  creator: "Arkansas Geek",
  publisher: "Arkansas Geek",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://arkansasgeek.com",
    siteName: "Arkansas Geek",
    title: "Arkansas Geek | Computer Repair & Air-Cooled VW Repair",
    description:
      "Computer repair and air-cooled Volkswagen repair help. Labor is typically $75/hr, with quotes based on the details of each job.",
    images: [
      {
        url: "/images/pc-1.jpg",
        width: 1200,
        height: 630,
        alt: "Arkansas Geek computer repair and air-cooled Volkswagen repair",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Arkansas Geek | Computer Repair & Air-Cooled VW Repair",
    description:
      "Computer repair and air-cooled Volkswagen repair help. Labor is typically $75/hr, with quotes based on the details of each job.",
    images: ["/images/pc-1.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  category: "local business",
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