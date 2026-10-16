import React from "react";
import Link from "next/link";
import { Icon } from "./Icon";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  icon?: string;
  iconPosition?: "left" | "right";
  children: React.ReactNode;
  className?: string;
  external?: boolean;
}

export function Button({
  variant = "primary",
  size = "md",
  href,
  icon,
  iconPosition = "right",
  children,
  className = "",
  external = false,
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-title-md font-semibold rounded-xl transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-container focus-visible:ring-offset-2 focus-visible:ring-offset-surface disabled:opacity-50 disabled:pointer-events-none group cursor-pointer";

  const sizeStyles = {
    sm: "px-3.5 py-1.5 text-body-sm gap-1.5",
    md: "px-5 py-2.5 text-body-md gap-2",
    lg: "px-6 py-3.5 text-title-md gap-2.5",
  };

  const variantStyles = {
    primary:
      "bg-primary-container text-on-primary-container shadow-[0_0_20px_rgba(34,211,238,0.35)] hover:bg-primary hover:shadow-[0_0_28px_rgba(34,211,238,0.55)]",
    secondary:
      "bg-surface-container-high/70 text-on-surface hover:text-primary hover:bg-surface-bright shadow-sm",
    outline:
      "bg-surface-container-low/70 border border-white/10 text-on-surface hover:text-primary hover:border-primary-container/40 hover:bg-surface-container-high",
    ghost:
      "text-on-surface-variant hover:text-primary hover:bg-surface-container-high/50 shadow-none",
  };

  const iconElement = icon ? (
    <Icon
      name={icon}
      size={size === "sm" ? 16 : size === "md" ? 18 : 20}
      className={`transition-transform ${
        iconPosition === "right" ? "group-hover:translate-x-0.5" : ""
      }`}
    />
  ) : null;

  const content = (
    <>
      {icon && iconPosition === "left" && iconElement}
      <span>{children}</span>
      {icon && iconPosition === "right" && iconElement}
    </>
  );

  const combinedClasses = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={combinedClasses}
        >
          {content}
        </a>
      );
    }
    return (
      <Link href={href} className={combinedClasses}>
        {content}
      </Link>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {content}
    </button>
  );
}
