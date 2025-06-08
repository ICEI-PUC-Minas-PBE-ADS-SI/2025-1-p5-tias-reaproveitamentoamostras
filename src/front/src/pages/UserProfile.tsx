import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/context/AuthContext';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import UserProfileForm from '@/components/UserProfileForm';
import { useUserProfile } from '@/hooks/useUserProfile';

const UserProfile = () => {
  const { currentUser, isAuthenticated } = useAuth();
  const { loading } = useUserProfile();
  const navigate = useNavigate();

  React.useEffect(() => {
    console.debug('Verificando autenticação do usuário...');
    if (!isAuthenticated) {
      navigate('/login');
    }
  }, [isAuthenticated, navigate]);

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-xl font-semibold mb-2">Carregando informações do perfil...</h2>
            <p className="text-muted-foreground">Aguarde enquanto carregamos os dados necessários.</p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-1 py-8">
        <div className="container mx-auto px-4">
          <div className="mb-8"></div>
            <h1 className="text-3xl font-bold mb-2">
              Meu Perfil {currentUser ? `- ${currentUser.name}` : ''}
            </h1>
            <p className="text-muted-foreground">
              Gerencie suas informações pessoais e dados de contato.
            </p>
          </div>
          
          <UserProfileForm />
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default UserProfile;
