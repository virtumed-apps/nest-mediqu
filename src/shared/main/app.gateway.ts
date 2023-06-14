import {
  SubscribeMessage,
  WebSocketGateway,
  OnGatewayInit,
  WebSocketServer,
  OnGatewayConnection,
  OnGatewayDisconnect,
} from '@nestjs/websockets';
import { Socket, Server } from 'socket.io';
import { ChatService } from 'src/app/chat/service/chat.service';
import { Chat } from 'src/entities/chat.entities';

@WebSocketGateway({
  cors: {
    origin: '*',
  },
})
export class AppGateway
  implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect
{
  constructor(private chatService: ChatService) {}

  @WebSocketServer() server: Server;

  @SubscribeMessage('sendMessage')
  async handleSendMessage(client: Socket, payload: Chat): Promise<void> {
    await this.chatService.createMessage(payload);
    this.server.emit('recMessage', payload);
  }
  // adicionar retorno
  afterInit(server: Server) {
    console.log(server);
  }

  // adicionar retorno
  handleDisconnect(client: Socket) {
    console.log(`Disconnected: ${client.id}`);
  }

  // adicionar retorno
  handleConnection(client: Socket /*,...args: any[]*/) {
    console.log(`Connected ${client.id}`);
  }
}
