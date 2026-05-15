import { motion } from 'motion/react';
import { Instagram, Send, Star, MapPin, Phone, Mail, ChevronRight, Menu, X, Baby, Users, Camera, Palette } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Analytics } from '@vercel/analytics/react'; // <-- AQUI ESTÁ A TUA ANTENA DO VERCEL

const COLORS = {
  bg: '#EBDFD6',
  light: '#F9F7F5',
  dark: '#5F4B39',
  accent: '#A38065',
  gold: '#BE9E70',
};

const IMAGES = {
  hero: 'https://www.dropbox.com/scl/fi/qmadk4pvxzodjcmnb57fn/DSCF9023-1.jpg?rlkey=vorzvkd9q392049w8n2bjiimt&st=mspc8e5m&raw=1',
  profile: 'https://www.dropbox.com/scl/fi/bxpr1zf9h95yg79mynr0w/motion_photo_8482571686111546032.jpg?rlkey=hflxddfmseso1rvbayek1x7yx&st=vne585qz&raw=1',
  portfolio:[
    { url: 'https://www.dropbox.com/scl/fi/vo6wufruk809a1p4lpvmb/1-PHOT9323.jpg?rlkey=lpgaim6egffgjq1l6nf11ro3u&st=3x7ppc39&raw=1', alt: 'Sessão Infantil' },
    { url: 'https://www.dropbox.com/scl/fi/ryw0tvfa3gdkvml1cffhv/3-PHOT9339.jpg?rlkey=9kdro9xqj22ikons1jk8e5k1s&st=uu4kojck&raw=1', alt: 'Maternidade casal praia' },
    { url: 'https://www.dropbox.com/scl/fi/0usbjrfoqrftohwhi55dl/4-PHOT9347.jpg?rlkey=zixg5rlbvx3lgm0vv6n39d8s2&st=10x34re6&raw=1', alt: 'Família no parque' },
    { url: 'https://www.dropbox.com/scl/fi/9ut3phvmslizl1w2zl6pz/5-joizinha3.jpg?rlkey=9o5fyxgtik9ke56m8d4ht1jpz&st=mfubfdqg&raw=1', alt: 'Meninas fundo vermelho' },
    { url: 'https://www.dropbox.com/scl/fi/y2y43ketf0px4kvnlatpa/6-PHOT9358.jpg?rlkey=9d1oj2x0gmhrjbh1csf6s9h0x&st=2pkpelzh&raw=1', alt: 'Menino com chupeta' },
    { url: 'https://www.dropbox.com/scl/fi/23xvsp50l5n5t09degqkr/7-PHOT9362.jpg?rlkey=6zmm3lhmcydm95v5jkyhlj99e&st=55e23r1f&raw=1', alt: 'Maternidade jardim' },
    { url: 'https://www.dropbox.com/scl/fi/qotq3txgg8eootd92tfvk/9-PHOT9371.jpg?rlkey=jysmjyy48ucdtnm8jxca7e5ti&st=zolsfjdj&raw=1', alt: 'Sessão Lifestyle' },
    { url: 'https://www.dropbox.com/scl/fi/eytfu6kfejqov3m0m68z8/11-PHOT9378.jpg?rlkey=k6v8h2z1fq9uzjcpsgur6csgt&st=t6mm45az&raw=1', alt: 'Momentos em Família' },
    { url: 'https://www.dropbox.com/scl/fi/7z2phat9s61oph78a6qul/12-PHOT9383.jpg?rlkey=ejaduy9nfh5a0ndd3oft0wm6n&st=2bglrtbr&raw=1', alt: 'Retrato Infantil' },
    { url: 'https://www.dropbox.com/scl/fi/rm5c5p1wkmb5ijl6mmfn9/13-PHOT9390.jpg?rlkey=gmhdzwvld5g881noquudaxwjk&st=aubsdnuq&raw=1', alt: 'Detalhes' },
    { url: 'https://www.dropbox.com/scl/fi/b4648g8go385i3kq3jvsa/15-PHOT9409.jpg?rlkey=fmiadc05qk4f0qdbzynf0a2d6&st=ydqkzeec&raw=1', alt: 'Natureza e Harmonia' },
    { url: 'https://www.dropbox.com/scl/fi/tvwsnzp45ujxvpx6h99un/23-PHOT9530.jpg?rlkey=utxv2ccbrobt48gytitv4q5sm&st=f9x27y28&raw=1', alt: 'Pôr do Sol' },
    { url: 'https://www.dropbox.com/scl/fi/8mruefcdnsqqqlw9ivwfc/24-PHOT9531.jpg?rlkey=yu9qip4mliwpv68nux668tk48&st=0h1c7fau&raw=1', alt: 'Inocência' },
    { url: 'https://www.dropbox.com/scl/fi/35xg0etx06zh1h08m3mmy/26-PHOT9545.jpg?rlkey=43sgpsj67pkupiyt72v6etdr0&st=mmqaqgaw&raw=1', alt: 'Brincadeiras' },
    { url: 'https://www.dropbox.com/scl/fi/1k0ux29cjc26ffhyjxlgz/49-DSCF9532.jpg?rlkey=yg8pz46kwg056of0poha6y3r3&st=t2g1dbbq&raw=1', alt: 'Olhares' },
    { url: 'https://www.dropbox.com/scl/fi/1r0hpeit7rhogl982ernu/52-DSCF9673.jpg?rlkey=9v3i0qxu0uai87z4w3wpz2oe5&st=qu14r57f&raw=1', alt: 'Essência' },
    { url: 'https://www.dropbox.com/scl/fi/vfyv3rypzbhx2lm8o3n9l/27-PHOT9548.jpg?rlkey=js5skla5uvnfwsdb1wfzdwflk&st=gi3tcf1i&raw=1', alt: 'Captura' },
    { url: 'https://www.dropbox.com/scl/fi/4svls32htzftum00q5zc5/10-joizinha1-1.jpg?rlkey=yhrsn548cgfxkoer0ht8dg56z&st=hprpdt7c&raw=1', alt: 'Espontaneidade' },
    { url: 'https://www.dropbox.com/scl/fi/it2rfrebxpqm80246zz4m/8-1000142998-1.jpg?rlkey=8qwdd8qmqzmswxmoy39hwxyl0&st=lxk3zlu8&raw=1', alt: 'Carinho' },
    { url: 'https://www.dropbox.com/scl/fi/0brl9b5mkolg64s2b98j3/7-DSCF9099-1.jpg?rlkey=rsiqse2jgf0sk5hmaf8lzkkw6&st=kq1totwe&raw=1', alt: 'Serenidade' },
    { url: 'https://www.dropbox.com/scl/fi/nxqyvdx9pz7b5pfjpgniq/9-DSCF9089-1.jpg?rlkey=8hjqxzdhdbjpjkyg2yhgvcmzd&st=milhzppg&raw=1', alt: 'União' },
    { url: 'https://www.dropbox.com/scl/fi/ne33d96kh96lhy888li3j/17-PHOT9437.jpg?rlkey=wsekbsh618sttl5jgqd8u3pjh&st=woz600ey&raw=1', alt: 'Descoberta' },
    { url: 'https://www.dropbox.com/scl/fi/grenumg6thkpqqialjn7k/11-DSCF8983-1.jpg?rlkey=6bcuqphw2ir5sdf658fzt9fml&st=o3b1ce8h&raw=1', alt: 'Retrato Final' },
    { url: 'https://www.dropbox.com/scl/fi/6lyd2auh7n4yqygtrqgy7/DSCF9002-1.jpg?rlkey=lnuchr1h0ad5m43y7ab0vd515&st=jsdtt9cf&raw=1', alt: 'Sessão Materna' },
  ]
};

export default function App() {
  const[isMenuOpen, setIsMenuOpen] = useState(false);
  const[scrolled, setScrolled] = useState(false);
  const[formSubmitted, setFormSubmitted] = useState(false);
  const[openFaq, setOpenFaq] = useState<number | null>(null);
  
  // Banner de Cookies
  const[showCookieBanner, setShowCookieBanner] = useState(false);

  const PROMO_END_DATE = new Date('2026-05-21T00:00:00');
  const showPromo = new Date() < PROMO_END_DATE;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    
    // Verifica cookies
    const cookiesAceites = localStorage.getItem('cookiesAceites');
    if (!cookiesAceites) {
      setShowCookieBanner(true);
    }

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleAcceptCookies = () => {
    localStorage.setItem('cookiesAceites', 'true');
    setShowCookieBanner(false);
  };

  const navLinks =[
    { name: 'Sobre', href: '#sobre' },
    { name: 'Serviços', href: '#servicos' },
    { name: 'Preços', href: '#precos' },
    { name: 'Portfólio', href: '#portfolio' },
    { name: 'Agendar', href: '#agendamento' },
  ];

  const handleFormSubmit = async (e: any) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);

    try {
      const response = await fetch('https://formspree.io/f/xaqvbzqk', {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      });

      if (response.ok) {
        setFormSubmitted(true);
        form.reset();
      } else {
        alert('Ups! Houve um problema ao enviar o formulário. Tente novamente.');
      }
    } catch (error) {
      alert('Ups! Houve um erro de ligação. Verifique a sua internet e tente novamente.');
    }
  };

  return (
    <div className="min-h-screen selection:bg-brand-dark/20 selection:text-brand-dark relative">
      
      {/* BANNER DE COOKIES */}
      {showCookieBanner && (
        <motion.div 
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="fixed bottom-0 left-0 w-full bg-brand-dark border-t border-brand-accent/30 p-4 z-[9999] flex flex-col sm:flex-row items-center justify-center sm:justify-between gap-4 shadow-2xl"
        >
          <p className="text-[12px] md:text-[14px] text-brand-light font-medium text-center sm:text-left">
            Utilizamos cookies para garantir que tem a melhor experiência no nosso site.
          </p>
          <button 
            onClick={handleAcceptCookies}
            className="bg-brand-accent text-white px-8 py-3 text-[11px] uppercase tracking-widest hover:bg-brand-light hover:text-brand-dark transition-colors font-bold"
          >
            Aceitar e Fechar
          </button>
        </motion.div>
      )}

      {/* WhatsApp Float MELHORADO */}
      <motion.a
        href="https://wa.me/351964552241?text=Olá%20Joicelina!%20Estive%20a%20ver%20o%20teu%20portfólio%20e%20gostaria%20de%20saber%20mais%20informações."
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-20 right-8 z-[100] bg-[#25D366] text-white p-4 rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ y: -5 }}
      >
        <Phone className="w-6 h-6 fill-white" />
      </motion.a>

      {/* Header */}
      <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 border-b ${scrolled ? 'bg-brand-bg/95 backdrop-blur-md py-3 border-brand-dark/10' : 'bg-brand-bg py-5 border-transparent'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <a href="#inicio" className="flex flex-col items-center group">
            <span className="font-serif text-3xl leading-none group-hover:tracking-widest transition-all duration-700 text-brand-dark">JP</span>
            <span className="font-serif text-[10px] uppercase tracking-[0.3em] font-medium mt-1 text-brand-dark">Joicelina Pedro</span>
            <span className="text-[7px] uppercase tracking-[0.5em] opacity-60 text-brand-dark">Photography</span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-12 items-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[11px] uppercase tracking-[0.2em] font-medium hover:text-brand-accent transition-colors relative group text-brand-dark"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-brand-accent transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
            <a
              href="#agendamento"
              className="bg-brand-accent text-white px-8 py-3 text-[11px] uppercase tracking-widest hover:bg-brand-dark transition-colors"
            >
              Marcar
            </a>
          </nav>

          {/* Mobile Toggle */}
          <button className="md:hidden text-brand-dark" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute top-full left-0 w-full bg-brand-bg border-b border-brand-dark/10 md:hidden flex flex-col p-8 gap-6 shadow-xl"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-[12px] uppercase tracking-[0.2em] font-medium text-brand-dark"
              >
                {link.name}
              </a>
            ))}
          </motion.div>
        )}
      </header>

      {/* Hero */}
      <section id="inicio" className="pt-32 pb-20 px-6 container mx-auto">
        <motion.div
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="relative h-[80vh] w-full overflow-hidden"
        >
          <img
            src={IMAGES.hero}
            alt="Joicelina Pedro Photography"
            className="w-full h-full object-cover grayscale-[0.1] contrast-[1.05]"
          />
          <div className="absolute inset-0 bg-brand-dark/20" />
          
          <div className="absolute top-12 left-0 right-0 flex justify-center">
            <motion.span 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-[10px] md:text-[12px] uppercase tracking-[0.5em] text-white/90 font-medium"
            >
              Fotografia & Design Editorial
            </motion.span>
          </div>

          <div className="absolute inset-0 flex items-center justify-center text-center px-6">
             <div className="max-w-4xl">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                >
                  <a href="#portfolio" className="inline-block border border-white/30 text-white px-12 py-5 text-[11px] uppercase tracking-widest hover:bg-white hover:text-brand-dark transition-all backdrop-blur-sm">
                    Explorar Portfólio
                  </a>
                </motion.div>
             </div>
          </div>
        </motion.div>

        <div className="max-w-4xl mx-auto text-center mt-16">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl mb-8 leading-tight font-serif text-brand-dark"
          >
            Transformamos momentos em <br />
            <span className="italic">memórias eternas.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl mb-6 text-brand-dark font-sans"
          >
            Fotografia feita com carinho, naturalidade e profissionalismo para famílias, crianças, batizados e momentos especiais.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="max-w-3xl mx-auto text-[15px] leading-relaxed opacity-80 mb-10 text-brand-dark font-medium"
          >
            A Joicelina Pedro Photography nasceu com o objetivo de capturar momentos reais de forma leve, natural e emocional. Cada ensaio é pensado para que as pessoas se sintam confortáveis, confiantes e verdadeiramente elas mesmas.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-6 justify-center"
          >
            <a href="#agendamento" className="bg-brand-accent text-white px-10 py-5 text-[12px] uppercase tracking-widest hover:bg-brand-dark border border-brand-accent transition-all duration-300 font-medium">
              Marcar Ensaio
            </a>
            <a href="https://instagram.com/JoicelinaPedroPhotography" target="_blank" className="flex items-center justify-center gap-3 border border-brand-dark px-10 py-5 text-[12px] uppercase tracking-widest hover:bg-brand-dark hover:text-brand-light transition-all duration-300 text-brand-dark font-medium">
              <Instagram size={18} /> Ver Instagram
            </a>
          </motion.div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-24 px-6 md:px-0 bg-brand-bg overflow-hidden">
        <div className="container mx-auto">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 1.05 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5 }}
              className="relative aspect-video bg-brand-dark/5 overflow-hidden shadow-2xl"
            >
              <video
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover grayscale-[0.2] scale-[1.1]"
              >
                <source src="https://www.dropbox.com/scl/fi/1v4p2fxm7pzl14sr071w1/0507-1.mp4?rlkey=ahy2ydysccoqe5qhaynpvh6eb&st=i3vhmwob&raw=1" type="video/mp4" />
                O seu navegador não suporta a tag de vídeo.
              </video>
              <div className="absolute inset-0 bg-brand-dark/10" />
              <div className="absolute top-6 right-8">
                 <span className="font-serif text-3xl text-white/40 tracking-tighter">JP</span>
              </div>
            </motion.div>
            <div className="mt-12 text-center">
              <h2 className="text-2xl font-serif text-brand-dark italic mb-4">Capturando Amor em Movimento</h2>
              <p className="max-w-2xl mx-auto text-[14px] opacity-70 text-brand-dark tracking-wide">
                Cada sessão é uma história contada através da luz e da emoção. Veja um pouco do nosso processo e do carinho que colocamos em cada detalhe.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="sobre" className="bg-brand-light py-24 px-6 md:px-0">
        <div className="container mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="aspect-[4/5] bg-brand-bg relative overflow-hidden group"
          >
            <img
              src={IMAGES.profile}
              alt="Joicelina Pedro"
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 border-[20px] border-brand-light/20 m-6" />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col"
          >
            <h2 className="text-3xl md:text-4xl mb-12 uppercase tracking-widest overflow-hidden text-brand-dark">
              <span className="block italic font-serif normal-case tracking-normal mb-2 text-brand-accent">Sobre Mim</span>
              Joicelina Pedro
            </h2>
            <div className="space-y-6 text-[15px] leading-relaxed opacity-80 text-justify text-brand-dark">
              <p>Na Joicelina Pedro Photography acreditamos que as melhores fotografias acontecem quando existe conforto, conexão e autenticidade.</p>
              <p>Trabalhamos com famílias, crianças e momentos especiais, sempre com atenção aos detalhes e muito carinho em cada clique. Também estamos disponíveis para realizar cobertura de batizados e outros eventos familiares mediante agendamento.</p>
              <p>Ainda não temos um estúdio físico, por isso os ensaios são realizados em locais combinados com os clientes — em casa, ao ar livre ou em espaços especiais escolhidos para tornar cada sessão única.</p>
              <p>Os ensaios fotográficos são realizados principalmente em Lisboa e arredores. Em alguns casos específicos, também podemos realizar deslocações para outras cidades, dependendo do tipo de serviço solicitado.</p>
              <p>O nosso objetivo é simples: criar memórias bonitas e verdadeiras que possam ser guardadas para sempre.</p>
            </div>
            <div className="mt-12">
               <span className="font-serif italic text-2xl text-brand-dark">"Feito com carinho."</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section id="servicos" className="py-24 px-6 container mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-3xl uppercase tracking-[0.3em] font-serif mb-4 text-brand-dark">Os Nossos Serviços</h2>
          <div className="w-12 h-px bg-brand-dark mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {[
            { 
              title: 'Ensaio Infantil', 
              desc: 'Fotos naturais, delicadas e divertidas para capturar a essência das crianças.',
            },
            { 
              title: 'Ensaio de Família', 
              desc: 'Momentos genuínos entre families, com foco na conexão e emoção.',
            },
            { 
              title: 'Batizados e Eventos Familiares', 
              desc: 'Cobertura fotográfica delicada e elegante para eternizar momentos especiais como batizados, aniversários infantis e celebrações familiares.',
            },
            { 
              title: 'Design para Empresas', 
              desc: 'Criação de identidade visual e materiais gráficos. Posters, flyers, outdoors e material promocional para a sua empresa.',
              list: ['- Posters & Flyers', '- Logótipos', '- Outdoors', '- Materiais promocionais']
            },
          ].map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="border-t border-brand-dark pt-8 group"
            >
              <div className="mb-6">
                <h3 className="text-xl font-serif text-brand-dark">{service.title}</h3>
              </div>
              <p className="text-[14px] leading-relaxed opacity-70 mb-4 text-brand-dark">{service.desc}</p>
              {service.list && (
                <ul className="text-[12px] opacity-60 space-y-1 mb-6 text-brand-dark">
                  {service.list.map((item, j) => <li key={j}>{item}</li>)}
                </ul>
              )}
              <a href="#agendamento" className="text-[10px] uppercase font-semibold tracking-widest flex items-center gap-2 hover:gap-4 transition-all group-hover:text-brand-accent text-brand-dark">
                Saber mais <ChevronRight size={14} />
              </a>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section id="precos" className="bg-brand-light py-32 px-6 md:px-0">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-20 px-6">
            <span className="text-[10px] uppercase tracking-[0.4em] opacity-40 mb-4 block text-brand-dark">Transparência & Valor</span>
            <h2 className="text-4xl md:text-5xl font-serif mb-6 text-brand-dark">Investimento</h2>
            <p className="font-serif italic opacity-70 text-xl text-brand-dark max-w-xl mx-auto">Cada sessão é uma obra de arte única, dedicada a capturar a alma do seu momento.</p>
          </div>
 
          <div className="grid md:grid-cols-2 gap-px bg-brand-dark/10 border border-brand-dark/10">
            <div className="p-12 md:p-16 bg-white flex flex-col justify-between">
               <div>
                 <h3 className="text-2xl font-serif mb-2 text-brand-dark">Ensaio Fotográfico</h3>
                 <p className="text-[14px] opacity-60 mb-10 leading-relaxed text-brand-dark">Sessão personalizada em local a combinar, com entrega de galeria digital editada.</p>
                 <ul className="space-y-4 mb-12">
                   {['Direito a todas as fotos editadas', 'Entrega em galeria online segura', 'Apoio na escolha de look e local', 'Duração de 1 a 2 horas'].map((item, idx) => (
                     <li key={idx} className="flex items-center gap-3 text-[13px] text-brand-dark opacity-80">
                       <span className="w-1 h-1 bg-brand-dark rounded-full" />
                       {item}
                     </li>
                   ))}
                 </ul>
               </div>
               <div className="flex items-baseline gap-4 mt-auto">
                 {showPromo && (
                   <>
                     <span className="text-sm font-semibold text-brand-dark">Promoção Exclusiva</span>
                     <span className="text-3xl font-serif text-brand-dark tracking-tight">170€</span>
                     <span className="text-sm opacity-40 line-through text-brand-dark">230€</span>
                   </>
                 )}
                 {!showPromo && (
                   <span className="text-3xl font-serif text-brand-dark tracking-tight">230€</span>
                 )}
               </div>
            </div>

            <div className="p-12 md:p-16 bg-white/50 backdrop-blur-sm flex flex-col justify-between border-l border-brand-dark/10">
               <div className="space-y-12">
                 <div className="border-b border-brand-dark/5 pb-10">
                    <h3 className="text-2xl font-serif mb-2 text-brand-dark">Posters & Design</h3>
                    <p className="text-[14px] opacity-70 mb-6 leading-relaxed text-brand-dark">Eleve a imagem do seu negócio com arte profissional.</p>
                    <span className="text-2xl font-serif text-brand-dark">20€ — 30€</span>
                 </div>
                 
                 <div>
                    <h3 className="text-2xl font-serif mb-2 text-brand-dark">Projetos Especiais</h3>
                    <p className="text-[14px] opacity-70 mb-8 leading-relaxed text-brand-dark">Identidade visual, Flyers e Outdoors sob consulta.</p>
                    <a href="#agendamento" className="inline-block text-[11px] uppercase tracking-widest font-bold border-b border-brand-dark pb-2 hover:border-brand-accent hover:text-brand-accent transition-all text-brand-dark">Pedir Orçamento</a>
                 </div>
               </div>
            </div>
          </div>
 
          <div className="mt-16 text-center space-y-4">
             {showPromo && <p className="text-[12px] text-brand-dark font-medium italic">** Promoção válida apenas até 20 de Maio.</p>}
             <p className="text-[12px] opacity-60 italic text-brand-dark">* Os valores variam consoante localização e serviços extras (ex: álbuns físicos).</p>
             <div className="pt-8">
                <a href="#agendamento" className="bg-brand-dark text-brand-light px-16 py-6 text-[12px] uppercase tracking-[0.3em] hover:bg-brand-accent transition-colors shadow-2xl inline-block">
                  Reservar Experiência
                </a>
             </div>
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section id="portfolio" className="py-4">
        <div className="container mx-auto mb-10 text-center px-6">
           <h2 className="text-3xl uppercase tracking-[0.3em] font-serif text-brand-dark">Portfólio</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
          {IMAGES.portfolio.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 1 }}
              className="relative aspect-[4/5] overflow-hidden group cursor-pointer bg-brand-light"
            >
              <img
                src={img.url}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-110"
              />
            </motion.div>
          ))}
        </div>
        <div className="text-center py-20 px-6">
           <a href="https://instagram.com/JoicelinaPedroPhotography" target="_blank" className="inline-flex items-center gap-4 text-brand-dark border-b border-brand-dark pb-3 text-[12px] uppercase tracking-[0.2em] hover:text-brand-accent hover:border-brand-accent transition-all font-bold">
             <Instagram size={20} /> Ver mais no Instagram
           </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-brand-light px-6 md:px-0 border-t border-brand-dark/5">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif text-brand-dark italic mb-4">Perguntas Frequentes</h2>
            <p className="text-[14px] opacity-70 text-brand-dark tracking-wide">Algumas das dúvidas mais comuns sobre o nosso trabalho.</p>
          </div>
          <div className="space-y-4">
            {[
              {
                q: "Onde são realizados os ensaios?",
                a: "Não possuímos estúdio físico. Os ensaios realizam-se em locais a combinar: ao ar livre, no conforto da sua casa ou em espaços especiais escolhidos para tornar a sessão única."
              },
              {
                q: "Qual o tempo de entrega?",
                a: "As fotografias editadas são entregues via galeria online num prazo médio de 2 a 3 semanas. No caso de materiais de design, o prazo varia conforme a complexidade do projeto."
              },
              {
                q: "Como é feito o agendamento?",
                a: "Pode agendar diretamente através do formulário abaixo ou via WhatsApp. A reserva é confirmada mediante o pagamento de um sinal."
              },
              {
                q: "Fazem deslocações fora de Lisboa?",
                a: "Sim, realizamos sessões principalmente em Lisboa e arredores, mas estamos disponíveis para deslocações sob consulta de orçamento."
              }
            ].map((faq, idx) => (
              <div key={idx} className="border-b border-brand-dark/10">
                <button 
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full py-6 flex justify-between items-center text-left hover:text-brand-accent transition-colors"
                >
                  <h3 className="font-serif text-xl sm:text-2xl text-brand-dark">{faq.q}</h3>
                  <ChevronRight 
                    className={`transition-transform duration-300 text-brand-accent ${openFaq === idx ? 'rotate-90' : ''}`} 
                    size={24} 
                  />
                </button>
                <motion.div
                  initial={false}
                  animate={{ height: openFaq === idx ? 'auto' : 0, opacity: openFaq === idx ? 1 : 0 }}
                  className="overflow-hidden"
                >
                  <p className="pb-8 text-[15px] sm:text-lg leading-relaxed opacity-80 text-brand-dark max-w-3xl">
                    {faq.a}
                  </p>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials / Feedback */}
      <section className="py-24 bg-brand-bg px-6 md:px-0">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-[10px] uppercase tracking-[0.4em] opacity-40 mb-4 block text-brand-dark">Vozes dos Clientes</span>
          <h2 className="text-3xl md:text-4xl font-serif text-brand-dark italic mb-8">O que dizem sobre nós</h2>
          
          <div className="bg-white/30 backdrop-blur-sm border border-dashed border-brand-dark/20 p-12 md:p-20">
            <p className="font-serif italic text-xl text-brand-dark opacity-60 mb-10">
              "Ainda não temos testemunhos publicados nesta galeria. Seja o primeiro a partilhar a sua experiência através do formulário abaixo!"
            </p>
            <button 
              onClick={() => {
                const el = document.getElementById('agendamento');
                el?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-brand-accent text-white px-10 py-5 text-[11px] uppercase tracking-widest hover:bg-brand-dark transition-all shadow-lg"
            >
              Deixe o seu Feedback
            </button>
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section id="agendamento" className="py-24 px-6 bg-brand-light relative overflow-hidden">
        <div className="absolute -top-10 -right-10 w-64 h-64 border border-brand-dark/5 rounded-full" />
        <div className="absolute -bottom-20 -left-20 w-96 h-96 border border-brand-dark/5 rounded-full" />

        <div className="max-w-3xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl uppercase tracking-[0.3em] font-serif mb-6 text-brand-dark">Marcar Sessão / Feedback</h2>
            <p className="max-w-md mx-auto opacity-60 leading-relaxed font-serif italic text-lg text-brand-dark">
              Deixe os seus dados e conte-me um pouco sobre a sua ideia. Responderei em breve com todo o carinho.
            </p>
          </div>

          <form 
            className="space-y-12"
            onSubmit={handleFormSubmit}
          >
            {formSubmitted ? (
               <motion.div 
                 initial={{ opacity: 0, scale: 0.95 }}
                 animate={{ opacity: 1, scale: 1 }}
                 className="bg-white/50 backdrop-blur-md p-16 text-center border border-brand-dark/10"
               >
                 <div className="w-20 h-20 bg-brand-dark text-brand-light rounded-full flex items-center justify-center mx-auto mb-8">
                    <Send size={32} />
                 </div>
                 <h3 className="text-3xl font-serif text-brand-dark mb-4">Mensagem Enviada</h3>
                 <p className="text-brand-dark opacity-70 font-serif italic mb-10">Obrigado pelo seu contacto. Em breve entraremos em contacto consigo com todo o carinho.</p>
                 <button 
                   type="button"
                   onClick={() => setFormSubmitted(false)}
                   className="text-[10px] uppercase tracking-widest font-bold border-b border-brand-dark pb-2 hover:text-brand-accent hover:border-brand-accent transition-all text-brand-dark"
                 >
                   Enviar outra mensagem
                 </button>
               </motion.div>
            ) : (
              <>
                <div className="grid md:grid-cols-2 gap-12">
                  <div className="group">
                    <label className="block text-[10px] uppercase tracking-widest font-bold mb-2 opacity-60 group-focus-within:text-brand-dark group-focus-within:opacity-100 transition-all text-brand-dark">Nome Completo</label>
                    <input type="text" name="nome" required className="w-full bg-transparent border-b border-brand-dark/20 focus:border-brand-dark outline-none py-2 text-[15px] transition-colors text-brand-dark" />
                  </div>
                  <div className="group">
                    <label className="block text-[10px] uppercase tracking-widest font-bold mb-2 opacity-60 group-focus-within:text-brand-dark group-focus-within:opacity-100 transition-all text-brand-dark">WhatsApp / Telefone</label>
                    <input type="tel" name="telefone" required className="w-full bg-transparent border-b border-brand-dark/20 focus:border-brand-dark outline-none py-2 text-[15px] transition-colors text-brand-dark" />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-12">
                  <div className="group">
                    <label className="block text-[10px] uppercase tracking-widest font-bold mb-2 opacity-60 group-focus-within:text-brand-dark group-focus-within:opacity-100 transition-all text-brand-dark">Endereço de E-mail</label>
                    <input type="email" name="email" required className="w-full bg-transparent border-b border-brand-dark/20 focus:border-brand-dark outline-none py-2 text-[15px] transition-colors text-brand-dark" />
                  </div>
                  <div className="group">
                    <label className="block text-[10px] uppercase tracking-widest font-bold mb-2 opacity-60 group-focus-within:text-brand-dark group-focus-within:opacity-100 transition-all text-brand-dark">Tipo de Serviço</label>
                    <select name="servico" required className="w-full bg-transparent border-b border-brand-dark/20 focus:border-brand-dark outline-none py-2 text-[14px] transition-colors appearance-none text-brand-dark">
                      <option value="">Selecione...</option>
                      <option value="infantil">Ensaio Infantil</option>
                      <option value="familia">Ensaio de Família</option>
                      <option value="batizado">Batizados e Eventos Familiares</option>
                      <option value="design">Design para Empresa</option>
                      <option value="feedback">Deixar Feedback / Comentário</option>
                    </select>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-12">
                  <div className="group">
                    <label className="block text-[10px] uppercase tracking-widest font-bold mb-2 opacity-60 group-focus-within:text-brand-dark group-focus-within:opacity-100 transition-all text-brand-dark">Data Pretendida</label>
                    <input type="date" name="data" required className="w-full bg-transparent border-b border-brand-dark/20 focus:border-brand-dark outline-none py-2 text-[14px] transition-colors text-brand-dark" />
                  </div>
                  <div className="group">
                    <label className="block text-[10px] uppercase tracking-widest font-bold mb-2 opacity-60 group-focus-within:text-brand-dark group-focus-within:opacity-100 transition-all text-brand-dark">Localização</label>
                    <input type="text" name="localizacao" placeholder="Lisboa e arredores" className="w-full bg-transparent border-b border-brand-dark/20 focus:border-brand-dark outline-none py-2 text-[15px] transition-colors text-brand-dark" />
                  </div>
                </div>

                <div className="group">
                  <label className="block text-[10px] uppercase tracking-widest font-bold mb-2 opacity-60 group-focus-within:text-brand-dark group-focus-within:opacity-100 transition-all text-brand-dark">Mensagem & Detalhes</label>
                  <textarea name="mensagem" rows={4} placeholder="Conte-nos mais sobre o seu momento..." className="w-full bg-transparent border-b border-brand-dark/20 focus:border-brand-dark outline-none py-2 text-[15px] transition-colors resize-none mb-4 text-brand-dark" />
                </div>

                <motion.button
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  type="submit"
                  className="w-full bg-brand-accent text-white py-6 text-[13px] uppercase tracking-[0.3em] font-medium shadow-xl hover:bg-brand-dark transition-colors flex items-center justify-center gap-4"
                >
                  Enviar <Send size={16} />
                </motion.button>
              </>
            )}
          </form>
        </div>
      </section>

      {/* Contacts & Map */}
      <section className="flex flex-col lg:flex-row min-h-[500px]">
        <div className="flex-1 bg-brand-light p-12 md:p-24 flex flex-col justify-center">
            <h2 className="text-3xl uppercase tracking-widest font-serif mb-12 text-brand-dark">Contactos</h2>
            <div className="space-y-8">
              <a href="https://wa.me/351964552241?text=Olá%20Joicelina!%20Estive%20a%20ver%20o%20teu%20portfólio%20e%20gostaria%20de%20saber%20mais%20informações." target="_blank" rel="noreferrer" className="flex items-center gap-6 group cursor-pointer">
                <div className="w-12 h-12 rounded-full border border-brand-dark/10 flex items-center justify-center group-hover:bg-brand-dark group-hover:text-brand-light transition-all text-brand-dark group-hover:text-brand-light">
                  <Phone size={20} />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase tracking-widest opacity-50 font-bold text-brand-dark">WhatsApp</span>
                  <span className="text-lg font-serif text-brand-dark">+351 964 552 241</span>
                </div>
              </a>

              <a href="https://instagram.com/JoicelinaPedroPhotography" target="_blank" rel="noreferrer" className="flex items-center gap-6 group cursor-pointer text-brand-dark">
                <div className="w-12 h-12 rounded-full border border-brand-dark/10 flex items-center justify-center group-hover:bg-brand-dark group-hover:text-brand-light transition-all">
                  <Instagram size={20} />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase tracking-widest opacity-50 font-bold">Instagram</span>
                  <span className="text-lg font-serif text-brand-dark">@JoicelinaPedroPhotography</span>
                </div>
              </a>

              <div className="flex items-center gap-6 group cursor-pointer text-brand-dark">
                <div className="w-12 h-12 rounded-full border border-brand-dark/10 flex items-center justify-center group-hover:bg-brand-dark group-hover:text-brand-light transition-all">
                  <MapPin size={20} />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase tracking-widest opacity-50 font-bold">Base</span>
                  <span className="text-lg font-serif text-brand-dark">Lisboa, Portugal</span>
                </div>
              </div>
            </div>
        </div>
        <div className="flex-[1.2] grayscale contrast-125 min-h-[400px]">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d199216.59190141675!2d-9.307379769382218!3d38.74362657375253!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd19331a61e4f33b%3A0x400ebbde49036d0!2sLisboa!5e0!3m2!1spt-PT!2spt!4v1714498300000!5m2!1spt-PT!2spt" 
            className="w-full h-full border-none opacity-70"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-brand-dark text-brand-light pt-24 pb-12 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-16 mb-20">
            <div className="flex flex-col items-center md:items-start">
               <span className="font-serif text-4xl mb-6">JP</span>
               <p className="font-serif italic text-xl opacity-80 mb-8">"Feito com carinho."</p>
               <div className="flex gap-6">
                  <a href="https://instagram.com/JoicelinaPedroPhotography" target="_blank" className="hover:text-brand-gold transition-colors block border border-brand-light/20 p-3 rounded-full">
                    <Instagram size={24} />
                  </a>
                  <a href="https://wa.me/351964552241?text=Olá%20Joicelina!%20Estive%20a%20ver%20o%20teu%20portfólio%20e%20gostaria%20de%20saber%20mais%20informações." target="_blank" className="hover:text-brand-gold transition-colors block border border-brand-light/20 p-3 rounded-full">
                    <Phone size={24} />
                  </a>
               </div>
            </div>

            <div className="flex flex-col items-center md:items-start">
               <h4 className="text-[11px] uppercase tracking-widest font-bold mb-8 opacity-40">Navegação</h4>
               <nav className="flex flex-col items-center md:items-start gap-4 text-[13px] font-medium">
                  {navLinks.map(link => (
                    <a key={link.name} href={link.href} className="hover:text-brand-gold transition-colors transition-all hover:translate-x-1">{link.name}</a>
                  ))}
               </nav>
            </div>

            <div className="flex flex-col items-center md:items-start">
               <h4 className="text-[11px] uppercase tracking-widest font-bold mb-8 opacity-40">Horário & Local</h4>
               <div className="space-y-4 text-[13px] font-medium opacity-80 text-center md:text-left">
                  <p>Sessões por marcação prévia.</p>
                  <p>Lisboa e arredores, Portugal.</p>
               </div>
            </div>
          </div>
            
          <div className="w-full h-px bg-brand-light/10 mb-10" />
          
          <div className="flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-[0.2em] opacity-40 font-bold">
            <p>&copy; {new Date().getFullYear()} Joicelina Pedro Photography. Todos os direitos reservados.</p>
            <div className="flex gap-6 mt-6 md:mt-0">
              <span>Made with love in Lisbon</span>
            </div>
          </div>
        </div>
      </footer>
      
      {/* VERCEL ANALYTICS COMPONENT */}
      <Analytics />
    </div>
  );
}
