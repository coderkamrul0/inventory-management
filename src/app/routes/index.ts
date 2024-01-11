import { Router } from 'express';
import { userRoutes } from '../modules/Users/user.route';
import { AuthRoutes } from './../modules/Auth/auth.route';
import { customerRoutes } from '../modules/Customer/customer.route';

const router = Router();

const moduleRoutes = [
  {
    path: '/users',
    route: userRoutes,
  },
  {
    path: '/auth',
    route: AuthRoutes,
  },
  {
    path: '/customer',
    route: customerRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
