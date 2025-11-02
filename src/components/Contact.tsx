import { useState } from 'react';
import { Send, Phone, Mail, MapPin, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitSuccess(false);

    // Create mailto link with form data
    const subject = encodeURIComponent(`Contact Form Submission from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Phone: ${formData.phone}\n\n` +
      `Message:\n${formData.message}`
    );
    const mailtoLink = `mailto:m.aqeelsultan66@gmail.com?subject=${subject}&body=${body}`;

    // Open email client
    window.location.href = mailtoLink;

    // Show success message
    setSubmitSuccess(true);
    setFormData({ name: '', email: '', phone: '', message: '' });
    setIsSubmitting(false);

    setTimeout(() => {
      setSubmitSuccess(false);
    }, 5000);
  };

  return (
    <section id="contact" className="py-24 bg-[#1A1A1A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get In Touch
          </h2>
          <motion.div 
            className="w-24 h-1 bg-[#D4AF37] mx-auto mb-6"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1], delay: 0.2 }}
          />
          <p className="text-xl text-[#B3B3B3] max-w-3xl mx-auto">
            Ready to find your dream property? Contact us today and let's make it happen
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <motion.div 
              className="bg-[#D4AF37] rounded-2xl p-8 text-[#0C0C0C] mb-8"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-3xl font-bold mb-6">Contact Information</h3>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-[#0C0C0C]/20 backdrop-blur-sm p-3 rounded-lg mr-4">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Phone</p>
                    <p className="text-[#0C0C0C]/90">03224825690</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-[#0C0C0C]/20 backdrop-blur-sm p-3 rounded-lg mr-4">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Email</p>
                    <p className="text-[#0C0C0C]/90">m.aqeelsultan66@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-[#0C0C0C]/20 backdrop-blur-sm p-3 rounded-lg mr-4">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Office Address</p>
                    <p className="text-[#0C0C0C]/90">LAHORE</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="bg-[#0C0C0C] rounded-2xl p-8 border-2 border-[#D4AF37]/30"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1], delay: 0.2 }}
            >
              <h4 className="text-2xl font-bold text-white mb-4">Office Hours</h4>
              <div className="space-y-2 text-[#B3B3B3]">
                <p><span className="font-semibold text-white">Monday - Friday:</span> 9:00 AM - 6:00 PM</p>
                <p><span className="font-semibold text-white">Saturday:</span> 10:00 AM - 4:00 PM</p>
                <p><span className="font-semibold text-white">Sunday:</span> Closed</p>
              </div>
            </motion.div>
          </motion.div>

          <motion.div 
            className="bg-[#0C0C0C] rounded-2xl shadow-xl p-8 border border-[#D4AF37]/20"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <h3 className="text-2xl font-bold text-white mb-6">Send Us a Message</h3>

            {submitSuccess && (
              <div className="mb-6 bg-green-900/20 border-2 border-green-500 rounded-xl p-4 flex items-start">
                <CheckCircle className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-green-400 font-semibold">Message sent successfully!</p>
                  <p className="text-green-400/80 text-sm">We'll get back to you soon.</p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-white mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-[#1A1A1A] border-2 border-[#D4AF37]/30 rounded-xl focus:border-[#D4AF37] focus:outline-none transition-colors text-white placeholder-[#B3B3B3]"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-white mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-[#1A1A1A] border-2 border-[#D4AF37]/30 rounded-xl focus:border-[#D4AF37] focus:outline-none transition-colors text-white placeholder-[#B3B3B3]"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-white mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-[#1A1A1A] border-2 border-[#D4AF37]/30 rounded-xl focus:border-[#D4AF37] focus:outline-none transition-colors text-white placeholder-[#B3B3B3]"
                  placeholder="03224825690"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-white mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-[#1A1A1A] border-2 border-[#D4AF37]/30 rounded-xl focus:border-[#D4AF37] focus:outline-none transition-colors resize-none text-white placeholder-[#B3B3B3]"
                  placeholder="Tell us about your property requirements..."
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#D4AF37] text-[#0C0C0C] font-bold py-4 px-6 rounded-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                whileHover={{ 
                  backgroundColor: '#F5D76E',
                  boxShadow: '0 10px 25px rgba(212, 175, 55, 0.4)',
                  scale: 1.02
                }}
                whileTap={{ scale: 0.98 }}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-[#0C0C0C] border-t-transparent rounded-full animate-spin"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
