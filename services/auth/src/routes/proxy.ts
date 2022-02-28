/* eslint-disable no-console */

import jwt from 'jsonwebtoken';
import { Request, Response, Application, NextFunction } from 'express';
import { createProxyMiddleware } from 'http-proxy-middleware';

import { users } from '../mockData';

const baseApi = '/api';
const secret = process.env.SECRET ?? '';

const isLoggedIn = () => (req: Request, res: Response, next: NextFunction) => {
  const token = req.cookies['faker-auth'] as string;

  try {
    const { id, username } = jwt.verify(token, secret) as {
      id: number;
      username: string;
      fname: string;
      lname: string;
    };

    if (!id) {
      res.send({
        error: false,
        status: 200,
        message: 'Please authenticate',
      });
      return;
    }

    if (!users.filter((user) => user.id === id).length) {
      res.send({
        error: false,
        status: 200,
        message: 'Please authenticate',
      });
      return;
    }

    if (!users.filter((user) => user.email === username).length) {
      res.send({
        error: false,
        status: 200,
        message: 'Please authenticate',
      });
      return;
    }

    return next();
  } catch (err) {
    res.send({
      error: false,
      status: 200,
      message: 'Please authenticate',
    });
  }
  return next();
};

const proxies: [[string, number, string]] = [
  [process.env.FAKER_SERVICE_HOST ?? 'faker', 5000, 'faker'],
];

export const useProxies = (app: Application): void => {
  console.log(`[PROXY] proxies: ${JSON.stringify(proxies)} (useProxies)`);

  app.use(isLoggedIn());

  for (const proxy of proxies) {
    useProxy(app, proxy);
  }
};

const useProxy = (
  app: Application,
  [domain, port, endpoint]: [string, number, string]
) => {
  const target = `http://${domain}:${port}/`;

  console.log('[PROXY] target is', `${target}`);

  const apiProxy = createProxyMiddleware({
    changeOrigin: false,
    logLevel: 'debug',
    target,
  });

  app.use(`${baseApi}/${endpoint}`, apiProxy);
};
