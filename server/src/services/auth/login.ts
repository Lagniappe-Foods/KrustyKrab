import jwt, { Secret } from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { User, IUser } from '../../models';
import { HttpError } from '../../util/Errors';

// This just creates the users access + refresh tokens, nothing more
export async function login(email: string, password: string) {
  // Check if all fields are present
  if (!email || !password) {
    throw new HttpError('All fields are required', {
      status: 400,
      friendlyMessage: 'All fields are required',
    });
  }

  // Check if user exists
  const foundUser: IUser | null = await User.findOne({ email });
  if (!foundUser) {
    throw new HttpError('User does not exist', {
      status: 401,
      friendlyMessage: 'Email does not exist',
    });
  }

  // Check to see if password matches
  const match = await bcrypt.compare(password, foundUser.password || '');
  if (!match) {
    throw new HttpError('Incorrect password', {
      status: 401,
      friendlyMessage: 'Incorrect password',
    });
  }

  // Create access token with user object
  const accessToken = jwt.sign(
    { user: foundUser },
    process.env.ACCESS_TOKEN_SECRET as Secret,
    { expiresIn: '1h' }, // 1h until refresh is used to make new access token
  );

  // Create refresh token
  const refreshToken = jwt.sign(
    { user: foundUser },
    process.env.REFRESH_TOKEN_SECRET as Secret,
    {
      expiresIn: '5d', // Require user to login and get new refresh token every 5 days
    },
  );

  return { refreshToken, accessToken };
}
