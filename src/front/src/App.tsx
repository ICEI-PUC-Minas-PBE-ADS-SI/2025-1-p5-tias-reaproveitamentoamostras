
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import { AuthProvider, useAuth } from "./context/AuthContext";

import Index from "./pages/Index";
import About from "./pages/About";
import Login from "./pages/Login";
import Register from "./pages/Register";
import UserDashboard from "./pages/UserDashboard";
import AdminDashboard from "./pages/AdminDashboard";
import GraosDisponiveis from "./pages/GraosDisponiveis";
import UserProfile from "./pages/UserProfile";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

// Componente para redirecionar com base no papel do usuário
const AuthRedirect = () => {
  const { currentUser, isAuthenticated, isLoading } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    console.log('AuthRedirect - isLoading:', isLoading, 'isAuthenticated:', isAuthenticated, 'currentUser:', currentUser, 'location:', location.pathname);
    
    // Aguarde o carregamento terminar
    if (isLoading) return;
    
    // Se o usuário está autenticado
    if (isAuthenticated && currentUser) {
      // Só redirecione se estiver nas páginas de autenticação
      if (location.pathname === '/login' || location.pathname === '/register') {
        const targetPath = currentUser.role === 'admin' ? '/admin-dashboard' : '/user-dashboard';
        console.log(`Redirecting authenticated ${currentUser.role} from ${location.pathname} to ${targetPath}`);
        navigate(targetPath, { replace: true });
        return;
      }
      
      // Proteger rotas de admin
      if (location.pathname === '/admin-dashboard' && currentUser.role !== 'admin') {
        console.log('Non-admin trying to access admin dashboard, redirecting to user dashboard');
        navigate('/user-dashboard', { replace: true });
        return;
      }
      
      // Proteger rotas de usuário do admin
      if (location.pathname === '/user-dashboard' && currentUser.role === 'admin') {
        console.log('Admin trying to access user dashboard, redirecting to admin dashboard');
        navigate('/admin-dashboard', { replace: true });
        return;
      }
      
      // Proteger rota de perfil do usuário
      if (location.pathname === '/profile' && currentUser.role !== 'user') {
        console.log('Non-user trying to access profile, redirecting to admin dashboard');
        navigate('/admin-dashboard', { replace: true });
        return;
      }
    } 
    // Se o usuário não está autenticado
    else if (!isAuthenticated && !isLoading) {
      // Só redirecione para login se estiver tentando acessar rotas protegidas
      const protectedRoutes = ['/user-dashboard', '/admin-dashboard', '/profile'];
      if (protectedRoutes.includes(location.pathname)) {
        console.log('Unauthenticated user trying to access protected route, redirecting to login');
        navigate('/login', { replace: true });
      }
    }
  }, [isAuthenticated, currentUser, isLoading, navigate, location.pathname]);

  return null;
};

const AppRoutes = () => {
  return (
    <>
      <AuthRedirect />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<About />} />
        <Route path="/graos-disponiveis" element={<GraosDisponiveis />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/user-dashboard" element={<UserDashboard />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/profile" element={<UserProfile />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <AppRoutes />
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
