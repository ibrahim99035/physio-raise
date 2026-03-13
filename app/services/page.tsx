import ServicesPageClient from './ServicesPageClient'

import siteInfo from '@/data/siteInfo.json'
import { Metadata } from 'next'

const BASE_URL = siteInfo.url

export const metadata: Metadata = {
  title: 'Services',
  description: 'Explore our physical therapy services: sports rehabilitation, post-surgical recovery, manual therapy and nutrition counseling.',
  alternates: { canonical: `${BASE_URL}/services` },
}

export default function ServicesPage() {
  return <ServicesPageClient />
}