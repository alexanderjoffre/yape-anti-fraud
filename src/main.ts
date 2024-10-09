import { NestFactory } from '@nestjs/core';
import { AppModule } from './modules/app.module';
import { Swagger } from './classes/Swagger.class';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  Swagger.config(app);
  await app.listen(3000);
}
bootstrap();
