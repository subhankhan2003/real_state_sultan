import { Building2, Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#000000] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div 
          className="grid md:grid-cols-4 gap-12 mb-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-[#D4AF37] p-3 rounded-lg">
                <Building2 className="w-8 h-8 text-[#0C0C0C]" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">SULTAN ENTERPRISES</h3>
                <p className="text-[#B3B3B3] text-sm">Real Estate Excellence</p>
              </div>
            </div>
            <p className="text-[#B3B3B3] mb-6 leading-relaxed">
              Your trusted partner in Lahore's real estate market. We specialize in residential and
              commercial properties, offering personalized service and expert guidance for all your
              property needs.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#1A1A1A] hover:bg-[#D4AF37] p-3 rounded-lg transition-all duration-300 hover:scale-110 border border-[#D4AF37]/30"
              >
                <Facebook className="w-6 h-6 text-[#D4AF37] hover:text-[#0C0C0C] transition-colors" />
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#1A1A1A] hover:bg-[#D4AF37] p-3 rounded-lg transition-all duration-300 hover:scale-110 border border-[#D4AF37]/30"
              >
                <Instagram className="w-6 h-6 text-[#D4AF37] hover:text-[#0C0C0C] transition-colors" />
              </a>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#1A1A1A] hover:bg-[#D4AF37] p-3 rounded-lg transition-all duration-300 hover:scale-110 border border-[#D4AF37]/30"
              >
                <Linkedin className="w-6 h-6 text-[#D4AF37] hover:text-[#0C0C0C] transition-colors" />
              </a>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1], delay: 0.1 }}
          >
            <h4 className="text-xl font-bold mb-6 text-[#D4AF37]">
              Quick Links
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-[#B3B3B3] hover:text-[#FFD700] transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-[#B3B3B3] hover:text-[#FFD700] transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-[#B3B3B3] hover:text-[#FFD700] transition-colors">
                  Properties
                </a>
              </li>
              <li>
                <a href="#contact" className="text-[#B3B3B3] hover:text-[#FFD700] transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1], delay: 0.2 }}
          >
            <h4 className="text-xl font-bold mb-6 text-[#D4AF37]">
              Contact Info
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Phone className="w-5 h-5 mr-3 mt-1 text-[#D4AF37] flex-shrink-0" />
                <div>
                  <p className="text-[#B3B3B3]">03224825690</p>
                </div>
              </li>
              <li className="flex items-start">
                <Mail className="w-5 h-5 mr-3 mt-1 text-[#D4AF37] flex-shrink-0" />
                <div>
                  <p className="text-[#B3B3B3]">m.aqeelsultan66@gmail.com</p>
                </div>
              </li>
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 mt-1 text-[#D4AF37] flex-shrink-0" />
                <div>
                  <p className="text-[#B3B3B3]">LAHORE</p>
                </div>
              </li>
            </ul>
          </motion.div>
        </motion.div>

        <motion.div 
          className="border-t border-[#1A1A1A] pt-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-col gap-2">
              <p className="text-[#B3B3B3] text-sm text-center md:text-left">
                &copy; {currentYear} Sultan Enterprises. All rights reserved.
              </p>
              <p className="text-[#B3B3B3] text-sm text-center md:text-left">
                &copy; {currentYear} Made by Subhan Khan. All rights reserved.
              </p>
            </div>
            <p className="text-[#B3B3B3] text-sm text-center md:text-right">
              CEO: <span className="text-[#D4AF37] font-semibold">Aqeel Sultan</span>
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
