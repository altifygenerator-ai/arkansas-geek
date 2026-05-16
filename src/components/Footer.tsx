import Link from "next/link";
import { FaEnvelope } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer
      id="contact"
      className="border-t border-[var(--line)] bg-[rgba(13,17,16,0.82)]"
    >
      <div className="container-custom py-12">
        <div className="grid gap-10 md:grid-cols-[1.1fr_0.9fr] md:items-end">
          <div>
            <p className="font-heading text-3xl font-black tracking-[-0.06em] text-[var(--cream)]">
              Arkansas Geek
            </p>

            <p className="mt-4 max-w-xl leading-7 text-[var(--cream-soft)]">
              This website draft is set up for computer repair and air-cooled
              Volkswagen repair. Additional business details, service
              descriptions, pricing notes, and service area information will be
              added once confirmed.
            </p>
          </div>

          <div className="md:text-right">
            <p className="font-mono-custom text-xs font-bold uppercase tracking-[0.14em] text-[var(--amber-soft)]">
              Contact
            </p>

            <a
              href="mailto:Tpindell@gmail.com"
              className="mt-3 inline-flex items-center gap-2 text-lg font-black text-[var(--cream)] transition hover:text-[var(--amber-soft)]"
            >
              <FaEnvelope />
              Tpindell@gmail.com
            </a>

            <div className="mt-6 flex flex-wrap gap-4 md:justify-end">
              <Link
                href="/computer-repair"
                className="font-mono-custom text-xs font-bold uppercase tracking-[0.12em] text-[var(--cream-soft)] transition hover:text-[var(--amber-soft)]"
              >
                Computer Repair
              </Link>

              <Link
                href="/air-cooled-volkswagen-repair"
                className="font-mono-custom text-xs font-bold uppercase tracking-[0.12em] text-[var(--cream-soft)] transition hover:text-[var(--amber-soft)]"
              >
                Air-Cooled VW
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-[var(--line)] pt-6 text-sm text-[var(--muted)] sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Arkansas Geek. All rights reserved.</p>
          <p>Computer Repair · Air-Cooled Volkswagen Repair</p>
        </div>
      </div>
    </footer>
  );
}