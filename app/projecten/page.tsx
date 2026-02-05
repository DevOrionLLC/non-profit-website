import type { Metadata } from "next";
import { site } from "@/src/content/site";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { Hero } from "@/components/sections/hero";
import { ProjectGrid } from "@/components/sections/project-grid";
import { CTASection } from "@/components/sections/cta-section";

export const metadata: Metadata = {
  title: site.pages.projecten.meta.title,
  description: site.pages.projecten.meta.description,
  openGraph: {
    title: site.pages.projecten.meta.title,
    description: site.pages.projecten.meta.description,
  },
};

export default function ProjectenPage() {
  const page = site.pages.projecten;

  return (
    <>
      <Breadcrumbs items={[{ label: "Projecten" }]} />

      <Hero
        kicker={page.hero.kicker}
        title={page.hero.title}
        subtitle={page.hero.subtitle}
        ctas={page.hero.ctas}
        showGrid={false}
      />

      <ProjectGrid
        title="Bekijk onze projecten"
        subtitle="Voor/na foto's + korte uitleg (wens, oplossing, resultaat)"
        projects={site.projects}
        showFilters={true}
        categories={page.categories}
      />

      <CTASection
        title="Wil je iets vergelijkbaars?"
        subtitle="Vraag een offerte aan."
        primaryCta={site.global.primaryCta}
      />
    </>
  );
}
