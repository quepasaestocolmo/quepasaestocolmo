export default function sitemap() {
  const baseUrl = 'https://www.quepasaestocolmo.com'

  return [
    {
      url: `${baseUrl}/cerezos-estocolmo-2026`,
      lastModified: '2026-04-01',
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog/que-hacer-estocolmo-primavera-2026`,
      lastModified: '2026-04-01',
      changeFrequency: 'monthly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/en/blog/what-to-do-stockholm-spring-2026`,
      lastModified: '2026-04-01',
      changeFrequency: 'monthly',
      priority: 0.9,
    },
  ]
}
