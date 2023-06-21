import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './shared/main/app.module';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.useStaticAssets(join(__dirname, '..', 'static'));
  // Habilitando o CORS na aplicação
  app.enableCors({
    credentials: true,
    allowedHeaders: '*',
    origin: '*',
  });

  // Para conseguir pegar o protocolo https
  app.set('trust proxy', 1);

  // Configurando o mecanismo de visualização para o Handlebars
  app.setViewEngine('hbs');

  // Adicionando o ValidationPipe global à aplicação
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  );

  // Documentação Swagger
  const init = new DocumentBuilder()
    .setTitle('API - VIRTUMED')
    .setDescription('APLICAÇÃO PARA MÉDICOS')
    .setVersion('1.0.0')
    .addTag('status')
    .addTag('user')
    .addTag('user-token')
    .addTag('admin')
    .addTag('appointment')
    .addTag('security')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, init);

  SwaggerModule.setup('docs', app, document);

  await app.listen(3333, '0.0.0.0');

  console.log(`\n 🚀 Server is running on!  ${process.env.BASE_URL}/docs`);
}

bootstrap();
