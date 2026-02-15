import Link from "next/link"

export const metadata = {
  title: "Get Involved - DMWF",
  description: "Join the DMWF mission. Donate, volunteer, partner, or spread the word.",
}

export default function GetInvolvedPage() {
  return (
    <>
      <section className="bg-background py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground md:text-5xl">
            Get Involved
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            There are many ways to support the Democratization of Mental
            Wellness Foundation and help students gain access.
          </p>
        </div>
      </section>

      <section className="bg-card py-16">
        <div className="mx-auto max-w-4xl px-6">
          <div className="grid gap-6 md:grid-cols-2">
            {[
              {
                title: "Donate",
                desc: "Every $300 funds one student for one full year. Smaller contributions combine to fund full access collectively.",
                cta: "Fund a Mind",
                href: "/fund-a-mind",
              },
              {
                title: "Institutional Partnership",
                desc: "If you represent a university or educational institution, partner with DMWF to bring the pilot to your students.",
                cta: "Contact Us",
                href: "/contact",
              },
              {
                title: "Spread the Word",
                desc: "Share DMWF's mission with your network. Awareness leads to access. Follow us and share our campaign pages.",
                cta: "View Campaign",
                href: "/campaign",
              },
              {
                title: "Research & Observation",
                desc: "If you are a researcher interested in independent outcome observation, we welcome collaboration inquiries.",
                cta: "Contact Us",
                href: "/contact",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="flex flex-col gap-4 rounded-md border border-border bg-background p-6"
              >
                <h2 className="text-lg font-bold text-foreground">
                  {item.title}
                </h2>
                <p className="flex-1 text-sm leading-relaxed text-muted-foreground">
                  {item.desc}
                </p>
                <Link
                  href={item.href}
                  className="inline-flex w-fit items-center justify-center rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-primary/90"
                >
                  {item.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
