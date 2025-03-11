
import React from "react";

const VideoSection = () => {
  return (
    <section id="video" className="py-16 bg-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Veja o Aquamax em ação</h2>
        <p className="text-xl text-gray-600 mb-10">Entenda como nosso dispositivo revolucionário funciona em apenas 2 minutos</p>
        
        <div className="relative max-w-4xl mx-auto rounded-xl overflow-hidden shadow-2xl">
          <img 
            src="/video-placeholder.jpg" 
            alt="Vídeo demonstrativo do Aquamax" 
            className="w-full"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <button className="bg-blue-600 bg-opacity-80 hover:bg-opacity-100 transition-all rounded-full p-5">
              <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 5.14V19.14L19 12.14L8 5.14Z" fill="white"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
