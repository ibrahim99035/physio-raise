'use client'

import testimonialsData from '@/data/testimonials.json'

export const TestimonialSection = () => {
  return (
    <section id="testimonials" className="py-20 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-4 text-accent">
          Patient Testimonials & Reviews
        </h2>
        <p className="text-center text-muted-foreground mb-16 text-lg">
          Hear from our valued patients about their therapeutic experiences and recovery journeys
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonialsData.testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-slate-800/80 to-slate-900/80 border border-accent/30 rounded-2xl p-8 hover:border-accent/60 transition-all duration-500 hover:shadow-xl hover:shadow-accent/20"
              style={{
                animation: `slideUp 0.6s ease-out ${index * 0.1}s both`,
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative z-10">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-accent text-lg">★</span>
                  ))}
                </div>
                <p className="text-foreground mb-6 leading-relaxed text-lg italic">
                  "{testimonial.text}"
                </p>
                <div>
                  <p className="font-bold text-foreground">{testimonial.author}</p>
                  <p className="text-accent text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}