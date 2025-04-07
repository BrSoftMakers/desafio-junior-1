import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Libera CORS para qualquer origem (⚠️ cuidado em produção)
  //app.enableCors({ origin: 'https://meusite.com' });
  app.enableCors();


  const config = new DocumentBuilder()
    .setTitle('Petshop API')
    .setDescription('API para gerenciamento de pets')
    .setVersion('1.0')
    .addTag('pets')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(process.env.PORT ?? 1881, '0.0.0.0');
}
bootstrap();

