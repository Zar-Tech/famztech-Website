interface LogoProps {
  variant?: 'nav' | 'footer'
  className?: string
}

export default function Logo({ variant = 'nav', className = '' }: LogoProps) {
  return (
    <img
      src="/logo.png"
      alt="Famztech"
      className={`site-logo site-logo--${variant} ${className}`.trim()}
      width={1200}
      height={960}
      decoding="async"
    />
  )
}
