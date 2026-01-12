const Services = () => {
  const services = [
    {
      title: "Transfer Aeroportos",
      description: "Levamos e buscamos você em Guarulhos (GRU), Congonhas (CGH) e Viracopos (VCP) com total pontualidade.",
      icon: "✈️",
    },
    {
      title: "Shows e Festas",
      description: "Transporte seguro para shows em estádios, festivais e festas. Vá e volte com tranquilidade sem se preocupar com direção.",
      icon: "🎟️",
    },
    {
      title: "Casamentos",
      description: "Logística para transporte de convidados e familiares em cerimônias, garantindo que todos cheguem juntos e seguros.",
      icon: "💍",
    },
    {
      title: "Fretamento Corporativo",
      description: "Soluções de transporte para empresas, convenções, visitas técnicas e reuniões de negócios na região.",
      icon: "💼",
    },
  ];

  return (
    <section id="outros-servicos" className="py-24 bg-black border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-gold-400 font-bold uppercase tracking-widest mb-4">Mais Soluções</h2>
          <h3 className="text-3xl font-bold text-white">Eventos, Aeroportos e Corporativo</h3>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="p-8 bg-zinc-900 border border-zinc-800 rounded-2xl hover:border-gold-400/50 transition-all group"
            >
              <div className="text-4xl mb-6 group-hover:scale-110 transition-transform inline-block">
                {service.icon}
              </div>
              <h4 className="text-xl font-bold text-white mb-4">{service.title}</h4>
              <p className="text-gray-400 leading-relaxed text-sm">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
