"use client"

import { motion } from "framer-motion"
import { Recycle, Droplet, Shield, Fish, Anchor, Globe } from "lucide-react"

const features = [
  {
    icon: Recycle,
    title: "Sustainable Reef Creation",
    description: "Eco-friendly artificial reefs from recycled oyster shells",
  },
  {
    icon: Droplet,
    title: "Waste Reduction",
    description: "Converting oyster shell waste into valuable marine habitats",
  },
  {
    icon: Shield,
    title: "Ecosystem Protection",
    description: "Supporting biodiversity and rebuilding damaged ecosystems",
  },
  {
    icon: Fish,
    title: "Marine Conservation",
    description: "Creating new habitats for diverse marine species",
  },
  {
    icon: Anchor,
    title: "Community Engagement",
    description: "Partnering with local communities and organizations",
  },
  {
    icon: Globe,
    title: "Global Impact",
    description: "Building a circular economy for marine restoration",
  },
]

export default function FeatureSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="py-24 bg-gradient-to-br from-[#7ADEDA]/5 to-[#4A9A96]/5"
    >
      <div className="container mx-auto px-4">
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
            What We Do
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-[#97A8B1] max-w-2xl mx-auto"
          >
            Our innovative approach combines waste management with marine conservation to create sustainable solutions
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
            >
              <FeatureCard {...feature} />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}

function FeatureCard({ icon: Icon, title, description }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05, y: -5 }}
      className="relative overflow-hidden rounded-xl bg-white shadow-lg group"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#7ADEDA]/20 to-[#4A9A96]/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>

      <div className="relative z-10 p-8">
        <div className="mb-4 text-[#4A9A96] bg-[#7ADEDA]/10 w-16 h-16 rounded-full flex items-center justify-center">
          <Icon className="w-8 h-8" />
        </div>
        <h3 className="text-xl font-semibold mb-2 text-[#0078AD]">{title}</h3>
        <p className="text-[#97A8B1]">{description}</p>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#0078AD] to-[#4A9A96] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
    </motion.div>
  )
}

