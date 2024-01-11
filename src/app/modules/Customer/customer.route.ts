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
router.get('/', customerController.getAllCustomer);

router.get('/:customerId', customerController.getSingleCustomer);

router.patch(
  '/:customerId',
  validateRequest(customerValidationSchema.updateCustomerValidationSchema),
  customerController.updateCustomer,
);

router.delete('/:customerId', customerController.deleteCustomer);

export const customerRoutes = router;
