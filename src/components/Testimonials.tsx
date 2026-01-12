const Testimonials = () => {
  const testimonials = [
    {
      name: "Roberto Silva",
      role: "Diretor Comercial",
      content: "Serviço impecável. A van estava extremamente limpa e o motorista foi muito profissional durante todo o traslado da nossa equipe.",
    },
    {
      name: "Mariana Costa",
      role: "Noiva",
      content: "Contratei para o transporte dos convidados do meu casamento e foi a melhor escolha. Todos elogiaram o conforto e a pontualidade.",
    },
    {
      name: "Carlos Eduardo",
      role: "Turista",
      content: "Fizemos uma viagem em família para o litoral e a Topvan superou nossas expectativas. Espaço de sobra para as malas e muito conforto.",
    },
  ];

  return (
    <section className="py-24 bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-gold-400 font-bold uppercase tracking-widest mb-4">Depoimentos</h2>
          <h3 className="text-4xl font-bold text-white">O que dizem nossos clientes</h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <div key={index} className="p-8 bg-zinc-900/50 border border-zinc-800 rounded-2xl relative pt-12">
              <div className="text-gold-400 text-6xl absolute top-2 left-4 opacity-20 font-serif leading-none">"</div>
              <p className="text-gray-300 mb-8 relative z-10 italic">
                {item.content}
              </p>
              <div>
                <h4 className="text-white font-bold">{item.name}</h4>
                <p className="text-gold-400/80 text-sm">{item.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
