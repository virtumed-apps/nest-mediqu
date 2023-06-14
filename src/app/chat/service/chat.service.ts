import { Injectable } from '@nestjs/common';
import { CreateMessageSwagger } from '../swagger/create-chat.dto';
import { ChatRepository } from '../repositories/chatRepository';
import { Chat } from 'src/entities/chat.entities';

@Injectable()
export class ChatService {
  constructor(private readonly chatRepository: ChatRepository) {}

  async createMessage(data: CreateMessageSwagger): Promise<Chat> {
    return this.chatRepository.createMessage(data);
  }

  async getMessage(): Promise<Chat[]> {
    return this.chatRepository.getMessages();
  }
}
