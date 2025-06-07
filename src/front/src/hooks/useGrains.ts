
import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import { Grain } from '@/types';

export const useGrains = () => {
  const [grains, setGrains] = useState<Grain[]>([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  const fetchGrains = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('grains')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Error fetching grains:', error);
        toast({
          title: 'Erro',
          description: 'Não foi possível carregar os grãos.',
          variant: 'destructive'
        });
        return;
      }

      setGrains(data || []);
    } catch (error) {
      console.error('Error fetching grains:', error);
      toast({
        title: 'Erro',
        description: 'Erro inesperado ao carregar os grãos.',
        variant: 'destructive'
      });
    } finally {
      setLoading(false);
    }
  };

  const addGrain = async (grainData: Omit<Grain, 'id' | 'created_at' | 'created_by'>) => {
    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) {
        toast({
          title: 'Erro',
          description: 'Usuário não autenticado.',
          variant: 'destructive'
        });
        return false;
      }

      const { data, error } = await supabase
        .from('grains')
        .insert({
          ...grainData,
          created_by: user.id
        })
        .select()
        .single();

      if (error) {
        console.error('Error adding grain:', error);
        toast({
          title: 'Erro',
          description: 'Não foi possível adicionar o grão.',
          variant: 'destructive'
        });
        return false;
      }

      setGrains(prev => [data, ...prev]);
      toast({
        title: 'Sucesso',
        description: 'Grão adicionado com sucesso!'
      });
      return true;
    } catch (error) {
      console.error('Error adding grain:', error);
      toast({
        title: 'Erro',
        description: 'Erro inesperado ao adicionar o grão.',
        variant: 'destructive'
      });
      return false;
    }
  };

  const updateGrain = async (id: string, grainData: Partial<Grain>) => {
    try {
      const { data, error } = await supabase
        .from('grains')
        .update(grainData)
        .eq('id', id)
        .select()
        .single();

      if (error) {
        console.error('Error updating grain:', error);
        toast({
          title: 'Erro',
          description: 'Não foi possível atualizar o grão.',
          variant: 'destructive'
        });
        return false;
      }

      setGrains(prev => prev.map(grain => grain.id === id ? data : grain));
      toast({
        title: 'Sucesso',
        description: 'Grão atualizado com sucesso!'
      });
      return true;
    } catch (error) {
      console.error('Error updating grain:', error);
      toast({
        title: 'Erro',
        description: 'Erro inesperado ao atualizar o grão.',
        variant: 'destructive'
      });
      return false;
    }
  };

  const deleteGrain = async (id: string) => {
    try {
      const { error } = await supabase
        .from('grains')
        .delete()
        .eq('id', id);

      if (error) {
        console.error('Error deleting grain:', error);
        toast({
          title: 'Erro',
          description: 'Não foi possível deletar o grão.',
          variant: 'destructive'
        });
        return false;
      }

      setGrains(prev => prev.filter(grain => grain.id !== id));
      toast({
        title: 'Sucesso',
        description: 'Grão deletado com sucesso!'
      });
      return true;
    } catch (error) {
      console.error('Error deleting grain:', error);
      toast({
        title: 'Erro',
        description: 'Erro inesperado ao deletar o grão.',
        variant: 'destructive'
      });
      return false;
    }
  };

  useEffect(() => {
    fetchGrains();
  }, []);

  return {
    grains,
    loading,
    addGrain,
    updateGrain,
    deleteGrain,
    refreshGrains: fetchGrains
  };
};
