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
     .addApiKey(
        { type: 'apiKey', name: 'x-api-key', in: 'header' }, 
        'api-key',
      )
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api-docs', app, document);

  app.enableCors({
    origin: true,
    credentials: true
  });

  app.get<ConfigService>(ConfigService);

  const port = process.env.PORT ?? 3000;
  await app.listen(port, '0.0.0.0');
  console.log(`Application is running on: ${port}`);

}
bootstrap();
