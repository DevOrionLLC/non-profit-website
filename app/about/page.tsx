import Link from "next/link"

export const metadata = {
  title: "About - DMWF",
  description:
    "Learn about the Democratization of Mental Wellness Foundation, its structure, and the people behind the mission.",
}

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-background py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground md:text-5xl">
            About DMWF
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            The Democratization of Mental Wellness Foundation is a Delaware
            nonprofit organization dedicated to removing barriers between
            students and mental wellness tools.
          </p>
        </div>
      </section>

      {/* Organization overview */}
      <section className="bg-card py-16">
        <div className="mx-auto max-w-4xl px-6">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="flex flex-col gap-4">
              <h2 className="text-2xl font-bold text-foreground">
                Our Structure
              </h2>
              <p className="leading-relaxed text-muted-foreground">
                DMWF operates as a fiscally sponsored nonprofit organization
                incorporated in the state of Delaware. Our governance structure
                ensures accountability, transparency, and alignment with our
                core mission.
              </p>
              <p className="leading-relaxed text-muted-foreground">
                We maintain minimal overhead and direct all possible resources
                toward student access funding and independent outcome
                observation.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <h2 className="text-2xl font-bold text-foreground">
                Our Approach
              </h2>
              <p className="leading-relaxed text-muted-foreground">
                DMWF does not build technology. We do not provide therapy or
                diagnosis. We fund the bridge between existing tools and the
                students who need them.
              </p>
              <p className="leading-relaxed text-muted-foreground">
                Our five-country pilot is designed to generate observable,
                reproducible evidence that student-directed mental wellness
                access works at scale.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Links */}
      <section className="bg-background py-16">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="mb-8 text-center text-2xl font-bold text-foreground">
            Learn More
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            {[
              { href: "/founder", label: "Meet the Founder" },
              { href: "/founding-partners", label: "Founding Partners" },
              { href: "/governance", label: "Governance" },
              { href: "/fiscal-sponsorship", label: "Fiscal Sponsorship" },
              { href: "/mission", label: "Our Mission" },
              { href: "/get-involved", label: "Get Involved" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="flex items-center justify-between rounded-md border border-border bg-card px-5 py-4 text-sm font-medium text-foreground hover:border-primary/40 hover:bg-muted"
              >
                <span>{link.label}</span>
                <span className="text-muted-foreground" aria-hidden="true">
                  {"\u2192"}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
