import { DonorboxSection } from "@/components/fund/donorbox-section"
import { GoFundMeSection } from "@/components/fund/gofundme-section"
import { GlobalCounter } from "@/components/global-counter"

export const metadata = {
  title: "Fund a Mind - DMWF",
  description:
    "Each $300 funds one student for one full year of access. Smaller contributions combine to fund full access collectively.",
}

export default function FundAMindPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-background py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground md:text-5xl">
            Fund a Mind
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Each $300 funds one student for one full year of access. Smaller
            contributions combine to fund full access collectively.
          </p>
        </div>
      </section>

      {/* Primary Donation — Donorbox */}
      <DonorboxSection />

      {/* Global Counter */}
      <GlobalCounter showButton={false} />

      {/* Secondary Donation — GoFundMe */}
      <GoFundMeSection />
    </>
  )
}
