import { Calendar, TrendingUp, Users, Award } from 'lucide-react';
import { motion } from 'framer-motion';

export default function History() {
  const milestones = [
    {
      year: '2017',
      title: 'Company Founded',
      description: 'Sultan Enterprises was established by Aqeel Sultan with a vision to transform the real estate landscape in Lahore.',
      icon: Calendar,
    },
    {
      year: '2018-2019',
      title: 'Market Expansion',
      description: 'Expanded operations to cover major residential and commercial areas across Lahore, building a strong client base.',
      icon: TrendingUp,
    },
    {
      year: '2020-2021',
      title: 'Team Growth',
      description: 'Assembled a dedicated team of real estate professionals and achieved 100+ successful property transactions.',
      icon: Users,
    },
    {
      year: '2022-2025',
      title: 'Industry Recognition',
      description: 'Recognized as a trusted name in Lahore real estate, specializing in premium properties and exceptional customer service.',
      icon: Award,
    },
  ];

  return (
    <section className="py-24 bg-[#1A1A1A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our Journey
          </h2>
          <motion.div 
            className="w-24 h-1 bg-[#D4AF37] mx-auto mb-6"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1], delay: 0.2 }}
          />
          <p className="text-xl text-[#B3B3B3] max-w-3xl mx-auto">
            Over 8 years of dedication, growth, and excellence in real estate services
          </p>
        </motion.div>

        <div className="relative">
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-[#D4AF37]"></div>

          <div className="space-y-12">
            {milestones.map((milestone, index) => {
              const Icon = milestone.icon;
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={index}
                  className={`relative flex items-center ${
                    isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                  } flex-col`}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1], delay: index * 0.15 }}
                >
                  <div className={`w-full md:w-5/12 ${isEven ? 'md:text-right md:pr-12' : 'md:text-left md:pl-12'}`}>
                    <motion.div 
                      className="bg-[#0C0C0C] rounded-xl shadow-xl p-8 border border-[#D4AF37]/20"
                      whileHover={{ 
                        scale: 1.02,
                        borderColor: '#D4AF37',
                        boxShadow: '0 10px 40px rgba(212, 175, 55, 0.2)'
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className={`flex items-center gap-4 mb-4 ${isEven ? 'md:flex-row-reverse' : ''}`}>
                        <motion.div 
                          className="bg-[#D4AF37] w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0"
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1], delay: index * 0.15 + 0.2 }}
                        >
                          <Icon className="w-8 h-8 text-[#0C0C0C]" />
                        </motion.div>
                        <span className="text-3xl font-bold text-[#D4AF37]">
                          {milestone.year}
                        </span>
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-3">
                        {milestone.title}
                      </h3>
                      <p className="text-[#B3B3B3] leading-relaxed">
                        {milestone.description}
                      </p>
                    </motion.div>
                  </div>

                  <motion.div 
                    className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-[#0C0C0C] border-4 border-[#D4AF37] rounded-full z-10"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1], delay: index * 0.15 + 0.3 }}
                  />

                  <div className="w-full md:w-5/12"></div>
                </motion.div>
              );
            })}
          </div>
        </div>

        <motion.div 
          className="mt-20 text-center bg-[#D4AF37] rounded-2xl p-12 text-[#0C0C0C]"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <h3 className="text-3xl font-bold mb-4">Building Trust Since 2017</h3>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Our journey reflects our commitment to excellence, integrity, and creating lasting relationships with our clients.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
