"use client";

import {
  Code2,
  Monitor,
  Server,
  Wrench,
  BookOpen,
  BarChart3,
} from "lucide-react";
import * as Si from "react-icons/si";
import { skillCategories } from "@/data/skills";
import SectionHeading from "./SectionHeading";
import AnimatedSection from "./AnimatedSection";
import { useState } from "react";

const lucideIconMap: Record<string, React.ReactNode> = {
  Code2: <Code2 size={18} />,
  Monitor: <Monitor size={18} />,
  Server: <Server size={18} />,
  Wrench: <Wrench size={18} />,
  BookOpen: <BookOpen size={18} />,
  BarChart3: <BarChart3 size={18} />,
};

function TechIcon({ iconKey }: { iconKey?: string }) {
  if (!iconKey) return null;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const IconComponent = (Si as any)[iconKey];
  if (!IconComponent) return null;
  return <IconComponent size={14} />;
}

function SkillTag({
  name,
  icon,
  delay,
}: {
  name: string;
  icon?: string;
  delay: number;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <span
      className="skill-tag"
      style={
        {
          "--tag-delay": `${delay}s`,
          background: hovered
            ? "oklch(65% 0.18 175 / 0.12)"
            : "var(--color-surface-raised)",
          borderColor: hovered
            ? "var(--color-brand-dim)"
            : "var(--color-border)",
          color: hovered
            ? "var(--color-text-primary)"
            : "var(--color-text-secondary)",
          transform: hovered ? "translateY(-2px)" : "translateY(0)",
          boxShadow: hovered
            ? "0 4px 12px oklch(65% 0.18 175 / 0.15)"
            : "none",
        } as React.CSSProperties
      }
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {icon && (
        <span
          className="tag-icon"
          style={{
            color: hovered ? "var(--color-brand)" : "var(--color-text-muted)",
            transform: hovered ? "scale(1.15) rotate(-5deg)" : "scale(1) rotate(0deg)",
          }}
        >
          <TechIcon iconKey={icon} />
        </span>
      )}
      <span>{name}</span>
    </span>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="relative px-4 py-20 sm:px-6 sm:py-28">
      <style>{`
        .skill-tag {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          border-radius: 8px;
          padding: 6px 12px;
          font-size: 0.8125rem;
          font-weight: 500;
          border: 1px solid;
          cursor: default;
          transition:
            background 0.25s ease,
            border-color 0.25s ease,
            color 0.25s ease,
            transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1),
            box-shadow 0.25s ease;
          animation: tagFadeIn 0.4s ease both;
          animation-delay: var(--tag-delay);
        }

        .tag-icon {
          display: flex;
          align-items: center;
          transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1), color 0.25s ease;
          flex-shrink: 0;
        }

        @keyframes tagFadeIn {
          from {
            opacity: 0;
            transform: translateY(6px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        .category-row {
          transition: opacity 0.2s ease;
        }

        .category-row:hover .category-icon-wrap {
          transform: scale(1.1) rotate(-5deg);
          box-shadow: 0 0 0 4px oklch(65% 0.18 175 / 0.1);
        }

        .category-icon-wrap {
          transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.3s ease;
        }
      `}</style>

      <div className="mx-auto max-w-6xl">
        <SectionHeading
          title="Skills & Technologies"
          subtitle="Technologies and tools I work with regularly."
        />

        <div className="space-y-12">
          {skillCategories.map((category, i) => (
            <AnimatedSection key={category.title} delay={i * 0.07}>
              <div className="category-row flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-6">
                {/* Category label with icon */}
                <div className="flex shrink-0 items-center gap-3 sm:w-48 sm:pt-1">
                  <span
                    className="category-icon-wrap flex h-8 w-8 items-center justify-center rounded-lg"
                    style={{
                      background: "oklch(65% 0.18 175 / 0.1)",
                      color: "var(--color-brand)",
                    }}
                  >
                    {lucideIconMap[category.icon]}
                  </span>
                  <h3
                    className="text-sm font-semibold text-text-primary"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {category.title}
                  </h3>
                </div>

                {/* Skill tags with icons */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, j) => (
                    <SkillTag
                      key={skill.name}
                      name={skill.name}
                      icon={skill.icon}
                      delay={i * 0.07 + j * 0.04}
                    />
                  ))}
                </div>
              </div>

              {/* Subtle separator */}
              {i < skillCategories.length - 1 && (
                <div
                  className="mt-8"
                  style={{
                    borderBottom: "1px solid var(--color-border-subtle)",
                  }}
                />
              )}
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
