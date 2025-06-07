
import React, { createContext, useState, useContext, useEffect } from 'react';
import { User } from '../types';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { Session } from '@supabase/supabase-js';

interface AuthContextProps {
  currentUser: User | null;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
  isLoading: boolean;
  isAuthenticated: boolean;
  session: Session | null;
}

const AuthContext = createContext<AuthContextProps | null>(null);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const { toast } = useToast();

  useEffect(() => {
    console.log('AuthProvider: Setting up auth state listener');
    
    // Função para atualizar o estado do usuário baseado na sessão
    const updateUserFromSession = async (currentSession: Session | null) => {
      if (currentSession?.user) {
        console.log('User found in session, fetching profile...');
        
        try {
          // Fetch user profile to get role
          const { data: profile, error } = await supabase
            .from('profiles')
            .select('*')
            .eq('id', currentSession.user.id)
            .single();
          
          if (error && error.code !== 'PGRST116') {
            console.error('Error fetching profile:', error);
          }
          
          const user: User = {
            id: currentSession.user.id,
            name: currentSession.user.user_metadata.name || profile?.name || 'Usuário',
            email: currentSession.user.email || '',
            role: profile?.role || 'user'
          };
          
          console.log('Setting current user:', user);
          setCurrentUser(user);
          setSession(currentSession);
        } catch (error) {
          console.error('Error in updateUserFromSession:', error);
        }
      } else {
        console.log('No user in session, clearing current user');
        setCurrentUser(null);
        setSession(null);
      }
      setIsLoading(false);
    };

    // Set up auth state listener
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event, currentSession) => {
        console.log('Auth state change:', event, currentSession?.user?.id);
        await updateUserFromSession(currentSession);
      }
    );
    
    // Check for existing session immediately
    const initializeAuth = async () => {
      try {
        console.log('Checking for existing session...');
        const { data: { session: existingSession }, error } = await supabase.auth.getSession();
        
        if (error) {
          console.error('Error getting session:', error);
          setIsLoading(false);
          return;
        }
        
        console.log('Initial session found:', !!existingSession?.user);
        await updateUserFromSession(existingSession);
      } catch (error) {
        console.error('Error in initializeAuth:', error);
        setIsLoading(false);
      }
    };
    
    initializeAuth();

    return () => {
      console.log('Cleaning up auth subscription');
      subscription.unsubscribe();
    };
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    console.log('Login attempt for:', email);
    setIsLoading(true);
    
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password
      });
      
      if (error) {
        console.error('Login error:', error);
        toast({
          title: "Erro no login",
          description: error.message,
          variant: "destructive",
        });
        return false;
      }
      
      console.log('Login successful:', data.user?.id);
      
      toast({
        title: "Login bem-sucedido",
        description: `Bem-vindo(a), ${data.user?.user_metadata.name || 'Usuário'}!`,
      });
      
      return true;
    } catch (error: any) {
      console.error('Login catch error:', error);
      toast({
        title: "Erro no login",
        description: "Ocorreu um erro ao tentar fazer login.",
        variant: "destructive",
      });
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  const logout = async () => {
    console.log('Logout attempt');
    
    try {
      const { error } = await supabase.auth.signOut();
      if (error) {
        console.error('Logout error:', error);
        toast({
          title: "Erro no logout",
          description: error.message,
          variant: "destructive",
        });
        return;
      }
      
      console.log('Logout successful');
      
      setCurrentUser(null);
      setSession(null);
      
      toast({
        title: "Logout realizado",
        description: "Você saiu da sua conta.",
      });
    } catch (error) {
      console.error('Logout catch error:', error);
    }
  };

  return (
    <AuthContext.Provider 
      value={{ 
        currentUser, 
        login, 
        logout, 
        isLoading,
        isAuthenticated: !!currentUser,
        session
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
