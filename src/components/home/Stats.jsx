import { motion } from 'framer-motion';

const Stats = () => {
  const stats = [
    { number: "54+", label: "Years Experience", desc: "Pioneering waterproofing since 1971" },
    { number: "10k+", label: "Projects Done", desc: "Residential and commercial sectors" },
    { number: "10yr", label: "Warranty", desc: "Complete peace of mind guaranteed" },
    { number: "100%", label: "Quality Assured", desc: "Rigorous 30-point inspection" }
  ];

  return (
    <section className="py-20 bg-[var(--bg-cream)]">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="bg-white p-10 rounded-2xl shadow-elegant border border-gray-100 text-center hover:border-[var(--border-gold)] transition-colors duration-300 group"
            >
              <div className="text-5xl font-serif font-light text-[var(--text-gold)] mb-3 group-hover:scale-110 transition-transform duration-300">
                {stat.number}
              </div>
              <h4 className="text-xl font-bold font-serif text-[var(--text-charcoal)] mb-2">
                {stat.label}
              </h4>
              <div className="w-10 h-px bg-[var(--text-gold)]/50 mx-auto mb-3"></div>
              <p className="text-sm text-gray-600 leading-relaxed">
                {stat.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
