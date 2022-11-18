import { Router } from 'express';
import nodemailer from 'nodemailer';
import { prisma } from './prisma';

export const routes = Router();

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "94562f537c158a",
    pass: "af008be3643d8b"
  }
});

routes.post('/feedbacks', async (request, response) => {
  const { type, comment, screenshot } = request.body;
  const feedback = await prisma.feedback.create({
    data: { type, comment, screenshot }
  });
  await transport.sendMail({
    from: 'Feedget Team <hey@feedget.com>',
    to: 'Rayan Wilbert <ray@gmail.com>',
    subject: 'New feedback',
    html: [
      `<div style="font-family: sans-serif; font-size: 16px; color: #111;"></div>`,
      `<p>Feedback type: ${type}</p>`,
      `<p>Comment: ${comment}</p>`,
    ].join('\n')
  });
  return response.status(201).json({ data: feedback });
});

