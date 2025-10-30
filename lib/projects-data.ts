export interface Project {
  id: string
  title: string
  description: string
  image: string
  url: string
  color: string
}

export const projects: Project[] = [
  {
    id: "1",
    title: "Project Alpha",
    description:
      "A revolutionary approach to modern web design that combines cutting-edge technology with intuitive user experiences. This project showcases the power of creative thinking and technical excellence.",
    image: "/modern-web-design.jpg",
    url: "#",
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: "2",
    title: "Project Beta",
    description:
      "Exploring the boundaries of interactive design with immersive animations and smooth transitions. This project demonstrates how motion can enhance user engagement and create memorable experiences.",
    image: "/interactive-design.jpg",
    url: "#",
    color: "from-purple-500 to-pink-500",
  },
  {
    id: "3",
    title: "Project Gamma",
    description:
      "A comprehensive platform built with scalability and performance in mind. This project combines robust backend architecture with a beautiful, responsive frontend interface.",
    image: "/platform-design.jpg",
    url: "#",
    color: "from-orange-500 to-red-500",
  },
  {
    id: "4",
    title: "Project Delta",
    description:
      "Pushing the limits of what's possible with modern web technologies. This project features advanced animations, real-time interactions, and a seamless user experience across all devices.",
    image: "/advanced-tech.jpg",
    url: "#",
    color: "from-green-500 to-emerald-500",
  },
]
