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

export const customerController = {
  createCustomer,
};
