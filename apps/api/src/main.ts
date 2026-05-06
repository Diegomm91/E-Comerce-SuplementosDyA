import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Configuración de CORS simplificada para evitar bloqueos
  app.enableCors({
    origin: true, // Permite cualquier origen (útil para desarrollo y pruebas en Railway)
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  });

  // Prefijo global para que todas las rutas empiecen con /api
  app.setGlobalPrefix('api');

  // Configuración de validaciones globales
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true, // Recomendado para transformar tipos en los DTOs
    }),
  );

  // Puerto dinámico para Railway o 3001 por defecto
  const port = process.env.PORT || 3001;
  await app.listen(port);
  
  console.log(`Application is running on: http://localhost:${port}/api`);
}
bootstrap();