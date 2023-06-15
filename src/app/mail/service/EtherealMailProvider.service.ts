// import { Injectable } from '@nestjs/common';
// import { MailerService } from '@nestjs-modules/mailer';
// import IMailProviderEthereal from '../interface/MailProvider/IMailProviderEthereal';
// import IMailTemplateProvider from '../interface/MailTemplateProvider/IMailTemplateProvider';
// import ISendMailDTO from '../interface/ISendMailDTO';

// @Injectable()
// export class EtherealMailProvider implements IMailProviderEthereal {
//   constructor(
//     private readonly mailerService: MailerService,
//     private readonly mailTemplateProvider: IMailTemplateProvider,
//   ) {}

//   public async sendMail({
//     to,
//     from,
//     subject,
//     templateData,
//   }: ISendMailDTO): Promise<string> {
//     const message = await this.mailerService.sendMail({
//       from: `"Sender Name" <${from?.email}>`,
//       to: `"Recipient Name" <${to.email}>`,
//       subject,
//       html: await this.mailTemplateProvider.parse(templateData),
//     });

//     console.log('Message sent:', message.messageId);
//     return message;
//   }
// }
