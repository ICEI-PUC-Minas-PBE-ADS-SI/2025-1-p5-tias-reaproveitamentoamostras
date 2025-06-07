
import React from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Application } from '@/types';

interface ApplicationCardProps {
  application: Application;
  onUpdateStatus?: (id: string, status: 'selected' | 'delivered') => void;
  isAdmin?: boolean;
}

const ApplicationCard: React.FC<ApplicationCardProps> = ({ 
  application, 
  onUpdateStatus, 
  isAdmin = false 
}) => {
  const createDate = new Date(application.created_at);
  const formattedDate = new Intl.DateTimeFormat('pt-BR').format(createDate);
  
  const statusMap = {
    'pending': { label: 'Pendente', color: 'bg-yellow-100 text-yellow-800' },
    'selected': { label: 'Selecionado', color: 'bg-blue-100 text-blue-800' },
    'delivered': { label: 'Entregue', color: 'bg-green-100 text-green-800' }
  };
  
  return (
    <Card className="h-full">
      <CardHeader>
        <div className="flex justify-between items-start">
          <CardTitle className="text-lg">
            {application.grain?.name || 'Grão não encontrado'}
          </CardTitle>
          <Badge className={statusMap[application.status].color}>
            {statusMap[application.status].label}
          </Badge>
        </div>
        <p className="text-sm text-muted-foreground">
          Solicitado em: {formattedDate}
        </p>
      </CardHeader>
      
      <CardContent>
        {isAdmin && application.user && (
          <div className="mb-4">
            <h4 className="font-medium">Candidato:</h4>
            <p>{application.user.name}</p>
            <p className="text-sm text-muted-foreground">{application.user.email}</p>
          </div>
        )}
        
        <div>
          <h4 className="font-medium">Detalhes do Grão:</h4>
          <p className="text-sm">{application.grain?.description}</p>
          <p className="text-sm mt-1">Quantidade disponível: {application.grain?.quantity}kg</p>
        </div>
      </CardContent>
      
      {isAdmin && onUpdateStatus && application.status !== 'delivered' && (
        <CardFooter className="flex gap-2">
          {application.status === 'pending' && (
            <Button 
              onClick={() => onUpdateStatus(application.id, 'selected')}
              variant="default"
              size="sm"
              className="w-full"
            >
              Selecionar Candidato
            </Button>
          )}
          
          {application.status === 'selected' && (
            <Button 
              onClick={() => onUpdateStatus(application.id, 'delivered')}
              variant="default"
              size="sm"
              className="w-full"
            >
              Marcar como Entregue
            </Button>
          )}
        </CardFooter>
      )}
    </Card>
  );
};

export default ApplicationCard;
