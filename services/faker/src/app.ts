import express, { Request, Response } from 'express';

import { router } from './routes';
import { Status } from './interfaces';

type MockDefenderResponse = Response<{
  error: boolean;
  status: Status;
  message: string;
  data?: any;
}>;

const baseApi = '/api/faker';

const app = express();

// health
app.all(
  `${baseApi}/health`,
  async (req: Request, res: MockDefenderResponse): Promise<void> => {
    res.status(Status.OK).send({
      error: false,
      status: Status.OK,
      message: 'Faker service is running 🏃‍♂️',
    });
    return;
  }
);

// routers
app.use(baseApi, router);

export { app };

export default app;
