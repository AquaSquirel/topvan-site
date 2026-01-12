const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent z-10" />
        {/* Usando uma imagem que remete a uma Sprinter preta ou interior de luxo */}
        <div className="w-full h-full bg-[url('https://i.imgur.com/GKUhKm8.jpeg?q=80&w=2071&auto=format&fit=crop')] bg-cover bg-center" />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl">
          <div className="inline-block bg-gold-400/20 border border-gold-400/30 rounded-full px-4 py-1 mb-6 backdrop-blur-sm">
            <span className="text-gold-400 font-bold text-sm tracking-wide uppercase">Desde 2016 em Piedade-SP</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Sua Conexão Diária <br/>
            <span className="text-gold-400">Piedade ⇄ Sorocaba</span>
          </h1>
          <p className="text-xl text-gray-300 mb-10 leading-relaxed max-w-2xl">
            Transporte universitário e escolar com a segurança que sua família merece. 
            Viagens confortáveis em nossa Mercedes Sprinter Executiva.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#contato" 
              className="bg-gold-400 hover:bg-gold-500 text-black font-bold px-8 py-4 rounded-full text-center text-lg transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(212,175,55,0.3)]"
            >
              Reservar Meu Lugar
            </a>
            <a 
              href="#rotas" 
              className="border border-white/30 hover:border-gold-400 hover:text-gold-400 text-white font-bold px-8 py-4 rounded-full text-center text-lg transition-all backdrop-blur-sm"
            >
              Ver Rotas e Horários
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 animate-bounce hidden md:block">
        <svg className="w-6 h-6 text-gold-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;