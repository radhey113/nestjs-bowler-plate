import { NestFactory } from '@nestjs/core';
import { AppModule } from './init/init.module';
import { SwaggerModule } from '@nestjs/swagger';
import { createDocument } from './swagger/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('/api/v1');
  SwaggerModule.setup('api', app, createDocument(app));
  await app.listen(process.env.PORT);
}
bootstrap();
