import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma/prisma.service';
import { Chat } from 'src/entities/chat.entities';
import { CreateMessageSwagger } from '../swagger/create-chat.dto';

@Injectable()
export class ChatRepository {
  constructor(private readonly prisma: PrismaService) {}

  async createMessage(data: CreateMessageSwagger): Promise<Chat> {
    return await this.prisma.chat.create({
      data: {
        text: data.text,
      },
    });
  }

  async getMessages(): Promise<Chat[]> {
    return await this.prisma.chat.findMany();
  }
}
