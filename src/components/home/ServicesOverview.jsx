import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';
import imageList from '../../data/images.json';

const ServicesOverview = () => {
  // Use images 1, 2, 3 for services if available
  const getImageUrl = (index, fallback) => {
    return imageList.length > index ? `/images/gallery/${imageList[index]}` : fallback;
  };

  const services = [
    {
      title: "Terrace Waterproofing",
      description: "Advanced chemical and membrane treatments for heavy-duty commercial and residential terraces, ensuring zero-leakage durability.",
      image: getImageUrl(1, "https://images.unsplash.com/photo-1504307651254-35680f356f58?auto=format&fit=crop&w=800&q=80"),
      icon: "🏢"
    },
    {
      title: "Structural Rehabilitation",
      description: "Expert repair of structural cracks, spalling concrete, and foundational weakness using state-of-the-art injection grouting.",
      image: getImageUrl(2, "https://images.unsplash.com/photo-1541888087425-ce81df7462f6?auto=format&fit=crop&w=800&q=80"),
      icon: "🏗️"
    },
    {
      title: "Membrane Application",
      description: "High-grade APP and PVC membrane installations for industrial roofs, basements, and retaining walls, providing a flexible water barrier.",
      image: getImageUrl(3, "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=800&q=80"),
      icon: "🛡️"
    }
  ];

  return (
    <section id="services" className="py-32 bg-[#0b1120] relative">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5" />
      
      <div className="container-custom relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-accent font-bold tracking-widest uppercase text-sm mb-4 block"
          >
            Core Expertise
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight"
          >
            Premium Solutions for <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-accent">Complex Structures</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-lg"
          >
            We deploy specialized, imported materials and advanced engineering techniques to protect your most valuable assets.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="group relative rounded-3xl overflow-hidden bg-white/5 border border-white/10 backdrop-blur-sm hover:border-accent/50 transition-all duration-500 shadow-2xl"
            >
              <div className="h-64 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b1120] to-transparent z-10" />
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                <div className="absolute top-6 left-6 z-20 w-12 h-12 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center text-2xl border border-white/20 shadow-lg group-hover:bg-accent group-hover:border-accent transition-colors">
                  {service.icon}
                </div>
              </div>
              
              <div className="p-8 relative z-20 -mt-10">
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-accent transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-400 leading-relaxed mb-8">
                  {service.description}
                </p>
                <a href="#contact" className="inline-flex items-center gap-2 text-white font-semibold group-hover:text-accent transition-colors uppercase tracking-wider text-sm">
                  Explore Service <FiArrowRight className="group-hover:translate-x-2 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
