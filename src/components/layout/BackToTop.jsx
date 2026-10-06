import { useEffect, useState } from 'react';
import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion';
import { FiArrowUp } from 'react-icons/fi';

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { scrollYProgress } = useScroll();
  
  // Smooth out the progress for the SVG circle
  const scaleProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0, y: 20 }}
          className="fixed bottom-8 right-8 z-[90] cursor-pointer group"
          onClick={scrollToTop}
        >
          {/* Circular Progress SVG */}
          <svg className="w-14 h-14 transform -rotate-90">
            <circle
              cx="28"
              cy="28"
              r="24"
              className="stroke-gray-300 dark:stroke-white/10 fill-none"
              strokeWidth="2"
            />
            <motion.circle
              cx="28"
              cy="28"
              r="24"
              className="stroke-accent fill-white dark:fill-[#050811]"
              strokeWidth="3"
              style={{ pathLength: scaleProgress }}
              strokeDasharray="150"
              strokeDashoffset="0"
            />
          </svg>
          
          {/* Inner Arrow */}
          <div className="absolute inset-0 flex items-center justify-center text-gray-900 dark:text-white group-hover:-translate-y-1 group-hover:text-accent transition-all duration-300">
            <FiArrowUp className="w-6 h-6" />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default BackToTop;
