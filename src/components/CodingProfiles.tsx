"use client";

import { Github, Code, Trophy, ExternalLink } from "lucide-react";
import { codingProfiles } from "@/data/codingProfiles";
import SectionHeading from "./SectionHeading";
import AnimatedSection from "./AnimatedSection";

const iconMap: Record<string, React.ReactNode> = {
  Github: <Github size={22} />,
  Code: <Code size={22} />,
  Trophy: <Trophy size={22} />,
};

const platformAccent: Record<string, { bg: string; color: string; border: string }> = {
  GitHub: {
    bg: "oklch(50% 0.008 175 / 0.12)",
    color: "oklch(75% 0.01 175)",
    border: "oklch(50% 0.015 175 / 0.3)",
  },
  LeetCode: {
    bg: "oklch(70% 0.14 70 / 0.1)",
    color: "oklch(78% 0.14 70)",
    border: "oklch(70% 0.14 70 / 0.3)",
  },
  Codeforces: {
    bg: "oklch(60% 0.12 230 / 0.1)",
    color: "oklch(72% 0.12 230)",
    border: "oklch(60% 0.12 230 / 0.3)",
  },
};

export default function CodingProfiles() {
  return (
    <section id="coding-profiles" className="relative px-4 py-20 sm:px-6 sm:py-28">
      <div
        className="ambient-glow left-1/4 top-0 h-[300px] w-[300px]"
        style={{ background: "var(--color-brand)", opacity: 0.08 }}
      />

      <div className="relative z-10 mx-auto max-w-6xl">
        <SectionHeading
          title="Coding Profiles"
          subtitle="Competitive programming and open-source activity across platforms."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {codingProfiles.map((p, i) => {
            const accent = platformAccent[p.platform] ?? platformAccent.GitHub;
            return (
              <AnimatedSection key={p.platform} delay={i * 0.1}>
                <div
                  className="surface-card group flex h-full flex-col p-6"
                  style={{
                    transition: `border-color var(--duration-fast) var(--ease-out-quart),
                                 transform var(--duration-fast) var(--ease-out-quart)`,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = accent.border;
                    e.currentTarget.style.transform = "translateY(-2px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "var(--color-border)";
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  {/* Icon + Platform */}
                  <div className="mb-4 flex items-center gap-3">
                    <div
                      className="flex h-11 w-11 items-center justify-center rounded-xl"
                      style={{ background: accent.bg, color: accent.color }}
                    >
                      {iconMap[p.icon]}
                    </div>
                    <div>
                      <h3
                        className="text-lg font-bold text-text-primary"
                        style={{ fontFamily: "var(--font-display)" }}
                      >
                        {p.platform}
                      </h3>
                      <p className="font-mono text-xs text-text-muted">
                        @{p.username}
                      </p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="mb-5 flex-1 text-sm leading-relaxed text-text-muted">
                    {p.description}
                  </p>

                  {/* Stats */}
                  {p.stats && p.stats.length > 0 && (
                    <div className="mb-5 grid grid-cols-2 gap-2">
                      {p.stats.map((stat) => (
                        <div
                          key={stat.label}
                          className="rounded-lg p-2 text-center"
                          style={{ background: "var(--color-surface-raised)" }}
                        >
                          <p className="text-lg font-bold text-text-primary" style={{ fontFamily: "var(--font-display)", fontVariantNumeric: "tabular-nums" }}>
                            {stat.value}
                          </p>
                          <p className="text-xs text-text-muted">{stat.label}</p>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Link */}
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-sm font-medium text-text-primary transition-all"
                    style={{
                      border: "1px solid var(--color-border)",
                      background: "var(--color-surface-raised)",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = accent.border;
                      e.currentTarget.style.color = accent.color;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = "var(--color-border)";
                      e.currentTarget.style.color = "var(--color-text-primary)";
                    }}
                  >
                    View Profile
                    <ExternalLink size={14} />
                  </a>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
