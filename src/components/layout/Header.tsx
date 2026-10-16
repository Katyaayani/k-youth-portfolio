import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Navigation } from "./Navigation";
import { MobileNav } from "./MobileNav";
import { StatusIndicator } from "../ui/StatusIndicator";
import { Button } from "../ui/Button";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-surface/75 backdrop-blur-xl border-b border-white/5 shadow-[0_1px_8px_rgba(0,0,0,0.25)]">
      <div className="h-20 max-w-[1200px] mx-auto px-gutter flex items-center justify-between gap-space-md">
        {/* Brand / Logo */}
        <div className="flex items-center gap-space-md">
          <Link
            href="/"
            className="flex items-center gap-space-xs group"
            aria-label="Alex Morgan Portfolio - Home"
          >
            <span className="font-headline-sm text-headline-sm text-on-surface tracking-tight group-hover:text-primary transition-colors">
              AM
            </span>
            <span className="h-2 w-2 rounded-full bg-primary-container shadow-[0_0_8px_rgba(34,211,238,0.8)]" />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex">
          <Navigation orientation="horizontal" />
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-space-md">
          {/* Availability Pill */}
          <div className="hidden lg:flex items-center gap-2 px-space-md py-1.5 rounded-full bg-surface-container-high/60 backdrop-blur-md border border-white/5">
            <StatusIndicator color="tertiary" label="Fictional showcase" />
          </div>

          {/* Direct CTA */}
          <Button
            href="/contact"
            variant="primary"
            size="sm"
            className="hidden lg:inline-flex"
          >
            Let&apos;s Talk
          </Button>

          {/* Avatar Profile */}
          <Link
            href="/about"
            className="relative block rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-container"
            aria-label="About Alex Morgan"
          >
            <Image
              alt="Alex Morgan"
              className="w-8 h-8 rounded-full object-cover shadow-[0_0_10px_rgba(34,211,238,0.3)] border border-primary-container/40"
              src="/images/alex-morgan-portrait.jpg"
              width={32}
              height={32}
              unoptimized
            />
          </Link>

          {/* Accessible Mobile Nav Sheet */}
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
