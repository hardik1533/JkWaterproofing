import { motion } from 'framer-motion';
import { FiCheckCircle } from 'react-icons/fi';

const About = () => {
  return (
    <section id="about" className="section-padding bg-[var(--bg-ivory)] overflow-hidden">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left Side: Images */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-elegant-lg border-2 border-white">
              <img 
                src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Professional Waterproofing" 
                className="w-full h-[500px] object-cover filter grayscale-[20%]"
              />
              <div className="absolute inset-0 bg-[var(--bg-charcoal)]/10 mix-blend-overlay"></div>
            </div>
            
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="absolute -bottom-10 -right-10 z-20 bg-white p-6 rounded-2xl shadow-elegant-lg border border-gray-100 max-w-[250px]"
            >
              <div className="flex items-center gap-4 mb-3">
                <div className="w-12 h-12 bg-[var(--bg-cream)] rounded-full flex items-center justify-center text-[var(--text-gold)]">
                  <FiCheckCircle className="text-2xl" />
                </div>
                <div>
                  <h4 className="font-serif text-2xl font-bold text-[var(--text-charcoal)]">100%</h4>
                  <p className="text-xs text-gray-500 font-bold uppercase tracking-wider">Quality Assured</p>
                </div>
              </div>
              <p className="text-sm text-gray-600">Rigorous 30-point inspection on every single project.</p>
            </motion.div>
          </motion.div>

          {/* Right Side: Content */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block text-sm font-medium tracking-widest uppercase mb-3 text-[var(--text-gold)]">Who We Are</span>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light leading-tight mb-6 text-[var(--text-charcoal)]">
              Decades of Crafting <span className="text-[var(--text-gold)] italic">Unforgettable</span> Reliability
            </h2>
            
            <div className="gold-divider-left mb-6"></div>

            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Jay Khodiyar Waterproofing was born from a single passion — to protect structures from the devastating effects of water damage. Founded in 1971, we have grown into India's most trusted name in structural waterproofing and rehabilitation.
            </p>
            <p className="text-lg text-gray-600 mb-10 leading-relaxed">
              We don't just patch leaks; we engineer permanent solutions. Our rigorous scientific approach and world-class materials ensure your structure stands the test of time.
            </p>

            <ul className="space-y-4 mb-10">
              {['Advanced Chemical Treatments', 'Trained & Certified Workforce', '10-Year Comprehensive Warranty', 'ISO 9001:2015 Certified Company'].map((item, index) => (
                <li key={index} className="flex items-center gap-3 text-gray-700 font-medium">
                  <FiCheckCircle className="text-[var(--text-gold)] flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <a href="#services-detailed" className="inline-block bg-[var(--text-charcoal)] text-white font-bold tracking-widest uppercase text-sm px-10 py-4 hover:bg-[var(--text-gold)] hover:text-white transition-colors duration-300 shadow-elegant">
              Discover Our Expertise
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
