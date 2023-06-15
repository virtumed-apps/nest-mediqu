import { Injectable } from '@nestjs/common';
import * as handlebars from 'handlebars';
import * as fs from 'fs-extra';
import IParseMailTemplateDTO from '../interface/IParseMailTemplateDTO';
import IMailTemplateProvider from '../interface/MailTemplateProvider/IMailTemplateProvider';

@Injectable()
export class HandlebarsMailTemplateProvider implements IMailTemplateProvider {
  public async parse({
    file,
    variables,
  }: IParseMailTemplateDTO): Promise<string> {
    const templateFileContent = await fs.readFile(file, { encoding: 'utf-8' });
    const parseTemplate = handlebars.compile(templateFileContent);
    return parseTemplate(variables);
  }
}
