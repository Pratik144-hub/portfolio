"use client";

import { Github, Linkedin, Twitter } from "lucide-react";
import { profile } from "@/data/profile";

export default function Footer() {
  return (
    <footer
      className="px-4 py-8 sm:px-6"
      style={{ borderTop: "1px solid var(--color-border)" }}
    >
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 sm:flex-row sm:justify-between">
        {/* Left */}
        <p className="text-sm text-text-muted">
          © {new Date().getFullYear()} {profile.name}. Built with Next.js and Framer Motion.
        </p>

        {/* Social icons */}
        <div className="flex items-center gap-1">
          {[
            { href: profile.socials.github, label: "GitHub", icon: <Github size={17} /> },
            { href: profile.socials.linkedin, label: "LinkedIn", icon: <Linkedin size={17} /> },
            { href: profile.socials.twitter, label: "Twitter", icon: <Twitter size={17} /> },
          ].map(({ href, label, icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="rounded-lg p-2 text-text-muted transition-colors hover:text-text-primary"
              style={{
                transition: `color var(--duration-fast) var(--ease-out-quart),
                             background var(--duration-fast) var(--ease-out-quart)`,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "var(--color-surface-raised)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent";
              }}
            >
              {icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
