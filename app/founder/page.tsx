import Link from "next/link"

export const metadata = {
  title: "Founder - DMWF",
  description: "Meet the founder of the Democratization of Mental Wellness Foundation.",
}

export default function FounderPage() {
  return (
    <>
      <section className="bg-background py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground md:text-5xl">
            Founder
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            The vision behind the Democratization of Mental Wellness Foundation.
          </p>
        </div>
      </section>

      <section className="bg-card py-16">
        <div className="mx-auto max-w-3xl px-6">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-3 rounded-md border border-border bg-background p-6">
              <h2 className="text-xl font-bold text-foreground">
                Vision Statement
              </h2>
              <p className="leading-relaxed text-muted-foreground">
                DMWF was founded on the belief that every student, regardless of
                geography, income, or institutional affiliation, should have
                access to the internal tools that support mental wellness. This
                is not about therapy or diagnosis. It is about access.
              </p>
            </div>

            <div className="flex flex-col gap-3 rounded-md border border-border bg-background p-6">
              <h2 className="text-xl font-bold text-foreground">
                Background
              </h2>
              <p className="leading-relaxed text-muted-foreground">
                The founder brings experience in education, technology, and
                nonprofit operations. The foundation was established to address a
                specific gap: the lack of funded, observable, student-directed
                mental wellness access at scale.
              </p>
            </div>

            <div className="flex justify-center">
              <Link
                href="/about"
                className="inline-flex items-center justify-center rounded-md border border-border bg-background px-6 py-3 text-sm font-semibold text-foreground hover:bg-muted"
              >
                Back to About
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
