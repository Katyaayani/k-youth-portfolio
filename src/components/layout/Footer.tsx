import React from "react";
import Link from "next/link";
import { Icon } from "../ui/Icon";

export function Footer() {
  return (
    <footer className="relative z-10 w-full bg-surface-container-lowest/90 backdrop-blur-lg pt-margin-lg pb-margin-md border-t border-white/5">
      <div className="max-w-[1200px] mx-auto px-gutter">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter-lg pb-margin-md">
          {/* Brand Info */}
          <div className="md:col-span-6 flex flex-col items-start gap-space-sm">
            <Link
              href="/"
              className="flex items-center gap-space-xs group"
              aria-label="Alex Morgan - Home"
            >
              <span className="font-headline-sm text-headline-sm text-on-surface tracking-tight group-hover:text-primary transition-colors">
                AM
              </span>
              <span className="h-2 w-2 rounded-full bg-primary-container shadow-[0_0_8px_rgba(34,211,238,0.8)]" />
            </Link>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-md">
              Crafting performant web experiences with Next.js, TypeScript &amp; modern cloud tech.
            </p>
            <div className="flex flex-wrap items-center gap-space-sm pt-space-xs">
              <span className="font-label-sm text-label-sm text-outline uppercase">
                Stack
              </span>
              <span className="font-badge-label text-badge-label px-2 py-0.5 rounded-full bg-surface-container-high text-on-surface-variant">
                Next.js 16
              </span>
              <span className="font-badge-label text-badge-label px-2 py-0.5 rounded-full bg-surface-container-high text-on-surface-variant">
                React 19
              </span>
              <span className="font-badge-label text-badge-label px-2 py-0.5 rounded-full bg-surface-container-high text-on-surface-variant">
                TypeScript
              </span>
              <span className="font-badge-label text-badge-label px-2 py-0.5 rounded-full bg-surface-container-high text-on-surface-variant">
                Tailwind v4
              </span>
            </div>
          </div>

          {/* Navigation Column */}
          <div className="md:col-span-3 flex flex-col gap-space-xs">
            <span className="font-label-sm text-label-sm text-on-surface uppercase tracking-wider mb-space-xs">
              Navigation
            </span>
            <Link
              className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors"
              href="/"
            >
              Home
            </Link>
            <Link
              className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors"
              href="/about"
            >
              About
            </Link>
            <Link
              className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors"
              href="/projects"
            >
              Projects
            </Link>
            <Link
              className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors"
              href="/contact"
            >
              Contact
            </Link>
          </div>

          {/* Connect Column (Showcase Demo Links) */}
          <div className="md:col-span-3 flex flex-col gap-space-xs">
            <span className="font-label-sm text-label-sm text-on-surface uppercase tracking-wider mb-space-xs">
              Connect
            </span>
            <span className="font-body-sm text-body-sm text-on-surface-variant flex items-center gap-space-xs cursor-default">
              <Icon name="terminal" size={16} /> GitHub (Showcase Demo)
            </span>
            <span className="font-body-sm text-body-sm text-on-surface-variant flex items-center gap-space-xs cursor-default">
              <Icon name="hub" size={16} /> LinkedIn (Showcase Demo)
            </span>
            <span className="font-body-sm text-body-sm text-on-surface-variant flex items-center gap-space-xs cursor-default">
              <Icon name="alternate_email" size={16} /> Twitter / X (Showcase Demo)
            </span>
            <Link
              className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors flex items-center gap-space-xs"
              href="/contact"
            >
              <Icon name="mail" size={16} /> Contact Page
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-space-md border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-space-sm font-label-sm text-label-sm text-outline">
          <p>© 2026 Alex Morgan. Sample Portfolio Showcase.</p>
          <div className="flex items-center gap-space-md">
            <span className="flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-tertiary" />
              Showcase Portfolio
            </span>
            <span>All routes active</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
