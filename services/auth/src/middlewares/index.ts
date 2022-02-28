import { NextFunction, Request, Response } from 'express';

export const handleRequestLogs = (
  req: Request,
  _res: Response,
  next: NextFunction
): void => {
  // eslint-disable-next-line no-console
  console.log({ url: req.url, body: req.body });
  next();
};
