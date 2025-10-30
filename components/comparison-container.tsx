"use client"

import { useRef, useEffect } from "react"
import { useScroll } from "framer-motion"
import { comparisonCards } from "@/lib/comparison-data"
import ComparisonCard from "./comparison-card"

export default function ComparisonContainer() {
  const container = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  })

  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth"

    return () => {
      document.documentElement.style.scrollBehavior = "auto"
    }
  }, [])

  return (
    <main ref={container} className="relative">
      {/* Fixed Header */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-slate-900 to-transparent pointer-events-none">
        <div className="max-w-6xl mx-auto px-8 py-12">
          <h1 className="text-5xl font-bold text-white text-center mb-2">How We Differ</h1>
          <p className="text-center text-gray-300">Scroll to explore our advantages</p>
        </div>
      </div>

      {/* Comparison Cards */}
      <div className="pt-32">
        {comparisonCards.map((card, i) => {
          const targetScale = 1 - (comparisonCards.length - i) * 0.05

          return (
            <ComparisonCard
              key={card.id}
              card={card}
              index={i}
              progress={scrollYProgress}
              range={[i * 0.25, 1]}
              targetScale={targetScale}
            />
          )
        })}
      </div>

      {/* Footer Spacing */}
      <div className="h-96" />
    </main>
  )
}
