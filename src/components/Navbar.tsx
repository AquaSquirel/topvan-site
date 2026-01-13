"use client";

import { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Rotas & Escolas", href: "#rotas" },
    { name: "Turismo", href: "#turismo" },
    { name: "Frota", href: "#frota" },
    { name: "Contato", href: "#contato" },
  ];

  return (
    <nav className="fixed w-full z-50 bg-black/90 backdrop-blur-md border-b border-gold-400/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center cursor-pointer" onClick={() => window.scrollTo(0,0)}>
            <img 
              src="/TopVan.svg" 
              alt="Topvan Logo" 
              className="h-18 w-auto object-contain py-2"
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <Link 
                  key={link.name}
                  href={link.href} 
                  className="text-gray-300 hover:text-gold-400 px-3 py-2 transition-colors text-sm font-medium uppercase tracking-wide"
                >
                  {link.name}
                </Link>
              ))}
              <Link 
                href="#contato" 
                className="bg-gold-400 hover:bg-gold-500 text-black font-bold px-6 py-2 rounded-full transition-all hover:scale-105"
              >
                Orçamento
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gold-400 hover:text-white hover:bg-zinc-800 focus:outline-none transition-colors"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Abrir menu</span>
              {!isOpen ? (
                <svg className="block h-8 w-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-8 w-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <div className={`md:hidden bg-zinc-950 border-b border-gold-400/20 absolute w-full transition-all duration-300 ease-in-out ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible h-0'}`} id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-gray-300 hover:text-gold-400 block px-3 py-4 rounded-md text-base font-medium border-b border-zinc-800"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-4 pb-2">
            <Link 
              href="#contato"
              className="block w-full text-center bg-gold-400 text-black font-bold px-6 py-3 rounded-xl hover:bg-gold-500"
              onClick={() => setIsOpen(false)}
            >
              Solicitar Orçamento
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;