import Link from "next/link";
import {
  FaBars,
  FaEnvelope,
  FaFacebookF,
} from "react-icons/fa6";
import { facebookUrl } from "@/lib/site";

const navItems = [
  { label: "Computer Repair", href: "/computer-repair" },
  { label: "Air-Cooled VW", href: "/air-cooled-volkswagen-repair" },
  { label: "Service Areas", href: "/service-areas" },
  { label: "About", href: "/about" },
  { label: "FAQ", href: "/faq" },
];

export default function Header() {
  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-[var(--line)] bg-[rgba(13,17,16,0.86)] backdrop-blur-xl">
      <div className="container-custom flex h-20 items-center justify-between gap-4">
        <Link href="/" className="group flex min-w-0 items-center gap-3">
          <div className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-[var(--amber)]/40 bg-[rgba(198,139,69,0.14)] font-mono-custom text-xs font-black text-[var(--amber-soft)] shadow-[0_0_35px_rgba(198,139,69,0.16)]">
            AG
          </div>

          <div className="min-w-0">
            <p className="truncate font-heading text-lg font-black tracking-[-0.04em] text-[var(--cream)]">
              Arkansas Geek
            </p>
            <p className="hidden font-mono-custom text-[0.63rem] font-bold uppercase tracking-[0.12em] text-[var(--muted)] sm:block">
              Computer Repair · Classic VW
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-5 xl:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="font-mono-custom text-[0.69rem] font-bold uppercase tracking-[0.1em] text-[var(--cream-soft)] transition hover:text-[var(--amber-soft)]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <a
            href={facebookUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[var(--line-strong)] bg-[rgba(244,239,227,0.055)] text-[var(--cream)] transition hover:-translate-y-0.5 hover:border-[var(--amber)]/50 hover:bg-[rgba(198,139,69,0.12)] hover:text-[var(--amber-soft)]"
            aria-label="Visit Arkansas Geek on Facebook"
          >
            <FaFacebookF />
          </a>

          <Link
            href="/repair-request"
            className="inline-flex items-center gap-2 rounded-full border border-[rgba(227,183,111,0.45)] bg-gradient-to-br from-[var(--amber)] to-[var(--amber-soft)] px-4 py-3 text-sm font-black text-[#17120b] shadow-[0_12px_35px_rgba(198,139,69,0.2)] transition hover:-translate-y-0.5"
          >
            Request Help
          </Link>
        </div>

        <details className="group relative md:hidden">
          <summary
            className="grid h-11 w-11 cursor-pointer list-none place-items-center rounded-full border border-[var(--line-strong)] bg-[rgba(244,239,227,0.055)] text-[var(--cream)] marker:hidden"
            aria-label="Open site navigation"
          >
            <FaBars />
          </summary>

          <div className="absolute right-0 top-14 w-[min(19rem,calc(100vw-1.25rem))] rounded-[1.6rem] border border-[var(--line-strong)] bg-[rgba(13,17,16,0.98)] p-3 shadow-[var(--shadow-hard)] backdrop-blur-xl">
            <nav className="grid gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-xl px-4 py-3 text-sm font-bold text-[var(--cream-soft)] transition hover:bg-[rgba(244,239,227,0.06)] hover:text-[var(--cream)]"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/repair-request"
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-br from-[var(--amber)] to-[var(--amber-soft)] px-4 py-3 font-black text-[#17120b]"
              >
                <FaEnvelope />
                Start Repair Request
              </Link>
              <a
                href={facebookUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-[var(--line)] px-4 py-3 font-bold text-[var(--cream-soft)]"
              >
                <FaFacebookF />
                Facebook
              </a>
            </nav>
          </div>
        </details>
      </div>
    </header>
  );
}
