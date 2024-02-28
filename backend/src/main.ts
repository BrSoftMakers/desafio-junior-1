import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: 'http://localhost:3001', // Permitindo acesso apenas do localhost:3001
    credentials: true, // Permitindo credenciais (por exemplo, cookies)
  });
  await app.listen(3000);
  
}
bootstrap();
