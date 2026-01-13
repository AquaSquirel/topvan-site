"use client";

import { useState, FormEvent } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    date: '',
    route: '',
    message: ''
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    
    const phoneNumber = "5515996284505";
    
    // Formata a data de yyyy-mm-dd para dd/mm/yyyy
    const formattedDate = formData.date.split('-').reverse().join('/');
    
    let text = `Olá! Gostaria de um orçamento da Topvan.%0A%0A*Nome:* ${formData.name}%0A*Data:* ${formattedDate}%0A*Trajeto:* ${formData.route}`;
    
    if (formData.message.trim()) {
      text += `%0A*Mensagem:* ${formData.message}`;
    }
    
    window.open(`https://wa.me/${phoneNumber}?text=${text}`, '_blank');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contato" className="py-24 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div>
            <h2 className="text-gold-400 font-bold uppercase tracking-widest mb-4">Contato</h2>
            <h3 className="text-4xl font-bold text-white mb-8">Solicite seu Orçamento Grátis</h3>
            <p className="text-gray-400 text-lg mb-10 leading-relaxed">
              Estamos prontos para atender você. Preencha o formulário ou entre em contato diretamente 
              pelos nossos canais de atendimento rápido.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 bg-gold-400 rounded-full flex items-center justify-center text-black">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M20 10.999h2c0-5.523-4.477-10-10-10v2c4.418 0 8 3.582 8 8zm-4 0h2c0-3.314-2.686-6-6-6v2c2.209 0 4 1.791 4 4zm-7.467 6L5.333 13.8c-1.108-1.108-1.108-2.892 0-4s2.892-1.108 4 0l1.267 1.267a1.1 1.1 0 0 1 0 1.533L9.467 14c-.333.333-.333.867 0 1.2l1.333 1.333c.333.333.867.333 1.2 0l1.4-1.4a1.1 1.1 0 0 1 1.533 0l1.267 1.267c1.108 1.108 1.108 2.892 0 4s-2.892 1.108-4 0l-1.267-1.267a1.1 1.1 0 0 1 0-1.533z"/></svg>
                </div>
                <div>
                  <h4 className="text-white font-bold">Telefone / WhatsApp</h4>
                  <p className="text-gray-400">(15) 99628-4505</p>
                </div>
              </div>
              
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 bg-gold-400 rounded-full flex items-center justify-center text-black">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
                </div>
                <div>
                  <h4 className="text-white font-bold">E-mail</h4>
                  <p className="text-gray-400">j.topvan10@gmail.com.br</p>
                </div>
              </div>

              <div className="flex items-center gap-6">
                <div className="w-12 h-12 bg-gold-400 rounded-full flex items-center justify-center text-black">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
                </div>
                <div>
                  <h4 className="text-white font-bold">Localização</h4>
                  <p className="text-gray-400">Piedade, SP - Atendemos toda a região</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-zinc-900 p-8 rounded-3xl border border-zinc-800">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-bold text-gray-400 mb-2">Nome</label>
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-black border border-zinc-800 rounded-xl px-4 py-3 text-white focus:border-gold-400 outline-none transition-all" 
                  placeholder="Seu nome"
                  required 
                />
              </div>
              
              <div>
                <label className="block text-sm font-bold text-gray-400 mb-2">Data da Viagem / Início das Aulas</label>
                <input 
                  type="date"
                  name="date"
                  id="dateInput"
                  value={formData.date}
                  onChange={handleChange}
                  onClick={(e) => e.currentTarget.showPicker()}
                  className={`w-full bg-black border border-zinc-800 rounded-xl px-4 py-3 focus:border-gold-400 outline-none transition-all cursor-pointer ${formData.date ? 'text-white' : 'text-gray-500'}`}
                  required 
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-400 mb-2">Destino (ou Escola/Faculdade)</label>
                <input 
                  type="text" 
                  name="route"
                  value={formData.route}
                  onChange={handleChange}
                  className="w-full bg-black border border-zinc-800 rounded-xl px-4 py-3 text-white focus:border-gold-400 outline-none transition-all" 
                  placeholder="Ex: Aparecida, Uniso..."
                  required 
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-400 mb-2">Mensagem (Opcional)</label>
                <textarea 
                  name="message"
                  rows={4} 
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-black border border-zinc-800 rounded-xl px-4 py-3 text-white focus:border-gold-400 outline-none transition-all" 
                  placeholder="Conte-nos mais detalhes..."
                ></textarea>
              </div>

              <button type="submit" className="w-full py-4 bg-gold-400 hover:bg-gold-500 text-black font-bold rounded-xl text-lg transition-all transform hover:scale-[1.02] flex items-center justify-center gap-2">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.017-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
                Enviar no WhatsApp
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;