import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { site } from "@/src/content/site";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { Hero } from "@/components/sections/hero";
import { TestimonialSlider } from "@/components/sections/testimonial-slider";
import { LeadForm } from "@/components/sections/lead-form";
import { ServiceJsonLd } from "@/components/seo/json-ld";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: site.pages.traditioneleAanbouw.meta.title,
  description: site.pages.traditioneleAanbouw.meta.description,
  openGraph: {
    title: site.pages.traditioneleAanbouw.meta.title,
    description: site.pages.traditioneleAanbouw.meta.description,
  },
};

export default function TraditioneleAanbouwPage() {
  const page = site.pages.traditioneleAanbouw;

  return (
    <>
      <ServiceJsonLd name="Traditionele aanbouw" description={page.meta.description} />

      <Breadcrumbs
        items={[
          { label: "Aanbouw", href: "/aanbouw" },
          { label: "Traditionele aanbouw" },
        ]}
      />

      <Hero
        kicker={page.hero.kicker}
        title={page.hero.title}
        subtitle={page.hero.subtitle}
        ctas={page.hero.ctas}
        showGrid={false}
      />

      {/* Wanneer traditioneel slim is */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              {page.wanneerSlim.title}
            </h2>
            <ul className="space-y-3 mb-8">
              {page.wanneerSlim.bullets.map((bullet, i) => (
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

      {/* Resultaat: één geheel */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {page.resultaat.title}
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              {page.resultaat.text}
            </p>
            <Button asChild>
              <Link href="/gratis-offerte">
                Vraag een offerte aan
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <TestimonialSlider
        title="Klanten over KM Aanbouw"
        subtitle="Korte lijnen, strakke oplevering en helder communiceren."
        testimonials={site.testimonials}
      />

      <LeadForm
        title="Wil je een aanbouw die eruitziet alsof hij er altijd al zat?"
        subtitle="Vraag een offerte aan."
        bullets={[
          "Reactie binnen 1 werkdag",
          "Maximaal maatwerk",
          "Passend bij jouw woning",
        ]}
      />
    </>
  );
}
