import Image from "next/image";
import Link from "next/link";
import { FaArrowRight, FaLocationDot, FaWrench } from "react-icons/fa6";
import {
  computerServicePages,
  serviceAreaPages,
  vwServicePages,
} from "@/data/seo-content";

export default function SiteExpansion() {
  return (
    <>
      <section className="border-y border-[var(--line)] bg-[rgba(244,239,227,0.025)] py-24 md:py-32">
        <div className="container-custom">
          <div className="grid gap-10 lg:grid-cols-[0.4fr_0.6fr] lg:items-end">
            <div>
              <div className="eyebrow">Computer Repair Services</div>
              <h2 className="section-title mt-5">
                More than one kind of computer problem.
              </h2>
            </div>
            <p className="lead">
              Arkansas Geek handles hardware repair, troubleshooting, upgrades,
              and computer builds. Each service is explained clearly so you can
              start in the right place.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {computerServicePages.map((service, index) => (
              <Link
                key={service.slug}
                href={"/computer-repair/services/" + service.slug}
                className="group grid overflow-hidden rounded-[2.2rem] border border-[var(--line)] bg-[rgba(13,17,16,0.72)] sm:grid-cols-[0.38fr_0.62fr]"
              >
                <div className="relative min-h-[14rem] overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 25vw"
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-[rgba(13,17,16,0.18)]" />
                </div>
                <div className="p-6">
                  <p className="font-mono-custom text-xs font-black uppercase tracking-[0.14em] text-[var(--blue-soft)]">
                    {"0" + (index + 1)}
                  </p>
                  <h3 className="font-heading mt-3 text-3xl font-black tracking-[-0.055em] text-[var(--cream)]">
                    {service.shortTitle}
                  </h3>
                  <p className="mt-3 leading-7 text-[var(--cream-soft)]">
                    {service.metaDescription}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-2 font-black text-[var(--blue-soft)]">
                    Explore service
                    <FaArrowRight className="transition group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="container-custom">
          <div className="grid gap-10 lg:grid-cols-[0.46fr_0.54fr]">
            <div>
              <div className="eyebrow">Arkansas Service Areas</div>
              <h2 className="section-title mt-5">
                Computer repair information for the Arkansas areas already served.
              </h2>
              <p className="lead mt-6">
                Arkansas Geek accepts repair requests from the listed Arkansas
                service areas. These are service areas, not separate storefronts,
                so send the details first and the location can be reviewed with
                the job.
              </p>
              <Link href="/service-areas" className="btn-secondary mt-8">
                View All Service Areas
                <FaArrowRight />
              </Link>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {serviceAreaPages.map((area) => (
                <Link
                  key={area.slug}
                  href={"/computer-repair/areas/" + area.slug}
                  className="group flex items-center justify-between gap-4 rounded-[1.6rem] border border-[var(--line)] bg-[rgba(244,239,227,0.04)] p-5 transition hover:-translate-y-1 hover:border-[var(--line-strong)]"
                >
                  <span className="flex items-center gap-3">
                    <FaLocationDot className="text-[var(--blue-soft)]" />
                    <span className="font-bold text-[var(--cream)]">
                      {area.city}, {area.state}
                    </span>
                  </span>
                  <FaArrowRight className="text-[var(--muted)] transition group-hover:translate-x-1" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-[var(--line)] bg-[rgba(244,239,227,0.025)] py-24 md:py-32">
        <div className="container-custom">
          <div className="grid gap-10 lg:grid-cols-[0.42fr_0.58fr]">
            <div>
              <div className="eyebrow">Air-Cooled VW Details</div>
              <h2 className="section-title mt-5">
                Smaller air-cooled VW work, explained clearly.
              </h2>
              <p className="lead mt-6">
                Brake work, suspension work, and smaller maintenance or repair
                needs are all handled within the same case-by-case limits:
                practical smaller jobs, not major rebuilds or full restorations.
              </p>
            </div>
            <div className="grid gap-4">
              {vwServicePages.map((page) => (
                <Link
                  key={page.slug}
                  href={"/air-cooled-volkswagen-repair/" + page.slug}
                  className="group fresh-panel flex items-start gap-4 p-6 transition hover:-translate-y-1"
                >
                  <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-[rgba(198,139,69,0.14)] text-[var(--amber-soft)]">
                    <FaWrench />
                  </div>
                  <div>
                    <h3 className="font-heading text-3xl font-black tracking-[-0.055em] text-[var(--cream)]">
                      {page.shortTitle}
                    </h3>
                    <p className="mt-2 leading-7 text-[var(--cream-soft)]">
                      {page.metaDescription}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-2 font-black text-[var(--amber-soft)]">
                      View VW page
                      <FaArrowRight className="transition group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="container-custom">
          <div className="surface diagnostic-grid p-7 sm:p-10 lg:p-12">
            <div className="grid gap-8 lg:grid-cols-[0.65fr_0.35fr] lg:items-end">
              <div>
                <p className="font-mono-custom text-xs font-black uppercase tracking-[0.16em] text-[var(--green-soft)]">
                  Questions before the form?
                </p>
                <h2 className="font-heading mt-4 text-4xl font-black tracking-[-0.06em] text-[var(--cream)] md:text-6xl">
                  The FAQ covers rates, service areas, computer details, and VW limits.
                </h2>
              </div>
              <div className="flex lg:justify-end">
                <Link href="/faq" className="btn-primary">
                  Read the Repair FAQ
                  <FaArrowRight />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
