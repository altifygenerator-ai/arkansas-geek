import Link from "next/link";
import { FaEnvelope, FaFacebookF } from "react-icons/fa6";

const facebookUrl = "https://www.facebook.com/share/p/18QY3AYYhk/";

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
              Practical computer repair is the main focus, with air-cooled
              Volkswagen work available on a case-by-case basis for smaller
              repair and maintenance needs.
            </p>
          </div>

          <div className="md:text-right">
            <p className="font-mono-custom text-xs font-bold uppercase tracking-[0.14em] text-[var(--amber-soft)]">
              Contact
            </p>

            <div className="mt-3 flex flex-wrap gap-3 md:justify-end">
              <a
                href="mailto:arkansasgeekadmin@gmail.com"
                className="inline-flex items-center gap-2 rounded-full border border-[var(--line-strong)] bg-[rgba(244,239,227,0.055)] px-4 py-3 text-sm font-black text-[var(--cream)] transition hover:border-[var(--amber)]/50 hover:bg-[rgba(198,139,69,0.12)] hover:text-[var(--amber-soft)]"
              >
                <FaEnvelope />
                arkansasgeekadmin@gmail.com
              </a>

              <a
                href={facebookUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-[var(--line-strong)] bg-[rgba(244,239,227,0.055)] px-4 py-3 text-sm font-black text-[var(--cream)] transition hover:border-[var(--amber)]/50 hover:bg-[rgba(198,139,69,0.12)] hover:text-[var(--amber-soft)]"
                aria-label="Visit Arkansas Geek on Facebook"
              >
                <FaFacebookF />
                Facebook
              </a>
            </div>

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
          <p>Computer Repair · Case-by-case Air-Cooled VW Work</p>
        </div>
      </div>
    </footer>
  );
}