import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import { Application, ApplicationStatus } from '@/types';

export const useApplications = () => {
  const [applications, setApplications] = useState<Application[]>([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  const fetchApplications = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('applications')
        .select(`
          *,
          grains:grain_id(
            id,
            name,
            description,
            quantity,
            available_date,
            image_url
          ),
          profiles!fk_applications_user_id(
            id,
            name
          )
        `)
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Error fetching applications:', error);
        toast({
          title: 'Erro',
          description: 'Não foi possível carregar as candidaturas.',
          variant: 'destructive'
        });
        return;
      }

      const formattedApplications = data?.map(app => ({
        id: app.id,
        user_id: app.user_id,
        grain_id: app.grain_id,
        status: app.status as ApplicationStatus,
        created_at: app.created_at,
        grain: app.grains ? {
          id: app.grains.id,
          name: app.grains.name,
          description: app.grains.description || '',
          quantity: app.grains.quantity,
          available_date: app.grains.available_date,
          image_url: app.grains.image_url,
          created_by: '',
          created_at: ''
        } : undefined,
        user: app.profiles ? {
          id: app.profiles.id,
          name: app.profiles.name || 'Usuário',
          email: '',
          role: 'user' as const
        } : undefined
      })) || [];

      setApplications(formattedApplications);
    } catch (error) {
      console.error('Error fetching applications:', error);
      toast({
        title: 'Erro',
        description: 'Erro inesperado ao carregar as candidaturas.',
        variant: 'destructive'
      });
    } finally {
      setLoading(false);
    }
  };

  const updateApplicationStatus = async (id: string, status: ApplicationStatus) => {
    try {
      const { error } = await supabase
        .from('applications')
        .update({ status })
        .eq('id', id);

      if (error) {
        console.error('Error updating application status:', error);
        toast({
          title: 'Erro',
          description: 'Não foi possível atualizar o status da candidatura.',
          variant: 'destructive'
        });
        return false;
      }

      setApplications(prev => 
        prev.map(app => app.id === id ? { ...app, status } : app)
      );

      const statusMessages = {
        'selected': 'Candidato selecionado com sucesso.',
        'delivered': 'Entrega marcada como concluída.',
        'pending': 'Status alterado para pendente.'
      };

      toast({
        title: 'Sucesso',
        description: statusMessages[status]
      });
      return true;
    } catch (error) {
      console.error('Error updating application status:', error);
      toast({
        title: 'Erro',
        description: 'Erro inesperado ao atualizar o status.',
        variant: 'destructive'
      });
      return false;
    }
  };

  const applyForGrain = async (grainId: string) => {
    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) {
        toast({
          title: 'Erro',
          description: 'Você precisa estar logado para se candidatar.',
          variant: 'destructive'
        });
        return false;
      }

      const { error } = await supabase
        .from('applications')
        .insert({
          user_id: user.id,
          grain_id: grainId
        });

      if (error) {
        if (error.code === '23505') { // Unique constraint violation
          toast({
            title: 'Aviso',
            description: 'Você já se candidatou para este grão.',
            variant: 'destructive'
          });
        } else {
          console.error('Error applying for grain:', error);
          toast({
            title: 'Erro',
            description: 'Não foi possível enviar a candidatura.',
            variant: 'destructive'
          });
        }
        return false;
      }

      toast({
        title: 'Sucesso',
        description: 'Candidatura enviada com sucesso!'
      });
      await fetchApplications();
      return true;
    } catch (error) {
      console.error('Error applying for grain:', error);
      toast({
        title: 'Erro',
        description: 'Erro inesperado ao enviar candidatura.',
        variant: 'destructive'
      });
      return false;
    }
  };

  useEffect(() => {
    fetchApplications();
  }, []);

  return {
    applications,
    loading,
    updateApplicationStatus,
    applyForGrain,
    refreshApplications: fetchApplications
  };
};
