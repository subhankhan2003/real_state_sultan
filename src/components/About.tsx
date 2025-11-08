import { Home, MapPin, Handshake, Shield } from 'lucide-react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section className="py-24 bg-[#0C0C0C]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About Sultan's Enterprises
          </h2>
          <motion.div 
            className="w-24 h-1 bg-[#D4AF37] mx-auto"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1], delay: 0.2 }}
          />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <h3 className="text-3xl font-bold text-white mb-6">
              Leading Real Estate Company in Lahore
            </h3>
            <p className="text-lg text-[#B3B3B3] mb-4 leading-relaxed">
              Sultan Enterprises is a premier real estate company based in Lahore, Pakistan.
              We specialize in providing comprehensive property solutions, including residential
              houses, commercial plots, and modern apartments across prime locations in the city.
            </p>
            <p className="text-lg text-[#B3B3B3] mb-4 leading-relaxed">
              With deep-rooted knowledge of Lahore's real estate market, we pride ourselves on
              delivering exceptional service and maintaining the highest standards of integrity
              and professionalism in every transaction.
            </p>
            <p className="text-lg text-[#B3B3B3] leading-relaxed">
              Our commitment is to understand your unique requirements and match you with
              properties that not only meet but exceed your expectations. Whether you're a
              first-time buyer, seasoned investor, or looking to sell, Sultan Enterprises
              is your trusted partner in real estate.
            </p>
          </motion.div>

          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1], delay: 0.2 }}
          >
            <div className="absolute inset-0 bg-[#D4AF37] rounded-2xl transform rotate-3"></div>
            <div className="relative bg-[#1A1A1A] rounded-2xl shadow-2xl p-8">
              <Home className="w-full h-64 text-[#D4AF37]" />
            </div>
          </motion.div>
        </div>

        <motion.div 
          className="grid md:grid-cols-4 gap-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        >
          {[
            { icon: MapPin, title: 'Prime Locations', desc: "Properties in Lahore's most sought-after neighborhoods and commercial zones" },
            { icon: Handshake, title: 'Personalized Service', desc: 'Dedicated support from initial consultation to final deal closure' },
            { icon: Shield, title: 'Verified Properties', desc: 'All properties thoroughly vetted for legal compliance and authenticity' },
            { icon: Home, title: 'Diverse Portfolio', desc: 'Residential, commercial, and investment properties for every budget' }
          ].map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                className="bg-[#1A1A1A] p-8 rounded-xl text-center border border-[#D4AF37]/20"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1], delay: index * 0.1 }}
                whileHover={{ 
                  y: -8, 
                  borderColor: '#D4AF37',
                  boxShadow: '0 10px 30px rgba(212, 175, 55, 0.2)'
                }}
              >
                <div className="bg-[#0C0C0C] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 border border-[#D4AF37]/30">
                  <Icon className="w-8 h-8 text-[#D4AF37]" />
                </div>
                <h4 className="text-xl font-bold text-white mb-2">{item.title}</h4>
                <p className="text-[#B3B3B3]">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
