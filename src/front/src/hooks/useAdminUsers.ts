
import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

export interface AdminUser {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'user';
  created_at: string;
  phone?: string;
  address_street?: string;
  address_number?: string;
  address_complement?: string;
  address_neighborhood?: string;
  address_city?: string;
  address_state?: string;
  address_zip_code?: string;
  donation_motivation?: string;
  profile_completed: boolean;
}

export const useAdminUsers = () => {
  const [users, setUsers] = useState<AdminUser[]>([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  const fetchUsers = async () => {
    try {
      const { data, error } = await supabase.rpc('get_all_users_for_admin');
      
      if (error) {
        console.error('Error fetching users:', error);
        return;
        toast({
          title: 'Erro ao carregar usuários',
          description: 'Não foi possível carregar a lista de usuários.',
          variant: 'destructive'
        });
        return;
      }

      setUsers(data || []);
    } catch (error) {
      console.error('Error in fetchUsers:', error);
      toast({
        title: 'Erro ao carregar usuários',
        description: 'Ocorreu um erro inesperado.',
        variant: 'destructive'
      });
    } finally {
      setLoading(false);
    }
  };

  const updateUser = async (userId: string, userData: Partial<AdminUser>) => {
    try {
      const { error } = await supabase.rpc('admin_update_user_profile', {
        target_user_id: userId,
        new_name: userData.name || null,
        new_phone: userData.phone || null,
        new_address_street: userData.address_street || null,
        new_address_number: userData.address_number || null,
        new_address_complement: userData.address_complement || null,
        new_address_neighborhood: userData.address_neighborhood || null,
        new_address_city: userData.address_city || null,
        new_address_state: userData.address_state || null,
        new_address_zip_code: userData.address_zip_code || null,
        new_donation_motivation: userData.donation_motivation || null,
        new_role: userData.role || null
      });

      if (error) {
        console.error('Error updating user:', error);
        toast({
          title: 'Erro ao atualizar usuário',
          description: 'Não foi possível atualizar as informações do usuário.',
          variant: 'destructive'
        });
        return false;
      }

      toast({
        title: 'Usuário atualizado',
        description: 'As informações do usuário foram atualizadas com sucesso.'
      });

      await fetchUsers(); // Recarregar lista
      return true;
    } catch (error) {
      console.error('Error in updateUser:', error);
      toast({
        title: 'Erro ao atualizar usuário',
        description: 'Ocorreu um erro inesperado.',
        variant: 'destructive'
      });
      return false;
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return {
    users,
    loading,
    updateUser,
    refetch: fetchUsers
  };
};
