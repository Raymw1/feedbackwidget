import { prisma } from './prisma';
import { Router, Request, Response } from 'express';

const routes = Router();

routes.post('/feedbacks', async (request: Request, response: Response) => {
  const { type, comment, screenshot } = request.body;
  const feedback = await prisma.feedback.create({
    data: { type, comment, screenshot }
  });
  return response.status(201).json({ data: feedback });
});

export { routes };
