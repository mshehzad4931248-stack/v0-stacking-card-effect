"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import type { ComparisonCard } from "@/lib/comparison-data"

interface ComparisonCardProps {
  card: ComparisonCard
  index: number
  progress: any
  range: [number, number]
  targetScale: number
}

export default function ComparisonCardComponent({ card, index, progress, range, targetScale }: ComparisonCardProps) {
  const container = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  })

  const scale = useTransform(progress, range, [1, targetScale])

  return (
    <div ref={container} className="h-screen flex items-center justify-center sticky top-0">
      <motion.div
        style={{
          scale,
          top: `calc(-5vh + ${index * 25}px)`,
        }}
        className={`relative w-full max-w-4xl rounded-2xl p-8 bg-gradient-to-br ${card.color} shadow-2xl overflow-hidden`}
      >
        <h2 className="text-3xl font-bold text-white mb-6">{card.title}</h2>

        <div className="space-y-3">
          {card.features.map((feature, idx) => (
            <div key={idx} className="flex items-center justify-between bg-white/10 rounded-lg p-4">
              <span className="text-white font-medium">{feature.feature}</span>
              <div className="flex gap-4">
                <span className="text-white/70 text-sm">{feature.others}</span>
                <span className="text-white font-semibold text-sm">{feature.entalogics}</span>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}
