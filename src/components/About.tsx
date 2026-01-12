const About = () => {
  return (
    <section id="sobre" className="py-24 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1">
             <div className="relative">
                <div className="aspect-square rounded-2xl overflow-hidden border border-gold-400/20 grayscale hover:grayscale-0 transition-all duration-700">
                  <img 
                    src="https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=2070&auto=format&fit=crop" 
                    alt="Motorista Profissional" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -top-4 -left-4 bg-gold-400 text-black font-bold px-6 py-3 rounded-xl shadow-lg">
                  10 Anos de Estrada
                </div>
             </div>
          </div>
          
          <div className="order-1 md:order-2">
            <h2 className="text-gold-400 font-bold uppercase tracking-widest mb-4">Nossa História</h2>
            <h3 className="text-4xl font-bold text-white mb-6">Tradição e Confiança em Piedade</h3>
            
            <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
              <p>
                A <strong className="text-white">Topvan Locadora de Veículos</strong> foi fundada em 2016 por 
                <strong className="text-white"> Juliano Arruda do Amaral</strong>, mas nossa experiência no transporte de passageiros 
                começou muito antes, somando mais de uma década de dedicação.
              </p>
              <p>
                Sediada em <strong className="text-white">Piedade-SP</strong>, nascemos com um propósito claro: oferecer um transporte 
                que unisse a pontualidade necessária para estudantes e trabalhadores com o conforto de uma viagem executiva.
              </p>
              <p>
                Hoje, somos referência na região, reconhecidos pela nossa frota impecável na cor preta e pelo atendimento 
                próximo e familiar aos nossos passageiros.
              </p>
            </div>

            <div className="mt-8 pt-8 border-t border-zinc-900 grid grid-cols-2 gap-8">
              <div>
                <span className="block text-3xl font-bold text-gold-400 mb-1">+10</span>
                <span className="text-sm text-gray-500">Anos de Experiência</span>
              </div>
              <div>
                <span className="block text-3xl font-bold text-gold-400 mb-1">100%</span>
                <span className="text-sm text-gray-500">Frota Própria e Revisada</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;