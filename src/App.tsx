import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MessageCircle, CheckCircle2, ShieldCheck, Tag, ShoppingBag, Truck, RefreshCcw, Star, MapPin, Clock, Phone, Instagram, Facebook } from 'lucide-react';

const WHATSAPP_NUMBER = '5511950522173';
const WHATSAPP_TEXT = encodeURIComponent('Olá! Vim pelo site e gostaria de saber sobre as ofertas do Outlet de Eletrodomésticos hoje.');
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_TEXT}`;

const WhatsappIcon = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M12.004 2C6.477 2 2 6.477 2 12.004c0 1.76.452 3.468 1.306 4.975L2 22l5.163-1.353A9.957 9.957 0 0012.004 22c5.523 0 10-4.477 10-10.004S17.527 2 12.004 2zM12.004 20.31a8.3 8.3 0 01-4.238-1.157l-.304-.18-3.149.826.84-3.072-.198-.314A8.288 8.288 0 013.684 12c0-4.588 3.733-8.32 8.32-8.32 4.586 0 8.318 3.732 8.318 8.32s-3.732 8.31-8.318 8.31zm4.568-6.223c-.25-.125-1.482-.732-1.712-.816-.23-.083-.398-.125-.565.125-.167.25-.648.816-.795.982-.147.167-.295.187-.545.062-1.045-.52-1.922-1.082-2.668-2.222-.192-.294.19-.272.678-1.25.083-.167.042-.315-.02-.44-.063-.125-.565-1.363-.774-1.867-.203-.491-.41-.424-.565-.432-.148-.007-.316-.008-.484-.008-.168 0-.441.063-.672.314-.23.25-.88 .86-.88 2.095 0 1.236.901 2.43 1.026 2.597.125.167 1.772 2.705 4.29 3.732.6.244 1.067.39 1.433.5.602.191 1.15.163 1.583.099.486-.073 1.482-.606 1.692-1.192.21-.586.21-1.087.147-1.192-.062-.104-.23-.167-.48-.292z"/>
  </svg>
);

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
      <header className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? '-translate-y-full opacity-0 pointer-events-none' : 'translate-y-0 opacity-100 bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex justify-between items-center">
          <div className="flex flex-col scale-[1.4] sm:scale-[1.8] md:scale-[2.2] origin-top-left z-50">
            <img src="/logo.png" alt="K Eletro Logo" className="h-8 sm:h-10 w-auto object-contain" />
            <span className="text-[7px] sm:text-[8px] uppercase tracking-widest text-gray-400 font-semibold mt-0.5">Outlet Premium</span>
          </div>
          
          <nav className="hidden md:flex gap-8 font-display text-sm font-medium text-gray-300 ml-auto">
            <a href="#hero" className="hover:text-white hover:text-brand-magenta transition-colors">Início</a>
            <a href="#categorias" className="hover:text-white hover:text-brand-magenta transition-colors">Produtos</a>
            <a href="#vantagens" className="hover:text-white hover:text-brand-magenta transition-colors">Vantagens</a>
            <a href="#comofunciona" className="hover:text-white hover:text-brand-magenta transition-colors">Como Funciona</a>
          </nav>
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
                Geladeiras, fogões, máquinas de lavar e eletros seminovos, revisados por preços <span className="font-bold text-white">muito abaixo do varejo</span>.
              </motion.p>

              <motion.div variants={fadeUp} className="flex flex-wrap gap-3 mb-10">
                <span className="badge-premium"><ShieldCheck size={16} className="text-brand-magenta" /> Garantia da Loja</span>
                <span className="badge-premium"><CheckCircle2 size={16} className="text-brand-magenta" /> Produtos Revisados</span>
                <span className="badge-premium"><ShoppingBag size={16} className="text-brand-magenta" /> Estoque de Saldo</span>
              </motion.div>
              
              <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4">
                <a 
                  href={WHATSAPP_LINK}
                  target="_blank" rel="noreferrer"
                  className="btn-primary px-8 py-4 sm:w-auto w-full text-base bg-[#25D366] hover:bg-[#1DA851] border-none shadow-[0_4px_14px_0_rgba(37,211,102,0.39)]"
                >
                  <WhatsappIcon size={22} />
                  CHAMAR NO WHATSAPP
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
      <section id="categorias" className="py-12 bg-brand-blue relative border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-4">
            <div>
              <h2 className="font-display text-3xl md:text-5xl font-bold text-white mb-4">Nossas Categorias</h2>
              <p className="text-gray-400 font-body text-lg">Encontre o eletrodoméstico perfeito para sua casa.</p>
            </div>
            <a href={WHATSAPP_LINK} className="text-brand-magenta font-display font-bold flex items-center gap-2 hover:text-white transition-colors">
              Ver Estoque Completo <ArrowRight size={20} />
            </a>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Geladeiras */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="ecommerce-card group lg:col-span-2 lg:row-span-2 min-h-[300px] lg:min-h-[420px]"
            >
              <img src="/imagens/geladeiraimg.jpg" alt="Geladeiras" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-b from-brand-blueDark/80 via-transparent to-brand-blueDark/80"></div>
              <div className="absolute inset-0 p-6 sm:p-8 flex flex-col justify-between z-10">
                <h3 className="font-display text-3xl md:text-4xl font-bold text-white drop-shadow-md">Geladeiras</h3>
                <div className="self-start mt-auto">
                  <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Olá! Vim pelo site e gostaria de saber mais sobre as geladeiras disponíveis.')}`} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] text-white px-6 py-3 rounded-lg font-display font-bold hover:bg-[#1DA851] transition-colors shadow-lg">
                    <WhatsappIcon size={18} /> Ver Produto
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Máquinas de Lavar */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="ecommerce-card group min-h-[200px]"
            >
              <img src="/imagens/mauina%20delavarimg.avif" alt="Máquinas de Lavar" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-b from-brand-blueDark/80 via-transparent to-brand-blueDark/80"></div>
              <div className="absolute inset-0 p-6 flex flex-col justify-between z-10">
                <h3 className="font-display text-2xl font-bold text-white drop-shadow-md">Máquinas de Lavar</h3>
                <div className="self-start mt-auto">
                  <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Olá! Vim pelo site e gostaria de saber mais sobre as máquinas de lavar disponíveis.')}`} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] text-white px-4 py-2 rounded-lg font-display text-sm font-bold hover:bg-[#1DA851] transition-colors shadow-md">
                    <WhatsappIcon size={16} /> Ver Produto
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Fogões */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="ecommerce-card group min-h-[200px]"
            >
              <img src="/imagens/fogoesimg.jpg" alt="Fogões" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-b from-brand-blueDark/80 via-transparent to-brand-blueDark/80"></div>
              <div className="absolute inset-0 p-6 flex flex-col justify-between z-10">
                <h3 className="font-display text-2xl font-bold text-white drop-shadow-md">Fogões</h3>
                <div className="self-start mt-auto">
                  <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Olá! Vim pelo site e gostaria de saber mais sobre os fogões disponíveis.')}`} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] text-white px-4 py-2 rounded-lg font-display text-sm font-bold hover:bg-[#1DA851] transition-colors shadow-md">
                    <WhatsappIcon size={16} /> Ver Produto
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Micro-ondas */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="ecommerce-card group min-h-[200px]"
            >
              <img src="/imagens/microondasimg.jpg" alt="Micro-ondas" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-b from-brand-blueDark/80 via-transparent to-brand-blueDark/80"></div>
              <div className="absolute inset-0 p-6 flex flex-col justify-between z-10">
                <h3 className="font-display text-2xl font-bold text-white drop-shadow-md">Micro-ondas</h3>
                <div className="self-start mt-auto">
                  <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Olá! Vim pelo site e gostaria de saber mais sobre os micro-ondas disponíveis.')}`} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] text-white px-4 py-2 rounded-lg font-display text-sm font-bold hover:bg-[#1DA851] transition-colors shadow-md">
                    <WhatsappIcon size={16} /> Ver Produto
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Eletroportáteis */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="ecommerce-card group relative overflow-hidden bg-white/5 flex flex-col"
            >
              <img src="/imagens/eletroportateis.jpg" alt="Eletroportáteis" className="w-full h-auto min-h-[250px] object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-b from-brand-blueDark/80 via-transparent to-brand-blueDark/80"></div>
              <div className="absolute inset-0 p-6 flex flex-col justify-between z-10">
                <h3 className="font-display text-2xl font-bold text-white drop-shadow-md">Eletroportáteis</h3>
                <div className="self-start mt-auto">
                  <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Olá! Vim pelo site e gostaria de saber mais sobre os eletroportáteis disponíveis.')}`} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] text-white px-4 py-2 rounded-lg font-display text-sm font-bold hover:bg-[#1DA851] transition-colors shadow-md">
                    <WhatsappIcon size={16} /> Ver Produto
                  </a>
                </div>
              </div>
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
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-12 text-center">Locação de Refrigeradores e Freezers Horizontal</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 auto-rows-[250px]">
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="col-span-2 row-span-2 rounded-2xl overflow-hidden relative group shadow-lg">
              <img src="/imagens/Refrigeradores%20e%20Freezers%20Horizontal1.avif" alt="Refrigeradores e Freezers" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-brand-blueDark/40 group-hover:bg-transparent transition-colors duration-500"></div>
            </motion.div>
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="rounded-2xl overflow-hidden relative group shadow-lg">
              <img src="/imagens/Refrigeradores%20e%20Freezers%20Horizontal2.jpg" alt="Refrigerador Horizontal" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            </motion.div>
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="rounded-2xl overflow-hidden relative group shadow-lg">
              <img src="/imagens/Refrigeradores%20e%20Freezers%20Horizontal3.jpg" alt="Freezer" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            </motion.div>
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="col-span-2 rounded-2xl overflow-hidden relative group shadow-lg">
              <img src="/imagens/Refrigeradores%20e%20Freezers%20Horizontal1.avif" alt="Equipamentos para Locação" className="w-full h-full object-cover object-bottom group-hover:scale-105 transition-transform duration-700" />
            </motion.div>
          </div>

          <div className="mt-12 flex justify-center">
            <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Olá! Gostaria de saber mais sobre o serviço de aluguel de refrigeradores e freezers horizontais.')}`} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-3 bg-[#25D366] text-white px-8 py-4 rounded-xl font-display font-bold text-lg shadow-[0_10px_20px_rgba(37,211,102,0.3)] hover:shadow-[0_15px_30px_rgba(37,211,102,0.5)] hover:-translate-y-1 transition-all duration-300">
              <WhatsappIcon size={24} />
              ALUGAR AGORA
            </a>
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
            className="inline-flex items-center justify-center gap-4 bg-[#25D366] text-white px-10 py-6 rounded-2xl font-display font-bold text-xl shadow-[0_10px_40px_rgba(37,211,102,0.4)] hover:shadow-[0_15px_50px_rgba(37,211,102,0.6)] hover:-translate-y-2 transition-all duration-300 w-full sm:w-auto"
          >
            <WhatsappIcon size={28} />
            CHAMAR AGORA
          </a>
        </div>
      </section>

      {/* FOOTER COMPLETO */}
      <footer className="pt-20 pb-10 bg-[#020611] border-t border-white/5 relative overflow-hidden">
        {/* Glow effect na borda superior */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-px bg-gradient-to-r from-transparent via-brand-magenta/50 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Coluna 1: Sobre */}
          <div>
            <img src="/logo.png" alt="K Eletro Logo" className="h-10 w-auto object-contain mb-6" />
            <p className="text-gray-400 font-body text-sm leading-relaxed mb-6">
              Sua melhor opção em eletrodomésticos premium seminovos, revisados e com preços imperdíveis de outlet. Qualidade e economia garantidas.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-brand-magenta hover:text-white transition-all hover:scale-110">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-brand-magenta hover:text-white transition-all hover:scale-110">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Coluna 2: Links Rápidos */}
          <div>
            <h4 className="text-white font-display font-bold text-lg mb-6">Links Rápidos</h4>
            <ul className="space-y-4 font-body text-sm text-gray-400">
              <li><a href="#hero" className="hover:text-brand-magenta transition-colors">Início</a></li>
              <li><a href="#categorias" className="hover:text-brand-magenta transition-colors">Nossos Produtos</a></li>
              <li><a href="#vantagens" className="hover:text-brand-magenta transition-colors">Por que comprar conosco?</a></li>
              <li><a href="#comofunciona" className="hover:text-brand-magenta transition-colors">Como Funciona</a></li>
            </ul>
          </div>

          {/* Coluna 3: Categorias */}
          <div>
            <h4 className="text-white font-display font-bold text-lg mb-6">Categorias</h4>
            <ul className="space-y-4 font-body text-sm text-gray-400">
              <li><a href={WHATSAPP_LINK} className="hover:text-brand-magenta transition-colors">Geladeiras</a></li>
              <li><a href={WHATSAPP_LINK} className="hover:text-brand-magenta transition-colors">Máquinas de Lavar</a></li>
              <li><a href={WHATSAPP_LINK} className="hover:text-brand-magenta transition-colors">Fogões & Micro-ondas</a></li>
              <li><a href={WHATSAPP_LINK} className="hover:text-brand-magenta transition-colors">Eletroportáteis</a></li>
              <li><a href={WHATSAPP_LINK} className="hover:text-brand-magenta transition-colors">Locação de Freezers</a></li>
            </ul>
          </div>

          {/* Coluna 4: Contato & Local */}
          <div>
            <h4 className="text-white font-display font-bold text-lg mb-6">Contato e Local</h4>
            <ul className="space-y-4 font-body text-sm text-gray-400">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-brand-magenta shrink-0 mt-0.5" />
                <span>Atibaia — SP<br/><span className="text-xs text-gray-500">(Apenas retirada no local)</span></span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-[#25D366] shrink-0" />
                <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className="hover:text-white transition-colors font-medium">+55 11 95052-2173</a>
              </li>
              <li className="flex items-start gap-3">
                <Clock size={18} className="text-brand-magenta shrink-0 mt-0.5" />
                <span>Seg a Sex: 09h às 18h<br/>Sábados: 09h às 14h</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Barra Inferior */}
        <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-600 font-body text-center md:text-left">
            © {new Date().getFullYear()} K Eletro Outlet. Todos os direitos reservados.
          </p>
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6 text-xs text-gray-600 font-body">
            <a href="https://camaly.com.br/" target="_blank" rel="noreferrer" className="flex items-center gap-1 hover:text-white transition-colors">
              Produzida com <span className="text-red-500 text-[10px]">❤️</span> por <span className="font-bold tracking-widest text-gray-400 hover:text-white">CAMALY</span>
            </a>
            <div className="hidden md:block w-px h-3 bg-white/10"></div>
            <div className="flex gap-4">
              <a href="#" className="hover:text-brand-magenta transition-colors">Termos de Uso</a>
              <a href="#" className="hover:text-brand-magenta transition-colors">Política de Privacidade</a>
            </div>
          </div>
        </div>
      </footer>

      {/* BOTÃO FLUTUANTE DO WHATSAPP */}
      <a 
        href={WHATSAPP_LINK}
        target="_blank" rel="noreferrer"
        className="fixed bottom-6 right-6 z-[99] bg-[#25D366] text-white p-4 rounded-full shadow-[0_4px_14px_0_rgba(37,211,102,0.5)] hover:shadow-[0_6px_20px_rgba(37,211,102,0.7)] hover:-translate-y-1 hover:scale-110 transition-all duration-300"
        aria-label="Falar no WhatsApp"
      >
        <WhatsappIcon size={32} />
      </a>

    </div>
  );
}

export default App;
