"use client";

import { Target, BookOpen, Terminal } from "lucide-react";
import { currentFocusAreas, currentlyLearning } from "@/data/focus";
import SectionHeading from "./SectionHeading";
import AnimatedSection from "./AnimatedSection";

const statusStyles: Record<string, { bg: string; color: string; border: string }> = {
  Learning: {
    bg: "oklch(60% 0.12 230 / 0.08)",
    color: "oklch(72% 0.12 230)",
    border: "oklch(60% 0.12 230 / 0.2)",
  },
  Practicing: {
    bg: "oklch(70% 0.14 70 / 0.08)",
    color: "oklch(78% 0.14 70)",
    border: "oklch(70% 0.14 70 / 0.2)",
  },
  Building: {
    bg: "oklch(65% 0.18 175 / 0.08)",
    color: "var(--color-brand-light)",
    border: "oklch(65% 0.18 175 / 0.2)",
  },
};

const statusIcons: Record<string, React.ReactNode> = {
  Learning: <BookOpen size={11} />,
  Practicing: <Terminal size={11} />,
  Building: <Target size={11} />,
};

export default function CurrentFocus() {
  return (
    <section id="focus" className="relative px-4 py-20 sm:px-6 sm:py-28">
      <div
        className="ambient-glow left-0 bottom-0 h-[280px] w-[280px]"
        style={{ background: "var(--color-brand)", opacity: 0.06 }}
      />

      <div className="relative z-10 mx-auto max-w-6xl">
        <SectionHeading
          title="Current Focus"
          subtitle="What I am actively working on and learning right now."
        />

        <div className="grid gap-6 lg:grid-cols-2">
          {/* Focus Areas */}
          <AnimatedSection delay={0.1}>
            <div className="surface-card h-full p-6">
              <div className="mb-5 flex items-center gap-3">
                <span
                  className="flex h-9 w-9 items-center justify-center rounded-lg"
                  style={{
                    background: "oklch(65% 0.18 175 / 0.1)",
                    color: "var(--color-brand)",
                  }}
                >
                  <Target size={18} />
                </span>
                <h3
                  className="text-base font-bold text-text-primary"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Focus Areas
                </h3>
              </div>
              <div className="space-y-2.5">
                {currentFocusAreas.map((area, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 rounded-lg px-3 py-2.5"
                    style={{
                      background: "var(--color-surface-raised)",
                    }}
                  >
                    <span
                      className="h-1.5 w-1.5 rounded-full"
                      style={{ background: "var(--color-brand)" }}
                    />
                    <span className="text-sm font-medium text-text-secondary">
                      {area}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Currently Learning */}
          <AnimatedSection delay={0.2}>
            <div className="surface-card h-full p-6">
              <div className="mb-5 flex items-center gap-3">
                <span
                  className="flex h-9 w-9 items-center justify-center rounded-lg"
                  style={{
                    background: "oklch(70% 0.14 70 / 0.1)",
                    color: "var(--color-accent-warm)",
                  }}
                >
                  <BookOpen size={18} />
                </span>
                <h3
                  className="text-base font-bold text-text-primary"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Currently Learning
                </h3>
              </div>
              <div className="flex flex-wrap gap-2.5">
                {currentlyLearning.map((item) => {
                  const style = statusStyles[item.status] ?? statusStyles.Learning;
                  return (
                    <div
                      key={item.label}
                      className="flex items-center gap-2 rounded-lg px-3.5 py-2"
                      style={{
                        background: "var(--color-surface-raised)",
                        border: "1px solid var(--color-border)",
                      }}
                    >
                      <span className="text-sm font-medium text-text-primary">
                        {item.label}
                      </span>
                      <span
                        className="inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase"
                        style={{
                          letterSpacing: "0.06em",
                          background: style.bg,
                          color: style.color,
                          border: `1px solid ${style.border}`,
                        }}
                      >
                        {statusIcons[item.status]}
                        {item.status}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
