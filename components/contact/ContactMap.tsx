'use client'

import { MapPin } from 'lucide-react'

export const ContactMap = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-slate-900/30 to-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-accent">Visit Our Clinic</h2>
          <p className="text-muted-foreground text-lg">Find us at our convenient location in Cairo</p>
        </div>

        <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-accent/20 h-[400px] md:h-[500px]">
          {/* Placeholder for Google Maps - Replace with actual embed */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center">
            {/* <div className="text-center">
              <div className="inline-flex p-6 rounded-full bg-accent/10 mb-4">
                <MapPin className="w-16 h-16 text-accent" />
              </div>
              <p className="text-muted-foreground text-lg mb-2">Location On Map</p>
              <p className="text-sm text-muted-foreground">
                Google Maps integration.
              </p>
            </div> */}
            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3454.396953008474!2d30.979026000000005!3d30.025467700000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1458592a532293c3%3A0x6896766832f9a373!2sPhysioRaise!5e0!3m2!1sar!2seg!4v1769252558262!5m2!1sar!2seg"
                width="100%" 
                height="100%" 
                style={{border: 0}}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        {/* Direction Button */}
        <div className="text-center mt-8">
          <a
            href="https://maps.app.goo.gl/kVJBdAwmQ9TTMvFJ9"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-accent/10 text-accent hover:bg-accent/20 transition-all font-semibold border border-accent/30 hover:border-accent/50"
          >
            <MapPin className="w-5 h-5" />
            Get Directions
          </a>
        </div>
      </div>
    </section>
  )
}