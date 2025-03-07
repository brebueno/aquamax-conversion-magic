
import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { Check, ShoppingCart, Clock, Shield, PercentCircle, AlertTriangle, Gift, Droplets } from 'lucide-react';

const PricingSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  
  // Countdown timer
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 59,
    seconds: 59
  });
  
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else {
          // Reset to 24 hours when countdown reaches 0
          return { hours: 23, minutes: 59, seconds: 59 };
        }
      });
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);
  
  const features = [
    "Bloqueia a entrada de ar no hidrômetro",
    "Instalação sem ferramentas especiais",
    "Compatível com qualquer tipo de rede",
    "Reduz até 60% na conta de água",
    "Garantia de 30 dias",
    "Suporte técnico gratuito"
  ];
  
  return (
    <section 
      ref={ref}
      className="section bg-gradient-to-b from-white to-blue-50"
      id="pricing"
    >
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="inline-block bg-blue-600 text-white px-6 py-2 rounded-full mb-4 animate-pulse">
            <span className="font-bold text-sm flex items-center justify-center">
              <AlertTriangle className="mr-1" size={16} />
              ÚLTIMAS 50 UNIDADES COM 67% OFF!
            </span>
          </div>
          <h2 className="font-bold text-3xl sm:text-4xl text-aqua-darkgray mb-4">
            Garanta o Seu Aquamax Hoje
          </h2>
          <p className="text-xl max-w-3xl mx-auto text-blue-700">
            Oferta por tempo limitado! Não perca essa oportunidade
          </p>
        </motion.div>
        
        <div className="flex justify-center mb-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-white rounded-lg shadow-float p-3 flex items-center gap-3"
          >
            <div className="countdown-item">
              <span className="count-value">{timeLeft.hours.toString().padStart(2, '0')}</span>
              <span className="count-label">horas</span>
            </div>
            <span className="text-2xl font-bold text-aqua-gray">:</span>
            <div className="countdown-item">
              <span className="count-value">{timeLeft.minutes.toString().padStart(2, '0')}</span>
              <span className="count-label">min</span>
            </div>
            <span className="text-2xl font-bold text-aqua-gray">:</span>
            <div className="countdown-item">
              <span className="count-value">{timeLeft.seconds.toString().padStart(2, '0')}</span>
              <span className="count-label">seg</span>
            </div>
          </motion.div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="glass-card p-8 border-2 border-transparent hover:border-blue-400 transition-all duration-300 relative overflow-hidden"
          >
            <div className="absolute bottom-0 right-0 opacity-5 pointer-events-none">
              <Droplets size={200} className="text-blue-500" />
            </div>
            
            <div className="bg-blue-600 text-white text-sm font-bold px-4 py-1 rounded-full inline-block mb-6">
              Oferta Individual
            </div>
            
            <div className="flex items-end gap-3 mb-6">
              <div className="text-aqua-gray line-through text-lg">De R$ 297,00</div>
              <div className="text-aqua-darkgray text-4xl font-bold">R$ 119,90</div>
            </div>
            
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-aqua-darkgray mb-4">O que você recebe:</h3>
              <ul className="space-y-3">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="text-green-500 mr-2 mt-1 flex-shrink-0" size={18} />
                    <span className="text-aqua-gray">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <button className="bg-green-600 hover:bg-green-700 text-white w-full text-lg py-4 px-6 rounded-full font-bold shadow-lg transition-all duration-300 transform hover:scale-105 mb-4 flex items-center justify-center">
              <ShoppingCart className="mr-2" size={20} />
              COMPRAR AGORA
            </button>
            
            <p className="text-aqua-gray text-sm text-center">
              Entrega em todo Brasil • Pagamento seguro
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="glass-card p-8 relative overflow-hidden border-2 border-blue-600 transform hover:scale-105 transition-all duration-300"
          >
            <div className="absolute -right-12 top-7 bg-blue-600 text-white text-sm font-bold px-16 py-1 transform rotate-45">
              MELHOR OFERTA
            </div>
            
            <div className="absolute bottom-0 right-0 opacity-5 pointer-events-none">
              <Droplets size={240} className="text-blue-500" />
            </div>
            
            <div className="bg-blue-600 text-white text-sm font-bold px-4 py-1 rounded-full inline-block mb-6">
              Kit Economia Total
            </div>
            
            <div className="flex items-end gap-3 mb-6">
              <div className="text-aqua-gray line-through text-lg">De R$ 447,00</div>
              <div className="text-aqua-darkgray text-4xl font-bold">R$ 179,80</div>
            </div>
            
            {/* Added image */}
            <div className="mb-6 bg-blue-50 p-3 rounded-lg border border-blue-200">
              <img 
                src="/como-funciona-2.png" 
                alt="Como funciona o Aquamax" 
                className="w-full h-auto rounded-md shadow-sm"
              />
              <p className="text-center text-blue-700 font-medium mt-2 text-sm">Veja como o Aquamax funciona</p>
            </div>
            
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-aqua-darkgray mb-4">O que você recebe:</h3>
              <ul className="space-y-3">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="text-green-500 mr-2 mt-1 flex-shrink-0" size={18} />
                    <span className="text-aqua-gray">{feature}</span>
                  </li>
                ))}
                <li className="flex items-start pt-2 border-t border-aqua-lightgray/30">
                  <Check className="text-green-500 mr-2 mt-1 flex-shrink-0" size={18} />
                  <span className="text-aqua-darkgray font-medium">2 unidades do Aquamax</span>
                </li>
                <li className="flex items-start">
                  <Gift className="text-blue-600 mr-2 mt-1 flex-shrink-0" size={18} />
                  <span className="text-blue-600 font-medium">Filtro Anti-Vazamento GRÁTIS</span>
                </li>
                <li className="flex items-start">
                  <Gift className="text-blue-600 mr-2 mt-1 flex-shrink-0" size={18} />
                  <span className="text-blue-600 font-medium">Guia "Como Reduzir Sua Conta em 7 Dias"</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-blue-100 border border-blue-300 p-3 rounded-lg mb-6 text-center">
              <span className="text-blue-800 font-medium">💧 Economize R$ 60,00 nesta oferta! 💧</span>
            </div>
            
            <button className="bg-green-600 hover:bg-green-700 text-white w-full text-lg py-4 px-6 rounded-full font-bold shadow-xl transition-all duration-300 mb-4 flex items-center justify-center animate-pulse">
              <ShoppingCart className="mr-2" size={20} />
              COMPRAR KIT ECONOMIA
            </button>
            
            <p className="text-aqua-gray text-sm text-center">
              Entrega em todo Brasil • Pagamento seguro
            </p>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-12 flex flex-col md:flex-row items-center justify-center gap-8 text-center glass-card p-6"
        >
          <div className="flex items-center gap-3">
            <Clock className="text-blue-600" size={32} />
            <div className="text-left">
              <h4 className="font-bold text-aqua-darkgray">Oferta por tempo limitado</h4>
              <p className="text-aqua-gray text-sm">Válida até o fim do estoque</p>
            </div>
          </div>
          
          <div className="h-10 w-px bg-aqua-lightgray/70 hidden md:block"></div>
          
          <div className="flex items-center gap-3">
            <Shield className="text-blue-600" size={32} />
            <div className="text-left">
              <h4 className="font-bold text-aqua-darkgray">Garantia de 30 dias</h4>
              <p className="text-aqua-gray text-sm">Ou 200% do seu dinheiro de volta</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;
