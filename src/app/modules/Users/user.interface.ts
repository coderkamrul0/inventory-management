/* eslint-disable no-unused-vars */
import { Model } from 'mongoose';

export interface IUser {
  id: string,
  name: string;
  email: string;
  password: string;
  status?: 'active' | 'blocked';
  isDeleted?: boolean;
}

export interface UserModel extends Model<IUser> {
  //instance methods for checking if the user exist
  isUserExistsByCustomEmail(email: string): Promise<IUser>;
  //instance methods for checking if passwords are matched
  isPasswordMatched(
    plainTextPassword: string,
    hashedPassword: string,
  ): Promise<boolean>;
}
