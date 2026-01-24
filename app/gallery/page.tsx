'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { FloatingParticles } from '@/components/layout'
import { X, ChevronLeft, ChevronRight, ZoomIn, Search, Grid3x3, LayoutGrid } from 'lucide-react'
import { Button } from '@/components/ui/button'
import galleryData from '@/data/gallery.json'

import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const [isLightboxOpen, setIsLightboxOpen] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [viewMode, setViewMode] = useState<'grid' | 'masonry'>('masonry')

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const filteredItems = galleryData.galleryItems.filter(item => {
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const openLightbox = (index: number) => {
    setSelectedImage(index)
    setIsLightboxOpen(true)
    document.body.style.overflow = 'hidden'
  }

  const closeLightbox = () => {
    setIsLightboxOpen(false)
    setSelectedImage(null)
    document.body.style.overflow = 'unset'
  }

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % filteredItems.length)
    }
  }

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + filteredItems.length) % filteredItems.length)
    }
  }

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isLightboxOpen) return
      if (e.key === 'Escape') closeLightbox()
      if (e.key === 'ArrowRight') nextImage()
      if (e.key === 'ArrowLeft') prevImage()
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isLightboxOpen, selectedImage, filteredItems.length])

  return (
    <main className="min-h-screen">
      <FloatingParticles />
      <Navigation />

      {/* Hero Section with Parallax */}
      <section className="relative py-32 px-6 bg-gradient-to-br from-slate-900 via-background to-slate-950 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-accent/30 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}} />
        </div>

        <div className="max-w-6xl mx-auto text-center relative z-10">
          <h1 
            className={`text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-accent transition-all duration-1000 transform ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            Our Gallery
          </h1>
          <div className="h-1 w-32 bg-gradient-to-r from-accent to-accent/30 mx-auto mb-8 rounded-full" />
          <p 
            className={`text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-200 transform ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            Explore our modern clinic facilities, therapeutic environment, and patient care excellence
          </p>
        </div>
      </section>

      {/* Advanced Filter & Search Section */}
      <section className="sticky top-20 z-40 py-6 px-6 bg-slate-950/95 backdrop-blur-lg border-b border-accent/20 shadow-lg">
        <div className="max-w-7xl mx-auto">
          {/* Search Bar */}
          <div className="mb-6">
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search images..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-lg bg-card border border-accent/20 text-foreground placeholder-muted-foreground focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all"
              />
            </div>
          </div>

          {/* Category Filters & View Toggle */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex flex-wrap justify-center gap-3">
              {galleryData.categories.map((category) => (
                <Button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  variant={selectedCategory === category ? 'default' : 'outline'}
                  className={`px-6 py-2 rounded-full transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-accent text-accent-foreground shadow-lg shadow-accent/30 scale-105'
                      : 'border-accent/40 text-accent hover:bg-accent/10 hover:scale-105'
                  }`}
                >
                  {category}
                </Button>
              ))}
            </div>

            {/* View Mode Toggle */}
            <div className="flex gap-2 bg-card/50 p-1 rounded-lg border border-accent/20">
              <button
                onClick={() => setViewMode('masonry')}
                className={`p-2 rounded transition-all ${
                  viewMode === 'masonry' ? 'bg-accent text-accent-foreground' : 'text-muted-foreground hover:text-accent'
                }`}
                title="Masonry View"
              >
                <LayoutGrid className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded transition-all ${
                  viewMode === 'grid' ? 'bg-accent text-accent-foreground' : 'text-muted-foreground hover:text-accent'
                }`}
                title="Grid View"
              >
                <Grid3x3 className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Results Count */}
          <div className="text-center mt-4 text-sm text-muted-foreground">
            Showing {filteredItems.length} of {galleryData.galleryItems.length} images
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 px-6 bg-background">
        <div className="max-w-7xl mx-auto">
          {filteredItems.length > 0 ? (
            <div className={`grid gap-4 md:gap-6 ${
              viewMode === 'grid' 
                ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3' 
                : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
            }`}>
              {filteredItems.map((item, index) => (
                <div
                  key={index}
                  onClick={() => openLightbox(index)}
                  className={`group relative overflow-hidden rounded-2xl border border-accent/30 hover:border-accent/60 transition-all duration-500 cursor-pointer ${
                    viewMode === 'masonry' ? item.span : ''
                  }`}
                  style={{
                    animation: `slideUp 0.6s ease-out ${index * 0.05}s both`,
                    minHeight: viewMode === 'grid' ? '300px' : '250px'
                  }}
                >
                  {/* Image */}
                  <div className="relative w-full h-full">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                  
                  {/* Category Badge with Animation */}
                  <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-accent/90 backdrop-blur-sm text-accent-foreground text-xs font-semibold transform group-hover:scale-110 transition-transform duration-300">
                    {item.category}
                  </div>

                  {/* Content with Slide Animation */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-2 group-hover:text-accent transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-300 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                      {item.description}
                    </p>
                  </div>

                  {/* Zoom Icon with Pulse Effect */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="w-20 h-20 rounded-full bg-accent/20 border-2 border-accent flex items-center justify-center backdrop-blur-sm animate-pulse-slow">
                      <ZoomIn className="w-10 h-10 text-accent animate-bounce-slow" />
                    </div>
                  </div>

                  {/* Shine Effect on Hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                  </div>
                </div>
              ))}
            </div>
          ) : (
            // Empty State with Animation
            <div className="text-center py-20">
              <div className="inline-flex p-6 rounded-full bg-accent/10 mb-6 animate-bounce-slow">
                <Search className="w-16 h-16 text-accent" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-2">No images found</h3>
              <p className="text-muted-foreground mb-6">Try adjusting your search or filter criteria</p>
              <Button
                onClick={() => {
                  setSelectedCategory('All')
                  setSearchQuery('')
                }}
                className="bg-accent hover:bg-accent/90 text-accent-foreground"
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Enhanced Lightbox Modal */}
      {isLightboxOpen && selectedImage !== null && (
        <div 
          className="fixed inset-0 bg-black/98 z-50 flex items-center justify-center p-4 animate-fade-in"
          onClick={closeLightbox}
        >
          {/* Close Button with Animation */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all z-50 hover:rotate-90 duration-300"
            aria-label="Close"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Previous Button */}
          <button
            onClick={(e) => {
              e.stopPropagation()
              prevImage()
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-4 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all z-50 hidden md:block hover:scale-110 duration-300"
            aria-label="Previous"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>

          {/* Next Button */}
          <button
            onClick={(e) => {
              e.stopPropagation()
              nextImage()
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-4 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all z-50 hidden md:block hover:scale-110 duration-300"
            aria-label="Next"
          >
            <ChevronRight className="w-8 h-8" />
          </button>

          {/* Image Container with Scale Animation */}
          <div 
            className="relative max-w-7xl max-h-[85vh] w-full h-full flex items-center justify-center animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full h-full">
              <Image
                src={filteredItems[selectedImage].image}
                alt={filteredItems[selectedImage].title}
                fill
                className="object-contain"
                sizes="100vw"
                priority
              />
            </div>
          </div>

          {/* Enhanced Image Info */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/90 to-transparent p-8 text-white animate-slide-up">
            <div className="max-w-7xl mx-auto">
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 rounded-full bg-accent text-accent-foreground text-sm font-semibold">
                  {filteredItems[selectedImage].category}
                </span>
                <span className="text-sm text-gray-400">
                  {selectedImage + 1} / {filteredItems.length}
                </span>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold mb-3">
                {filteredItems[selectedImage].title}
              </h3>
              <p className="text-gray-300 text-lg mb-4">
                {filteredItems[selectedImage].description}
              </p>
              
              {/* Mobile Navigation */}
              <div className="flex gap-3 md:hidden">
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    prevImage()
                  }}
                  className="flex-1 p-3 rounded-lg bg-white/10 hover:bg-white/20 transition-all flex items-center justify-center gap-2"
                >
                  <ChevronLeft className="w-5 h-5" />
                  <span>Previous</span>
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    nextImage()
                  }}
                  className="flex-1 p-3 rounded-lg bg-white/10 hover:bg-white/20 transition-all flex items-center justify-center gap-2"
                >
                  <span>Next</span>
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />

      {/* Custom Animations */}
      <style jsx global>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes scale-in {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
        .animate-scale-in {
          animation: scale-in 0.4s ease-out;
        }
        .animate-slide-up {
          animation: slide-up 0.5s ease-out;
        }
        .animate-bounce-slow {
          animation: bounce-slow 2s infinite;
        }
        .animate-pulse-slow {
          animation: pulse-slow 2s infinite;
        }
      `}</style>
    </main>
  )
}