import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ServiceSplit from "@/components/ServiceSplit";
import WhyArkansasGeek from "@/components/WhyArkansasGeek";
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
    "Arkansas Geek offers computer repair and air-cooled Volkswagen repair help. Labor is typically $55/hr, with quotes based on the details of each job.",
  priceRange: "$55/hr labor, quotes vary by job",
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
          "Computer repair, troubleshooting, upgrades, hardware help, and repair questions. Labor is typically $55/hr, with quotes based on job details.",
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
          "Case-by-case air-cooled Volkswagen repair help for smaller jobs and maintenance-type work. Labor is typically $55/hr, with quotes based on vehicle and job details.",
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
        <ContactCTA />
      </main>
      <Footer />
      <StickyContactButton />
    </>
  );
}