
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "Como funciona a instalação do Aquamax?",
      answer: "A instalação é extremamente simples e leva menos de 2 minutos. Basta desrosquear o chuveiro, encaixar o Aquamax entre a saída de água e o chuveiro, e rosquear novamente. Não são necessárias ferramentas especiais."
    },
    {
      question: "O Aquamax é compatível com qualquer chuveiro?",
      answer: "Sim, o Aquamax é compatível com mais de 95% dos chuveiros do mercado, incluindo modelos elétricos, a gás e convencionais. O dispositivo possui rosca padrão universal."
    },
    {
      question: "A pressão da água vai diminuir com o Aquamax?",
      answer: "Não! Essa é a grande vantagem do Aquamax. Nossa tecnologia patenteada mantém a sensação de pressão e conforto do seu banho enquanto reduz significativamente o consumo de água."
    },
    {
      question: "Quanto tempo demora para receber o produto?",
      answer: "O prazo de entrega é de 3 a 7 dias úteis para todo o Brasil. Entregamos via Correios com código de rastreamento para você acompanhar o seu pedido."
    },
    {
      question: "Como funciona a garantia de satisfação?",
      answer: "Você tem 30 dias para testar o Aquamax. Se não estiver satisfeito ou não perceber uma redução de pelo menos 30% na sua conta de água, entre em contato com nosso suporte. Basta enviar o produto de volta (mesmo usado) e devolveremos 100% do valor pago."
    }
  ];

  return (
    <section id="faq" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Perguntas Frequentes</h2>
          <p className="text-xl text-gray-600">Tire suas dúvidas sobre o Aquamax</p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg p-2">
                <AccordionTrigger className="text-lg font-medium text-gray-900 py-4 px-2">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 px-2 pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
