import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://irvingsfencerepair.com'
  const now = new Date()

  return [
    {
      url: baseUrl,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/resources`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/sitemap`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.4,
    },
    // Service pages — high priority for local SEO
    {
      url: `${baseUrl}/services/privacy-fences`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.95,
    },
    {
      url: `${baseUrl}/services/wood-fences`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.95,
    },
    {
      url: `${baseUrl}/services/vinyl-fences`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.95,
    },
    {
      url: `${baseUrl}/services/chain-link`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services/fence-repair`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.95,
    },
    {
      url: `${baseUrl}/services/custom-gates`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    // Blog posts
    {
      url: `${baseUrl}/blog/best-fence-for-texas-heat`,
      lastModified: new Date('2024-11-12'),
      changeFrequency: 'yearly',
      priority: 0.65,
    },
    {
      url: `${baseUrl}/blog/privacy-fence-cost-irving`,
      lastModified: new Date('2024-10-28'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog/wood-vs-vinyl-fence`,
      lastModified: new Date('2024-10-10'),
      changeFrequency: 'yearly',
      priority: 0.65,
    },
    {
      url: `${baseUrl}/blog/fence-permit-irving-tx`,
      lastModified: new Date('2024-09-18'),
      changeFrequency: 'yearly',
      priority: 0.65,
    },
    {
      url: `${baseUrl}/blog/how-long-fence-installation-takes`,
      lastModified: new Date('2024-09-03'),
      changeFrequency: 'yearly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/blog/fence-maintenance-tips-texas`,
      lastModified: new Date('2024-08-20'),
      changeFrequency: 'yearly',
      priority: 0.6,
    },
  ]
}
