import Link from "next/link";
import { FaEnvelope, FaFacebookF } from "react-icons/fa6";

const facebookUrl = "https://www.facebook.com/share/1BCnj1ZdVn/?mibextid=wwXIfr";

const navItems = [
  { label: "Computer Repair", href: "/computer-repair" },
  { label: "Air-Cooled VW", href: "/air-cooled-volkswagen-repair" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-[var(--line)] bg-[rgba(13,17,16,0.78)] backdrop-blur-xl">
      <div className="container-custom flex h-20 items-center justify-between">
        <Link href="/" className="group flex items-center gap-3">
          <div className="grid h-11 w-11 place-items-center rounded-full border border-[var(--amber)]/40 bg-[rgba(198,139,69,0.14)] font-mono-custom text-xs font-black text-[var(--amber-soft)] shadow-[0_0_35px_rgba(198,139,69,0.16)]">
            AG
          </div>

          <div>
            <p className="font-heading text-lg font-black tracking-[-0.04em] text-[var(--cream)]">
              Arkansas Geek
            </p>
            <p className="font-mono-custom text-[0.65rem] font-bold uppercase tracking-[0.14em] text-[var(--muted)]">
              Computer Repair · Classic VW
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="font-mono-custom text-xs font-bold uppercase tracking-[0.12em] text-[var(--cream-soft)] transition hover:text-[var(--amber-soft)]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 sm:flex">
          <a
            href={facebookUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[var(--line-strong)] bg-[rgba(244,239,227,0.055)] text-[var(--cream)] transition hover:-translate-y-0.5 hover:border-[var(--amber)]/50 hover:bg-[rgba(198,139,69,0.12)] hover:text-[var(--amber-soft)]"
            aria-label="Visit Arkansas Geek on Facebook"
          >
            <FaFacebookF />
          </a>

          <a
            href="mailto:arkansasgeekadmin@gmail.com"
            className="inline-flex items-center gap-2 rounded-full border border-[var(--line-strong)] bg-[rgba(244,239,227,0.055)] px-4 py-3 text-sm font-extrabold text-[var(--cream)] transition hover:-translate-y-0.5 hover:border-[var(--amber)]/50 hover:bg-[rgba(198,139,69,0.12)]"
          >
            <FaEnvelope className="text-[var(--amber-soft)]" />
            <span className="hidden md:inline">Email</span>
          </a>
        </div>

        <div className="flex items-center gap-2 sm:hidden">
          <a
            href={facebookUrl}
            target="_blank"
            rel="noreferrer"
            className="grid h-11 w-11 place-items-center rounded-full border border-[var(--line-strong)] bg-[rgba(244,239,227,0.055)] text-[var(--cream)]"
            aria-label="Visit Arkansas Geek on Facebook"
          >
            <FaFacebookF />
          </a>

          <a
            href="mailto:arkansasgeekadmin@gmail.com"
            className="grid h-11 w-11 place-items-center rounded-full border border-[rgba(227,183,111,0.45)] bg-gradient-to-br from-[var(--amber)] to-[var(--amber-soft)] text-[#17120b] shadow-[0_16px_45px_rgba(198,139,69,0.22)]"
            aria-label="Email Arkansas Geek"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>
    </header>
  );
}