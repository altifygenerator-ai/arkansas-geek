"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaComputer,
  FaWrench,
  FaMicrochip,
} from "react-icons/fa6";

const heroImages = [
  {
    src: "/images/pc-1.jpg",
    label: "Computer Repair",
    accent: "blue",
  },
  {
    src: "/images/bug-1.jpg",
    label: "Air-Cooled VW",
    accent: "amber",
  },
  {
    src: "/images/pc-2.jpg",
    label: "Diagnostics",
    accent: "green",
  },
  {
    src: "/images/bug-2.jpg",
    label: "Classic Repair",
    accent: "amber",
  },
  {
    src: "/images/pc-3.jpg",
    label: "Systems",
    accent: "blue",
  },
  {
    src: "/images/bug-3.jpg",
    label: "Volkswagen",
    accent: "amber",
  },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden pt-32">
      {/* Ambient background */}
      <div className="absolute inset-0 -z-30">
        <div className="absolute left-[-10rem] top-20 h-[28rem] w-[28rem] rounded-full bg-[rgba(198,139,69,0.16)] blur-[90px]" />
        <div className="absolute right-[-12rem] top-40 h-[32rem] w-[32rem] rounded-full bg-[rgba(95,137,168,0.14)] blur-[110px]" />
        <div className="absolute bottom-[-18rem] left-1/2 h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-[rgba(95,127,100,0.12)] blur-[120px]" />
      </div>

      {/* Slanted image strips */}
<div className="pointer-events-none absolute inset-y-0 right-0 z-0 hidden w-[64%] overflow-hidden lg:block">
  <motion.div
    initial={{ opacity: 0, x: 80, rotate: 10 }}
    animate={{ opacity: 1, x: 0, rotate: 10 }}
    transition={{ duration: 0.9, ease: "easeOut" }}
    className="absolute -right-28 -top-28 flex h-[130vh] gap-5"
  >
    {heroImages.map((image, index) => (
      <div
        key={image.src}
        className={`relative h-full w-40 overflow-hidden rounded-[2rem] border border-[var(--line)] bg-[var(--bg-muted)] shadow-[var(--shadow-soft)] ${
          index % 2 === 0 ? "translate-y-14" : "-translate-y-10"
        }`}
      >
<img
  src={image.src}
  alt=""
  className={`h-full w-full object-cover ${
    image.src.includes("bug") ? "scale-100 object-center" : "scale-105 object-center"
  }`}
/>

        <div className="absolute inset-0 bg-[rgba(13,17,16,0.24)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/70" />

        <div
          className={`absolute inset-x-0 bottom-0 h-32 ${
            image.accent === "blue"
              ? "bg-gradient-to-t from-[rgba(95,137,168,0.42)] to-transparent"
              : image.accent === "green"
                ? "bg-gradient-to-t from-[rgba(156,175,136,0.3)] to-transparent"
                : "bg-gradient-to-t from-[rgba(198,139,69,0.42)] to-transparent"
          }`}
        />

        <div className="absolute bottom-5 left-5 right-5 rotate-[-10deg]">
          <p className="font-mono-custom text-[0.62rem] font-black uppercase tracking-[0.12em] text-[var(--cream)]/90">
            {image.label}
          </p>
        </div>
      </div>
    ))}
  </motion.div>

  <div className="absolute inset-0 bg-gradient-to-r from-[var(--bg)] via-[rgba(13,17,16,0.42)] to-transparent" />
  <div className="absolute inset-0 bg-gradient-to-b from-[var(--bg)]/35 via-transparent to-[var(--bg)]/75" />
</div>
      {/* Mobile abstract panel instead of image strips */}
      <div className="pointer-events-none absolute inset-x-4 top-28 -z-20 h-72 overflow-hidden rounded-[2rem] border border-[var(--line)] bg-[rgba(244,239,227,0.035)] lg:hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[rgba(198,139,69,0.18)] via-transparent to-[rgba(95,137,168,0.16)]" />
        <div className="absolute -right-10 top-8 h-44 w-44 rounded-full bg-[rgba(198,139,69,0.16)] blur-3xl" />
        <div className="absolute -left-10 bottom-4 h-44 w-44 rounded-full bg-[rgba(95,137,168,0.16)] blur-3xl" />
      </div>

      <div className="container-custom grid min-h-[calc(100vh-8rem)] items-center gap-12 pb-16 lg:grid-cols-[0.95fr_1.05fr]">
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="relative z-10"
        >
          <div className="eyebrow">Arkansas Geek</div>

          <h1 className="display-title mt-6 max-w-4xl">
            Computer Repair & Air-Cooled Volkswagen Repair.
          </h1>

          <p className="lead mt-7">
            Arkansas Geek is being built as a clear home for two repair paths:
            computer repair and air-cooled Volkswagen repair. Confirmed service
            details, pricing notes, and repair information will be added here
            once provided.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link href="/computer-repair" className="btn-primary">
              Computer Repair
              <FaArrowRight />
            </Link>

            <Link
              href="/air-cooled-volkswagen-repair"
              className="btn-secondary"
            >
              Air-Cooled VW Repair
              <FaArrowRight />
            </Link>
          </div>

          <div className="mt-10 grid gap-3 border-l border-[var(--line-strong)] pl-5">
            <p className="tech-label">Confirmed Contact</p>
            <a
              href="mailto:Tpindell@gmail.com"
              className="text-lg font-bold text-[var(--cream)] transition hover:text-[var(--amber-soft)]"
            >
              Tpindell@gmail.com
            </a>
          </div>
        </motion.div>

        {/* Right-side service router */}
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.15, ease: "easeOut" }}
          className="relative z-10 lg:mt-28"
        >
          <div className="surface noise-overlay relative overflow-hidden p-4 sm:p-5">
            <div className="rounded-[2rem] border border-[var(--line)] bg-[rgba(13,17,16,0.72)] p-5 sm:p-7">
              <div className="mb-8 flex items-center justify-between gap-4">
                <div>
                  <p className="font-mono-custom text-xs font-bold uppercase tracking-[0.16em] text-[var(--green-soft)]">
                    Service Router
                  </p>
                  <h2 className="font-heading mt-2 text-3xl font-black tracking-[-0.06em] text-[var(--cream)] sm:text-4xl">
                    Choose a repair path.
                  </h2>
                </div>

                <div className="hidden h-14 w-14 place-items-center rounded-full border border-[var(--line)] bg-[rgba(244,239,227,0.055)] text-[var(--amber-soft)] sm:grid">
                  <FaMicrochip />
                </div>
              </div>

              <div className="grid gap-4">
                <Link
                  href="/computer-repair"
                  className="group relative overflow-hidden rounded-[1.65rem] border border-[var(--line)] bg-[rgba(244,239,227,0.045)] p-5 transition hover:-translate-y-1 hover:border-[var(--blue-soft)]/40 hover:bg-[rgba(95,137,168,0.08)]"
                >
                  <div className="flex items-start gap-4">
                    <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-[rgba(95,137,168,0.13)] text-[var(--blue-soft)]">
                      <FaComputer />
                    </div>

                    <div>
                      <h3 className="font-heading text-2xl font-black tracking-[-0.05em] text-[var(--cream)]">
                        Computer Repair
                      </h3>
                      <p className="mt-2 leading-7 text-[var(--cream-soft)]">
                        This page will be updated with confirmed computer repair
                        services, process details, pricing notes, and service
                        information.
                      </p>
                    </div>
                  </div>
                </Link>

                <Link
                  href="/air-cooled-volkswagen-repair"
                  className="group relative overflow-hidden rounded-[1.65rem] border border-[var(--line)] bg-[rgba(244,239,227,0.045)] p-5 transition hover:-translate-y-1 hover:border-[var(--amber)]/45 hover:bg-[rgba(198,139,69,0.08)]"
                >
                  <div className="flex items-start gap-4">
                    <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-[rgba(198,139,69,0.13)] text-[var(--amber-soft)]">
                      <FaWrench />
                    </div>

                    <div>
                      <h3 className="font-heading text-2xl font-black tracking-[-0.05em] text-[var(--cream)]">
                        Air-Cooled Volkswagen Repair
                      </h3>
                      <p className="mt-2 leading-7 text-[var(--cream-soft)]">
                        This page will be updated with confirmed Volkswagen
                        repair services, vehicle details, process notes, and
                        service information.
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}