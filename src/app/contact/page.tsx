import Image from "next/image";
import { ContactForm } from "@/components/contact/ContactForm";
import { Badge } from "@/components/ui/Badge";
import { Icon } from "@/components/ui/Icon";

const CONTACT_CHANNELS = [
  { label: "Email", value: "alex@example.com", icon: "mail" },
  { label: "GitHub", value: "github.com/alexmorgan-dev", icon: "terminal" },
  { label: "LinkedIn", value: "linkedin.com/in/alexmorgan-dev", icon: "hub" },
  { label: "X / Twitter", value: "@alexmorgan_code", icon: "alternate_email" },
];

export default function ContactPage() {
  return (
    <div className="w-full">
      <div className="max-w-[1200px] mx-auto w-full px-4 sm:px-gutter py-space-xl md:py-margin-lg">
        <header className="flex flex-col items-start gap-space-xs max-w-3xl mb-margin-md md:mb-margin-lg">
          <Badge variant="section" dot dotColor="primary">Get in Touch</Badge>
          <h1 className="font-display text-display-mobile sm:text-display text-on-surface tracking-tight mt-space-xs">
            Let&apos;s Work Together<span className="text-primary-container">.</span>
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant mt-space-xs leading-relaxed">
            Explore the contact experience for this fictional portfolio. Complete the demo form to preview local validation without sending any information.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-lg items-start">
          <aside className="lg:col-span-5 flex flex-col gap-space-lg" aria-label="Fictional contact information">
            <section className="flex flex-col gap-space-md p-space-lg rounded-2xl bg-surface-container/70 backdrop-blur-xl shadow-xl border border-white/5" aria-labelledby="direct-channels-title">
              <div className="flex items-center justify-between gap-space-sm">
                <h2 id="direct-channels-title" className="font-label-sm text-label-sm text-outline uppercase tracking-wider">Direct Channels</h2>
                <span className="font-code-inline text-code-inline text-primary-container">DEMO::READY</span>
              </div>

              <div className="flex items-start gap-3 p-space-sm rounded-xl bg-surface-container-high/60 backdrop-blur-md">
                <span className="relative flex h-2.5 w-2.5 mt-1 shrink-0">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-tertiary opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-tertiary shadow-[0_0_8px_rgba(104,245,184,0.9)]" />
                </span>
                <div className="flex flex-col">
                  <span className="font-label-sm text-label-sm text-tertiary uppercase tracking-wider">Portfolio Status</span>
                  <p className="font-body-sm text-body-sm text-on-surface font-medium mt-0.5">Fictional profile shown for demonstration only</p>
                </div>
              </div>

              <div className="flex flex-col gap-space-sm pt-space-xs">
                {CONTACT_CHANNELS.map((channel) => (
                  <div key={channel.label} className="flex items-center justify-between gap-space-sm p-space-md rounded-xl bg-surface-container-low shadow-sm">
                    <div className="flex items-center gap-space-sm min-w-0">
                      <div className="w-10 h-10 rounded-lg bg-surface-container-high flex items-center justify-center text-primary shrink-0">
                        <Icon name={channel.icon} size={20} />
                      </div>
                      <div className="flex flex-col min-w-0">
                        <span className="font-label-sm text-label-sm text-outline uppercase">{channel.label}</span>
                        <span className="font-body-md text-body-md text-on-surface break-all sm:break-normal">{channel.value}</span>
                      </div>
                    </div>
                    <span className="font-label-sm text-label-sm text-outline shrink-0">SHOWCASE</span>
                  </div>
                ))}
              </div>

              <div className="p-space-md rounded-xl bg-surface-container-low flex items-start gap-space-sm mt-space-xs">
                <Icon name="location_on" size={20} className="text-primary shrink-0 mt-0.5" />
                <div className="flex flex-col">
                  <span className="font-label-sm text-label-sm text-outline uppercase">Sample Location</span>
                  <span className="font-body-sm text-body-sm text-on-surface mt-0.5 font-medium">San Francisco, CA · Remote-friendly concept</span>
                </div>
              </div>

              <div className="flex items-start gap-space-sm px-space-sm text-on-surface-variant font-body-sm text-body-sm">
                <Icon name="info" size={18} className="text-secondary shrink-0 mt-0.5" />
                <span>These identities are illustrative and are not active contact destinations.</span>
              </div>
            </section>

            <section className="relative overflow-hidden rounded-2xl bg-surface-container p-space-md shadow-lg border border-white/5 flex items-center gap-space-md" aria-label="Sample office environment">
              <Image
                className="w-16 h-16 rounded-xl object-cover shrink-0 shadow-md"
                src="/images/office-environment.jpg"
                alt="Fictional developer workspace with cyan ambient lighting"
                width={64}
                height={64}
                unoptimized
              />
              <div className="flex flex-col min-w-0">
                <span className="font-label-sm text-label-sm text-primary uppercase tracking-wider">Office Environment</span>
                <span className="font-title-md text-title-md text-on-surface">Sample Remote Workspace</span>
                <span className="font-body-sm text-body-sm text-outline">Async-first workflow concept</span>
              </div>
            </section>
          </aside>

          <section className="lg:col-span-7" aria-label="Contact form demonstration">
            <ContactForm />
          </section>
        </div>
      </div>
    </div>
  );
}
