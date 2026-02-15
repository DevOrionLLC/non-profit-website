import Link from "next/link"

export const metadata = {
  title: "Founding Partners - DMWF",
  description: "Organizations and individuals who helped establish the DMWF pilot program.",
}

export default function FoundingPartnersPage() {
  return (
    <>
      <section className="bg-background py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground md:text-5xl">
            Founding Partners
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            The organizations and individuals whose early support made the DMWF
            pilot program possible.
          </p>
        </div>
      </section>

      <section className="bg-card py-16">
        <div className="mx-auto max-w-4xl px-6">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="flex flex-col gap-3 rounded-md border border-border bg-background p-6">
              <h2 className="text-lg font-bold text-foreground">
                Institutional Partners
              </h2>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Educational institutions participating in the pilot program as
                founding sites. Partner institutions are listed as they are
                confirmed and onboarded.
              </p>
            </div>
            <div className="flex flex-col gap-3 rounded-md border border-border bg-background p-6">
              <h2 className="text-lg font-bold text-foreground">
                Individual Supporters
              </h2>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Early individual supporters who provided founding contributions
                and guidance. Recognized with permission.
              </p>
            </div>
            <div className="flex flex-col gap-3 rounded-md border border-border bg-background p-6 md:col-span-2">
              <h2 className="text-lg font-bold text-foreground">
                Become a Founding Partner
              </h2>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Founding partner opportunities remain available for institutions
                and individuals who want to support the pilot at its earliest
                stages. Contact us to learn more.
              </p>
              <div className="mt-2 flex gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-primary/90"
                >
                  Contact Us
                </Link>
                <Link
                  href="/fund-a-mind"
                  className="inline-flex items-center justify-center rounded-md border border-border bg-background px-5 py-2.5 text-sm font-semibold text-foreground hover:bg-muted"
                >
                  Fund a Mind
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
