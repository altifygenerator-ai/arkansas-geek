import type { Metadata } from "next";
import Link from "next/link";
import { FaArrowRight, FaEnvelope, FaWrench } from "react-icons/fa6";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Air-Cooled Volkswagen Repair",
  description:
    "Air-cooled Volkswagen repair help through Arkansas Geek. Labor is typically $55/hr, with quotes based on the vehicle and job details.",
  alternates: {
    canonical: "/air-cooled-volkswagen-repair",
  },
  openGraph: {
    title: "Air-Cooled Volkswagen Repair | Arkansas Geek",
    description:
      "Case-by-case air-cooled Volkswagen repair help. Labor is typically $55/hr, with quotes based on the vehicle and job details.",
    url: "https://arkansasgeek.com/air-cooled-volkswagen-repair",
    type: "website",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Arkansas Geek air-cooled Volkswagen repair",
      },
    ],
  },
};
const volkswagenRepairSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Air-Cooled Volkswagen Repair",
  serviceType: "Air-cooled Volkswagen repair",
  provider: {
    "@type": "LocalBusiness",
    name: "Arkansas Geek",
    url: "https://arkansasgeek.com",
    email: "arkansasgeekadmin@gmail.com",
  },
  areaServed: {
    "@type": "State",
    name: "Arkansas",
  },
  description:
    "Case-by-case air-cooled Volkswagen repair help for smaller jobs, minor repair needs, brake-related work, suspension-related work, and maintenance-type questions. Labor is typically $55/hr, with quotes based on the vehicle and job details.",
  offers: {
    "@type": "Offer",
    priceSpecification: {
      "@type": "UnitPriceSpecification",
      price: 55,
      priceCurrency: "USD",
      unitText: "HOUR",
    },
    description:
      "Labor is typically $55/hr. Final cost depends on the vehicle, issue, parts needed, and job details.",
  },
};

const infoBlocks = [
  {
    label: "01 / Case-by-case",
    title: "Air-cooled VW work is handled case by case.",
    text: "This side of Arkansas Geek is best started by email. Send the vehicle details, what is going on, and what you are hoping to have looked at. Labor is typically $55/hr, but the job needs to be reviewed before giving a better quote.",
  },
  {
    label: "02 / Smaller repair work",
    title: "Focused on smaller jobs and maintenance-type work.",
    text: "The Volkswagen side is better suited for minor repairs, brake-related work, suspension-related work, and smaller air-cooled VW needs. Major engine rebuilds and large restoration projects are not the focus right now.",
  },
  {
    label: "03 / What to send",
    title: "Start with the basic VW details.",
    text: "Include the year, model, current issue, whether the vehicle runs, any recent work done, and photos if they help explain the problem. The more context you send, the easier it is to know if the job makes sense and what it may take.",
  },
];

export default function AirCooledVolkswagenRepairPage() {
  return (
    <div className="vw-theme">
      <Header />

      <main>
        <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify(volkswagenRepairSchema),
  }}
/>
        <section className="relative min-h-screen overflow-hidden">
          <img
            src="/images/bug-1.jpg"
            alt=""
            className="absolute inset-0 h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-[rgba(13,17,16,0.96)] via-[rgba(13,17,16,0.62)] to-[rgba(13,17,16,0.24)]" />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg)] via-transparent to-[rgba(13,17,16,0.74)]" />
          <div className="absolute inset-0 garage-lines opacity-30" />

          <div className="container-custom relative z-10 flex min-h-screen items-end pb-16 pt-32">
            <div className="grid w-full gap-10 lg:grid-cols-[1fr_0.72fr] lg:items-end">
              <div>
                <div className="eyebrow">Air-Cooled Volkswagen Repair</div>

                <h1 className="display-title mt-6 max-w-5xl">
                  Air-cooled VW help, case by case.
                </h1>

                <p className="lead mt-7">
                  The Volkswagen side of Arkansas Geek is a specialty lane for
                  air-cooled VW questions and smaller repair needs. Labor is
                  typically $55/hr, but VW work is reviewed case by case so the
                  quote matches the actual job.
                </p>

                <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                  <a href="mailto:arkansasgeekadmin@gmail.com" className="btn-primary">
                    Email About VW Repair
                    <FaEnvelope />
                  </a>

                  <Link href="/" className="btn-secondary">
                    Back to Home
                    <FaArrowRight />
                  </Link>
                </div>
              </div>

              <div className="relative hidden lg:block">
                <div className="rotate-[-2deg] border border-[var(--page-accent-soft)]/35 bg-[rgba(13,17,16,0.82)] p-6 shadow-[var(--shadow-soft)] backdrop-blur-xl">
                  <p className="font-mono-custom text-xs font-black uppercase tracking-[0.16em] text-[var(--page-accent-soft)]">
                    Specialty lane
                  </p>

                  <h2 className="font-heading mt-4 text-4xl font-black tracking-[-0.06em] text-[var(--cream)]">
                    Specialty work, not a full repair shop.
                  </h2>

                  <p className="mt-4 leading-8 text-[var(--cream-soft)]">
                    This page gives the air-cooled Volkswagen work a clear home
                    while keeping it honest: smaller jobs may be considered, but
                    major rebuilds and large restoration projects are not the
                    focus right now.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden border-y border-[var(--line)] bg-[rgba(244,239,227,0.025)]">
          <div className="grid lg:grid-cols-[0.42fr_0.58fr]">
            <div className="relative min-h-[34rem] border-b border-[var(--line)] lg:border-b-0 lg:border-r">
              <img
                src="/images/bug-2.jpg"
                alt=""
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-[rgba(13,17,16,0.38)]" />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg)] via-transparent to-transparent" />

              <div className="absolute bottom-8 left-8 right-8">
                <p className="font-mono-custom text-xs font-black uppercase tracking-[0.16em] text-[var(--page-accent-soft)]">
                  VW Photo Area
                </p>

                <h2 className="font-heading mt-3 text-4xl font-black tracking-[-0.06em] text-[var(--cream)]">
                  Real Volkswagen photos can carry this page.
                </h2>
              </div>
            </div>

            <div className="garage-lines p-6 sm:p-10 lg:p-14">
              <div className="max-w-3xl">
                <p className="font-mono-custom text-xs font-black uppercase tracking-[0.16em] text-[var(--page-accent-soft)]">
                  Case-by-case VW work
                </p>

                <h2 className="font-heading mt-4 text-5xl font-black tracking-[-0.065em] text-[var(--cream)] md:text-6xl">
                  Smaller air-cooled VW work can start with an email.
                </h2>

                <p className="mt-6 leading-8 text-[var(--cream-soft)]">
                  VW repair is reviewed case by case. Good fit examples may
                  include minor repair needs, brake or suspension-related
                  questions, and smaller maintenance-type work. Labor is
                  typically $55/hr, but details matter before giving a solid
                  quote.
                </p>
              </div>

              <div className="mt-12 border-t border-[var(--line)]">
                <div className="grid gap-8 border-b border-[var(--line)] py-8 md:grid-cols-[0.35fr_0.65fr]">
                  <p className="font-mono-custom text-xs font-black uppercase tracking-[0.16em] text-[var(--page-accent-soft)]">
                    Contact method
                  </p>
                  <p className="text-2xl font-black tracking-[-0.03em] text-[var(--cream)]">
                    Email first with vehicle details
                  </p>
                </div>

                <div className="grid gap-8 border-b border-[var(--line)] py-8 md:grid-cols-[0.35fr_0.65fr]">
                  <p className="font-mono-custom text-xs font-black uppercase tracking-[0.16em] text-[var(--page-accent-soft)]">
                    Rate
                  </p>
                  <p className="text-2xl font-black tracking-[-0.03em] text-[var(--cream)]">
                    Typically $55/hr labor, with a better quote after details
                  </p>
                </div>

                <div className="grid gap-8 border-b border-[var(--line)] py-8 md:grid-cols-[0.35fr_0.65fr]">
                  <p className="font-mono-custom text-xs font-black uppercase tracking-[0.16em] text-[var(--page-accent-soft)]">
                    Best fit
                  </p>
                  <p className="text-2xl font-black tracking-[-0.03em] text-[var(--cream)]">
                    Minor repairs, brakes, suspension, and smaller jobs
                  </p>
                </div>

                <div className="grid gap-8 py-8 md:grid-cols-[0.35fr_0.65fr]">
                  <p className="font-mono-custom text-xs font-black uppercase tracking-[0.16em] text-[var(--page-accent-soft)]">
                    Not the focus
                  </p>
                  <p className="text-2xl font-black tracking-[-0.03em] text-[var(--cream)]">
                    No major rebuilds or large projects right now
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 md:py-32">
          <div className="container-custom">
            <div className="mb-16 max-w-4xl">
              <div className="eyebrow">Garage Notes</div>

              <h2 className="section-title mt-5">
                A simple way to ask about VW work.
              </h2>

              <p className="lead mt-6">
                This side is intentionally more case-by-case. Send the vehicle
                details first, and Arkansas Geek can review whether the job is a
                good fit and give a more realistic idea of cost.
              </p>
            </div>

            <div className="border-y border-[var(--line)]">
              {infoBlocks.map((item) => (
                <div
                  key={item.label}
                  className="grid gap-8 border-b border-[var(--line)] py-12 last:border-b-0 lg:grid-cols-[0.28fr_0.72fr]"
                >
                  <div>
                    <p className="font-mono-custom text-xs font-black uppercase tracking-[0.16em] text-[var(--page-accent-soft)]">
                      {item.label}
                    </p>
                  </div>

                  <div className="grid gap-8 md:grid-cols-[0.55fr_0.45fr] md:items-start">
                    <h3 className="font-heading text-4xl font-black tracking-[-0.06em] text-[var(--cream)] md:text-5xl">
                      {item.title}
                    </h3>

                    <p className="leading-8 text-[var(--cream-soft)]">
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden border-y border-[var(--line)]">
          <div className="grid md:grid-cols-3">
            <div className="relative h-[28rem] overflow-hidden border-b border-[var(--line)] md:border-b-0 md:border-r">
              <img
                src="/images/bug-3.jpg"
                alt=""
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-[rgba(13,17,16,0.3)]" />
            </div>

            <div className="relative h-[28rem] overflow-hidden border-b border-[var(--line)] md:border-b-0 md:border-r">
              <img
                src="/images/bug-4.jpg"
                alt=""
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-[rgba(13,17,16,0.3)]" />
            </div>

            <div className="relative h-[28rem] overflow-hidden">
              <img
                src="/images/bug-5.jpg"
                alt=""
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-[rgba(13,17,16,0.3)]" />
            </div>
          </div>
        </section>

        <section className="py-24 md:py-32">
          <div className="container-custom">
            <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-center">
              <div>
                <div className="grid h-20 w-20 place-items-center rounded-full border border-[var(--page-accent-soft)]/35 bg-[var(--page-accent-muted)] text-2xl text-[var(--page-accent-soft)]">
                  <FaWrench />
                </div>
              </div>

              <div>
                <p className="font-mono-custom text-xs font-black uppercase tracking-[0.16em] text-[var(--page-accent-soft)]">
                  Email contact
                </p>

                <h2 className="font-heading mt-4 max-w-4xl text-5xl font-black tracking-[-0.065em] text-[var(--cream)] md:text-7xl">
                  Ask about VW work by email.
                </h2>

                <p className="mt-6 max-w-2xl leading-8 text-[var(--cream-soft)]">
                  Send the year, model, issue, photos if helpful, and what you
                  are hoping to have looked at. Labor is typically $55/hr, but
                  Volkswagen repair is reviewed case by case before giving a
                  better quote.
                </p>

                <a href="mailto:arkansasgeekadmin@gmail.com" className="btn-primary mt-8">
                  arkansasgeekadmin@gmail.com
                  <FaEnvelope />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}