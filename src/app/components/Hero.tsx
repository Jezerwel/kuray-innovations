"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { Anchor, Fish, Droplet, WavesIcon as Wave } from "lucide-react"
import { useRef, useEffect, useState } from "react"

export default function Hero() {
  const containerRef = useRef(null)
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 500], [0, 250])
  const opacity = useTransform(scrollY, [0, 300], [1, 0])

  // Parallax effect for background elements
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e
      const { innerWidth, innerHeight } = window
      const x = clientX / innerWidth - 0.5
      const y = clientY / innerHeight - 0.5
      setMousePosition({ x, y })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <section
      ref={containerRef}
      className="relative bg-gradient-to-br from-[#0078AD] via-[#1A8AA3] to-[#4A9A96] text-white pt-32 pb-24 overflow-hidden"
      style={{ minHeight: "100vh" }}
    >
      {/* Animated water surface effect */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAxMDAgMjAiPjxwYXRoIGQ9Ik0wLDEwIFExMCwxNSAyNSwxMCBUNTAsMTAgVDc1LDEwIFQxMDAsMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9zdmc+')]"></div>
        <div className="absolute inset-0 animate-[wave1_10s_linear_infinite]"></div>
        <div className="absolute inset-0 animate-[wave2_15s_linear_infinite]"></div>
      </div>

      {/* Animated bubbles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white/10 backdrop-blur-sm"
            style={{
              width: Math.random() * 60 + 20,
              height: Math.random() * 60 + 20,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              boxShadow: "0 0 10px rgba(255, 255, 255, 0.3)",
            }}
            animate={{
              y: [0, -500],
              x: [0, Math.random() * 50 - 25],
              opacity: [0, 0.7, 0],
              scale: [0.5, 1, 0.8],
            }}
            transition={{
              duration: Math.random() * 10 + 15,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      {/* Floating marine elements with parallax effect */}
      <motion.div
        className="absolute right-[10%] top-[20%]"
        style={{
          x: mousePosition.x * -30,
          y: mousePosition.y * -30,
        }}
        animate={{
          y: [0, -15, 0],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 6,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      >
        <Fish className="w-20 h-20 text-[#7ADEDA]/30" />
      </motion.div>

      <motion.div
        className="absolute left-[15%] bottom-[30%]"
        style={{
          x: mousePosition.x * 40,
          y: mousePosition.y * 40,
        }}
        animate={{
          y: [0, 15, 0],
          rotate: [0, -5, 0],
        }}
        transition={{
          duration: 7,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      >
        <Anchor className="w-24 h-24 text-[#7ADEDA]/20" />
      </motion.div>

      <motion.div
        className="absolute right-[25%] bottom-[20%]"
        style={{
          x: mousePosition.x * 20,
          y: mousePosition.y * 20,
        }}
        animate={{
          y: [0, -10, 0],
          rotate: [0, 10, 0],
        }}
        transition={{
          duration: 5,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      >
        <Droplet className="w-16 h-16 text-[#7ADEDA]/30" />
      </motion.div>

      <motion.div
        className="absolute left-[25%] top-[30%]"
        style={{
          x: mousePosition.x * -15,
          y: mousePosition.y * -15,
        }}
        animate={{
          y: [0, 8, 0],
          rotate: [0, -8, 0],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      >
        <Wave className="w-28 h-28 text-[#7ADEDA]/20" />
      </motion.div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div style={{ y, opacity }} className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ scale: 0, rotate: -10 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.3,
              type: "spring",
              stiffness: 100,
            }}
            className="mb-6 inline-block bg-[#7ADEDA]/20 p-5 rounded-full backdrop-blur-sm"
          >
            <Anchor className="w-20 h-20 text-[#7ADEDA]" />
          </motion.div>

          <motion.h1
            className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <span className="text-white drop-shadow-lg">Make Waves That</span>{" "}
            <span className="bg-gradient-to-r from-[#7ADEDA] to-white bg-clip-text text-transparent drop-shadow-lg">
              Save The Future
            </span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-white/90 mb-8 drop-shadow-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            Kuray Innovations transforms oyster shell waste into artificial reef structures, addressing marine ecosystem
            degradation and waste management challenges.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <motion.a
              href="#services"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.2)",
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#7ADEDA] hover:bg-[#7ADEDA]/90 text-[#0078AD] font-bold py-4 px-8 rounded-full text-lg transition duration-300 ease-in-out inline-block shadow-lg"
            >
              Discover Our Solutions
            </motion.a>

            <motion.a
              href="#about"
              whileHover={{
                scale: 1.05,
                backgroundColor: "rgba(255, 255, 255, 0.2)",
              }}
              whileTap={{ scale: 0.95 }}
              className="text-white border-2 border-white/30 font-bold py-4 px-8 rounded-full text-lg transition duration-300 ease-in-out inline-block backdrop-blur-sm"
            >
              Learn More
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{
          y: [0, 10, 0],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 2,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      >
        <div className="w-8 h-12 border-2 border-white/50 rounded-full flex justify-center pt-2">
          <motion.div
            className="w-1 h-2 bg-white rounded-full"
            animate={{
              y: [0, 6, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
        </div>
      </motion.div>

      {/* Wave decoration */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0,96L48,85.3C96,75,192,53,288,53.3C384,53,480,75,576,90.7C672,107,768,117,864,106.7C960,96,1056,64,1152,48C1248,32,1344,32,1392,32L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  )
}

