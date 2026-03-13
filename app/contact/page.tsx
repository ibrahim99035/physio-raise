import ContactPageClient from './ContactPageClient'
import siteInfo from '@/data/siteInfo.json'
import { Metadata } from 'next'

const BASE_URL = siteInfo.url

export const metadata: Metadata = {
  title: 'Contact & Book a Session',
  description: 'Book a physical therapy session with Dr. Ahmed Ezzat. Find our location, phone number, and WhatsApp contact.',
  alternates: { canonical: `${BASE_URL}/contact` },
}

export default function ContactPage() {
  return <ContactPageClient/>
}