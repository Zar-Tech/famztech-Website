import type { CSSProperties } from 'react'

type PhoneTheme = 'light' | 'dark' | 'orange'

interface PhoneMockupProps {
  theme: PhoneTheme
  className?: string
  style?: CSSProperties
}

function LightScreen() {
  return (
    <div className="phone-screen phone-screen-light">
      <div className="phone-status-bar">
        <span>9:41</span>
        <span className="phone-signal" />
      </div>
      <p className="phone-greeting">Good morning</p>
      <p className="phone-balance-sm">Revenue</p>
      <p className="phone-amount-sm">$48,290</p>
      <div className="phone-chart">
        <div className="phone-chart-bar" style={{ height: '40%' }} />
        <div className="phone-chart-bar" style={{ height: '65%' }} />
        <div className="phone-chart-bar" style={{ height: '50%' }} />
        <div className="phone-chart-bar" style={{ height: '80%' }} />
        <div className="phone-chart-bar" style={{ height: '60%' }} />
      </div>
      <div className="phone-card-row">
        <div className="phone-mini-card" />
        <div className="phone-mini-card" />
      </div>
    </div>
  )
}

function DarkScreen() {
  return (
    <div className="phone-screen phone-screen-dark">
      <div className="phone-status-bar">
        <span>9:41</span>
        <span className="phone-signal" />
      </div>
      <p className="phone-label-dark">Total Balance</p>
      <p className="phone-amount-dark">$156,002</p>
      <div className="phone-icon-grid">
        {['Send', 'Receive', 'Swap', 'More'].map((label) => (
          <div key={label} className="phone-icon-item">
            <div className="phone-icon-circle" />
            <span>{label}</span>
          </div>
        ))}
      </div>
      <div className="phone-dark-graph" />
    </div>
  )
}

function OrangeScreen() {
  return (
    <div className="phone-screen phone-screen-orange">
      <div className="phone-status-bar phone-status-dark">
        <span>9:41</span>
        <span className="phone-signal" />
      </div>
      <p className="phone-label-orange">Portfolio</p>
      <p className="phone-amount-orange">$192,370</p>
      <div className="phone-service-list">
        {['Analytics', 'Payments', 'Reports'].map((item) => (
          <div key={item} className="phone-service-item">
            <div className="phone-service-icon" />
            <span>{item}</span>
          </div>
        ))}
      </div>
      <button type="button" className="phone-cta-btn">Get Started</button>
    </div>
  )
}

const screens = {
  light: LightScreen,
  dark: DarkScreen,
  orange: OrangeScreen,
}

export default function PhoneMockup({ theme, className = '', style }: PhoneMockupProps) {
  const Screen = screens[theme]

  return (
    <div className={`phone-mockup ${className}`} style={style}>
      <div className="phone-frame">
        <div className="phone-notch" />
        <Screen />
      </div>
    </div>
  )
}
