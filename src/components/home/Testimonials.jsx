import { motion } from 'framer-motion';
import { FiStar } from 'react-icons/fi';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sneha Reddy",
      role: "Architect, BuildSpace",
      image: "S",
      content: "As an architect, I only trust Jay Khodiyar for waterproofing. Their attention to detail, modern technology, and skilled workforce make them the absolute best in India."
    },
    {
      name: "Rajesh Sharma",
      role: "Facility Manager, L&T",
      image: "R",
      content: "Jay Khodiyar Waterproofing did an exceptional job on our massive warehouse roof. The team was highly professional, and the leakage stopped completely. Their 50+ years of experience really shows."
    },
    {
      name: "Amit Patel",
      role: "Homeowner",
      image: "A",
      content: "We had severe terrace leakage issues for years. JK Waterproofing provided a permanent solution with their membrane treatment. It's been 3 monsoons and not a single drop! Highly recommended."
    }
  ];

  return (
    <section className="section-padding bg-[var(--bg-ivory)] border-t border-[var(--border-gold)]">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[var(--text-gold)] font-medium tracking-widest uppercase text-sm mb-4 block"
          >
            Client Reviews
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif text-4xl md:text-5xl font-light text-[var(--text-charcoal)] mb-6 leading-tight"
          >
            Trusted by the <br />
            <span className="text-[var(--text-gold)] italic font-medium">Industry Leaders.</span>
          </motion.h2>
          <div className="gold-divider mb-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="bg-[var(--bg-cream)] p-8 rounded-none border border-[var(--border-gold)] hover:shadow-elegant transition-all duration-300 relative group flex flex-col h-full"
            >
              <div className="flex items-center gap-1 mb-6 text-[var(--text-gold)]">
                {[...Array(5)].map((_, i) => (
                  <FiStar key={i} className="fill-current w-4 h-4" />
                ))}
              </div>
              
              <p className="text-gray-600 leading-relaxed italic mb-8 flex-grow text-lg font-serif">
                "{testimonial.content}"
              </p>
              
              <div className="flex items-center gap-4 mt-auto">
                <div className="w-12 h-12 rounded-full bg-[var(--text-charcoal)] text-[var(--text-gold)] flex items-center justify-center font-serif text-xl font-medium shrink-0 shadow-sm border border-[var(--border-gold)]">
                  {testimonial.image}
                </div>
                <div>
                  <h4 className="font-serif font-bold text-lg text-[var(--text-charcoal)] leading-none mb-1">{testimonial.name}</h4>
                  <p className="text-xs text-[var(--text-gold)] tracking-widest uppercase font-medium">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
