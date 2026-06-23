"use client";

import { useState } from "react";
import { FaArrowRight, FaEnvelope } from "react-icons/fa6";

type FormState = "idle" | "sending" | "sent" | "error";

export default function RepairRequestForm() {
  const [state, setState] = useState<FormState>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState("sending");
    setMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("/api/repair-request", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Request failed");
      }

      form.reset();
      setState("sent");
      setMessage("Request sent. Arkansas Geek will follow up after reviewing the details.");
    } catch {
      setState("error");
      setMessage(
        "The form did not send. Please email Arkansas Geek directly with the same details."
      );
    }
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-5">
      <div className="grid gap-5 md:grid-cols-2">
        <label className="grid gap-2">
          <span className="font-mono-custom text-xs font-black uppercase tracking-[0.14em] text-[var(--amber-soft)]">
            Name
          </span>
          <input
            required
            name="name"
            className="rounded-2xl border border-[var(--line)] bg-[rgba(244,239,227,0.055)] px-4 py-3 text-[var(--cream)] outline-none transition placeholder:text-[var(--muted)] focus:border-[var(--amber-soft)]/55"
            placeholder="Your name"
          />
        </label>

        <label className="grid gap-2">
          <span className="font-mono-custom text-xs font-black uppercase tracking-[0.14em] text-[var(--amber-soft)]">
            Email
          </span>
          <input
            required
            type="email"
            name="email"
            className="rounded-2xl border border-[var(--line)] bg-[rgba(244,239,227,0.055)] px-4 py-3 text-[var(--cream)] outline-none transition placeholder:text-[var(--muted)] focus:border-[var(--amber-soft)]/55"
            placeholder="you@example.com"
          />
        </label>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <label className="grid gap-2">
          <span className="font-mono-custom text-xs font-black uppercase tracking-[0.14em] text-[var(--amber-soft)]">
            Phone optional
          </span>
          <input
            name="phone"
            className="rounded-2xl border border-[var(--line)] bg-[rgba(244,239,227,0.055)] px-4 py-3 text-[var(--cream)] outline-none transition placeholder:text-[var(--muted)] focus:border-[var(--amber-soft)]/55"
            placeholder="Best number if a call helps"
          />
        </label>

        <label className="grid gap-2">
          <span className="font-mono-custom text-xs font-black uppercase tracking-[0.14em] text-[var(--amber-soft)]">
            Request type
          </span>
          <select
            required
            name="requestType"
            className="rounded-2xl border border-[var(--line)] bg-[#151a18] px-4 py-3 text-[var(--cream)] outline-none transition focus:border-[var(--amber-soft)]/55"
            defaultValue=""
          >
            <option value="" disabled>
              Choose one
            </option>
            <option value="Computer repair">Computer repair</option>
            <option value="Air-cooled VW repair">Air-cooled VW repair</option>
            <option value="General question">General question</option>
          </select>
        </label>
      </div>

      <label className="grid gap-2">
        <span className="font-mono-custom text-xs font-black uppercase tracking-[0.14em] text-[var(--amber-soft)]">
          Equipment, computer, or vehicle
        </span>
        <input
          required
          name="equipment"
          className="rounded-2xl border border-[var(--line)] bg-[rgba(244,239,227,0.055)] px-4 py-3 text-[var(--cream)] outline-none transition placeholder:text-[var(--muted)] focus:border-[var(--amber-soft)]/55"
          placeholder="Example: desktop PC, laptop, Beetle, Bus, etc."
        />
      </label>

      <label className="grid gap-2">
        <span className="font-mono-custom text-xs font-black uppercase tracking-[0.14em] text-[var(--amber-soft)]">
          What is going on?
        </span>
        <textarea
          required
          name="issue"
          rows={5}
          className="resize-none rounded-2xl border border-[var(--line)] bg-[rgba(244,239,227,0.055)] px-4 py-3 text-[var(--cream)] outline-none transition placeholder:text-[var(--muted)] focus:border-[var(--amber-soft)]/55"
          placeholder="Tell me what you have, what you want to do, what changed, and what questions you have."
        />
      </label>

      <label className="grid gap-2">
        <span className="font-mono-custom text-xs font-black uppercase tracking-[0.14em] text-[var(--amber-soft)]">
          What have you already tried?
        </span>
        <textarea
          name="tried"
          rows={4}
          className="resize-none rounded-2xl border border-[var(--line)] bg-[rgba(244,239,227,0.055)] px-4 py-3 text-[var(--cream)] outline-none transition placeholder:text-[var(--muted)] focus:border-[var(--amber-soft)]/55"
          placeholder="Any recent parts, error messages, no-boot symptoms, repairs, or troubleshooting already done."
        />
      </label>

      <div className="rounded-[2rem] border border-[var(--line)] bg-[rgba(244,239,227,0.04)] p-5">
        <p className="font-mono-custom text-xs font-black uppercase tracking-[0.14em] text-[var(--green-soft)]">
          Before sending
        </p>
        <p className="mt-3 leading-7 text-[var(--cream-soft)]">
          Do not send passwords, payment details, or sensitive personal files
          through this form. The goal is to understand the equipment and issue
          first so Arkansas Geek can follow up with the right questions.
        </p>
      </div>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <button
          type="submit"
          disabled={state === "sending"}
          className="btn-primary disabled:cursor-not-allowed disabled:opacity-70"
        >
          {state === "sending" ? "Sending..." : "Send Repair Request"}
          <FaArrowRight />
        </button>

        <a href="mailto:arkansasgeekadmin@gmail.com" className="btn-secondary">
          Email Instead
          <FaEnvelope />
        </a>
      </div>

      {message ? (
        <p
          className={`rounded-2xl border px-4 py-3 text-sm font-bold ${
            state === "sent"
              ? "border-[rgba(156,175,136,0.35)] bg-[rgba(156,175,136,0.1)] text-[var(--green-soft)]"
              : "border-[rgba(227,183,111,0.35)] bg-[rgba(198,139,69,0.1)] text-[var(--amber-soft)]"
          }`}
        >
          {message}
        </p>
      ) : null}
    </form>
  );
}
