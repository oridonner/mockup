import { Response } from 'express';

export enum Status {
  OK = 200,
  CREATED = 201,
  ACCEPTED = 202,
  NO_HASH = 203,
  FOUND = 302,
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  FORBIDDEN = 403,
  NOT_FOUND = 404,
  CONFLICT = 409,
  IM_A_TEAPOT = 418,
  INTERNAL_ERROR = 500,
}

export type FakerResponse = Response<{
  error: boolean;
  status: Status;
  message: string;
  data?: any;
}>;
