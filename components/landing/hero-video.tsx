import Image from "next/image"
import Link from "next/link"

export function HeroVideo() {
  return (
    <section className="relative w-full overflow-hidden" style={{ minHeight: "75vh" }}>
      {/* Background image */}
      <Image
        src="/images/students-cooperating.jpg"
        alt="Students working together"
        fill
        className="object-cover"
        priority
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-foreground/50" />

      {/* Content */}
      <div className="relative flex h-full min-h-[75vh] flex-col items-center justify-center px-6 text-center">
        <h1 className="max-w-3xl text-balance text-4xl font-bold tracking-tight text-background md:text-5xl lg:text-6xl">
          Democratizing Access to Mental Wellness
        </h1>
        <p className="mt-4 max-w-xl text-pretty text-lg text-background/80 md:text-xl">
          Helping students access self-directed tools that support internal clarity and forward movement.
        </p>

        {/* Play button — opens YouTube video */}
        <a
          href="https://www.youtube.com/watch?v=tkUSAdSKKOA"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 flex items-center gap-3 rounded-full border border-background/40 bg-background/10 px-6 py-3 text-sm font-medium text-background backdrop-blur-sm transition-colors hover:bg-background/20"
          aria-label="Watch the DMWF introduction video on YouTube"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-6 w-6"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z"
              clipRule="evenodd"
            />
          </svg>
          Watch Introduction
        </a>

        {/* CTA buttons */}
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
          <Link
            href="/fund-a-mind"
            className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Fund a Mind
          </Link>
          <Link
            href="/pilot"
            className="inline-flex items-center justify-center rounded-md border border-background/60 bg-background/10 px-8 py-3.5 text-sm font-semibold text-background backdrop-blur-sm transition-colors hover:bg-background/20"
          >
            Learn how the pilot works
          </Link>
        </div>
      </div>
    </section>
  )
}
