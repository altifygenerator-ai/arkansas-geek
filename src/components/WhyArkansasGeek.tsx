import {
  FaCodeBranch,
  FaComputer,
  FaScrewdriverWrench,
} from "react-icons/fa6";
import FadeIn from "@/components/FadeIn";
import SectionHeading from "@/components/SectionHeading";

const brandPoints = [
  {
    icon: FaCodeBranch,
    label: "Parent Brand",
    title: "Arkansas Geek ties both repair paths together",
    text: "Computer repair is the main service, and the air-cooled VW work has its own lane so people can quickly figure out where they need to go.",
  },
  {
    icon: FaComputer,
    label: "Computer Side",
    title: "Computer repair stays the main focus",
    text: "Computer repair covers hardware help, troubleshooting, upgrades, and general repair questions. Labor is typically $75/hr, but the details matter before giving a solid quote.",
  },
  {
    icon: FaScrewdriverWrench,
    label: "VW Side",
    title: "VW work is handled case by case",
    text: "The VW page keeps expectations clear: smaller air-cooled Volkswagen jobs may be reviewed by email, but major rebuilds and big restoration projects are not the focus right now.",
  },
];

export default function WhyArkansasGeek() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(198,139,69,0.1),transparent_28rem)]" />

      <div className="container-custom">
        <div className="grid gap-14 lg:grid-cols-[0.42fr_0.58fr] lg:items-start">
          <FadeIn>
            <SectionHeading
              eyebrow="Site Direction"
              title="One repair-minded brand, without making it confusing."
              text="Computer repair and air-cooled VW repair are not the same thing, so the site keeps them separated while still making Arkansas Geek feel like one simple repair-minded brand."
            />
          </FadeIn>

          <div className="border-t border-[var(--line)]">
            {brandPoints.map((point, index) => {
              const Icon = point.icon;

              return (
                <FadeIn key={point.title} delay={index * 0.08}>
                  <div className="grid gap-5 border-b border-[var(--line)] py-8 md:grid-cols-[0.2fr_0.8fr]">
                    <div className="flex items-start gap-4 md:block">
                      <div className="grid h-12 w-12 place-items-center rounded-2xl border border-[var(--line)] bg-[rgba(244,239,227,0.055)] text-[var(--amber-soft)]">
                        <Icon />
                      </div>

                      <p className="mt-0 font-mono-custom text-[0.68rem] font-black uppercase tracking-[0.14em] text-[var(--muted)] md:mt-4">
                        {point.label}
                      </p>
                    </div>

                    <div>
                      <h3 className="font-heading text-3xl font-black tracking-[-0.06em] text-[var(--cream)] md:text-4xl">
                        {point.title}
                      </h3>

                      <p className="mt-4 max-w-2xl leading-8 text-[var(--cream-soft)]">
                        {point.text}
                      </p>
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