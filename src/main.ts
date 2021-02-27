import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {DocumentBuilder, SwaggerModule} from "@nestjs/swagger";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
      .addBearerAuth()
      .setTitle('Zipbak api Docs')
      .setDescription('The zipbak API description')
      .setVersion('1.0')
      .addTag('zipbak')
      .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);

  app.useGlobalPipes(new ValidationPipe({ forbidUnknownValues: true }));
  app.enableCors();
  await app.listen(3000);
}
bootstrap();
