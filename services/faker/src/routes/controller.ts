import {Request, Response} from 'express';
import casual from 'casual';

export const foolMe = (_req: Request, res: Response) => {
    const fakeData = {
      ip: casual.ip,
      domain: casual.domain,
      url: casual.url,
      email: casual.email,
      agent: casual.user_agent,
      something: casual.sentence,
    };
    res.send(fakeData);
  }