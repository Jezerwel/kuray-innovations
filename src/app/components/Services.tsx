"use client";

import { motion } from "framer-motion";
import { Recycle, Droplet, Fish, Users, School, Lightbulb } from "lucide-react";

const services = [
  {
    icon: Recycle,
    title: "Sustainable Reef Creation",
    description:
      "We design and manufacture artificial reef structures using recycled oyster shells, providing an eco-friendly alternative to traditional concrete-based solutions.",
  },
  {
    icon: Droplet,
    title: "Waste Reduction & Circular Economy",
    description:
      "We partner with seafood restaurants to collect and repurpose oyster shells that would otherwise end up in landfills.",
  },
  {
    icon: Fish,
    title: "Ecosystem Restoration",
    description:
      "Our artificial reef structures create new habitats for marine life, supporting biodiversity and helping to rebuild damaged marine ecosystems.",
  },
  {
    icon: Lightbulb,
    title: "Custom Solutions",
    description:
      "We develop specialized reef designs for different applications including large-scale conservation projects and custom aquarium installations.",
  },
  {
    icon: Users,
    title: "Community Engagement",
    description:
      "We work closely with coastal communities, environmental NGOs, government bodies, and local organizations for implementation.",
  },
  {
    icon: School,
    title: "Experiential Workshops",
    description:
      "We conduct hands-on educational workshops where participants learn the art and science of creating artificial reef molds.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="py-24 bg-gradient-to-br from-[#7ADEDA]/10 to-[#4A9A96]/10 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0 L100,0 L100,100 L0,100 Z"
            fill="none"
            stroke="#7ADEDA"
            strokeWidth="0.5"
          ></path>
          <path
            d="M0,50 Q25,25 50,50 T100,50"
            fill="none"
            stroke="#0078AD"
            strokeWidth="0.5"
            strokeDasharray="5,5"
          ></path>
          <path
            d="M0,70 Q25,45 50,70 T100,70"
            fill="none"
            stroke="#4A9A96"
            strokeWidth="0.5"
          ></path>
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
            What We Do
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-[#97A8B1] max-w-2xl mx-auto"
          >
            Our innovative approach combines waste management with marine
            conservation to create sustainable solutions
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ServiceCard {...service} index={index} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ icon: Icon, title, description, index }) {
  return (
    <motion.div
      whileHover={{
        y: -10,
        boxShadow:
          "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      }}
      className="bg-white rounded-lg shadow-lg overflow-hidden h-full"
    >
      <div className="h-2 bg-gradient-to-r from-[#0078AD] to-[#4A9A96]"></div>
      <div className="p-6">
        <div className="mb-4 text-[#4A9A96] bg-[#7ADEDA]/10 w-16 h-16 rounded-full flex items-center justify-center">
          <Icon className="w-8 h-8" />
        </div>
        <h3 className="text-xl font-semibold mb-2 text-[#0078AD]">{title}</h3>
        <p className="text-[#97A8B1]">{description}</p>
      </div>
    </motion.div>
  );
}
