export const metadata = {
  title: "Governance - DMWF",
  description: "DMWF governance structure, board oversight, and accountability framework.",
}

export default function GovernancePage() {
  return (
    <>
      <section className="bg-background py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground md:text-5xl">
            Governance
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            DMWF is committed to full transparency in its governance structure,
            decision-making processes, and financial oversight.
          </p>
        </div>
      </section>

      <section className="bg-card py-16">
        <div className="mx-auto max-w-4xl px-6">
          <div className="grid gap-6 md:grid-cols-2">
            {[
              {
                title: "Board of Directors",
                desc: "DMWF is overseen by a board of directors responsible for strategic direction, financial oversight, and ensuring alignment with the foundation's mission.",
              },
              {
                title: "Financial Oversight",
                desc: "All donations are tracked and reported publicly. Independent financial audits are conducted annually to ensure full accountability.",
              },
              {
                title: "Conflict of Interest Policy",
                desc: "All board members and staff are subject to a strict conflict of interest policy. No individual profits from foundation activities.",
              },
              {
                title: "Reporting & Transparency",
                desc: "Annual reports, financial statements, and pilot observation results are made publicly available on this website.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="flex flex-col gap-3 rounded-md border border-border bg-background p-6"
              >
                <h2 className="text-lg font-bold text-foreground">
                  {item.title}
                </h2>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
