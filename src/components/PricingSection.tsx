import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { Check, ShoppingCart, Clock, Shield, PercentCircle } from 'lucide-react';

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
          <div className="inline-block bg-aqua-red/10 backdrop-blur-sm px-4 py-1 rounded-full mb-4">
            <span className="text-aqua-red font-medium text-sm flex items-center justify-center">
              <PercentCircle className="mr-1" size={16} />
              Últimas 50 unidades com 67% OFF!
            </span>
          </div>
          <h2 className="font-bold text-aqua-darkgray mb-4">
            Garanta o Seu Aquamax Hoje
          </h2>
          <p className="text-aqua-gray text-xl max-w-3xl mx-auto">
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
            className="glass-card p-8"
          >
            <div className="bg-aqua-blue text-white text-sm font-medium px-4 py-1 rounded-full inline-block mb-6">
              Oferta Individual
            </div>
            
            <div className="flex items-end gap-3 mb-6">
              <div className="text-aqua-gray line-through text-lg">De R$ 297,00</div>
              <div className="text-aqua-darkgray text-4xl font-bold">R$ 97,90</div>
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
            
            <button className="aqua-button w-full text-lg mb-4 flex items-center justify-center">
              <ShoppingCart className="mr-2" size={20} />
              Comprar Agora
            </button>
            
            <p className="text-aqua-gray text-sm text-center">
              Entrega em todo Brasil • Pagamento seguro
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="glass-card p-8 relative overflow-hidden border-2 border-aqua-blue"
          >
            <div className="absolute -right-12 top-7 bg-aqua-red text-white text-sm font-bold px-16 py-1 transform rotate-45">
              MELHOR OFERTA
            </div>
            
            <div className="bg-aqua-blue text-white text-sm font-medium px-4 py-1 rounded-full inline-block mb-6">
              Kit Economia Total
            </div>
            
            <div className="flex items-end gap-3 mb-6">
              <div className="text-aqua-gray line-through text-lg">De R$ 447,00</div>
              <div className="text-aqua-darkgray text-4xl font-bold">R$ 147,90</div>
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
                  <Check className="text-green-500 mr-2 mt-1 flex-shrink-0" size={18} />
                  <span className="text-aqua-darkgray font-medium">Filtro Anti-Vazamento GRÁTIS</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-green-500 mr-2 mt-1 flex-shrink-0" size={18} />
                  <span className="text-aqua-darkgray font-medium">Guia "Como Reduzir Sua Conta em 7 Dias"</span>
                </li>
              </ul>
            </div>
            
            <button className="aqua-button-red w-full text-lg mb-4 flex items-center justify-center">
              <ShoppingCart className="mr-2" size={20} />
              Comprar Kit Economia
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
            <Clock className="text-aqua-blue" size={32} />
            <div className="text-left">
              <h4 className="font-medium text-aqua-darkgray">Oferta por tempo limitado</h4>
              <p className="text-aqua-gray text-sm">Válida até o fim do estoque</p>
            </div>
          </div>
          
          <div className="h-10 w-px bg-aqua-lightgray/70 hidden md:block"></div>
          
          <div className="flex items-center gap-3">
            <Shield className="text-aqua-blue" size={32} />
            <div className="text-left">
              <h4 className="font-medium text-aqua-darkgray">Garantia de 30 dias</h4>
              <p className="text-aqua-gray text-sm">Ou 200% do seu dinheiro de volta</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;

