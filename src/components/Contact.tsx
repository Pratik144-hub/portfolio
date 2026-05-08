"use client";

import { Mail, MapPin, Linkedin, Github, Twitter, Instagram, Send } from "lucide-react";
import { profile } from "@/data/profile";
import SectionHeading from "./SectionHeading";
import AnimatedSection from "./AnimatedSection";

const socialLinks = [
  { label: "LinkedIn", icon: <Linkedin size={18} />, url: profile.socials.linkedin },
  { label: "GitHub", icon: <Github size={18} />, url: profile.socials.github },
  { label: "Twitter / X", icon: <Twitter size={18} />, url: profile.socials.twitter },
  { label: "Instagram", icon: <Instagram size={18} />, url: profile.socials.instagram },
];

export default function Contact() {
  return (
    <section id="contact" className="relative px-4 py-20 sm:px-6 sm:py-28">
      <div className="ambient-glow right-1/4 top-0 h-[260px] w-[260px]" style={{ background: "var(--color-brand)", opacity: 0.07 }} />
      <div className="relative z-10 mx-auto max-w-3xl">
        <SectionHeading title="Get In Touch" subtitle="Feel free to reach out for collaboration, opportunities, or just to say hello." />

        <AnimatedSection delay={0.1}>
          <div className="flex flex-wrap items-center gap-6 text-sm text-text-secondary">
            <a href={`mailto:${profile.email}`} className="inline-flex items-center gap-2 transition-colors hover:text-text-primary">
              <Mail size={16} style={{ color: "var(--color-brand)" }} />
              {profile.email}
            </a>
            <span className="inline-flex items-center gap-2">
              <MapPin size={16} style={{ color: "var(--color-brand)" }} />
              {profile.location}
            </span>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="mt-8 flex flex-wrap gap-2">
            {socialLinks.map((link) => (
              <a key={link.label} href={link.url} target="_blank" rel="noopener noreferrer" aria-label={link.label}
                className="surface-card inline-flex items-center gap-2.5 px-4 py-2.5 text-sm font-medium text-text-secondary transition-all hover:-translate-y-0.5">
                <span className="text-text-muted">{link.icon}</span>
                {link.label}
              </a>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.3}>
          <div className="mt-10">
            <a href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 rounded-xl px-8 py-3.5 text-sm font-semibold text-white transition-all hover:shadow-lg"
              style={{ background: "var(--color-brand-dim)" }}>
              <Send size={16} />
              Send an Email
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
