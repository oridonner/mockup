import express, { Request, Response } from 'express';
import helmet from 'helmet';
import cors from 'cors';
import cookieParser from 'cookie-parser';

import { router, useProxies } from './routes';
import { Status } from './interfaces';
import { handleRequestLogs } from './middlewares/index';

type MockDefenderResponse = Response<{
  error: boolean;
  status: Status;
  message: string;
  data?: any;
}>;

const baseApi = '/api/auth';

const app = express();

app.use(helmet());
app.use(
  cors({
    credentials: true,
    // origin: [configs.common.clientUrl, configs.common.adminClientUrl],
  })
);

app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());
//
app.use(cookieParser());

app.use(handleRequestLogs);
// health
app.all(
  `${baseApi}/health`,
  async (req: Request, res: MockDefenderResponse): Promise<void> => {
    res.status(Status.OK).send({
      error: false,
      status: Status.OK,
      message: 'Auth service is running 🏃‍♂️',
    });
    return;
  }
);

// routers
app.use(baseApi, router);

useProxies(app);

export { app };

export default app;
