import Link from "next/link"
import Image from "next/image"

export const metadata = {
  title: "Mission - DMWF",
  description:
    "DMWF exists to remove the barriers between students and the internal tools that support their mental wellness.",
}

export default function MissionPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-background py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground md:text-5xl">
            Mission
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            DMWF exists to remove the barriers between students and the internal
            tools that support their mental wellness.
          </p>
        </div>
      </section>

      {/* Core belief */}
      <section className="bg-card py-16">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 md:grid-cols-2">
          <div className="relative aspect-[4/3] overflow-hidden rounded-md">
            <Image
              src="/images/students-cooperating.jpg"
              alt="Students collaborating together"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="flex flex-col gap-6">
            <h2 className="text-2xl font-bold text-foreground md:text-3xl">
              What We Believe
            </h2>
            <p className="leading-relaxed text-muted-foreground">
              Every student deserves access to structured, self-directed tools
              for internal clarity, regardless of geography, income, or
              institutional enrollment. Mental wellness support should not be
              gated by cost, waitlists, or diagnosis.
            </p>
            <p className="leading-relaxed text-muted-foreground">
              DMWF funds access. We do not provide therapy, diagnosis, or
              clinical services. We fund the infrastructure that lets students
              help themselves.
            </p>
          </div>
        </div>
      </section>

      {/* What we do */}
      <section className="bg-background py-16">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="mb-8 text-center text-2xl font-bold text-foreground md:text-3xl">
            What We Do
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Fund Access",
                desc: "We cover the cost of licensed student access to self-directed mental wellness tools.",
              },
              {
                title: "Coordinate Delivery",
                desc: "We work with institutions and platforms to ensure students can access tools without friction.",
              },
              {
                title: "Observe Outcomes",
                desc: "We fund independent observation and reporting of outcomes across all pilot sites.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="flex flex-col gap-3 rounded-md border border-border bg-card p-6"
              >
                <h3 className="text-lg font-bold text-foreground">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-card py-16">
        <div className="mx-auto flex max-w-2xl flex-col items-center gap-6 px-6 text-center">
          <h2 className="text-2xl font-bold text-foreground">
            Join the mission
          </h2>
          <p className="text-muted-foreground">
            Every contribution directly funds student access to mental wellness
            tools.
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
