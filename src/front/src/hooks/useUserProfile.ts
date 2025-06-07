
import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/context/AuthContext';
import { useToast } from '@/hooks/use-toast';

export interface UserProfile {
  id?: string;
  user_id: string;
  address_street?: string;
  address_number?: string;
  address_complement?: string;
  address_neighborhood?: string;
  address_city?: string;
  address_state?: string;
  address_zip_code?: string;
  phone?: string;
  donation_motivation?: string;
  profile_completed: boolean;
}

export const useUserProfile = () => {
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const { currentUser } = useAuth();
  const { toast } = useToast();

  const fetchProfile = async () => {
    if (!currentUser) {
      setLoading(false);
      return;
    }

    try {
      const { data, error } = await supabase
        .from('user_profiles')
        .select('*')
        .eq('user_id', currentUser.id)
        .maybeSingle();

      if (error && error.code !== 'PGRST116') {
        console.error('Error fetching profile:', error);
        return;
      }

      setProfile(data);
    } catch (error) {
      console.error('Error in fetchProfile:', error);
    } finally {
      setLoading(false);
    }
  };

  const saveProfile = async (profileData: Omit<UserProfile, 'id' | 'user_id'>) => {
    if (!currentUser) return false;

    try {
      const dataToSave = {
        ...profileData,
        user_id: currentUser.id,
        profile_completed: true
      };

      if (profile?.id) {
        // Update existing profile
        const { error } = await supabase
          .from('user_profiles')
          .update(dataToSave)
          .eq('id', profile.id);

        if (error) throw error;
      } else {
        // Create new profile
        const { error } = await supabase
          .from('user_profiles')
          .insert(dataToSave);

        if (error) throw error;
      }

      await fetchProfile();
      
      toast({
        title: "Perfil salvo",
        description: "Suas informações foram salvas com sucesso.",
      });

      return true;
    } catch (error: any) {
      console.error('Error saving profile:', error);
      toast({
        title: "Erro ao salvar",
        description: "Ocorreu um erro ao salvar suas informações.",
        variant: "destructive",
      });
      return false;
    }
  };

  useEffect(() => {
    fetchProfile();
  }, [currentUser]);

  return {
    profile,
    loading,
    saveProfile,
    refetch: fetchProfile
  };
};
