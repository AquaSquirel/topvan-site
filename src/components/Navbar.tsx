import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="fixed w-full z-40 bg-black/80 backdrop-blur-md border-b border-gold-400/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center">
            <span className="text-2xl font-bold tracking-tighter text-gold-400">
              TOP<span className="text-white">VAN</span>
            </span>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link href="#home" className="text-gray-300 hover:text-gold-400 px-3 py-2 transition-colors">Home</Link>
              <Link href="#sobre" className="text-gray-300 hover:text-gold-400 px-3 py-2 transition-colors">Sobre</Link>
              <Link href="#servicos" className="text-gray-300 hover:text-gold-400 px-3 py-2 transition-colors">Serviços</Link>
              <Link href="#frota" className="text-gray-300 hover:text-gold-400 px-3 py-2 transition-colors">Frota</Link>
              <Link href="#contato" className="bg-gold-400 hover:bg-gold-500 text-black font-bold px-6 py-2 rounded-full transition-all">Orçamento</Link>
            </div>
          </div>
          {/* Mobile menu button could be added here */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
