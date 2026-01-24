'use client'

import { Button } from '@/components/ui/button'
import { ImageIcon } from 'lucide-react'
import Link from 'next/link'
import galleryData from '@/data/gallery.json'

export const GallerySection = () => {
  // Mapping the local images to the gallery items
  const images = [
    '/ClincDocOffice.jpeg',
    '/Clinc-Reception.jpeg',
    '/ClinicInterior.jpeg',
    '/therapy.webp',
    '/spine-1-.webp',
    '/spine-2-.webp'
  ];

  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-4 text-accent">
          Our Gallery
        </h2>
        <p className="text-center text-muted-foreground mb-16 text-lg max-w-2xl mx-auto">
          Experience the excellence of Physio-Raise through our modern facilities and professional therapeutic environment
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[200px]">
          {galleryData.galleryItems.map((item, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-800/80 to-slate-900/80 border border-accent/30 hover:border-accent/60 transition-all duration-500 cursor-pointer ${item.span}`}
              style={{
                animation: `slideUp 0.6s ease-out ${index * 0.1}s both`,
              }}
            >
              {/* Background Image */}
              <img 
                src={images[index % images.length]} 
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-700"
              />

              {/* Placeholder gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Content */}
              <div className="relative z-10 h-full flex flex-col justify-between p-6 group-hover:translate-y-[-8px] transition-transform duration-500 bg-black/40">
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-accent transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </div>
                
                <div className="flex items-center gap-2 text-accent opacity-0 group-hover:opacity-100 transform group-hover:translate-x-1 transition-all duration-500">
                  <ImageIcon className="w-5 h-5" />
                  <span className="text-sm font-medium">View</span>
                </div>
              </div>

              {/* Hover overlay with icon */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-black/30 backdrop-blur-sm">
                <div className="w-16 h-16 rounded-full bg-accent/20 border-2 border-accent flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                  <ImageIcon className="w-8 h-8 text-accent" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* <div className="text-center mt-16">
          <Button
            size="lg"
            className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-6 text-lg rounded-lg font-semibold shadow-lg shadow-accent/30 hover:shadow-xl hover:shadow-accent/40 transition-all duration-300 hover:scale-105 cursor-pointer"
          >
            <Link href="/gallery" className="no-underline">View Full Gallery</Link>
          </Button>
        </div> */}
      </div>
    </section>
  )
}