import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { userService } from './user.service';

const createUser = catchAsync(async (req, res) => {
  const result = await userService.createUserIntoDB(req.body);
  const userResponse = { name: result.name, email: result.email };
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Register successfully',
    data: userResponse,
  });
});

export const userController = {
  createUser,
};
