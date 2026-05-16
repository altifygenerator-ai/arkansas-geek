import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ServiceSplit from "@/components/ServiceSplit";
import WhyArkansasGeek from "@/components/WhyArkansasGeek";
import ContactCTA from "@/components/ContactCTA";
import StickyContactButton from "@/components/StickyContactButton";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
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