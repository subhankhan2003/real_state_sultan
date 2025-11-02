import { Building2, Award, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';
import logo from '../logo.png';

export default function Hero() {
  return (
    <div className="relative bg-gradient-to-br from-[#0C0C0C] to-[#1A1A1A] text-white overflow-hidden">
      <motion.div 
        className="absolute inset-0 bg-black/10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="text-center">
          <motion.div 
            className="flex justify-center mb-6"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1], delay: 0.2 }}
          >
            <img src={logo} alt="Sultan Enterprises Logo" className="w-40 h-40 md:w-48 md:h-48" />
          </motion.div>

          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-6 tracking-tight text-white"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1], delay: 0.4 }}
          >
            SULTAN'S ENTERPRISES
          </motion.h1>

          <motion.p 
            className="text-2xl md:text-3xl mb-4 font-light text-[#B3B3B3]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1], delay: 0.6 }}
          >
            Your Trusted Real Estate Partner in Lahore
          </motion.p>

          <motion.div 
            className="inline-block bg-[#1A1A1A]/80 backdrop-blur-sm px-8 py-4 rounded-lg border border-[#D4AF37]/30 mt-8"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1], delay: 0.8 }}
            whileHover={{ 
              scale: 1.05, 
              borderColor: '#FFD700',
              boxShadow: '0 0 20px rgba(212, 175, 55, 0.3)'
            }}
          >
            <p className="text-lg font-medium mb-2 text-[#B3B3B3]">Chief Executive Officer</p>
            <p className="text-3xl font-bold text-white">AQEEL SULTAN</p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1], delay: 1 }}
          >
            {[
              { icon: Award, title: '8+ Years', desc: 'Industry Experience' },
              { icon: Building2, title: 'Premium Properties', desc: 'Houses, Plots & Apartments' },
              { icon: TrendingUp, title: 'Trusted Service', desc: 'Client Satisfaction' }
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  className="bg-[#1A1A1A] backdrop-blur-sm p-6 rounded-xl border border-[#D4AF37]/20"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1], delay: 1.2 + index * 0.1 }}
                  whileHover={{ 
                    y: -8, 
                    borderColor: '#D4AF37',
                    boxShadow: '0 10px 30px rgba(212, 175, 55, 0.2)'
                  }}
                >
                  <Icon className="w-12 h-12 mx-auto mb-4 text-[#D4AF37]" />
                  <h3 className="text-xl font-bold mb-2 text-white">{item.title}</h3>
                  <p className="text-[#B3B3B3]">{item.desc}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0C0C0C] to-transparent"></div>
    </div>
  );
}
