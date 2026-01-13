"use client";

import { useState } from "react";

const FAQ = () => {
  const faqs = [
    {
      question: "Vocês buscam o aluno na porta de casa?",
      answer: "Sim! Em Piedade, realizamos o embarque e desembarque porta a porta sempre que possível, garantindo total segurança para que você ou seu filho não precisem se deslocar até pontos de encontro."
    },
    {
      question: "Quais são as formas de pagamento?",
      answer: "Trabalhamos com mensalidades via PIX, facilitando o controle financeiro dos pais e estudantes."
    },
    {
      question: "Como funciona para eventos e turismo?",
      answer: "Para viagens de turismo ou eventos, basta entrar em contato informando o destino, a data e o horário. Nós passamos o orçamento na hora e agendamos sua viagem de forma rápida e prática pelo WhatsApp."
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-zinc-900 border-t border-zinc-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-gold-400 font-bold uppercase tracking-widest mb-4">Dúvidas Frequentes</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-white">Tire suas dúvidas antes de viajar</h3>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="border border-zinc-800 rounded-2xl bg-black overflow-hidden transition-all duration-300 hover:border-gold-400/30"
            >
              <button
                className="w-full px-8 py-6 text-left flex justify-between items-center focus:outline-none"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="text-lg font-bold text-white">{faq.question}</span>
                <span className={`text-gold-400 text-2xl transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}>
                  ▼
                </span>
              </button>
              <div 
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  openIndex === index ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-8 pb-8 text-gray-400 leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
