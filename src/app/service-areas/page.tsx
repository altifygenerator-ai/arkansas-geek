import type { Metadata } from "next";
import Link from "next/link";
import { FaArrowRight, FaLocationDot } from "react-icons/fa6";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { serviceAreaPages } from "@/data/seo-content";
import { siteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Computer Repair Service Areas",
  description:
    "Arkansas Geek computer repair service-area information for Hot Springs, Malvern, Arkadelphia, Glenwood, Benton, Little Rock, and Arkansas repair requests.",
  alternates: { canonical: "/service-areas" },
  openGraph: {
    url: "/service-areas",
    title: "Computer Repair Service Areas | Arkansas Geek",
    description:
      "Start a computer repair request from Hot Springs, Malvern, Arkadelphia, Glenwood, Benton, Little Rock, or elsewhere in Arkansas.",
    images: [{ url: "/images/pc-1.jpg", alt: "Arkansas Geek service areas" }],
  },
};

const schema = [
  {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": siteUrl + "/service-areas#webpage",
    url: siteUrl + "/service-areas",
    name: "Arkansas Geek Computer Repair Service Areas",
    isPartOf: { "@id": siteUrl + "/#website" },
    about: { "@id": siteUrl + "/#business" },
  },
  {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: serviceAreaPages.map((area, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: "Computer Repair in " + area.city + ", " + area.state,
      url: siteUrl + "/computer-repair/areas/" + area.slug,
    })),
  },
];

export default function ServiceAreasPage() {
  return (
    <div className="pc-theme">
      <Header />
      <main>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />

        <section className="relative overflow-hidden pt-32 pb-20 md:pb-28">
          <div className="absolute inset-0 -z-20 diagnostic-grid opacity-35" />
          <div className="container-custom">
            <div className="max-w-5xl">
              <div className="eyebrow">Computer Repair Service Areas</div>
              <h1 className="display-title mt-6">
                Arkansas repair requests, with the details checked first.
              </h1>
              <p className="lead mt-7">
                Arkansas Geek lists statewide computer repair coverage and
                specifically targets requests from Hot Springs, Malvern,
                Arkadelphia, Glenwood, Benton, and Little Rock. Location,
                equipment, and job details are reviewed before anything is
                scheduled.
              </p>
            </div>
          </div>
        </section>

        <section className="border-y border-[var(--line)] bg-[rgba(244,239,227,0.025)] py-20">
          <div className="container-custom">
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {serviceAreaPages.map((area) => (
                <Link
                  key={area.slug}
                  href={"/computer-repair/areas/" + area.slug}
                  className="group fresh-panel p-6 transition hover:-translate-y-1 hover:border-[var(--line-strong)] sm:p-7"
                >
                  <div className="grid h-12 w-12 place-items-center rounded-2xl bg-[rgba(95,137,168,0.14)] text-[var(--blue-soft)]">
                    <FaLocationDot />
                  </div>
                  <h2 className="font-heading mt-5 text-3xl font-black tracking-[-0.055em] text-[var(--cream)]">
                    {area.city}, {area.state}
                  </h2>
                  <p className="mt-3 leading-7 text-[var(--cream-soft)]">
                    Computer repair requests for hardware troubleshooting,
                    upgrades, builds, and practical repair questions.
                  </p>
                  <span className="mt-6 inline-flex items-center gap-2 font-black text-[var(--blue-soft)]">
                    View {area.city} page
                    <FaArrowRight className="transition group-hover:translate-x-1" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 md:py-28">
          <div className="container-custom">
            <div className="grid gap-10 lg:grid-cols-[0.45fr_0.55fr]">
              <div>
                <div className="eyebrow">Before You Travel</div>
                <h2 className="section-title mt-5">
                  Do not assume a storefront or appointment from a city page.
                </h2>
              </div>
              <div>
                <p className="lead">
                  These pages make it easier for people in the listed service
                  areas to find the right Arkansas Geek repair information. They
                  are not separate shop locations. Start with the repair form so
                  the issue, location, and next step can be reviewed first.
                </p>
                <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                  <Link href="/repair-request" className="btn-primary">
                    Start Repair Request
                    <FaArrowRight />
                  </Link>
                  <Link href="/computer-repair" className="btn-secondary">
                    Computer Repair Overview
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
