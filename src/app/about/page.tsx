import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "@/components/ui/Icon";
import { Button } from "@/components/ui/Button";

/* -------------------------------------------------------------------------- */
/*  Data                                                                       */
/* -------------------------------------------------------------------------- */

const QUICK_FACTS = [
  { icon: "location_on", label: "Sample Location", value: "San Francisco, CA (Remote)" },
  { icon: "badge", label: "Sample Role", value: "Senior Full-Stack Engineer" },
  { icon: "hub", label: "Illustrative Focus", value: "Web Apps & Distributed Systems" },
  { icon: "school", label: "Sample Education", value: "B.S. Computer Science" },
];

const SKILL_COLUMNS = [
  {
    icon: "devices",
    iconColor: "text-primary",
    iconGlow: "shadow-[0_0_12px_rgba(34,211,238,0.25)]",
    tierColor: "text-primary-fixed",
    barColor: "bg-primary-container",
    barGlow: "shadow-[0_0_8px_rgba(34,211,238,0.6)]",
    valueColor: "text-primary-container",
    title: "Frontend Architecture",
    subtitle: "Reactive components, edge rendering & system tokens.",
    skills: [
      { label: "Next.js 14/15 & React", pct: 98 },
      { label: "TypeScript & ES6+", pct: 95 },
      { label: "Tailwind CSS & Token Systems", pct: 96 },
    ],
    tags: ["React", "Next.js", "TypeScript", "JavaScript (ES6+)", "Tailwind CSS", "Redux/Zustand", "HTML5/CSS3"],
  },
  {
    icon: "database",
    iconColor: "text-tertiary",
    iconGlow: "shadow-[0_0_12px_rgba(104,245,184,0.25)]",
    tierColor: "text-tertiary",
    barColor: "bg-tertiary",
    barGlow: "shadow-[0_0_8px_rgba(104,245,184,0.6)]",
    valueColor: "text-tertiary",
    title: "Backend & Databases",
    subtitle: "APIs, data models & resilient serverless functions.",
    skills: [
      { label: "Node.js & Express", pct: 92 },
      { label: "PostgreSQL & Prisma ORM", pct: 90 },
      { label: "REST & GraphQL APIs", pct: 94 },
    ],
    tags: ["Node.js", "Express", "PostgreSQL", "Prisma ORM", "Supabase", "REST APIs", "GraphQL"],
  },
  {
    icon: "cloud_sync",
    iconColor: "text-secondary",
    iconGlow: "shadow-[0_0_12px_rgba(76,215,246,0.25)]",
    tierColor: "text-secondary",
    barColor: "bg-secondary",
    barGlow: "shadow-[0_0_8px_rgba(76,215,246,0.6)]",
    valueColor: "text-secondary",
    title: "DevOps & Tooling",
    subtitle: "Automated deployments, testing pipelines & design handoffs.",
    skills: [
      { label: "Docker & Containers", pct: 86 },
      { label: "Vercel & AWS (S3, CloudFront)", pct: 91 },
      { label: "CI/CD & Automated Testing (Jest/Playwright)", pct: 89 },
    ],
    tags: ["Git & GitHub", "Docker", "Vercel", "AWS", "CI/CD", "Figma", "Jest / Playwright"],
  },
];

const TIMELINE = [
  {
    period: "2023 — Present",
    periodStyle: "bg-primary-container/20 text-primary-fixed border border-primary-container/30",
    nodeStyle:
      "border-primary-container shadow-[0_0_12px_rgba(34,211,238,0.9)]",
    dotStyle: "bg-primary-container",
    tag: "Lead Engineer // Full-Stack",
    title: "Senior Full-Stack Developer",
    description:
      "Leading frontend architecture and modern web application development. Driving migration to Next.js App Router, mentoring junior and mid-level engineers, and standardising end-to-end type safety across the complete cloud footprint.",
    techLabel: "Key Technologies:",
    tech: "Next.js, TypeScript, Tailwind, GraphQL, AWS",
    disclaimer: "Illustrative sample content",
  },
  {
    period: "2021 — 2023",
    periodStyle: "bg-surface-container-high text-on-surface-variant",
    nodeStyle: "border-primary shadow-[0_0_8px_rgba(138,235,255,0.7)]",
    dotStyle: "bg-primary",
    tag: "Distributed Applications",
    title: "Full-Stack Engineer",
    description:
      "Built responsive component libraries, scalable microservices, and high-throughput data synchronisation endpoints. Applied aggressive caching strategies and optimised bundle sizes to improve page load performance.",
    techLabel: "Key Technologies:",
    tech: "React, Node.js, Express, PostgreSQL, Prisma, Docker",
    disclaimer: "Illustrative sample content",
  },
  {
    period: "2019 — 2021",
    periodStyle: "bg-surface-container-high text-on-surface-variant",
    nodeStyle: "border-secondary shadow-[0_0_8px_rgba(76,215,246,0.5)]",
    dotStyle: "bg-secondary",
    tag: "UI Systems & Web",
    title: "Frontend Developer & UI Designer",
    description:
      "Designed enterprise design systems and delivered client-facing web portals. Partnered closely with design and product leads in Figma, translating wireframes directly into polished accessible web interfaces.",
    techLabel: "Key Technologies:",
    tech: "JavaScript ES6+, React, Figma, Sass, Webpack, Jest",
    disclaimer: "Illustrative sample content",
  },
  {
    period: "2019",
    periodStyle: "bg-surface-container-high text-on-surface-variant",
    nodeStyle: "border-outline",
    dotStyle: "bg-outline",
    tag: "Academic Foundation",
    title: "B.S. Computer Science Graduate",
    description:
      "Graduated with honors. Focused on core software engineering methodologies, data structures, algorithms, and human-computer interaction (HCI) research.",
    techLabel: "Focus:",
    tech: "Distributed Systems, Algorithms, Interaction Design",
    disclaimer: "Illustrative sample content",
  },
];

/* -------------------------------------------------------------------------- */
/*  Metric Bento                                                               */
/* -------------------------------------------------------------------------- */

const BENTO = [
  {
    label: "Experience",
    value: "4+ Yrs*",
    sub: "Illustrative timeline",
    valueColor: "text-primary",
  },
  {
    label: "Lighthouse",
    value: "~95+*",
    sub: "Illustrative target score",
    valueColor: "text-tertiary",
  },
  {
    label: "Repositories",
    value: "40+*",
    sub: "Illustrative showcase count",
    valueColor: "text-secondary",
  },
];

/* -------------------------------------------------------------------------- */
/*  Page Component                                                             */
/* -------------------------------------------------------------------------- */

export default function AboutPage() {
  return (
    <div className="flex flex-col w-full overflow-x-hidden">
      <div className="max-w-[1200px] w-full mx-auto px-gutter py-space-xl flex flex-col gap-margin-lg">

        {/* ── Page Header ─────────────────────────────────────────────────── */}
        <header className="flex flex-col items-start gap-space-sm max-w-3xl">
          <div className="flex items-center gap-space-xs px-3 py-1 rounded-full bg-surface-container-high/80 shadow-[0_0_12px_rgba(34,211,238,0.12)]">
            <span className="h-1.5 w-1.5 rounded-full bg-primary-container shadow-[0_0_6px_rgba(34,211,238,0.8)]" />
            <span className="font-label-sm text-label-sm text-primary tracking-widest uppercase">
              Fictional Profile
            </span>
          </div>
          <h1 className="font-display text-display-mobile sm:text-display text-on-surface tracking-tight">
            About Me
            <span className="text-primary-container inline-block shadow-[0_0_12px_rgba(34,211,238,0.6)]">
              .
            </span>
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
            An illustrative developer profile focused on craft, performance, and user-centric software.
          </p>
        </header>

        {/* ── Profile & Story (2-Column) ──────────────────────────────────── */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-lg items-start">

          {/* Left: Portrait + Quick Facts */}
          <div className="lg:col-span-5 flex flex-col gap-space-lg">

            {/* Portrait */}
            <div className="relative group rounded-2xl p-1 bg-gradient-to-b from-primary-container/20 via-surface-container to-surface-container-low shadow-[0_10px_35px_-8px_rgba(0,0,0,0.6),0_0_30px_rgba(34,211,238,0.15)]">
              <div className="relative overflow-hidden rounded-2xl bg-surface-container-lowest aspect-square">
                <Image
                  src="/images/alex-morgan-portrait.jpg"
                  alt="Professional studio portrait of Alex Morgan — fictional sample developer"
                  width={500}
                  height={500}
                  className="w-full h-full object-cover object-center group-hover:scale-[1.02] transition-transform duration-500 ease-out"
                  unoptimized
                  priority
                />
                {/* Bottom gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest/90 via-transparent to-transparent opacity-80 pointer-events-none" />
                {/* Name + timezone overlay */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-surface-container-lowest/80 backdrop-blur-md">
                    <span className="h-2 w-2 rounded-full bg-tertiary shadow-[0_0_8px_rgba(104,245,184,0.8)]" />
                    <span className="font-badge-label text-badge-label text-on-surface">Alex Morgan</span>
                  </div>
                  <span className="font-code-inline text-code-inline text-primary-container px-2.5 py-1 rounded-lg bg-surface-container-high/90 backdrop-blur-md">
                    SF / PST
                  </span>
                </div>
              </div>
            </div>

            {/* Quick Facts Card */}
            <div className="rounded-2xl p-space-lg bg-surface-container/70 backdrop-blur-md shadow-md flex flex-col gap-space-md">
              <div className="flex items-center justify-between pb-space-xs">
                <span className="font-label-sm text-label-sm text-outline uppercase tracking-wider">
                  Illustrative // Quick Facts
                </span>
                <Icon name="terminal" size={18} className="text-outline" />
              </div>
              <div className="grid grid-cols-1 gap-space-sm font-body-sm text-body-sm">
                {QUICK_FACTS.map(({ icon, label, value }) => (
                  <div
                    key={label}
                    className="flex items-start justify-between gap-space-sm p-space-sm rounded-lg bg-surface-container-low/60 hover:bg-surface-container-high/50 transition-colors"
                  >
                    <span className="text-on-surface-variant flex items-center gap-2 shrink-0">
                      <Icon name={icon} size={16} className="text-primary" />
                      {label}
                    </span>
                    <span className="font-body-md text-on-surface font-semibold text-right">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Terminal + Bio + Metrics */}
          <div className="lg:col-span-7 min-w-0 flex flex-col gap-space-lg">

            {/* bio.manifest.ts Terminal Block */}
            <div className="w-full min-w-0 max-w-full rounded-2xl overflow-hidden bg-surface-container-lowest shadow-xl">
              {/* Window Bar */}
              <div className="min-h-10 px-3 sm:px-4 py-2 sm:py-0 bg-surface-container-high/80 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1.5 sm:gap-3">
                <div className="flex items-center gap-2 min-w-0">
                  <span className="h-2.5 w-2.5 rounded-full bg-error" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#f59e0b]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-tertiary" />
                  <span className="font-code-inline text-label-sm text-on-surface-variant ml-1 sm:ml-2 truncate">
                    bio.manifest.ts
                  </span>
                </div>
                <span className="font-label-sm text-label-sm text-outline pl-[54px] sm:pl-0">UTF-8 // ReadOnly</span>
              </div>
              {/* Code Body */}
              <div className="max-w-full overflow-x-auto overscroll-x-contain p-space-md sm:p-space-lg font-code-block text-[12px] leading-5 sm:text-code-block sm:leading-relaxed flex flex-col gap-space-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary-container/60" tabIndex={0} aria-label="Scrollable fictional developer profile code sample">
                <p className="text-outline whitespace-pre">
                  <span className="text-primary-container">const</span>
                  {" engineer = "}
                  <span className="text-tertiary">new</span>
                  {" "}
                  <span className="text-secondary">DeveloperProfile</span>
                  {"({"}
                </p>
                <p className="text-on-surface-variant pl-4">
                  {"  name: "}
                  <span className="text-tertiary">&quot;Alex Morgan&quot;</span>
                  {","}
                </p>
                <p className="text-on-surface-variant pl-4">
                  {"  status: "}
                  <span className="text-primary-container">&quot;Architecting Next-Gen Platforms&quot;</span>
                  {","}
                </p>
                <p className="text-on-surface-variant pl-4">
                  {"  experience: "}
                  <span className="text-tertiary">&quot;Illustrative 4+ years&quot;</span>
                  {","}
                </p>
                <p className="text-on-surface-variant pl-4">
                  {"  type: "}
                  <span className="text-tertiary">&quot;Fictional sample profile&quot;</span>
                  {","}
                </p>
                <p className="text-outline">{"});"}</p>
              </div>
            </div>

            {/* Narrative Bio Card */}
            <div className="rounded-2xl p-space-lg bg-surface-container/70 backdrop-blur-md shadow-md flex flex-col gap-space-md">
              <div className="flex items-center gap-space-xs text-primary">
                <Icon name="psychology" size={20} />
                <span className="font-title-md text-title-md text-on-surface font-semibold">
                  Narrative &amp; Perspective
                </span>
              </div>
              <div className="flex flex-col gap-space-md font-body-md text-body-md text-on-surface leading-relaxed">
                <p>
                  Hello! I&apos;m{" "}
                  <strong className="text-primary-fixed font-semibold">Alex Morgan</strong>, a
                  full-stack web developer passionate about bridging technical rigour with delightful,
                  human-centred UI. This is a fictional sample portfolio created for the K-Youth
                  Development Programme 2026 Vibe Coding Challenge.
                </p>
                <p className="text-on-surface-variant">
                  Over the past 4+ years (illustrative), I have specialised in building accessible,
                  blazing-fast web applications using{" "}
                  <span className="text-on-surface font-semibold">Next.js</span>,{" "}
                  <span className="text-on-surface font-semibold">TypeScript</span>, and modern cloud
                  ecosystem tooling. My focus is delivering production-grade digital products that
                  don&apos;t compromise between robust architecture and ergonomic aesthetics.
                </p>
                <p className="text-on-surface-variant">
                  When I&apos;m not writing code or refining design systems, you&apos;ll find me
                  exploring open-source projects, writing technical deep-dives on web performance, or
                  mentoring emerging junior developers in engineering fundamentals.
                </p>
              </div>
            </div>

            {/* Metric Bento Trio */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-space-md">
              {BENTO.map(({ label, value, sub, valueColor }) => (
                <div
                  key={label}
                  className="rounded-xl p-space-md bg-surface-container-low/80 flex flex-col items-start gap-1 hover:bg-surface-container-high transition-colors shadow-sm"
                >
                  <span className="font-label-sm text-label-sm text-outline uppercase tracking-wider">
                    {label}
                  </span>
                  <span className={`font-headline-md text-headline-md ${valueColor} font-bold`}>
                    {value}
                  </span>
                  <span className="font-body-sm text-body-sm text-on-surface-variant">{sub}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Core Tech Stack & Skill Matrix ─────────────────────────────── */}
        <section className="flex flex-col gap-space-lg">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-space-xs">
            <div>
              <span className="font-label-sm text-label-sm text-primary tracking-widest uppercase">
                Competencies
              </span>
              <h2 className="font-headline-lg text-headline-lg text-on-surface">
                Core Tech Stack &amp; Skill Matrix
              </h2>
            </div>
            <span className="font-code-inline text-code-inline text-outline">
              Ecosystem v2025 // Illustrative
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter-lg">
            {SKILL_COLUMNS.map((col) => (
              <div
                key={col.title}
                className="rounded-2xl p-space-lg bg-surface-container/70 backdrop-blur-md shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col gap-space-md"
              >
                {/* Header row */}
                <div className="flex items-center justify-between">
                  <div
                    className={`h-10 w-10 rounded-xl bg-surface-container-high flex items-center justify-center ${col.iconColor} ${col.iconGlow}`}
                  >
                    <Icon name={col.icon} size={22} />
                  </div>
                  <span
                    className={`font-badge-label text-badge-label px-2.5 py-1 rounded-full bg-surface-container-high ${col.tierColor}`}
                  >
                    Tier 1
                  </span>
                </div>

                {/* Title */}
                <div>
                  <h3 className="font-title-md text-title-md text-on-surface">{col.title}</h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                    {col.subtitle}
                  </p>
                </div>

                {/* Proficiency Bars — values are illustrative */}
                <div className="flex flex-col gap-3 pt-2">
                  {col.skills.map((sk) => (
                    <div key={sk.label}>
                      <div className="flex justify-between font-label-sm text-label-sm text-on-surface mb-1">
                        <span>{sk.label}</span>
                        <span className={col.valueColor}>{sk.pct}%</span>
                      </div>
                      <div className="h-1.5 w-full bg-surface-container-high rounded-full overflow-hidden">
                        <div
                          className={`h-full ${col.barColor} ${col.barGlow}`}
                          style={{ width: `${sk.pct}%` }}
                          role="progressbar"
                          aria-valuenow={sk.pct}
                          aria-valuemin={0}
                          aria-valuemax={100}
                          aria-label={`${sk.label}: ${sk.pct}% (illustrative)`}
                        />
                      </div>
                    </div>
                  ))}
                  <p className="font-label-sm text-label-sm text-outline italic">
                    * Values are illustrative, not verified scores.
                  </p>
                </div>

                {/* Pill Tags */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {col.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-badge-label text-badge-label px-2.5 py-1 rounded-full bg-surface-container-low text-on-surface-variant"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Career & Learning Timeline ─────────────────────────────────── */}
        <section className="flex flex-col gap-space-lg">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-space-xs">
            <div>
              <span className="font-label-sm text-label-sm text-primary tracking-widest uppercase">
                Chronology
              </span>
              <h2 className="font-headline-lg text-headline-lg text-on-surface">
                Career &amp; Learning Timeline
              </h2>
            </div>
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-tertiary animate-pulse" />
              <span className="font-label-sm text-label-sm text-on-surface-variant">
                Continuously evolving — illustrative sample
              </span>
            </div>
          </div>

          {/* Vertical timeline */}
          <div className="relative pl-6 sm:pl-10 ml-2 sm:ml-4 flex flex-col gap-space-lg">
            {/* Track line */}
            <div className="absolute left-0 top-3 bottom-3 w-0.5 bg-gradient-to-b from-primary-container via-surface-container-high to-surface-container-lowest" />

            {TIMELINE.map((item, idx) => (
              <div key={idx} className="relative group">
                {/* Node */}
                <div
                  className={`absolute -left-[31px] sm:-left-[47px] top-1.5 h-4 w-4 rounded-full bg-surface-container-lowest border-2 ${item.nodeStyle} flex items-center justify-center`}
                >
                  <span className={`h-1.5 w-1.5 rounded-full ${item.dotStyle}`} />
                </div>

                {/* Card */}
                <div className="p-space-lg rounded-2xl bg-surface-container/70 backdrop-blur-md shadow-md group-hover:bg-surface-container-high/60 transition-all flex flex-col gap-space-xs">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span
                      className={`font-badge-label text-badge-label px-2.5 py-0.5 rounded-full ${item.periodStyle}`}
                    >
                      {item.period}
                    </span>
                    <span className="font-code-inline text-code-inline text-outline">{item.tag}</span>
                  </div>

                  <h3 className="font-headline-sm text-headline-sm text-on-surface mt-1">
                    {item.title}
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                    {item.description}
                  </p>
                  <div className="flex flex-wrap gap-2 pt-space-xs items-baseline">
                    <span className="font-label-sm text-label-sm text-outline">{item.techLabel}</span>
                    <span className="font-code-inline text-code-inline text-on-surface">{item.tech}</span>
                  </div>
                  <p className="font-label-sm text-label-sm text-outline/60 italic mt-1">
                    ✦ {item.disclaimer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Contact CTA Banner ─────────────────────────────────────────── */}
        <section className="rounded-2xl p-space-xl bg-gradient-to-r from-surface-container-low via-surface-container to-surface-container-high shadow-xl relative overflow-hidden flex flex-col md:flex-row items-start md:items-center justify-between gap-space-lg">
          {/* Content */}
          <div className="relative z-10 flex flex-col gap-space-xs max-w-xl">
            <span className="font-label-sm text-label-sm text-primary uppercase tracking-widest">
              Let&apos;s Build Together
            </span>
            <h3 className="font-headline-md text-headline-md text-on-surface">
              Interested in working on a project or discussing architecture?
            </h3>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Alex is open to select engineering consultancies, technical leadership roles, and
              full-time senior engagements — this is a fictional showcase portfolio.
            </p>
          </div>

          {/* Actions */}
          <div className="relative z-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-space-sm w-full md:w-auto">
            <Button
              href="/contact"
              variant="primary"
              size="lg"
              icon="arrow_forward"
              className="w-full sm:w-auto"
            >
              Get in Touch
            </Button>
            <Link
              href="/projects"
              className="w-full sm:w-auto px-space-lg py-3 rounded-xl font-title-md text-body-md font-semibold bg-surface-container-high/80 text-on-surface hover:bg-surface-container-highest transition-all flex items-center justify-center"
            >
              View Projects
            </Link>
          </div>

          {/* Ambient background glyph */}
          <div className="absolute -right-10 -bottom-10 pointer-events-none opacity-5 text-on-surface">
            <Icon name="code" size={200} />
          </div>
        </section>

      </div>
    </div>
  );
}
