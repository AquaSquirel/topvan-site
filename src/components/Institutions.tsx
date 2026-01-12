const Institutions = () => {
  const schools = [
    "Colégio Ser", "Objetivo", "Anglo", "Etec Fernando Prestes", "Etec Rubens de Faria", "Fadi", "Fefiso", "IFSP Sorocaba"
  ];
  
  const universities = [
    "Uniso", "Anhanguera", "Unip", "Facens", "Fatec"
  ];

  return (
    <section className="py-12 bg-zinc-900 border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h3 className="text-gold-400 font-bold uppercase tracking-widest mb-2">Instituições Atendidas</h3>
          <p className="text-white text-xl">Levamos você com segurança para as principais escolas e faculdades de Sorocaba.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Escolas */}
          <div className="bg-black/50 p-6 rounded-2xl border border-zinc-800">
            <h4 className="text-white font-bold text-lg mb-4 flex items-center gap-2">
              <span className="text-2xl">🎒</span> Período Diurno (Escolas)
            </h4>
            <div className="flex flex-wrap gap-3">
              {schools.map((school, index) => (
                <span key={index} className="px-4 py-2 bg-zinc-800 text-gray-300 rounded-full text-sm font-medium border border-zinc-700 hover:border-gold-400/50 hover:text-gold-400 transition-colors">
                  {school}
                </span>
              ))}
            </div>
          </div>

          {/* Universidades */}
          <div className="bg-black/50 p-6 rounded-2xl border border-zinc-800">
            <h4 className="text-white font-bold text-lg mb-4 flex items-center gap-2">
              <span className="text-2xl">🎓</span> Período Noturno (Faculdades)
            </h4>
            <div className="flex flex-wrap gap-3">
              {universities.map((uni, index) => (
                <span key={index} className="px-4 py-2 bg-zinc-800 text-gray-300 rounded-full text-sm font-medium border border-zinc-700 hover:border-gold-400/50 hover:text-gold-400 transition-colors">
                  {uni}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Institutions;
