import Link from "next/link"
import Image from "next/image"

export function WhatThisIs() {
  return (
    <section className="bg-background py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 md:grid-cols-2">
        {/* Left image */}
        <div className="relative aspect-[4/3] overflow-hidden rounded-md">
          <Image
            src="/images/students-cooperating.jpg"
            alt="Students cooperating in an educational setting"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>

        {/* Right text */}
        <div className="flex flex-col gap-6">
          <h2 className="text-balance text-3xl font-bold leading-tight tracking-tight text-foreground md:text-4xl">
            Not therapy. Not diagnosis. Access.
          </h2>
          <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
            DMWF helps students access self-directed tools that support internal
            clarity and forward movement.
          </p>
          <div>
            <Link
              href="/mission"
              className="inline-flex items-center justify-center rounded-md bg-primary px-7 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90"
            >
              Our Mission
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
