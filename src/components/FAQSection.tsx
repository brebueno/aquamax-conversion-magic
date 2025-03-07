import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const FAQSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  
  const faqs = [
    {
      question: "Como o Aquamax funciona?",
      answer: "O Aquamax utiliza uma tecnologia patenteada que impede a entrada de ar no hidrômetro, garantindo que você só pague pela água que realmente consome. Ele é instalado diretamente na entrada de água da sua casa, antes do hidrômetro."
    },
    {
      question: "A instalação é difícil?",
      answer: "Não! A instalação é extremamente simples e leva apenas alguns minutos. O kit vem com instruções detalhadas e você não precisa de ferramentas especiais ou conhecimentos técnicos."
    },
    {
      question: "Quanto tempo leva para ver os resultados?",
      answer: "A maioria dos clientes começa a ver resultados já na primeira conta de água após a instalação. Em média, a economia total se consolida após 2 meses de uso."
    },
    {
      question: "O Aquamax funciona em qualquer tipo de encanamento?",
      answer: "Sim! O Aquamax é compatível com todos os tipos de encanamento (PVC, metal, etc.) e com hidrômetros de diferentes marcas e modelos."
    },
    {
      question: "Como funciona a garantia de 200% do dinheiro de volta?",
      answer: "É simples: se você não estiver satisfeito com os resultados em até 30 dias após a compra, basta entrar em contato conosco. Devolveremos o dobro do valor que você pagou, sem fazer perguntas."
    },
    {
      question: "O Aquamax afeta a pressão da água?",
      answer: "Não. O Aquamax foi projetado para bloquear apenas o ar, sem interferir no fluxo normal da água. Você não sentirá nenhuma diferença na pressão ou qualidade da água."
    }
  ];
  
  const toggleFaq = (index: number) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };
  
  return (
    <section 
      ref={ref}
      className="section bg-gradient-to-b from-blue-50 to-white"
      id="faq"
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="font-bold text-aqua-darkgray mb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-aqua-gray text-xl max-w-3xl mx-auto">
            Tudo o que você precisa saber sobre o Aquamax
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="space-y-4"
        >
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className={`glass-card transition-all duration-300 ${openIndex === index ? 'shadow-float' : ''}`}
            >
              <button 
                className="w-full flex justify-between items-center p-6 text-left"
                onClick={() => toggleFaq(index)}
              >
                <h3 className="text-lg font-semibold text-aqua-darkgray">{faq.question}</h3>
                {openIndex === index ? (
                  <Minus className="text-aqua-blue flex-shrink-0" size={20} />
                ) : (
                  <Plus className="text-aqua-blue flex-shrink-0" size={20} />
                )}
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="p-6 pt-0 text-aqua-gray">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <p className="text-aqua-gray mb-6">
            Ainda tem dúvidas? Entre em contato com nossa equipe
          </p>
          <a 
            href="mailto:contato@aquamax.com.br" 
            className="text-aqua-blue hover:text-aqua-darkblue font-medium underline"
          >
            contato@aquamax.com.br
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
