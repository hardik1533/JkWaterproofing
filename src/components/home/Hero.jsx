import { motion, useScroll, useTransform } from 'framer-motion';
import { FiArrowRight, FiShield, FiStar } from 'react-icons/fi';
import MagneticButton from '../ui/MagneticButton';

const Hero = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  const heroImage = 'https://images.unsplash.com/photo-1541888087425-ce81df7462f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80';

  return (
    <section className="relative min-h-[110vh] flex items-center justify-center overflow-hidden bg-[var(--bg-deep)] transition-colors duration-300">
      <motion.div 
        className="absolute inset-0 z-0"
        style={{ y }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--bg-deep)]/95 via-[var(--bg-deep)]/80 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-deep)] via-transparent to-transparent z-10" />
        <img 
          src={heroImage} 
          alt="Premium Architecture" 
          className="w-full h-[130%] object-cover object-center opacity-60 scale-105 filter grayscale-[20%]"
        />
      </motion.div>

      <div className="container-custom relative z-20 pt-32 pb-20">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-wrap items-center gap-4 mb-8"
          >
            <span className="px-5 py-2 rounded-full border border-[var(--border-gold)] bg-white/5 backdrop-blur-md text-sm font-bold text-[var(--text-gold)] tracking-widest uppercase flex items-center gap-2 shadow-elegant">
              <FiStar className="text-[var(--text-gold)]" /> Luxury Protection
            </span>
            <span className="flex items-center gap-2 text-white/80 text-sm font-bold tracking-wide px-5 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md">
              <FiShield className="text-[var(--text-gold)]" />
              Est. 1971 — 50+ Years of Excellence
            </span>
          </motion.div>

          <motion.h1 
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.15, delayChildren: 0.2 }
              }
            }}
            className="text-6xl md:text-8xl lg:text-[7.5rem] font-serif font-light text-white leading-[1.05] mb-8 tracking-tight"
          >
            <motion.span variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" }}}} className="inline-block mr-4 md:mr-6">
              Absolute
            </motion.span>
            <motion.span variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" }}}} className="inline-block text-[var(--text-gold)] italic font-medium pb-2">
              Protection.
            </motion.span>
            <br />
            <motion.span variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" }}}} className="inline-block mr-4 md:mr-6">
              Zero
            </motion.span>
            <motion.span variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" }}}} className="inline-block">
              Compromise.
            </motion.span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl leading-relaxed"
          >
            India's most trusted structural engineers providing permanent waterproofing solutions for corporate, industrial, and residential projects.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-6"
          >
            <MagneticButton href="#contact">
              <div className="group px-8 py-4 rounded-full bg-[var(--text-gold)] text-[var(--bg-deep)] font-bold text-lg hover:bg-[var(--text-gold-dark)] transition-colors flex items-center justify-center gap-3 cursor-pointer shadow-elegant">
                Request Site Visit
                <FiArrowRight className="group-hover:translate-x-2 transition-transform" />
              </div>
            </MagneticButton>
            <MagneticButton href="#services-detailed">
              <div className="px-8 py-4 rounded-full border border-white/20 text-white font-bold text-lg hover:bg-white/10 transition-colors flex items-center justify-center cursor-pointer backdrop-blur-md">
                Explore Services
              </div>
            </MagneticButton>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
