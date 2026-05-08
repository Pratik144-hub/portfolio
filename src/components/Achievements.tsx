"use client";

import { Award } from "lucide-react";
import { achievements } from "@/data/achievements";
import SectionHeading from "./SectionHeading";
import AnimatedSection from "./AnimatedSection";

export default function Achievements() {
  return (
    <section id="achievements" className="relative px-4 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-4xl">
        <SectionHeading title="Achievements" />

        {/* Vertical timeline */}
        <div className="relative ml-4 border-l-2 pl-8" style={{ borderColor: "var(--color-border)" }}>
          {achievements.map((item, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <div className="relative mb-8 last:mb-0">
                {/* Timeline dot */}
                <div
                  className="absolute -left-[calc(2rem+13px)] flex h-6 w-6 items-center justify-center rounded-full"
                  style={{
                    background: "var(--color-background)",
                    border: "2px solid var(--color-brand-dim)",
                  }}
                >
                  <Award size={12} style={{ color: "var(--color-brand)" }} />
                </div>

                {/* Year marker */}
                <span
                  className="caps-label mb-2 inline-block"
                  style={{ color: "var(--color-brand)" }}
                >
                  {item.year}
                </span>

                <h3
                  className="text-base font-semibold text-text-primary"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {item.title}
                </h3>
                <p className="mt-1 text-sm text-text-muted">
                  {item.organization}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
