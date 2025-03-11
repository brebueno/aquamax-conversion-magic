
import React from "react";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const PricingSection = () => {
  const plans = [
    {
      title: "1 Unidade",
      price: "79,90",
      originalPrice: "99,90",
      features: [
        "1 Dispositivo Aquamax",
        "Manual de Instalação",
        "Garantia de 1 ano",
        "Frete Grátis"
      ],
      popular: false
    },
    {
      title: "2 Unidades",
      price: "129,90",
      originalPrice: "199,80",
      features: [
        "2 Dispositivos Aquamax",
        "Manual de Instalação",
        "Garantia de 2 anos",
        "Frete Grátis",
        "Suporte Prioritário"
      ],
      popular: true
    },
    {
      title: "3 Unidades",
      price: "169,90",
      originalPrice: "299,70",
      features: [
        "3 Dispositivos Aquamax",
        "Manual de Instalação",
        "Garantia de 2 anos",
        "Frete Grátis",
        "Suporte Prioritário",
        "Bônus: Guia de Economia de Água"
      ],
      popular: false
    }
  ];

  return (
    <section id="comprar" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Escolha o Plano Ideal</h2>
          <p className="text-xl text-gray-600">Ofertas especiais por tempo limitado</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`border rounded-xl overflow-hidden transition-all hover:shadow-xl ${
                plan.popular ? 'shadow-lg border-blue-600 relative' : 'shadow-md'
              }`}
            >
              {plan.popular && (
                <div className="bg-blue-600 text-white text-center py-1 font-semibold">
                  Mais Popular
                </div>
              )}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-4 text-gray-900">{plan.title}</h3>
                <div className="mb-6">
                  <p className="text-3xl font-bold text-blue-600">R$ {plan.price}</p>
                  <p className="text-gray-500 line-through">De R$ {plan.originalPrice}</p>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-gray-700">
                      <Check className="h-5 w-5 text-green-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button className={`w-full ${plan.popular ? 'bg-blue-600 hover:bg-blue-700' : ''}`}>
                  Comprar Agora
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
