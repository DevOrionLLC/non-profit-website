import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { site } from "@/src/content/site";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { Hero } from "@/components/sections/hero";
import { ProcessSteps } from "@/components/sections/process-steps";
import { TestimonialSlider } from "@/components/sections/testimonial-slider";
import { FAQAccordion } from "@/components/sections/faq-accordion";
import { LeadForm } from "@/components/sections/lead-form";
import { ServiceJsonLd, FAQJsonLd } from "@/components/seo/json-ld";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: site.pages.prefabAanbouw.meta.title,
  description: site.pages.prefabAanbouw.meta.description,
  openGraph: {
    title: site.pages.prefabAanbouw.meta.title,
    description: site.pages.prefabAanbouw.meta.description,
  },
};

export default function PrefabAanbouwPage() {
  const page = site.pages.prefabAanbouw;

  return (
    <>
      <ServiceJsonLd name="Prefab aanbouw" description={page.meta.description} />
      <FAQJsonLd faqs={page.faq} />

      <Breadcrumbs
        items={[
          { label: "Aanbouw", href: "/aanbouw" },
          { label: "Prefab aanbouw" },
        ]}
      />

      <Hero
        kicker={page.hero.kicker}
        title={page.hero.title}
        subtitle={page.hero.subtitle}
        ctas={page.hero.ctas}
        showGrid={false}
      />

      {/* Voordelen Section */}
      <section id="voordelen" className="py-16 lg:py-24 scroll-mt-32">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              {page.voordelen.title}
            </h2>
            <ul className="space-y-3 mb-8">
              {page.voordelen.bullets.map((bullet, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center">
                    <Check className="w-3 h-3 text-primary" />
                  </span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Perfect voor Section */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              {page.perfectVoor.title}
            </h2>
            <ul className="space-y-3 mb-8">
              {page.perfectVoor.bullets.map((bullet, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1 w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center">
                    <Check className="w-3 h-3 text-accent" />
                  </span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
            <Button asChild>
              <Link href="/gratis-offerte">
                Gratis offerte aanvragen
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <ProcessSteps
        title={site.pages.home.sections.processTitle}
        steps={site.pages.home.sections.process}
      />

      <TestimonialSlider
        title="Klanten over KM Aanbouw"
        subtitle="Korte lijnen, strakke oplevering en helder communiceren."
        testimonials={site.testimonials}
      />

      <FAQAccordion title="Veelgestelde vragen over prefab aanbouw" faqs={page.faq} />

      <LeadForm
        title="Gratis offerte aanvragen"
        subtitle="Met richtmaten en foto's van je gevel krijg je sneller een scherpe prijs."
        bullets={[
          "Reactie binnen 1 werkdag",
          "Heldere opties (casco/sleutelklaar)",
          "Kostenindicatie + planning",
        ]}
      />
    </>
  );
}
