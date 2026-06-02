import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircleFill, ShieldCheck, TagFill, BagFill, Truck, ArrowRepeat, StarFill, GeoAltFill, ClockFill, TelephoneFill, Whatsapp, Instagram, Facebook, CreditCardFill, ArrowLeftRight } from 'react-bootstrap-icons';

const WHATSAPP_NUMBER = '5511950522173';
const WHATSAPP_TEXT = encodeURIComponent('Olá! Vim pelo site e gostaria de saber sobre as ofertas do Outlet de Eletrodomésticos hoje.');
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_TEXT}`;

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const carouselItems = [
    { type: 'image', src: '/fotos/img1.jpeg' },
    { type: 'image', src: '/fotos/img2.jpeg' },
    { type: 'video', src: '/fotos/img3.mp4' },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselItems.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [carouselItems.length]);

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
      <header className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? '-translate-y-full opacity-0 pointer-events-none' : 'translate-y-0 opacity-100 bg-brand-blue py-8 md:py-6'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex justify-center md:justify-between items-center">
          <div className="flex flex-col scale-[5.0] sm:scale-[5.5] md:scale-[5.0] origin-top md:origin-top-left z-50 -mt-[140px] md:-mt-[150px]">
            <img src="/logo leo1.png" alt="Logo Leo 1" className="h-10 sm:h-12 md:h-10 w-auto object-contain" />
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
        
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 w-full relative z-20">
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
                Eletrodomésticos com <span className="text-brand-magenta">Preços de Outlet</span>
              </motion.h1>
              
              <motion.p variants={fadeUp} className="text-lg md:text-xl text-gray-300 font-body leading-relaxed mb-8 max-w-xl">
                Geladeiras, fogões, máquinas de lavar e eletros com pequenas avarias, revisados com garantia por preços <span className="font-bold text-white">abaixo do varejo</span>.
              </motion.p>

              <motion.div variants={fadeUp} className="flex flex-wrap gap-3 mb-10">
                <span className="badge-premium"><ShieldCheck size={16} className="text-brand-magenta" /> Garantia de Loja e Fábrica</span>
                <span className="badge-premium"><CheckCircleFill size={16} className="text-brand-magenta" /> Produtos Revisados</span>
                <span className="badge-premium"><BagFill size={16} className="text-brand-magenta" /> Estoque de Saldo</span>
              </motion.div>
              
              <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4">
                <a 
                  href={WHATSAPP_LINK}
                  target="_blank" rel="noreferrer"
                  className="btn-primary px-8 py-4 sm:w-auto w-full text-base bg-[#25D366] hover:bg-[#1DA851] border-none shadow-[0_4px_14px_0_rgba(37,211,102,0.39)]"
                >
                  <Whatsapp size={22} />
                  CHAMAR NO WHATSAPP
                </a>
              </motion.div>
            </motion.div>

            {/* Direita: Imagem Realista Sem Overlay */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative w-[95%] sm:w-[85%] md:w-[65%] lg:w-[60%] mx-auto rounded-3xl lg:rounded-[2rem] overflow-hidden shadow-2xl border border-white/10 mt-8 lg:mt-0 flex"
            >
              <video 
                src="/fotos/img3.mp4" 
                autoPlay 
                loop 
                muted 
                playsInline
                className="w-full h-auto block"
              />
            </motion.div>

          </div>
        </div>
      </section>

      {/* VISITE NOSSA LOJA - MAPA E FOTOS */}
      <section className="py-12 bg-brand-blueDark relative border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center mb-10">
            <h2 className="font-display text-3xl md:text-5xl font-bold text-white mb-4">Visite Nossa Loja</h2>
            <p className="text-gray-400 font-body text-lg">Conheça nosso espaço e veja de perto nossos produtos.</p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Mapa */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl h-[400px]"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117565.1764615469!2d-46.6347895!3d-23.1166687!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cec15ac1e23a4b%3A0xc66579fc2c4b5722!2sAtibaia%2C%20SP!5e0!3m2!1spt-BR!2sbr!4v1717282800000!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mapa de Atibaia"
              ></iframe>
            </motion.div>

            {/* Carrossel */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl h-[400px] relative bg-black flex items-center justify-center"
            >
              {carouselItems.map((item, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
                >
                  {item.type === 'image' ? (
                    <img src={item.src} alt={`Slide ${index + 1}`} className="w-full h-full object-cover" />
                  ) : (
                    <video src={item.src} autoPlay loop muted playsInline className="w-full h-full object-cover" />
                  )}
                </div>
              ))}
              
              {/* Controles do carrossel */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                {carouselItems.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${index === currentSlide ? 'bg-brand-magenta' : 'bg-white/50 hover:bg-white'}`}
                    aria-label={`Ir para o slide ${index + 1}`}
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CATEGORIAS - ECOMMERCE PREMIUM */}
      <section id="categorias" className="py-12 bg-brand-blue relative border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
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
              className="ecommerce-card group relative overflow-hidden"
            >
              <img src="/geladeira1.jpeg" alt="Geladeiras" className="w-full h-auto block group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-b from-brand-blueDark/80 via-transparent to-brand-blueDark/80"></div>
              <div className="absolute inset-0 p-6 sm:p-8 flex flex-col justify-between z-10">
                <h3 className="font-display text-3xl md:text-4xl font-bold text-white drop-shadow-md">Geladeiras</h3>
                <div className="self-start mt-auto">
                  <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Olá! Vim pelo site e gostaria de saber mais sobre as geladeiras disponíveis.')}`} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] text-white px-4 sm:px-6 py-3 rounded-lg font-display font-bold hover:bg-[#1DA851] transition-colors shadow-lg">
                    <Whatsapp size={18} /> Ver Produto
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
              <img src="/fotos/Maquinadelavar.jpeg" alt="Máquinas de Lavar" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-b from-brand-blueDark/80 via-transparent to-brand-blueDark/80"></div>
              <div className="absolute inset-0 p-6 flex flex-col justify-between z-10">
                <h3 className="font-display text-2xl font-bold text-white drop-shadow-md">Máquinas de Lavar</h3>
                <div className="self-start mt-auto">
                  <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Olá! Vim pelo site e gostaria de saber mais sobre as máquinas de lavar disponíveis.')}`} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] text-white px-4 py-2 rounded-lg font-display text-sm font-bold hover:bg-[#1DA851] transition-colors shadow-md">
                    <Whatsapp size={16} /> Ver Produto
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
              <img src="/fotos/fogao.jpeg" alt="Fogões" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-b from-brand-blueDark/80 via-transparent to-brand-blueDark/80"></div>
              <div className="absolute inset-0 p-6 flex flex-col justify-between z-10">
                <h3 className="font-display text-2xl font-bold text-white drop-shadow-md">Fogões</h3>
                <div className="self-start mt-auto">
                  <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Olá! Vim pelo site e gostaria de saber mais sobre os fogões disponíveis.')}`} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] text-white px-4 py-2 rounded-lg font-display text-sm font-bold hover:bg-[#1DA851] transition-colors shadow-md">
                    <Whatsapp size={16} /> Ver Produto
                  </a>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="flex flex-col md:flex-row justify-center gap-4 mt-4 lg:*:w-[calc(33.333%-0.66rem)] md:*:w-[calc(50%-0.5rem)] *:w-full">
            {/* Micro-ondas */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="ecommerce-card group min-h-[200px]"
            >
              <img src="/fotos/microondas.jpeg" alt="Micro-ondas" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-b from-brand-blueDark/80 via-transparent to-brand-blueDark/80"></div>
              <div className="absolute inset-0 p-6 flex flex-col justify-between z-10">
                <h3 className="font-display text-2xl font-bold text-white drop-shadow-md">Micro-ondas</h3>
                <div className="self-start mt-auto">
                  <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Olá! Vim pelo site e gostaria de saber mais sobre os micro-ondas disponíveis.')}`} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] text-white px-4 py-2 rounded-lg font-display text-sm font-bold hover:bg-[#1DA851] transition-colors shadow-md">
                    <Whatsapp size={16} /> Ver Produto
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
              <img src="/fotos/eletronicos.jpeg" alt="Eletroportáteis" className="w-full h-auto min-h-[250px] object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-b from-brand-blueDark/80 via-transparent to-brand-blueDark/80"></div>
              <div className="absolute inset-0 p-6 flex flex-col justify-between z-10">
                <h3 className="font-display text-2xl font-bold text-white drop-shadow-md">Eletroportáteis</h3>
                <div className="self-start mt-auto">
                  <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Olá! Vim pelo site e gostaria de saber mais sobre os eletroportáteis disponíveis.')}`} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] text-white px-4 py-2 rounded-lg font-display text-sm font-bold hover:bg-[#1DA851] transition-colors shadow-md">
                    <Whatsapp size={16} /> Ver Produto
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* VANTAGENS - POR QUE COMPRAR */}
      <section id="vantagens" className="py-24 bg-brand-blueDark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">Por que comprar na K Eletro?</h2>
            <p className="text-gray-400 font-body text-lg">Os eletrodomésticos passam por análise técnica e testes</p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: <ShieldCheck size={32} />, title: "Produtos Revisados", desc: "Todos os produtos passam por análise técnica rigorosa." },
              { icon: <TagFill size={32} />, title: "Economia", desc: "Preços abaixo do varejo on-line" },
              { icon: <StarFill size={32} />, title: "Garantia", desc: "Produtos com garantia da loja e ou fábrica" },
              { icon: <CreditCardFill size={32} />, title: "Pagamento Facilitado", desc: "Parcelamento em até 10x no cartão" },
              { icon: <ArrowLeftRight size={32} />, title: "Troca", desc: "Aceitamos sua antiga geladeira na troca (sujeito a análise)" },
              { icon: <BagFill size={32} />, title: "Outlet de Verdade", desc: "Pequenas avarias estéticas com grandes descontos." },
              { icon: <ArrowRepeat size={32} />, title: "Estoque Rotativo", desc: "Novas oportunidades e ofertas toda semana." }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`bg-brand-blue/50 border border-white/5 p-8 rounded-2xl hover:bg-brand-blue hover:border-brand-magenta/30 transition-colors ${i === 6 ? 'sm:col-span-2 lg:col-span-1 lg:col-start-2 sm:w-[calc(50%-12px)] lg:w-full sm:justify-self-center' : ''}`}
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-12 text-center">Locação de Refrigeradores e Freezers Horizontal</h2>
          
          <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6 *:w-[calc(50%-0.5rem)] md:*:w-[calc(33.333%-1rem)] lg:*:max-w-[320px]">
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="rounded-2xl overflow-hidden relative group shadow-lg flex">
              <img src="/fotos/aluguel1.jpeg" alt="Refrigeradores e Freezers" className="w-full h-auto block group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-brand-blueDark/40 group-hover:bg-transparent transition-colors duration-500"></div>
            </motion.div>
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="rounded-2xl overflow-hidden relative group shadow-lg flex">
              <img src="/fotos/aluguel2.jpeg" alt="Refrigerador Horizontal" className="w-full h-auto block group-hover:scale-105 transition-transform duration-700" />
            </motion.div>
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="rounded-2xl overflow-hidden relative group shadow-lg flex">
              <img src="/fotos/aluguel3.jpeg" alt="Freezer" className="w-full h-auto block group-hover:scale-105 transition-transform duration-700" />
            </motion.div>
          </div>

          <div className="mt-12 flex justify-center">
            <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Olá! Gostaria de saber mais sobre o serviço de aluguel de refrigeradores e freezers horizontais.')}`} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-3 bg-[#25D366] text-white px-8 py-4 rounded-xl font-display font-bold text-lg shadow-[0_10px_20px_rgba(37,211,102,0.3)] hover:shadow-[0_15px_30px_rgba(37,211,102,0.5)] hover:-translate-y-1 transition-all duration-300">
              <Whatsapp size={24} />
              ALUGAR AGORA
            </a>
          </div>
        </div>
      </section>

      {/* AVISOS IMPORTANTES */}
      <section className="py-24 bg-brand-blueDark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-12 flex flex-col gap-6">
          <div className="bg-[#e11d48]/10 border border-[#e11d48]/30 rounded-2xl p-6 text-center flex flex-col md:flex-row items-center justify-center gap-4 shadow-lg">
            <Truck size={32} className="text-[#e11d48] shrink-0" />
            <div className="text-left">
              <span className="block text-white font-display font-bold text-lg">Atenção Importante:</span>
              <span className="text-[#e11d48] font-body font-medium">Não fazemos entrega. A retirada deve ser realizada diretamente em nossa loja em Atibaia-SP.</span>
            </div>
          </div>

          <div className="bg-[#e11d48]/10 border border-[#e11d48]/30 rounded-2xl p-6 text-center flex flex-col md:flex-row items-center justify-center gap-4 shadow-lg">
            <BagFill size={32} className="text-[#e11d48] shrink-0" />
            <div className="text-left">
              <span className="block text-white font-display font-bold text-lg">Aviso de Vendas:</span>
              <span className="text-[#e11d48] font-body font-medium">Não realizamos vendas on-line. A finalização da compra deve ser feita presencialmente.</span>
            </div>
          </div>
        </div>
      </section>


      {/* FOOTER COMPLETO */}
      <footer className="pt-12 pb-8 bg-brand-blue border-t border-white/5 relative overflow-hidden">
        {/* Glow effect na borda superior */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-px bg-gradient-to-r from-transparent via-brand-magenta/50 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Coluna 1: Sobre */}
          <div>
            <img src="/logo leo1.png" alt="Logo Leo" className="h-24 sm:h-32 md:h-40 w-auto object-contain mb-4" />
            <div className="text-white font-body text-sm leading-relaxed">
              <p className="font-bold text-white">Kuniyoshi Eletro LTDA</p>
              <p>CNPJ: 36.419.360/0001-70</p>
              <p className="mt-2 text-brand-magenta font-semibold">Desde 2020</p>
            </div>
          </div>

          {/* Coluna 2: Links Rápidos */}
          <div>
            <h4 className="text-white font-display font-bold text-lg mb-6">Links Rápidos</h4>
            <ul className="space-y-4 font-body text-sm text-white/90">
              <li><a href="#hero" className="hover:text-brand-magenta transition-colors">Início</a></li>
              <li><a href="#categorias" className="hover:text-brand-magenta transition-colors">Nossos Produtos</a></li>
              <li><a href="#vantagens" className="hover:text-brand-magenta transition-colors">Por que comprar conosco?</a></li>
              <li><a href="#comofunciona" className="hover:text-brand-magenta transition-colors">Como Funciona</a></li>
            </ul>
          </div>

          {/* Coluna 3: Categorias */}
          <div>
            <h4 className="text-white font-display font-bold text-lg mb-6">Categorias</h4>
            <ul className="space-y-4 font-body text-sm text-white/90">
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
            <ul className="space-y-4 font-body text-sm text-white/90">
              <li className="flex items-start gap-3">
                <GeoAltFill size={18} className="text-brand-magenta shrink-0 mt-0.5" />
                <span>
                  Praça Pio XII 72, Jardim Brasil<br/>
                  Atibaia - SP<br/>
                  CEP: 12940-160
                </span>
              </li>
              <li className="flex items-center gap-3">
                <TelephoneFill size={18} className="text-[#25D366] shrink-0" />
                <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className="hover:text-white transition-colors font-medium">+55 11 95052-2173</a>
              </li>
              <li className="flex items-start gap-3">
                <ClockFill size={18} className="text-brand-magenta shrink-0 mt-0.5" />
                <span>Segunda a Sexta: 9:30h às 18h<br/>Sábados: 9:30h às 14h</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Barra Inferior */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/70 font-body text-center md:text-left">
            © {new Date().getFullYear()} K Eletro Outlet. Todos os direitos reservados.
          </p>
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6 text-xs text-white/70 font-body">
            <a href="https://camaly.com.br/" target="_blank" rel="noreferrer" className="flex items-center gap-1 hover:text-white transition-colors">
              Produzida com <span className="text-green-500 text-[10px]">💚</span> por <span className="font-bold tracking-widest text-white hover:text-white/80">CAMALY</span>
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
        <Whatsapp size={32} />
      </a>

    </div>
  );
}

export default App;
