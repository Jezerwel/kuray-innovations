"use client"

import { motion } from "framer-motion"
import { Building, FlagIcon as Government, Fish } from "lucide-react"

const markets = [
  {
    icon: Building,
    title: "Environmental NGOs",
    organizations: ["World Wildlife Fund (WWF)", "Coral Triangle Initiative", "Greenpeace Philippines", "Rotary Clubs"],
  },
  {
    icon: Government,
    title: "Government Bodies",
    organizations: [
      "Department of Science and Technology (DOST)",
      "Department of Environment and Natural Resources (DENR)",
      "Local Government Units (LGU)",
    ],
  },
  {
    icon: Fish,
    title: "Aquarium Market",
    organizations: [
      "Private aquarium owners",
      "Commercial aquarium facilities",
      "Specialized marine habitat designers",
    ],
  },
]

export default function Markets() {
  return (
    <section className="py-24 bg-gradient-to-br from-[#7ADEDA]/10 to-[#4A9A96]/10 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M0,50 C25,30 75,70 100,50" stroke="#0078AD" strokeWidth="0.5" fill="none" />
          <path d="M0,60 C25,40 75,80 100,60" stroke="#4A9A96" strokeWidth="0.5" fill="none" />
          <path d="M0,40 C25,20 75,60 100,40" stroke="#7ADEDA" strokeWidth="0.5" fill="none" />
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
            Target Markets
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-[#97A8B1] max-w-2xl mx-auto"
          >
            Connecting with organizations and individuals committed to marine conservation
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {markets.map((market, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <MarketCard {...market} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function MarketCard({ icon: Icon, title, organizations }) {
  return (
    <motion.div
      whileHover={{
        y: -10,
        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      }}
      className="bg-white rounded-lg shadow-lg h-full overflow-hidden"
    >
      <div className="h-2 bg-gradient-to-r from-[#0078AD] to-[#4A9A96]"></div>
      <div className="p-6">
        <div className="mb-4 text-[#4A9A96] bg-[#7ADEDA]/10 w-16 h-16 rounded-full flex items-center justify-center">
          <Icon className="w-8 h-8" />
        </div>
        <h3 className="text-xl font-semibold mb-4 text-[#0078AD]">{title}</h3>
        <ul className="space-y-2">
          {organizations.map((org, i) => (
            <li key={i} className="text-[#97A8B1] flex items-start">
              <span className="text-[#4A9A96] mr-2">•</span>
              <span>{org}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  )
}

