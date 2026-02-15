export const metadata = {
  title: "Fiscal Sponsorship - DMWF",
  description: "Information about DMWF's fiscal sponsorship structure and tax-deductible donations.",
}

export default function FiscalSponsorshipPage() {
  return (
    <>
      <section className="bg-background py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground md:text-5xl">
            Fiscal Sponsorship
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Understanding DMWF's fiscal sponsorship structure and how your
            donations are processed and protected.
          </p>
        </div>
      </section>

      <section className="bg-card py-16">
        <div className="mx-auto max-w-3xl px-6">
          <div className="flex flex-col gap-10">
            {[
              {
                title: "What Is Fiscal Sponsorship?",
                content:
                  "Fiscal sponsorship is a formal arrangement in which a 501(c)(3) public charity sponsors a project that may lack exempt status. This arrangement allows the sponsored project to receive tax-deductible donations under the sponsor's exempt status.",
              },
              {
                title: "How It Works for DMWF",
                content:
                  "DMWF operates under a fiscal sponsorship arrangement that enables tax-deductible donations while maintaining full transparency and accountability in how funds are allocated to the pilot program.",
              },
              {
                title: "Tax Deductibility",
                content:
                  "Donations made through DMWF's fiscal sponsor are tax-deductible to the fullest extent permitted by law. Donors receive tax receipts for all contributions.",
              },
              {
                title: "Fund Allocation",
                content:
                  "All funds received through the fiscal sponsorship are allocated directly to pilot program operations: student access licensing, coordination, and independent outcome observation. No funds are allocated to technology development or private profit.",
              },
            ].map((section) => (
              <div key={section.title} className="flex flex-col gap-3">
                <h2 className="text-xl font-bold text-foreground">
                  {section.title}
                </h2>
                <p className="leading-relaxed text-muted-foreground">
                  {section.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
