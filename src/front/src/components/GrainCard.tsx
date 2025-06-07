
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface GrainCardProps {
  grain: {
    id: string;
    name: string;
    description: string;
    quantity: number;
    availableDate: string;
    image?: string;
  };
  onApply?: (grainId: string) => void;
  isAdmin?: boolean;
  isApplied?: boolean;
}

const GrainCard: React.FC<GrainCardProps> = ({ grain, onApply, isAdmin = false, isApplied = false }) => {
  const availableDate = new Date(grain.availableDate);
  const formattedDate = new Intl.DateTimeFormat('pt-BR').format(availableDate);
  
  return (
    <Card className="h-full flex flex-col overflow-hidden transition-shadow hover:shadow-lg">
      {grain.image && (
        <div className="w-full h-48 overflow-hidden">
          <img 
            src={grain.image} 
            alt={grain.name}
            className="w-full h-full object-cover transition-transform hover:scale-105"
          />
        </div>
      )}
      
      <CardHeader>
        <div className="flex justify-between items-start">
          <CardTitle className="text-xl">{grain.name}</CardTitle>
          <Badge variant={grain.quantity > 300 ? "default" : "secondary"}>
            {grain.quantity}kg disponíveis
          </Badge>
        </div>
        <CardDescription>
          Disponível em: {formattedDate}
        </CardDescription>
      </CardHeader>
      
      <CardContent className="flex-grow">
        <p className="text-sm text-muted-foreground">{grain.description}</p>
      </CardContent>
      
      {!isAdmin && (
        <CardFooter className="pt-2">
          <Button 
            onClick={() => onApply && onApply(grain.id)} 
            disabled={isApplied}
            className="w-full"
            variant={isApplied ? "outline" : "default"}
          >
            {isApplied ? "Candidatura Enviada" : "Candidatar-se"}
          </Button>
        </CardFooter>
      )}
    </Card>
  );
};

export default GrainCard;
