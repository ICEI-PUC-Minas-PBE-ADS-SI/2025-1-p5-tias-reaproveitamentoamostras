
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/context/AuthContext';

const Navbar = () => {
  const location = useLocation();
  const { isAuthenticated, currentUser, logout } = useAuth();

  return (
    <header className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between p-4">
        <div className="flex items-center">
          <Link to="/" className="flex items-center gap-2">
            <span className="text-grain-600 text-2xl font-serif font-bold">ReAmostra</span>
          </Link>
        </div>
        
        <nav className="hidden md:flex items-center space-x-6">
          <NavLink to="/" active={location.pathname === "/"}>
            Home
          </NavLink>
          <NavLink to="/graos-disponiveis" active={location.pathname === "/graos-disponiveis"}>
            Grãos Disponíveis
          </NavLink>
          <NavLink to="/about" active={location.pathname === "/about"}>
            Quem Somos
          </NavLink>
          {isAuthenticated && currentUser?.role === 'user' && (
            <>
              <NavLink to="/user-dashboard" active={location.pathname === "/user-dashboard"}>
                Minhas Solicitações
              </NavLink>
              <NavLink to="/profile" active={location.pathname === "/profile"}>
                Meu Perfil
              </NavLink>
            </>
          )}
          {isAuthenticated && currentUser?.role === 'admin' && (
            <NavLink to="/admin-dashboard" active={location.pathname === "/admin-dashboard"}>
              Admin Dashboard
            </NavLink>
          )}
        </nav>
        
        <div className="flex items-center gap-4">
          {isAuthenticated ? (
            <div className="flex items-center gap-4">
              <span className="text-sm text-muted-foreground hidden md:inline-block">
                Olá, {currentUser?.name}
              </span>
              <Button variant="outline" onClick={logout}>
                Sair
              </Button>
            </div>
          ) : (
            <>
              <Link to="/login">
                <Button variant="outline">Entrar</Button>
              </Link>
              <Link to="/register" className="hidden md:block">
                <Button>Cadastrar</Button>
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

interface NavLinkProps {
  to: string;
  active: boolean;
  children: React.ReactNode;
}

const NavLink: React.FC<NavLinkProps> = ({ to, active, children }) => (
  <Link
    to={to}
    className={`text-base font-medium transition-colors hover:text-grain-600 ${
      active ? 'text-grain-600 border-b-2 border-grain-600' : 'text-foreground'
    }`}
  >
    {children}
  </Link>
);

export default Navbar;
