import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';


/*async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    allowedHeaders: ['content-type'],
    origin: 'http://localhost:3000',
    credentials: true,
  });

  await app.listen(3000, () => {
    console.log(`Server is running on http://localhost:${3000}`);
  });
}*/
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  // Enable CORS if needed
  app.enableCors({
    allowedHeaders: ['content-type'],
    origin: 'https://idealtimer-a71f0.web.app', // Update with your frontend's URL
    credentials: true,
  });

  // Use global validation pipe
  app.useGlobalPipes(new ValidationPipe({ transform: true }));

  // Get ConfigService to access environment variables
  const configService = app.get(ConfigService);

  // Access environment variables
  const port = configService.get<number>('PORT') || 3000;

  // Start the application
  await app.listen(port);
}
bootstrap();
