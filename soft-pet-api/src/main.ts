import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';
import { validationFilter } from './modules/chore/filters';

const PORT = 3000

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  app.useGlobalPipes(new ValidationPipe({
    exceptionFactory: validationFilter
}))
  
  const config = new DocumentBuilder()
  .setTitle('SoftPet API')
  .setDescription('Documentação API SoftPet [Desafio Jr1 Softmakers]')
  .setVersion('0.1')
  .build();

  const document = SwaggerModule.createDocument(app, config)
  SwaggerModule.setup('api/docs', app, document)

  await app.listen(PORT);
}
bootstrap();