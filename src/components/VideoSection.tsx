import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Play } from 'lucide-react';

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
        <div className="text-center mb-10">
          <h2 className="font-bold text-aqua-darkgray mb-4">
            Até 40% da sua conta é <span className="text-aqua-red">AR</span> que entra no hidrômetro
          </h2>
          <p className="text-aqua-gray text-xl mb-8">
            Assista como o Aquamax resolve este problema:
          </p>
        </div>
        
        <div className="relative rounded-2xl overflow-hidden shadow-float">
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
                <div className="w-20 h-20 rounded-full bg-aqua-blue/90 flex items-center justify-center transition-transform hover:scale-110">
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
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <div className="inline-block bg-aqua-lightgray/50 backdrop-blur-sm px-4 py-2 rounded-full">
            <span className="text-aqua-blue font-medium">+5.000 unidades vendidas</span>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default VideoSection;
