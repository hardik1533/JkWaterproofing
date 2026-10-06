import { motion } from 'framer-motion';
import { FiPhoneCall, FiMail, FiMapPin, FiClock } from 'react-icons/fi';

const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-[var(--bg-deep)] text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block text-sm font-medium tracking-widest uppercase mb-3 text-[var(--text-gold)]">Get in Touch</span>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light leading-tight mb-8">
              Plan Your Project<br/><span className="text-[var(--text-gold)] italic font-medium">With the Experts.</span>
            </h2>
            <div className="gold-divider-left mb-8"></div>
            
            <p className="text-gray-400 leading-relaxed mb-12">
              From residential homes to majestic corporate structures, we orchestrate flawless waterproofing environments. Contact us today for a comprehensive structural inspection.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full border border-[var(--text-gold)] flex items-center justify-center flex-shrink-0">
                  <FiPhoneCall className="text-[var(--text-gold)] w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif text-xl font-medium mb-1">Call Us</h4>
                  <a href="tel:+919876543210" className="text-gray-400 hover:text-[var(--text-gold)] transition-colors">+91 98765 43210</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full border border-[var(--text-gold)] flex items-center justify-center flex-shrink-0">
                  <FiMail className="text-[var(--text-gold)] w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif text-xl font-medium mb-1">Email Us</h4>
                  <a href="mailto:info@jaykhodiyar.com" className="text-gray-400 hover:text-[var(--text-gold)] transition-colors">info@jaykhodiyar.com</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full border border-[var(--text-gold)] flex items-center justify-center flex-shrink-0">
                  <FiMapPin className="text-[var(--text-gold)] w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif text-xl font-medium mb-1">Visit Us</h4>
                  <p className="text-gray-400">123 Business Hub, S.G. Highway<br />Ahmedabad, Gujarat 380015</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white/5 border border-white/10 p-10 backdrop-blur-md"
          >
            <form className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-sm tracking-widest uppercase text-gray-400">Full Name</label>
                <input type="text" id="name" className="bg-transparent border-b border-white/20 focus:border-[var(--text-gold)] text-white py-3 outline-none transition-colors" placeholder="John Doe" />
              </div>
              
              <div className="flex flex-col gap-2">
                <label htmlFor="phone" className="text-sm tracking-widest uppercase text-gray-400">Phone Number</label>
                <input type="tel" id="phone" className="bg-transparent border-b border-white/20 focus:border-[var(--text-gold)] text-white py-3 outline-none transition-colors" placeholder="+91 ----------" />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-sm tracking-widest uppercase text-gray-400">Project Details</label>
                <textarea id="message" rows="4" className="bg-transparent border-b border-white/20 focus:border-[var(--text-gold)] text-white py-3 outline-none transition-colors resize-none" placeholder="Tell us about your waterproofing needs..."></textarea>
              </div>

              <button type="button" className="mt-4 bg-[var(--text-gold)] text-[var(--bg-deep)] font-bold tracking-widest uppercase text-sm py-4 hover:bg-[var(--text-gold-dark)] transition-colors">
                Submit Request
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
