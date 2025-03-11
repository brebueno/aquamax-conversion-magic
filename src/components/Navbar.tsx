
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="logo">
          <h1 className="text-2xl font-bold text-blue-600">Aquamax</h1>
        </div>
        <nav className="hidden md:flex">
          <ul className="flex space-x-6">
            <li><a href="#como-funciona" className="text-gray-700 hover:text-blue-600 transition-colors">Como Funciona</a></li>
            <li><a href="#economia" className="text-gray-700 hover:text-blue-600 transition-colors">Economia</a></li>
            <li><a href="#depoimentos" className="text-gray-700 hover:text-blue-600 transition-colors">Depoimentos</a></li>
            <li><a href="#faq" className="text-gray-700 hover:text-blue-600 transition-colors">Perguntas Frequentes</a></li>
          </ul>
        </nav>
        <a href="#comprar">
          <Button className="bg-aqua-blue hover:bg-aqua-darkblue text-white">Comprar Agora</Button>
        </a>
      </div>
    </header>
  );
};

export default Navbar;
