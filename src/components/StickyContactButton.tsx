import { FaEnvelope, FaPhone } from "react-icons/fa6";

export default function StickyContactButton() {
  return (
    <a
      href="mailto:Tpindell@gmail.com"
      className="fixed bottom-4 left-1/2 z-50 inline-flex w-[calc(100%-1.25rem)] max-w-sm -translate-x-1/2 items-center justify-center gap-2 rounded-full border border-[rgba(227,183,111,0.45)] bg-gradient-to-br from-[var(--amber)] to-[var(--amber-soft)] px-5 py-4 text-sm font-black text-[#17120b] shadow-[0_16px_55px_rgba(198,139,69,0.32)] transition hover:-translate-y-1 hover:brightness-105 md:bottom-6 md:left-auto md:right-6 md:w-auto md:translate-x-0"
      aria-label="Call Arkansas Geek"
    >
      <FaEnvelope />
      Email
    </a>
  );
}