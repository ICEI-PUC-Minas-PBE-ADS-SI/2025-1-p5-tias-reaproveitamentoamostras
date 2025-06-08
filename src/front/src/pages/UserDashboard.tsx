import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/context/AuthContext';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useToast } from '@/hooks/use-toast';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import GrainCard from '@/components/GrainCard';
import ApplicationCard from '@/components/ApplicationCard';
import ProfileCompletionModal from '@/components/ProfileCompletionModal';
import { useGrains } from '@/hooks/useGrains';
import { useApplications } from '@/hooks/useApplications';
import { useUserProfile } from '@/hooks/useUserProfile';

const UserDashboard = () => {
  const { currentUser, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();

  const { grains, loading: grainsLoading } = useGrains();
  const { applications, loading: applicationsLoading, applyForGrain } = useApplications();
  const { profile, loading: profileLoading } = useUserProfile();

  const [showProfileModal, setShowProfileModal] = useState(false);

  useEffect(() => {
    if (!isAuthenticated || currentUser?.role !== 'user') {
      navigate('/login');
    }
  }, [currentUser, isAuthenticated, navigate]);

  useEffect(() => {
    if (!profileLoading && (!profile || !profile.profile_completed)) {
      setShowProfileModal(true);
    }
  }, [profile, profileLoading]);

  const handleProfileComplete = () => {
    setShowProfileModal(false);
    toast({
      title: 'Perfil completo!',
      description: 'Agora você pode se candidatar para receber doações.',
    });
  };

  const handleApplyForGrain = async (grainId) => {
    if (!profile?.profile_completed) {
      toast({
        title: 'Complete seu perfil',
        description: 'Você precisa completar seu perfil antes de se candidatar.',
        variant: 'destructive',
      });
      setShowProfileModal(true);
      return;
    }
    await applyForGrain(grainId);
  };

  const isGrainApplied = (grainId) => applications.some((app) => app.grain_id === grainId);

  const renderLoadingState = () => (
    <div className="flex-1 flex items-center justify-center">
      <div className="text-center">
        <h2 className="text-xl font-semibold mb-2">Carregando...</h2>
        <p className="text-muted-foreground">Aguarde um momento.</p>
      </div>
    </div>
  );

  if (grainsLoading || applicationsLoading || profileLoading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        {renderLoadingState()}
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <ProfileCompletionModal isOpen={showProfileModal} onComplete={handleProfileComplete} />

      <div className="flex-1 py-8">
        <div className="container mx-auto px-4">
          <header className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Portal do Candidato</h1>
            <p className="text-muted-foreground">
              Bem-vindo(a), {currentUser?.name}. Gerencie suas candidaturas para receber doações.
            </p>
          </header>

          <Tabs defaultValue="applications" className="mb-8">
            <TabsList>
              <TabsTrigger value="applications">Minhas Candidaturas</TabsTrigger>
              <TabsTrigger value="available">Grãos Disponíveis</TabsTrigger>
            </TabsList>

            <TabsContent value="applications" className="pt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {applications.length > 0 ? (
                  applications.map((application) => (
                    <ApplicationCard key={application.id} application={application} />
                  ))
                ) : (
                  <div className="col-span-full text-center py-12 bg-muted/30 rounded-lg">
                    <h3 className="text-xl font-medium mb-2">Nenhuma candidatura encontrada</h3>
                    <p className="text-muted-foreground">
                      Você ainda não se candidatou para receber nenhuma doação.
                    </p>
                  </div>
                )}
              </div>
            </TabsContent>

            <TabsContent value="available" className="pt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {grains.map((grain) => (
                  <GrainCard
                    key={grain.id}
                    grain={{
                      ...grain,
                      availableDate: grain.available_date,
                      image: grain.image_url,
                    }}
                    onApply={handleApplyForGrain}
                    isApplied={isGrainApplied(grain.id)}
                  />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default UserDashboard;

