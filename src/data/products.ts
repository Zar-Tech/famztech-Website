export type ProductStatus = 'Live' | 'Beta' | 'Coming soon'

export type Product = {
  name: string
  tagline: string
  description: string
  category: string
  status: ProductStatus
  icon: string
  /** Optional external link to the product / app. */
  url?: string
}

/**
 * FamzTech products and apps available to market and showcase.
 * Add new products by appending an entry to this array — the
 * Products section renders every item automatically.
 */
export const products: Product[] = [
  {
    name: 'FamzAI Assistant',
    tagline: 'Your team\u2019s AI copilot',
    description:
      'An AI assistant that drafts, summarises and answers questions across your company knowledge base.',
    category: 'AI',
    status: 'Live',
    icon: '✨',
    url: '#',
  },
  {
    name: 'InsightBoard',
    tagline: 'Analytics without the spreadsheets',
    description:
      'Natural-language analytics dashboards that explain your metrics in plain English.',
    category: 'Analytics',
    status: 'Beta',
    icon: '📊',
    url: '#',
  },
  {
    name: 'DeployMate',
    tagline: 'Ship with confidence',
    description:
      'One-click deployments with automated rollbacks and real-time health monitoring.',
    category: 'DevOps',
    status: 'Coming soon',
    icon: '🚀',
  },
]
