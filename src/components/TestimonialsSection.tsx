
import React from "react";

const TestimonialsSection = () => {
  return (
    <section id="depoimentos" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">O que nossos clientes dizem</h2>
          <p className="text-xl text-gray-600">Milhares de famílias já estão economizando com o Aquamax</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              image: "/testimonial-1.jpg",
              name: "Maria Silva",
              location: "São Paulo",
              quote: "Minha conta de água reduziu 57% no primeiro mês de uso! Incrível como um dispositivo tão simples pode fazer tanta diferença."
            },
            {
              image: "/testimonial-2.jpg",
              name: "Carlos Santos",
              location: "Rio de Janeiro",
              quote: "A instalação foi super fácil e a economia é real. O melhor é que a pressão do banho continua excelente!"
            },
            {
              image: "/testimonial-3.jpg",
              name: "Ana Ferreira",
              location: "Belo Horizonte",
              quote: "Comprei um para cada banheiro da minha casa. O investimento se pagou em menos de 2 meses. Recomendo a todos!"
            }
          ].map((testimonial, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-xl shadow-md">
              <div className="flex items-center mb-4">
                <img 
                  src={testimonial.image} 
                  alt={`Foto de ${testimonial.name}`}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="font-bold text-gray-900">{testimonial.name}</h3>
                  <p className="text-gray-600">{testimonial.location}</p>
                </div>
              </div>
              <div className="text-yellow-500 mb-2">★★★★★</div>
              <p className="text-gray-700 italic">"{testimonial.quote}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
