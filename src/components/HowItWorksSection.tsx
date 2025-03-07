
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Droplets, Ban, Clock, BarChart } from 'lucide-react';

const HowItWorksSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });
  
  const features = [
    {
      icon: <Droplets className="h-12 w-12 text-aqua-blue" />,
      title: "Bloqueia o Ar",
      description: "Impede a entrada de ar no hidrômetro, evitando a cobrança indevida"
    },
    {
      icon: <Ban className="h-12 w-12 text-aqua-red" />,
      title: "Fácil Instalação",
      description: "Instale você mesmo em minutos, sem precisar de encanador"
    },
    {
      icon: <Clock className="h-12 w-12 text-aqua-blue" />,
      title: "Economia Imediata",
      description: "Veja resultados já na próxima conta de água"
    },
    {
      icon: <BarChart className="h-12 w-12 text-aqua-red" />,
      title: "Até 60% de Economia",
      description: "Reduza dramaticamente o valor da sua conta de água"
    }
  ];
  
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };
  
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };
  
  return (
    <section 
      ref={ref}
      className="section bg-white"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="font-bold text-aqua-darkgray mb-4">
            Como o <span className="text-gradient">Aquamax</span> Funciona
          </h2>
          <p className="text-aqua-gray text-xl max-w-3xl mx-auto">
            Tecnologia patenteada que previne a entrada de ar no seu hidrômetro, garantindo que você pague apenas pela água que realmente consome.
          </p>
        </motion.div>
        
        <motion.div 
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              variants={item}
              className="glass-card p-6 flex flex-col items-center text-center"
            >
              <div className="mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-aqua-darkgray mb-2">{feature.title}</h3>
              <p className="text-aqua-gray">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-16 relative rounded-2xl overflow-hidden shadow-elegant"
        >
          <div className="aspect-w-16 aspect-h-9">
            <img 
              src="/product-showcase.jpg" 
              alt="Aquamax em funcionamento" 
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
            <div className="p-6 sm:p-10 text-white">
              <h3 className="text-2xl sm:text-3xl font-bold mb-2">Comprovado em Laboratório</h3>
              <p className="text-white/90 max-w-lg">
                Testado e certificado por laboratórios independentes, comprovando sua eficácia na redução do consumo.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
