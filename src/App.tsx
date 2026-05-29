import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MessageCircle, CheckCircle2, ShieldCheck, Tag, ShoppingBag, Truck, RefreshCcw, Star } from 'lucide-react';

const WHATSAPP_NUMBER = '5511950522173';
const WHATSAPP_TEXT = encodeURIComponent('Olá! Vim pelo site e gostaria de saber sobre as ofertas do Outlet de Eletrodomésticos hoje.');
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_TEXT}`;

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  return (
    <div className="min-h-screen bg-brand-blueDark text-slate-100 overflow-hidden font-body selection:bg-brand-magenta selection:text-white">
      
      {/* HEADER PREMIUM ECOMMERCE */}
      <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-brand-blueDark/90 backdrop-blur-xl border-b border-white/10 py-4 shadow-xl' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex justify-between items-center">
          <div className="flex flex-col">
            <img src="/logo.png" alt="K Eletro Logo" className="h-8 sm:h-10 w-auto object-contain" />
            <span className="text-[9px] sm:text-[10px] uppercase tracking-widest text-gray-400 font-semibold mt-1">Outlet Premium</span>
          </div>
          
          <nav className="hidden md:flex gap-8 font-display text-sm font-medium text-gray-300">
            <a href="#hero" className="hover:text-white hover:text-brand-magenta transition-colors">Início</a>
            <a href="#categorias" className="hover:text-white hover:text-brand-magenta transition-colors">Produtos</a>
            <a href="#vantagens" className="hover:text-white hover:text-brand-magenta transition-colors">Vantagens</a>
            <a href="#comofunciona" className="hover:text-white hover:text-brand-magenta transition-colors">Como Funciona</a>
          </nav>

          <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className="bg-brand-magenta text-white px-4 sm:px-5 py-2 sm:py-2.5 rounded-lg font-display text-xs sm:text-sm font-bold flex items-center gap-2 hover:bg-brand-magentaHover transition-colors shadow-lg">
            <MessageCircle size={18} />
            <span className="hidden sm:inline">Atendimento</span>
            <span className="sm:hidden inline">Falar</span>
          </a>
        </div>
      </header>

      {/* HERO SECTION - SHOWROOM EXPERIENCE */}
      <section id="hero" className="relative min-h-screen pt-24 pb-12 flex items-center z-10 bg-brand-blueDark overflow-hidden">
        
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 w-full relative z-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Esquerda: Copy Comercial */}
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="pt-10 lg:pr-8"
            >
              <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-3 py-1 bg-brand-magenta/10 border border-brand-magenta/20 rounded-full mb-6">
                <span className="w-2 h-2 rounded-full bg-brand-magenta animate-pulse"></span>
                <span className="text-xs font-display font-bold text-brand-magenta uppercase tracking-wider">Outlet de Eletrodomésticos em Atibaia</span>
              </motion.div>
              
              <motion.h1 variants={fadeUp} className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] font-black text-white leading-[1.1] mb-6 tracking-tight">
                Eletrodomésticos Premium com <span className="text-brand-magenta">Preços de Outlet</span>
              </motion.h1>
              
              <motion.p variants={fadeUp} className="text-lg md:text-xl text-gray-300 font-body leading-relaxed mb-8 max-w-xl">
                Geladeiras, fogões, máquinas de lavar e eletros seminovos, revisados e com pequenas avarias por preços <span className="font-bold text-white">muito abaixo do varejo</span>.
              </motion.p>

              <motion.div variants={fadeUp} className="flex flex-wrap gap-3 mb-10">
                <span className="badge-premium"><ShieldCheck size={16} className="text-brand-magenta" /> Garantia da Loja</span>
                <span className="badge-premium"><CheckCircle2 size={16} className="text-brand-magenta" /> Produtos Revisados</span>
                <span className="badge-premium"><Tag size={16} className="text-brand-magenta" /> Até 70% OFF</span>
                <span className="badge-premium"><ShoppingBag size={16} className="text-brand-magenta" /> Estoque de Saldo</span>
              </motion.div>
              
              <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4">
                <a 
                  href={WHATSAPP_LINK}
                  target="_blank" rel="noreferrer"
                  className="btn-primary px-8 py-4 sm:w-auto w-full text-base"
                >
                  <MessageCircle size={22} />
                  CHAMAR NO WHATSAPP
                </a>
                <a 
                  href="#categorias"
                  className="btn-outline px-8 py-4 sm:w-auto w-full text-base"
                >
                  VER PRODUTOS
                </a>
              </motion.div>
            </motion.div>

            {/* Direita: Imagem Realista Sem Overlay */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative h-[300px] sm:h-[400px] lg:h-[700px] w-full rounded-3xl lg:rounded-[2rem] overflow-hidden shadow-2xl border border-white/10 mt-8 lg:mt-0"
            >
              <img 
                src="/hero_appliance_store.png" 
                alt="Cliente comprando eletrodomésticos" 
                className="w-full h-full object-cover object-center"
              />
            </motion.div>

          </div>
        </div>
      </section>

      {/* CATEGORIAS - ECOMMERCE PREMIUM */}
      <section id="categorias" className="py-24 bg-brand-blue relative border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
            <div>
              <h2 className="font-display text-3xl md:text-5xl font-bold text-white mb-4">Nossas Categorias</h2>
              <p className="text-gray-400 font-body text-lg">Encontre o eletrodoméstico perfeito para sua casa.</p>
            </div>
            <a href={WHATSAPP_LINK} className="text-brand-magenta font-display font-bold flex items-center gap-2 hover:text-white transition-colors">
              Ver Estoque Completo <ArrowRight size={20} />
            </a>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Geladeiras */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="ecommerce-card group lg:col-span-2 lg:row-span-2 min-h-[400px] lg:min-h-[600px]"
            >
              <img src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=1200" alt="Geladeiras" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-blueDark via-brand-blueDark/40 to-transparent"></div>
              <div className="absolute bottom-8 left-8 right-8">
                <h3 className="font-display text-4xl font-bold text-white mb-2">Geladeiras</h3>
                <p className="text-gray-300 font-body mb-6 max-w-sm">Side by Side, French Door e modelos frost free revisados com garantia.</p>
                <a href={WHATSAPP_LINK} className="inline-flex items-center gap-2 bg-brand-magenta text-white px-6 py-3 rounded-lg font-display font-bold hover:bg-white hover:text-brand-magenta transition-colors">
                  Ver Ofertas <ArrowRight size={18} />
                </a>
              </div>
            </motion.div>

            {/* Máquinas de Lavar */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="ecommerce-card group min-h-[280px]"
            >
              <img src="https://images.unsplash.com/photo-1558383409-983152d58e37?auto=format&fit=crop&q=80&w=800" alt="Máquinas de Lavar" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-blueDark to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="font-display text-2xl font-bold text-white mb-4">Máquinas de Lavar</h3>
                <a href={WHATSAPP_LINK} className="text-white font-display font-bold flex items-center gap-2 hover:text-brand-magenta transition-colors">
                  Ver Ofertas <ArrowRight size={18} />
                </a>
              </div>
            </motion.div>

            {/* Fogões */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="ecommerce-card group min-h-[280px]"
            >
              <img src="https://images.unsplash.com/photo-1584824388168-3e589839ab58?auto=format&fit=crop&q=80&w=800" alt="Fogões" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-blueDark to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="font-display text-2xl font-bold text-white mb-4">Fogões</h3>
                <a href={WHATSAPP_LINK} className="text-white font-display font-bold flex items-center gap-2 hover:text-brand-magenta transition-colors">
                  Ver Ofertas <ArrowRight size={18} />
                </a>
              </div>
            </motion.div>

            {/* Micro-ondas */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="ecommerce-card group min-h-[280px]"
            >
              <img src="https://images.unsplash.com/photo-1574269909862-7e1d70bb8078?auto=format&fit=crop&q=80&w=800" alt="Micro-ondas" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-blueDark to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="font-display text-2xl font-bold text-white mb-4">Micro-ondas</h3>
                <a href={WHATSAPP_LINK} className="text-white font-display font-bold flex items-center gap-2 hover:text-brand-magenta transition-colors">
                  Ver Ofertas <ArrowRight size={18} />
                </a>
              </div>
            </motion.div>

            {/* Eletroportáteis */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="ecommerce-card group min-h-[280px] bg-brand-blue border border-brand-magenta/30 flex flex-col justify-center items-center text-center p-8 hover:bg-brand-blueDark"
            >
              <h3 className="font-display text-2xl font-bold text-white mb-3">Eletroportáteis</h3>
              <p className="text-gray-400 font-body text-sm mb-6">Fritadeiras, liquidificadores, batedeiras e muito mais.</p>
              <a href={WHATSAPP_LINK} className="text-brand-magenta font-display font-bold flex items-center gap-2 hover:text-white transition-colors">
                Ver Estoque Completo <ArrowRight size={18} />
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* VANTAGENS - POR QUE COMPRAR */}
      <section id="vantagens" className="py-24 bg-brand-blueDark">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">Por que comprar na K Eletro?</h2>
            <p className="text-gray-400 font-body text-lg">Garantimos a melhor experiência de compra de eletrodomésticos.</p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: <ShieldCheck size={32} />, title: "Produtos Revisados", desc: "Todos os produtos passam por análise técnica rigorosa." },
              { icon: <Tag size={32} />, title: "Economia Real", desc: "Preços muito abaixo do varejo online." },
              { icon: <Star size={32} />, title: "Garantia da Loja", desc: "Mais segurança e tranquilidade na sua compra." },
              { icon: <CheckCircle2 size={32} />, title: "Produtos Seminovos", desc: "Produtos selecionados e revisados cuidadosamente." },
              { icon: <ShoppingBag size={32} />, title: "Outlet de Verdade", desc: "Pequenas avarias estéticas com grandes descontos." },
              { icon: <RefreshCcw size={32} />, title: "Estoque Rotativo", desc: "Novas oportunidades e ofertas toda semana." }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-brand-blue/50 border border-white/5 p-8 rounded-2xl hover:bg-brand-blue hover:border-brand-magenta/30 transition-colors"
              >
                <div className="text-brand-magenta mb-6">{item.icon}</div>
                <h3 className="font-display text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400 font-body text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SHOWROOM / GALERIA */}
      <section className="py-24 bg-brand-blue border-y border-white/5 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-12 text-center">Conheça nosso Showroom</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 auto-rows-[250px]">
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="col-span-2 row-span-2 rounded-2xl overflow-hidden relative group shadow-lg">
              <img src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&q=80&w=1200" alt="Showroom" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-brand-blueDark/40 group-hover:bg-transparent transition-colors duration-500"></div>
            </motion.div>
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="rounded-2xl overflow-hidden relative group shadow-lg">
              <img src="https://images.unsplash.com/photo-1584622781564-1d987f7333c1?auto=format&fit=crop&q=80&w=600" alt="Geladeira" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            </motion.div>
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="rounded-2xl overflow-hidden relative group shadow-lg">
              <img src="https://images.unsplash.com/photo-1558383409-983152d58e37?auto=format&fit=crop&q=80&w=600" alt="Lavadora" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            </motion.div>
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="col-span-2 rounded-2xl overflow-hidden relative group shadow-lg">
              <img src="https://images.unsplash.com/photo-1584824388168-3e589839ab58?auto=format&fit=crop&q=80&w=800" alt="Fogão" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-brand-magenta/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-sm">
                <a href={WHATSAPP_LINK} className="font-display font-bold text-white text-xl flex items-center gap-2">Visite Nossa Loja <ArrowRight /></a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* COMO FUNCIONA - TIMELINE */}
      <section id="comofunciona" className="py-24 bg-brand-blueDark">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">Como Comprar</h2>
            <p className="text-gray-400 font-body text-lg">Processo rápido, seguro e sem burocracia.</p>
          </div>
          
          <div className="relative border-l-2 border-brand-blue ml-4 md:ml-0 md:border-l-0 md:border-t-2 md:flex md:justify-between pt-8 md:pt-12">
            {[
              { step: '1', title: 'Veja os produtos disponíveis', desc: 'Através do nosso catálogo no WhatsApp.' },
              { step: '2', title: 'Chame no WhatsApp', desc: 'Fale com nossos consultores de vendas.' },
              { step: '3', title: 'Reserve rapidamente', desc: 'Garanta sua oferta antes que acabe.' },
              { step: '4', title: 'Retire na loja', desc: 'Venha buscar seu eletrodoméstico.' },
            ].map((s, i) => (
              <div key={i} className="mb-10 md:mb-0 relative pl-8 md:pl-0 md:w-1/4 md:text-center md:-mt-[58px]">
                <div className="absolute left-[ -9px] md:left-1/2 md:-translate-x-1/2 top-0 w-4 h-4 rounded-full bg-brand-magenta shadow-[0_0_10px_rgba(225,29,72,0.8)] border-[3px] border-brand-blueDark"></div>
                <div className="md:mt-10">
                  <div className="text-brand-magenta font-display font-black text-2xl mb-2">Passo {s.step}</div>
                  <h4 className="font-display font-bold text-white text-lg mb-2 leading-tight">{s.title}</h4>
                  <p className="text-sm text-gray-400 font-body">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16 bg-[#e11d48]/10 border border-[#e11d48]/30 rounded-2xl p-6 text-center flex flex-col md:flex-row items-center justify-center gap-4 shadow-lg">
            <Truck size={32} className="text-[#e11d48]" />
            <div className="text-left">
              <span className="block text-white font-display font-bold text-lg">Atenção Importante:</span>
              <span className="text-[#e11d48] font-body font-medium">Não fazemos entrega. A retirada deve ser realizada diretamente em nossa loja em Atibaia-SP.</span>
            </div>
          </div>
        </div>
      </section>

      {/* FAIXA DIFERENCIAL PREMIUM */}
      <section className="py-12 bg-brand-magenta text-center px-6">
        <h3 className="font-display font-bold text-xl md:text-2xl text-white max-w-4xl mx-auto leading-tight shadow-sm">
          Produtos revisados, usados e seminovos com garantia da loja.
        </h3>
      </section>

      {/* CTA FINAL EXTREMAMENTE FORTE */}
      <section className="py-32 bg-brand-blueDark relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-magenta/10 rounded-full blur-[100px] mix-blend-screen pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[100px] mix-blend-screen pointer-events-none"></div>
        
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="font-display text-3xl sm:text-4xl md:text-6xl font-black text-white mb-6 leading-tight tracking-tight">
            Seu Próximo Eletro Pode Custar <span className="text-brand-magenta block mt-2">Muito Menos</span>
          </h2>
          <p className="text-gray-300 font-body text-base sm:text-xl mb-12 max-w-2xl mx-auto">
            Fale agora conosco e descubra as melhores oportunidades disponíveis hoje. Estoque limitado.
          </p>
          
          <a 
            href={WHATSAPP_LINK}
            target="_blank" rel="noreferrer"
            className="inline-flex items-center justify-center gap-4 bg-brand-magenta text-white px-10 py-6 rounded-2xl font-display font-bold text-xl shadow-[0_10px_40px_rgba(225,29,72,0.4)] hover:shadow-[0_15px_50px_rgba(225,29,72,0.6)] hover:-translate-y-2 transition-all duration-300 w-full sm:w-auto"
          >
            <MessageCircle size={28} />
            CHAMAR AGORA
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-16 bg-[#040C1A] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <img src="/logo.png" alt="K Eletro Logo" className="h-12 w-auto object-contain mx-auto md:mx-0 mb-2" />
            <p className="text-gray-400 font-display font-bold text-sm uppercase tracking-widest">Outlet</p>
            <p className="text-gray-500 font-body text-sm mt-1">Atibaia — SP</p>
          </div>
          
          <div className="text-center md:text-right max-w-md">
            <p className="text-gray-400 font-body text-sm leading-relaxed mb-4">
              Produtos seminovos, revisados e com pequenas avarias.<br/>
              Garantia da loja em produtos selecionados.
            </p>
            <p className="text-xs text-gray-600 font-body">
              © {new Date().getFullYear()} K Eletro Outlet. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>

    </div>
  );
}

export default App;
