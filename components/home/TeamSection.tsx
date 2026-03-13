'use client'

import Image from 'next/image'
import { useRef, useEffect, useState } from 'react'
import teamData from '@/data/teamData.json'

// --- SVG Social Icons ---
const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
    strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
    <rect x="2" y="2" width="20" height="20" rx="4" />
    <path d="M7 10v7M7 7v.01M12 10v7M12 13a3 3 0 016 0v4" />
  </svg>
)

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
    strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
    <rect x="2" y="2" width="20" height="20" rx="5" />
    <circle cx="12" cy="12" r="5" />
    <circle cx="17.5" cy="6.5" r=".8" fill="currentColor" stroke="none" />
  </svg>
)

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
    strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
  </svg>
)

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
    strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
    <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
  </svg>
)

const TwitterXIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" stroke="none" className="w-3.5 h-3.5">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.747l7.73-8.835L1.254 2.25H8.08l4.259 5.631 5.905-5.631zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
)

type Social = {
  linkedin?: string
  instagram?: string
  facebook?: string
  whatsapp?: string
  twitter?: string
}

const SOCIAL_CONFIG = [
  { key: 'linkedin',  Icon: LinkedInIcon,  label: 'LinkedIn',  color: 'hover:text-blue-400 hover:border-blue-400/40 hover:bg-blue-400/10' },
  { key: 'instagram', Icon: InstagramIcon, label: 'Instagram', color: 'hover:text-pink-400 hover:border-pink-400/40 hover:bg-pink-400/10' },
  { key: 'facebook',  Icon: FacebookIcon,  label: 'Facebook',  color: 'hover:text-blue-500 hover:border-blue-500/40 hover:bg-blue-500/10' },
  { key: 'whatsapp',  Icon: WhatsAppIcon,  label: 'WhatsApp',  color: 'hover:text-green-400 hover:border-green-400/40 hover:bg-green-400/10' },
  { key: 'twitter',   Icon: TwitterXIcon,  label: 'X',         color: 'hover:text-foreground hover:border-foreground/40 hover:bg-foreground/10' },
] as const

function SocialLinks({ social }: { social: Social }) {
  return (
    <div className="flex justify-center gap-2 flex-wrap">
      {SOCIAL_CONFIG.map(({ key, Icon, label, color }) => {
        const rawHref = social[key as keyof Social]
        if (!rawHref) return null
        const href =
          key === 'whatsapp'
            ? `https://wa.me/${rawHref.replace(/\D/g, '')}`
            : rawHref
        return (
          <a
            key={key}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className={`w-8 h-8 rounded-full border border-accent/20 bg-accent/5 flex items-center justify-center text-muted-foreground transition-all duration-200 hover:scale-110 hover:-translate-y-0.5 ${color}`}
          >
            <Icon />
          </a>
        )
      })}
    </div>
  )
}

function TeamCard({
  member,
  index,
}: {
  member: (typeof teamData.team)[number]
  index: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  const [tilt, setTilt] = useState({ x: 0, y: 0 })

  // Intersection observer for staggered entrance
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect() } },
      { threshold: 0.15 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  // 3D tilt on hover
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = ((e.clientY - rect.top) / rect.height - 0.5) * 12
    const y = -((e.clientX - rect.left) / rect.width - 0.5) * 12
    setTilt({ x, y })
  }
  const resetTilt = () => setTilt({ x: 0, y: 0 })

  const isFeatured = member.featured

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={resetTilt}
      style={{
        transitionDelay: `${index * 80}ms`,
        transform: visible
          ? `perspective(800px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) translateY(0)`
          : 'translateY(40px)',
        opacity: visible ? 1 : 0,
        transition: 'transform 0.3s ease, opacity 0.5s ease',
      }}
      className={`
        relative rounded-2xl border p-6 flex flex-col items-center text-center
        transition-[border-color] duration-300 group
        ${isFeatured
          ? 'border-accent/40 bg-gradient-to-b from-accent/5 to-transparent hover:border-accent/70 shadow-lg shadow-accent/10'
          : 'border-accent/10 bg-slate-900/50 hover:border-accent/30'
        }
      `}
    >
      {/* Featured badge */}
      {isFeatured && member.featuredLabel && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-[10px] font-semibold tracking-widest uppercase bg-accent text-accent-foreground whitespace-nowrap">
          {member.featuredLabel}
        </span>
      )}

      {/* Avatar */}
      <div className={`relative mb-4 ${isFeatured ? 'w-28 h-28' : 'w-20 h-20'}`}>
        {/* Animated ring */}
        <span
          className={`
            absolute inset-0 rounded-full border-2 
            ${isFeatured ? 'border-accent animate-[pulse_2.5s_ease-in-out_infinite]' : 'border-accent/30 group-hover:border-accent/60 transition-colors duration-300'}
          `}
          style={isFeatured ? { animation: 'teamRing 2.5s ease-in-out infinite' } : {}}
        />
        <span className="absolute inset-[-6px] rounded-full border border-accent/10 group-hover:border-accent/20 transition-colors duration-500" />

        <div className={`relative w-full h-full rounded-full overflow-hidden ring-1 ring-accent/20`}>
          {member.image ? (
            <Image src={member.image} alt={member.name} fill className="object-cover" />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-accent/20 to-accent/5 text-accent font-semibold text-xl">
              {member.initials}
            </div>
          )}
        </div>
      </div>

      {/* Info */}
      <h3 className={`font-bold text-foreground mb-1 ${isFeatured ? 'text-xl' : 'text-base'}`}>
        {member.name}
      </h3>
      <p className="text-xs font-semibold text-accent tracking-wider uppercase mb-2">
        {member.title}
      </p>
      <p className={`text-muted-foreground leading-relaxed mb-1 ${isFeatured ? 'text-sm' : 'text-xs line-clamp-2'}`}>
        {member.bio}
      </p>
      <p className="text-xs text-accent/60 mb-4">{member.expertise}</p>

      {/* Divider */}
      <div className="w-full h-px bg-accent/10 mb-4" />

      {/* Socials */}
      <SocialLinks social={member.social} />
    </div>
  )
}

export const TeamSection = () => {
  const { team } = teamData

  return (
    <section className="py-24 px-6 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/3 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto relative">
        {/* Section header */}
        <div className="text-center mb-14">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase bg-accent/10 text-accent border border-accent/20 mb-4">
            Our Specialists
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Meet the <span className="text-accent">Team</span>
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-accent to-accent/20 rounded-full mx-auto mb-4" />
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Expert professionals dedicated to your recovery, performance, and long-term well-being.
          </p>
        </div>

        {/* Team grid — featured card takes more space on md+ */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, index) => (
            <div
              key={member.id}
              className={member.featured ? 'sm:col-span-2 lg:col-span-1' : ''}
            >
              <TeamCard member={member} index={index} />
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes teamRing {
          0%, 100% { box-shadow: 0 0 0 0 rgba(var(--accent-rgb, 20 184 166) / 0.5); }
          50%       { box-shadow: 0 0 0 8px rgba(var(--accent-rgb, 20 184 166) / 0);  }
        }
      `}</style>
    </section>
  )
}