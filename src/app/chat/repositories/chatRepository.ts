import { Injectable } from '@nestjs/common';
import { Chat } from '@prisma/client';
import { PrismaService } from 'src/database/prisma/prisma.service';

@Injectable()
export class ChatRepository {
  constructor(private prisma: PrismaService) {}

  async createMessage(chat: Chat): Promise<Chat> {
    return this.prisma.chat.create({ data: chat });
  }

  async getMessages(): Promise<Chat[]> {
    return this.prisma.chat.findMany();
  }
}
