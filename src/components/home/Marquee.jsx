import { motion } from 'framer-motion';

const Marquee = () => {
  const text = "100% WATERPROOF GUARANTEE • 50+ YEARS OF EXCELLENCE • ADVANCED CHEMICAL TREATMENTS • ZERO LEAKAGE PROMISE • STRUCTURAL REHABILITATION • ";
  
  return (
    <div className="py-6 bg-[var(--bg-cream)] overflow-hidden flex whitespace-nowrap border-y border-[var(--border-gold)] select-none">
      <motion.div
        className="flex text-[var(--text-gold)] font-serif font-medium text-2xl md:text-3xl tracking-widest uppercase"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 20
        }}
      >
        <span>{text}</span>
        <span>{text}</span>
        <span>{text}</span>
        <span>{text}</span>
      </motion.div>
    </div>
  );
};

export default Marquee;
