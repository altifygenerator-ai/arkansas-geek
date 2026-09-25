import type { Metadata } from "next";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ServiceSplit from "@/components/ServiceSplit";
import WhyArkansasGeek from "@/components/WhyArkansasGeek";
import ExperienceSection from "@/components/ExperienceSection";
import SiteExpansion from "@/components/SiteExpansion";
import ContactCTA from "@/components/ContactCTA";
import StickyContactButton from "@/components/StickyContactButton";
import Footer from "@/components/Footer";
import { defaultDescription, facebookUrl, siteEmail, siteName, siteUrl } from "@/lib/site";

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
  },
  openGraph: {
    url: "/",
    title: "Arkansas Geek | Computer Repair & Air-Cooled VW Help in Arkansas",
    description: defaultDescription,
  },
};

const homeSchema = [
  {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${siteUrl}/#business`,
    name: siteName,
    url: siteUrl,
    email: siteEmail,
    description:
      "Arkansas Geek offers computer repair, hardware troubleshooting, repair requests, and case-by-case air-cooled Volkswagen help for smaller jobs and maintenance-type work.",
    priceRange: "$55/hr labor, quotes vary by job",
    sameAs: [facebookUrl],
    areaServed: {
      "@type": "State",
      name: "Arkansas",
    },
    makesOffer: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Computer Repair",
          description:
            "Computer repair, hardware troubleshooting, upgrades, builds, and repair questions. Requests should start with the repair form so the equipment and issue can be reviewed first.",
        },
        priceSpecification: {
          "@type": "UnitPriceSpecification",
          price: 55,
          priceCurrency: "USD",
          unitText: "HOUR",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Air-Cooled Volkswagen Repair",
          description:
            "Case-by-case air-cooled Volkswagen repair help for smaller jobs, minor repairs, brakes, suspension, and maintenance-type work. Major rebuilds are not the current focus.",
        },
        priceSpecification: {
          "@type": "UnitPriceSpecification",
          price: 55,
          priceCurrency: "USD",
          unitText: "HOUR",
        },
      },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    name: siteName,
    url: siteUrl,
    publisher: {
      "@id": `${siteUrl}/#business`,
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${siteUrl}/#webpage`,
    url: siteUrl,
    name: "Arkansas Geek | Computer Repair & Air-Cooled VW Help in Arkansas",
    description: defaultDescription,
    isPartOf: {
      "@id": `${siteUrl}/#website`,
    },
    about: {
      "@id": `${siteUrl}/#business`,
    },
  },
];

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(homeSchema),
          }}
        />
        <Hero />
        <ServiceSplit />
        <WhyArkansasGeek />
        <ExperienceSection />
        <SiteExpansion />
        <ContactCTA />
      </main>
      <Footer />
      <StickyContactButton />
    </>
  );
}
