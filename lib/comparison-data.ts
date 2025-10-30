export interface ComparisonFeature {
  feature: string
  others: string
  entalogics: string
  icon?: string
}

export interface ComparisonCard {
  id: string
  title: string
  features: ComparisonFeature[]
  color: string
}

export const comparisonCards: ComparisonCard[] = [
  {
    id: "1",
    title: "Performance & Speed",
    color: "from-blue-500 to-cyan-500",
    features: [
      {
        feature: "Load Time",
        others: "3-5 seconds",
        entalogics: "< 1 second",
      },
      {
        feature: "Optimization",
        others: "Manual tuning required",
        entalogics: "Automatic optimization",
      },
      {
        feature: "Caching",
        others: "Basic caching",
        entalogics: "Advanced intelligent caching",
      },
      {
        feature: "Scalability",
        others: "Limited to 10K users",
        entalogics: "Unlimited scalability",
      },
    ],
  },
  {
    id: "2",
    title: "User Experience",
    color: "from-purple-500 to-pink-500",
    features: [
      {
        feature: "Interface Design",
        others: "Standard UI",
        entalogics: "AI-powered adaptive UI",
      },
      {
        feature: "Personalization",
        others: "Basic preferences",
        entalogics: "Deep personalization engine",
      },
      {
        feature: "Accessibility",
        others: "WCAG 2.0 compliant",
        entalogics: "WCAG 2.1 AAA compliant",
      },
      {
        feature: "Mobile Experience",
        others: "Responsive design",
        entalogics: "Native-like performance",
      },
    ],
  },
  {
    id: "3",
    title: "Security & Privacy",
    color: "from-orange-500 to-red-500",
    features: [
      {
        feature: "Encryption",
        others: "SSL/TLS only",
        entalogics: "Military-grade encryption",
      },
      {
        feature: "Data Protection",
        others: "Standard compliance",
        entalogics: "GDPR + CCPA + HIPAA",
      },
      {
        feature: "Threat Detection",
        others: "Manual monitoring",
        entalogics: "AI-powered 24/7 monitoring",
      },
      {
        feature: "Backup & Recovery",
        others: "Daily backups",
        entalogics: "Real-time redundancy",
      },
    ],
  },
  {
    id: "4",
    title: "Support & Integration",
    color: "from-green-500 to-emerald-500",
    features: [
      {
        feature: "Customer Support",
        others: "Email support (24-48h)",
        entalogics: "24/7 live support",
      },
      {
        feature: "API Integration",
        others: "REST API only",
        entalogics: "REST + GraphQL + WebSocket",
      },
      {
        feature: "Documentation",
        others: "Basic docs",
        entalogics: "Comprehensive + video tutorials",
      },
      {
        feature: "Updates",
        others: "Quarterly updates",
        entalogics: "Weekly improvements",
      },
    ],
  },
]
