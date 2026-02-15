import Link from "next/link"

export const metadata = {
  title: "Contact - DMWF",
  description: "Get in touch with the Democratization of Mental Wellness Foundation.",
}

export default function ContactPage() {
  return (
    <>
      <section className="bg-background py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground md:text-5xl">
            Contact
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            We welcome inquiries from institutions, researchers, potential
            partners, and supporters.
          </p>
        </div>
      </section>

      <section className="bg-card py-16">
        <div className="mx-auto max-w-2xl px-6">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-3 rounded-md border border-border bg-background p-6">
              <h2 className="text-lg font-bold text-foreground">
                General Inquiries
              </h2>
              <p className="text-sm leading-relaxed text-muted-foreground">
                For general questions about DMWF, our mission, or the pilot
                program, please reach out via email.
              </p>
              <p className="text-sm font-medium text-primary">
                info@dmwf.org
              </p>
            </div>

            <div className="flex flex-col gap-3 rounded-md border border-border bg-background p-6">
              <h2 className="text-lg font-bold text-foreground">
                Institutional Partnerships
              </h2>
              <p className="text-sm leading-relaxed text-muted-foreground">
                If you represent an educational institution interested in
                participating in the pilot, we would be glad to discuss
                partnership opportunities.
              </p>
              <p className="text-sm font-medium text-primary">
                partnerships@dmwf.org
              </p>
            </div>

            <div className="flex flex-col gap-3 rounded-md border border-border bg-background p-6">
              <h2 className="text-lg font-bold text-foreground">
                Media Inquiries
              </h2>
              <p className="text-sm leading-relaxed text-muted-foreground">
                For press and media inquiries, please visit our{" "}
                <Link href="/media" className="font-medium text-primary underline">
                  media page
                </Link>{" "}
                or contact us directly.
              </p>
              <p className="text-sm font-medium text-primary">
                media@dmwf.org
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
