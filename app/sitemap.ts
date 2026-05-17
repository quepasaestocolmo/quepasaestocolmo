export default function sitemap() {
  const baseUrl = 'https://www.quepasaestocolmo.com'
  return [
    // Cerezos ES
    {
      url: `${baseUrl}/cerezos-estocolmo-2026`,
      lastModified: '2026-04-01',
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
    // Cherry blossoms EN
    {
      url: `${baseUrl}/en/cherry-blossoms-stockholm-2026`,
      lastModified: '2026-04-01',
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
    // Primavera ES
    {
      url: `${baseUrl}/blog/que-hacer-estocolmo-primavera-2026`,
      lastModified: '2026-04-01',
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
    // Spring EN
    {
      url: `${baseUrl}/en/blog/what-to-do-stockholm-spring-2026`,
      lastModified: '2026-04-01',
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
    // Itinerario 3 días ES
    {
      url: `${baseUrl}/blog/itinerario-estocolmo-3-dias-2026`,
      lastModified: '2026-05-01',
      changeFrequency: 'monthly' as const,
      priority: 1.0,
    },
    // 3-day itinerary EN
    {
      url: `${baseUrl}/en/blog/stockholm-3-day-itinerary-2026`,
      lastModified: '2026-05-01',
      changeFrequency: 'monthly' as const,
      priority: 1.0,
    },
    // Midsommar ES
    {
      url: `${baseUrl}/blog/midsommar-estocolmo-2026`,
      lastModified: '2026-05-01',
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
    // Midsommar EN
    {
      url: `${baseUrl}/en/blog/midsommar-stockholm-2026`,
      lastModified: '2026-05-01',
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
  ]
}
