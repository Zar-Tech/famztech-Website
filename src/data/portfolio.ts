export type PortfolioItem = {
  title: string
  client: string
  description: string
  tags: string[]
  year: number
}

/**
 * Portfolio of delivered client projects. This is intentionally
 * separate from `products` (our own apps to market).
 */
export const portfolio: PortfolioItem[] = [
  {
    title: 'Retail Demand Forecasting',
    client: 'NorthMart',
    description:
      'A machine-learning pipeline that cut stockouts by 23% across 120 stores.',
    tags: ['AI', 'Forecasting', 'Cloud'],
    year: 2025,
  },
  {
    title: 'Telehealth Booking Platform',
    client: 'CareConnect',
    description:
      'HIPAA-ready web and mobile booking experience serving 50k+ monthly patients.',
    tags: ['Web', 'Mobile', 'Healthcare'],
    year: 2024,
  },
  {
    title: 'Document Intelligence API',
    client: 'LedgerOne',
    description:
      'An OCR + LLM service that extracts structured data from financial documents.',
    tags: ['AI', 'API', 'Fintech'],
    year: 2024,
  },
]
