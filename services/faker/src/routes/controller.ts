import { Request, Response } from 'express';
import casual from 'casual';
import { createSimpleFileLogger } from 'simple-node-logger';

const logger = createSimpleFileLogger('./logs/faker.log');

export const foolMe = (_req: Request, res: Response): void => {
  const fakeData = {
    ip: casual.ip,
    domain: casual.domain,
    url: casual.url,
    email: casual.email,
    agent: casual.user_agent,
    something: casual.sentence,
  };
  res.send(fakeData);
};

export const forbidden = (_req: Request, res: Response): void => {
  logger.info({
    message: 'Faker forbidden endpoint was reached',
    time: Date.now(),
  });

  res.send({ message: 'Faker forbidden endpoint was reached' });
};
