
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-earth-950 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">ReAmostra</h3>
            <p className="text-earth-100 mb-4">
              Promovendo o reaproveitamento sustentável de amostras de grãos analisadas pela Clastec, 
              evitando desperdícios e apoiando comunidades.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Links úteis</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-earth-100 hover:text-grain-300 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/graos-disponiveis" className="text-earth-100 hover:text-grain-300 transition-colors">
                  Grãos Disponíveis
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-earth-100 hover:text-grain-300 transition-colors">
                  Quem Somos
                </Link>
              </li>
              <li>
                <Link to="/login" className="text-earth-100 hover:text-grain-300 transition-colors">
                  Login
                </Link>
              </li>
              <li>
                <Link to="/register" className="text-earth-100 hover:text-grain-300 transition-colors">
                  Cadastro
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contato</h3>
            <address className="not-italic text-earth-100">
              <p className="mb-2">Endereço: Alameda dos Administradores, 176</p>
              <p className="mb-2">Cabral, Contagem - MG, 32145-690</p>
              <p className="mb-2">contato@reamostra.org</p>
              <p>(11) 9999-9999</p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-earth-800 mt-8 pt-8 text-center text-earth-300">
          <p>&copy; {new Date().getFullYear()} ReAmostra. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
