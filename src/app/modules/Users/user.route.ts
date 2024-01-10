import { userController } from './user.controller';
import express from 'express';
import { userValidationSchema } from './user.validation';
import validateRequest from '../../middleware/validateRequest';

const router = express.Router();

router.post(
  '/register',
  validateRequest(userValidationSchema),
  userController.createUser,
);

export const userRoutes = router;
