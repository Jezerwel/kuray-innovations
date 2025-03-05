"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"

const testimonials = [
  {
    quote:
      "Kuray Innovations has revolutionized how we think about marine conservation. Their approach to repurposing oyster shells is both innovative and effective.",
    author: "Dr. Maria Santos",
    title: "Marine Biologist, University of the Philippines",
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    quote:
      "Working with Kuray has been a game-changer for our restaurant. We've reduced our waste footprint while contributing to a meaningful environmental cause.",
    author: "Carlos Reyes",
    title: "Owner, Seaside Grill Restaurant",
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    quote:
      "The artificial reef structures created by Kuray Innovations have shown remarkable results in our coastal restoration projects. We're seeing increased biodiversity within months of deployment.",
    author: "Emma Garcia",
    title: "Project Manager, Coastal Conservation Initiative",
    image: "/placeholder.svg?height=80&width=80",
  },
]

export default function Testimonials() {
  const [current, setCurrent] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  useEffect(() => {
    if (!autoplay) return

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [autoplay])

  const next = () => {
    setAutoplay(false)
    setCurrent((prev) => (prev + 1) % testimonials.length)
  }

  const prev = () => {
    setAutoplay(false)
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#7ADEDA]/10 to-transparent -z-10"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-full bg-gradient-to-r from-[#0078AD]/10 to-transparent -z-10"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block mb-4"
          >
            <div className="w-16 h-1 bg-gradient-to-r from-[#0078AD] to-[#4A9A96] mx-auto"></div>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl font-bold text-[#0078AD] mb-4"
          >
            What People Say
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-[#97A8B1] max-w-2xl mx-auto"
          >
            Hear from our partners and supporters about the impact of our work
          </motion.p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Quote icon */}
          <div className="absolute -top-10 -left-10 text-[#7ADEDA]/20">
            <Quote className="w-20 h-20" />
          </div>

          {/* Testimonial slider */}
          <div className="relative overflow-hidden rounded-lg bg-white shadow-xl p-8 md:p-12">
            <div className="relative h-full">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{
                    opacity: current === index ? 1 : 0,
                    x: current === index ? 0 : 100,
                    position: current === index ? "relative" : "absolute",
                  }}
                  transition={{ duration: 0.5 }}
                  className="w-full"
                >
                  <blockquote className="text-xl md:text-2xl text-[#0078AD] italic mb-8">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="flex items-center">
                    <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
                      <img
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.author}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <div className="font-bold text-[#4A9A96]">{testimonial.author}</div>
                      <div className="text-[#97A8B1]">{testimonial.title}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Navigation buttons */}
            <div className="absolute bottom-4 right-4 flex space-x-2">
              <button
                onClick={prev}
                className="w-10 h-10 rounded-full bg-[#0078AD]/10 flex items-center justify-center text-[#0078AD] hover:bg-[#0078AD]/20 transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={next}
                className="w-10 h-10 rounded-full bg-[#0078AD]/10 flex items-center justify-center text-[#0078AD] hover:bg-[#0078AD]/20 transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Pagination dots */}
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setAutoplay(false)
                  setCurrent(index)
                }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  current === index ? "bg-[#0078AD] w-6" : "bg-[#0078AD]/30"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

