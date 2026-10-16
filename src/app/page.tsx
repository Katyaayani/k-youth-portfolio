import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { StatusIndicator } from "@/components/ui/StatusIndicator";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { Icon } from "@/components/ui/Icon";

const TECH_STACK = [
  "Next.js 16",
  "React 19",
  "TypeScript",
  "Tailwind CSS v4",
  "Node.js",
  "PostgreSQL",
  "GraphQL",
  "Docker",
];

const FEATURED_PROJECTS = [
  {
    id: "taskflow",
    title: "TaskFlow",
    iconName: "splitscreen",
    badge: "Sprint Dashboard",
    badgeColor: "tertiary" as const,
    description:
      "Productivity & sprint management dashboard designed for high-velocity engineering squads with automated cycle time tracking.",
    technologies: ["Next.js", "TypeScript", "Tailwind"],
    image:
      "/images/taskflow-home.jpg",
    imageAlt: "TaskFlow sprint management dashboard interface with kanban boards",
    secondaryActionLabel: "Architecture",
    secondaryActionIcon: "code",
  },
  {
    id: "shopnest",
    title: "ShopNest",
    iconName: "shopping_bag",
    badge: "Headless Stripe",
    badgeColor: "secondary" as const,
    description:
      "High-converting e-commerce storefront with instantaneous page loads, zero bundle bloat, and unified cross-border payment checkout.",
    technologies: ["React", "Stripe API", "Tailwind"],
    image:
      "/images/shopnest-home.jpg",
    imageAlt: "ShopNest minimal e-commerce fashion and hardware storefront",
    secondaryActionLabel: "Case Study",
    secondaryActionIcon: "article",
  },
  {
    id: "weatherly",
    title: "Weatherly",
    iconName: "thunderstorm",
    badge: "Sub-second Sync",
    badgeColor: "primary" as const,
    description:
      "Real-time meteorological intelligence platform with dynamic geospatial tile rendering, predictive alerts, and ambient atmospheric telemetry.",
    technologies: ["Next.js", "Leaflet", "OpenWeather"],
    image:
      "/images/weatherly-home.jpg",
    imageAlt: "Weatherly interactive meteorological radar map and weather forecast",
    secondaryActionLabel: "Radar API",
    secondaryActionIcon: "data_object",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col w-full overflow-x-hidden">
      {/* 1. Hero Section */}
      <section className="relative w-full max-w-[1200px] mx-auto px-gutter pt-8 pb-16 lg:pt-14 lg:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-lg items-center">
          {/* Left Column: Introductions & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            {/* Availability Pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-surface-container-high/80 border border-white/5 shadow-md">
              <StatusIndicator color="tertiary" label="Fictional portfolio showcase" />
            </div>

            {/* Headline Block */}
            <div className="space-y-3">
              <h1 className="font-display text-display-mobile sm:text-display text-on-surface tracking-tight">
                Hi, I&apos;m{" "}
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Alex Morgan
                </span>
              </h1>
              <p className="font-headline-sm text-headline-sm text-primary-fixed-dim">
                Full-Stack Developer &amp; Digital Creator
              </p>
            </div>

            {/* Subtitle / Bio */}
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl leading-relaxed">
              I design and build high-performance web applications, scalable APIs, and intuitive digital interfaces with Next.js, TypeScript, and modern cloud technologies.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-space-md pt-2">
              <Button href="#featured-projects" variant="primary" size="lg" icon="arrow_forward">
                View My Work
              </Button>
              <Button href="/contact" variant="secondary" size="lg" icon="send">
                Contact Me
              </Button>
            </div>

            {/* Engineered With Tech Strip */}
            <div className="pt-6 w-full">
              <div className="flex items-center gap-2 mb-3">
                <span className="font-label-sm text-label-sm uppercase tracking-wider text-outline">
                  Engineered with
                </span>
                <span className="h-px flex-1 bg-surface-container-high" />
              </div>
              <div className="flex flex-wrap items-center gap-2">
                {TECH_STACK.map((tech) => (
                  <Badge key={tech} variant="tech" size="md">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Portrait Card with Ambient Glow & Floating Metrics */}
          <div className="lg:col-span-5 relative mt-12 lg:mt-0 flex justify-center">
            <div className="relative w-[280px] xs:w-[320px] sm:w-[380px] lg:w-[420px] aspect-square rounded-2xl p-2 bg-gradient-to-b from-primary-container/20 to-transparent shadow-[0_20px_50px_rgba(0,0,0,0.6)]">
              {/* Profile Image Well */}
              <div className="relative w-full h-full rounded-xl overflow-hidden bg-surface-container-low shadow-inner">
                <Image
                  alt="Alex Morgan - Full-Stack Developer"
                  className="w-full h-full object-cover object-center filter saturate-[1.05]"
                  src="/images/alex-morgan-portrait.jpg"
                  width={420}
                  height={420}
                  priority
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest/80 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Floating Badge 1: Illustrative experience story */}
              <div className="absolute top-3 left-3 lg:-top-3 lg:-left-6 px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-xl bg-surface-container/95 backdrop-blur-md shadow-xl flex items-center gap-2.5 sm:gap-3 border border-white/10 z-20 whitespace-nowrap scale-[0.82] sm:scale-100 origin-top-left">
                <div className="w-8 h-8 rounded-lg bg-surface-container-high flex items-center justify-center text-primary shrink-0">
                  <Icon name="schedule" size={18} />
                </div>
                <div className="flex flex-col min-w-0">
                  <p className="font-headline-sm text-sm sm:text-headline-sm text-on-surface leading-tight font-semibold">
                    Illustrative
                  </p>
                  <p className="font-label-sm text-[10px] sm:text-label-sm text-on-surface-variant uppercase tracking-wider">
                    Experience Story
                  </p>
                </div>
              </div>

              {/* Floating Badge 2: Sample concept collection */}
              <div className="absolute bottom-3 left-3 lg:-bottom-4 lg:-left-4 px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-xl bg-surface-container/95 backdrop-blur-md shadow-xl flex items-center gap-2.5 sm:gap-3 border border-white/10 z-20 whitespace-nowrap scale-[0.82] sm:scale-100 origin-bottom-left">
                <div className="w-8 h-8 rounded-lg bg-surface-container-high flex items-center justify-center text-tertiary shrink-0">
                  <Icon name="rocket_launch" size={18} />
                </div>
                <div className="flex flex-col min-w-0">
                  <p className="font-headline-sm text-sm sm:text-headline-sm text-on-surface leading-tight font-semibold">
                    Sample Set
                  </p>
                  <p className="font-label-sm text-[10px] sm:text-label-sm text-on-surface-variant uppercase tracking-wider">
                    Concept Apps
                  </p>
                </div>
              </div>

              {/* Floating Badge 3: TypeScript design focus */}
              <div className="absolute top-1/2 right-3 -translate-y-1/2 lg:-right-6 px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-xl bg-surface-container/95 backdrop-blur-md shadow-xl flex items-center gap-2.5 sm:gap-3 border border-white/10 z-20 whitespace-nowrap scale-[0.82] sm:scale-100 origin-right">
                <div className="w-8 h-8 rounded-lg bg-surface-container-high flex items-center justify-center text-secondary shrink-0">
                  <Icon name="verified" size={18} />
                </div>
                <div className="flex flex-col min-w-0">
                  <p className="font-headline-sm text-sm sm:text-headline-sm text-on-surface leading-tight font-semibold">
                    TypeScript
                  </p>
                  <p className="font-label-sm text-[10px] sm:text-label-sm text-on-surface-variant uppercase tracking-wider">
                    Design Focus
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Featured Projects Section */}
      <section
        className="relative w-full max-w-[1200px] mx-auto px-gutter py-16 lg:py-24"
        id="featured-projects"
      >
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-primary" />
              <span className="font-label-sm text-label-sm uppercase tracking-widest text-primary">
                Selected Portfolio
              </span>
            </div>
            <h2 className="font-headline-lg text-headline-lg text-on-surface">Featured Work</h2>
            <p className="font-body-md text-body-md text-on-surface-variant mt-1">
              A set of fictional application concepts crafted to demonstrate precision, speed, and interface design.
            </p>
          </div>
          <Link
            className="group inline-flex items-center gap-1.5 font-title-md text-title-md text-primary hover:text-primary-fixed transition-colors"
            href="/projects"
          >
            <span>Explore all projects</span>
            <Icon
              name="arrow_forward"
              size={18}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
        </div>

        {/* 3 Compact Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter-lg">
          {FEATURED_PROJECTS.map((project) => (
            <ProjectCard
              key={project.id}
              variant="compact"
              title={project.title}
              iconName={project.iconName}
              badge={project.badge}
              badgeColor={project.badgeColor}
              description={project.description}
              technologies={project.technologies}
              image={project.image}
              imageAlt={project.imageAlt}
              secondaryActionLabel={project.secondaryActionLabel}
              secondaryActionIcon={project.secondaryActionIcon}
            />
          ))}
        </div>
      </section>

      {/* 3. Call-to-Action Banner */}
      <section className="relative w-full max-w-[1200px] mx-auto px-gutter pb-24">
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-surface-container via-surface-container-high to-surface-container p-8 lg:p-14 shadow-2xl border border-white/5">
          {/* Subtle Ambient Radial Light Orbs */}
          <div className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full bg-primary-container/10 filter blur-3xl pointer-events-none" />
          <div className="absolute -left-20 -top-20 w-80 h-80 rounded-full bg-tertiary-container/10 filter blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            <div className="space-y-3 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container-lowest/80 font-badge-label text-badge-label text-primary border border-white/5">
                <span>GET IN TOUCH</span>
              </div>
              <h2 className="font-headline-lg text-headline-lg text-on-surface">
                Have a project in mind? Let&apos;s build something exceptional together.
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant">
                This fictional profile demonstrates how technical leadership, MVP delivery, and frontend architecture services could be presented.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 flex-shrink-0">
              <Button
                href="/contact"
                variant="primary"
                size="lg"
                icon="outgoing_mail"
                className="px-8 py-4 shadow-[0_0_24px_rgba(34,211,238,0.35)] hover:shadow-[0_0_32px_rgba(34,211,238,0.55)]"
              >
                Start a Conversation
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
