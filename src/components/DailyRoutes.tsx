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
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <span className="text-6xl">☀️</span>
            </div>
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

          {/* Noite */}
          <div className="bg-gradient-to-br from-zinc-900 to-black p-8 rounded-3xl border border-zinc-800 relative group hover:border-gold-400/30 transition-all">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <span className="text-6xl">🌙</span>
            </div>
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
    </section>
  );
};

export default DailyRoutes;
