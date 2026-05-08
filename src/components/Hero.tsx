"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { profile } from "@/data/profile";

export default function Hero() {
  const prefersReduced = useReducedMotion();

  const anim = (delay: number) => ({
    initial: { opacity: 0, y: prefersReduced ? 0 : 20 },
    animate: { opacity: 1, y: 0 },
    transition: {
      duration: prefersReduced ? 0.01 : 0.6,
      delay: prefersReduced ? 0 : delay,
      ease: [0.16, 1, 0.3, 1],
    },
  });

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden px-4 pt-20 sm:px-6"
    >
      {/* Single purposeful ambient glow */}
      <div
        className="ambient-glow -top-32 left-1/4 h-[480px] w-[480px]"
        style={{ background: "var(--color-brand)" }}
      />
      <div
        className="ambient-glow -bottom-24 right-1/4 h-[320px] w-[320px]"
        style={{ background: "var(--color-accent-warm)", opacity: 0.08 }}
      />

      <div className="relative z-10 mx-auto w-full max-w-6xl">
        <div className="grid items-center gap-12 lg:grid-cols-5">
          {/* Left content */}
          <div className="lg:col-span-3">
            {/* Badge */}
            <motion.div {...anim(0)}>
              <span
                className="caps-label inline-flex items-center gap-2 rounded-full px-4 py-1.5"
                style={{
                  background: "oklch(65% 0.18 175 / 0.08)",
                  border: "1px solid oklch(65% 0.18 175 / 0.15)",
                  color: "var(--color-brand-light)",
                }}
              >
                <span
                  className="h-1.5 w-1.5 rounded-full"
                  style={{ background: "var(--color-brand)" }}
                />
                {profile.badge}
              </span>
            </motion.div>

            {/* Heading — fluid type */}
            <motion.h1
              {...anim(0.1)}
              className="mt-6 font-bold tracking-tight text-text-primary"
              style={{
                fontSize: "clamp(2.25rem, 4vw + 1rem, 3.75rem)",
                lineHeight: 1.08,
              }}
            >
              {profile.name}
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              {...anim(0.2)}
              className="mt-3 text-xl font-semibold sm:text-2xl"
              style={{ color: "var(--color-brand)" }}
            >
              {profile.title}
            </motion.p>

            {/* Intro */}
            <motion.p
              {...anim(0.3)}
              className="mt-4 text-base leading-relaxed text-text-secondary sm:text-lg"
              style={{ maxWidth: "60ch" }}
            >
              {profile.intro}
            </motion.p>

            {/* CTA Buttons — clear hierarchy: primary / secondary / tertiary */}
            <motion.div
              {...anim(0.4)}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              {/* Primary CTA */}
              <a
                href="#coding-profiles"
                className="group inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold text-white transition-all"
                style={{
                  background: "var(--color-brand-dim)",
                  boxShadow: "0 0 0 0 oklch(65% 0.18 175 / 0)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "var(--color-brand)";
                  e.currentTarget.style.boxShadow = "0 8px 32px oklch(65% 0.18 175 / 0.25)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "var(--color-brand-dim)";
                  e.currentTarget.style.boxShadow = "0 0 0 0 oklch(65% 0.18 175 / 0)";
                }}
              >
                View Coding Profiles
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-0.5"
                />
              </a>
              {/* Secondary CTA */}
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-xl border px-6 py-3 text-sm font-semibold transition-all"
                style={{
                  borderColor: "var(--color-border)",
                  color: "var(--color-text-primary)",
                  background: "var(--color-surface)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "var(--color-brand-dim)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "var(--color-border)";
                }}
              >
                View Projects
              </a>
              {/* Tertiary CTA */}
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-4 py-3 text-sm font-medium text-text-secondary transition-colors hover:text-text-primary"
              >
                Contact Me
              </a>
            </motion.div>
          </div>

          {/* Right — Terminal Status Card */}
          <motion.div
            initial={{ opacity: 0, x: prefersReduced ? 0 : 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: prefersReduced ? 0.01 : 0.7,
              delay: prefersReduced ? 0 : 0.5,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="lg:col-span-2"
          >
            <div className="surface-card overflow-hidden">
              {/* Minimal top bar (no macOS dots cliché) */}
              <div
                className="flex items-center gap-2 px-4 py-2.5"
                style={{
                  borderBottom: "1px solid var(--color-border)",
                  background: "var(--color-surface-raised)",
                }}
              >
                <span
                  className="inline-block h-2 w-2 rounded-full"
                  style={{ background: "var(--color-brand)" }}
                />
                <span className="font-mono text-xs text-text-muted">
                  pratik.config
                </span>
              </div>

              {/* Terminal body */}
              <div className="space-y-3 p-5 font-mono text-sm">
                <div>
                  <span style={{ color: "var(--color-brand)" }}>const</span>{" "}
                  <span style={{ color: "var(--color-accent-warm)" }}>developer</span>{" "}
                  <span className="text-text-muted">=</span>{" "}
                  <span className="text-text-muted">{"{"}</span>
                </div>
                <div className="pl-4">
                  <span style={{ color: "var(--color-brand-light)" }}>currently_learning</span>
                  <span className="text-text-muted">: [</span>
                </div>
                {profile.status.currently_learning.map((item, i) => (
                  <div key={i} className="pl-8">
                    <span style={{ color: "var(--color-success)" }}>&quot;{item}&quot;</span>
                    {i < profile.status.currently_learning.length - 1 && (
                      <span className="text-text-muted">,</span>
                    )}
                  </div>
                ))}
                <div className="pl-4">
                  <span className="text-text-muted">],</span>
                </div>
                <div className="pl-4">
                  <span style={{ color: "var(--color-brand-light)" }}>focus</span>
                  <span className="text-text-muted">: </span>
                  <span style={{ color: "var(--color-success)" }}>
                    &quot;{profile.status.focus}&quot;
                  </span>
                  <span className="text-text-muted">,</span>
                </div>
                <div className="pl-4">
                  <span style={{ color: "var(--color-brand-light)" }}>location</span>
                  <span className="text-text-muted">: </span>
                  <span style={{ color: "var(--color-success)" }}>
                    &quot;{profile.status.location}&quot;
                  </span>
                </div>
                <div>
                  <span className="text-text-muted">{"}"}</span>
                  <span className="text-text-muted">;</span>
                </div>
                <div className="mt-2 flex items-center gap-1">
                  <span style={{ color: "var(--color-brand)" }}>❯</span>
                  <span
                    className="inline-block h-4 w-[2px] animate-pulse"
                    style={{ background: "var(--color-brand)", opacity: 0.7 }}
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
