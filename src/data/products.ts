/**
 * Famztech products — edit this file to add or update your products.
 * Each entry appears in the Products section on the website.
 */
export type ProductViz = 'code' | 'bars' | 'grid' | 'mobile'

export interface Product {
  id: string
  name: string
  tag: string
  description: string
  features: string[]
  price?: string
  viz: ProductViz
  ctaLabel?: string
  ctaHref?: string
  external?: boolean
}

export const products: Product[] = [
  {
    id: 'sabr',
    name: 'Sabr Prayer Tracker',
    tag: 'Mobile App · iOS',
    description:
      'A beautifully simple prayer tracker that helps you stay consistent with your five daily prayers. Accurate times, gentle reminders, and streaks — all private on your device.',
    features: [
      'Accurate prayer times by location or city',
      'One-tap tracking for five daily prayers',
      'Streaks and progress insights',
      'Customizable prayer reminders',
      'Works fully offline — no account required',
    ],
    price: 'Free',
    viz: 'mobile',
    ctaLabel: 'View on App Store',
    ctaHref: 'https://apps.apple.com/pk/app/sabr-prayer-tracker/id6783087332',
    external: true,
  },
  {
    id: 'cloudx',
    name: 'CloudX Platform',
    tag: 'Cloud Infrastructure',
    description:
      'Monitor cloud health and performance across your entire organization in real time.',
    features: [
      'Multi-region auto-scaling',
      '99.99% uptime SLA',
      'Performance dashboards',
      'Infrastructure benchmarks',
    ],
    price: 'From $49/mo',
    viz: 'code',
    ctaLabel: 'Learn more',
    ctaHref: '#contact',
  },
  {
    id: 'secureai',
    name: 'SecureAI Suite',
    tag: 'AI & Security',
    description:
      'Assess AI-generated code risk with heat maps, compliance tracking, and threat detection.',
    features: [
      'GenAI risk assessment',
      'SOC 2 & GDPR compliance',
      'Zero-trust security',
      'Developer analytics',
    ],
    price: 'From $99/mo',
    viz: 'bars',
    ctaLabel: 'Learn more',
    ctaHref: '#contact',
  },
  {
    id: 'dataflow',
    name: 'DataFlow Engine',
    tag: 'Data Analytics',
    description:
      'Real-time data pipelines with visual workflow builder and advanced visualization dashboards.',
    features: [
      'Stream processing',
      'Custom dashboards',
      'API integrations',
      'Visual workflow builder',
    ],
    price: 'From $79/mo',
    viz: 'grid',
    ctaLabel: 'Learn more',
    ctaHref: '#contact',
  },
]
