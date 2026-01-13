const Tourism = () => {
  const destinations = [
    {
      title: "Aparecida do Norte",
      description: "Romarias e viagens religiosas com conforto absoluto para o grupo.",
      image: "https://i.imgur.com/s8ApW6b.jpeg?q=80&w=2070&auto=format&fit=crop"
    },
    {
      title: "Cotia",
      description: "Igreja dos Arautos do Evangelho.",
      image: "https://cdn.discordapp.com/attachments/979480647074730014/1460448160781570102/SaveClip.App_581811132_17991113864893192_2226366824009180383_n.jpg?ex=6966f3d7&is=6965a257&hm=d30f48bc6a3ef171122d478f0e3e597f43f42ff07f648aac2d89969134885891&?q=80&w=2070&auto=format&fit=crop"
    },
    {
      title: "Eventos Esportivos",
      description: "São Bernardo do Campo, com a equipe do Kaikan de Piedade.",
      image: "https://i.imgur.com/o99sYZi.jpeg?q=80&w=2070&auto=format&fit=crop"
    },
    {
      title: "Parques Aquaticos",
      description: "Castelo Park Aquatico, Cesário Lange.",
      image: "https://i.imgur.com/iuMgL2J.jpeg"
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
              <div className="absolute inset-0 z-20 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-6">
                <div>
                  <h4 className="text-xl font-bold text-white mb-1">
                    {place.title}
                  </h4>
                  <div className="max-h-0 overflow-hidden group-hover:max-h-24 transition-all duration-500 ease-in-out">
                    <p className="text-gray-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                      {place.description}
                    </p>
                  </div>
                </div>
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
