import { Role } from '@prisma/client';

export class User {
  id: string;
  name: string;
  email: string;
  password: string;
  active: boolean;
  avatar_url: string;
  role: Role;
  createdAt?: Date;
  updatedAt?: Date;
}
