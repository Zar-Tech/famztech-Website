export type Service = {
  title: string
  description: string
  icon: string
}

export const services: Service[] = [
  {
    title: 'AI & Machine Learning',
    description:
      'Custom LLM apps, chatbots, computer vision and predictive models that turn data into decisions.',
    icon: '🤖',
  },
  {
    title: 'Software Development',
    description:
      'Web, mobile and desktop applications engineered for scale, speed and reliability.',
    icon: '💻',
  },
  {
    title: 'Cloud & DevOps',
    description:
      'Cloud architecture, CI/CD pipelines and observability so your products ship and stay up.',
    icon: '☁️',
  },
  {
    title: 'Product & UX Design',
    description:
      'Research-driven interfaces and design systems that customers love to use.',
    icon: '🎨',
  },
]
