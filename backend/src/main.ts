import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { ValidationPipe } from '@nestjs/common'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  app.setGlobalPrefix('/api/v1')
  app.useGlobalPipes(new ValidationPipe({ transform: true }))
  await app.listen(3333)
}
bootstrap()
