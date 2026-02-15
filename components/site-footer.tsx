import Link from "next/link"

const footerLinks = [
  { href: "/mission", label: "Mission" },
  { href: "/pilot", label: "Pilot" },
  { href: "/about", label: "About" },
  { href: "/fund-a-mind", label: "Fund a Mind" },
  { href: "/governance", label: "Governance" },
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/contact", label: "Contact" },
  { href: "/get-involved", label: "Get Involved" },
  { href: "/media", label: "Media" },
  { href: "/fiscal-sponsorship", label: "Fiscal Sponsorship" },
]

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 py-12 md:flex-row md:justify-between">
        {/* Left */}
        <div className="flex flex-col gap-1">
          <span className="text-base font-bold text-foreground">
            Democratization of Mental Wellness Foundation
          </span>
          <span className="text-sm text-muted-foreground">
            Delaware nonprofit organization
          </span>
        </div>

        {/* Right links */}
        <nav className="grid grid-cols-2 gap-x-12 gap-y-2 sm:grid-cols-3">
          {footerLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  )
}
