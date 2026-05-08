"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navLinks, profile } from "@/data/profile";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = () => setIsOpen(false);

  return (
    <nav
      className="fixed top-0 right-0 left-0 z-50"
      style={{
        transition: `background var(--duration-normal) var(--ease-out-quart),
                     border-color var(--duration-normal) var(--ease-out-quart),
                     backdrop-filter var(--duration-normal) var(--ease-out-quart)`,
        background: scrolled ? "oklch(10% 0.008 175 / 0.85)" : "transparent",
        borderBottom: scrolled ? "1px solid var(--color-border)" : "1px solid transparent",
        backdropFilter: scrolled ? "blur(20px) saturate(1.2)" : "none",
      }}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        {/* Logo */}
        <a
          href="#home"
          className="text-lg font-bold tracking-tight transition-colors"
          style={{
            fontFamily: "var(--font-display)",
            color: "var(--color-text-primary)",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = "var(--color-brand)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = "var(--color-text-primary)";
          }}
        >
          {profile.name}
        </a>

        {/* Desktop Nav */}
        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-lg px-3 py-2 text-sm font-medium text-text-muted transition-colors hover:text-text-primary"
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
              {link.label}
            </a>
          ))}
          <a
            href={profile.resumePath}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 rounded-lg px-4 py-2 text-sm font-medium transition-all"
            style={{
              border: "1px solid oklch(65% 0.18 175 / 0.2)",
              background: "oklch(65% 0.18 175 / 0.08)",
              color: "var(--color-brand-light)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "oklch(65% 0.18 175 / 0.15)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "oklch(65% 0.18 175 / 0.08)";
            }}
          >
            Resume
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-lg p-2 text-text-muted transition-colors hover:text-text-primary md:hidden"
          style={{ transition: `color var(--duration-fast) var(--ease-out-quart)` }}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden md:hidden"
            style={{
              borderBottom: "1px solid var(--color-border)",
              background: "oklch(10% 0.008 175 / 0.95)",
              backdropFilter: "blur(20px)",
            }}
          >
            <div className="space-y-1 px-4 py-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={handleLinkClick}
                  className="block rounded-lg px-4 py-3 text-sm font-medium text-text-muted transition-colors hover:text-text-primary"
                >
                  {link.label}
                </a>
              ))}
              <a
                href={profile.resumePath}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleLinkClick}
                className="mt-2 block rounded-lg px-4 py-3 text-center text-sm font-medium transition-all"
                style={{
                  border: "1px solid oklch(65% 0.18 175 / 0.2)",
                  background: "oklch(65% 0.18 175 / 0.08)",
                  color: "var(--color-brand-light)",
                }}
              >
                Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
