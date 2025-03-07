
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ShoppingCart } from 'lucide-react';

const CTABanner = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  
  return (
    <section 
      ref={ref}
      className="py-20 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-blue-gradient opacity-95"></div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Clique no botão abaixo, instale o Aquamax hoje e veja sua conta DESPENCAR em 30 dias!
        </h2>
        
        <p className="text-white/90 text-xl mb-10 max-w-3xl mx-auto">
          Junte-se aos milhares de brasileiros que já estão economizando em suas contas de água com o Aquamax.
        </p>
        
        <motion.a
          href="#pricing"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block bg-white text-aqua-blue hover:bg-aqua-lightgray font-semibold py-4 px-8 rounded-full shadow-xl transition-all duration-300 text-xl flex items-center justify-center gap-2 mx-auto"
        >
          <ShoppingCart size={24} />
          Comprar Agora
        </motion.a>
      </motion.div>
    </section>
  );
};

export default CTABanner;
