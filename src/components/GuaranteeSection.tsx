
import React from "react";
import { CheckCircle } from "lucide-react";

const GuaranteeSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          <div className="shrink-0">
            <CheckCircle className="h-24 w-24 text-blue-600" />
          </div>
          <div className="max-w-2xl text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Garantia de Satisfação</h2>
            <p className="text-xl text-gray-600 mb-2">
              Se o Aquamax não reduzir sua conta de água em pelo menos 30%, devolvemos o seu dinheiro.
            </p>
            <p className="text-xl text-gray-600">
              Experimente por 30 dias e comprove a eficiência. Sem perguntas, sem burocracia.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GuaranteeSection;
