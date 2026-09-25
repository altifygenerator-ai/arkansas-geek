import Image from "next/image";
import Link from "next/link";
import { FaArrowRight, FaCircleCheck, FaEnvelope } from "react-icons/fa6";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import type { SeoPage } from "@/data/seo-content";
import { siteEmail } from "@/lib/site";

type RelatedLink = {
  href: string;
  label: string;
};

type Props = {
  page: SeoPage;
  theme: "pc" | "vw";
  schema: object | object[];
  relatedLinks: RelatedLink[];
};

export default function SeoDetailPage({
  page,
  theme,
  schema,
  relatedLinks,
}: Props) {
  const themeClass = theme === "pc" ? "pc-theme" : "vw-theme";

  return (
    <div className={themeClass}>
      <Header />
      <main>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />

        <section className="relative overflow-hidden pt-32">
          <div className="absolute inset-0 -z-20 diagnostic-grid opacity-30" />
          <div className="container-custom pb-20 pt-10 md:pb-28">
            <div className="grid gap-10 lg:grid-cols-[0.56fr_0.44fr] lg:items-center">
              <div>
                <div className="eyebrow">{page.eyebrow}</div>
                <h1 className="display-title mt-6 max-w-5xl">{page.heading}</h1>
                <p className="lead mt-7">{page.intro}</p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Link href="/repair-request" className="btn-primary">
                    Start a Repair Request
                    <FaArrowRight />
                  </Link>
                  <a href={"mailto:" + siteEmail} className="btn-secondary">
                    Email Arkansas Geek
                    <FaEnvelope />
                  </a>
                </div>
              </div>

              <div className="surface overflow-hidden p-3">
                <div className="relative min-h-[28rem] overflow-hidden rounded-[2rem]">
                  <Image
                    src={page.image}
                    alt={page.title}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 44vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[rgba(13,17,16,0.88)] via-transparent to-[rgba(13,17,16,0.1)]" />
                  <div className="absolute inset-x-5 bottom-5 grid gap-2">
                    {page.highlights.map((highlight) => (
                      <div
                        key={highlight}
                        className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-sm font-bold text-[var(--cream)] backdrop-blur-md"
                      >
                        <FaCircleCheck className="shrink-0 text-[var(--page-accent-soft,var(--amber-soft))]" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-[var(--line)] bg-[rgba(244,239,227,0.025)] py-20 md:py-28">
          <div className="container-custom">
            <div className="grid gap-6 lg:grid-cols-3">
              {page.sections.map((section, index) => (
                <article
                  key={section.title}
                  className="fresh-panel p-6 sm:p-8"
                >
                  <p className="font-mono-custom text-xs font-black uppercase tracking-[0.16em] text-[var(--page-accent-soft,var(--amber-soft))]">
                    {"0" + (index + 1)}
                  </p>
                  <h2 className="font-heading mt-4 text-3xl font-black tracking-[-0.055em] text-[var(--cream)]">
                    {section.title}
                  </h2>
                  <p className="mt-4 leading-8 text-[var(--cream-soft)]">
                    {section.text}
                  </p>
                  {section.points && (
                    <ul className="mt-6 grid gap-3">
                      {section.points.map((point) => (
                        <li
                          key={point}
                          className="flex gap-3 text-sm leading-6 text-[var(--cream-soft)]"
                        >
                          <FaCircleCheck className="mt-1 shrink-0 text-[var(--green-soft)]" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 md:py-28">
          <div className="container-custom">
            <div className="grid gap-10 lg:grid-cols-[0.42fr_0.58fr]">
              <div>
                <div className="eyebrow">Keep Exploring</div>
                <h2 className="section-title mt-5">
                  More useful Arkansas Geek pages.
                </h2>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                {relatedLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="group rounded-[1.75rem] border border-[var(--line)] bg-[rgba(244,239,227,0.04)] p-5 font-bold text-[var(--cream)] transition hover:-translate-y-1 hover:border-[var(--line-strong)] hover:bg-[rgba(244,239,227,0.07)]"
                  >
                    <span className="flex items-center justify-between gap-4">
                      {link.label}
                      <FaArrowRight className="shrink-0 transition group-hover:translate-x-1" />
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-[var(--line)] py-20">
          <div className="container-custom">
            <div className="surface diagnostic-grid p-7 sm:p-10">
              <p className="font-mono-custom text-xs font-black uppercase tracking-[0.16em] text-[var(--amber-soft)]">
                Best next step
              </p>
              <h2 className="font-heading mt-4 max-w-4xl text-4xl font-black tracking-[-0.06em] text-[var(--cream)] md:text-6xl">
                Send the details before buying parts or planning the job.
              </h2>
              <p className="mt-5 max-w-3xl leading-8 text-[var(--cream-soft)]">
                Arkansas Geek starts with the equipment or vehicle, the symptoms,
                what changed recently, and what has already been tried. That keeps
                the next step practical and easier to quote fairly.
              </p>
              <Link href="/repair-request" className="btn-primary mt-7">
                Start Repair Request
                <FaArrowRight />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
