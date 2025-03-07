
import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Calculator } from 'lucide-react';

const SavingsCalculator = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });
  const [currentBill, setCurrentBill] = useState('');
  const [savings, setSavings] = useState<number | null>(null);
  const [isCalculated, setIsCalculated] = useState(false);
  
  const calculateSavings = () => {
    if (!currentBill) return;
    
    const bill = parseFloat(currentBill.replace(',', '.'));
    // Calculate approximate savings (40-60% range)
    const minSavings = bill * 0.4;
    const maxSavings = bill * 0.6;
    const avgSavings = (minSavings + maxSavings) / 2;
    
    setSavings(avgSavings);
    setIsCalculated(true);
  };
  
  return (
    <section 
      ref={ref}
      className="section bg-white"
      id="calculator"
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center bg-aqua-lightgray/70 px-4 py-1 rounded-full mb-4">
            <Calculator className="text-aqua-blue mr-2" size={16} />
            <span className="text-aqua-blue font-medium text-sm">Calculadora de Economia</span>
          </div>
          <h2 className="font-bold text-aqua-darkgray mb-4">
            Descubra Quanto Você Vai Economizar
          </h2>
          <p className="text-aqua-gray text-xl max-w-3xl mx-auto">
            Insira o valor da sua última conta de água e descubra sua economia estimada com o Aquamax
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="glass-card p-8 md:p-10"
        >
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="w-full md:w-1/2">
              <label htmlFor="bill-amount" className="block text-aqua-darkgray font-medium mb-2">
                Valor da sua conta atual (R$)
              </label>
              <div className="relative">
                <input
                  id="bill-amount"
                  type="text"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-aqua-blue transition-all"
                  placeholder="Ex: 250,00"
                  value={currentBill}
                  onChange={(e) => {
                    // Allow only numbers and comma
                    const value = e.target.value.replace(/[^0-9,]/g, '');
                    setCurrentBill(value);
                    setIsCalculated(false);
                  }}
                />
                <button
                  onClick={calculateSavings}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-aqua-blue text-white px-4 py-1 rounded-md hover:bg-aqua-darkblue transition-colors"
                >
                  Calcular
                </button>
              </div>
            </div>
            
            <div className="w-full md:w-1/2 bg-aqua-lightgray/30 rounded-lg p-6 text-center">
              {isCalculated && savings !== null ? (
                <div className="animate-scale-in">
                  <p className="text-aqua-gray mb-2">Sua economia estimada:</p>
                  <h3 className="text-3xl md:text-4xl font-bold text-aqua-blue mb-2">
                    R$ {savings.toFixed(2).replace('.', ',')}
                    <span className="text-aqua-blue/70 text-xl">/mês</span>
                  </h3>
                  <p className="text-green-600 font-medium">
                    {(savings * 12).toFixed(2).replace('.', ',')} por ano!
                  </p>
                </div>
              ) : (
                <div>
                  <p className="text-aqua-gray mb-2">Sua economia estimada:</p>
                  <h3 className="text-3xl md:text-4xl font-bold text-aqua-gray/30 mb-2">
                    R$ --,--
                    <span className="text-aqua-gray/30 text-xl">/mês</span>
                  </h3>
                  <p className="text-aqua-gray/50 italic">
                    Insira o valor da sua conta para calcular
                  </p>
                </div>
              )}
            </div>
          </div>
          
          {isCalculated && savings !== null && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              transition={{ duration: 0.3 }}
              className="mt-6 bg-green-50 border border-green-100 rounded-lg p-4"
            >
              <p className="text-green-800">
                Com o Aquamax, você economizaria aproximadamente <strong>R$ {(savings * 12).toFixed(2).replace('.', ',')}</strong> em um ano! 
                O produto se paga em menos de um mês.
              </p>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default SavingsCalculator;
