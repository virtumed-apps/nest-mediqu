import { Role } from '@prisma/client';

export class User {
  id: string;
  name: string;
  email: string;
  password: string;
  refreshToken: string;
  active: boolean;
  avatar_url: string;
  role: Role;
  accountLocked: boolean; // Novo campo adicionado
  failedLoginAttempts: number; // Adicione esta linha
  createdAt?: Date;
  updatedAt?: Date;
}
