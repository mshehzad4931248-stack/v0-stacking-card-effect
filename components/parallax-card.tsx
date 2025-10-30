"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"
import type { Project } from "@/lib/projects-data"

interface ParallaxCardProps {
  project: Project
  index: number
  progress: any
  range: [number, number]
  targetScale: number
}

export default function ParallaxCard({ project, index, progress, range, targetScale }: ParallaxCardProps) {
  const container = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  })

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1])

  const scale = useTransform(progress, range, [1, targetScale])

  return (
    <div ref={container} className="h-screen flex items-center justify-center sticky top-0">
      <motion.div
        style={{
          scale,
          top: `calc(-5vh + ${index * 25}px)`,
        }}
        className={`relative w-full max-w-4xl h-96 rounded-3xl p-12 bg-gradient-to-br ${project.color} shadow-2xl`}
      >
        {/* Card Content */}
        <div className="flex flex-col h-full">
          {/* Title */}
          <h2 className="text-3xl font-bold text-white text-center mb-8">{project.title}</h2>

          {/* Body: Description + Image */}
          <div className="flex gap-12 flex-1 mt-8">
            {/* Description Section */}
            <div className="w-2/5 flex flex-col justify-center">
              <p className="text-base text-white leading-relaxed">{project.description}</p>
              <div className="flex items-center gap-2 mt-6">
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white underline hover:opacity-80 transition-opacity"
                >
                  See more
                </a>
                <svg
                  width="22"
                  height="12"
                  viewBox="0 0 22 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-3"
                >
                  <path
                    d="M21.5303 6.53033C21.8232 6.23744 21.8232 5.76256 21.5303 5.46967L16.7574 0.696699C16.4645 0.403806 15.9896 0.403806 15.6967 0.696699C15.4038 0.989592 15.4038 1.46447 15.6967 1.75736L19.9393 6L15.6967 10.2426C15.4038 10.5355 15.4038 11.0104 15.6967 11.3033C15.9896 11.5962 16.4645 11.5962 16.7574 11.3033L21.5303 6.53033ZM0 6.75L21 6.75V5.25L0 5.25L0 6.75Z"
                    fill="white"
                  />
                </svg>
              </div>
            </div>

            {/* Image Section */}
            <div className="w-3/5 relative rounded-2xl overflow-hidden">
              <motion.div className="w-full h-full" style={{ scale: imageScale }}>
                <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
