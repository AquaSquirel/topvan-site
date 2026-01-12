const Tourism = () => {
  const destinations = [
    {
      title: "Aparecida do Norte",
      description: "Romarias e viagens religiosas com conforto absoluto para o grupo.",
      image: "https://images.unsplash.com/photo-1621886866687-b9c1d0f5076e?q=80&w=2070&auto=format&fit=crop"
    },
    {
      title: "Holambra",
      description: "Encante-se com a cidade das flores em uma viagem tranquila e segura.",
      image: "https://images.unsplash.com/photo-1594411124675-c99e900995c6?q=80&w=2070&auto=format&fit=crop"
    },
    {
      title: "Campos do Jordão",
      description: "O clima da montanha com o transporte mais confortável da região.",
      image: "https://images.unsplash.com/photo-1590059908848-18e9766942c7?q=80&w=2070&auto=format&fit=crop"
    },
    {
      title: "Litoral e Praias",
      description: "Viagens para a praia com espaço de sobra para bagagens e família.",
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2073&auto=format&fit=crop"
    }
  ];

  return (
    <section id="turismo" className="py-24 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-gold-400 font-bold uppercase tracking-widest mb-4">Turismo e Lazer</h2>
            <h3 className="text-4xl font-bold text-white mb-4">Viaje com Conforto Executivo</h3>
            <p className="text-gray-400 text-lg">
              Além do transporte diário, a Topvan é especialista em turismo regional. 
              Organize seu grupo e deixe a estrada por nossa conta.
            </p>
          </div>
          <a href="#contato" className="hidden md:inline-flex items-center gap-2 text-white border-b border-gold-400 pb-1 hover:text-gold-400 transition-colors">
            Cotar Viagem Personalizada <span>→</span>
          </a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {destinations.map((place, index) => (
            <div key={index} className="group relative h-96 rounded-2xl overflow-hidden cursor-pointer">
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors z-10" />
              <img 
                src={place.image} 
                alt={place.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 z-20 bg-gradient-to-t from-black via-black/80 to-transparent">
                <h4 className="text-xl font-bold text-white mb-2">{place.title}</h4>
                <p className="text-gray-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                  {place.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center md:hidden">
          <a href="#contato" className="inline-block bg-zinc-800 text-white px-8 py-3 rounded-full border border-zinc-700 hover:border-gold-400 transition-colors">
            Cotar Viagem Personalizada
          </a>
        </div>
      </div>
    </section>
  );
};

export default Tourism;
