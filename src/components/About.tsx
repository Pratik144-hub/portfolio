"use client";

import { profile } from "@/data/profile";
import SectionHeading from "./SectionHeading";
import AnimatedSection from "./AnimatedSection";

export default function About() {
  return (
    <section id="about" className="relative px-4 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading title="About Me" />

        <AnimatedSection delay={0.1}>
          <div className="space-y-5" style={{ maxWidth: "65ch" }}>
            {profile.about.map((paragraph, i) => (
              <p
                key={i}
                className="text-base leading-relaxed text-text-secondary sm:text-lg"
                style={{ lineHeight: 1.7 }}
              >
                {paragraph}
              </p>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
