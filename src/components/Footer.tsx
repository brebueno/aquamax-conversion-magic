
import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, CreditCard, Truck, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  return (
    <footer className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-12 border-t border-gray-100">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="flex items-center justify-center">
              <div className="flex items-center gap-3">
                <ShieldCheck className="text-aqua-blue" size={24} />
                <div>
                  <h4 className="font-medium text-aqua-darkgray">Compra 100% Segura</h4>
                  <p className="text-sm text-aqua-gray">Proteção garantida</p>
                </div>
              </div>
            </div>
            
            <div className="flex items-center justify-center">
              <div className="flex items-center gap-3">
                <CreditCard className="text-aqua-blue" size={24} />
                <div>
                  <h4 className="font-medium text-aqua-darkgray">Pagamento Facilitado</h4>
                  <p className="text-sm text-aqua-gray">Parcelamento em até 12x</p>
                </div>
              </div>
            </div>
            
            <div className="flex items-center justify-center">
              <div className="flex items-center gap-3">
                <Truck className="text-aqua-blue" size={24} />
                <div>
                  <h4 className="font-medium text-aqua-darkgray">Envio para Todo Brasil</h4>
                  <p className="text-sm text-aqua-gray">Entrega rápida e segura</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col items-center">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={scrollToTop}
              className="mb-6 bg-aqua-lightgray p-3 rounded-full text-aqua-blue hover:bg-aqua-blue hover:text-white transition-colors"
            >
              <ArrowUp size={20} />
            </motion.button>
            
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-gradient mb-2">Aquamax</h3>
              <p className="text-aqua-gray">Economize água, economize dinheiro</p>
            </div>
            
            <div className="flex space-x-6 mb-6">
              <a href="#" className="text-aqua-gray hover:text-aqua-blue transition-colors">Termos de Uso</a>
              <a href="#" className="text-aqua-gray hover:text-aqua-blue transition-colors">Política de Privacidade</a>
              <a href="#" className="text-aqua-gray hover:text-aqua-blue transition-colors">Suporte</a>
            </div>
            
            <p className="text-aqua-gray/70 text-sm">
              © {new Date().getFullYear()} Aquamax. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
