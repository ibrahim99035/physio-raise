import AboutPageClient from './AboutPageClient'
import siteInfo from '@/data/siteInfo.json'
import { Metadata } from 'next'

const BASE_URL = siteInfo.url

export const metadata: Metadata = {
  title: 'About Dr. Ahmed Ezzat',
  description: 'Learn about Dr. Ahmed Ezzat, a specialist in physical therapy and sports rehabilitation with over 12 years of clinical experience.',
  alternates: { canonical: `${BASE_URL}/about` },
}

export default function AboutPage() {
  return <AboutPageClient/>
}