export interface IUser {
  name: string;
  email: string;
  password: string;
  status?: 'active' | 'inActive';
  isDeleted?: boolean;
}
