import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MailerModule } from '@nestjs-modules/mailer';

@Module({
  imports: [
    MailerModule.forRoot({
      transport: {
        host: 'smtp.ethereal.email',
        port: 587,
        secure: false,
        auth: {
          user: 'cassidy.metz56@ethereal.email',
          pass: 'qB7uJfpZrhkfbWUbQh',
        },
      },
    }),
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
