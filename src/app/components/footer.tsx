"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Anchor,
  Mail,
  Phone,
  MapPin,
  ArrowUp,
} from "lucide-react";
import { useEffect, useState } from "react";

export default function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-gradient-to-br from-[#0078AD] to-[#4A9A96] text-white pt-16 pb-8 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
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
            stroke="#7ADEDA"
            strokeWidth="0.5"
          ></path>
          <path
            d="M0,70 Q25,45 50,70 T100,70"
            fill="none"
            stroke="#7ADEDA"
            strokeWidth="0.5"
          ></path>
        </svg>
      </div>

      {/* Scroll to top button */}
      <motion.button
        initial={{ opacity: 0, y: 20 }}
        animate={{
          opacity: showScrollTop ? 1 : 0,
          y: showScrollTop ? 0 : 20,
        }}
        transition={{ duration: 0.3 }}
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 rounded-full bg-[#7ADEDA] text-[#0078AD] flex items-center justify-center shadow-lg hover:bg-white transition-colors z-50"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-6 h-6" />
      </motion.button>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-12">
          <div className="md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <Anchor className="h-6 w-6 text-[#7ADEDA]" />
              <h3 className="text-lg font-semibold text-[#7ADEDA]">
                Kuray Innovations
              </h3>
            </div>
            <p className="text-white/80 mb-6 max-w-sm">
              Building a circular economy that powers marine restoration through
              innovative oyster shell recycling.
            </p>
            <div className="flex space-x-4">
              <motion.a
                href="#"
                whileHover={{ y: -3 }}
                className="text-white/80 hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </motion.a>

              <motion.a
                href="#"
                whileHover={{ y: -3 }}
                className="text-white/80 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </motion.a>
            </div>
          </div>

          <div className="md:col-span-1 md:flex md:justify-center">
            <div>
              <h4 className="text-lg font-semibold mb-4 text-[#7ADEDA]">
                Quick Links
              </h4>
              <ul className="space-y-2">
                {["About", "Services", "Team", "Contact"].map((item) => (
                  <li key={item}>
                    <Link
                      href={`#${item.toLowerCase()}`}
                      className="text-white/80 hover:text-white transition-colors inline-block relative group"
                    >
                      <span>{item}</span>
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#7ADEDA] transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="md:col-span-1 md:flex md:justify-end">
            <div>
              <h4 className="text-lg font-semibold mb-4 text-[#7ADEDA]">
                Contact Us
              </h4>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Mail className="w-5 h-5 text-[#7ADEDA] mt-0.5 mr-3" />
                  <div>
                    <span className="block text-white/60 text-sm">Email</span>
                    <a
                      href="mailto:kuray.innovations@gmail.com"
                      className="text-white/90 hover:text-white transition-colors"
                    >
                      kuray.innovations@gmail.com
                    </a>
                  </div>
                </li>
                <li className="flex items-start">
                  <Phone className="w-5 h-5 text-[#7ADEDA] mt-0.5 mr-3" />
                  <div>
                    <span className="block text-white/60 text-sm">Phone</span>
                    <a
                      href="tel:+631234567890"
                      className="text-white/90 hover:text-white transition-colors"
                    >
                      +63 917 547 0102
                    </a>
                  </div>
                </li>
                <li className="flex items-start">
                  <MapPin className="w-5 h-5 text-[#7ADEDA] mt-0.5 mr-3" />
                  <div>
                    <span className="block text-white/60 text-sm">Address</span>
                    <span className="text-white/90">
                      Iloilo City, Philippines
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/20 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/80 text-center md:text-left mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Kuray Innovations. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
