import { TransformInterceptor } from './transform.interceptor';
import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
import * as cors from 'cors';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalInterceptors(new TransformInterceptor());
  // Enable CORS
  app.enableCors();
  app.use(
    cors({
      origin: 'http://localhost:5173',
    }),
  );
  const port = '3000';
  Logger.log(`Application is running on port : ${port}`);
  await app.listen(port);
}
bootstrap();
