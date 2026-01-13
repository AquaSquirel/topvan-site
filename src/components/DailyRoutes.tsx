const DailyRoutes = () => {
  return (
    <section id="rotas" className="py-24 bg-zinc-950 border-b border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-gold-400 font-bold uppercase tracking-widest mb-4">Rotas Diárias</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-white">De Piedade para Sorocaba</h3>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Pontualidade rigorosa para você nunca perder a aula. Nossas rotas cobrem as principais instituições de ensino.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Manhã */}
          <div className="bg-gradient-to-br from-zinc-900 to-black p-8 rounded-3xl border border-zinc-800 relative group hover:border-gold-400/30 transition-all">
            <div className="absolute top-0 right-0 p-4 opacity-60 group-hover:opacity-100 transition-all duration-500 z-0">
              <span className="text-6xl inline-block transition-transform group-hover:scale-110 duration-500">☀️</span>
            </div>
            <div className="relative z-10">
              <h4 className="text-2xl font-bold text-white mb-2 flex items-center gap-3">
                <span className="text-gold-400">01.</span> Período da Manhã
              </h4>
              <p className="text-gray-400 mb-6 font-medium">Foco em Escolas (Centro de Sorocaba)</p>
              
              <ul className="space-y-3">
                {[
                  "Colégio Ser", "Objetivo", "Anglo", "Etec Fernando Prestes", 
                  "Etec Rubens de Faria", "Fadi", "Fefiso", "IFSP Sorocaba"
                ].map((school, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-300">
                    <svg className="w-5 h-5 text-gold-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg>
                    {school}
                  </li>
                ))}
                <li className="flex items-center gap-3 text-gray-500 italic text-sm mt-2">
                  + Outras escolas da região central
                </li>
              </ul>
            </div>
          </div>

          {/* Noite */}
          <div className="bg-gradient-to-br from-zinc-900 to-black p-8 rounded-3xl border border-zinc-800 relative group hover:border-gold-400/30 transition-all">
            <div className="absolute top-0 right-0 p-4 opacity-60 group-hover:opacity-100 transition-all duration-500 z-0">
              <span className="text-6xl inline-block transition-transform group-hover:scale-110 duration-500">🌙</span>
            </div>
            <div className="relative z-10">
              <h4 className="text-2xl font-bold text-white mb-2 flex items-center gap-3">
                <span className="text-gold-400">02.</span> Período da Noite
              </h4>
              <p className="text-gray-400 mb-6 font-medium">Foco em Universidades</p>
              
              <ul className="space-y-3">
                {[
                  "Uniso", "Anhanguera", "Unip", "Facens", "Fatec"
                ].map((uni, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-300">
                    <svg className="w-5 h-5 text-gold-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg>
                    {uni}
                  </li>
                ))}
              </ul>
              
              <div className="mt-8 p-4 bg-gold-400/10 rounded-xl border border-gold-400/20">
                <p className="text-gold-400 text-sm text-center font-semibold">
                  Retorno seguro garantido após o término das aulas.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 bg-red-500/10 border border-red-500/50 text-red-400 px-4 py-2 rounded-full mb-6 animate-pulse">
            <span className="w-2 h-2 bg-red-500 rounded-full" />
            <span className="text-sm font-bold uppercase tracking-wider">Vagas Limitadas para 2026</span>
          </div>
          <br />
          <a 
            href="https://wa.me/5515996284505?text=Olá,%20gostaria%20de%20verificar%20disponibilidade%20de%20vagas%20para%20estudantes."
            target="_blank"
            className="inline-flex items-center gap-2 bg-gold-400 text-black font-bold px-8 py-4 rounded-xl hover:bg-gold-500 transition-transform hover:scale-105 shadow-lg shadow-gold-400/20"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.017-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
            Consultar Disponibilidade de Vagas
          </a>
        </div>
      </div>
    </section>
  );
};

export default DailyRoutes;
