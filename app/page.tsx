import { HeroVideo } from "@/components/landing/hero-video"
import { WhatThisIs } from "@/components/landing/what-this-is"
import { PilotSummary } from "@/components/landing/pilot-summary"
import { GlobalCounter } from "@/components/global-counter"
import { ClosingStatement } from "@/components/landing/closing-statement"

export default function HomePage() {
  return (
    <>
      <HeroVideo />
      <WhatThisIs />
      <PilotSummary />
      <GlobalCounter />
      <ClosingStatement />
    </>
  )
}
