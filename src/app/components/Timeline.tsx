"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { Calendar, Award, Lightbulb, Flag, Rocket, Target } from "lucide-react"

const milestones = [
  {
    date: "November 2023",
    title: "Founding",
    description:
      "Kuray Innovations was founded at the Central Launch: Student-led Startup Bootcamp at Central Philippine University.",
    icon: Calendar,
    color: "#0078AD",
  },
  {
    date: "December 2023",
    title: "First Prototype",
    description: "Developed our first prototype of an artificial reef structure using recycled oyster shells.",
    icon: Lightbulb,
    color: "#4A9A96",
  },
  {
    date: "February 2024",
    title: "First Partnership",
    description: "Established our first partnership with a local seafood restaurant for oyster shell collection.",
    icon: Flag,
    color: "#7ADEDA",
  },
  {
    date: "April 2024",
    title: "Recognition",
    description: "Received recognition from the Department of Science and Technology for innovative waste management.",
    icon: Award,
    color: "#0078AD",
  },
  {
    date: "June 2024",
    title: "Pilot Deployment",
    description: "Successfully deployed our first artificial reef structure in coastal waters of Iloilo.",
    icon: Rocket,
    color: "#4A9A96",
  },
  {
    date: "Future",
    title: "Expansion Goals",
    description: "Planning to expand operations to other coastal regions and develop new reef designs.",
    icon: Target,
    color: "#7ADEDA",
  },
]

export default function Timeline() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  return (
    <section className="py-24 bg-gradient-to-br from-[#7ADEDA]/10 to-[#4A9A96]/10 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M0,0 L100,0 L100,100 L0,100 Z" fill="none" stroke="#7ADEDA" strokeWidth="0.5"></path>
          <path d="M0,50 Q25,25 50,50 T100,50" fill="none" stroke="#0078AD" strokeWidth="0.5"></path>
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
            Our Journey
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-[#97A8B1] max-w-2xl mx-auto"
          >
            The evolution of Kuray Innovations from concept to reality
          </motion.p>
        </div>

        <div ref={containerRef} className="relative max-w-4xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-[#0078AD] to-[#7ADEDA]"></div>

          {milestones.map((milestone, index) => (
            <TimelineItem key={index} milestone={milestone} index={index} progress={scrollYProgress} />
          ))}
        </div>
      </div>
    </section>
  )
}

function TimelineItem({ milestone, index, progress }) {
  const { date, title, description, icon: Icon, color } = milestone
  const isEven = index % 2 === 0

  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1])
  const x = useTransform(scrollYProgress, [0, 0.5], [isEven ? -50 : 50, 0])

  return (
    <motion.div
      ref={ref}
      style={{ opacity, x }}
      className={`flex items-center mb-16 ${isEven ? "flex-row" : "flex-row-reverse"}`}
    >
      {/* Content */}
      <div className={`w-5/12 ${isEven ? "text-right pr-8" : "text-left pl-8"}`}>
        <div className="text-sm font-semibold text-[#97A8B1] mb-1">{date}</div>
        <h3 className="text-xl font-bold mb-2" style={{ color }}>
          {title}
        </h3>
        <p className="text-[#97A8B1]">{description}</p>
      </div>

      {/* Icon */}
      <div className="w-2/12 flex justify-center">
        <div
          className="w-12 h-12 rounded-full flex items-center justify-center z-10 shadow-lg"
          style={{ backgroundColor: color }}
        >
          <Icon className="w-6 h-6 text-white" />
        </div>
      </div>

      {/* Empty space for alignment */}
      <div className="w-5/12"></div>
    </motion.div>
  )
}

