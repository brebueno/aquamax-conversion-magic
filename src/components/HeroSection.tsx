
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

const HeroSection = () => {
  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="relative min-h-[90vh] flex flex-col items-center justify-center pt-10 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-white" />
        <div className="absolute top-0 left-0 right-0 h-32 bg-aqua-blue opacity-5 transform -skew-y-6" />
      </div>
      
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.7 }}
        className="max-w-4xl mx-auto text-center"
      >
        <h1 className="font-bold text-aqua-darkgray text-4xl sm:text-5xl md:text-6xl leading-tight mb-6">
          <span className="text-aqua-red font-bold">Você está pagando por AR</span> na sua conta de água
        </h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="text-xl sm:text-2xl font-medium text-aqua-darkgray mb-8 max-w-3xl mx-auto"
        >
          O <span className="highlight-text font-semibold">Bloqueador de Ar Aquamax</span> bloqueia essa cobrança e reduz sua conta em até <span className="text-aqua-red font-bold">60%</span> em 2 meses.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.7 }}
          className="mt-10"
        >
          <a 
            href="#video" 
            className="aqua-button text-lg sm:text-xl px-8 py-4 group"
          >
            Descubra como
            <ArrowDown className="ml-2 inline-block group-hover:animate-bounce-subtle" size={20} />
          </a>
        </motion.div>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.7 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <a 
          href="#video" 
          className="flex flex-col items-center text-aqua-gray hover:text-aqua-blue transition-colors"
        >
          <span className="text-sm mb-2">Assista ao vídeo</span>
          <ArrowDown className="animate-bounce-subtle" size={24} />
        </a>
      </motion.div>
    </motion.section>
  );
};

export default HeroSection;
