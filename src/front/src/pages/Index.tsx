
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import GrainCard from '@/components/GrainCard';
import { useGrains } from '@/hooks/useGrains';
import { useAuth } from '@/context/AuthContext';
import { useApplications } from '@/hooks/useApplications';

const Index = () => {
  const { grains, loading } = useGrains();
  const { isAuthenticated } = useAuth();
  const { applyForGrain, applications } = useApplications();
  
  // Get the first 3 grains for featured section
  const featuredGrains = grains.slice(0, 3);

  const handleApplyForGrain = async (grainId: string) => {
    if (!isAuthenticated) {
      // Redirect to login if not authenticated
      window.location.href = '/login';
      return;
    }
    
    await applyForGrain(grainId);
  };

  const isGrainApplied = (grainId: string) => {
    return applications.some(app => app.grain_id === grainId);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-[url('/images/banner.webp')] bg-cover bg-center py-24 md:py-32">
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="container mx-auto px-4 relative z-10 text-white">
          <div className="max-w-2xl">
            <h1 className="text-3xl md:text-4xl font-bold mb-6">
              Reaproveitamento sustentável de amostras de grãos
            </h1>
            <p className="text-xl mb-8">
              Facilitamos a doação de amostras de grãos analisadas pela Clastec, promovendo a redistribuição responsável desses materiais para projetos sociais, pequenos produtores e instituições.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/register">
                <Button size="lg" className="bg-grain-600 hover:bg-grain-700">
                  Quero receber doação
                </Button>
              </Link>
              <Link to="/about">
                <Button size="lg" className="border-white text-white hover:bg-white hover:text-grain-700">
                  Saiba mais
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured Grains Section */}
      <section className="py-16 bg-gradient-to-b from-grain-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Grãos Disponíveis</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Conheça as amostras de grãos disponíveis para doação, resultado das análises laboratoriais realizadas pela Clastec. Cadastre-se para se candidatar a recebê-las.
            </p>
          </div>
          
          {loading ? (
            <div className="text-center py-12">
              <p className="text-lg text-muted-foreground">Carregando grãos disponíveis...</p>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {featuredGrains.map((grain) => (
                  <GrainCard 
                    key={grain.id} 
                    grain={{
                      ...grain,
                      image: grain.image_url,
                      availableDate: grain.available_date
                    }}
                    onApply={handleApplyForGrain}
                    isApplied={isAuthenticated ? isGrainApplied(grain.id) : false}
                  />
                ))}
              </div>
              
              {featuredGrains.length === 0 && (
                <div className="text-center py-12 bg-muted/30 rounded-lg">
                  <h3 className="text-xl font-medium mb-2">Nenhum grão disponível</h3>
                  <p className="text-muted-foreground">
                    No momento não há grãos disponíveis para doação.
                  </p>
                </div>
              )}
              
              <div className="text-center mt-12">
                <Link to="/graos-disponiveis">
                  <Button variant="outline" size="lg">
                    Ver todos os grãos disponíveis
                  </Button>
                </Link>
              </div>
            </>
          )}
        </div>
      </section>
      
      {/* How It Works */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Como Funciona</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Uma solução eficiente para redistribuir amostras de grãos, conectando a Clastec com quem pode aproveitá-las de forma responsável.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 border border-border rounded-lg bg-card hover:shadow-md transition-shadow">
              <div className="w-20 h-20 bg-grain-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl text-grain-600 font-bold">1</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Cadastre-se</h3>
              <p className="text-muted-foreground">
                Crie sua conta e participe da nossa rede de reaproveitamento sustentável de amostras de grãos.
              </p>
            </div>
            
            <div className="text-center p-6 border border-border rounded-lg bg-card hover:shadow-md transition-shadow">
              <div className="w-20 h-20 bg-grain-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl text-grain-600 font-bold">2</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Candidate-se</h3>
              <p className="text-muted-foreground">
                Selecione as amostras que deseja receber e envie sua solicitação.
              </p>
            </div>
            
            <div className="text-center p-6 border border-border rounded-lg bg-card hover:shadow-md transition-shadow">
              <div className="w-20 h-20 bg-grain-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl text-grain-600 font-bold">3</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Receba</h3>
              <p className="text-muted-foreground">
                Após a aprovação, receba as amostras para uso em projetos sociais, pesquisa ou produção.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-earth-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Faça parte dessa iniciativa</h2>
            <p className="text-xl mb-8">
              Junte-se a nós na missão de evitar desperdícios e promover a sustentabilidade, garantindo um destino adequado e socialmente responsável para as amostras de grãos.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/register">
                <Button size="lg" className="bg-grain-600 hover:bg-grain-700">
                  Cadastre-se agora
                </Button>
              </Link>
              <Link to="/about">
                <Button size="lg" className="border-white text-white hover:bg-white hover:text-earth-800">
                  Saiba mais
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
