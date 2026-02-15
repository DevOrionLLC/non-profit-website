"use client"

import { useState } from "react"

const tiers = [
  { amount: 15, label: "Join the Pilot" },
  { amount: 25, label: "Support Access" },
  { amount: 50, label: "Advance Access" },
  { amount: 75, label: "Expand Access" },
  { amount: 150, label: "Fund Half a Mind" },
  { amount: 300, label: "Fund One Mind" },
  { amount: 600, label: "Fund Two Minds" },
  { amount: 1500, label: "Fund Five Minds" },
]

export function DonorboxSection() {
  const [selected, setSelected] = useState(300)
  const [customAmount, setCustomAmount] = useState("")
  const [isCustom, setIsCustom] = useState(false)

  return (
    <section className="bg-card py-16 md:py-20">
      <div className="mx-auto max-w-2xl px-6">
        <h2 className="mb-2 text-center text-2xl font-bold text-foreground">
          Choose Your Contribution
        </h2>
        <p className="mb-10 text-center text-sm text-muted-foreground">
          Powered by Donorbox — secure, transparent, tax-deductible
        </p>

        {/* Tier grid */}
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {tiers.map((tier) => {
            const active = !isCustom && selected === tier.amount
            return (
              <button
                key={tier.amount}
                onClick={() => {
                  setSelected(tier.amount)
                  setIsCustom(false)
                }}
                className={`flex flex-col items-center gap-1 rounded-md border-2 px-3 py-4 text-center transition-colors ${
                  active
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border bg-background text-foreground hover:border-primary/40"
                }`}
              >
                <span className="text-lg font-bold">
                  {"$"}
                  {tier.amount.toLocaleString()}
                </span>
                <span className={`text-xs ${active ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
                  {tier.label}
                </span>
              </button>
            )
          })}
        </div>

        {/* Custom amount */}
        <div className="mt-4 flex items-center gap-3">
          <button
            onClick={() => setIsCustom(true)}
            className={`rounded-md border-2 px-4 py-2.5 text-sm font-medium transition-colors ${
              isCustom
                ? "border-primary bg-primary text-primary-foreground"
                : "border-border bg-background text-foreground hover:border-primary/40"
            }`}
          >
            Custom
          </button>
          {isCustom && (
            <div className="flex items-center gap-1">
              <span className="text-lg font-bold text-foreground">$</span>
              <input
                type="number"
                value={customAmount}
                onChange={(e) => setCustomAmount(e.target.value)}
                placeholder="Enter amount"
                className="w-32 border-b-2 border-border bg-transparent py-1 text-lg font-bold text-foreground placeholder:text-muted-foreground/50 focus:border-primary focus:outline-none"
                min={1}
                aria-label="Custom donation amount"
              />
            </div>
          )}
        </div>

        {/* Donate button */}
        <div className="mt-8 flex justify-center">
          <button className="w-full max-w-sm rounded-md bg-primary px-8 py-4 text-base font-bold text-primary-foreground hover:bg-primary/90 sm:w-auto sm:min-w-[280px]">
            Donate{" "}
            {isCustom && customAmount
              ? `$${Number(customAmount).toLocaleString()}`
              : `$${selected.toLocaleString()}`}
          </button>
        </div>

        <p className="mt-4 text-center text-xs text-muted-foreground">
          You will be redirected to Donorbox to complete your secure donation.
        </p>
      </div>
    </section>
  )
}
