import { FaEnvelope } from "react-icons/fa6";
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
                  Have a repair question?
                </h2>

                <p className="mt-6 max-w-3xl leading-8 text-[var(--cream-soft)]">
                  Email Arkansas Geek with what you need help with. Labor is
                  typically $75/hr, but computer and VW jobs can vary a lot, so
                  send the details first and get a better idea of the work before
                  anything is scheduled.
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                  <a href="mailto:arkansasgeekadmin@gmail.com" className="btn-primary">
                    arkansasgeekadmin@gmail.com
                    <FaEnvelope />
                  </a>

                  <p className="font-mono-custom text-xs font-bold uppercase tracking-[0.14em] text-[var(--muted)]">
                    Send details first
                  </p>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}