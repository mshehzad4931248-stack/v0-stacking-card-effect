"use client"

import { useRef, useEffect } from "react"
import { useScroll } from "framer-motion"
import { projects } from "@/lib/projects-data"
import ParallaxCard from "./parallax-card"

export default function ParallaxContainer() {
  const container = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  })

  useEffect(() => {
    // Enable smooth scrolling via CSS
    document.documentElement.style.scrollBehavior = "smooth"

    return () => {
      document.documentElement.style.scrollBehavior = "auto"
    }
  }, [])

  return (
    <main ref={container} className="relative">
      {projects.map((project, i) => {
        const targetScale = 1 - (projects.length - i) * 0.05

        return (
          <ParallaxCard
            key={project.id}
            project={project}
            index={i}
            progress={scrollYProgress}
            range={[i * 0.25, 1]}
            targetScale={targetScale}
          />
        )
      })}
    </main>
  )
}
