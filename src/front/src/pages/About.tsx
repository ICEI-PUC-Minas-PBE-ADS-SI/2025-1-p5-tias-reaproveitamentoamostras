
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-[url('/images/banner-graos.webp')] bg-cover bg-center py-20">
         <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="container mx-auto px-4 relative z-10 text-white">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Quem Somos</h1>
            <p className="text-xl">
              Descubra como transformamos amostras de grãos em ações sociais que fazem a diferença.
            </p>
          </div>
        </div>
      </section>
      
      {/* About Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Nossa Missão</h2>
            <p className="text-lg mb-6">
              A ReAmostra é uma iniciativa da Clastec que visa promover o reaproveitamento sustentável de amostras de grãos analisadas em laboratório. 
              Nossa missão é reduzir o desperdício e transformar esses grãos em uma fonte de apoio para comunidades em situação de vulnerabilidade.
            </p>
            <p className="text-lg mb-10">
              Acreditamos que pequenas ações podem gerar grandes impactos. Por meio de um sistema eficiente, garantimos que essas amostras cheguem de forma segura e organizada às instituições que mais precisam.
            </p>

            {/* Nossa História */}
            <h2 className="text-3xl font-bold mb-6">Nossa História</h2>
            <p className="text-lg mb-6">
              A ideia da ReAmostra surgiu dentro da Clastec ao percebermos que toneladas de amostras de grãos, após análises laboratoriais, eram descartadas, apesar de estarem em perfeito estado para consumo.
            </p>
            <p className="text-lg mb-10">
              Motivados pelo compromisso social e ambiental, estruturamos um projeto que conecta esse material excedente a ONGs, bancos de alimentos e outras instituições que atuam no combate à fome. 
              Desde então, temos expandido nossa atuação e impacto social.
            </p>

            {/* Como Funcionamos */}
            <h2 className="text-3xl font-bold mb-6">Como Funcionamos</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
              <div className="bg-grain-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Para a Clastec</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Coletamos amostras de grãos após análise laboratorial</li>
                  <li>Classificamos e armazenamos adequadamente para doação</li>
                  <li>Entramos em contato com instituições cadastradas</li>
                  <li>Coordenamos a logística de retirada ou entrega</li>
                  <li>Monitoramos e divulgamos o impacto das doações</li>
                </ul>
              </div>

              {/* Para Beneficiários */}
              <div className="bg-earth-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Para Beneficiários</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Cadastre sua instituição ou projeto social</li>
                  <li>Receba informações sobre disponibilidade de grãos</li>
                  <li>Programe a retirada conforme as orientações</li>
                  <li>Utilize os grãos em suas ações de combate à fome</li>
                  <li>Compartilhe os resultados e inspire outras iniciativas</li>
                </ul>
              </div>
            </div>

            {/* Nossos Valores */}
            <h2 className="text-3xl font-bold mb-6">Nossos Valores</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
              <div className="text-center p-6 border border-border rounded-lg">
                <h3 className="text-xl font-bold mb-3">Compromisso Social</h3>
                <p className="text-muted-foreground">
                  Atuamos com foco na responsabilidade social, apoiando quem mais precisa.
                </p>
              </div>

              {/* Nosso Impacto */}
              <div className="text-center p-6 border border-border rounded-lg">
                <h3 className="text-xl font-bold mb-3">Sustentabilidade</h3>
                <p className="text-muted-foreground">
                  Reduzimos o desperdício e promovemos o uso consciente dos recursos.
                </p>
              </div>
              <div className="text-center p-6 border border-border rounded-lg">
                <h3 className="text-xl font-bold mb-3">Transparência</h3>
                <p className="text-muted-foreground">
                  Mantemos processos claros, garantindo confiança e credibilidade.
                </p>
              </div>
            </div>
            
            <h2 className="text-3xl font-bold mb-6">Impacto</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10 text-center">
              <div className="p-6 bg-grain-50 rounded-lg">
                <span className="block text-4xl font-bold text-grain-700 mb-2">10</span>
                <span className="text-muted-foreground">Parcerias ativas</span>
              </div>
              <div className="p-6 bg-grain-50 rounded-lg">
                <span className="block text-4xl font-bold text-grain-700 mb-2">3.500+</span>
                <span className="text-muted-foreground">Kg de grãos doados</span>
              </div>
              <div className="p-6 bg-grain-50 rounded-lg">
                <span className="block text-4xl font-bold text-grain-700 mb-2">20+</span>
                <span className="text-muted-foreground">Instituições beneficiadas</span>
              </div>
              <div className="p-6 bg-grain-50 rounded-lg">
                <span className="block text-4xl font-bold text-grain-700 mb-2">1.200+</span>
                <span className="text-muted-foreground">Famílias impactadas</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default About;
