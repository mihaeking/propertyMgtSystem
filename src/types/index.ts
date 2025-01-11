
export interface User {
    id: string;
    role: 'owner' | 'tenant' | 'administrator';
    name: string;
  }
  