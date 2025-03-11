
import React from "react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">
              Economize até <span className="text-aqua-blue">60%</span> na sua conta de água
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              O Aquamax é um dispositivo revolucionário que reduz o consumo de água sem comprometer a pressão ou conforto do seu banho.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#comprar">
                <Button className="bg-aqua-blue hover:bg-aqua-darkblue text-white px-8 py-6 text-lg w-full sm:w-auto">
                  Comprar Agora
                </Button>
              </a>
              <a href="#video">
                <Button variant="outline" className="px-8 py-6 text-lg w-full sm:w-auto">
                  Ver Como Funciona
                </Button>
              </a>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <img 
              src="/product-showcase.jpg" 
              alt="Aquamax - Economizador de Água" 
              className="rounded-xl shadow-2xl w-full h-auto" 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
