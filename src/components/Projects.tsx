"use client";

import { ExternalLink, Loader } from "lucide-react";
import { projects } from "@/data/projects";
import SectionHeading from "./SectionHeading";
import AnimatedSection from "./AnimatedSection";

export default function Projects() {
  return (
    <section id="projects" className="relative px-4 py-20 sm:px-6 sm:py-28">
      <div
        className="ambient-glow -right-20 top-1/3 h-[320px] w-[320px]"
        style={{ background: "var(--color-accent-warm)", opacity: 0.07 }}
      />

      <div className="relative z-10 mx-auto max-w-6xl">
        <SectionHeading
          title="Projects"
          subtitle="A selection of projects I have built and contributed to."
        />

        <div className="grid gap-5 sm:grid-cols-2">
          {projects.map((project, i) => (
            <AnimatedSection
              key={project.title}
              delay={i * 0.08}
              className={i === 0 ? "sm:col-span-2" : ""}
            >
              <div
                className="surface-card group flex h-full flex-col p-6"
                style={{
                  transition: `border-color var(--duration-fast) var(--ease-out-quart),
                               transform var(--duration-fast) var(--ease-out-quart)`,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "var(--color-brand-dim)";
                  e.currentTarget.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "var(--color-border)";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                {/* Header */}
                <div className="mb-3 flex items-start justify-between gap-3">
                  <div>
                    <h3
                      className="text-lg font-bold text-text-primary"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {project.title}
                    </h3>
                    <span className="caps-label mt-1 inline-block">
                      {project.type}
                    </span>
                  </div>
                  {project.isOngoing && (
                    <span
                      className="flex shrink-0 items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium"
                      style={{
                        background: "oklch(65% 0.18 175 / 0.08)",
                        color: "var(--color-brand-light)",
                      }}
                    >
                      <Loader size={12} className="animate-spin" />
                      In Progress
                    </span>
                  )}
                </div>

                {/* Description */}
                <p className="mb-4 flex-1 text-sm leading-relaxed text-text-muted">
                  {project.description}
                </p>

                {/* Tech stack — inline, comma-separated for variety */}
                <p className="mb-4 text-sm text-text-secondary">
                  <span className="font-medium text-text-muted">Built with: </span>
                  {project.techStack.join(", ")}
                </p>

                {/* Highlights as subtle tags */}
                <div className="mb-5 flex flex-wrap gap-1.5">
                  {project.highlights.map((h) => (
                    <span
                      key={h}
                      className="rounded-md px-2.5 py-1 text-xs text-text-muted"
                      style={{
                        background: "var(--color-surface-raised)",
                        border: "1px solid var(--color-border-subtle)",
                      }}
                    >
                      {h}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="mt-auto flex gap-2">
                  {project.github ? (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-lg px-4 py-2 text-xs font-medium text-text-primary transition-all"
                      style={{
                        border: "1px solid var(--color-border)",
                        background: "var(--color-surface-raised)",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = "var(--color-brand-dim)";
                        e.currentTarget.style.color = "var(--color-brand-light)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = "var(--color-border)";
                        e.currentTarget.style.color = "var(--color-text-primary)";
                      }}
                    >
                      GitHub
                      <ExternalLink size={12} />
                    </a>
                  ) : (
                    <span
                      className="inline-flex cursor-not-allowed items-center gap-1.5 rounded-lg px-4 py-2 text-xs font-medium text-text-muted"
                      style={{
                        border: "1px solid var(--color-border-subtle)",
                        background: "var(--color-surface)",
                        opacity: 0.6,
                      }}
                    >
                      Coming Soon
                    </span>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-lg px-4 py-2 text-xs font-medium transition-all"
                      style={{
                        background: "oklch(65% 0.18 175 / 0.1)",
                        color: "var(--color-brand-light)",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = "oklch(65% 0.18 175 / 0.18)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = "oklch(65% 0.18 175 / 0.1)";
                      }}
                    >
                      Live Demo
                      <ExternalLink size={12} />
                    </a>
                  )}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
