
import React from "react";
import { Button } from "@/components/ui/button";

const CTABanner = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Pronto para Economizar?</h2>
        <p className="text-xl mb-8">
          Junte-se a milhares de famílias que já estão economizando água e dinheiro com o Aquamax
        </p>
        <a href="#comprar">
          <Button className="bg-white text-blue-700 hover:bg-gray-100 px-8 py-6 text-lg font-medium">
            Comprar com Desconto
          </Button>
        </a>
        
        <div className="mt-10">
          <p className="text-blue-100 mb-2">Pagamento seguro com:</p>
          <div className="flex justify-center gap-4 flex-wrap">
            <span className="bg-blue-500 bg-opacity-20 px-4 py-2 rounded-lg text-sm">
              Cartão de Crédito
            </span>
            <span className="bg-blue-500 bg-opacity-20 px-4 py-2 rounded-lg text-sm">
              Boleto
            </span>
            <span className="bg-blue-500 bg-opacity-20 px-4 py-2 rounded-lg text-sm">
              Pix
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;
