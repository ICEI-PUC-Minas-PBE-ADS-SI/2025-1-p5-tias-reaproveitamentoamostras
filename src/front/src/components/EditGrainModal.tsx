
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Grain } from '@/types';

interface EditGrainModalProps {
  grain: Grain | null;
  isOpen: boolean;
  onClose: () => void;
  onSave: (id: string, grainData: Partial<Grain>) => Promise<boolean>;
}

const EditGrainModal: React.FC<EditGrainModalProps> = ({
  grain,
  isOpen,
  onClose,
  onSave
}) => {
  const [editingGrain, setEditingGrain] = useState<Partial<Grain>>({});

  React.useEffect(() => {
    if (grain) {
      setEditingGrain({
        name: grain.name,
        description: grain.description,
        quantity: grain.quantity,
        available_date: grain.available_date,
        image_url: grain.image_url
      });
    }
  }, [grain]);

  const handleSave = async () => {
    if (!grain || !editingGrain.name || !editingGrain.description || !editingGrain.quantity || !editingGrain.available_date) {
      return;
    }

    const success = await onSave(grain.id, editingGrain);
    if (success) {
      onClose();
    }
  };

  const handleClose = () => {
    setEditingGrain({});
    onClose();
  };

  if (!grain) return null;

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Editar Grão</DialogTitle>
        </DialogHeader>
        
        <div className="space-y-4 py-4">
          <div className="space-y-2">
            <Label htmlFor="edit-grain-name">Nome do Grão</Label>
            <Input
              id="edit-grain-name"
              value={editingGrain.name || ''}
              onChange={(e) => setEditingGrain({...editingGrain, name: e.target.value})}
              placeholder="Ex: Arroz Integral"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="edit-grain-desc">Descrição</Label>
            <Input
              id="edit-grain-desc"
              value={editingGrain.description || ''}
              onChange={(e) => setEditingGrain({...editingGrain, description: e.target.value})}
              placeholder="Breve descrição do grão"
            />
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="edit-grain-qty">Quantidade (kg)</Label>
              <Input
                id="edit-grain-qty"
                type="number"
                value={editingGrain.quantity || 0}
                onChange={(e) => setEditingGrain({...editingGrain, quantity: Number(e.target.value)})}
                min="0"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="edit-grain-date">Data Disponível</Label>
              <Input
                id="edit-grain-date"
                type="date"
                value={editingGrain.available_date || ''}
                onChange={(e) => setEditingGrain({...editingGrain, available_date: e.target.value})}
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="edit-grain-image">URL da Imagem</Label>
            <Input
              id="edit-grain-image"
              value={editingGrain.image_url || ''}
              onChange={(e) => setEditingGrain({...editingGrain, image_url: e.target.value})}
              placeholder="https://exemplo.com/imagem.jpg"
            />
          </div>
        </div>
        
        <DialogFooter>
          <Button variant="outline" onClick={handleClose}>
            Cancelar
          </Button>
          <Button onClick={handleSave}>
            Salvar Alterações
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default EditGrainModal;
