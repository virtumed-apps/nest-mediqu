import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from 'src/database/prisma/prisma.module';
import { UserModule } from 'src/app/user/user.module';
import { SecurityModule } from 'src/app/security/security.module';
import { AdminModule } from 'src/app/admin/admin.module';
import { AppointmentModule } from 'src/app/appointments/appointment.module';
import { UserTokenModule } from 'src/app/user-token/user-token.module';
import { MailModule } from 'src/app/mail/mailer.module';
import { ProfissionalModule } from 'src/app/profissional/profissional.module';
import { ChatModule } from 'src/app/chat/chat.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // no need to import into other modules
    }),
    PrismaModule,
    AdminModule,
    AppointmentModule,
    ProfissionalModule,
    UserModule,
    UserTokenModule,
    SecurityModule,
    MailModule,
    ChatModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
