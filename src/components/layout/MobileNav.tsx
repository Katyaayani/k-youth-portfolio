"use client";

import React, { KeyboardEvent as ReactKeyboardEvent, useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Icon } from "../ui/Icon";
import { StatusIndicator } from "../ui/StatusIndicator";
import { Button } from "../ui/Button";
import { Navigation } from "./Navigation";

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);

  const closeMenu = useCallback(() => {
    setIsOpen(false);
    requestAnimationFrame(() => triggerRef.current?.focus());
  }, []);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        closeMenu();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [closeMenu, isOpen]);

  useEffect(() => {
    if (!isOpen) return;

    const focusFrame = requestAnimationFrame(() => closeButtonRef.current?.focus());
    return () => cancelAnimationFrame(focusFrame);
  }, [isOpen]);

  // Lock body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleDialogKeyDown = (event: ReactKeyboardEvent<HTMLDivElement>) => {
    if (event.key !== "Tab") return;

    const focusableElements = dialogRef.current?.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
    );

    if (!focusableElements?.length) return;

    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    if (event.shiftKey && document.activeElement === firstElement) {
      event.preventDefault();
      lastElement.focus();
    } else if (!event.shiftKey && document.activeElement === lastElement) {
      event.preventDefault();
      firstElement.focus();
    }
  };

  return (
    <div className="md:hidden">
      {/* Hamburger Toggle Button */}
      <button
        ref={triggerRef}
        type="button"
        onClick={() => (isOpen ? closeMenu() : setIsOpen(true))}
        className="p-2 rounded-xl bg-surface-container-high/80 text-on-surface hover:text-primary hover:bg-surface-bright transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-container"
        aria-expanded={isOpen}
        aria-controls="mobile-navigation"
        aria-label={isOpen ? "Close main navigation" : "Open main navigation"}
      >
        <Icon name={isOpen ? "close" : "menu"} size={24} />
      </button>

      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-surface-container-lowest/80 backdrop-blur-md transition-opacity duration-300"
          onClick={closeMenu}
          aria-hidden="true"
        />
      )}

      {/* Slide-out Menu Sheet */}
      {isOpen && (
        <div
          ref={dialogRef}
          id="mobile-navigation"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation"
          onKeyDown={handleDialogKeyDown}
          className="fixed top-0 right-0 bottom-0 z-50 w-full max-w-xs bg-surface-container/95 border-l border-white/10 p-6 flex flex-col justify-between shadow-2xl backdrop-blur-xl"
        >
        <div className="flex flex-col gap-6">
          {/* Header of Mobile Menu */}
          <div className="flex items-center justify-between pb-4 border-b border-white/10">
            <Link
              href="/"
              onClick={closeMenu}
              className="flex items-center gap-2 group"
            >
              <span className="font-headline-sm text-headline-sm text-on-surface tracking-tight group-hover:text-primary transition-colors">
                AM
              </span>
              <span className="h-2 w-2 rounded-full bg-primary-container shadow-[0_0_8px_rgba(34,211,238,0.8)]" />
            </Link>

            <button
              ref={closeButtonRef}
              type="button"
              onClick={closeMenu}
              className="p-2 rounded-lg bg-surface-container-high text-on-surface-variant hover:text-on-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-container"
              aria-label="Close menu"
            >
              <Icon name="close" size={20} />
            </button>
          </div>

          {/* Navigation Links */}
          <Navigation
            orientation="vertical"
            onItemClick={closeMenu}
          />

          {/* Status Indicator */}
          <div className="p-3 rounded-xl bg-surface-container-low/70 border border-white/5 flex items-center gap-2">
            <StatusIndicator color="tertiary" label="Fictional portfolio showcase" />
          </div>
        </div>

        {/* Bottom Action */}
        <div className="pt-6 border-t border-white/10 flex flex-col gap-3">
          <Button
            href="/contact"
            variant="primary"
            size="md"
            className="w-full"
            onClick={closeMenu}
          >
            Let&apos;s Talk
          </Button>
          <p className="text-center font-label-sm text-label-sm text-outline">
            Alex Morgan Portfolio Showcase
          </p>
        </div>
        </div>
      )}
    </div>
  );
}
