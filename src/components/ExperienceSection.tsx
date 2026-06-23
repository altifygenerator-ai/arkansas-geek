import {
  FaDesktop,
  FaNetworkWired,
  FaShieldHalved,
  FaScrewdriverWrench,
} from "react-icons/fa6";
import FadeIn from "@/components/FadeIn";
import SectionHeading from "@/components/SectionHeading";

const experiencePoints = [
  {
    icon: FaDesktop,
    title: "Hardware and systems troubleshooting",
    text: "Years of hands-on work with computers, servers, operating systems, and the kind of problems that take more than a quick guess to diagnose.",
  },
  {
    icon: FaNetworkWired,
    title: "Network and infrastructure background",
    text: "Experience across Windows, Linux, virtualization, networking, backups, migrations, and technical support gives Arkansas Geek a deeper repair mindset.",
  },
  {
    icon: FaShieldHalved,
    title: "Remote support experience",
    text: "Some questions can be narrowed down with the right details first. A quick follow-up may save time, travel, or an unnecessary repair visit.",
  },
];

export default function ExperienceSection() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_78%_35%,rgba(95,137,168,0.13),transparent_30rem)]" />

      <div className="container-custom">
        <div className="grid gap-14 lg:grid-cols-[0.45fr_0.55fr] lg:items-start">
          <FadeIn>
            <div>
              <SectionHeading
                eyebrow="Real IT Background"
                title="Built on more than a weekend of repair work."
                text="Arkansas Geek is backed by more than two decades of IT experience across troubleshooting, hardware, operating systems, networking, remote support, testing, and technical problem solving."
              />

              <div className="mt-8 rounded-[2rem] border border-[var(--line)] bg-[rgba(244,239,227,0.045)] p-5">
                <div className="flex items-center gap-3">
                  <div className="grid h-12 w-12 place-items-center rounded-2xl bg-[rgba(198,139,69,0.14)] text-[var(--amber-soft)]">
                    <FaScrewdriverWrench />
                  </div>
                  <div>
                    <p className="font-mono-custom text-[0.68rem] font-black uppercase tracking-[0.14em] text-[var(--muted)]">
                      Experience Snapshot
                    </p>
                    <p className="font-heading text-3xl font-black tracking-[-0.06em] text-[var(--cream)]">
                      24+ years
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>

          <div className="grid gap-5">
            {experiencePoints.map((point, index) => {
              const Icon = point.icon;

              return (
                <FadeIn key={point.title} delay={index * 0.08}>
                  <div className="fresh-panel grid gap-5 p-6 sm:grid-cols-[auto_1fr] sm:p-7">
                    <div className="grid h-12 w-12 place-items-center rounded-2xl border border-[var(--line)] bg-[rgba(244,239,227,0.055)] text-[var(--amber-soft)]">
                      <Icon />
                    </div>

                    <div>
                      <h3 className="font-heading text-3xl font-black tracking-[-0.06em] text-[var(--cream)]">
                        {point.title}
                      </h3>
                      <p className="mt-3 leading-8 text-[var(--cream-soft)]">
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
