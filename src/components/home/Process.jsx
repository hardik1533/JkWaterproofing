import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { FiSearch, FiTool, FiShield, FiCheckSquare } from 'react-icons/fi';

const Process = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const steps = [
    {
      icon: <FiSearch />,
      title: "Detailed Site Inspection",
      description: "Our experts visit your site to conduct a rigorous analysis using advanced diagnostic tools (like thermal imaging and moisture meters) to pinpoint the exact root cause of the leakage."
    },
    {
      icon: <FiTool />,
      title: "Customized Strategy & Preparation",
      description: "We don't believe in one-size-fits-all. We design a customized chemical treatment plan and meticulously prepare the surface by removing old debris, cleaning cracks, and ensuring perfect adhesion."
    },
    {
      icon: <FiShield />,
      title: "Premium Chemical Application",
      description: "Using world-class materials from brands like Sika, BASF, and Dr. Fixit, our highly trained applicators execute the waterproofing system layer-by-layer for maximum durability."
    },
    {
      icon: <FiCheckSquare />,
      title: "Quality Testing & Handover",
      description: "Before we leave, we conduct strict water ponding tests to guarantee 0% leakage. You receive a fully sanitized site along with our comprehensive 10-year warranty certificate."
    }
  ];

  return (
    <section className="section-padding bg-[var(--bg-deep)] text-white relative">
      <div className="container-custom" ref={containerRef}>
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="inline-block text-sm font-medium tracking-widest uppercase mb-3 text-[var(--text-gold)]">How We Work</span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light leading-tight mb-4">
            The Jay Khodiyar<br/>
            <span className="text-[var(--text-gold)] italic font-medium">Execution Process</span>
          </h2>
          <div className="gold-divider mb-6"></div>
          <p className="text-gray-400 text-lg leading-relaxed">
            A flawless, systematic approach designed over 5 decades to ensure your structure remains completely watertight for years to come.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line Background */}
          <div className="absolute left-[50%] top-0 bottom-0 w-px bg-white/10 -translate-x-1/2"></div>
          
          {/* Animated Gold Line */}
          <motion.div 
            className="absolute left-[50%] top-0 w-[3px] bg-gradient-to-b from-[var(--text-gold)] via-[#F4D068] to-[var(--text-gold)] -translate-x-1/2 rounded-full shadow-[0_0_15px_rgba(212,175,55,0.5)]"
            style={{ height: lineHeight }}
          ></motion.div>

          <div className="space-y-24">
            {steps.map((step, index) => {
              const isEven = index % 2 === 0;
              return (
                <div key={index} className={`flex items-center justify-between w-full ${isEven ? 'flex-row' : 'flex-row-reverse'}`}>
                  
                  <div className={`w-5/12 ${isEven ? 'text-right' : 'text-left'}`}>
                    <motion.div
                      initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.6 }}
                    >
                      <h3 className="font-serif text-2xl font-medium text-white mb-3">
                        {step.title}
                      </h3>
                      <p className="text-gray-400 leading-relaxed text-sm">
                        {step.description}
                      </p>
                    </motion.div>
                  </div>

                  <div className="z-20">
                    <div className="w-16 h-16 rounded-full bg-[var(--bg-deep)] border-2 border-[var(--text-gold)] shadow-[0_0_20px_rgba(212,175,55,0.2)] flex items-center justify-center text-[var(--text-gold)] text-2xl">
                      {step.icon}
                    </div>
                  </div>

                  <div className="w-5/12"></div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
