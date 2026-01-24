'use client'

import { Facebook, Instagram, MessageCircle, Phone, Mail, MapPin, Clock, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import siteInfo from '@/data/siteInfo.json'

export const Footer = () => {
  const { contact, location, hours, doctor } = siteInfo
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { name: 'Physical Therapy', href: '/services#physical-therapy' },
    { name: 'Sports Rehabilitation', href: '/services#sports-rehab' },
    { name: 'Post-Surgery Care', href: '/services#post-surgery' },
    { name: 'Nutrition Counseling', href: '/services#nutrition' },
  ]

  const infoLinks = [
    { name: 'About Dr. Ezzat', href: '/about' },
    { name: 'Our Approach', href: '/about#approach' },
    { name: 'Patient Reviews', href: '/#testimonials' },
    { name: 'FAQs', href: '/#faqs' },
  ]

  const socialLinks = [
    { 
      icon: Facebook, 
      href: 'https://facebook.com/physioraise', 
      label: 'Facebook',
      hoverColor: 'hover:bg-blue-500/20 hover:text-blue-400'
    },
    { 
      icon: Instagram, 
      href: 'https://instagram.com/physioraise', 
      label: 'Instagram',
      hoverColor: 'hover:bg-pink-500/20 hover:text-pink-400'
    },
    { 
      icon: MessageCircle, 
      href: `https://wa.me/${contact.whatsapp}`, 
      label: 'WhatsApp',
      hoverColor: 'hover:bg-green-500/20 hover:text-green-400'
    },
  ]

  return (
    <footer className="relative bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-foreground overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <Link href="/" className="inline-block group">
                <h3 className="text-3xl font-bold mb-3 text-accent group-hover:text-accent/80 transition-colors">
                  Physio-Raise
                </h3>
              </Link>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Excellence in clinical physical therapy and comprehensive rehabilitation services in Cairo.
              </p>
              
              {/* Quick Contact */}
              <div className="space-y-3">
                <a 
                  href={`tel:${contact.phone}`}
                  className="flex items-center gap-3 text-sm text-muted-foreground hover:text-accent transition-colors group"
                >
                  <div className="p-2 rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-colors">
                    <Phone className="w-4 h-4 text-accent" />
                  </div>
                  <span>{contact.phone}</span>
                </a>
                <a 
                  href={`mailto:${contact.email}`}
                  className="flex items-center gap-3 text-sm text-muted-foreground hover:text-accent transition-colors group"
                >
                  <div className="p-2 rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-colors">
                    <Mail className="w-4 h-4 text-accent" />
                  </div>
                  <span>{contact.email}</span>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-bold mb-6 text-foreground text-lg flex items-center gap-2">
                <div className="h-1 w-8 bg-accent rounded-full" />
                Our Services
              </h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href} 
                      className="text-muted-foreground hover:text-accent transition-colors flex items-center gap-2 group"
                    >
                      <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 -ml-6 group-hover:ml-0 transition-all" />
                      <span>{link.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Information Links */}
            <div>
              <h4 className="font-bold mb-6 text-foreground text-lg flex items-center gap-2">
                <div className="h-1 w-8 bg-accent rounded-full" />
                Information
              </h4>
              <ul className="space-y-3">
                {infoLinks.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href} 
                      className="text-muted-foreground hover:text-accent transition-colors flex items-center gap-2 group"
                    >
                      <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 -ml-6 group-hover:ml-0 transition-all" />
                      <span>{link.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Clinic Hours & Social */}
            <div>
              <h4 className="font-bold mb-6 text-foreground text-lg flex items-center gap-2">
                <div className="h-1 w-8 bg-accent rounded-full" />
                Clinic Hours
              </h4>
              <div className="space-y-3 mb-6">
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <div className="text-sm">
                    <p className="text-foreground font-semibold">{hours.weekdays.days}</p>
                    <p className="text-muted-foreground">{hours.weekdays.time}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <div className="text-sm">
                    <p className="text-foreground font-semibold">{hours.saturday.days}</p>
                    <p className="text-muted-foreground">{hours.saturday.time}</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <p className="text-sm font-semibold text-foreground mb-3">Follow Us</p>
                <div className="flex gap-3">
                  {socialLinks.map((social) => {
                    const Icon = social.icon
                    return (
                      <a 
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`p-3 rounded-lg bg-accent/10 text-accent transition-all hover:scale-110 ${social.hoverColor}`}
                        aria-label={social.label}
                      >
                        <Icon className="w-5 h-5" />
                      </a>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Location Bar */}
          <div className="border-t border-accent/20 pt-8 mb-8">
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-center md:text-left">
              <div className="flex items-center gap-3 text-muted-foreground">
                <div className="p-2 rounded-lg bg-accent/10">
                  <MapPin className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="text-sm">{location.address}</p>
                  <p className="text-sm font-semibold text-foreground">{location.city}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-accent/20 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
              <div>
                <p className="text-muted-foreground text-sm mb-1">
                  &copy; {currentYear} Physio-Raise. All rights reserved.
                </p>
                <p className="text-xs text-muted-foreground">
                  Designed with care for your recovery journey
                </p>
              </div>
              <div className="flex flex-col items-center md:items-end">
                <p className="text-accent font-semibold text-sm">
                  Leading Your Recovery with Expert Care
                </p>
                <p className="text-muted-foreground text-xs">
                  {doctor.name} - {doctor.title}
                </p>
              </div>
            </div>
          </div>

          {/* Legal Links */}
          <div className="mt-6 pt-6 border-t border-accent/10">
            <div className="flex flex-wrap justify-center gap-6 text-xs text-muted-foreground">
              <Link href="/privacy" className="hover:text-accent transition-colors">
                Privacy Policy
              </Link>
              <span className="text-accent/30">•</span>
              <Link href="/terms" className="hover:text-accent transition-colors">
                Terms of Service
              </Link>
              <span className="text-accent/30">•</span>
              <Link href="/accessibility" className="hover:text-accent transition-colors">
                Accessibility
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}