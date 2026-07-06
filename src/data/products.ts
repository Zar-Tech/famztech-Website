/**
 * Famztech products — edit this file to add or update your products.
 * Each entry appears in the Products section on the website.
 */
export type ProductViz = 'code' | 'bars' | 'grid'

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
}

export const products: Product[] = [
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
