"use client"

import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"

export type ProductSlide = {
  name: string
  href: string
  image: string
  imageRotation?: number
}

interface ProductSlideshowProps {
  slides: ProductSlide[]
}

export default function ProductSlideshow({ slides }: ProductSlideshowProps) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)")

    setIsPlaying(!reducedMotion.matches)

    const handleMotionPreference = (event: MediaQueryListEvent) => {
      if (event.matches) setIsPlaying(false)
    }

    reducedMotion.addEventListener("change", handleMotionPreference)
    return () => reducedMotion.removeEventListener("change", handleMotionPreference)
  }, [])

  useEffect(() => {
    if (!isPlaying || isHovered || slides.length < 2) return

    const timer = window.setInterval(() => {
      setActiveIndex(index => (index + 1) % slides.length)
    }, 4500)

    return () => window.clearInterval(timer)
  }, [activeIndex, isHovered, isPlaying, slides.length])

  if (!slides.length) return null

  const activeSlide = slides[activeIndex] ?? slides[0]
  const showPrevious = () => {
    setActiveIndex(index => (index - 1 + slides.length) % slides.length)
  }
  const showNext = () => {
    setActiveIndex(index => (index + 1) % slides.length)
  }

  return (
    <section
      aria-label="Featured ODAX products"
      aria-roledescription="carousel"
      className="mt-8 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-64 sm:h-80">
        {slides.map((slide, index) => {
          const isActive = index === activeIndex

          return (
            <Link
              key={slide.href}
              href={slide.href}
              aria-hidden={!isActive}
              aria-label={`View ${slide.name}`}
              tabIndex={isActive ? 0 : -1}
              className={`absolute inset-0 flex items-center justify-center transition-opacity duration-700 ease-out ${
                isActive ? "z-10 opacity-100" : "pointer-events-none z-0 opacity-0"
              }`}
            >
              <span className="relative block h-full w-full">
                <Image
                  src={slide.image}
                  alt={`${slide.name} product image`}
                  fill
                  sizes="(min-width: 768px) 768px, calc(100vw - 2rem)"
                  priority={index === 0}
                  className="object-contain p-6 sm:p-8"
                  style={slide.imageRotation ? { transform: `rotate(${slide.imageRotation}deg)` } : undefined}
                />
              </span>
            </Link>
          )
        })}

        {slides.length > 1 && (
          <>
            <button
              type="button"
              onClick={showPrevious}
              aria-label="Show previous product"
              className="absolute left-3 top-1/2 z-20 inline-flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200 bg-white/90 text-xl text-slate-900 shadow-sm backdrop-blur transition hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-600 dark:border-slate-700 dark:bg-slate-950/90 dark:text-white dark:hover:bg-slate-950"
            >
              <span aria-hidden="true">&#8592;</span>
            </button>
            <button
              type="button"
              onClick={showNext}
              aria-label="Show next product"
              className="absolute right-3 top-1/2 z-20 inline-flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200 bg-white/90 text-xl text-slate-900 shadow-sm backdrop-blur transition hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-600 dark:border-slate-700 dark:bg-slate-950/90 dark:text-white dark:hover:bg-slate-950"
            >
              <span aria-hidden="true">&#8594;</span>
            </button>
          </>
        )}
      </div>

      <div className="flex flex-col gap-4 border-t border-slate-200 px-5 py-4 dark:border-slate-800 sm:flex-row sm:items-center sm:justify-between">
        <div className="min-w-0" aria-live={isPlaying ? "off" : "polite"}>
          <p className="text-xs font-semibold uppercase tracking-wider text-red-600">
            Featured product
          </p>
          <Link
            href={activeSlide.href}
            className="mt-1 block truncate font-semibold text-slate-900 hover:underline dark:text-slate-50"
          >
            {activeSlide.name}
          </Link>
        </div>

        {slides.length > 1 && (
          <div className="flex shrink-0 items-center gap-2">
            <div className="flex items-center gap-1" aria-label="Choose a product slide">
              {slides.map((slide, index) => (
                <button
                  key={slide.href}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  aria-label={`Show ${slide.name}`}
                  aria-current={index === activeIndex ? "true" : undefined}
                  className={`h-2.5 rounded-full transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-600 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-slate-900 ${
                    index === activeIndex
                      ? "w-7 bg-red-600"
                      : "w-2.5 bg-slate-300 hover:bg-slate-400 dark:bg-slate-700 dark:hover:bg-slate-600"
                  }`}
                />
              ))}
            </div>
            <button
              type="button"
              onClick={() => setIsPlaying(playing => !playing)}
              aria-label={isPlaying ? "Pause product slideshow" : "Play product slideshow"}
              className="ml-1 rounded-lg border border-slate-300 px-2.5 py-1 text-xs font-semibold text-slate-700 transition hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-600 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800"
            >
              {isPlaying ? "Pause" : "Play"}
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
