import { ChatRepository } from 'src/app/chat/repositories/chatRepository';

import { Controller, Get, Render } from '@nestjs/common';

@Controller()
export class AppController {
  constructor(private readonly chatRespository: ChatRepository) {}

  @Get('/chat')
  @Render('index')
  Home() {
    return console.log('ok');
  }

  @Get('/api/chat')
  async Chat() {
    return await this.chatRespository.getMessages();
  }
}
