import type { Metadata } from "next";
import Link from "next/link";
import { FaArrowRight, FaEnvelope } from "react-icons/fa6";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { siteEmail, siteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy",
  description:
    "How Arkansas Geek handles repair request information and basic website analytics.",
  alternates: { canonical: "/privacy" },
  robots: { index: true, follow: true },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": siteUrl + "/privacy#webpage",
  url: siteUrl + "/privacy",
  name: "Arkansas Geek Privacy",
  isPartOf: { "@id": siteUrl + "/#website" },
  about: { "@id": siteUrl + "/#business" },
};

export default function PrivacyPage() {
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
            <div className="max-w-5xl">
              <div className="eyebrow">Privacy</div>
              <h1 className="display-title mt-6">
                Repair details are for handling your request.
              </h1>
              <p className="lead mt-7">
                Arkansas Geek keeps the repair form simple. This page explains
                what the current site collects, why it is collected, and the
                services used to deliver the site and your message.
              </p>
            </div>
          </div>
        </section>

        <section className="border-y border-[var(--line)] bg-[rgba(244,239,227,0.025)] py-20 md:py-28">
          <div className="container-custom">
            <div className="grid gap-5 lg:grid-cols-2">
              <article className="fresh-panel p-7">
                <p className="font-mono-custom text-xs font-black uppercase tracking-[0.14em] text-[var(--green-soft)]">
                  Repair requests
                </p>
                <h2 className="font-heading mt-4 text-3xl font-black tracking-[-0.055em] text-[var(--cream)]">
                  What the form asks for
                </h2>
                <p className="mt-4 leading-8 text-[var(--cream-soft)]">
                  The repair form asks for your name, email address, optional
                  phone number, request type, equipment or vehicle information,
                  a description of the issue, and anything you have already
                  tried.
                </p>
              </article>

              <article className="fresh-panel p-7">
                <p className="font-mono-custom text-xs font-black uppercase tracking-[0.14em] text-[var(--green-soft)]">
                  Purpose
                </p>
                <h2 className="font-heading mt-4 text-3xl font-black tracking-[-0.055em] text-[var(--cream)]">
                  Why that information is used
                </h2>
                <p className="mt-4 leading-8 text-[var(--cream-soft)]">
                  The information is used to review the repair request, ask
                  follow-up questions, decide whether the work is a fit, and
                  contact you about the request.
                </p>
              </article>

              <article className="fresh-panel p-7">
                <p className="font-mono-custom text-xs font-black uppercase tracking-[0.14em] text-[var(--blue-soft)]">
                  Form delivery
                </p>
                <h2 className="font-heading mt-4 text-3xl font-black tracking-[-0.055em] text-[var(--cream)]">
                  Requests are delivered by email
                </h2>
                <p className="mt-4 leading-8 text-[var(--cream-soft)]">
                  The current site sends repair requests through Resend to the
                  Arkansas Geek business email. The current site code does not
                  save repair-request submissions in a separate website
                  database.
                </p>
              </article>

              <article className="fresh-panel p-7">
                <p className="font-mono-custom text-xs font-black uppercase tracking-[0.14em] text-[var(--blue-soft)]">
                  Website analytics
                </p>
                <h2 className="font-heading mt-4 text-3xl font-black tracking-[-0.055em] text-[var(--cream)]">
                  Basic site usage is measured
                </h2>
                <p className="mt-4 leading-8 text-[var(--cream-soft)]">
                  Arkansas Geek uses Vercel Analytics and Vercel hosting to
                  operate the site and understand basic website usage. Those
                  services may process technical information needed to deliver
                  and measure the site.
                </p>
              </article>
            </div>

            <div className="surface mt-8 p-7 sm:p-10">
              <p className="font-mono-custom text-xs font-black uppercase tracking-[0.14em] text-[var(--amber-soft)]">
                Please do not send sensitive information
              </p>
              <h2 className="font-heading mt-4 text-4xl font-black tracking-[-0.06em] text-[var(--cream)]">
                No passwords, payment details, or sensitive personal files.
              </h2>
              <p className="mt-5 max-w-3xl leading-8 text-[var(--cream-soft)]">
                The repair form is for describing the equipment, vehicle, and
                problem. If you need to ask a privacy question or request that a
                repair-request email be addressed, contact Arkansas Geek
                directly.
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <a href={"mailto:" + siteEmail} className="btn-primary">
                  Email Arkansas Geek
                  <FaEnvelope />
                </a>
                <Link href="/repair-request" className="btn-secondary">
                  Repair Request
                  <FaArrowRight />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
