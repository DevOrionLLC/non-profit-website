const campaigns = [
  { country: "USA", flag: "🇺🇸", url: "#" },
  { country: "Canada", flag: "🇨🇦", url: "#" },
  { country: "UK", flag: "🇬🇧", url: "#" },
  { country: "Australia", flag: "🇦🇺", url: "#" },
  { country: "New Zealand", flag: "🇳🇿", url: "#" },
]

export function GoFundMeSection() {
  return (
    <section className="bg-background py-16 md:py-20">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <h3 className="mb-2 text-xl font-bold text-foreground">
          Prefer to support via GoFundMe?
        </h3>
        <p className="mb-8 text-sm text-muted-foreground">
          Select your country to visit the regional GoFundMe campaign.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          {campaigns.map((c) => (
            <a
              key={c.country}
              href={c.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-md border border-border bg-card px-5 py-3 text-sm font-medium text-foreground hover:border-primary/40 hover:bg-muted"
            >
              <span className="text-2xl" role="img" aria-label={`${c.country} flag`}>
                {c.flag}
              </span>
              <span>{c.country}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
