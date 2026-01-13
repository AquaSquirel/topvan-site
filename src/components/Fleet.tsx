const Fleet = () => {
  return (
    <section id="frota" className="py-24 bg-black relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-zinc-900 to-transparent opacity-50" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-gold-400 font-bold uppercase tracking-widest mb-4">Nossa Frota</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">Mercedes Sprinter Executiva</h3>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              Viaje com o padrão de qualidade que só a Topvan oferece. Nossa van é configurada para oferecer 
              a máxima experiência de conforto, seja no trajeto diário para a faculdade ou em uma viagem longa de turismo.
            </p>

            <div className="space-y-6">
              <div className="flex gap-4 p-4 bg-zinc-900/50 rounded-xl border border-zinc-800 hover:border-gold-400/30 transition-colors">
                <span className="text-3xl">💺</span>
                <div>
                  <h4 className="text-white font-bold">18 Lugares em Couro</h4>
                  <p className="text-sm text-gray-500">Bancos executivos reclináveis para máximo descanso.</p>
                </div>
              </div>
              
              <div className="flex gap-4 p-4 bg-zinc-900/50 rounded-xl border border-zinc-800 hover:border-gold-400/30 transition-colors">
                <span className="text-3xl">❄️</span>
                <div>
                  <h4 className="text-white font-bold">Climatização Total</h4>
                  <p className="text-sm text-gray-500">Ar-condicionado com dutos para todos os passageiros.</p>
                </div>
              </div>

              <div className="flex gap-4 p-4 bg-zinc-900/50 rounded-xl border border-zinc-800 hover:border-gold-400/30 transition-colors">
                <span className="text-3xl">📺</span>
                <div>
                  <h4 className="text-white font-bold">Tecnologia a Bordo</h4>
                  <p className="text-sm text-gray-500">TV Digital e Sistema de Som integrado.</p>
                </div>
              </div>

              <div className="flex gap-4 p-4 bg-gold-400/10 rounded-xl border border-gold-400/20">
                <span className="text-3xl">🗣️</span>
                <div>
                  <h4 className="text-gold-400 font-bold">Conectividade Alexa</h4>
                  <p className="text-sm text-gold-400/70">Escolha sua música e interaja durante a viagem.</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <a href="#contato" className="inline-block border border-gold-400 text-gold-400 font-bold px-8 py-3 rounded-full hover:bg-gold-400 hover:text-black transition-all">
                Quero viajar nessa Van
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] rounded-3xl overflow-hidden border border-zinc-800 shadow-2xl">
              {/* Imagem de uma Sprinter preta ou interior executivo */}
              <img 
                src="https://i.imgur.com/P1940bs.png?q=80&w=2071&auto=format&fit=crop" 
                alt="Mercedes Sprinter Topvan" 
                className="w-full h-full object-cover"
              />
            </div>
            {/* Tag flutuante */}
            <div className="absolute -bottom-6 -right-6 bg-zinc-900 p-6 rounded-2xl border border-zinc-800 shadow-xl hidden md:block">
              <p className="text-gold-400 text-sm font-bold uppercase tracking-wider mb-1">Modelo</p>
              <p className="text-2xl font-bold text-white">100% Executiva</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Fleet;