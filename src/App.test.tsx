import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from './App'

describe('App', () => {
  it('renders the FamzTech hero heading', () => {
    render(<App />)
    expect(
      screen.getByRole('heading', {
        name: /software that moves your business forward/i,
      }),
    ).toBeInTheDocument()
  })

  it('lists the services offered', () => {
    render(<App />)
    expect(screen.getByText('Web Platforms')).toBeInTheDocument()
    expect(screen.getByText('Cloud & DevOps')).toBeInTheDocument()
    expect(screen.getByText('Product Design')).toBeInTheDocument()
  })

  it('shows a confirmation after subscribing with a valid email', async () => {
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

    expect(screen.getByRole('alert')).toHaveTextContent(
      /valid email address/i,
    )
  })
})
