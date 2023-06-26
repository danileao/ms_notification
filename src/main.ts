import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

console.log(process.env.MS_PORT);

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.TCP,
      options: {
        port: Number(process.env.MS_PORT) ?? 3002,
        host: process.env.MS_HOST ?? '127.0.0.1',
      },
    },
  );
  await app.listen();
}
bootstrap();
