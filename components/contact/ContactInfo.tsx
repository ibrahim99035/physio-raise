'use client'

import { Card } from '@/components/ui/card'
import { MapPin, Clock, MessageCircle, Smartphone, Mail, Facebook, Instagram } from 'lucide-react'
import Link from 'next/link'
import siteInfo from '@/data/siteInfo.json'

const TikTokIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
  </svg>
)

export const ContactInfo = () => {
  const { contact, location, hours, socials } = siteInfo

  const contactCards = [
    {
      icon: MapPin,
      title: 'Address',
      content: (
        <div>
          <p className="text-muted-foreground">{location.address}</p>
          <p className="text-muted-foreground">{location.city}</p>
        </div>
      ),
    },
    {
      icon: Clock,
      title: 'Opening Hours',
      content: (
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-muted-foreground">{hours.weekdays.days}:</span>
            <span className="text-foreground font-semibold">{hours.weekdays.time}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">{hours.saturday.days}:</span>
            <span className="text-foreground font-semibold">{hours.saturday.time}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">{hours.sunday.days}:</span>
            <span className="text-foreground font-semibold">{hours.sunday.time}</span>
          </div>
        </div>
      ),
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      content: (
        <Link 
          href={`https://wa.me/${contact.whatsapp}`} 
          className="text-accent hover:text-accent/80 transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          Message us directly
        </Link>
      ),
    },
    {
      icon: Smartphone,
      title: 'Phone',
      content: (
        <Link 
          href={`tel:${contact.phone}`} 
          className="text-accent hover:text-accent/80 transition-colors"
        >
          {contact.phone}
        </Link>
      ),
    },
    {
      icon: Mail,
      title: 'Email',
      content: (
        <Link 
          href={`mailto:${contact.email}`} 
          className="text-accent hover:text-accent/80 transition-colors"
        >
          {contact.email}
        </Link>
      ),
    },
  ]

  return (
    <div>
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-accent">Contact Information</h2>
      
      <div className="space-y-6">
        {contactCards.map((card, index) => {
          const Icon = card.icon
          return (
            <Card 
              key={index}
              className="group p-6 border border-accent/20 bg-card/50 backdrop-blur-sm hover:bg-card/80 hover:border-accent/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-accent/20"
              style={{
                animation: `slideUp 0.6s ease-out ${index * 0.1}s both`,
              }}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-colors">
                  <Icon className="w-6 h-6 text-accent group-hover:scale-110 transition-transform" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-accent transition-colors">
                    {card.title}
                  </h3>
                  <div>{card.content}</div>
                </div>
              </div>
            </Card>
          )
        })}

        {/* Social Media */}
        <div className="mt-8 pt-8 border-t border-accent/20">
          <h3 className="text-lg font-bold text-foreground mb-4">Follow Us</h3>
          <div className="flex gap-4">
            <Link 
              href= {socials.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-3 rounded-lg bg-accent/10 text-accent hover:bg-blue-500/20 hover:text-blue-400 transition-all cursor-pointer" 
              title="Facebook"
            >
              <Facebook className="w-6 h-6 group-hover:scale-110 transition-transform" />
            </Link>
            <Link 
              href={socials.instagram} 
              target="_blank"
              rel="noopener noreferrer"
              className="group p-3 rounded-lg bg-accent/10 text-accent hover:bg-pink-500/20 hover:text-pink-400 transition-all cursor-pointer" 
              title="Instagram"
            >
              <Instagram className="w-6 h-6 group-hover:scale-110 transition-transform" />
            </Link>
            <Link 
              href={socials.tiktok} 
              target="_blank"
              rel="noopener noreferrer"
              className="hover:bg-gray-800/20 hover:text-white group p-3 rounded-lg bg-accent/10 text-accent transition-all cursor-pointer" 
              title="Instagram"
            >
              <TikTokIcon className="w-6 h-6 group-hover:scale-110 transition-transform" />
            </Link>
            <Link 
              href={`https://wa.me/${contact.whatsapp}`} 
              target="_blank"
              rel="noopener noreferrer"
              className="group p-3 rounded-lg bg-accent/10 text-accent hover:bg-green-500/20 hover:text-green-400 transition-all cursor-pointer" 
              title="WhatsApp"
            >
              <MessageCircle className="w-6 h-6 group-hover:scale-110 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}