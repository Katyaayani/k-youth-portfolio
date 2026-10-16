import React from "react";

export interface StatusIndicatorProps {
  color?: "tertiary" | "primary" | "secondary" | "amber";
  size?: "sm" | "md" | "lg";
  ping?: boolean;
  className?: string;
  label?: string;
}

export function StatusIndicator({
  color = "tertiary",
  size = "md",
  ping = true,
  className = "",
  label,
}: StatusIndicatorProps) {
  const sizeMap = {
    sm: "h-1.5 w-1.5",
    md: "h-2 w-2",
    lg: "h-2.5 w-2.5",
  };

  const colorStyles = {
    tertiary: {
      bg: "bg-tertiary",
      glow: "shadow-[0_0_6px_rgba(104,245,184,0.8)]",
      text: "text-tertiary",
    },
    primary: {
      bg: "bg-primary-container",
      glow: "shadow-[0_0_8px_rgba(34,211,238,0.8)]",
      text: "text-primary",
    },
    secondary: {
      bg: "bg-secondary",
      glow: "shadow-[0_0_8px_rgba(76,215,246,0.8)]",
      text: "text-secondary",
    },
    amber: {
      bg: "bg-amber-400",
      glow: "shadow-[0_0_6px_rgba(251,191,36,0.8)]",
      text: "text-amber-400",
    },
  };

  const currentSize = sizeMap[size];
  const currentColor = colorStyles[color];

  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <span className={`relative flex ${currentSize}`}>
        {ping && (
          <span
            className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${currentColor.bg}`}
          />
        )}
        <span
          className={`relative inline-flex rounded-full ${currentSize} ${currentColor.bg} ${currentColor.glow}`}
        />
      </span>
      {label && (
        <span className={`font-badge-label text-badge-label tracking-wide uppercase ${currentColor.text}`}>
          {label}
        </span>
      )}
    </span>
  );
}
