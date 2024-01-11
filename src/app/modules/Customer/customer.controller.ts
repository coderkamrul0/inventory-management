import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { customerService } from './customer.service';

const createCustomer = catchAsync(async (req, res) => {
  const result = await customerService.createCustomerIntoDB(req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Customer Created successfully',
    data: result,
  });
});
const getAllCustomer = catchAsync(async (req, res) => {
  const result = await customerService.getAllCustomerFromDB();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Customer retrieved successfully',
    data: result,
  });
});

const getSingleCustomer = catchAsync(async (req, res) => {
  const { customerId } = req.params;
  const result = await customerService.getSingleCustomerFromDB(customerId);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Customer retrieved successfully',
    data: result,
  });
});

const updateCustomer = catchAsync(async (req, res) => {
  const { customerId } = req.params;
  const result = await customerService.updateCustomerIntoDB(
    customerId,
    req.body,
  );
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Customer Updated successfully',
    data: result,
  });
});
const deleteCustomer = catchAsync(async (req, res) => {
  const { customerId } = req.params;
  const result = await customerService.deleteCustomerFromDB(customerId);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Customer delete successfully',
    data: result,
  });
});

export const customerController = {
  createCustomer,
  getAllCustomer,
  updateCustomer,
  deleteCustomer,
  getSingleCustomer,
};
