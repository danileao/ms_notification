import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { EventPattern } from '@nestjs/microservices';
import { MailerService } from '@nestjs-modules/mailer';

type NotificationDTO = {
  email: string;
  startAt: Date;
  endAt: Date;
  name: string;
  title: string;
  description: string;
};

@Controller()
export class AppController {
  constructor(private mailerService: MailerService) {}

  @EventPattern('task_notification')
  async taskNotification(data: NotificationDTO) {
    // console.log(data);
    const result = await this.mailerService.sendMail({
      to: data.email,
      subject: 'Notificação de tarefa',
      from: 'taskmanager@nestjscurso.com.br',
      html: `
        <body>
            <h1>Olá ${data.name} </h1>

            <span>Você tem uma tarefa para hoje</span>
            <br/>
            <span>Título: ${data.title}</span>
            <br/>
            <span>Descrição: ${data.description}</span>
            <br/>
            <span>Início: ${data.startAt}</span>
            <br/>
            <span>Fim: ${data.endAt}</span>
        </body>
      `,
    });
    console.log(result);
  }
}
