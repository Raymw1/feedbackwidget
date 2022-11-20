import nodemailer from 'nodemailer';
import { MailAdapter, sendMailData } from "../mail-adapter";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "94562f537c158a",
    pass: "af008be3643d8b"
  }
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ subject, body }: sendMailData) {
    await transport.sendMail({
      from: 'Feedget Team <hey@feedget.com>',
      to: 'Rayan Wilbert <ray@gmail.com>',
      subject,
      html: body,
    });
  }
}
