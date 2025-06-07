
import { User, Grain, Application } from '../types';

export const mockUsers: User[] = [
  {
    id: '1',
    name: 'Admin User',
    email: 'admin@graindonate.org',
    role: 'admin',
  },
  {
    id: '2',
    name: 'João Silva',
    email: 'joao@example.com',
    role: 'user',
  },
  {
    id: '3',
    name: 'Maria Pereira',
    email: 'maria@example.com',
    role: 'user',
  },
];

export const mockGrains: Grain[] = [
  {
    id: '1',
    name: 'Arroz Integral',
    description: 'Arroz integral de alta qualidade, rico em nutrientes e fibras.',
    quantity: 500,
    available_date: '2023-06-15',
    image_url: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=500&auto=format&fit=crop',
    created_by: '1',
    created_at: '2023-05-01'
  },
  {
    id: '2',
    name: 'Feijão Preto',
    description: 'Feijão preto cultivado organicamente, fonte de proteínas.',
    quantity: 350,
    available_date: '2023-06-20',
    image_url: 'https://images.unsplash.com/photo-1627735747011-b8c0963469a0?w=500&auto=format&fit=crop',
    created_by: '1',
    created_at: '2023-05-02'
  },
  {
    id: '3',
    name: 'Milho',
    description: 'Milho fresco para consumo e plantio.',
    quantity: 600,
    available_date: '2023-06-10',
    image_url: 'https://images.unsplash.com/photo-1554402100-8d1d9f3dff80?w=500&auto=format&fit=crop',
    created_by: '1',
    created_at: '2023-05-03'
  },
  {
    id: '4',
    name: 'Trigo',
    description: 'Trigo para produção de farinhas e massas.',
    quantity: 450,
    available_date: '2023-07-05',
    image_url: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6962fb?w=500&auto=format&fit=crop',
    created_by: '1',
    created_at: '2023-05-04'
  },
];

export const mockApplications: Application[] = [
  {
    id: '1',
    user_id: '2',
    grain_id: '1',
    status: 'pending',
    created_at: '2023-05-20',
  },
  {
    id: '2',
    user_id: '3',
    grain_id: '2',
    status: 'selected',
    created_at: '2023-05-15',
  },
  {
    id: '3',
    user_id: '2',
    grain_id: '3',
    status: 'delivered',
    created_at: '2023-04-10',
  },
];

// Helper function to get applications with grain and user data
export const getApplicationsWithDetails = () => {
  return mockApplications.map(application => ({
    ...application,
    grain: mockGrains.find(grain => grain.id === application.grain_id),
    user: mockUsers.find(user => user.id === application.user_id),
  }));
};
