import GalleryPageClient from './GalleryPageClient'

import siteInfo from '@/data/siteInfo.json'
import { Metadata } from 'next'

const BASE_URL = siteInfo.url

export const metadata: Metadata = {
  title: 'Clinic Gallery',
  description: 'Take a look inside the Physio-Raise clinic — modern equipment, comfortable recovery spaces and a welcoming environment.',
  alternates: { canonical: `${BASE_URL}/gallery` },
}

export default function GalleryPage() {
  return <GalleryPageClient/>
}