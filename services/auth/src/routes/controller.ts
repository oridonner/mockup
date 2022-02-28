import { Request } from 'express';
import jwt from 'jsonwebtoken';

import { FakerResponse, Status } from '../interfaces';
import { users } from '../mockData';

const secret = process.env.SECRET ?? '';

export const handShake = async (
  req: Request,
  res: FakerResponse
): Promise<void> => {
  const token = req.cookies['faker-auth'] as string;

  try {
    const payload = jwt.verify(token, secret);
    res.send({
      error: false,
      status: 200,
      message: 'Hello nice to meet you. 🫂',
      data: { payload },
    });
  } catch (err) {
    res.send({
      error: false,
      status: 200,
      message: 'Hey I dont know you',
    });
  }
};

export const signIn = async (
  req: Request,
  res: FakerResponse
): Promise<void> => {
  const { email, password } = req?.body ?? {};

  const userExists = users.filter(
    (user) => user.email === email && user.password === password
  );

  if (userExists.length) {
    const token = jwt.sign(
      {
        username: email,
        id: userExists[0].id,
        fname: userExists[0].fname,
        lname: userExists[0].lname,
      },
      secret
    );
    res.cookie('faker-auth', token, {
      expires: new Date(Date.now() + 900000),
      httpOnly: true,
    });
    res.status(Status.OK).send({
      error: false,
      status: Status.OK,
      message: 'login success',
      data: {
        username: email,
        id: userExists[0].id,
        fname: userExists[0].fname,
        lname: userExists[0].lname,
      },
    });
  } else {
    res.status(Status.UNAUTHORIZED).send({
      error: true,
      status: Status.UNAUTHORIZED,
      message: 'wrong details',
    });
  }
};

export const signOut = async (
  req: Request,
  res: FakerResponse
): Promise<void> => {
  res.cookie('faker-auth', '', {
    expires: new Date(),
  });
  res.send({
    error: false,
    status: 200,
    message: 'user logged out',
  });
};
