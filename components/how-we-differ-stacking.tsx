"use client"

import type React from "react"
import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { X, Check, Zap } from "lucide-react"
import Heading from "./ui/Heading"

interface ComparisonItem {
  category: string
  others: string
  us: string
}

const comparisons: ComparisonItem[] = [
  {
    category: "Direct Senior Access",
    others: "Junior developers handle most work",
    us: "Work directly with senior team from day one",
  },
  {
    category: "Lean Structure",
    others: "Multiple team layers & management markup",
    us: "No hidden costs - pay for quality work only",
  },
  {
    category: "Independent Specialists",
    others: "Full company overhead included in pricing",
    us: "Individual experts - no company overhead",
  },
  {
    category: "Global Talent, Fair Pricing",
    others: "High European/US agency rates",
    us: "Global talent with fair, transparent pricing",
  },
  {
    category: "Internal Global Agency",
    others: "Bloated with unnecessary processes",
    us: "Elite developers, modern tools - no fluff",
  },
  {
    category: "Your Success Matters",
    others: "Just write code and move on",
    us: "Build products that scale and deliver real value",
  },
]

interface HowWeDifferProps {
  showHeading?: boolean
  className?: string
}

const StackingCard: React.FC<{
  item: ComparisonItem
  index: number
  totalCards: number
  scrollYProgress: any
}> = ({ item, index, totalCards, scrollYProgress }) => {
  // Calculate when this card should start and finish its animation
  const cardStart = index / totalCards
  const cardEnd = (index + 1.5) / totalCards

  // Transform scroll progress to card-specific animation
  const y = useTransform(scrollYProgress, [cardStart, cardEnd], [0, -300])
  const opacity = useTransform(scrollYProgress, [cardStart, cardEnd - 0.3], [1, 0])
  const scale = useTransform(scrollYProgress, [cardStart, cardEnd - 0.3], [1, 0.85])

  return (
    <motion.div
      style={{
        y,
        opacity,
        scale,
        zIndex: totalCards - index,
      }}
      className="absolute w-full"
    >
      <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 border border-slate-200 dark:border-slate-700 shadow-xl">
        {/* Header with category */}
        <div className="mb-4">
          <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-3">{item.category}</h3>
        </div>

        {/* Comparison content */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Others */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-6 h-6 rounded-lg bg-red-500 flex items-center justify-center flex-shrink-0">
                <X className="w-3.5 h-3.5 text-white" />
              </div>
              <span className="text-xs font-semibold text-red-600 dark:text-red-400 uppercase tracking-wide">
                Others
              </span>
            </div>
            <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">{item.others}</p>
          </div>

          {/* Entalogics */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-6 h-6 rounded-lg bg-green-500 flex items-center justify-center flex-shrink-0">
                <Check className="w-3.5 h-3.5 text-white" />
              </div>
              <span className="text-xs font-semibold text-green-600 dark:text-green-400 uppercase tracking-wide">
                Entalogics
              </span>
            </div>
            <p className="text-sm font-medium text-slate-900 dark:text-white leading-relaxed">{item.us}</p>
          </div>
        </div>

        {/* Decorative element */}
        <div className="absolute top-4 right-4 opacity-10">
          <Zap className="w-8 h-8 text-green-500" />
        </div>
      </div>
    </motion.div>
  )
}

const HowWeDifferStacking: React.FC<HowWeDifferProps> = ({ showHeading = true, className = "" }) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  })

  return (
    <div ref={containerRef} className={className}>
      {showHeading && (
        <Heading level={2} className="mb-12 text-center sticky top-20 z-50" gradient={true} gradientText="Differently">
          Here's How We Do Things Differently
        </Heading>
      )}

      <div className="max-w-4xl mx-auto px-4">
        {/* Fixed Headers */}
        <div className="sticky top-40 z-40 mb-8 flex justify-between items-center px-6 py-4 rounded-xl bg-slate-50/80 dark:bg-slate-900/80 backdrop-blur-sm border border-slate-200 dark:border-slate-700">
          <div className="flex items-center gap-2">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500 text-white font-semibold text-sm">
              <X className="w-4 h-4" />
              Others
            </div>
          </div>
          <div className="hidden md:flex items-center gap-2">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500 text-white font-semibold text-sm">
              <Check className="w-4 h-4" />
              Entalogics
            </div>
          </div>
        </div>

        {/* Stacking Cards Container */}
        <div className="relative h-[600px] md:h-[700px]">
          {comparisons.map((item, index) => (
            <StackingCard
              key={`card-${index}`}
              item={item}
              index={index}
              totalCards={comparisons.length}
              scrollYProgress={scrollYProgress}
            />
          ))}
        </div>

        {/* Spacer for scroll */}
        <div className="h-96" />
      </div>
    </div>
  )
}

export default HowWeDifferStacking
