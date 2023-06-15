// import { Module } from '@nestjs/common';
// import { MailerModule, MailerService } from '@nestjs-modules/mailer';
// import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';
// import { ConfigModule, ConfigService } from '@nestjs/config';
// import { join } from 'path';
// import { IMailConfig } from '../../common/config/mail';
// import { HandlebarsMailTemplateProvider } from './service/handlebarsMailTemplateProvider.service';
// import { SESMailProvider } from './service/SESMailProvider.service';
// import { EtherealMailProvider } from './service/etherealMailProvider.service';
// import AWS from 'aws-sdk';

// @Module({
//   imports: [
//     ConfigModule.forRoot(), // Adicione esta linha para importar o ConfigModule
//     MailerModule.forRootAsync({
//       imports: [ConfigModule],
//       useFactory: async (configService: ConfigService) => {
//         const driver = configService.get<string>('mail.driver');
//         const transport =
//           driver === 'ses'
//             ? new AWS.SES({ region: 'us-east-1' })
//             : {
//                 host: 'smtp.ethereal.email',
//                 port: 587,
//                 secure: false,
//                 auth: {
//                   user: 'your-ethereal-user',
//                   pass: 'your-ethereal-password',
//                 },
//               };

//         return {
//           transport,
//           defaults: {
//             from: {
//               name: configService.get<string>('mail.defaults.from.name'),
//               address: configService.get<string>('mail.defaults.from.email'),
//             },
//           },
//           template: {
//             dir: join(__dirname, 'mail'),
//             adapter: new HandlebarsAdapter(),
//             options: {
//               strict: true,
//             },
//           },
//         };
//       },
//       inject: [ConfigService],
//     }),
//     // Outros módulos necessários
//   ],
//   providers: [
//     HandlebarsMailTemplateProvider,
//     SESMailProvider,
//     EtherealMailProvider,
//     {
//       provide: 'MailProvider',
//       useFactory: (
//         configService: ConfigService,
//         mailerService: MailerService,
//         handlebarsMailTemplateProvider: HandlebarsMailTemplateProvider,
//       ) => {
//         const driver = configService.get<string>('mail.driver');

//         if (driver === 'ses') {
//           return new SESMailProvider(
//             mailerService,
//             handlebarsMailTemplateProvider,
//             configService.get<IMailConfig>('mail'), // Passa a configuração do email para o provedor SESMailProvider
//             configService,
//           );
//         } else if (driver === 'ethereal') {
//           return new EtherealMailProvider(
//             mailerService,
//             handlebarsMailTemplateProvider,
//           );
//         } else {
//           throw new Error(`Unsupported mail driver: ${driver}`);
//         }
//       },
//       inject: [ConfigService, MailerService, HandlebarsMailTemplateProvider],
//     },
//   ],
//   exports: ['MailProvider'], // Exporta o provedor de e-mail para uso em outros módulos
// })
// export class MailModule {}
