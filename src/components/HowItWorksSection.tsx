
import React from "react";

const HowItWorksSection = () => {
  return (
    <section id="como-funciona" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Como o Aquamax Funciona</h2>
          <p className="text-xl text-gray-600">Tecnologia simples e eficiente para economizar água</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {[
            {
              number: 1,
              title: "Instalação Fácil",
              description: "Instale o Aquamax em qualquer chuveiro em menos de 2 minutos, sem ferramentas especiais."
            },
            {
              number: 2,
              title: "Tecnologia Avançada",
              description: "Nosso sistema patenteado mantém a pressão enquanto reduz a quantidade de água utilizada."
            },
            {
              number: 3,
              title: "Economia Imediata",
              description: "Comece a economizar desde o primeiro uso, sem perder o conforto do seu banho."
            }
          ].map((step, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mb-4">
                {step.number}
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
        
        <div className="max-w-3xl mx-auto">
          <img 
            src="/como-funciona-2.png"
            alt="Diagrama explicativo do funcionamento do Aquamax" 
            className="w-full rounded-xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
