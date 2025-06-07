
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import GrainCard from '@/components/GrainCard';
import { Input } from "@/components/ui/input";
import { useGrains } from '@/hooks/useGrains';
import { useAuth } from '@/context/AuthContext';
import { useApplications } from '@/hooks/useApplications';
import { Search } from 'lucide-react';

const GraosDisponiveis = () => {
  const { grains, loading } = useGrains();
  const { isAuthenticated } = useAuth();
  const { applyForGrain, applications } = useApplications();
  const [searchTerm, setSearchTerm] = useState('');

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

  // Filter grains based on search term
  const filteredGrains = grains.filter(grain =>
    grain.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-grain-600 to-grain-700 py-16">
        <div className="container mx-auto px-4 text-white">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Grãos Disponíveis
            </h1>
            <p className="text-xl opacity-90">
              Explore todas as amostras de grãos disponíveis para doação. 
              Resultado das análises laboratoriais realizadas pela Clastec.
            </p>
          </div>
        </div>
      </section>
      
      {/* Grains List Section */}
      <section className="py-16 bg-gradient-to-b from-grain-50 to-white">
        <div className="container mx-auto px-4">
          {loading ? (
            <div className="text-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-grain-600 mx-auto mb-4"></div>
              <p className="text-lg text-muted-foreground">Carregando grãos disponíveis...</p>
            </div>
          ) : (
            <>
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">
                  {filteredGrains.length} {filteredGrains.length === 1 ? 'Grão Disponível' : 'Grãos Disponíveis'}
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
                  {!isAuthenticated ? (
                    'Faça login para se candidatar e receber as doações.'
                  ) : (
                    'Clique em "Candidatar-se" para solicitar as amostras de seu interesse.'
                  )}
                </p>
                
                {/* Search Input */}
                <div className="max-w-md mx-auto">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                    <Input
                      placeholder="Buscar grãos por nome..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                </div>
              </div>
              
              {filteredGrains.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                  {filteredGrains.map((grain) => (
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
              ) : searchTerm ? (
                <div className="text-center py-16 bg-muted/30 rounded-lg">
                  <div className="max-w-md mx-auto">
                    <div className="w-24 h-24 bg-grain-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Search className="text-4xl text-grain-600" />
                    </div>
                    <h3 className="text-2xl font-bold mb-3">Nenhum grão encontrado</h3>
                    <p className="text-muted-foreground">
                      Não há grãos que correspondam à sua busca "{searchTerm}". 
                      Tente usar outros termos de busca.
                    </p>
                  </div>
                </div>
              ) : (
                <div className="text-center py-16 bg-muted/30 rounded-lg">
                  <div className="max-w-md mx-auto">
                    <div className="w-24 h-24 bg-grain-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <span className="text-4xl">🌾</span>
                    </div>
                    <h3 className="text-2xl font-bold mb-3">Nenhum grão disponível</h3>
                    <p className="text-muted-foreground">
                      No momento não há grãos disponíveis para doação. 
                      Verifique novamente em breve.
                    </p>
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </section>
      
      {/* Info Section */}
      <section className="py-16 bg-white border-t">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Como Funciona</h2>
              <p className="text-muted-foreground">
                Processo simples para receber as doações de grãos
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-grain-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-grain-600 font-bold">1</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Escolha os Grãos</h3>
                <p className="text-sm text-muted-foreground">
                  Navegue pelos grãos disponíveis e selecione os que interessam ao seu projeto.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-grain-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-grain-600 font-bold">2</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Candidate-se</h3>
                <p className="text-sm text-muted-foreground">
                  Clique em "Candidatar-se" e aguarde a análise da sua solicitação.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-grain-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-grain-600 font-bold">3</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Receba</h3>
                <p className="text-sm text-muted-foreground">
                  Após aprovação, coordene a retirada ou entrega dos grãos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default GraosDisponiveis;
