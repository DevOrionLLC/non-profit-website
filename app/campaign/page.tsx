import Link from "next/link"
import { GlobalCounter } from "@/components/global-counter"

export const metadata = {
  title: "Campaign - DMWF",
  description:
    "Track the DMWF fundraising campaign across five countries and see how contributions are funding student access.",
}

export default function CampaignPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-background py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground md:text-5xl">
            Campaign
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Track the progress of the DMWF pilot funding campaign across five
            countries. Every contribution moves us closer to universal student
            access.
          </p>
        </div>
      </section>

      {/* Global counter */}
      <GlobalCounter />

      {/* Campaign details */}
      <section className="bg-background py-16">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="mb-8 text-center text-2xl font-bold text-foreground md:text-3xl">
            Campaign Structure
          </h2>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="flex flex-col gap-3 rounded-md border border-border bg-card p-6">
              <h3 className="text-lg font-bold text-foreground">
                Per-Student Cost
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Each $300 funds one student for one full year of licensed access
                to self-directed mental wellness tools.
              </p>
            </div>
            <div className="flex flex-col gap-3 rounded-md border border-border bg-card p-6">
              <h3 className="text-lg font-bold text-foreground">
                Collective Funding
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Smaller contributions are combined. Multiple donors can
                collectively fund a single student's full year of access.
              </p>
            </div>
            <div className="flex flex-col gap-3 rounded-md border border-border bg-card p-6">
              <h3 className="text-lg font-bold text-foreground">
                Five-Country Goal
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                The pilot targets 1,000 students in each of five countries: USA,
                Canada, UK, Australia, and New Zealand.
              </p>
            </div>
            <div className="flex flex-col gap-3 rounded-md border border-border bg-card p-6">
              <h3 className="text-lg font-bold text-foreground">
                Total Target
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                5,000 students across five countries. $1,500,000 in total
                funding for one full year of licensed access.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-card py-16">
        <div className="mx-auto flex max-w-2xl flex-col items-center gap-6 px-6 text-center">
          <h2 className="text-2xl font-bold text-foreground">
            Contribute Now
          </h2>
          <p className="text-muted-foreground">
            Every dollar goes directly to funding student access.
          </p>
          <Link
            href="/fund-a-mind"
            className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90"
          >
            Fund a Mind
          </Link>
        </div>
      </section>
    </>
  )
}
