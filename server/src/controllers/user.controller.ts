import { Response } from 'express';
import { IUser } from '../models';
import UserService from '../services/user';
import AuthenticatedRequest from '../interfaces/AuthenticatedRequest';
import MessageResponse from '../interfaces/MessageResponse';

/**
 *
 * @param req
 * @param res
 * @returns { IUser } the queried user
 */
async function getUser(
  req: AuthenticatedRequest,
  res: Response<{ user: IUser } | MessageResponse>,
) {
  const { user } = req;
  if (!user) {
    res.status(401).send({ message: 'User not attached to request' });
  }

  return res.status(200).json({ user });
}

/**
 *
 * @param req
 * @param res
 * @returns { string } successfull 204 status and message
 */
async function createUser(req: AuthenticatedRequest<IUser>, res: Response) {
  const { email, password } = req.body;

  await UserService.createNewUser(email, password);

  return res.status(200).json({ message: 'User successfully created' });
}

export default {
  getUser,
  createUser,
};
