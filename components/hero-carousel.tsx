"use client"

import { useState, useEffect, useCallback, useRef } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

const heroSlides = [
  {
    image: "/images/hero-suiza-products.png",
    logo: null,
    text: null,
  },
  {
    image: "/images/hero-familia-limpiadores.png",
    logo: null,
    text: null,
  },
  {
    image: "/images/hero-laundry.jpeg",
    logo: null,
    text: null,
  },
]

export function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(true)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  // Create an extended array for infinite loop effect: [slide1, slide2, slide3, slide1_copy]
  const extendedHeroSlides = [...heroSlides, heroSlides[0]]
  const transitionDuration = 1000 // Matches CSS transition duration in milliseconds

  const resetTimeout = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
  }, [])

  const goToNextSlide = useCallback(() => {
    resetTimeout()
    if (currentSlide === heroSlides.length - 1) {
      // If we are on the last original slide, move to the duplicated first slide
      setCurrentSlide(heroSlides.length)
      timeoutRef.current = setTimeout(() => {
        setIsTransitioning(false) // Disable transition for instant jump
        setCurrentSlide(0) // Jump back to the real first slide
        setTimeout(() => setIsTransitioning(true), 50) // Re-enable transition after a tiny delay
      }, transitionDuration) // Wait for the transition to the duplicated slide to complete
    } else {
      setCurrentSlide((prev) => prev + 1)
    }
  }, [currentSlide, resetTimeout, transitionDuration])

  const goToPrevSlide = useCallback(() => {
    resetTimeout()
    if (currentSlide === 0) {
      // If we are on the first original slide, jump to the duplicated first slide (at the end)
      setIsTransitioning(false) // Disable transition for instant jump
      setCurrentSlide(heroSlides.length)
      timeoutRef.current = setTimeout(() => {
        setIsTransitioning(true) // Re-enable transition
        setCurrentSlide(heroSlides.length - 1) // Animate back to the last original slide
      }, 50) // Tiny delay before animating back
    } else {
      setCurrentSlide((prev) => prev - 1)
    }
  }, [currentSlide, resetTimeout])

  useEffect(() => {
    const autoPlayTimer = setInterval(goToNextSlide, 4000) // Auto-play interval
    return () => clearInterval(autoPlayTimer)
  }, [goToNextSlide])

  // Clean up timeout on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [])

  return (
    <section className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] overflow-hidden">
      <div className="relative h-full w-full overflow-hidden">
        <div
          className={`flex h-full ${isTransitioning ? `transition-transform duration-${transitionDuration} ease-in-out` : ""}`}
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {extendedHeroSlides.map((slide, index) => (
            <div key={index} className="relative flex-shrink-0 w-full h-full">
              <Image
                src={slide.image || "/placeholder.svg"}
                alt={`Hero Slide ${index + 1}`}
                fill
                className="object-cover object-center"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Indicators */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center space-x-2 z-20">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              resetTimeout()
              setIsTransitioning(true) // Ensure transition is enabled for manual clicks
              setCurrentSlide(index)
            }}
            className={`w-3 h-3 rounded-full transition-colors duration-300 ${
              (currentSlide === heroSlides.length && index === 0) || currentSlide === index ? "bg-white" : "bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={goToPrevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 p-3 rounded-full transition-colors duration-300 z-10"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6 text-gray-700" />
      </button>
      <button
        onClick={goToNextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 p-3 rounded-full transition-colors duration-300 z-10"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6 text-gray-700" />
      </button>
    </section>
  )
}
