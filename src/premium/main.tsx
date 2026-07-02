import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './premium.css'
import PremiumApp from './PremiumApp'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <PremiumApp />
  </StrictMode>,
)
