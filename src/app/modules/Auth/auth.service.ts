import httpStatus from 'http-status';
import AppError from '../../error/AppError';
import { User } from '../Users/user.model';
import { ILoginUser } from './auth.interface';
import { createToken } from './auth.utils';
import config from '../../config';

const loginUser = async (payload: ILoginUser) => {
  const user = await User.isUserExistsByCustomEmail(payload.email);
  if (!user) {
    throw new AppError(httpStatus.NOT_FOUND, 'User not found !');
  }

  const userStatus = user?.status;
  if (userStatus === 'blocked') {
    throw new AppError(httpStatus.FORBIDDEN, 'This user is blocked !');
  }

  if (!(await User.isPasswordMatched(payload?.password, user?.password)))
    throw new AppError(httpStatus.FORBIDDEN, 'Password do not matched');

  const jwtPayload = {
    userEmail: user.email,
  };

  const accessToken = createToken(
    jwtPayload,
    config.jwt_access_secret as string,
    config.jwt_access_expires_in as string,
  );
  return { accessToken };
};

export const authService = {
  loginUser,
};
