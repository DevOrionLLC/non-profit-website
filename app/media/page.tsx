import Link from "next/link"

export const metadata = {
  title: "Media - DMWF",
  description: "Press resources, media inquiries, and news about DMWF.",
}

export default function MediaPage() {
  return (
    <>
      <section className="bg-background py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground md:text-5xl">
            Media
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Press resources, media inquiries, and the latest news from the
            Democratization of Mental Wellness Foundation.
          </p>
        </div>
      </section>

      <section className="bg-card py-16">
        <div className="mx-auto max-w-4xl px-6">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="flex flex-col gap-3 rounded-md border border-border bg-background p-6">
              <h2 className="text-lg font-bold text-foreground">
                Press Kit
              </h2>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Download our press kit containing logos, mission statements, and
                key facts about the foundation and pilot program.
              </p>
            </div>

            <div className="flex flex-col gap-3 rounded-md border border-border bg-background p-6">
              <h2 className="text-lg font-bold text-foreground">
                Media Inquiries
              </h2>
              <p className="text-sm leading-relaxed text-muted-foreground">
                For interviews, features, or press inquiries, please contact our
                media team at{" "}
                <span className="font-medium text-primary">media@dmwf.org</span>.
              </p>
            </div>

            <div className="flex flex-col gap-3 rounded-md border border-border bg-background p-6 md:col-span-2">
              <h2 className="text-lg font-bold text-foreground">
                Recent Coverage
              </h2>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Media coverage and press mentions will be listed here as they
                become available. For the latest updates, follow our campaign
                progress on the{" "}
                <Link href="/campaign" className="font-medium text-primary underline">
                  campaign page
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
