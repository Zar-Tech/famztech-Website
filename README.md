# Famztech

Premium technology company website with Sema Software-inspired CSS animations.

## Animations (Sema-style)

- Animated code editor with blinking cursor, loading dots, and rotating donut chart
- Scroll-triggered fade-in reveals (Intersection Observer)
- Animated progress bars with colored segments
- Particle twinkle effects on impact and contact sections
- Gradient background shift on CTA
- Button hover scale + glow, card lift, link underline

## Products

Edit `src/data/products.ts` to add or update your products. Each product supports:

- `name`, `tag`, `description`, `features`
- Optional `price` (e.g. `From $49/mo`)
- `viz`: `code` | `bars` | `grid` (animation style in the card)
- `ctaLabel` and `ctaHref` for the call-to-action link

```ts
{
  id: 'my-product',
  name: 'Your Product Name',
  tag: 'Category',
  description: 'Short description...',
  features: ['Feature 1', 'Feature 2'],
  price: 'From $29/mo',
  viz: 'code',
}
```


- **Home** — Hero with animated code editor
- **Impact** — Large stat reveal with particles
- **Products** — Product cards with code/bar visualizations
- **About Us** — Feature grid with staggered scroll reveals
- **Contact** — CTA with gradient shift, particles, and form

## Tech Stack

- React + TypeScript + Vite
- Tailwind CSS v4
- Pure CSS animations (no Three.js, no Framer Motion)

## Development

```bash
npm install
npm run dev
```
