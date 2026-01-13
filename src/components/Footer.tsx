const Footer = () => {
  return (
    <footer className="py-12 bg-black border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
          
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start">
            <span className="text-2xl font-bold tracking-tighter text-gold-400 mb-4">
              TOP<span className="text-white">VAN</span>
            </span>
            <p className="text-gray-500 text-sm max-w-xs">
              Especialista em transporte executivo e universitário na rota Piedade - Sorocaba.
            </p>
          </div>

          {/* Legal */}
          <div className="flex flex-col justify-center">
            <h4 className="text-white font-bold mb-4">Dados da Empresa</h4>
            <p className="text-gray-500 text-sm mb-2">TOPVAN LOCADORA DE VEICULOS LTDA</p>
            <p className="text-gray-500 text-sm mb-2">CNPJ: 23.928.576/0001-19</p>
            <p className="text-gray-500 text-sm">Piedade - SP</p>
          </div>

          {/* Contact */}
          <div className="flex flex-col items-center md:items-end justify-center">
             <a 
              href="https://wa.me/5515996284505" 
              className="text-gold-400 hover:text-white transition-colors font-bold text-lg mb-2"
            >
              (15) 99628-4505
            </a>
            <p className="text-gray-500 text-sm">Juliano Arruda do Amaral</p>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-zinc-900 text-center text-gray-600 text-xs flex flex-col items-center gap-2">
          <p>&copy; {new Date().getFullYear()} Topvan. Todos os direitos reservados.</p>
          <p>
            Desenvolvido por{" "}
            <a 
              href="https://mateuss.com.br" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gold-400 hover:text-white transition-colors underline decoration-gold-400/30 underline-offset-4"
            >
              Mateus Sonnenberg
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;