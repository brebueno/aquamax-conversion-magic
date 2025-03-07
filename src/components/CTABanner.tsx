
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ShoppingCart, ArrowRight, Clock, CheckCircle } from 'lucide-react';

const CTABanner = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  
  return (
    <section 
      ref={ref}
      className="py-20 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-800 opacity-95"></div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
      >
        <div className="bg-white/20 backdrop-blur-sm py-2 px-4 rounded-full inline-block mb-6">
          <span className="text-white font-bold animate-pulse flex items-center">
            <Clock size={20} className="mr-2" /> OFERTA POR TEMPO LIMITADO!
          </span>
        </div>
        
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Clique no botão abaixo, instale o Aquamax hoje e veja sua conta DESPENCAR em 30 dias!
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 flex items-center">
            <CheckCircle size={24} className="text-white mr-3 flex-shrink-0" />
            <p className="text-white text-left">Economia de até 60% na sua conta</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 flex items-center">
            <CheckCircle size={24} className="text-white mr-3 flex-shrink-0" />
            <p className="text-white text-left">Instalação fácil e sem ferramentas</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 flex items-center">
            <CheckCircle size={24} className="text-white mr-3 flex-shrink-0" />
            <p className="text-white text-left">Garantia de 30 dias ou 200% do valor de volta</p>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <motion.a
            href="#pricing"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-red-600 hover:bg-yellow-100 font-bold py-4 px-8 rounded-full shadow-xl transition-all duration-300 text-xl flex items-center justify-center gap-2"
          >
            <ShoppingCart size={24} />
            COMPRAR AGORA
          </motion.a>
          
          <motion.a
            href="#guarantee"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-transparent border-2 border-white text-white hover:bg-white/10 font-bold py-4 px-8 rounded-full shadow-lg transition-all duration-300 text-xl flex items-center justify-center gap-2"
          >
            Ver Garantia
            <ArrowRight size={20} />
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
};

export default CTABanner;
