"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const partners = [
  {
    name: "World Wildlife Fund",
    logo: "/placeholder.svg?height=80&width=200",
    category: "Environmental NGO",
  },
  {
    name: "Department of Science and Technology",
    logo: "/placeholder.svg?height=80&width=200",
    category: "Government",
  },
  {
    name: "Coral Triangle Initiative",
    logo: "/placeholder.svg?height=80&width=200",
    category: "Conservation",
  },
  {
    name: "Greenpeace Philippines",
    logo: "/placeholder.svg?height=80&width=200",
    category: "Environmental NGO",
  },
  {
    name: "Local Government of Iloilo",
    logo: "/placeholder.svg?height=80&width=200",
    category: "Government",
  },
  {
    name: "Central Philippine University",
    logo: "/placeholder.svg?height=80&width=200",
    category: "Academic",
  },
]

export default function Partners() {
  return (
    <section className="py-24 bg-gradient-to-br from-[#7ADEDA]/5 to-[#4A9A96]/5 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
          <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
            <path d="M 10 0 L 0 0 0 10" fill="none" stroke="#0078AD" strokeWidth="0.5" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

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
            Our Partners
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-[#97A8B1] max-w-2xl mx-auto"
          >
            Collaborating with organizations that share our vision for marine conservation
          </motion.p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
              className="bg-white rounded-lg p-6 flex flex-col items-center justify-center text-center"
            >
              <div className="h-20 flex items-center justify-center mb-4">
                <Image
                  src={partner.logo || "/placeholder.svg"}
                  alt={partner.name}
                  width={200}
                  height={80}
                  className="max-h-full w-auto"
                />
              </div>
              <h3 className="text-sm font-semibold text-[#0078AD] mb-1">{partner.name}</h3>
              <p className="text-xs text-[#97A8B1]">{partner.category}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

