import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const frontendUrl = process.env.FRONTEND_URL;
  app.enableCors({
    origin: (origin, callback) => {
      // allow non-browser tools / same-origin (no Origin header)
      if (!origin) return callback(null, true);

      // Production: allow any origin for now unless FRONTEND_URL is set
      if (process.env.NODE_ENV === 'production') {
        if (!frontendUrl) return callback(null, true);
        return callback(null, origin === frontendUrl);
      }

      // Development: explicit allowlist
      return callback(null, origin === 'http://localhost:3000');
    },
    credentials: true,
  });
  app.setGlobalPrefix('api');
  app.useGlobalPipes(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }));
  await app.listen(process.env.PORT || 3001);
}
bootstrap();
