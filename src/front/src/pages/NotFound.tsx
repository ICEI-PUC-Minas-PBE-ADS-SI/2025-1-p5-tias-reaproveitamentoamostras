
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-1 flex items-center justify-center bg-muted/30">
        <div className="text-center px-4">
          <h1 className="text-6xl font-bold text-grain-600 mb-6">404</h1>
          <h2 className="text-2xl font-bold mb-4">Página não encontrada</h2>
          <p className="text-muted-foreground mb-8 max-w-md mx-auto">
            A página que você está procurando não existe ou foi removida.
          </p>
          <Link to="/">
            <Button>Voltar para a Home</Button>
          </Link>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default NotFound;
