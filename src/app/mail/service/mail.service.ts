import { Global, Injectable } from '@nestjs/common';
import IMailTemplateProvider from '../interface/MailTemplateProvider/IMailTemplateProvider';
import IMailProvider from '../interface/MailProvider/IMailProvider';
import ISendMailDTO from '../interface/ISendMailDTO';
import { MailerService } from '@nestjs-modules/mailer';

@Global() // 👈 optional to make module global
@Injectable()
export class MailService implements IMailProvider {
  constructor(
    private mailerService: MailerService,
    private mailTemplateProvider: IMailTemplateProvider,
  ) {}

  async sendMail({
    to,
    from,
    subject,
    templateData,
  }: ISendMailDTO): Promise<void> {
    await this.mailerService.sendMail({
      from: {
        name: 'Humberto Henrique',
        address: 'humberto.araripe12@gmail.com',
      },
      to: {
        name: 'Humberto Henrique',
        address: 'humberto.araripe12@gmail.com',
      },
      subject,
      html: await this.mailTemplateProvider.parse(templateData),
    });
  }
}
