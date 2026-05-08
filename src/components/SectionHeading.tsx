"use client";

import AnimatedSection from "./AnimatedSection";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
}

export default function SectionHeading({ title, subtitle }: SectionHeadingProps) {
  return (
    <AnimatedSection className="mb-16 md:mb-20">
      <h2 className="text-3xl font-bold tracking-tight text-text-primary sm:text-4xl lg:text-[2.75rem]">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 max-w-xl text-base text-text-muted sm:text-lg" style={{ lineHeight: 1.6 }}>
          {subtitle}
        </p>
      )}
      <div
        className="mt-5 h-[3px] w-10 rounded-full"
        style={{ background: "var(--color-brand)" }}
      />
    </AnimatedSection>
  );
}
