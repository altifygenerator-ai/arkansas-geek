import {
  FaCircleNodes,
  FaLaptopCode,
  FaScrewdriverWrench,
} from "react-icons/fa6";
import FadeIn from "@/components/FadeIn";
import SectionHeading from "@/components/SectionHeading";

const points = [
  {
    icon: FaCircleNodes,
    title: "Built around clear separation",
    text: "The site keeps computer repair and air-cooled Volkswagen repair separated into their own paths so visitors can quickly find the right information.",
  },
  {
    icon: FaLaptopCode,
    title: "Content-ready structure",
    text: "Each section is ready for confirmed business details, including exact services, pricing notes, service area, hours, and repair process information.",
  },
  {
    icon: FaScrewdriverWrench,
    title: "Modern repair-brand direction",
    text: "The visual style blends old-school tech, workshop energy, and clean modern layout so the brand feels memorable without looking cluttered.",
  },
];

export default function WhyArkansasGeek() {
  return (
    <section className="py-24 md:py-32">
      <div className="container-custom">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <FadeIn>
            <SectionHeading
              eyebrow="Brand Direction"
              title="Old-school repair energy, modern website clarity."
              text="This direction gives Arkansas Geek personality without making the homepage feel like a random mix of unrelated services."
            />

            <div className="placeholder-note mt-8">
              Confirmed business details can be added here later. Until then,
              the site avoids making claims about pricing, turnaround time,
              service area, years of experience, guarantees, or exact repair
              services.
            </div>
          </FadeIn>

          <div className="grid gap-4">
            {points.map((point, index) => {
              const Icon = point.icon;

              return (
                <FadeIn key={point.title} delay={index * 0.08}>
                  <div className="fresh-panel group relative overflow-hidden p-6 sm:p-7">
                    <div className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-[var(--amber)] via-[var(--blue)] to-[var(--green-soft)] opacity-70" />

                    <div className="flex gap-5">
                      <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl border border-[var(--line)] bg-[rgba(244,239,227,0.055)] text-[var(--amber-soft)]">
                        <Icon />
                      </div>

                      <div>
                        <h3 className="font-heading text-2xl font-black tracking-[-0.05em] text-[var(--cream)]">
                          {point.title}
                        </h3>

                        <p className="mt-3 leading-8 text-[var(--cream-soft)]">
                          {point.text}
                        </p>
                      </div>
                    </div>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}