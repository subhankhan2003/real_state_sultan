import { Home, Building, MapPin, Maximize, BedDouble, Bath, Facebook } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Properties() {
  const properties = [
    {
      id: 1,
      title: 'Luxury Villa in DHA Phase 5',
      type: 'House',
      location: 'DHA Phase 5, Lahore',
      area: '1 Kanal',
      bedrooms: 5,
      bathrooms: 6,
      icon: Home,
      gradient: 'from-amber-500 to-orange-600',
    },
    {
      id: 2,
      title: 'Modern Apartment in Bahria Town',
      type: 'Apartment',
      location: 'Bahria Town, Lahore',
      area: '1800 sq ft',
      bedrooms: 3,
      bathrooms: 3,
      icon: Building,
      gradient: 'from-rose-500 to-pink-600',
    },
    {
      id: 3,
      title: 'Commercial Plot in Johar Town',
      type: 'Plot',
      location: 'Johar Town, Lahore',
      area: '10 Marla',
      bedrooms: null,
      bathrooms: null,
      icon: MapPin,
      gradient: 'from-orange-500 to-red-600',
    },
    {
      id: 4,
      title: 'Residential House in Model Town',
      type: 'House',
      location: 'Model Town, Lahore',
      area: '10 Marla',
      bedrooms: 4,
      bathrooms: 4,
      icon: Home,
      gradient: 'from-amber-600 to-orange-700',
    },
    {
      id: 5,
      title: 'Penthouse in Gulberg',
      type: 'Apartment',
      location: 'Gulberg III, Lahore',
      area: '3000 sq ft',
      bedrooms: 4,
      bathrooms: 5,
      icon: Building,
      gradient: 'from-rose-600 to-pink-700',
    },
    {
      id: 6,
      title: 'Prime Plot in Wapda Town',
      type: 'Plot',
      location: 'Wapda Town, Lahore',
      area: '1 Kanal',
      bedrooms: null,
      bathrooms: null,
      icon: MapPin,
      gradient: 'from-orange-600 to-red-700',
    },
  ];

  const handleContactClick = () => {
    window.open('https://www.facebook.com', '_blank');
  };

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
            Featured Properties
          </h2>
          <motion.div 
            className="w-24 h-1 bg-[#D4AF37] mx-auto mb-6"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1], delay: 0.2 }}
          />
          <p className="text-xl text-[#B3B3B3] max-w-3xl mx-auto">
            Explore our handpicked selection of premium properties across Lahore
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property, index) => {
            const Icon = property.icon;

            return (
              <motion.div
                key={property.id}
                className="bg-[#1A1A1A] rounded-2xl shadow-lg overflow-hidden border border-[#D4AF37]/20"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1], delay: index * 0.1 }}
                whileHover={{ 
                  y: -12, 
                  borderColor: '#D4AF37',
                  boxShadow: '0 20px 40px rgba(212, 175, 55, 0.3)'
                }}
              >
                <div className="h-56 bg-gradient-to-br from-[#0C0C0C] to-[#1A1A1A] flex items-center justify-center relative overflow-hidden border-b border-[#D4AF37]/20">
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0 bg-[#D4AF37]/10 backdrop-blur-sm"></div>
                  </div>
                  <Icon className="w-32 h-32 text-[#D4AF37] relative z-10" />
                  <div className="absolute top-4 right-4 bg-[#0C0C0C] backdrop-blur-sm px-4 py-2 rounded-full border border-[#D4AF37]/30">
                    <span className="text-sm font-bold text-[#D4AF37]">{property.type}</span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3">
                    {property.title}
                  </h3>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-center text-[#B3B3B3]">
                      <MapPin className="w-5 h-5 mr-2 text-[#D4AF37]" />
                      <span className="text-sm">{property.location}</span>
                    </div>

                    <div className="flex items-center text-[#D4AF37]">
                      <Maximize className="w-5 h-5 mr-2" />
                      <span className="text-sm font-semibold">{property.area}</span>
                    </div>

                    {property.bedrooms && property.bathrooms && (
                      <div className="flex items-center gap-4 text-[#B3B3B3]">
                        <div className="flex items-center">
                          <BedDouble className="w-5 h-5 mr-2 text-[#D4AF37]" />
                          <span className="text-sm">{property.bedrooms} Beds</span>
                        </div>
                        <div className="flex items-center">
                          <Bath className="w-5 h-5 mr-2 text-[#D4AF37]" />
                          <span className="text-sm">{property.bathrooms} Baths</span>
                        </div>
                      </div>
                    )}
                  </div>

                  <motion.button
                    onClick={handleContactClick}
                    className="w-full bg-[#D4AF37] text-[#0C0C0C] font-bold py-3 px-6 rounded-xl flex items-center justify-center gap-2"
                    whileHover={{ 
                      backgroundColor: '#F5D76E',
                      boxShadow: '0 10px 25px rgba(212, 175, 55, 0.4)',
                      scale: 1.02
                    }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Facebook className="w-5 h-5" />
                    Contact Us
                  </motion.button>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <p className="text-[#B3B3B3] text-lg">
            Looking for something specific?{' '}
            <a href="#contact" className="text-[#FFD700] font-bold hover:text-[#F5D76E] transition-colors">
              Get in touch with us
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
