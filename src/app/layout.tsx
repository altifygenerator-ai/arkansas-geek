import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://arkansasgeek.com"),

  title: {
    default:
      "Arkansas Geek | Computer Repair & Air-Cooled VW Repair Near Hot Springs & Malvern",
    template: "%s | Arkansas Geek",
  },

  description:
    "Arkansas Geek provides computer repair, PC troubleshooting, hardware upgrades, and air-cooled Volkswagen repair help for Hot Springs, Malvern, Arkadelphia, and surrounding Arkansas areas. Labor is typically $55/hr, with quotes based on each job.",

  keywords: [
    "Arkansas Geek",
    "computer repair Hot Springs AR",
    "computer repair Malvern AR",
    "PC repair Hot Springs Arkansas",
    "PC repair Malvern Arkansas",
    "computer troubleshooting Hot Springs",
    "computer troubleshooting Malvern",
    "laptop repair Hot Springs AR",
    "desktop repair Hot Springs AR",
    "hardware upgrades Arkansas",
    "computer upgrades Arkansas",
    "virus removal Arkansas",
    "air cooled Volkswagen repair Arkansas",
    "air cooled VW repair Hot Springs",
    "air cooled VW repair Malvern",
    "Volkswagen Beetle repair Arkansas",
    "classic VW repair Arkansas",
    "VW repair Hot Springs AR",
    "VW repair Malvern AR",
    "computer repair Arkadelphia AR",
    "VW repair Arkadelphia AR",
  ],

  authors: [{ name: "Arkansas Geek" }],
  creator: "Arkansas Geek",
  publisher: "Arkansas Geek",

  verification: {
    google: "dUMjqFNX0KfZ6iJO-7ZFHa5zvZ1oIIBXo0DIQJKoFRw",
  },

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://arkansasgeek.com",
    siteName: "Arkansas Geek",
    title:
      "Arkansas Geek | Computer Repair & Air-Cooled VW Repair Near Hot Springs & Malvern",
    description:
      "Computer repair, PC troubleshooting, hardware upgrades, and air-cooled Volkswagen repair help for Hot Springs, Malvern, Arkadelphia, and surrounding Arkansas areas.",
    images: [
      {
        url: "/images/pc-1.jpg",
        width: 1200,
        height: 630,
        alt: "Arkansas Geek computer repair and air-cooled Volkswagen repair in Arkansas",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Arkansas Geek | Computer Repair & Air-Cooled VW Repair Near Hot Springs & Malvern",
    description:
      "Computer repair, PC troubleshooting, hardware upgrades, and air-cooled Volkswagen repair help for Hot Springs, Malvern, Arkadelphia, and surrounding Arkansas areas.",
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