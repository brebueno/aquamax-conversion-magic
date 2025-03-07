
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Shield, CheckCircle } from 'lucide-react';

const GuaranteeSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });
  
  return (
    <section 
      ref={ref}
      className="section bg-white"
      id="guarantee"
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.6 }}
          className="glass-card p-8 md:p-12 border border-aqua-blue/20 relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 right-0 h-2 bg-blue-gradient"></div>
          
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <div className="w-full md:w-1/3 flex justify-center">
              <div className="relative">
                <motion.div
                  initial={{ rotate: 0 }}
                  animate={isInView ? { rotate: 360 } : { rotate: 0 }}
                  transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 bg-blue-gradient rounded-full opacity-20 blur-xl"
                ></motion.div>
                <Shield className="w-32 h-32 md:w-40 md:h-40 text-aqua-blue relative z-10" />
              </div>
            </div>
            
            <div className="w-full md:w-2/3 text-center md:text-left">
              <h2 className="text-2xl md:text-3xl font-bold text-aqua-darkgray mb-4">
                Garantia Blindada de 30 Dias
              </h2>
              
              <p className="text-aqua-gray text-lg mb-6">
                Experimente o Aquamax por 30 dias. Se não estiver 100% satisfeito com a economia na sua conta, devolva e receba <span className="font-semibold">200% do valor investido</span>.
              </p>
              
              <ul className="space-y-3 mb-6">
                <li className="flex items-center">
                  <CheckCircle className="text-green-500 mr-2 flex-shrink-0" size={20} />
                  <span className="text-aqua-darkgray">Sem perguntas ou complicações</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-green-500 mr-2 flex-shrink-0" size={20} />
                  <span className="text-aqua-darkgray">Devolução do dobro do valor pago</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-green-500 mr-2 flex-shrink-0" size={20} />
                  <span className="text-aqua-darkgray">Testado e aprovado por mais de 5.000 clientes</span>
                </li>
              </ul>
              
              <motion.a
                href="#pricing"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block aqua-button"
              >
                Garantir Meu Aquamax
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default GuaranteeSection;
