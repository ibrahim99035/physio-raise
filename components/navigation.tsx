'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { 
  Menu, 
  X, 
  Phone, 
  MessageCircle, 
  ChevronDown,
  Calendar,
  Stethoscope,
  Dumbbell,
  Heart,
  Apple,
  User,
  MapPin,
  Mail
} from 'lucide-react'
import siteInfo from '@/data/siteInfo.json'

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const pathname = usePathname()
  const { contact } = siteInfo

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false)
    setActiveDropdown(null)
  }, [pathname])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMobileMenuOpen])

  const navLinks = [
    { name: 'Home', href: '/', exact: true },
    { 
      name: 'Services', 
      href: '/services',
      dropdown: [
        { name: 'Physical Therapy', href: '/services#physical-therapy', icon: Stethoscope },
        { name: 'Sports Rehabilitation', href: '/services#sports-rehab', icon: Dumbbell },
        { name: 'Post-Surgical Recovery', href: '/services#post-surgery', icon: Heart },
        { name: 'Nutrition Counseling', href: '/services#nutrition', icon: Apple },
      ]
    },
    { name: 'About Dr. Ezzat', href: '/about' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Contact', href: '/contact' },
  ]

  const isActiveLink = (href: string, exact?: boolean) => {
    if (exact) return pathname === href
    return pathname.startsWith(href)
  }

  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name)
  }

  return (
    <>
      {/* Main Navigation */}
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-slate-950/98 backdrop-blur-lg shadow-lg shadow-accent/10 border-b border-accent/20' 
            : 'bg-slate-950/80 backdrop-blur-md border-b border-accent/10'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative w-12 h-12 rounded-full overflow-hidden ring-2 ring-accent/20 group-hover:ring-accent/50 transition-all">
                <Image
                  src="/phsyo-logo.jpeg"
                  alt="Physio-Raise Logo"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="hidden md:block">
                <h1 className="text-xl font-bold text-accent group-hover:text-accent/80 transition-colors">
                  Physio-Raise
                </h1>
                <p className="text-xs text-muted-foreground">Expert Physical Therapy</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <div key={link.name} className="relative group">
                  {link.dropdown ? (
                    <>
                      <button
                        onClick={() => toggleDropdown(link.name)}
                        className={`flex items-center gap-1 font-medium transition-colors ${
                          isActiveLink(link.href)
                            ? 'text-accent'
                            : 'text-foreground hover:text-accent'
                        }`}
                      >
                        {link.name}
                        <ChevronDown className={`w-4 h-4 transition-transform ${
                          activeDropdown === link.name ? 'rotate-180' : ''
                        }`} />
                      </button>
                      
                      {/* Dropdown Menu */}
                      <div
                        className={`absolute top-full left-0 mt-2 w-64 bg-slate-900 border border-accent/30 rounded-lg shadow-xl overflow-hidden transition-all duration-200 ${
                          activeDropdown === link.name
                            ? 'opacity-100 visible translate-y-0'
                            : 'opacity-0 invisible -translate-y-2 pointer-events-none'
                        }`}
                      >
                        {link.dropdown.map((item) => {
                          const Icon = item.icon
                          return (
                            <Link
                              key={item.name}
                              href={item.href}
                              className="flex items-center gap-3 px-4 py-3 hover:bg-accent/10 transition-colors border-b border-accent/10 last:border-0 group/item"
                            >
                              <Icon className="w-5 h-5 text-accent group-hover/item:scale-110 transition-transform" />
                              <span className="text-foreground group-hover/item:text-accent transition-colors">
                                {item.name}
                              </span>
                            </Link>
                          )
                        })}
                      </div>
                    </>
                  ) : (
                    <Link
                      href={link.href}
                      className={`font-medium transition-colors relative ${
                        isActiveLink(link.href, link.exact)
                          ? 'text-accent'
                          : 'text-foreground hover:text-accent'
                      }`}
                    >
                      {link.name}
                      {isActiveLink(link.href, link.exact) && (
                        <span className="absolute -bottom-2 left-0 right-0 h-0.5 bg-accent rounded-full" />
                      )}
                    </Link>
                  )}
                </div>
              ))}
            </div>

            {/* CTA Buttons - Desktop */}
            <div className="hidden lg:flex items-center gap-3">
              <Button
                variant="outline"
                size="sm"
                className="border-accent/40 text-accent hover:bg-accent/10"
                asChild
              >
                <a href={`tel:${contact.phone}`}>
                  <Phone className="w-4 h-4 mr-2" />
                  Call Now
                </a>
              </Button>
              <Button
                size="sm"
                className="bg-accent hover:bg-accent/90 text-accent-foreground"
                asChild
              >
                <Link href="/contact">
                  <Calendar className="w-4 h-4 mr-2" />
                  Book Session
                </Link>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg bg-accent/10 text-accent hover:bg-accent/20 transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden fixed left-0 right-0 bg-slate-950/98 backdrop-blur-lg transition-all duration-300 overflow-hidden ${
            isMobileMenuOpen
              ? 'opacity-100 visible max-h-[calc(100vh-80px)] top-20'
              : 'opacity-0 invisible max-h-0 top-20'
          }`}
          style={{
            bottom: 0,
            height: isMobileMenuOpen ? 'calc(100vh - 80px)' : '0'
          }}
        >
          <div className="h-full overflow-y-auto px-6 py-8 overscroll-contain">
            {/* Mobile Nav Links */}
            <div className="space-y-2 mb-8">
              {navLinks.map((link) => (
                <div key={link.name}>
                  {link.dropdown ? (
                    <>
                      <button
                        onClick={() => toggleDropdown(link.name)}
                        className={`w-full flex items-center justify-between px-4 py-3 rounded-lg transition-colors ${
                          isActiveLink(link.href)
                            ? 'bg-accent/20 text-accent'
                            : 'hover:bg-accent/10 text-foreground'
                        }`}
                      >
                        <span className="font-medium">{link.name}</span>
                        <ChevronDown className={`w-5 h-5 transition-transform ${
                          activeDropdown === link.name ? 'rotate-180' : ''
                        }`} />
                      </button>
                      
                      {/* Mobile Dropdown */}
                      <div
                        className={`overflow-hidden transition-all duration-200 ${
                          activeDropdown === link.name ? 'max-h-96 mt-2' : 'max-h-0'
                        }`}
                      >
                        <div className="pl-4 space-y-2">
                          {link.dropdown.map((item) => {
                            const Icon = item.icon
                            return (
                              <Link
                                key={item.name}
                                href={item.href}
                                className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-accent/10 transition-colors group"
                              >
                                <Icon className="w-5 h-5 text-accent group-hover:scale-110 transition-transform" />
                                <span className="text-foreground group-hover:text-accent transition-colors">
                                  {item.name}
                                </span>
                              </Link>
                            )
                          })}
                        </div>
                      </div>
                    </>
                  ) : (
                    <Link
                      href={link.href}
                      className={`block px-4 py-3 rounded-lg font-medium transition-colors ${
                        isActiveLink(link.href, link.exact)
                          ? 'bg-accent/20 text-accent'
                          : 'hover:bg-accent/10 text-foreground'
                      }`}
                    >
                      {link.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>

            {/* Mobile CTA Buttons */}
            <div className="space-y-3 mb-8">
              <Button
                className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
                size="lg"
                asChild
              >
                <Link href="/contact">
                  <Calendar className="w-5 h-5 mr-2" />
                  Book Your Session
                </Link>
              </Button>
              <Button
                variant="outline"
                className="w-full border-accent/40 text-accent hover:bg-accent/10"
                size="lg"
                asChild
              >
                <a href={`tel:${contact.phone}`}>
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now
                </a>
              </Button>
            </div>

            {/* Mobile Contact Info */}
            <div className="border-t border-accent/20 pt-6 space-y-4">
              <p className="text-sm font-semibold text-foreground mb-3">Quick Contact</p>
              <a 
                href={`tel:${contact.phone}`}
                className="flex items-center gap-3 text-muted-foreground hover:text-accent transition-colors"
              >
                <Phone className="w-5 h-5 text-accent" />
                <span className="text-sm">{contact.phone}</span>
              </a>
              <a 
                href={`mailto:${contact.email}`}
                className="flex items-center gap-3 text-muted-foreground hover:text-accent transition-colors"
              >
                <Mail className="w-5 h-5 text-accent" />
                <span className="text-sm">{contact.email}</span>
              </a>
              <a 
                href={`https://wa.me/${contact.whatsapp}`}
                className="flex items-center gap-3 text-muted-foreground hover:text-accent transition-colors"
              >
                <MessageCircle className="w-5 h-5 text-accent" />
                <span className="text-sm">WhatsApp Us</span>
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Spacer to prevent content from hiding under fixed nav */}
      <div className="h-20" />
    </>
  )
}