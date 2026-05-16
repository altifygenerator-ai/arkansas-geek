import Link from "next/link";
import { FaArrowRight, FaComputer, FaWrench } from "react-icons/fa6";
import FadeIn from "@/components/FadeIn";
import SectionHeading from "@/components/SectionHeading";

const services = [
  {
    title: "Computer Repair",
    href: "/computer-repair",
    label: "Repair Path 01",
    icon: FaComputer,
    accent: "blue",
    text: "This section will be updated with the confirmed computer repair services, repair process, pricing notes, and service details for Arkansas Geek.",
    image: "/images/pc-2.jpg",
  },
  {
    title: "Air-Cooled Volkswagen Repair",
    href: "/air-cooled-volkswagen-repair",
    label: "Repair Path 02",
    icon: FaWrench,
    accent: "amber",
    text: "This section will be updated with the confirmed air-cooled Volkswagen repair services, vehicle details, process notes, and service information for Arkansas Geek.",
    image: "/images/bug-2.jpg",
  },
];

export default function ServiceSplit() {
  return (
    <section className="service-band py-24 md:py-32">
      <div className="container-custom relative z-10">
        <FadeIn>
          <SectionHeading
            eyebrow="Two Repair Paths"
            title="One brand, two clear directions."
            text="The homepage is designed to route visitors quickly instead of forcing computer repair and Volkswagen repair into the same generic message."
          />
        </FadeIn>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <FadeIn key={service.href} delay={index * 0.08}>
                <Link
                  href={service.href}
                  className="group block overflow-hidden rounded-[2.4rem] border border-[var(--line)] bg-[rgba(13,17,16,0.66)] shadow-[var(--shadow-soft)] transition hover:-translate-y-1 hover:border-[var(--line-strong)]"
                >
                  <div className="relative h-72 overflow-hidden">
                    <img
                      src={service.image}
                      alt=""
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg)] via-[rgba(13,17,16,0.45)] to-transparent" />
                    <div
                      className={`absolute inset-0 ${
                        service.accent === "blue"
                          ? "bg-[rgba(95,137,168,0.12)]"
                          : "bg-[rgba(198,139,69,0.12)]"
                      }`}
                    />

                    <div className="absolute left-6 top-6 flex items-center gap-3 rounded-full border border-white/15 bg-black/30 px-4 py-2 backdrop-blur-md">
                      <Icon
                        className={
                          service.accent === "blue"
                            ? "text-[var(--blue-soft)]"
                            : "text-[var(--amber-soft)]"
                        }
                      />
                      <span className="font-mono-custom text-[0.68rem] font-black uppercase tracking-[0.14em] text-[var(--cream)]">
                        {service.label}
                      </span>
                    </div>
                  </div>

                  <div className="p-6 sm:p-8">
                    <h3 className="font-heading text-3xl font-black tracking-[-0.06em] text-[var(--cream)] sm:text-4xl">
                      {service.title}
                    </h3>

                    <p className="mt-4 leading-8 text-[var(--cream-soft)]">
                      {service.text}
                    </p>

                    <div className="mt-7 inline-flex items-center gap-2 font-black text-[var(--amber-soft)]">
                      View this service page
                      <FaArrowRight className="transition group-hover:translate-x-1" />
                    </div>
                  </div>
                </Link>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}