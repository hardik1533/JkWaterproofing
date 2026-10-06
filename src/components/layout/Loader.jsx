import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Loader = ({ children }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate initial loading time to show off the animation
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>
        {loading && (
          <motion.div
            initial={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-[99999] bg-[#050811] flex items-center justify-center"
          >
            <div className="flex flex-col items-center">
              <motion.div 
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="w-20 h-20 rounded-2xl premium-gradient-bg flex items-center justify-center text-white font-black text-3xl shadow-2xl shadow-accent/50 mb-6"
              >
                JK
              </motion.div>
              <div className="overflow-hidden">
                <motion.div
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  transition={{ delay: 0.2, duration: 0.5, ease: "easeOut" }}
                >
                  <h1 className="text-white text-2xl font-bold tracking-widest uppercase">Jay Khodiyar</h1>
                </motion.div>
              </div>
              <div className="overflow-hidden mt-1">
                <motion.div
                  initial={{ y: "-100%", opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.5, ease: "easeOut" }}
                >
                  <p className="text-accent text-xs font-semibold tracking-[0.3em] uppercase">Waterproofing</p>
                </motion.div>
              </div>
              
              {/* Progress bar */}
              <div className="w-48 h-1 bg-white/10 rounded-full mt-10 overflow-hidden relative">
                <motion.div 
                  className="absolute top-0 left-0 h-full bg-accent"
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 1.5, ease: "easeInOut" }}
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      {children}
    </>
  );
};

export default Loader;
