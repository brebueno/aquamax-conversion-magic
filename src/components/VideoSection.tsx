
import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Play, ShoppingCart, CheckCircle } from 'lucide-react';

const VideoSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [isPlaying, setIsPlaying] = useState(false);
  const videoPlaceholder = "/video-placeholder.jpg";
  
  return (
    <section 
      id="video" 
      ref={ref}
      className="section bg-gradient-to-b from-white to-blue-50"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="max-w-4xl mx-auto"
      >
        <div className="text-center mb-8">
          <span className="inline-block bg-red-100 text-red-600 font-bold px-4 py-1 rounded-full mb-4">
            PROBLEMA REVELADO
          </span>
          <h2 className="font-bold text-3xl sm:text-4xl text-aqua-darkgray mb-4">
            Até 40% da sua conta é <span className="text-red-600 font-bold">AR</span> que entra no hidrômetro
          </h2>
          <p className="text-aqua-gray text-xl mb-8">
            Assista como o Aquamax resolve este problema:
          </p>
        </div>
        
        <div className="relative rounded-2xl overflow-hidden shadow-float mb-12">
          {!isPlaying ? (
            <div className="relative">
              <div className="blur-load" style={{ backgroundImage: `url(${videoPlaceholder})` }}>
                <img 
                  src={videoPlaceholder} 
                  alt="Vídeo do Aquamax" 
                  className="w-full h-auto rounded-2xl"
                  onLoad={(e) => e.currentTarget.parentElement?.classList.add('loaded')}
                />
              </div>
              <div 
                className="absolute inset-0 flex items-center justify-center cursor-pointer"
                onClick={() => setIsPlaying(true)}
              >
                <div className="w-20 h-20 rounded-full bg-red-600 flex items-center justify-center transition-transform hover:scale-110">
                  <Play fill="white" size={30} className="ml-2" />
                </div>
              </div>
            </div>
          ) : (
            <div className="video-wrapper">
              <iframe 
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1" 
                title="Aquamax Presentation" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe>
            </div>
          )}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
          <div className="bg-white p-6 rounded-xl shadow-md flex items-start">
            <CheckCircle size={24} className="text-green-500 mr-3 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-bold text-lg text-aqua-darkgray mb-2">Economia Garantida</h3>
              <p className="text-aqua-gray">Reduza sua conta em até 60% bloqueando a entrada de ar no hidrômetro</p>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-md flex items-start">
            <CheckCircle size={24} className="text-green-500 mr-3 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-bold text-lg text-aqua-darkgray mb-2">Instalação Super Fácil</h3>
              <p className="text-aqua-gray">Instale em menos de 5 minutos sem precisar de ferramentas especiais</p>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-md flex items-start">
            <CheckCircle size={24} className="text-green-500 mr-3 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-bold text-lg text-aqua-darkgray mb-2">Compatível com Todos os Sistemas</h3>
              <p className="text-aqua-gray">Funciona com qualquer tipo de encanamento e hidrômetro</p>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-md flex items-start">
            <CheckCircle size={24} className="text-green-500 mr-3 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-bold text-lg text-aqua-darkgray mb-2">Garantia de 30 Dias</h3>
              <p className="text-aqua-gray">Se não estiver satisfeito, devolvemos 200% do valor investido</p>
            </div>
          </div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-8 text-center"
        >
          <div className="inline-block bg-aqua-lightgray/50 backdrop-blur-sm px-4 py-2 rounded-full mb-8">
            <span className="text-aqua-blue font-medium">+5.000 unidades vendidas</span>
          </div>
          
          <motion.a
            href="#pricing"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-full shadow-xl transition-all duration-300 text-xl inline-flex items-center justify-center gap-2"
          >
            <ShoppingCart size={24} />
            GARANTIR MEU AQUAMAX
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default VideoSection;
