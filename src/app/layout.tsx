import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import {
  defaultDescription,
  defaultOgImage,
  facebookUrl,
  siteEmail,
  siteName,
  siteUrl,
} from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default:
      "Arkansas Geek | Computer Repair & Air-Cooled VW Help in Arkansas",
    template: "%s | Arkansas Geek",
  },

  description: defaultDescription,

  applicationName: siteName,
  manifest: "/manifest.webmanifest",
  authors: [{ name: siteName }],
  creator: siteName,
  publisher: siteName,
  category: "local business",
  classification:
    "Computer repair, hardware troubleshooting, and case-by-case air-cooled Volkswagen repair help in Arkansas",
  referrer: "origin-when-cross-origin",

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

  verification: {
    google: "dUMjqFNX0KfZ6iJO-7ZFHa5zvZ1oIIBXo0DIQJKoFRw",
  },

  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },

  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName,
    title: "Arkansas Geek | Computer Repair & Air-Cooled VW Help in Arkansas",
    description:
      "Computer repair, hardware troubleshooting, repair request intake, and case-by-case air-cooled Volkswagen help for smaller jobs and maintenance-type work.",
    emails: [siteEmail],
    images: [
      {
        url: defaultOgImage,
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
    images: [defaultOgImage],
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

  other: {
    "contact:email": siteEmail,
    "business:contact_data:email": siteEmail,
    "business:contact_data:website": siteUrl,
    "article:publisher": facebookUrl,
  },
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
