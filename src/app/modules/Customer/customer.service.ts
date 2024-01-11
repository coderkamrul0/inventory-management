import { ICustomer } from './customer.interface';
import { Customer } from './customer.model';

const createCustomerIntoDB = async (payload: ICustomer) => {
  const result = await Customer.create(payload);
  return result;
};

export const customerService = {
  createCustomerIntoDB,
};
