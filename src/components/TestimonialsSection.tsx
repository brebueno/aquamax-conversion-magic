
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Star, Quote, User } from 'lucide-react';

const TestimonialsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });
  
  const testimonials = [
    {
      name: "Carlos Silva",
      location: "São Paulo, SP",
      image: "/testimonial-1.jpg",
      text: "Minha conta passou de R$ 380 para R$ 180 em apenas um mês após instalar o Aquamax. A economia já pagou o investimento várias vezes!",
      stars: 5,
      saving: "R$ 200/mês"
    },
    {
      name: "Ana Costa",
      location: "Rio de Janeiro, RJ",
      image: "/testimonial-2.jpg",
      text: "Instalei sozinha em 10 minutos e na primeira conta já vi a diferença. Economizei quase 50% e não tive nenhuma alteração na pressão da água.",
      stars: 5,
      saving: "R$ 150/mês"
    },
    {
      name: "Roberto Oliveira",
      location: "Curitiba, PR",
      image: "/testimonial-3.jpg",
      text: "Estava cético no início, mas a economia é real. Em dois meses minha conta caiu significativamente e a instalação foi muito simples.",
      stars: 4,
      saving: "R$ 180/mês"
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
      className="section bg-gradient-to-b from-blue-50 to-white"
      id="testimonials"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-block bg-aqua-blue/10 backdrop-blur-sm px-4 py-1 rounded-full mb-4">
            <span className="text-aqua-blue font-medium text-sm">92% dos clientes recomendam</span>
          </div>
          <h2 className="font-bold text-aqua-darkgray mb-4">
            O Que Nossos Clientes Dizem
          </h2>
          <p className="text-aqua-gray text-xl max-w-3xl mx-auto">
            Milhares de famílias já estão economizando com o Aquamax
          </p>
        </motion.div>
        
        <motion.div 
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index}
              variants={item}
              className="testimonial-card flex flex-col"
            >
              <div className="mb-4 flex justify-between items-start">
                <div className="flex items-center">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4 bg-aqua-lightgray flex items-center justify-center">
                    {testimonial.image ? (
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name} 
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <User className="text-aqua-gray" size={20} />
                    )}
                  </div>
                  <div>
                    <h4 className="font-medium text-aqua-darkgray">{testimonial.name}</h4>
                    <p className="text-sm text-aqua-gray">{testimonial.location}</p>
                  </div>
                </div>
                <Quote className="text-aqua-blue/20" size={24} />
              </div>
              
              <p className="text-aqua-darkgray mb-4 flex-grow">
                "{testimonial.text}"
              </p>
              
              <div className="mt-auto">
                <div className="flex items-center mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i}
                      className={i < testimonial.stars ? "text-yellow-400 fill-yellow-400" : "text-gray-300"} 
                      size={16} 
                    />
                  ))}
                </div>
                
                <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full inline-block font-medium text-sm">
                  Economia: {testimonial.saving}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="inline-block bg-aqua-blue py-2 px-6 rounded-full shadow-elegant transform hover:shadow-float hover:-translate-y-1 transition-all duration-300">
            <a href="#calculator" className="text-white font-medium flex items-center">
              Calcular minha economia
              <span className="ml-2">→</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
