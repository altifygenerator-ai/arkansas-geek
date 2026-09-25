import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  FaArrowRight,
  FaDesktop,
  FaNetworkWired,
  FaShieldHalved,
  FaScrewdriverWrench,
} from "react-icons/fa6";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { siteName, siteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Arkansas Geek, the 24+ years of IT troubleshooting experience behind the computer repair work, and the case-by-case air-cooled Volkswagen specialty side.",
  alternates: { canonical: "/about" },
  openGraph: {
    url: "/about",
    title: "About Arkansas Geek",
    description:
      "Computer repair backed by 24+ years of IT troubleshooting experience, plus a case-by-case air-cooled Volkswagen specialty side.",
    images: [{ url: "/images/pc-3.jpg", alt: "Arkansas Geek computer work" }],
  },
};

const experience = [
  {
    icon: FaDesktop,
    title: "Hardware and systems",
    text:
      "Hands-on experience with computers, servers, operating systems, hardware troubleshooting, testing, upgrades, and the problems that take more than a quick guess.",
  },
  {
    icon: FaNetworkWired,
    title: "Networks and infrastructure",
    text:
      "Background across Windows, Linux, virtualization, networking, backups, migrations, and technical support adds a broader systems mindset to repair work.",
  },
  {
    icon: FaShieldHalved,
    title: "Remote support thinking",
    text:
      "Years of remote troubleshooting reinforce the same habit used on the repair side: ask good questions first and narrow down the problem before adding cost.",
  },
];

const schema = [
  {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "@id": siteUrl + "/about#webpage",
    url: siteUrl + "/about",
    name: "About Arkansas Geek",
    isPartOf: { "@id": siteUrl + "/#website" },
    about: { "@id": siteUrl + "/#business" },
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
      {
        "@type": "ListItem",
        position: 2,
        name: "About",
        item: siteUrl + "/about",
      },
    ],
  },
];

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />

        <section className="relative overflow-hidden pt-32 pb-20 md:pb-28">
          <div className="absolute inset-0 -z-20 diagnostic-grid opacity-30" />
          <div className="container-custom">
            <div className="grid gap-10 lg:grid-cols-[0.55fr_0.45fr] lg:items-center">
              <div>
                <div className="eyebrow">About Arkansas Geek</div>
                <h1 className="display-title mt-6">
                  Repair work built on a long troubleshooting background.
                </h1>
                <p className="lead mt-7">
                  Arkansas Geek puts computer repair first and keeps the
                  air-cooled Volkswagen side honest and case by case. The
                  computer work is backed by more than two decades of IT,
                  systems, network, hardware, and support experience.
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Link href="/computer-repair" className="btn-primary">
                    Computer Repair
                    <FaArrowRight />
                  </Link>
                  <Link
                    href="/air-cooled-volkswagen-repair"
                    className="btn-secondary"
                  >
                    Air-Cooled VW Work
                    <FaArrowRight />
                  </Link>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="surface overflow-hidden p-3 sm:translate-y-8">
                  <div className="relative min-h-[24rem] overflow-hidden rounded-[2rem]">
                    <Image
                      src="/images/pc-3.jpg"
                      alt="Computer troubleshooting and repair work"
                      fill
                      priority
                      sizes="(max-width: 1024px) 50vw, 22vw"
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="surface overflow-hidden p-3">
                  <div className="relative min-h-[24rem] overflow-hidden rounded-[2rem]">
                    <Image
                      src="/images/bug-1.jpg"
                      alt="Air-cooled Volkswagen specialty work"
                      fill
                      sizes="(max-width: 1024px) 50vw, 22vw"
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-[var(--line)] bg-[rgba(244,239,227,0.025)] py-20 md:py-28">
          <div className="container-custom">
            <div className="grid gap-10 lg:grid-cols-[0.4fr_0.6fr]">
              <div>
                <p className="font-mono-custom text-xs font-black uppercase tracking-[0.16em] text-[var(--green-soft)]">
                  Experience
                </p>
                <h2 className="section-title mt-5">24+ years behind the repair mindset.</h2>
                <p className="lead mt-6">
                  The site does not need to pretend every problem has an instant
                  answer. The useful part of deep IT experience is knowing how
                  to narrow a problem down before replacing things at random.
                </p>
              </div>
              <div className="grid gap-5">
                {experience.map((item) => {
                  const Icon = item.icon;
                  return (
                    <article
                      key={item.title}
                      className="fresh-panel grid gap-5 p-6 sm:grid-cols-[auto_1fr] sm:p-7"
                    >
                      <div className="grid h-12 w-12 place-items-center rounded-2xl border border-[var(--line)] bg-[rgba(244,239,227,0.055)] text-[var(--amber-soft)]">
                        <Icon />
                      </div>
                      <div>
                        <h3 className="font-heading text-3xl font-black tracking-[-0.055em] text-[var(--cream)]">
                          {item.title}
                        </h3>
                        <p className="mt-3 leading-8 text-[var(--cream-soft)]">
                          {item.text}
                        </p>
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 md:py-28">
          <div className="container-custom">
            <div className="grid gap-6 lg:grid-cols-2">
              <article className="blue-panel p-7 sm:p-10">
                <p className="font-mono-custom text-xs font-black uppercase tracking-[0.16em] text-[var(--blue-soft)]">
                  Main lane
                </p>
                <h2 className="font-heading mt-4 text-4xl font-black tracking-[-0.06em]">
                  Computer repair and troubleshooting.
                </h2>
                <p className="mt-5 leading-8 text-[var(--cream-soft)]">
                  Hardware issues, troubleshooting, upgrades, replacement parts,
                  builds, and practical repair questions are the center of
                  Arkansas Geek.
                </p>
                <Link href="/computer-repair" className="btn-secondary mt-7">
                  Explore Computer Repair
                  <FaArrowRight />
                </Link>
              </article>

              <article className="fresh-panel p-7 sm:p-10">
                <p className="font-mono-custom text-xs font-black uppercase tracking-[0.16em] text-[var(--amber-soft)]">
                  Specialty lane
                </p>
                <h2 className="font-heading mt-4 text-4xl font-black tracking-[-0.06em]">
                  Air-cooled VW work when the job fits.
                </h2>
                <p className="mt-5 leading-8 text-[var(--cream-soft)]">
                  Smaller repairs, brake-related work, suspension-related work,
                  and maintenance-type jobs may be considered. Major rebuilds
                  and large restoration projects are not the current focus.
                </p>
                <Link
                  href="/air-cooled-volkswagen-repair"
                  className="btn-secondary mt-7"
                >
                  Explore VW Repair
                  <FaArrowRight />
                </Link>
              </article>
            </div>

            <div className="mt-10 text-center">
              <Link href="/repair-request" className="btn-primary">
                Start a Repair Request
                <FaScrewdriverWrench />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
