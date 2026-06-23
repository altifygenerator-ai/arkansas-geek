import Link from "next/link";
import { FaArrowRight, FaEnvelope } from "react-icons/fa6";
import FadeIn from "@/components/FadeIn";

export default function ContactCTA() {
  return (
    <section id="contact" className="relative overflow-hidden py-24 md:py-32">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_70%_30%,rgba(198,139,69,0.14),transparent_32rem)]" />

      <div className="container-custom">
        <FadeIn>
          <div className="relative overflow-hidden border-y border-[var(--line)] py-14 md:py-20">
            <div className="absolute inset-0 diagnostic-grid opacity-20" />

            <div className="relative grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-center">
              <div>
                <p className="font-mono-custom text-xs font-black uppercase tracking-[0.16em] text-[var(--amber-soft)]">
                  Next Step
                </p>
              </div>

              <div>
                <h2 className="font-heading text-5xl font-black tracking-[-0.065em] text-[var(--cream)] md:text-7xl">
                  Send the details first.
                </h2>

                <p className="mt-6 max-w-3xl leading-8 text-[var(--cream-soft)]">
                  Start with the repair form so Arkansas Geek can see what
                  equipment you have, what you want done, and what questions
                  need to be answered. Some issues can be narrowed down before a
                  visit, which can save time and avoid unnecessary cost.
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                  <Link href="/repair-request" className="btn-primary">
                    Start a Repair Request
                    <FaArrowRight />
                  </Link>

                  <a href="mailto:arkansasgeekadmin@gmail.com" className="btn-secondary">
                    Email Instead
                    <FaEnvelope />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
