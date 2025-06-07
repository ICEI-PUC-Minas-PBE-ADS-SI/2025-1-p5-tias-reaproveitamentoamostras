
export type UserRole = 'admin' | 'user';

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
}

export interface Grain {
  id: string;
  name: string;
  description: string;
  quantity: number;
  available_date: string;
  image_url?: string;
  created_by: string;
  created_at: string;
}

export type ApplicationStatus = 'pending' | 'selected' | 'delivered';

export interface Application {
  id: string;
  user_id: string;
  grain_id: string;
  status: ApplicationStatus;
  created_at: string;
  grain?: Grain;
  user?: User;
}
