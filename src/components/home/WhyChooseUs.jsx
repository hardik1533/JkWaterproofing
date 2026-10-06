import { motion } from 'framer-motion';
import { FiShield, FiTool, FiCheckCircle, FiClock, FiStar, FiAward } from 'react-icons/fi';

const WhyChooseUs = () => {
  const features = [
    {
      icon: <FiAward className="w-8 h-8" />,
      title: "54+ Years Experience",
      description: "Pioneering the waterproofing industry since 1971 with unmatched expertise and a legacy of trust."
    },
    {
      icon: <FiCheckCircle className="w-8 h-8" />,
      title: "Certified Professionals",
      description: "Our workforce is rigorously trained, skilled, and dedicated to delivering absolute perfection."
    },
    {
      icon: <FiTool className="w-8 h-8" />,
      title: "Modern Technology",
      description: "Utilizing state-of-the-art diagnostic equipment and advanced chemical treatments."
    },
    {
      icon: <FiStar className="w-8 h-8" />,
      title: "Premium Chemicals",
      description: "We use only world-class materials from trusted global brands ensuring long-lasting durability."
    },
    {
      icon: <FiShield className="w-8 h-8" />,
      title: "Long Warranty",
      description: "Complete peace of mind with our comprehensive service warranties up to 10 years."
    },
    {
      icon: <FiClock className="w-8 h-8" />,
      title: "Quick Execution",
      description: "Timely execution and professional handover without ever compromising on quality."
    }
  ];

  return (
    <section className="section-padding bg-[var(--bg-cream)] relative border-t border-[var(--border-gold)]">
      
      <div className="container-custom relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[var(--text-gold)] font-medium tracking-widest uppercase text-sm mb-4 block"
          >
            The Jay Khodiyar Advantage
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif text-4xl md:text-5xl font-light text-[var(--text-charcoal)] mb-6 leading-tight"
          >
            Setting the Benchmark for <br />
            <span className="text-[var(--text-gold)] italic font-medium">Reliability.</span>
          </motion.h2>
          <div className="gold-divider mb-4"></div>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 text-lg"
          >
            We firmly believe that quality is never an accident. It is always the culmination of unwavering commitment and skillful execution.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="bg-[var(--bg-ivory)] p-8 rounded-none border border-gray-100 hover:border-[var(--text-gold)] transition-all duration-300 group shadow-elegant"
            >
              <div className="w-16 h-16 rounded-full bg-[var(--bg-cream)] border border-[var(--border-gold)] text-[var(--text-gold)] flex items-center justify-center mb-6 group-hover:bg-[var(--text-gold)] group-hover:text-white transition-all duration-300">
                {feature.icon}
              </div>
              <h3 className="font-serif text-2xl font-medium text-[var(--text-charcoal)] mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
