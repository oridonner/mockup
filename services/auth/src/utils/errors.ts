export abstract class BDError extends Error {
  status: number;

  constructor(message = '[Error]: internal server error') {
    super(message);
    // eslint-disable-next-line no-console
    console.log('Error: Bd Error Thrown', { error: this, message });
  }
}

export class ServerError extends BDError {
  status: number;

  constructor(message = 'internal server error', code = 500) {
    super(message);
    this.status = code;
  }
}

export class ClientError extends BDError {
  status: number;

  constructor(message: string, code = 400) {
    super(message);
    this.status = code;
  }
}
