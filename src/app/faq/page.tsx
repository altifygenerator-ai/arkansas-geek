import type { Metadata } from "next";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { siteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Computer & VW Repair FAQ",
  description:
    "Answers to common Arkansas Geek questions about computer repair, rates, troubleshooting, repair requests, service areas, and case-by-case air-cooled Volkswagen work.",
  alternates: { canonical: "/faq" },
  openGraph: {
    url: "/faq",
    title: "Computer & VW Repair FAQ | Arkansas Geek",
    description:
      "Common questions about Arkansas Geek computer repair and case-by-case air-cooled Volkswagen work.",
    images: [{ url: "/og-image.jpg", alt: "Arkansas Geek repair FAQ" }],
  },
};

const faqs = [
  {
    question: "What does Arkansas Geek repair?",
    answer:
      "Computer repair is the main service, with a focus on hardware problems, troubleshooting, upgrades, replacement parts, builds, and practical repair questions. Arkansas Geek also considers smaller air-cooled Volkswagen jobs case by case.",
  },
  {
    question: "How much is computer or VW labor?",
    answer:
      "Labor is typically $55 per hour. The final cost depends on the equipment or vehicle, the issue, the amount of troubleshooting needed, and any parts involved.",
  },
  {
    question: "How do I start a repair?",
    answer:
      "Start with the repair request form. Send the device or vehicle, the symptoms, what changed recently, and what has already been tried. Arkansas Geek reviews the details before scheduling anything.",
  },
  {
    question: "Can a computer problem be checked before an in-person visit?",
    answer:
      "Sometimes. Some issues can be narrowed down with a few follow-up questions or a short call. The goal is to avoid unnecessary travel or repair work when the next step can be identified first.",
  },
  {
    question: "What should I include for a computer repair request?",
    answer:
      "Include the computer type, the problem or symptoms, when it started, any error messages, recent changes or upgrades, and anything you have already tried.",
  },
  {
    question: "What should I include for an air-cooled VW request?",
    answer:
      "Include the year, model, whether it runs, the current issue, recent work, what kind of repair you are asking about, and photos if they help explain the condition.",
  },
  {
    question: "Does Arkansas Geek do major VW engine rebuilds or restorations?",
    answer:
      "Major engine rebuilds and large restoration projects are not the current focus. The VW side is aimed at smaller jobs such as minor repairs, brakes, suspension, and maintenance-type work that can be reviewed case by case.",
  },
  {
    question: "What areas does Arkansas Geek serve?",
    answer:
      "The site lists Arkansas generally and specifically targets repair requests from Hot Springs, Malvern, Arkadelphia, Glenwood, Benton, and Little Rock. Location and job details should be reviewed before assuming an appointment or travel plan.",
  },
];

const schema = [
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
      { "@type": "ListItem", position: 2, name: "FAQ", item: siteUrl + "/faq" },
    ],
  },
];

export default function FaqPage() {
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
              <div className="eyebrow">Repair FAQ</div>
              <h1 className="display-title mt-6">
                Clear answers before the repair starts.
              </h1>
              <p className="lead mt-7">
                These are the questions that matter before money, travel, parts,
                or scheduling get involved. If your situation is different,
                send the details through the repair request.
              </p>
            </div>
          </div>
        </section>

        <section className="border-y border-[var(--line)] bg-[rgba(244,239,227,0.025)] py-20">
          <div className="container-custom">
            <div className="grid gap-4">
              {faqs.map((faq, index) => (
                <details
                  key={faq.question}
                  className="group fresh-panel p-6 open:border-[var(--line-strong)] sm:p-7"
                  open={index === 0}
                >
                  <summary className="cursor-pointer list-none font-heading text-2xl font-black tracking-[-0.045em] text-[var(--cream)] marker:hidden">
                    <span className="flex items-start justify-between gap-6">
                      {faq.question}
                      <span className="font-mono-custom text-sm text-[var(--amber-soft)] group-open:rotate-45">
                        +
                      </span>
                    </span>
                  </summary>
                  <p className="mt-5 max-w-4xl leading-8 text-[var(--cream-soft)]">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 md:py-28">
          <div className="container-custom">
            <div className="surface p-7 sm:p-10">
              <p className="font-mono-custom text-xs font-black uppercase tracking-[0.16em] text-[var(--green-soft)]">
                Still not sure?
              </p>
              <h2 className="font-heading mt-4 text-4xl font-black tracking-[-0.06em] text-[var(--cream)] md:text-6xl">
                Send the actual problem.
              </h2>
              <p className="mt-5 max-w-3xl leading-8 text-[var(--cream-soft)]">
                A real repair request is more useful than trying to force your
                situation into a generic FAQ. Send what you have and Arkansas
                Geek can ask the right follow-up questions.
              </p>
              <Link href="/repair-request" className="btn-primary mt-7">
                Start a Repair Request
                <FaArrowRight />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
