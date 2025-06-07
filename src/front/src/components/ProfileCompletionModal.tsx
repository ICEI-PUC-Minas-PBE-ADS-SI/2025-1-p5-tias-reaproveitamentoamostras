
import React from 'react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import UserProfileForm from './UserProfileForm';

interface ProfileCompletionModalProps {
  isOpen: boolean;
  onComplete: () => void;
}

const ProfileCompletionModal: React.FC<ProfileCompletionModalProps> = ({ isOpen, onComplete }) => {
  return (
    <Dialog open={isOpen} onOpenChange={() => {}}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Bem-vindo ao ReAmostra!</DialogTitle>
          <DialogDescription>
            Para começar a receber doações, precisamos que você complete seu perfil.
          </DialogDescription>
        </DialogHeader>
        
        <UserProfileForm onComplete={onComplete} isFirstTime={true} />
      </DialogContent>
    </Dialog>
  );
};

export default ProfileCompletionModal;
