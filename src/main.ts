import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule); 
  const config = new DocumentBuilder()
    .setTitle('BitKabir Gateway')
    .setDescription('MVP for consulting TX Kabir resource')
    .setVersion('0.1')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/docs', app, document);

  app.enableCors({
    
    // em dev
    origin: true,
    credentials: true
  });

  app.get<ConfigService>(ConfigService);
  await app.listen(process.env.PORT ?? 3001);
}
bootstrap();
