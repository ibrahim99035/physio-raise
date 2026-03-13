import { MetadataRoute } from 'next'
import siteInfo from '@/data/siteInfo.json'

const BASE_URL = siteInfo.url ?? 'https://physio-raise.vercel.app'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: '*', allow: '/', disallow: ['/api/', '/_next/'] },
    ],
    sitemap: `${BASE_URL}/sitemap.xml`,
    host: BASE_URL,
  }
}