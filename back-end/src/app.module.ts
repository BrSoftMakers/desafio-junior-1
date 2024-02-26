import { Module } from '@nestjs/common';
import { ClientModule } from './module/client/client.module';

@Module({
  imports: [ClientModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
