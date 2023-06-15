// import { Injectable } from '@nestjs/common';
// import { MailerService } from '@nestjs-modules/mailer';
// import IMailProvider from '../interface/MailProvider/IMailProvider';
// import IMailTemplateProvider from '../interface/MailTemplateProvider/IMailTemplateProvider';
// import ISendMailDTO from '../interface/ISendMailDTO';
// import { IMailConfig } from 'src/common/config/mail';
// import { ConfigService } from '@nestjs/config';

// @Injectable()
// export class SESMailProvider implements IMailProvider {
//   constructor(
//     private readonly mailerService: MailerService,
//     private readonly mailTemplateProvider: IMailTemplateProvider,
//     private readonly mailConfig: IMailConfig,
//     private readonly configService: ConfigService,
//   ) {}

//   public async sendMail({
//     to,
//     from,
//     subject,
//     templateData,
//   }: ISendMailDTO): Promise<void> {
//     const { name, email } = this.mailConfig.defaults.from;

//     await this.mailerService.sendMail({
//       from: {
//         name: from?.name || name,
//         address: from?.email || email,
//       },
//       to: {
//         name: to.name,
//         address: to.email,
//       },
//       subject,
//       html: await this.mailTemplateProvider.parse(templateData),
//     });
//   }
// }
