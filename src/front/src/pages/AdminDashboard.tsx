import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/context/AuthContext';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from '@/hooks/use-toast';
import { Edit, Trash2, Search, Users, Mail, Phone, MapPin } from 'lucide-react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ApplicationCard from '@/components/ApplicationCard';
import EditGrainModal from '@/components/EditGrainModal';
import EditUserModal from '@/components/EditUserModal';
import { useGrains } from '@/hooks/useGrains';
import { useApplications } from '@/hooks/useApplications';
import { useAdminUsers } from '@/hooks/useAdminUsers';
import { Grain, ApplicationStatus } from '@/types';

const AdminDashboard = () => {
  const { currentUser, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const { grains, loading: grainsLoading, addGrain, updateGrain, deleteGrain } = useGrains();
  const { applications, loading: applicationsLoading, updateApplicationStatus } = useApplications();
  const { users, loading: usersLoading, updateUser } = useAdminUsers();
  
  const [searchTerm, setSearchTerm] = useState('');
  const [userSearchTerm, setUserSearchTerm] = useState('');
  const [newGrain, setNewGrain] = useState<Partial<Grain>>({
    name: '',
    description: '',
    quantity: 0,
    available_date: new Date().toISOString().split('T')[0],
    image_url: 'https://images.unsplash.com/photo-1455853828816-0c301a011711?w=500&auto=format&fit=crop'
  });
  
  const [editingGrain, setEditingGrain] = useState<Grain | null>(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editingUser, setEditingUser] = useState<any>(null);
  const [isEditUserModalOpen, setIsEditUserModalOpen] = useState(false);
  
  useEffect(() => {
    // Redirect if not authenticated or not admin
    if (!isAuthenticated || currentUser?.role !== 'admin') {
      navigate('/login');
      return;
    }
  }, [currentUser, isAuthenticated, navigate]);
  
  // Filter grains based on search term
  const filteredGrains = grains.filter(grain =>
    grain.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Filter users based on search term
  const filteredUsers = users.filter(user =>
    user.name?.toLowerCase().includes(userSearchTerm.toLowerCase()) ||
    user.email?.toLowerCase().includes(userSearchTerm.toLowerCase())
  );
  
  // Handler for adding a new grain
  const handleAddGrain = async () => {
    if (!newGrain.name || !newGrain.description || !newGrain.quantity || !newGrain.available_date) {
      toast({
        title: 'Campos obrigatórios',
        description: 'Todos os campos são obrigatórios.',
        variant: 'destructive'
      });
      return;
    }
    
    const success = await addGrain({
      name: newGrain.name,
      description: newGrain.description,
      quantity: Number(newGrain.quantity),
      available_date: newGrain.available_date,
      image_url: newGrain.image_url || 'https://images.unsplash.com/photo-1455853828816-0c301a011711?w=500&auto=format&fit=crop'
    });
    
    if (success) {
      setNewGrain({
        name: '',
        description: '',
        quantity: 0,
        available_date: new Date().toISOString().split('T')[0],
        image_url: 'https://images.unsplash.com/photo-1455853828816-0c301a011711?w=500&auto=format&fit=crop'
      });
    }
  };
  
  // Handler for editing a grain
  const handleEditGrain = (grain: Grain) => {
    setEditingGrain(grain);
    setIsEditModalOpen(true);
  };
  
  const handleSaveEditedGrain = async (id: string, grainData: Partial<Grain>) => {
    return await updateGrain(id, grainData);
  };
  
  const handleCloseEditModal = () => {
    setEditingGrain(null);
    setIsEditModalOpen(false);
  };
  
  // Handler for updating application status
  const handleUpdateApplicationStatus = async (id: string, status: ApplicationStatus) => {
    await updateApplicationStatus(id, status);
  };
  
  const handleDeleteGrain = async (id: string) => {
    if (confirm('Tem certeza que deseja deletar este grão?')) {
      await deleteGrain(id);
    }
  };
  
  const handleDrawUsers = () => {
    const pendingApplications = applications.filter(app => app.status === 'pending');
    
    if (pendingApplications.length === 0) {
      toast({
        title: 'Nenhuma candidatura pendente',
        description: 'Não há candidaturas pendentes para realizar o sorteio.',
        variant: 'destructive'
      });
      return;
    }
    
    const numToSelect = Math.min(3, pendingApplications.length);
    let selected = 0;
    
    const shuffled = [...pendingApplications].sort(() => 0.5 - Math.random());
    const selectedApps = shuffled.slice(0, numToSelect);
    
    selectedApps.forEach(app => {
      handleUpdateApplicationStatus(app.id, 'selected');
      selected++;
    });
    
    toast({
      title: 'Sorteio realizado',
      description: `${selected} candidatos foram sorteados com sucesso.`
    });
  };
  
  // Handlers for user management
  const handleEditUser = (user: any) => {
    setEditingUser(user);
    setIsEditUserModalOpen(true);
  };

  const handleSaveUser = async (userId: string, userData: any) => {
    return await updateUser(userId, userData);
  };

  const handleCloseUserModal = () => {
    setEditingUser(null);
    setIsEditUserModalOpen(false);
  };
  
  if (grainsLoading || applicationsLoading || usersLoading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-xl font-semibold mb-2">Carregando...</h2>
            <p className="text-muted-foreground">Aguarde um momento.</p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-1 py-8">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Painel Administrativo</h1>
            <p className="text-muted-foreground">
              Bem-vindo(a), {currentUser?.name}. Gerencie grãos, usuários e candidaturas.
            </p>
          </div>
          
          <Tabs defaultValue="applications" className="mb-8">
            <TabsList className="grid grid-cols-3 mb-4">
              <TabsTrigger value="applications">Candidaturas</TabsTrigger>
              <TabsTrigger value="grains">Gerenciar Grãos</TabsTrigger>
              <TabsTrigger value="users">Gerenciar Usuários</TabsTrigger>
            </TabsList>
            
            <TabsContent value="applications" className="pt-4">
              <div className="flex justify-end mb-6">
                <Button onClick={handleDrawUsers}>Realizar Sorteio</Button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {applications.map((application) => (
                  <ApplicationCard 
                    key={application.id}
                    application={application}
                    isAdmin={true}
                    onUpdateStatus={handleUpdateApplicationStatus}
                  />
                ))}
                {applications.length === 0 && (
                  <div className="col-span-full text-center py-12 bg-muted/30 rounded-lg">
                    <h3 className="text-xl font-medium mb-2">Nenhuma candidatura encontrada</h3>
                    <p className="text-muted-foreground">
                      Não há candidaturas registradas no sistema.
                    </p>
                  </div>
                )}
              </div>
            </TabsContent>

            <TabsContent value="users" className="pt-4">
              <div className="mb-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold flex items-center gap-2">
                    <Users className="h-5 w-5" />
                    Usuários do Sistema ({filteredUsers.length})
                  </h3>
                  <div className="relative w-64">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                    <Input
                      placeholder="Buscar usuários..."
                      value={userSearchTerm}
                      onChange={(e) => setUserSearchTerm(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                </div>
              </div>

              <Card>
                <CardContent className="p-0">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Nome</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead>Papel</TableHead>
                        <TableHead>Telefone</TableHead>
                        <TableHead>Cidade</TableHead>
                        <TableHead>Perfil</TableHead>
                        <TableHead>Ações</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {filteredUsers.map((user) => (
                        <TableRow key={user.id}>
                          <TableCell className="font-medium">
                            {user.name || 'Sem nome'}
                          </TableCell>
                          <TableCell>
                            <div className="flex items-center gap-2">
                              <Mail className="h-4 w-4 text-muted-foreground" />
                              {user.email}
                            </div>
                          </TableCell>
                          <TableCell>
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                              user.role === 'admin' 
                                ? 'bg-red-100 text-red-700' 
                                : 'bg-blue-100 text-blue-700'
                            }`}>
                              {user.role === 'admin' ? 'Admin' : 'Usuário'}
                            </span>
                          </TableCell>
                          <TableCell>
                            {user.phone ? (
                              <div className="flex items-center gap-2">
                                <Phone className="h-4 w-4 text-muted-foreground" />
                                {user.phone}
                              </div>
                            ) : (
                              <span className="text-muted-foreground">-</span>
                            )}
                          </TableCell>
                          <TableCell>
                            {user.address_city ? (
                              <div className="flex items-center gap-2">
                                <MapPin className="h-4 w-4 text-muted-foreground" />
                                {user.address_city}, {user.address_state}
                              </div>
                            ) : (
                              <span className="text-muted-foreground">-</span>
                            )}
                          </TableCell>
                          <TableCell>
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                              user.profile_completed 
                                ? 'bg-green-100 text-green-700' 
                                : 'bg-yellow-100 text-yellow-700'
                            }`}>
                              {user.profile_completed ? 'Completo' : 'Incompleto'}
                            </span>
                          </TableCell>
                          <TableCell>
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => handleEditUser(user)}
                            >
                              <Edit className="h-4 w-4" />
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>

                  {filteredUsers.length === 0 && (
                    <div className="text-center py-12">
                      <h3 className="text-xl font-medium mb-2">Nenhum usuário encontrado</h3>
                      <p className="text-muted-foreground">
                        {userSearchTerm ? 
                          `Não há usuários que correspondam à busca "${userSearchTerm}".` :
                          'Não há usuários cadastrados no sistema.'
                        }
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="grains" className="pt-4">
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle>Adicionar Novo Grão</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="grain-name">Nome do Grão</Label>
                      <Input 
                        id="grain-name"
                        value={newGrain.name}
                        onChange={(e) => setNewGrain({...newGrain, name: e.target.value})}
                        placeholder="Ex: Arroz Integral"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="grain-date">Data Disponível</Label>
                      <Input 
                        id="grain-date"
                        type="date"
                        value={newGrain.available_date}
                        onChange={(e) => setNewGrain({...newGrain, available_date: e.target.value})}
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="grain-desc">Descrição</Label>
                    <Input 
                      id="grain-desc"
                      value={newGrain.description}
                      onChange={(e) => setNewGrain({...newGrain, description: e.target.value})}
                      placeholder="Breve descrição do grão"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="grain-qty">Quantidade (kg)</Label>
                    <Input 
                      id="grain-qty"
                      type="number"
                      value={newGrain.quantity}
                      onChange={(e) => setNewGrain({...newGrain, quantity: Number(e.target.value)})}
                      min="0"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="grain-image">URL da Imagem</Label>
                    <Input 
                      id="grain-image"
                      value={newGrain.image_url}
                      onChange={(e) => setNewGrain({...newGrain, image_url: e.target.value})}
                      placeholder="https://exemplo.com/imagem.jpg"
                    />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button onClick={handleAddGrain}>Adicionar Grão</Button>
                </CardFooter>
              </Card>
              
              <div className="mb-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold">Grãos Cadastrados</h3>
                  <div className="relative w-64">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                    <Input
                      placeholder="Buscar grãos por nome..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {filteredGrains.map(grain => (
                  <Card key={grain.id}>
                    <CardHeader>
                      <CardTitle className="flex justify-between items-start">
                        <span>{grain.name}</span>
                        <div className="flex gap-2">
                          <Button 
                            variant="outline" 
                            size="sm"
                            onClick={() => handleEditGrain(grain)}
                          >
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button 
                            variant="destructive" 
                            size="sm"
                            onClick={() => handleDeleteGrain(grain.id)}
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      {grain.image_url && (
                        <img 
                          src={grain.image_url} 
                          alt={grain.name}
                          className="w-full h-32 object-cover rounded mb-2"
                        />
                      )}
                      <p className="mb-2">{grain.description}</p>
                      <p className="text-sm text-muted-foreground">
                        Disponível em: {new Date(grain.available_date).toLocaleDateString('pt-BR')}
                      </p>
                      <p className="font-medium mt-2">Quantidade: {grain.quantity}kg</p>
                    </CardContent>
                  </Card>
                ))}
                {filteredGrains.length === 0 && searchTerm && (
                  <div className="col-span-full text-center py-12 bg-muted/30 rounded-lg">
                    <h3 className="text-xl font-medium mb-2">Nenhum grão encontrado</h3>
                    <p className="text-muted-foreground">
                      Não há grãos que correspondam à sua busca "{searchTerm}".
                    </p>
                  </div>
                )}
                {grains.length === 0 && !searchTerm && (
                  <div className="col-span-full text-center py-12 bg-muted/30 rounded-lg">
                    <h3 className="text-xl font-medium mb-2">Nenhum grão cadastrado</h3>
                    <p className="text-muted-foreground">
                      Adicione grãos usando o formulário acima.
                    </p>
                  </div>
                )}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
      
      <EditGrainModal
        grain={editingGrain}
        isOpen={isEditModalOpen}
        onClose={handleCloseEditModal}
        onSave={handleSaveEditedGrain}
      />

      <EditUserModal
        user={editingUser}
        isOpen={isEditUserModalOpen}
        onClose={handleCloseUserModal}
        onSave={handleSaveUser}
      />
      
      <Footer />
    </div>
  );
};

export default AdminDashboard;
