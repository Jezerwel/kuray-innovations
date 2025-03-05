"use client";

import { motion } from "framer-motion";
import { Instagram, Facebook, Mail } from "lucide-react";

const team = [
  {
    name: "Kiara Beatriz A. Bonifacio",
    position: "Chief Executive Officer",
    background: "BS Biology",
  },
  {
    name: "Clarence Von L. Alarde",
    position: "Chief Technology Officer",
    background: "BS Electronics Engineering",
  },
  {
    name: "Maverick J. Rico",
    position: "Chief Product Officer",
    background: "BS Electronics Engineering",
  },
  {
    name: "Dianne Lois I. Senegocio",
    position: "Chief Operating Officer",
    background: "BS Psychology",
  },
  {
    name: "Richylle S. Delante",
    position: "Chief Sustainability Officer",
    background: "BS Electronics Engineering",
  },
  {
    name: "Jezerwel S. Griño",
    position: "Chief Innovation Officer",
    background: "BS Software Engineering",
  },
  {
    name: "Izza Mikhaela Inguillo",
    position: "Chief Financial Officer",
    background: "BS Packaging Engineering",
  },
];

export default function Team() {
  return (
    <section id="team" className="py-24 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#7ADEDA]/10 rounded-full -mr-48 -mb-48"></div>

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
            Leadership Team
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-[#97A8B1] max-w-2xl mx-auto"
          >
            Meet the passionate innovators behind Kuray&apos;s mission to
            transform marine conservation
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <TeamCard {...member} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TeamCard({ name, position, background }) {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="bg-white rounded-lg shadow-lg overflow-hidden group"
    >
      <div className="h-24 bg-gradient-to-r from-[#0078AD] to-[#4A9A96]"></div>
      <div className="px-6 pt-0 pb-6 text-center relative">
        <div className="w-24 h-24 bg-gradient-to-br from-[#0078AD] to-[#4A9A96] rounded-full mx-auto -mt-12 mb-4 flex items-center justify-center text-white text-2xl font-bold border-4 border-white shadow-lg">
          {name
            .split(" ")
            .map((part) => part[0])
            .join("")}
        </div>
        <h3 className="text-xl font-semibold mb-1 text-[#0078AD]">{name}</h3>
        <p className="text-[#4A9A96] font-medium mb-1">{position}</p>
        <p className="text-[#97A8B1] mb-4">{background}</p>

        <div className="flex justify-center space-x-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <a
            href="#"
            className="text-[#0078AD] hover:text-[#4A9A96] transition-colors"
          >
            <Instagram className="w-5 h-5" />
          </a>
          <a
            href="#"
            className="text-[#0078AD] hover:text-[#4A9A96] transition-colors"
          >
            <Facebook className="w-5 h-5" />
          </a>
          <a
            href="#"
            className="text-[#0078AD] hover:text-[#4A9A96] transition-colors"
          >
            <Mail className="w-5 h-5" />
          </a>
        </div>
      </div>
    </motion.div>
  );
}
