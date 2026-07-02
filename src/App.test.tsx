import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from './App'
import { products } from './data/products'
import { portfolio } from './data/portfolio'

describe('App', () => {
  it('renders the AI & software development hero', () => {
    render(<App />)
    expect(
      screen.getByRole('heading', { name: /intelligent software/i }),
    ).toBeInTheDocument()
  })

  it('renders Products and Portfolio as separate sections', () => {
    render(<App />)
    expect(
      screen.getByRole('heading', { name: /our products/i }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /^portfolio$/i }),
    ).toBeInTheDocument()
  })

  it('renders every product from the data file', () => {
    render(<App />)
    for (const product of products) {
      expect(
        screen.getByRole('heading', { name: product.name }),
      ).toBeInTheDocument()
    }
  })

  it('renders every portfolio project from the data file', () => {
    render(<App />)
    for (const item of portfolio) {
      expect(
        screen.getByRole('heading', { name: item.title }),
      ).toBeInTheDocument()
    }
  })

  it('filters products by category when a filter chip is clicked', async () => {
    const user = userEvent.setup()
    render(<App />)

    expect(
      screen.getByRole('heading', { name: 'FamzAI Assistant' }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: 'DeployMate' }),
    ).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'DevOps' }))

    expect(
      screen.getByRole('heading', { name: 'DeployMate' }),
    ).toBeInTheDocument()
    expect(
      screen.queryByRole('heading', { name: 'FamzAI Assistant' }),
    ).not.toBeInTheDocument()
  })

  it('confirms a valid newsletter subscription', async () => {
    const user = userEvent.setup()
    render(<App />)

    await user.type(screen.getByLabelText(/email address/i), 'ada@famztech.dev')
    await user.click(screen.getByRole('button', { name: /subscribe/i }))

    expect(screen.getByRole('status')).toHaveTextContent(
      /we'll keep ada@famztech\.dev posted/i,
    )
  })

  it('rejects an invalid email address', async () => {
    const user = userEvent.setup()
    render(<App />)

    await user.type(screen.getByLabelText(/email address/i), 'not-an-email')
    await user.click(screen.getByRole('button', { name: /subscribe/i }))

    expect(screen.getByRole('alert')).toHaveTextContent(/valid email address/i)
  })
})
