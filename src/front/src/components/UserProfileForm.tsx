
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useUserProfile, UserProfile } from '@/hooks/useUserProfile';

interface UserProfileFormProps {
  onComplete?: () => void;
  isFirstTime?: boolean;
}

const UserProfileForm: React.FC<UserProfileFormProps> = ({ onComplete, isFirstTime = false }) => {
  const { profile, saveProfile } = useUserProfile();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const initialFormData = {
    address_street: '',
    address_number: '',
    address_complement: '',
    address_neighborhood: '',
    address_city: '',
    address_state: '',
    address_zip_code: '',
    phone: '',
    donation_motivation: '',
    profile_completed: false,
  };

  const [formData, setFormData] = useState(initialFormData);

  useEffect(() => {
    if (profile) {
      setFormData({
        ...initialFormData,
        ...profile,
      });
    }
  }, [profile]);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const requiredFields = [
      'address_street', 'address_number', 'address_neighborhood',
      'address_city', 'address_state', 'address_zip_code',
      'phone', 'donation_motivation'
    ];

    const missingFields = requiredFields.filter(field => !formData[field as keyof typeof formData].toString().trim());
    if (missingFields.length > 0) {
      alert(`Por favor, preencha os campos obrigatórios: ${missingFields.join(', ')}`);
      return;
    }

    setIsSubmitting(true);

    const success = await saveProfile(formData);
    if (!success) {
      alert('Erro ao salvar o perfil. Tente novamente.');
    } else if (onComplete) {
      onComplete();
    }

    setIsSubmitting(false);
  };

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>
          {isFirstTime ? 'Complete seu Perfil' : 'Meus Dados'}
        </CardTitle>
        <CardDescription>
          {isFirstTime 
            ? 'Para receber doações, precisamos de algumas informações básicas.'
            : 'Gerencie suas informações pessoais e de contato.'
          }
        </CardDescription>
      </CardHeader>
      
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Endereço</h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="md:col-span-2">
                <Label htmlFor="address_street">Rua/Avenida *</Label>
                <Input
                  id="address_street"
                  value={formData.address_street}
                  onChange={(e) => handleInputChange('address_street', e.target.value)}
                  required
                />
              </div>
              
              <div>
                <Label htmlFor="address_number">Número *</Label>
                <Input
                  id="address_number"
                  value={formData.address_number}
                  onChange={(e) => handleInputChange('address_number', e.target.value)}
                  required
                />
              </div>
            </div>

            <div>
              <Label htmlFor="address_complement">Complemento</Label>
              <Input
                id="address_complement"
                value={formData.address_complement}
                onChange={(e) => handleInputChange('address_complement', e.target.value)}
                placeholder="Apartamento, bloco, etc."
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="address_neighborhood">Bairro *</Label>
                <Input
                  id="address_neighborhood"
                  value={formData.address_neighborhood}
                  onChange={(e) => handleInputChange('address_neighborhood', e.target.value)}
                  required
                />
              </div>
              
              <div>
                <Label htmlFor="address_city">Cidade *</Label>
                <Input
                  id="address_city"
                  value={formData.address_city}
                  onChange={(e) => handleInputChange('address_city', e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="address_state">Estado *</Label>
                <Input
                  id="address_state"
                  value={formData.address_state}
                  onChange={(e) => handleInputChange('address_state', e.target.value)}
                  required
                />
              </div>
              
              <div>
                <Label htmlFor="address_zip_code">CEP *</Label>
                <Input
                  id="address_zip_code"
                  value={formData.address_zip_code}
                  onChange={(e) => handleInputChange('address_zip_code', e.target.value)}
                  placeholder="00000-000"
                  required
                />
              </div>
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Contato</h3>
            
            <div>
              <Label htmlFor="phone">Telefone *</Label>
              <Input
                id="phone"
                value={formData.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
                placeholder="(11) 99999-9999"
                required
              />
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Motivação</h3>
            
            <div>
              <Label htmlFor="donation_motivation">Por que você deseja receber doações? *</Label>
              <Textarea
                id="donation_motivation"
                value={formData.donation_motivation}
                onChange={(e) => handleInputChange('donation_motivation', e.target.value)}
                placeholder="Conte-nos sobre sua motivação para receber as doações de grãos..."
                className="min-h-[100px]"
                required
              />
            </div>
          </div>
          
          <Button
            type="submit"
            className="w-full"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Salvando...' : (isFirstTime ? 'Completar Perfil' : 'Salvar Alterações')}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default UserProfileForm;
