// import { Injectable, Inject } from '@nestjs/common';
// import { Transporter } from 'nodemailer';
// import aws from 'aws-sdk';
// import mailConfig from '@config/mail';
// import { MailerOptions, MailerOptionsFactory } from '@nestjs-modules/mailer';
// import { IMailTemplateProvider } from '../providers/MailTemplateProvider/models/IMailTemplateProvider';
// import { ISendMailDTO } from '../dtos/ISendMailDTO';

// @Injectable()
// export class SESMailProvider implements MailerOptionsFactory {
//   private client: Transporter;

//   constructor(
//     @Inject('MailTemplateProvider')
//     private mailTemplateProvider: IMailTemplateProvider,
//   ) {
//     this.client = nodemailer.createTransport({
//       SES: new aws.SES({
//         apiVersion: '2010-12-01',
//         region: process.env.AWS_DEFAULT_REGION,
//       }),
//     });
//   }

//   async createMailerOptions(): Promise<MailerOptions> {
//     return {
//       transport: this.client,
//       defaults: {
//         from: {
//           name: mailConfig.defaults.from.name,
//           address: mailConfig.defaults.from.email,
//         },
//       },
//       template: {
//         dir: 'src/path/to/templates', // Diretório dos templates de e-mail
//         adapter: new HandlebarsAdapter(), // Adaptador para usar templates Handlebars
//       },
//     };
//   }

//   async sendMail(data: ISendMailDTO): Promise<void> {
//     const { to, from, subject, templateData } = data;

//     await this.client.sendMail({
//       from: {
//         name: from?.name || mailConfig.defaults.from.name,
//         address: from?.email || mailConfig.defaults.from.email,
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
