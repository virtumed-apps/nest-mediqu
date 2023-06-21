import { Module } from '@nestjs/common';
import { ChatGateway } from 'src/shared/main/chat.gateway';

@Module({
  imports: [],
  controllers: [],
  providers: [ChatGateway],
})
export class ChatModule {}
