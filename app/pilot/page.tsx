import Link from "next/link"
import Image from "next/image"
import { GlobalCounter } from "@/components/global-counter"

export const metadata = {
  title: "Pilot - DMWF",
  description:
    "The DMWF pilot program funds licensed student access across five countries with independent outcome observation.",
}

export default function PilotPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-background py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground md:text-5xl">
            The Pilot
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            A structured, observable, five-country initiative to fund student
            access to self-directed mental wellness tools.
          </p>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-card py-16">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="mb-10 text-center text-2xl font-bold text-foreground md:text-3xl">
            How the Pilot Works
          </h2>

          <div className="flex flex-col gap-8">
            {[
              {
                step: "01",
                title: "Funding",
                desc: "Donations are collected and allocated specifically to fund licensed student access. Each $300 funds one student for one full year.",
              },
              {
                step: "02",
                title: "Access",
                desc: "Students in participating institutions receive licensed access to structured, self-directed mental wellness tools at no cost to them.",
              },
              {
                step: "03",
                title: "Coordination",
                desc: "DMWF coordinates between funding sources, technology platforms, and educational institutions to ensure seamless delivery.",
              },
              {
                step: "04",
                title: "Observation",
                desc: "Independent observers monitor and report on student engagement and outcomes across all five pilot countries.",
              },
              {
                step: "05",
                title: "Reporting",
                desc: "All observations and results are compiled into transparent reports accessible to donors, institutions, and the public.",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="flex gap-6 rounded-md border border-border bg-background p-6"
              >
                <span className="flex-shrink-0 text-3xl font-bold text-primary">
                  {item.step}
                </span>
                <div className="flex flex-col gap-2">
                  <h3 className="text-lg font-bold text-foreground">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pilot diagram */}
      <section className="bg-background py-16">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 px-6">
          <h2 className="text-2xl font-bold text-foreground md:text-3xl">
            Five Countries. One Framework.
          </h2>
          <Image
            src="/images/pilot-diagram.jpg"
            alt="Pilot program diagram showing five participating countries"
            width={800}
            height={450}
            className="w-full rounded-md object-contain"
          />
        </div>
      </section>

      {/* Global counter */}
      <GlobalCounter />

      {/* Key principles */}
      <section className="bg-background py-16">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="mb-8 text-center text-2xl font-bold text-foreground md:text-3xl">
            Key Principles
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            {[
              {
                title: "No Funds to Technology",
                desc: "Zero donations are allocated toward technology development or intellectual property acquisition.",
              },
              {
                title: "No Private Profit",
                desc: "DMWF is a nonprofit. No individuals or entities profit from pilot funding.",
              },
              {
                title: "Independent Observation",
                desc: "Outcomes are observed and reported by independent parties, not by DMWF or its partners.",
              },
              {
                title: "Full Transparency",
                desc: "All funding allocation, partner relationships, and observation reports are publicly available.",
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
            Support the Pilot
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/fund-a-mind"
              className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90"
            >
              Fund a Mind
            </Link>
            <Link
              href="/campaign"
              className="inline-flex items-center justify-center rounded-md border border-border bg-background px-8 py-3 text-sm font-semibold text-foreground hover:bg-muted"
            >
              View Campaign
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
