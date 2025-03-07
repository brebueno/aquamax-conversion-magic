
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const navLinks = [
    { name: 'Como Funciona', href: '#video' },
    { name: 'Depoimentos', href: '#testimonials' },
    { name: 'Calculadora', href: '#calculator' },
    { name: 'Garantia', href: '#guarantee' },
    { name: 'FAQ', href: '#faq' }
  ];
  
  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'py-2 bg-white/90 backdrop-blur-md shadow-md' : 'py-4 bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <a href="#" className="text-2xl font-bold text-gradient">Aquamax</a>
            
            <nav className="hidden md:flex items-center space-x-8">
              {navLinks.map((link, index) => (
                <a 
                  key={index}
                  href={link.href}
                  className="text-aqua-darkgray hover:text-aqua-blue transition-colors"
                >
                  {link.name}
                </a>
              ))}
              
              <a 
                href="#pricing" 
                className="bg-aqua-blue hover:bg-aqua-darkblue text-white px-5 py-2 rounded-full transition-colors"
              >
                Comprar
              </a>
            </nav>
            
            <button 
              className="md:hidden text-aqua-darkgray"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </header>
      
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-50 md:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="absolute top-0 right-0 bottom-0 w-full max-w-xs bg-white shadow-xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-5 flex justify-between items-center border-b border-gray-100">
                <span className="text-xl font-bold text-gradient">Aquamax</span>
                <button onClick={() => setIsMobileMenuOpen(false)}>
                  <X size={24} className="text-aqua-gray" />
                </button>
              </div>
              
              <nav className="p-5 flex flex-col space-y-5">
                {navLinks.map((link, index) => (
                  <a 
                    key={index}
                    href={link.href}
                    className="text-aqua-darkgray hover:text-aqua-blue transition-colors py-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                ))}
                
                <a 
                  href="#pricing" 
                  className="bg-aqua-blue hover:bg-aqua-darkblue text-white px-5 py-3 rounded-full transition-colors text-center mt-4"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Comprar Agora
                </a>
              </nav>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
