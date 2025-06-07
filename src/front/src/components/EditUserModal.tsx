
import React, { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { AdminUser } from '@/hooks/useAdminUsers';

interface EditUserModalProps {
  user: AdminUser | null;
  isOpen: boolean;
  onClose: () => void;
  onSave: (userId: string, userData: Partial<AdminUser>) => Promise<boolean>;
}

const EditUserModal = ({ user, isOpen, onClose, onSave }: EditUserModalProps) => {
  const [formData, setFormData] = useState<Partial<AdminUser>>({});
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (user) {
      setFormData({
        name: user.name || '',
        role: user.role,
        phone: user.phone || '',
        address_street: user.address_street || '',
        address_number: user.address_number || '',
        address_complement: user.address_complement || '',
        address_neighborhood: user.address_neighborhood || '',
        address_city: user.address_city || '',
        address_state: user.address_state || '',
        address_zip_code: user.address_zip_code || '',
        donation_motivation: user.donation_motivation || ''
      });
    }
  }, [user]);

  const handleSave = async () => {
    if (!user) return;

    setSaving(true);
    const success = await onSave(user.id, formData);
    setSaving(false);

    if (success) {
      onClose();
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  if (!user) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Editar Usuário</DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Nome</Label>
              <Input
                id="name"
                value={formData.name || ''}
                onChange={(e) => handleInputChange('name', e.target.value)}
                placeholder="Nome do usuário"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="role">Papel</Label>
              <Select value={formData.role} onValueChange={(value) => handleInputChange('role', value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Selecione o papel" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="user">Usuário</SelectItem>
                  <SelectItem value="admin">Administrador</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email (somente leitura)</Label>
            <Input
              id="email"
              value={user.email}
              disabled
              className="bg-muted"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Telefone</Label>
            <Input
              id="phone"
              value={formData.phone || ''}
              onChange={(e) => handleInputChange('phone', e.target.value)}
              placeholder="(11) 99999-9999"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-2 md:col-span-2">
              <Label htmlFor="address_street">Rua</Label>
              <Input
                id="address_street"
                value={formData.address_street || ''}
                onChange={(e) => handleInputChange('address_street', e.target.value)}
                placeholder="Nome da rua"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="address_number">Número</Label>
              <Input
                id="address_number"
                value={formData.address_number || ''}
                onChange={(e) => handleInputChange('address_number', e.target.value)}
                placeholder="123"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="address_complement">Complemento</Label>
              <Input
                id="address_complement"
                value={formData.address_complement || ''}
                onChange={(e) => handleInputChange('address_complement', e.target.value)}
                placeholder="Apto, bloco, etc."
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="address_neighborhood">Bairro</Label>
              <Input
                id="address_neighborhood"
                value={formData.address_neighborhood || ''}
                onChange={(e) => handleInputChange('address_neighborhood', e.target.value)}
                placeholder="Nome do bairro"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label htmlFor="address_city">Cidade</Label>
              <Input
                id="address_city"
                value={formData.address_city || ''}
                onChange={(e) => handleInputChange('address_city', e.target.value)}
                placeholder="Nome da cidade"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="address_state">Estado</Label>
              <Input
                id="address_state"
                value={formData.address_state || ''}
                onChange={(e) => handleInputChange('address_state', e.target.value)}
                placeholder="SP"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="address_zip_code">CEP</Label>
              <Input
                id="address_zip_code"
                value={formData.address_zip_code || ''}
                onChange={(e) => handleInputChange('address_zip_code', e.target.value)}
                placeholder="00000-000"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="donation_motivation">Motivação para Doação</Label>
            <Textarea
              id="donation_motivation"
              value={formData.donation_motivation || ''}
              onChange={(e) => handleInputChange('donation_motivation', e.target.value)}
              placeholder="Descreva a motivação do usuário..."
              rows={3}
            />
          </div>

          <div className="flex justify-end space-x-2 pt-4">
            <Button variant="outline" onClick={onClose}>
              Cancelar
            </Button>
            <Button onClick={handleSave} disabled={saving}>
              {saving ? 'Salvando...' : 'Salvar'}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default EditUserModal;
