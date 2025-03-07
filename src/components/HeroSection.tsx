
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, ShoppingCart, Zap, Award } from 'lucide-react';

const HeroSection = () => {
  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="relative min-h-[95vh] flex flex-col items-center justify-center pt-10 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
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
        <div className="inline-block bg-red-600 text-white text-sm font-bold px-4 py-2 rounded-full mb-8 animate-pulse">
          ATENÇÃO: Últimas unidades em promoção!
        </div>
        
        <h1 className="font-bold text-aqua-darkgray text-4xl sm:text-5xl md:text-6xl leading-tight mb-6">
          <span className="text-red-600 font-bold">VOCÊ ESTÁ PAGANDO POR AR</span> na sua conta de água
        </h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="text-xl sm:text-2xl font-medium text-aqua-darkgray mb-8 max-w-3xl mx-auto"
        >
          O <span className="highlight-text font-semibold">Bloqueador de Ar Aquamax</span> bloqueia essa cobrança e reduz sua conta em até <span className="text-red-600 font-bold">60%</span> em 2 meses!
        </motion.p>
        
        <div className="flex flex-wrap justify-center gap-4 mt-8 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.7 }}
            className="relative"
          >
            <span className="absolute -top-4 -right-4 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-full">OFERTA!</span>
            <a 
              href="#pricing" 
              className="bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-full shadow-xl text-lg sm:text-xl flex items-center justify-center gap-2 transition-all duration-300 transform hover:scale-105"
            >
              <ShoppingCart className="mr-1" size={24} />
              COMPRAR AGORA
            </a>
          </motion.div>

          <motion.a
            href="#video" 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.7 }}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-full shadow-lg text-lg sm:text-xl flex items-center justify-center gap-2 transition-all duration-300"
          >
            <Zap className="mr-1" size={24} />
            VER COMO FUNCIONA
          </motion.a>
        </div>

        <div className="flex flex-wrap justify-center gap-6 mt-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="flex items-center bg-green-100 px-4 py-2 rounded-full"
          >
            <Award className="text-green-600 mr-2" size={20} />
            <span className="text-green-800 font-medium">Até 60% de economia</span>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.9, duration: 0.5 }}
            className="flex items-center bg-blue-100 px-4 py-2 rounded-full"
          >
            <Award className="text-blue-600 mr-2" size={20} />
            <span className="text-blue-800 font-medium">Instalação em 5 minutos</span>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="flex items-center bg-purple-100 px-4 py-2 rounded-full"
          >
            <Award className="text-purple-600 mr-2" size={20} />
            <span className="text-purple-800 font-medium">+5.000 clientes satisfeitos</span>
          </motion.div>
        </div>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.7 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <a 
          href="#video" 
          className="flex flex-col items-center text-aqua-gray hover:text-aqua-blue transition-colors"
        >
          <span className="text-sm mb-2 font-medium">Veja o vídeo</span>
          <ArrowDown className="animate-bounce-subtle" size={24} />
        </a>
      </motion.div>
    </motion.section>
  );
};

export default HeroSection;
