import React from "react";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "tech" | "tech-high" | "primary" | "secondary" | "tertiary" | "outline" | "section";
  size?: "sm" | "md";
  dot?: boolean;
  dotColor?: "primary" | "tertiary" | "secondary";
  children: React.ReactNode;
  className?: string;
}

export function Badge({
  variant = "tech",
  size = "md",
  dot = false,
  dotColor = "primary",
  children,
  className = "",
  ...props
}: BadgeProps) {
  const variantStyles = {
    tech: "bg-surface-container text-on-surface-variant font-badge-label text-badge-label",
    "tech-high": "bg-surface-container-high text-on-surface-variant font-badge-label text-badge-label",
    primary: "bg-primary-container/20 text-primary-fixed border border-primary-container/30 font-badge-label text-badge-label",
    secondary: "bg-secondary/15 text-secondary border border-secondary/30 font-badge-label text-badge-label",
    tertiary: "bg-tertiary/15 text-tertiary border border-tertiary/30 font-badge-label text-badge-label",
    outline: "bg-surface-container/60 border border-white/10 text-on-surface-variant font-badge-label text-badge-label",
    section: "bg-surface-container-high/80 text-primary uppercase tracking-widest font-label-sm text-label-sm shadow-sm backdrop-blur-md",
  };

  const sizeStyles = {
    sm: "px-2 py-0.5",
    md: "px-3 py-1",
  };

  const dotColors = {
    primary: "bg-primary-container shadow-[0_0_6px_rgba(34,211,238,0.8)]",
    tertiary: "bg-tertiary shadow-[0_0_6px_rgba(104,245,184,0.8)]",
    secondary: "bg-secondary shadow-[0_0_6px_rgba(76,215,246,0.8)]",
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full transition-colors ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {dot && (
        <span
          className={`h-1.5 w-1.5 rounded-full shrink-0 ${dotColors[dotColor]}`}
          aria-hidden="true"
        />
      )}
      <span>{children}</span>
    </span>
  );
}
