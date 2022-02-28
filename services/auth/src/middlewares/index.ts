import { NextFunction, Request, Response } from 'express';
import { createSimpleFileLogger } from 'simple-node-logger';

const logger = createSimpleFileLogger('./logs/auth.log');

export const handleRequestLogs = (
  req: Request,
  _res: Response,
  next: NextFunction
): void => {
  logger.info({ url: req.url, body: req.body });
  // eslint-disable-next-line no-console
  console.log({ url: req.url, body: req.body });
  next();
};
