
import React, { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";

const SavingsCalculator = () => {
  const [pessoas, setPessoas] = useState(3);
  const [tempo, setTempo] = useState(10);
  const [preco, setPreco] = useState(5.5);
  const [economia, setEconomia] = useState({
    mensal: 0,
    anual: 0,
    roi: 0
  });

  useEffect(() => {
    calcularEconomia();
  }, [pessoas, tempo, preco]);

  const calcularEconomia = () => {
    // Estimativa de consumo médio
    const consumoDiario = pessoas * tempo * 9; // litros (9L/min é a média de um chuveiro)
    const consumoMensal = consumoDiario * 30 / 1000; // convertido para m³
    
    // Economia com Aquamax (redução de 60%)
    const economiaMensal = Number((consumoMensal * 0.6 * preco).toFixed(2));
    const economiaAnual = Number((economiaMensal * 12).toFixed(2));
    
    // ROI (considerando preço médio do produto como R$ 79,90)
    const roi = Math.ceil(79.9 / (economiaMensal / 30));
    
    setEconomia({
      mensal: economiaMensal,
      anual: economiaAnual,
      roi: roi
    });
  };

  return (
    <section id="economia" className="py-16 bg-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Calculadora de Economia</h2>
          <p className="text-xl text-gray-600">Veja quanto você pode economizar com o Aquamax</p>
        </div>
        
        <div className="bg-white p-8 rounded-xl shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              <div>
                <Label htmlFor="pessoas">Pessoas na casa: {pessoas}</Label>
                <Slider 
                  id="pessoas"
                  min={1}
                  max={10}
                  step={1}
                  value={[pessoas]}
                  onValueChange={(value) => setPessoas(value[0])}
                  className="my-4"
                />
              </div>
              
              <div>
                <Label htmlFor="tempo">Tempo médio de banho (minutos): {tempo}</Label>
                <Slider 
                  id="tempo"
                  min={1}
                  max={30}
                  step={1}
                  value={[tempo]}
                  onValueChange={(value) => setTempo(value[0])}
                  className="my-4"
                />
              </div>
              
              <div>
                <Label htmlFor="preco">Preço do m³ de água (R$)</Label>
                <Input 
                  id="preco"
                  type="number"
                  min={1}
                  max={20}
                  step={0.5}
                  value={preco}
                  onChange={(e) => setPreco(parseFloat(e.target.value))}
                  className="my-2"
                />
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="p-4 bg-gray-50 rounded-lg">
                <h3 className="font-semibold text-gray-600 mb-1">Economia Mensal</h3>
                <div className="text-2xl font-bold text-blue-600">R$ {economia.mensal}</div>
              </div>
              
              <div className="p-4 bg-gray-50 rounded-lg">
                <h3 className="font-semibold text-gray-600 mb-1">Economia Anual</h3>
                <div className="text-2xl font-bold text-blue-600">R$ {economia.anual}</div>
              </div>
              
              <div className="p-4 bg-blue-600 text-white rounded-lg">
                <h3 className="font-semibold mb-1">Retorno do Investimento</h3>
                <div className="text-2xl font-bold">Em {economia.roi} dias</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SavingsCalculator;
