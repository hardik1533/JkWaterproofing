import { motion } from 'framer-motion';

const DetailedServices = () => {
  const services = [
    {
      title: "Commercial Rehabilitation",
      description: "For corporate offices, malls, and large-scale structures, we provide end-to-end structural repair and negative side waterproofing. Our methods ensure zero disruption to your daily operations while guaranteeing permanent protection against hydrostatic pressure.",
      image: "https://images.unsplash.com/photo-1541888087425-ce81df7462f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      features: ["Injection Grouting", "Carbon Fiber Wrapping", "Micro-concreting", "Anti-carbonation Coatings"]
    },
    {
      title: "Industrial Flooring & Epoxy",
      description: "Factories and warehouses require flooring that can withstand massive mechanical loads, chemical spills, and constant wear. Our heavy-duty epoxy and polyurethane flooring systems provide seamless, hygienic, and highly durable surfaces tailored for industrial use.",
      image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      features: ["Heavy Duty PU Flooring", "Chemical Resistant Epoxy", "Anti-Static (ESD) Floors", "Expansion Joint Sealants"]
    },
    {
      title: "Premium Terrace Waterproofing",
      description: "The roof is the most vulnerable part of any structure. We deploy multi-layered, liquid-applied elastomeric membranes and advanced Brickbat Coba systems that provide robust thermal insulation and 100% leak-proof protection against the harshest monsoons.",
      image: "https://images.unsplash.com/photo-1600607686527-6fb886090705?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      features: ["Liquid Applied Membranes", "APP Modified Bitumen", "Thermal Insulation Systems", "Polyurethane (PU) Coatings"]
    }
  ];

  return (
    <section id="services-detailed" className="section-padding bg-[var(--bg-ivory)] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-20 text-center">
          <span className="inline-block text-sm font-medium tracking-widest uppercase mb-3 text-[var(--text-gold)]">Our Expertise</span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light leading-tight mb-4 text-[var(--text-charcoal)]">
            Comprehensive <span className="text-[var(--text-gold)] italic">Solutions.</span>
          </h2>
          <div className="gold-divider mb-4"></div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Providing specialized structural engineering solutions tailored for diverse environments.
          </p>
        </div>

        <div className="space-y-32">
          {services.map((service, index) => {
            const isEven = index % 2 === 0;
            return (
              <div key={index} className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12 lg:gap-20`}>
                
                {/* Image Section */}
                <motion.div 
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8 }}
                  className="w-full lg:w-1/2 relative"
                >
                  <div className="relative z-10 rounded-none overflow-hidden shadow-elegant-lg border border-[var(--border-gold)]">
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="w-full h-[400px] lg:h-[500px] object-cover filter grayscale-[20%] hover:grayscale-0 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-charcoal)]/80 via-transparent to-transparent opacity-60"></div>
                  </div>
                  
                  {/* Decorative background element */}
                  <div className={`absolute -bottom-6 ${isEven ? '-right-6' : '-left-6'} w-full h-full border border-[var(--text-gold)] opacity-30 z-0`}></div>
                </motion.div>

                {/* Content Section */}
                <motion.div 
                  initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="w-full lg:w-1/2"
                >
                  <h3 className="font-serif text-3xl lg:text-4xl font-medium text-[var(--text-charcoal)] mb-6">
                    {service.title}
                  </h3>
                  <div className="gold-divider-left mb-6"></div>
                  
                  <p className="text-lg text-gray-600 leading-relaxed mb-8">
                    {service.description}
                  </p>

                  <div className="grid grid-cols-2 gap-4">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-[var(--text-gold)]"></div>
                        <span className="text-sm font-bold text-gray-700 tracking-wide uppercase">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <button className="mt-10 px-8 py-4 border border-[var(--text-charcoal)] text-[var(--text-charcoal)] font-bold tracking-widest uppercase text-xs hover:bg-[var(--text-charcoal)] hover:text-white transition-colors duration-300">
                    Learn More
                  </button>
                </motion.div>
                
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default DetailedServices;
