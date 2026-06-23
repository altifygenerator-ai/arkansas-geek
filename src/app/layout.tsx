import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://arkansasgeek.com"),

  title: {
    default:
      "Arkansas Geek | Computer Repair & Air-Cooled VW Help in Arkansas",
    template: "%s | Arkansas Geek",
  },

  description:
    "Arkansas Geek provides computer repair, hardware troubleshooting, repair request intake, and case-by-case air-cooled Volkswagen help for smaller jobs and maintenance-type work in Arkansas.",

  keywords: [
    "Arkansas Geek",
    "computer repair Arkansas",
    "computer repair Hot Springs AR",
    "computer repair Malvern AR",
    "PC repair Hot Springs Arkansas",
    "PC repair Malvern Arkansas",
    "computer troubleshooting Arkansas",
    "hardware repair Arkansas",
    "computer upgrades Arkansas",
    "desktop repair Arkansas",
    "laptop repair Arkansas",
    "remote computer troubleshooting Arkansas",
    "repair request Arkansas Geek",
    "air cooled Volkswagen repair Arkansas",
    "air cooled VW repair Arkansas",
    "classic VW repair Arkansas",
    "VW brake repair Arkansas",
    "VW suspension repair Arkansas",
    "computer repair Arkadelphia AR",
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
    title: "Arkansas Geek | Computer Repair & Air-Cooled VW Help in Arkansas",
    description:
      "Computer repair, hardware troubleshooting, repair request intake, and case-by-case air-cooled Volkswagen help for smaller jobs and maintenance-type work.",
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
    title: "Arkansas Geek | Computer Repair & Air-Cooled VW Help in Arkansas",
    description:
      "Computer repair, hardware troubleshooting, repair request intake, and case-by-case air-cooled Volkswagen help for smaller jobs.",
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
