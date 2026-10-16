import { ProjectsGallery, type PortfolioProject } from "@/components/projects/ProjectsGallery";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";

const PROJECTS: PortfolioProject[] = [
  {
    id: "taskflow",
    filterCategory: "full-stack",
    title: "TaskFlow — Sprint & Productivity Platform",
    category: "Full-Stack / Productivity",
    description: "A fictional collaborative task and workflow concept featuring interactive Kanban boards, sprint analytics, and instant notification sync.",
    image: "/images/taskflow-project.jpg",
    imageAlt: "TaskFlow fictional sprint dashboard concept with Kanban boards and analytics",
    windowTitle: "taskflow-app.concept",
    statusText: "Sample Concept",
    iconName: "devices",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL", "Prisma", "WebSockets"],
  },
  {
    id: "shopnest",
    filterCategory: "full-stack",
    title: "ShopNest — Modern Headless E-Commerce",
    category: "E-Commerce / Full-Stack",
    description: "A fictional headless commerce storefront concept with multi-currency browsing, a streamlined cart experience, and an illustrative Stripe integration.",
    image: "/images/shopnest-project.jpg",
    imageAlt: "ShopNest fictional headless commerce storefront concept",
    windowTitle: "shopnest-storefront.concept",
    statusText: "Sample Concept",
    iconName: "shopping_bag",
    technologies: ["React", "Next.js", "Tailwind CSS", "Stripe API", "Redis", "Zustand"],
  },
  {
    id: "weatherly",
    filterCategory: "frontend",
    title: "Weatherly — Meteorological Intelligence",
    category: "Web Application / Frontend",
    description: "A fictional weather visualization concept exploring radar mapping, hourly precipitation forecasts, and configurable meteorological alerts.",
    image: "/images/weatherly-project.jpg",
    imageAlt: "Weatherly fictional meteorological radar and forecast interface concept",
    windowTitle: "weatherly-telemetry.concept",
    statusText: "Sample Concept",
    iconName: "radar",
    technologies: ["Next.js", "TypeScript", "OpenWeather API", "Leaflet.js", "Tailwind CSS"],
  },
  {
    id: "insightboard",
    filterCategory: "dashboard",
    title: "InsightBoard — SaaS Business Intelligence",
    category: "Analytics / Dashboard",
    description: "A fictional business intelligence dashboard concept for visualizing recurring revenue, retention cohorts, conversion funnels, and event telemetry.",
    image: "/images/insightboard-project.jpg",
    imageAlt: "InsightBoard fictional SaaS analytics dashboard concept with charts and cohort data",
    windowTitle: "analytics.insightboard.concept",
    statusText: "Sample Concept",
    iconName: "query_stats",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Chart.js", "Node.js", "PostgreSQL"],
  },
];

export default function ProjectsPage() {
  return (
    <div className="w-full">
      <div className="max-w-[1200px] mx-auto w-full px-4 sm:px-gutter py-space-xl md:py-margin-lg">
        <header className="flex flex-col gap-space-lg mb-margin-lg">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-space-lg">
            <div className="flex flex-col items-start gap-space-sm">
              <Badge variant="section" dot dotColor="primary">Portfolio</Badge>
              <h1 className="font-display text-display-mobile sm:text-display text-on-surface tracking-tight">
                Selected <span className="text-primary drop-shadow-[0_0_24px_rgba(34,211,238,0.35)]">Projects</span>
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mt-space-xs">
                Four fictional product concepts demonstrating responsive interfaces, scalable architecture, and thoughtful frontend craft.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-space-md text-outline font-label-sm text-label-sm" aria-label="Portfolio project summary">
              <span className="flex items-center gap-1.5"><Icon name="verified" size={18} className="text-primary" />4 Sample Concepts</span>
              <span className="hidden sm:inline text-outline-variant" aria-hidden="true">•</span>
              <span className="flex items-center gap-1.5"><Icon name="code" size={18} className="text-tertiary" />Fictional Portfolio Work</span>
            </div>
          </div>
        </header>

        <ProjectsGallery projects={PROJECTS} />

        <section className="mt-margin-lg rounded-2xl bg-surface-container-low/90 backdrop-blur-md p-space-lg md:p-space-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-space-lg shadow-xl border border-white/5" aria-labelledby="projects-cta-title">
          <div className="flex flex-col gap-space-xs max-w-xl">
            <div className="flex items-center gap-2">
              <Icon name="layers" size={20} className="text-primary" />
              <span className="font-label-sm text-label-sm text-primary uppercase tracking-wider">Engineering Approach</span>
            </div>
            <h2 id="projects-cta-title" className="font-headline-sm text-headline-sm text-on-surface">Have a real product idea to explore?</h2>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Let&apos;s discuss how a clear design system, accessible components, and maintainable TypeScript architecture could support it.
            </p>
          </div>
          <Button href="/contact" variant="primary" size="lg" icon="east" className="w-full sm:w-auto shrink-0">Start a Conversation</Button>
        </section>
      </div>
    </div>
  );
}
