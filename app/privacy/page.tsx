export const metadata = {
  title: "Privacy Policy - DMWF",
  description: "DMWF privacy policy regarding data collection, use, and protection.",
}

export default function PrivacyPage() {
  return (
    <section className="bg-background py-16 md:py-24">
      <div className="mx-auto max-w-3xl px-6">
        <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground md:text-5xl">
          Privacy Policy
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
          The Democratization of Mental Wellness Foundation is committed to
          protecting the privacy of all individuals who interact with our
          organization.
        </p>

        <div className="mt-12 flex flex-col gap-10">
          {[
            {
              title: "Information We Collect",
              content:
                "We collect only the information necessary to process donations and communicate with supporters. This may include name, email address, and payment information provided through our donation partners.",
            },
            {
              title: "How We Use Information",
              content:
                "Information collected is used solely for donation processing, tax receipt generation, and foundation communications. We do not sell, rent, or share personal information with third parties for marketing purposes.",
            },
            {
              title: "Donation Processing",
              content:
                "Donations are processed through Donorbox and GoFundMe. These platforms have their own privacy policies governing the handling of payment information. DMWF does not store credit card or bank account details.",
            },
            {
              title: "Student Data",
              content:
                "DMWF does not collect, store, or have access to individual student data from pilot participants. All outcome observation is conducted by independent parties using aggregated, anonymized data.",
            },
            {
              title: "Data Security",
              content:
                "We implement reasonable security measures to protect the information we collect. However, no method of electronic transmission or storage is 100% secure.",
            },
            {
              title: "Contact",
              content:
                "For privacy-related inquiries, please reach out through our contact page.",
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
  )
}
