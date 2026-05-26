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
    text: "The site keeps the brand simple: practical computer repair as the main service, with air-cooled Volkswagen work shown as its own specialty side.",
  },
  {
    icon: FaComputer,
    label: "Computer Side",
    title: "Computer repair stays the main focus",
    text: "The computer repair page is built for hardware-focused repair, troubleshooting questions, future pricing information, and more real computer photos as they are provided.",
  },
  {
    icon: FaScrewdriverWrench,
    label: "VW Side",
    title: "VW work is handled case by case",
    text: "The Volkswagen page gives the air-cooled VW side a proper place while keeping expectations clear: smaller jobs may be reviewed by email, but major rebuilds are not the current focus.",
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
              text="Computer repair and air-cooled Volkswagen repair are different audiences, so the site separates them clearly while keeping everything under the Arkansas Geek name."
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