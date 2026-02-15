import Link from "next/link"
import Image from "next/image"

export function PilotSummary() {
  return (
    <section className="bg-card py-20 md:py-28">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-8 px-6 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
          The Pilot
        </h2>

        {/* Pilot diagram */}
        <div className="relative w-full max-w-2xl overflow-hidden rounded-md">
          <Image
            src="/images/pilot-diagram.jpg"
            alt="Pilot program diagram showing five participating countries"
            width={800}
            height={450}
            className="w-full object-contain"
          />
        </div>

        <p className="max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
          DMWF funds licensed student access, coordination, and independent
          observation of outcomes. No funds go to technology development or
          private profit.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/fund-a-mind"
            className="inline-flex items-center justify-center rounded-md bg-primary px-7 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90"
          >
            Fund a Mind
          </Link>
          <Link
            href="/campaign"
            className="inline-flex items-center justify-center rounded-md border border-border bg-background px-7 py-3 text-sm font-semibold text-foreground hover:bg-muted"
          >
            View Campaign
          </Link>
          <Link
            href="/pilot"
            className="inline-flex items-center justify-center rounded-md border border-border bg-background px-7 py-3 text-sm font-semibold text-foreground hover:bg-muted"
          >
            Read Pilot Details
          </Link>
        </div>
      </div>
    </section>
  )
}
