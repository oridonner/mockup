/* eslint-disable @typescript-eslint/no-namespace */
import { IUser } from './interfaces';

declare global {
  namespace Express {
    interface User {
      issuer: string;
      sessionIndex: string;
      nameID: string;
      nameIDFormat: string;
    }

    interface Request {
      mockUser?: Partial<IUser>;
      invalidatedRefreshToken?: string;
      refreshToken?: string;
      newToken: string;
      newRefreshToken: string;
      iat: number;
      exp: number;
      userContext: any;
    }
  }
}

interface IncomingMessage {
  mockUser?: Partial<IUser>;
  invalidatedRefreshToken?: string;
  refreshToken?: string;
  newToken: string;
  newRefreshToken: string;
}
