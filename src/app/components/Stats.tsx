"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { useState, useEffect } from "react"
import { Shell, Recycle, Fish, Users } from "lucide-react"

const stats = [
  {
    icon: Shell,
    value: 5000,
    unit: "kg",
    label: "Oyster Shells Recycled",
    color: "#0078AD",
  },
  {
    icon: Recycle,
    value: 25,
    unit: "",
    label: "Reef Structures Created",
    color: "#4A9A96",
  },
  {
    icon: Fish,
    value: 1000,
    unit: "+",
    label: "Marine Species Supported",
    color: "#7ADEDA",
  },
  {
    icon: Users,
    value: 15,
    unit: "",
    label: "Community Partners",
    color: "#97A8B1",
  },
]

function CountUp({ end, duration = 2, unit = "" }) {
  const [count, setCount] = useState(0)
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  useEffect(() => {
    let startTime
    let animationFrame

    if (inView) {
      const animate = (timestamp) => {
        if (!startTime) startTime = timestamp
        const progress = timestamp - startTime
        const percentage = Math.min(progress / (duration * 1000), 1)

        setCount(Math.floor(end * percentage))

        if (percentage < 1) {
          animationFrame = requestAnimationFrame(animate)
        }
      }

      animationFrame = requestAnimationFrame(animate)
    }

    return () => cancelAnimationFrame(animationFrame)
  }, [end, duration, inView])

  return (
    <span ref={ref}>
      {count}
      {unit}
    </span>
  )
}

export default function Stats() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[#7ADEDA]/5 skew-y-3 -z-10"></div>

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
            Our Impact
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-[#97A8B1] max-w-2xl mx-auto"
          >
            Measuring our contribution to marine conservation and sustainability
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <StatCard {...stat} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function StatCard({ icon: Icon, value, unit, label, color }) {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="bg-white rounded-lg shadow-lg p-8 text-center h-full border-t-4"
      style={{ borderColor: color }}
    >
      <div
        className="mb-4 mx-auto w-16 h-16 rounded-full flex items-center justify-center"
        style={{ backgroundColor: `${color}20` }}
      >
        <Icon className="w-8 h-8" style={{ color }} />
      </div>
      <h3 className="text-4xl font-bold mb-2" style={{ color }}>
        <CountUp end={value} unit={unit} />
      </h3>
      <p className="text-[#97A8B1]">{label}</p>
    </motion.div>
  )
}

