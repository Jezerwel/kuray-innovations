"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-[#7ADEDA]/10 rounded-full -ml-32 -mt-32"></div>

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
            Get in Touch
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-[#97A8B1] max-w-2xl mx-auto"
          >
            Have questions or want to collaborate? We&apos;d love to hear from
            you!
          </motion.p>
        </div>

        <div className="grid md:grid-cols-1 gap-8 max-w-xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-[#7ADEDA]/10 to-[#4A9A96]/10 p-8 rounded-lg shadow-lg"
          >
            <h3 className="text-2xl font-semibold mb-6 text-[#4A9A96] text-center">
              Contact Information
            </h3>
            <div className="space-y-8">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-[#4A9A96]/10 rounded-full flex items-center justify-center mb-4">
                  <Mail className="w-8 h-8 text-[#4A9A96]" />
                </div>
                <div>
                  <p className="text-sm text-[#97A8B1] font-medium">Email</p>
                  <p className="text-[#0078AD] font-semibold text-lg">
                    kuray.innovations@gmail.com
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-[#4A9A96]/10 rounded-full flex items-center justify-center mb-4">
                  <Phone className="w-8 h-8 text-[#4A9A96]" />
                </div>
                <div>
                  <p className="text-sm text-[#97A8B1] font-medium">Phone</p>
                  <p className="text-[#0078AD] font-semibold text-lg">
                    +63 917 547 0102
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-[#4A9A96]/10 rounded-full flex items-center justify-center mb-4">
                  <MapPin className="w-8 h-8 text-[#4A9A96]" />
                </div>
                <div>
                  <p className="text-sm text-[#97A8B1] font-medium">Location</p>
                  <p className="text-[#0078AD] font-semibold text-lg">
                    Iloilo City, Philippines
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
