import type { Metadata } from "next";
import Link from "next/link";
import { FaArrowRight, FaEnvelope, FaTerminal } from "react-icons/fa6";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Computer Repair",
  description:
    "Hardware-focused computer repair, troubleshooting, upgrades, builds, and repair request intake through Arkansas Geek.",
};

const computerRepairSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Computer Repair",
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
    "Hardware-focused computer repair, troubleshooting, upgrades, builds, and repair questions. Requests should start with equipment details so the issue can be reviewed first.",
  offers: {
    "@type": "Offer",
    priceSpecification: {
      "@type": "UnitPriceSpecification",
      price: 55,
      priceCurrency: "USD",
      unitText: "HOUR",
    },
    description:
      "Labor is typically $55/hr. Final cost depends on the computer, issue, parts needed, and job details.",
  },
};

const statusItems = [
  { label: "Page Type", value: "Computer Repair" },
  { label: "Focus", value: "Hardware & Troubleshooting" },
  { label: "Rate", value: "$55/hr Labor" },
  { label: "Next Step", value: "Start With The Form" },
];

const intakeRows = [
  {
    number: "01",
    title: "Hardware-focused computer repair",
    text: "Arkansas Geek handles practical computer repair, hardware issues, troubleshooting, upgrades, replacement parts, builds, and general repair questions. The goal is to understand what is actually going on before money is spent on the wrong fix.",
  },
  {
    number: "02",
    title: "What to include in the request",
    text: "Send the type of computer, what problem you are having, when it started, any error messages or symptoms, and whether anything was recently changed, upgraded, replaced, or unplugged.",
  },
  {
    number: "03",
    title: "A quick follow-up may save a visit",
    text: "Some issues can be narrowed down with a few questions or a short call before scheduling anything. Labor is typically $55/hr, but the details decide whether it is a quick answer, a parts issue, or a repair job.",
  },
];

export default function ComputerRepairPage() {
  return (
    <div className="pc-theme">
      <Header />

      <main>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(computerRepairSchema),
          }}
        />
        <section className="relative min-h-screen overflow-hidden pt-32">
          <div className="absolute inset-0 -z-30">
            <div className="absolute inset-0 diagnostic-grid opacity-70" />
            <div className="absolute left-[-12rem] top-20 h-[34rem] w-[34rem] rounded-full bg-[var(--page-accent-glow)] blur-[110px]" />
            <div className="absolute right-[-14rem] top-36 h-[34rem] w-[34rem] rounded-full bg-[var(--page-accent-muted-strong)] blur-[120px]" />
            <div className="absolute bottom-[-18rem] left-1/2 h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-[var(--page-secondary-glow)] blur-[120px]" />
          </div>

          <div className="container-custom min-h-[calc(100vh-8rem)] pb-20">
            <div className="grid min-h-[calc(100vh-14rem)] items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
              <div>
                <div className="eyebrow">Computer Repair</div>

                <h1 className="display-title mt-6 max-w-4xl">
                  Hardware-focused computer repair.
                </h1>

                <p className="lead mt-7">
                  Arkansas Geek offers computer repair and troubleshooting with
                  a focus on hardware-related issues, builds, upgrades, and
                  practical questions. Start with the repair form so the problem
                  can be understood before anything is scheduled.
                </p>

                <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                  <Link href="/repair-request" className="btn-primary">
                    Start a Repair Request
                    <FaArrowRight />
                  </Link>

                  <a href="mailto:arkansasgeekadmin@gmail.com" className="btn-secondary">
                    Email About Computer Repair
                    <FaEnvelope />
                  </a>
                </div>
              </div>

              <div className="relative">
                <div className="absolute -right-7 top-8 hidden h-[82%] w-36 overflow-hidden rounded-[2rem] border border-[var(--page-accent-soft)]/25 opacity-75 shadow-[var(--shadow-soft)] lg:block">
                  <img
                    src="/images/pc-1.jpg"
                    alt=""
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-[rgba(13,17,16,0.38)]" />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/70" />
                  <div className="absolute inset-0 bg-[var(--page-accent-muted)]" />
                </div>

                <div className="relative z-10 overflow-hidden rounded-[2.75rem] border border-[var(--page-accent-soft)]/25 bg-[rgba(13,17,16,0.78)] shadow-[var(--shadow-soft)] backdrop-blur-xl">
                  <div className="flex items-center justify-between border-b border-[var(--line)] bg-[var(--page-accent-muted)] px-5 py-4">
                    <div className="flex items-center gap-2">
                      <span className="h-3 w-3 rounded-full bg-[var(--page-accent-soft)]" />
                      <span className="h-3 w-3 rounded-full bg-[var(--page-secondary)]" />
                      <span className="h-3 w-3 rounded-full bg-[var(--cream-soft)]" />
                    </div>

                    <p className="font-mono-custom text-[0.68rem] font-black uppercase tracking-[0.16em] text-[var(--muted)]">
                      arkansas-geek / pc-info
                    </p>
                  </div>

                  <div className="p-6 sm:p-8">
                    <div className="mb-8 flex items-start justify-between gap-6">
                      <div>
                        <p className="font-mono-custom text-xs font-black uppercase tracking-[0.16em] text-[var(--page-accent-soft)]">
                          Repair Intake
                        </p>

                        <h2 className="font-heading mt-3 text-4xl font-black tracking-[-0.06em] text-[var(--cream)]">
                          Start with the issue.
                        </h2>
                      </div>

                      <div className="hidden h-14 w-14 place-items-center rounded-2xl border border-[var(--page-accent-soft)]/25 bg-[var(--page-accent-muted)] text-[var(--page-accent-soft)] sm:grid">
                        <FaTerminal />
                      </div>
                    </div>

                    <div className="space-y-4 font-mono-custom text-sm">
                      <p className="text-[var(--page-secondary)]">
                        &gt; computer repair lane active...
                      </p>

                      <p className="text-[var(--cream-soft)]">
                        focus: hardware repair, troubleshooting, upgrades, and
                        builds
                      </p>

                      <p className="text-[var(--cream-soft)]">
                        first step: send equipment and issue details
                      </p>

                      <p className="text-[var(--page-accent-soft)]">
                        rate: typically $55/hr labor after the job is reviewed
                      </p>
                    </div>

                    <div className="mt-8 h-px bg-[var(--line)]" />

                    <div className="mt-8 grid gap-3">
                      {statusItems.map((item) => (
                        <div
                          key={item.label}
                          className="grid gap-2 border-b border-[var(--line)] pb-3 last:border-b-0 last:pb-0 sm:grid-cols-[0.42fr_0.58fr]"
                        >
                          <p className="font-mono-custom text-[0.7rem] font-black uppercase tracking-[0.14em] text-[var(--muted)]">
                            {item.label}
                          </p>

                          <p className="font-bold text-[var(--cream)]">
                            {item.value}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="absolute -bottom-5 -right-5 z-20 hidden rounded-3xl border border-[var(--page-accent-soft)]/25 bg-[rgba(13,17,16,0.9)] px-5 py-4 shadow-[var(--shadow-soft)] backdrop-blur-xl md:block">
                  <p className="font-mono-custom text-[0.68rem] font-black uppercase tracking-[0.14em] text-[var(--page-secondary)]">
                    questions first
                  </p>

                  <p className="mt-1 font-heading text-xl font-black tracking-[-0.04em] text-[var(--cream)]">
                    Details before a visit
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-[var(--line)] bg-[var(--page-accent-muted)]">
          <div className="container-custom">
            <div className="grid border-x border-[var(--line)] lg:grid-cols-4">
              {statusItems.map((item) => (
                <div
                  key={item.label}
                  className="border-b border-[var(--line)] p-6 lg:border-b-0 lg:border-r lg:last:border-r-0"
                >
                  <p className="font-mono-custom text-[0.68rem] font-black uppercase tracking-[0.14em] text-[var(--page-accent-soft)]">
                    {item.label}
                  </p>

                  <p className="mt-2 font-heading text-2xl font-black tracking-[-0.05em] text-[var(--cream)]">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-b border-[var(--line)]">
          <div className="container-custom py-10 md:py-14">
            <div className="relative h-[22rem] overflow-hidden rounded-[2.75rem] border border-[var(--page-accent-soft)]/25 shadow-[var(--shadow-soft)] md:h-[26rem]">
              <img
                src="/images/pc-2.jpg"
                alt=""
                className="h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-r from-[rgba(13,17,16,0.9)] via-[rgba(13,17,16,0.38)] to-[rgba(13,17,16,0.76)]" />
              <div className="absolute inset-0 diagnostic-grid opacity-30" />
              <div className="absolute inset-0 bg-[var(--page-accent-muted)]" />

              <div className="absolute left-6 top-6 rounded-full border border-[var(--page-accent-soft)]/25 bg-[rgba(13,17,16,0.72)] px-4 py-2 backdrop-blur-md">
                <p className="font-mono-custom text-[0.68rem] font-black uppercase tracking-[0.14em] text-[var(--page-accent-soft)]">
                  Computer Repair Photos
                </p>
              </div>

              <div className="absolute bottom-6 left-6 max-w-2xl pr-6">
                <h2 className="font-heading text-4xl font-black tracking-[-0.06em] text-[var(--cream)] md:text-5xl">
                  Real repair work starts with real troubleshooting.
                </h2>

                <p className="mt-4 max-w-xl leading-8 text-[var(--cream-soft)]">
                  Computer issues are not always obvious from the outside. The
                  right questions can help separate a simple fix from a parts
                  problem, bad connection, failed component, or deeper system
                  issue.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 md:py-32">
          <div className="container-custom">
            <div className="grid gap-14 lg:grid-cols-[0.42fr_0.58fr]">
              <div className="lg:sticky lg:top-32 lg:self-start">
                <div className="eyebrow">Repair Intake</div>

                <h2 className="section-title mt-5">
                  What to send before the repair starts.
                </h2>

                <p className="lead mt-6">
                  The more detail you send up front, the easier it is to point
                  the repair in the right direction. Start with the issue, the
                  computer type, and anything that changed recently.
                </p>

                <Link href="/repair-request" className="btn-primary mt-8">
                  Start Repair Request
                  <FaArrowRight />
                </Link>

                <div className="mt-8 hidden overflow-hidden rounded-[2rem] border border-[var(--page-accent-soft)]/25 shadow-[var(--shadow-soft)] lg:block">
                  <img
                    src="/images/pc-3.jpg"
                    alt=""
                    className="h-72 w-full object-cover"
                  />

                  <div className="border-t border-[var(--line)] bg-[rgba(13,17,16,0.72)] p-5">
                    <p className="font-mono-custom text-[0.7rem] font-black uppercase tracking-[0.14em] text-[var(--page-accent-soft)]">
                      Troubleshooting mindset
                    </p>

                    <p className="mt-2 leading-7 text-[var(--cream-soft)]">
                      Some issues may be narrowed down with a quick follow-up
                      before an in-person visit makes sense.
                    </p>
                  </div>
                </div>
              </div>

              <div className="border-t border-[var(--line)]">
                {intakeRows.map((row) => (
                  <div
                    key={row.number}
                    className="grid gap-5 border-b border-[var(--line)] py-10 md:grid-cols-[0.22fr_0.78fr]"
                  >
                    <p className="font-mono-custom text-sm font-black uppercase tracking-[0.16em] text-[var(--page-accent-soft)]">
                      {row.number}
                    </p>

                    <div>
                      <h3 className="font-heading text-4xl font-black tracking-[-0.06em] text-[var(--cream)]">
                        {row.title}
                      </h3>

                      <p className="mt-4 max-w-2xl leading-8 text-[var(--cream-soft)]">
                        {row.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="pb-24 md:pb-32">
          <div className="container-custom">
            <div className="relative overflow-hidden rounded-[2.75rem] border border-[var(--page-accent-soft)]/25 bg-[var(--page-accent-muted)] p-6 shadow-[var(--shadow-soft)] sm:p-8 lg:p-10">
              <div className="absolute right-0 top-0 h-full w-1/2 bg-[radial-gradient(circle_at_top_right,var(--page-accent-glow),transparent_26rem)]" />

              <div className="relative grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
                <div>
                  <p className="font-mono-custom text-xs font-black uppercase tracking-[0.14em] text-[var(--page-secondary)]">
                    Repair Request
                  </p>

                  <h2 className="font-heading mt-3 text-4xl font-black tracking-[-0.06em] text-[var(--cream)] md:text-6xl">
                    Tell Arkansas Geek what you are working with.
                  </h2>
                </div>

                <div>
                  <p className="max-w-2xl leading-8 text-[var(--cream-soft)]">
                    Use the form to send the equipment type, symptoms, recent
                    changes, and what you want done. Do not send passwords,
                    payment details, or sensitive personal files.
                  </p>

                  <Link href="/repair-request" className="btn-primary mt-8">
                    Start Repair Request
                    <FaArrowRight />
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
