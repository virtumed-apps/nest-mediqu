import { PrismaService } from 'src/database/prisma/prisma.service';
import { BadRequestException } from '@nestjs/common';
import { UserRepository } from 'src/app/user/repositories/userRepository';
import * as bcrypt from 'bcrypt';

describe('UserRepository', () => {
  let userRepository: UserRepository;
  let prismaService: PrismaService;

  beforeEach(() => {
    prismaService = new PrismaService();
    userRepository = new UserRepository(prismaService);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('createUser', () => {
    it('should create a new user with hashed password', async () => {
      const createUserSwagger = {
        name: 'John Doe',
        email: 'john@example.com',
        password: 'password123',
        confirmPassword: 'password123',
        avatar_url: 'example.com/avatar',
        active: true,
      };

      const createdUser = {
        id: '1',
        name: createUserSwagger.name,
        email: createUserSwagger.email,
        password: 'hashedPassword',
        avatar_url: createUserSwagger.avatar_url,
        active: true,
        role: 'user',
        first_time: true,
        userInfoId: '',
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      jest.spyOn(prismaService.user, 'create').mockResolvedValue(createdUser);

      const result = await userRepository.createUser(createUserSwagger);

      expect(bcrypt.hash).toHaveBeenCalledWith(createUserSwagger.password, 10);
      expect(prismaService.user.create).toHaveBeenCalledWith({
        data: {
          avatar_url: createUserSwagger.avatar_url,
          name: createUserSwagger.name,
          email: createUserSwagger.email,
          role: 'user',
          password: 'hashedPassword',
        },
        select: userRepository['userSelect'],
      });
      expect(result).toEqual(createdUser);
    });

    it('should throw BadRequestException when passwords do not match', async () => {
      const createUserSwagger = {
        name: 'John Doe',
        email: 'john@example.com',
        password: 'password123',
        confirmPassword: 'differentPassword',
        avatar_url: 'example.com/avatar',
        active: true,
      };

      await expect(
        userRepository.createUser(createUserSwagger),
      ).rejects.toThrow(BadRequestException);
    });
  });

  // Add more test cases for other methods in UserRepository if needed
});
