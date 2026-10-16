import React from "react";
import Image from "next/image";
import { Icon } from "./Icon";
import { Badge } from "./Badge";

export interface ProjectCardProps {
  id?: string;
  title: string;
  category?: string;
  description: string;
  image: string;
  imageAlt: string;
  badge?: string;
  badgeColor?: "primary" | "secondary" | "tertiary";
  technologies: string[];
  windowTitle?: string;
  statusText?: string;
  iconName?: string;
  liveUrl?: string;
  codeUrl?: string;
  secondaryActionLabel?: string;
  secondaryActionIcon?: string;
  variant?: "compact" | "detailed";
  className?: string;
}

export function ProjectCard({
  title,
  category,
  description,
  image,
  imageAlt,
  badge,
  badgeColor = "tertiary",
  technologies,
  windowTitle,
  statusText,
  iconName,
  liveUrl,
  codeUrl,
  secondaryActionLabel,
  secondaryActionIcon,
  variant = "detailed",
  className = "",
}: ProjectCardProps) {
  const hasLiveDemo = Boolean(liveUrl && !liveUrl.startsWith("#"));
  const hasSourceCode = Boolean(codeUrl && !codeUrl.startsWith("#"));

  if (variant === "compact") {
    // Used on Home page
    return (
      <article
        className={`flex flex-col rounded-2xl bg-surface-container/60 backdrop-blur-md overflow-hidden shadow-lg hover:shadow-[0_12px_36px_rgba(34,211,238,0.15)] hover:-translate-y-1 transition-all duration-300 group ${className}`}
      >
        <div className="relative w-full h-52 bg-surface-container-lowest overflow-hidden">
          <Image
            src={image}
            alt={imageAlt}
            width={600}
            height={400}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-t from-surface-container via-transparent to-transparent pointer-events-none" />
          {badge && (
            <div
              className={`absolute top-3 right-3 px-2.5 py-1 rounded-full bg-surface-container-highest/90 backdrop-blur-md font-badge-label text-badge-label ${
                badgeColor === "primary"
                  ? "text-primary"
                  : badgeColor === "secondary"
                  ? "text-secondary"
                  : "text-tertiary"
              }`}
            >
              {badge}
            </div>
          )}
        </div>

        <div className="flex flex-col flex-1 p-space-lg justify-between">
          <div>
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-headline-sm text-headline-sm text-on-surface">
                {title}
              </h3>
              {iconName && (
                <Icon
                  name={iconName}
                  size={20}
                  className="text-outline group-hover:text-primary transition-colors"
                />
              )}
            </div>
            <p className="font-body-sm text-body-sm text-on-surface-variant mb-6 leading-relaxed">
              {description}
            </p>
          </div>

          <div>
            <div className="flex flex-wrap gap-1.5 mb-6">
              {technologies.map((tech) => (
                <Badge key={tech} variant="tech-high" size="sm">
                  {tech}
                </Badge>
              ))}
            </div>

            <div className="flex items-center justify-between pt-4 border-t-0 bg-surface-container-low/50 -mx-space-lg -mb-space-lg px-space-lg py-3">
              {hasLiveDemo ? (
                <a href={liveUrl} className="font-label-sm text-label-sm text-primary hover:underline inline-flex items-center gap-1" aria-label={`Live Demo preview for ${title}`}>
                  <span>Live Preview</span>
                  <Icon name="open_in_new" size={14} />
                </a>
              ) : (
                <span className="font-label-sm text-label-sm text-outline" aria-disabled="true">Preview unavailable</span>
              )}
              {hasSourceCode ? (
                <a href={codeUrl} className="font-label-sm text-label-sm text-on-surface-variant hover:text-on-surface inline-flex items-center gap-1 transition-colors" aria-label={`${secondaryActionLabel || "Architecture"} details for ${title}`}>
                  <span>{secondaryActionLabel || "Architecture"}</span>
                  <Icon name={secondaryActionIcon || "code"} size={14} />
                </a>
              ) : (
                <span className="font-label-sm text-label-sm text-outline" aria-disabled="true">Source unavailable</span>
              )}
            </div>
          </div>
        </div>
      </article>
    );
  }

  // Detailed 2x2 layout used on Projects page
  return (
    <article
      className={`group flex flex-col justify-between rounded-xl bg-surface-container/75 backdrop-blur-md shadow-xl hover:shadow-[0_16px_36px_rgba(0,0,0,0.5),0_0_24px_rgba(34,211,238,0.2)] transition-all duration-300 transform hover:-translate-y-1 overflow-hidden border border-white/5 ${className}`}
    >
      <div>
        {/* Browser Chrome Header */}
        <div className="px-space-lg py-3 bg-surface-container-high/80 flex items-center justify-between border-b border-white/5">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-error/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#f59e0b]/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-tertiary/80" />
            {windowTitle && (
              <span className="ml-1 sm:ml-2 font-code-inline text-code-inline text-outline truncate max-w-[120px] min-[400px]:max-w-[180px] sm:max-w-none">
                {windowTitle}
              </span>
            )}
          </div>
          <div className="flex items-center gap-2">
            {statusText && (
              <span className="px-2 py-0.5 rounded-full bg-surface-container text-primary font-badge-label text-badge-label">
                {statusText}
              </span>
            )}
            {iconName && (
              <Icon name={iconName} size={16} className="text-outline" />
            )}
          </div>
        </div>

        {/* Preview Visual */}
        <div className="relative w-full h-64 overflow-hidden bg-surface-container-lowest">
          <Image
            src={image}
            alt={imageAlt}
            width={700}
            height={450}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-t from-surface-container via-surface-container/30 to-transparent pointer-events-none" />
          {category && (
            <div className="absolute top-4 left-4 flex gap-2">
              <span className="px-3 py-1 rounded-full bg-surface-container-lowest/80 backdrop-blur-md font-badge-label text-badge-label text-primary border border-white/5">
                {category}
              </span>
            </div>
          )}
        </div>

        {/* Content Body */}
        <div className="p-space-lg flex flex-col gap-space-sm">
          <h2 className="font-headline-sm text-headline-sm text-on-surface group-hover:text-primary transition-colors">
            {title}
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
            {description}
          </p>

          {/* Tech Badges */}
          <div className="flex flex-wrap gap-1.5 pt-space-xs">
            {technologies.map((tech) => (
              <Badge key={tech} variant="tech-high" size="sm">
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </div>

      {/* Action Footer */}
      <div className="px-space-lg pb-space-lg pt-space-xs flex flex-col min-[440px]:flex-row min-[440px]:flex-wrap items-stretch min-[440px]:items-center gap-space-sm sm:gap-space-md">
        {hasLiveDemo ? (
          <a href={liveUrl} className="px-space-md py-2 rounded-lg font-title-md text-body-sm bg-primary-container text-on-primary-container hover:bg-primary shadow-[0_0_16px_rgba(34,211,238,0.3)] hover:shadow-[0_0_24px_rgba(34,211,238,0.5)] transition-all flex items-center justify-center gap-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-container" aria-label={`Demo preview for ${title}`}>
            <span>Live Demo</span>
            <Icon name="arrow_outward" size={16} />
          </a>
        ) : (
          <span className="px-space-md py-2 rounded-lg font-title-md text-body-sm bg-surface-container-high/60 text-outline flex items-center justify-center gap-1.5 cursor-not-allowed" aria-disabled="true">
            Demo Unavailable
          </span>
        )}
        {hasSourceCode ? (
          <a href={codeUrl} className="px-space-md py-2 rounded-lg font-title-md text-body-sm bg-surface-container-high text-on-surface hover:text-primary hover:bg-surface-bright transition-all flex items-center justify-center gap-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-container" aria-label={`View code for ${title}`}>
            <Icon name="code" size={16} />
            <span>View Code (GitHub)</span>
            <Icon name="arrow_outward" size={16} />
          </a>
        ) : (
          <span className="px-space-md py-2 rounded-lg font-title-md text-body-sm bg-surface-container-high/60 text-outline flex items-center justify-center gap-1.5 cursor-not-allowed" aria-disabled="true">
            <Icon name="code" size={16} />
            <span>Source Unavailable</span>
          </span>
        )}
      </div>
    </article>
  );
}
