import express from 'express';
import validateRequest from '../../middleware/validateRequest';
import { customerValidationSchema } from './customer.validation';
import { customerController } from './customer.controller';

const router = express.Router();

router.post(
  '/create',
  validateRequest(customerValidationSchema.createCustomerValidationSchema),
  customerController.createCustomer,
);

export const customerRoutes = router;
