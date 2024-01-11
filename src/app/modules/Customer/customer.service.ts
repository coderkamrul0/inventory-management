import { ICustomer } from './customer.interface';
import { Customer } from './customer.model';

const createCustomerIntoDB = async (payload: ICustomer) => {
  const result = await Customer.create(payload);
  return result;
};

const getAllCustomerFromDB = async () => {
  const result = await Customer.find();
  return result;
};

const getSingleCustomerFromDB = async (customerId: string) => {
  const result = await Customer.findById(customerId);
  return result;
};

const updateCustomerIntoDB = async (
  customerId: string,
  updateData: Partial<ICustomer>,
) => {
  const result = await Customer.findByIdAndUpdate(customerId, updateData, {
    new: true,
  });
  return result;
};

const deleteCustomerFromDB = async (customerId: string) => {
  const result = await Customer.findByIdAndDelete(customerId);
  return result;
};

export const customerService = {
  createCustomerIntoDB,
  getAllCustomerFromDB,
  updateCustomerIntoDB,
  deleteCustomerFromDB,
  getSingleCustomerFromDB,
};
