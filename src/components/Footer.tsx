import Link from "next/link";
import { FaEnvelope, FaFacebookF } from "react-icons/fa6";
import {
  computerServicePages,
  serviceAreaPages,
  vwServicePages,
} from "@/data/seo-content";
import { facebookUrl, siteEmail } from "@/lib/site";

export default function Footer() {
  return (
    <footer
      id="contact"
      className="border-t border-[var(--line)] bg-[rgba(13,17,16,0.9)]"
    >
      <div className="container-custom py-14">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr_0.8fr_0.8fr]">
          <div>
            <p className="font-heading text-3xl font-black tracking-[-0.06em] text-[var(--cream)]">
              Arkansas Geek
            </p>

            <p className="mt-4 max-w-md leading-7 text-[var(--cream-soft)]">
              Computer repair backed by 24+ years of IT troubleshooting
              experience, with air-cooled Volkswagen work handled case by case
              for smaller repair and maintenance needs.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/repair-request"
                className="inline-flex items-center gap-2 rounded-full border border-[rgba(227,183,111,0.45)] bg-gradient-to-br from-[var(--amber)] to-[var(--amber-soft)] px-4 py-3 text-sm font-black text-[#17120b]"
              >
                <FaEnvelope />
                Repair Request
              </Link>
              <a
                href={facebookUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-[var(--line-strong)] bg-[rgba(244,239,227,0.055)] px-4 py-3 text-sm font-black text-[var(--cream)]"
              >
                <FaFacebookF />
                Facebook
              </a>
            </div>
          </div>

          <div>
            <p className="font-mono-custom text-xs font-black uppercase tracking-[0.14em] text-[var(--blue-soft)]">
              Computer Repair
            </p>
            <div className="mt-4 grid gap-3">
              <Link href="/computer-repair" className="text-sm font-bold text-[var(--cream-soft)] hover:text-[var(--cream)]">
                Computer Repair Overview
              </Link>
              {computerServicePages.map((service) => (
                <Link
                  key={service.slug}
                  href={"/computer-repair/services/" + service.slug}
                  className="text-sm text-[var(--muted)] transition hover:text-[var(--cream)]"
                >
                  {service.shortTitle}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="font-mono-custom text-xs font-black uppercase tracking-[0.14em] text-[var(--amber-soft)]">
              Air-Cooled VW
            </p>
            <div className="mt-4 grid gap-3">
              <Link
                href="/air-cooled-volkswagen-repair"
                className="text-sm font-bold text-[var(--cream-soft)] hover:text-[var(--cream)]"
              >
                VW Repair Overview
              </Link>
              {vwServicePages.map((service) => (
                <Link
                  key={service.slug}
                  href={"/air-cooled-volkswagen-repair/" + service.slug}
                  className="text-sm text-[var(--muted)] transition hover:text-[var(--cream)]"
                >
                  {service.shortTitle}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="font-mono-custom text-xs font-black uppercase tracking-[0.14em] text-[var(--green-soft)]">
              Site & Areas
            </p>
            <div className="mt-4 grid gap-3">
              <Link href="/service-areas" className="text-sm font-bold text-[var(--cream-soft)] hover:text-[var(--cream)]">
                Service Areas
              </Link>
              {serviceAreaPages.slice(0, 4).map((area) => (
                <Link
                  key={area.slug}
                  href={"/computer-repair/areas/" + area.slug}
                  className="text-sm text-[var(--muted)] transition hover:text-[var(--cream)]"
                >
                  {area.city}, {area.state}
                </Link>
              ))}
              <Link href="/about" className="text-sm text-[var(--muted)] transition hover:text-[var(--cream)]">
                About
              </Link>
              <Link href="/faq" className="text-sm text-[var(--muted)] transition hover:text-[var(--cream)]">
                FAQ
              </Link>
              <a
                href={"mailto:" + siteEmail}
                className="text-sm text-[var(--muted)] transition hover:text-[var(--cream)]"
              >
                Email
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-[var(--line)] pt-6 text-sm text-[var(--muted)] sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Arkansas Geek. All rights reserved.</p>
          <p>Computer Repair · Case-by-case Air-Cooled VW Work</p>
        </div>
      </div>
    </footer>
  );
}
