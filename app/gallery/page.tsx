'use client'

import { Card } from '@/components/ui/card'
import { ImageIcon } from 'lucide-react'
import { useState } from 'react'
import { Navigation, FloatingParticles, Footer } from '@/components/layout'

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const galleryItems = [
    { category: 'therapy', title: 'Clinical Treatment', description: 'Advanced therapy techniques and patient care' },
    { category: 'equipment', title: 'Modern Equipment', description: 'State-of-the-art rehabilitation technology' },
    { category: 'therapy', title: 'Physical Sessions', description: 'Expert therapeutic interventions' },
    { category: 'facility', title: 'Clinic Facility', description: 'Professional medical environment' },
    { category: 'sports', title: 'Sports Rehabilitation', description: 'Athletic injury recovery programs' },
    { category: 'therapy', title: 'Patient Recovery', description: 'Success stories and progress tracking' },
    { category: 'facility', title: 'Treatment Room', description: 'Equipped therapy treatment spaces' },
    { category: 'equipment', title: 'Diagnostic Tools', description: 'Advanced assessment technology' },
    { category: 'sports', title: 'Athletic Training', description: 'Sports-specific rehabilitation' },
  ]

  const categories = [
    { value: 'all', label: 'All' },
    { value: 'therapy', label: 'Therapy' },
    { value: 'equipment', label: 'Equipment' },
    { value: 'facility', label: 'Facility' },
    { value: 'sports', label: 'Sports' },
  ]

  const filtered = selectedCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory)

  return (
    <main className="min-h-screen pt-24">
      <FloatingParticles />
      <Navigation />
      {/* Hero Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-slate-900 via-background to-slate-950">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-6xl font-bold mb-4 text-accent">Gallery</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore our modern clinic facilities, therapeutic environment, and patient care excellence
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 px-6 bg-background border-b border-accent/20">
        <div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-4">
          {categories.map(category => (
            <button
              key={category.value}
              onClick={() => setSelectedCategory(category.value)}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 cursor-pointer ${
                selectedCategory === category.value
                  ? 'bg-accent text-accent-foreground shadow-lg shadow-accent/30'
                  : 'border border-accent/30 text-foreground hover:border-accent/60 hover:text-accent'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 px-6 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((item, index) => (
              <Card
                key={index}
                className="group relative overflow-hidden bg-gradient-to-br from-slate-800/80 to-slate-900/80 border border-accent/30 hover:border-accent/60 transition-all duration-500 cursor-pointer h-64"
              >
                {/* Background gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Content */}
                <div className="relative z-10 h-full flex flex-col justify-between p-6 group-hover:translate-y-[-8px] transition-transform duration-500">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-accent transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                  
                  <div className="flex items-center gap-2 text-accent opacity-0 group-hover:opacity-100 transform group-hover:translate-x-1 transition-all duration-500">
                    <ImageIcon className="w-5 h-5" />
                    <span className="text-sm font-medium">View</span>
                  </div>
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-black/30 backdrop-blur-sm z-20">
                  <div className="w-16 h-16 rounded-full bg-accent/20 border-2 border-accent flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                    <ImageIcon className="w-8 h-8 text-accent" />
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
