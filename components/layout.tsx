'use client'

import { Heart, Activity, Stethoscope, Dumbbell, TrendingUp, Spline as Spine, Facebook, Instagram, MessageCircle, MapPin, Clock, Mail, Smartphone } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Button } from '@/components/ui/button'

export const FloatingParticles = () => {
  const particles = [
    { Icon: Spine, delay: 0 },
    { Icon: Heart, delay: 2 },
    { Icon: Stethoscope, delay: 4 },
    { Icon: Dumbbell, delay: 1.5 },
    { Icon: Activity, delay: 3 },
    { Icon: TrendingUp, delay: 2.5 },
    { Icon: Heart, delay: 0.5 },
    { Icon: Activity, delay: 3.5 },
    { Icon: Stethoscope, delay: 1 },
  ]

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {particles.map((particle, index) => {
        const Icon = particle.Icon
        const positions = [
          'bottom-1/4 left-1/3',
          'bottom-1/3 right-1/4',
          'bottom-2/3 left-1/4',
          'bottom-1/2 right-1/3',
          'bottom-2/5 left-1/2',
          'bottom-1/3 right-1/2',
          'bottom-3/4 left-1/2',
          'bottom-1/5 right-1/3',
          'bottom-1/2 left-1/4',
        ]
        
        return (
          <div
            key={index}
            className={`absolute ${positions[index % positions.length]} particle-${(index % 3) + 1}`}
          >
            <Icon className="w-8 h-8 text-accent/30 drop-shadow-lg" />
          </div>
        )
      })}
    </div>
  )
}

export const Navigation = () => {
  const pathname = usePathname()
  
  const isActive = (href: string) => {
    if (href === '/' && pathname === '/') return true
    if (href !== '/' && pathname.startsWith(href)) return true
    return false
  }

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Services' },
    { href: '/about', label: 'About' },
    { href: '/gallery', label: 'Gallery' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-accent/20">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-center">
        {/* Logo space */}
        <Link href="/" className="absolute left-6 flex items-center gap-3 hover:opacity-80 transition-opacity">
          <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center border border-accent/40">
            <span className="text-accent font-bold">PR</span>
          </div>
          <span className="text-2xl font-bold text-accent hidden sm:block">Physio-Raise</span>
        </Link>
        
        {/* Navigation links - Centered */}
        <div className="flex items-center gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.href}
              href={link.href} 
              className={`text-sm font-medium transition-colors relative ${
                isActive(link.href)
                  ? 'text-accent'
                  : 'text-foreground hover:text-accent'
              }`}
            >
              {link.label}
              {isActive(link.href) && (
                <div className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-accent to-accent/50 rounded-full" />
              )}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}

export const FooterComponent = () => {
  return (
    <footer className="bg-gradient-to-r from-slate-950 to-slate-900 text-foreground py-16 px-6 border-t border-accent/20">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-2xl font-bold mb-2 text-accent">Physio-Raise</h3>
            <p className="text-muted-foreground leading-relaxed">
              Excellence in clinical physical therapy and comprehensive rehabilitation
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-foreground">Services</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><Link href="/services" className="hover:text-accent transition-colors">Physical Therapy</Link></li>
              <li><Link href="/services" className="hover:text-accent transition-colors">Sports Rehabilitation</Link></li>
              <li><Link href="/services" className="hover:text-accent transition-colors">Post-Surgery Care</Link></li>
              <li><Link href="/services" className="hover:text-accent transition-colors">Nutrition Counseling</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-foreground">Information</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><Link href="/about" className="hover:text-accent transition-colors">About Dr. Ezzat</Link></li>
              <li><Link href="/about" className="hover:text-accent transition-colors">Our Approach</Link></li>
              <li><Link href="/contact" className="hover:text-accent transition-colors">Clinic Location</Link></li>
              <li><Link href="/contact" className="hover:text-accent transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-foreground">Connect With Us</h4>
            <div className="flex gap-3 mb-4">
              <a href="#" className="p-2 rounded-lg bg-accent/10 text-accent hover:bg-accent/20 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 rounded-lg bg-accent/10 text-accent hover:bg-accent/20 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 rounded-lg bg-accent/10 text-accent hover:bg-accent/20 transition-colors">
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
            <p className="text-sm text-muted-foreground">Follow for health tips and updates</p>
          </div>
        </div>

        <div className="border-t border-accent/20 pt-8 text-center">
          <p className="text-muted-foreground mb-2">&copy; 2025 Physio-Raise. All rights reserved.</p>
          <p className="text-sm text-accent font-semibold">Leading Your Recovery with Expert Care - Dr. Mostafa Ezzat</p>
        </div>
      </div>
    </footer>
  )
}

export const Footer = FooterComponent
