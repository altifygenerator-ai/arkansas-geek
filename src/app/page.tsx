import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ServiceSplit from "@/components/ServiceSplit";
import WhyArkansasGeek from "@/components/WhyArkansasGeek";
import ExperienceSection from "@/components/ExperienceSection";
import ContactCTA from "@/components/ContactCTA";
import StickyContactButton from "@/components/StickyContactButton";
import Footer from "@/components/Footer";

const homeSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Arkansas Geek",
  url: "https://arkansasgeek.com",
  email: "arkansasgeekadmin@gmail.com",
  description:
    "Arkansas Geek offers computer repair, hardware troubleshooting, repair requests, and case-by-case air-cooled Volkswagen help for smaller jobs and maintenance-type work.",
  priceRange: "$55/hr labor, quotes vary by job",
  sameAs: ["https://www.facebook.com/share/1BCnj1ZdVn/?mibextid=wwXIfr"],
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
};

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
        <ContactCTA />
      </main>
      <Footer />
      <StickyContactButton />
    </>
  );
}
