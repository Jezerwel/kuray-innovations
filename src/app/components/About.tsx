"use client";

import { motion } from "framer-motion";
import { Anchor, Target, LucideIcon } from "lucide-react";
import Image from "next/image";

interface AboutCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

function AboutCard({ icon: Icon, title, description }: AboutCardProps) {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="text-center p-6 bg-white rounded-lg shadow-lg border-b-2 border-[#4A9A96] h-full flex flex-col"
    >
      <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-[#7ADEDA]/20 to-[#4A9A96]/20 rounded-full flex items-center justify-center">
        <Icon className="w-8 h-8 text-[#4A9A96]" />
      </div>
      <h3 className="text-xl font-semibold mb-2 text-[#0078AD]">{title}</h3>
      <p className="text-[#97A8B1] flex-grow">{description}</p>
    </motion.div>
  );
}

export default function About() {
  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#7ADEDA]/10 rounded-full -mr-32 -mt-32"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#4A9A96]/10 rounded-full -ml-48 -mb-48"></div>

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
            About Kuray Innovations
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-[#97A8B1] max-w-2xl mx-auto"
          >
            Pioneering sustainable solutions for marine conservation through
            innovative waste management
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 mb-16  mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="h-full"
          >
            <AboutCard
              icon={Anchor}
              title="Our Mission"
              description="To build a circular economy that powers marine restoration by converting oyster waste into vibrant artificial reefs."
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="h-full"
          >
            <AboutCard
              icon={Target}
              title="Our Vision"
              description="To become the leading force in marine conservation and restoration."
            />
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-[#0078AD] rounded-lg transform rotate-3"></div>
            <div className="relative bg-[#7ADEDA]/20 rounded-lg p-1">
              <div className="aspect-w-4 aspect-h-3 rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Coral reef restoration"
                  width={600}
                  height={400}
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold mb-4 text-[#4A9A96]">
              How We Started
            </h3>
            <p className="text-[#97A8B1] mb-4">
              Our journey began at the Central Launch: Student-led Startup
              Bootcamp, held at the American Corner, Henry Luce III Library,
              Central Philippine University on November 22-23, 2024. During this
              intensive two-day bootcamp, our founding team came together,
              united by a shared vision to address two pressing environmental
              issues: the rapid decline of coral reef ecosystems and the growing
              waste problem from discarded oyster shells in the seafood
              industry.
            </p>
            <p className="text-[#97A8B1]">
              This bootcamp served as the catalyst for our startup, where our
              multidisciplinary team developed our innovative concept of
              repurposing oyster shell waste into artificial reef structures.
              The diverse expertise of our founding members allowed us to
              approach marine conservation from multiple angles, combining
              ecological understanding with engineering innovation and
              human-centered design.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
