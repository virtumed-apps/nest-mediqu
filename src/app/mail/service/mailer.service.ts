import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';
import IMailProvider from '../interface/MailProvider/IMailProvider';
import ISendMailDTO from '../interface/ISendMailDTO';

@Injectable()
export class MailService implements IMailProvider {
  constructor(private readonly mailerService: MailerService) {}

  public async sendMail({ to, from, subject }: ISendMailDTO): Promise<void> {
    await this.mailerService.sendMail({
      to,
      from,
      subject,
      template: './confirmation', // `.hbs` extension is appended automatically
    });
  }
}
