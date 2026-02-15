"use client"

import { useState } from "react"
import Link from "next/link"

interface CountryData {
  name: string
  flag: string
  initial: number
  goal: number
}

const countries: CountryData[] = [
  { name: "USA", flag: "🇺🇸", initial: 342, goal: 1000 },
  { name: "Canada", flag: "🇨🇦", initial: 128, goal: 1000 },
  { name: "UK", flag: "🇬🇧", initial: 212, goal: 1000 },
  { name: "Australia", flag: "🇦🇺", initial: 95, goal: 1000 },
  { name: "New Zealand", flag: "🇳🇿", initial: 76, goal: 1000 },
]

export function GlobalCounter({ showButton = true }: { showButton?: boolean }) {
  const [values, setValues] = useState<number[]>(countries.map((c) => c.initial))

  function handleChange(index: number, val: string) {
    const num = parseInt(val, 10)
    if (!isNaN(num) && num >= 0) {
      setValues((prev) => {
        const next = [...prev]
        next[index] = num
        return next
      })
    }
  }

  return (
    <section className="bg-card py-16">
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="mb-2 text-center text-3xl font-bold tracking-tight text-foreground">
          Global Pilot Progress
        </h2>
        <p className="mb-10 text-center text-muted-foreground">
          Students funded across five countries
        </p>

        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-5">
          {countries.map((country, i) => {
            const pct = Math.min((values[i] / country.goal) * 100, 100)
            return (
              <div
                key={country.name}
                className="flex flex-col items-center gap-3 rounded-md border border-border bg-background p-5"
              >
                <span className="text-4xl" role="img" aria-label={`${country.name} flag`}>
                  {country.flag}
                </span>
                <span className="text-sm font-semibold text-foreground">
                  {country.name}
                </span>
                {/* Progress bar */}
                <div className="h-2 w-full overflow-hidden rounded-full bg-muted">
                  <div
                    className="h-full rounded-full bg-primary"
                    style={{ width: `${pct}%` }}
                  />
                </div>
                {/* Editable value */}
                <div className="flex items-baseline gap-1 text-sm">
                  <input
                    type="number"
                    value={values[i]}
                    onChange={(e) => handleChange(i, e.target.value)}
                    className="w-14 border-b border-border bg-transparent text-center text-base font-bold text-foreground focus:border-primary focus:outline-none"
                    min={0}
                    max={country.goal}
                    aria-label={`${country.name} students funded`}
                  />
                  <span className="text-muted-foreground">
                    {"/ "}
                    {country.goal.toLocaleString()}
                  </span>
                </div>
              </div>
            )
          })}
        </div>

        {showButton && (
          <div className="mt-10 flex justify-center">
            <Link
              href="/fund-a-mind"
              className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90"
            >
              Fund a Mind
            </Link>
          </div>
        )}
      </div>
    </section>
  )
}
