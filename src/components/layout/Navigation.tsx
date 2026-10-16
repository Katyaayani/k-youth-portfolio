"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export interface NavLinkItem {
  label: string;
  href: string;
}

export const NAV_LINKS: NavLinkItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

export interface NavigationProps {
  orientation?: "horizontal" | "vertical";
  onItemClick?: () => void;
  className?: string;
}

export function Navigation({
  orientation = "horizontal",
  onItemClick,
  className = "",
}: NavigationProps) {
  const pathname = usePathname();

  const isLinkActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  const containerStyles =
    orientation === "horizontal"
      ? "flex items-center gap-1.5 p-1.5 rounded-xl bg-surface-container-low/70 backdrop-blur-md"
      : "flex flex-col gap-1 w-full";

  return (
    <nav className={`${containerStyles} ${className}`} aria-label="Main Navigation">
      {NAV_LINKS.map((link) => {
        const active = isLinkActive(link.href);
        const linkStyles = active
          ? "bg-surface-container-high text-primary font-title-md shadow-[0_0_12px_rgba(34,211,238,0.15)]"
          : "text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high";

        return (
          <Link
            key={link.href}
            href={link.href}
            onClick={onItemClick}
            aria-current={active ? "page" : undefined}
            className={`px-4 py-2 rounded-lg font-body-md transition-all duration-200 text-center ${linkStyles}`}
          >
            {link.label}
          </Link>
        );
      })}
    </nav>
  );
}
