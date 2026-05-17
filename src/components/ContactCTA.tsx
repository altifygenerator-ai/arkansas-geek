"use client";

import { useState } from "react";
import { FaArrowRight, FaEnvelope, FaPhone } from "react-icons/fa6";
import FadeIn from "@/components/FadeIn";
import SectionHeading from "@/components/SectionHeading";

export default function ContactCTA() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle",
  );

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");

    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: formData.get("name"),
      contact: formData.get("contact"),
      serviceType: formData.get("serviceType"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Failed to send");
      }

      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="relative overflow-hidden py-24 md:py-32">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_80%_20%,rgba(198,139,69,0.15),transparent_30rem)]" />

      <div className="container-custom">
        <FadeIn>
          <div className="surface noise-overlay overflow-hidden p-5 sm:p-8 lg:p-10">
            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
              <div>
                <SectionHeading
                  eyebrow="Request Info"
                  title="Send a repair request."
                  text="Use this form to send Arkansas Geek the basic details. Once confirmed, this section can be updated with the exact intake questions, quote process, and appointment details."
                />

                <div className="mt-8 grid gap-3">
               

                  <a
                    href="mailto:Tpindell@gmail.com"
                    className="rounded-[2rem] border border-[var(--line)] bg-[rgba(13,17,16,0.56)] p-5 transition hover:border-[var(--amber)]/45 hover:bg-[rgba(198,139,69,0.08)]"
                  >
                    <p className="font-mono-custom text-xs font-black uppercase tracking-[0.14em] text-[var(--amber-soft)]">
                      Email
                    </p>

                    <div className="mt-3 inline-flex items-center gap-2 text-xl font-black text-[var(--cream)]">
                      <FaEnvelope />
                      Tpindell@gmail.com
                    </div>
                  </a>
                </div>
              </div>

              <form
                onSubmit={handleSubmit}
                className="rounded-[2rem] border border-[var(--line)] bg-[rgba(13,17,16,0.64)] p-5 sm:p-6"
              >
                <div className="mb-6">
                  <p className="font-mono-custom text-xs font-black uppercase tracking-[0.14em] text-[var(--green-soft)]">
                    Quote / Repair Request
                  </p>
                  <h3 className="font-heading mt-2 text-3xl font-black tracking-[-0.06em] text-[var(--cream)]">
                    Tell us what you need help with.
                  </h3>
                </div>

                <div className="grid gap-4">
                  <div>
                    <label className="font-mono-custom text-[0.7rem] font-black uppercase tracking-[0.14em] text-[var(--muted)]">
                      Name
                    </label>
                    <input
                      name="name"
                      required
                      className="mt-2 w-full rounded-2xl border border-[var(--line)] bg-[rgba(244,239,227,0.055)] px-4 py-3 text-[var(--cream)] outline-none transition placeholder:text-[var(--muted)] focus:border-[var(--amber)]/60"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label className="font-mono-custom text-[0.7rem] font-black uppercase tracking-[0.14em] text-[var(--muted)]">
                      Email or Phone
                    </label>
                    <input
                      name="contact"
                      required
                      className="mt-2 w-full rounded-2xl border border-[var(--line)] bg-[rgba(244,239,227,0.055)] px-4 py-3 text-[var(--cream)] outline-none transition placeholder:text-[var(--muted)] focus:border-[var(--amber)]/60"
                      placeholder="Best way to reach you"
                    />
                  </div>

                  <div>
                    <label className="font-mono-custom text-[0.7rem] font-black uppercase tracking-[0.14em] text-[var(--muted)]">
                      Repair Type
                    </label>
                    <select
                      name="serviceType"
                      required
                      className="mt-2 w-full rounded-2xl border border-[var(--line)] bg-[rgba(244,239,227,0.055)] px-4 py-3 text-[var(--cream)] outline-none transition focus:border-[var(--amber)]/60"
                    >
                      <option value="">Choose one</option>
                      <option value="Computer Repair">Computer Repair</option>
                      <option value="Air-Cooled Volkswagen Repair">
                        Air-Cooled Volkswagen Repair
                      </option>
                    </select>
                  </div>

                  <div>
                    <label className="font-mono-custom text-[0.7rem] font-black uppercase tracking-[0.14em] text-[var(--muted)]">
                      Repair Details
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      className="mt-2 w-full resize-none rounded-2xl border border-[var(--line)] bg-[rgba(244,239,227,0.055)] px-4 py-3 text-[var(--cream)] outline-none transition placeholder:text-[var(--muted)] focus:border-[var(--amber)]/60"
                      placeholder="Describe the computer or Volkswagen issue."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="btn-primary mt-2 disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {status === "sending" ? "Sending..." : "Send Request"}
                    <FaArrowRight />
                  </button>

                  {status === "sent" ? (
                    <p className="text-sm font-bold text-[var(--green-soft)]">
                      Request sent.
                    </p>
                  ) : null}

                  {status === "error" ? (
                    <p className="text-sm font-bold text-[var(--amber-soft)]">
                      Message could not be sent. The phone and email links are
                      still available.
                    </p>
                  ) : null}
                </div>
              </form>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}