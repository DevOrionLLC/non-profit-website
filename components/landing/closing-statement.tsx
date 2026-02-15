import Link from "next/link"
import Image from "next/image"

export function ClosingStatement() {
  return (
    <section className="relative py-28 md:py-36">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/students-closing.jpg"
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-foreground/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center gap-8 px-6 text-center">
        <h2 className="text-balance text-3xl font-bold tracking-tight text-background md:text-5xl">
          You are funding an answer.
        </h2>
        <Link
          href="/fund-a-mind"
          className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground hover:bg-primary/90"
        >
          Fund a Mind
        </Link>
      </div>
    </section>
  )
}
