import type { Metadata } from "next";
import Link from "next/link";
import { FaArrowRight, FaCircleInfo, FaEnvelope } from "react-icons/fa6";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import RepairRequestForm from "@/components/RepairRequestForm";

export const metadata: Metadata = {
  title: "Repair Request",
  description:
    "Start a computer repair or air-cooled Volkswagen repair request with Arkansas Geek by sending equipment details, issue notes, and follow-up information.",
};

const requestSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Arkansas Geek Repair Request",
  url: "https://arkansasgeek.com/repair-request",
  description:
    "Repair request form for computer repair and case-by-case air-cooled Volkswagen repair through Arkansas Geek.",
};

export default function RepairRequestPage() {
  return (
    <>
      <Header />
      <main>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(requestSchema),
          }}
        />

        <section className="relative overflow-hidden pt-32 pb-24 md:pb-32">
          <div className="absolute inset-0 -z-20 diagnostic-grid opacity-40" />
          <div className="absolute left-[-12rem] top-24 -z-10 h-[34rem] w-[34rem] rounded-full bg-[rgba(198,139,69,0.16)] blur-[110px]" />
          <div className="absolute right-[-14rem] top-40 -z-10 h-[34rem] w-[34rem] rounded-full bg-[rgba(95,137,168,0.14)] blur-[120px]" />

          <div className="container-custom">
            <div className="grid gap-12 lg:grid-cols-[0.45fr_0.55fr] lg:items-start">
              <div className="lg:sticky lg:top-32">
                <div className="eyebrow">Repair Request</div>

                <h1 className="display-title mt-6 max-w-4xl">
                  Start with the details.
                </h1>

                <p className="lead mt-7">
                  Fill out the form with what you have, what is going on, and
                  what you are hoping to get done. A little background up front
                  makes it easier to decide whether the next step is a quick
                  follow-up, remote guidance, or an in-person repair.
                </p>

                <div className="mt-8 grid gap-4">
                  <div className="rounded-[2rem] border border-[var(--line)] bg-[rgba(244,239,227,0.045)] p-5">
                    <div className="flex gap-4">
                      <div className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-[rgba(198,139,69,0.14)] text-[var(--amber-soft)]">
                        <FaCircleInfo />
                      </div>
                      <p className="leading-7 text-[var(--cream-soft)]">
                        Some issues can be narrowed down with a few questions
                        before a visit is needed. The goal is to understand the
                        problem first and avoid unnecessary cost when possible.
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col gap-3 sm:flex-row">
                    <Link href="/computer-repair" className="btn-secondary">
                      Computer Repair
                      <FaArrowRight />
                    </Link>

                    <a href="mailto:arkansasgeekadmin@gmail.com" className="btn-secondary">
                      Email Instead
                      <FaEnvelope />
                    </a>
                  </div>
                </div>
              </div>

              <div className="surface noise-overlay overflow-hidden p-5 sm:p-7">
                <div className="mb-7">
                  <p className="font-mono-custom text-xs font-black uppercase tracking-[0.16em] text-[var(--green-soft)]">
                    What Arkansas Geek needs
                  </p>
                  <h2 className="font-heading mt-3 text-4xl font-black tracking-[-0.06em] text-[var(--cream)]">
                    Equipment, issue, and what has already been tried.
                  </h2>
                  <p className="mt-4 leading-8 text-[var(--cream-soft)]">
                    For computer repair, include the device type and symptoms.
                    For VW work, include the year, model, whether it runs, and
                    what kind of work you are asking about.
                  </p>
                </div>

                <RepairRequestForm />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
